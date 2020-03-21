var currentStep = 1;
var trendData = [{ "day": 0, "cases": 1 },
                 { "day": 1, "cases": 1 },
                 { "day": 2, "cases": 1 },
                 { "day": 3, "cases": 2 },
                 { "day": 4, "cases": 3 },
                 { "day": 5, "cases": 5 }               
                 ]; //TODO: Hari this data needs to come from the model

$(document).ready(function () {
    initializeDrawView();
});


function initializeDrawView() {
    document.getElementById("showMe").disabled = true;
    _.range(6, 36).forEach((v, i) => {
        trendData.push({ "day": v, "cases": 10 });
    });//TODO: Hari this data needs to come from the model

    var width = Math.min($("#panel1Chart1").width(), 700);
    var height = Math.min($("#panel1Chart1").width() * 0.6, 400);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    var margin = { left: 70, right: 50, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#panel1Chart1');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });


    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 0 });

    c.x.domain([0, 35]);
    c.y.domain([0, 100]);


    c.xAxis.ticks().tickFormat(f());
    c.yAxis.ticks(5).tickFormat(d => d + '%');
    c.drawAxis(); 
    //add the X gridlines
    c.svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(make_x_gridlines()
            .tickSize(-height)
            .tickFormat("")
        );

    // add the Y gridlines
    c.svg.append("g")
        .attr("class", "grid")
        .call(make_y_gridlines()
            .tickSize(-width + margin.left + margin.right)
            .tickFormat("")
    );

    c.svg.append("text")
        .attr("class", "label")
        .attr("transform", "translate(" + width*.42 + "," + (height+margin.top +20) + ")")
        .style("text-anchor", "middle")
        .text("Days since first case of coronavirus");

    c.svg.append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - height / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Number of Cases");  


    var area = d3.area().x(f('day', c.x)).y0(f('cases', c.y)).y1(c.height);
    var line = d3.area().x(f('day', c.x)).y(f('cases', c.y)).curve(d3.curveMonotoneX);

    var clipRect = c.svg
        .append('clipPath#clip')
        .append('rect')
        .at({ width: c.x(5) - 2, height: c.height });

    var correctSel = c.svg.append('g').attr('clip-path', 'url(#clip)');

    correctSel.append('path.area').at({ d: area(trendData) });
    correctSel.append('path.line').at({ d: line(trendData) });
    yourDataSel = c.svg.append('path.your-line');



    yourData = trendData
        .map(function (d) { return { day: d.day, cases: d.cases, defined: 0 };})
        .filter(function (d) {
            if (d.day === 5)
                d.defined = true;
            return d.day >= 5;
        });

    // gridlines in x axis function
    function make_x_gridlines() {
        return c.xAxis.ticks().tickFormat(f());
    }

    // gridlines in y axis function
    function make_y_gridlines() {
        return d3.axisLeft(y)
            .ticks(10);
    }


    var completed = false;

    var drag = d3.drag()
        .on('drag', function () {
            var pos = d3.mouse(this);
            var day = clamp(6, 35, c.x.invert(pos[0]));
            var cases = clamp(0, c.y.domain()[1], c.y.invert(pos[1]));

            yourData.forEach(function (d) {
                if (Math.abs(d.day - day) < .5) {
                    d.cases = cases;
                    d.defined = true;
                }
            });

            yourDataSel.at({ d: line.defined(f('defined'))(yourData) });

            if (!completed && d3.mean(yourData, f('defined')) === 1) {
                completed = true;
                document.getElementById("showMe").disabled = false;
            }
        });

    c.svg.call(drag);

    $("#showMe").on('pointerdown', function () {
        if ($(this).attr('disabled')) {
            return;
        }
        clipRect.transition().duration(1000).attr('width', c.x(35));
    });

    function clamp(a, b, c) { return Math.max(a, Math.min(b, c)); }

}




// HELPER FUNCTIONS



//https://bl.ocks.org/EE2dev/23bee6f066449d8edc3087ce18ec35fa
// https://bl.ocks.org/EE2dev/5e553c5b50d2b12d2d3d707c89c849f2