var currentStep = 1;
var trendData = [{ "day": 1, "cases": 1 },
                 { "day": 2, "cases": 1 },
                 { "day": 3, "cases": 2 },
                 { "day": 4, "cases": 5 },
                 { "day": 5, "cases": 7 }               
                 ]; //TODO: Hari this data needs to come from the model

$(document).ready(function () {
    initializeDrawView();
});


function initializeDrawView() {
    _.range(6, 35).forEach((v, i) => {
        trendData.push({ "day": v, "cases": 10 });
    });//TODO: Hari this data needs to come from the model



    var f = d3.f;

    var sel = d3.select('#panel1Chart1');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth:960,
        height: 400,
        margin: { left: 50, right: 50, top: 30, bottom: 30 }
    });

    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 0 });

    c.x.domain([1, 35]);
    c.y.domain([0, 100]);

    c.xAxis.ticks().tickFormat(f());
    c.yAxis.ticks(5).tickFormat(d => d + '%');

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

    c.drawAxis();

    yourData = trendData
        .map(function (d) { return { day: d.day, cases: d.cases, defined: 0 };})
        .filter(function (d) {
            if (d.day === 5)
                d.defined = true;
            return d.day >= 5;
        });

    var completed = false;

    var drag = d3.drag()
        .on('drag', function () {
            var pos = d3.mouse(this);
            var day = clamp(6, 36, c.x.invert(pos[0]));
            var cases = clamp(0, c.y.domain()[1], c.y.invert(pos[1]));

            yourData.forEach(function (d) {
                if (Math.abs(d.day - day) < .5) {
                    d.cases = cases;
                    d.defined = true;
                }
            });

            yourDataSel.at({ d: line.defined(f('defined'))(yourData) });

            //if (!completed && d3.mean(yourData, f('defined')) === 1) {
            //    completed = true;
            //    clipRect.transition().duration(1000).attr('width', c.x(35));
            //}
        });

    c.svg.call(drag);



    function clamp(a, b, c) { return Math.max(a, Math.min(b, c)); }

}




// HELPER FUNCTIONS



//https://bl.ocks.org/EE2dev/23bee6f066449d8edc3087ce18ec35fa
// https://bl.ocks.org/EE2dev/5e553c5b50d2b12d2d3d707c89c849f2