var currentStep = 1;
var simulationData;
var trendData = []; 

$(window).on('load', function () {
    simulationData = simulate({
        "nDays": 35,
        "populationSize": 200,
        "propInfected": 0.01,
        "propImmuComp": 0.028,
        "interactionsPerDay": 10
    });
    trendData = simulationData
        .map(function (d) { return { day: d.day, cases: d.nSymptomatic }; });

        
    initializeDrawView();
});


function initializeDrawView() {
    document.getElementById("showMe").disabled = true;


    var width = Math.min($("#panel1Chart1").width(), 700);
    var height = Math.min($("#panel1Chart1").width() * 0.6, 400);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scalePow().range([height, 0]);
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

    c.x.domain([1, d3.max(trendData, function (d) { return d.day; })]);
    c.y.domain([0, d3.max(trendData, function (d) { return d.cases; })]);


    c.xAxis.ticks().tickFormat(f());
    c.yAxis.ticks(5).tickFormat(f());
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
        .attr("transform", "translate(" + width*.4 + "," + (height+margin.top +20) + ")")
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
    var line = d3.area().x(f('day', c.x)).y(f('cases', c.y));

    var clipRect = c.svg
        .append('clipPath#clip')
        .append('rect')
        .at({ width: c.x(5) - 2, height: c.height });

    var correctSel = c.svg.append('g').attr('clip-path', 'url(#clip)');

    correctSel.append('path.area').at({ d: area(trendData) });
    correctSel.append('path.line').at({ d: line(trendData) });
    yourDataSel = c.svg.append('path.your-line');


    c.svg.append('circle').attrs({
        "r": 6,
        "cx": c.x(trendData[4].day),
        "cy": c.y(trendData[4].cases)
    }).style("fill", "#ff6a00");

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

            // fix for inbetween gaps
            yourData.forEach(function (d, i) {
                if (!d.defined && yourData[i - 1].defined && yourData[i + 1] && yourData[i + 1].defined) {
                    d.cases = yourData[i - 1].cases + (yourData[i + 1].cases - yourData[i - 1].cases) / 2;
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
