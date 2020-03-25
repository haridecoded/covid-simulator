var caseData = [];


$(document).ready(function () {

    setupNeighborhood();
    initializeLineGraph();

});


function setupNeighborhood() {

    var n = new Neighborhood("chart1");

}


function initializeLineGraph() {
    $("#chart2").empty();
    var width = Math.min($("#chart2").width(), 700);
    var height = Math.min($("#chart2").width() * 0.6, 500);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scalePow().range([height, 0]);
    var margin = { left: 50, right: 0, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#chart2');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });

    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 0 });

    c.x.domain([1, 31]);
    c.y.domain([0, 300]);


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

    // add x-axis label
    c.svg.append("text")
        .attr("class", "label")
        .attr("transform", "translate(" + width * .4 + "," + (height + margin.top + 20) + ")")
        .style("text-anchor", "middle")
        .text("Days since first case of coronavirus");

    // add the Y gridlines
    c.svg.append("g")
        .attr("class", "grid")
        .call(make_y_gridlines()
            .tickSize(-width + margin.left + margin.right)
            .tickFormat("")
        );

    // add y-axis label
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

    var correctSel = c.svg.append('g').attr('clip-path', 'url(#clip)');

    correctSel.append('path.area').at({ d: area(caseData) });
    correctSel.append('path.line').at({ d: line(caseData) });
    yourDataSel = c.svg.append('path.your-line');

    // gridlines in x axis function
    function make_x_gridlines() {
        return c.xAxis.ticks().tickFormat(f());
    }

    // gridlines in y axis function
    function make_y_gridlines() {
        return d3.axisLeft(y)
            .ticks(10);
    }


    var threshold = 30;
    // hospital threshold line
    c.svg.append("line")
        .attr("id", "threshold")
        .attr("stroke-width", 2)
        .attr("stroke", "#b9003e")
        .attr("x1", c.x(1))
        .attr("y1", c.y(threshold))
        .attr("x2", c.x(31))
        .attr("y2", c.y(threshold));

    // hospital threshold text
    c.svg.append("text")
        .attr("class", "label")
        .attr("id", "thresholdLabel")
        .attr("transform", "translate(" + width * .3 + "," + (c.y(threshold) - 10) + ")")
        .style("text-anchor", "middle")
        .text("Number of hospital beds available");
}


class Neighborhood {

    constructor(containerId) {
        this.houses = [];
        this.idGen = new IDGen();

        this.init(containerId);
    }

    init(containerId) {
        $("#" + containerId).empty();
        var width = Math.min($("#" + containerId).width(), 700);
        var height = Math.min($("#" + containerId).width() * 0.6, 500);
        var margin = { left: 10, right: 10, top: 10, bottom: 10 };

        var f = d3.f;
        var sel = d3.select("#" + containerId);
        var c = d3.conventions({
            parentSel: sel,
            totalWidth: width,
            height: height,
            margin: margin
        });

        c.svg.append('rect').at({ width: c.width, height: c.height }).attrs({
            "fill": "transparent",
            "stroke-width": 1,
            "stroke": "black"
        });

        // creates houses
        var hWidth = (width - 11 * 12) / 11;
        var hHeight = (height - 7 * 12) / 7;
        var hMargin = 10;           
        
        this.houses.push({ id: this.idGen.generate(), x: hMargin, y: hMargin, width: hWidth, height: hHeight });
        this.houses.push({ id: this.idGen.generate(), x: hMargin, y: hMargin * 2 + hHeight, width: hWidth, height: hHeight });        
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 2 + hWidth, y: hMargin * 2 + hHeight, width: hWidth, height: hHeight  });       
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 2 + hWidth, y: hMargin, width: hWidth, height: hHeight });
        this.houses.push({ id: this.idGen.generate(), x: hMargin, y: hMargin * 3 + hHeight * 3, width: hWidth, height: hHeight});
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 2 + hWidth, y: hMargin * 3 + hHeight * 3, width: hWidth, height: hHeight });       
        this.houses.push({ id: this.idGen.generate(), x: hMargin, y: hMargin * 4 + hHeight * 4, width: hWidth, height: hHeight});      
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 2 + hWidth, y: hMargin * 4 + hHeight * 4, width: hWidth, height: hHeight });       
        this.houses.push({ id: this.idGen.generate(), x: hMargin, y: hMargin * 5 + hHeight * 6, width: hWidth, height: hHeight });      
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 2 + hWidth, y: hMargin * 5 + hHeight * 6, width: hWidth, height: hHeight });       
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 3 + hWidth * 3, y: hMargin * 3 + hHeight * 3, width: hWidth, height: hHeight });       
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 4 + hWidth * 4, y: hMargin * 3 + hHeight * 3, width: hWidth, height: hHeight});     
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 5 + hWidth * 5, y: hMargin * 3 + hHeight * 3, width: hWidth, height: hHeight  });       
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 6 + hWidth * 6, y: hMargin * 3 + hHeight * 3, width: hWidth, height: hHeight });     
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 7 + hWidth * 7, y: hMargin * 3 + hHeight * 3, width: hWidth, height: hHeight });        
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 8 + hWidth * 8, y: hMargin * 3 + hHeight * 3, width: hWidth, height: hHeight  });       
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 9 + hWidth * 10, y: hMargin * 3 + hHeight * 3, width: hWidth, height: hHeight});        
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 3 + hWidth * 3, y: hMargin * 4 + hHeight * 4, width: hWidth, height: hHeight });        
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 4 + hWidth * 4, y: hMargin * 4 + hHeight * 4, width: hWidth, height: hHeight  });      
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 5 + hWidth * 5, y: hMargin * 4 + hHeight * 4, width: hWidth, height: hHeight});        
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 6 + hWidth * 6, y: hMargin * 4 + hHeight * 4, width: hWidth, height: hHeight });      
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 7 + hWidth * 7, y: hMargin * 4 + hHeight * 4, width: hWidth, height: hHeight });        
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 8 + hWidth * 8, y: hMargin * 4 + hHeight * 4, width: hWidth, height: hHeight });      
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 9 + hWidth * 10, y: hMargin * 4 + hHeight * 4, width: hWidth, height: hHeight });       
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 3 + hWidth * 3, y: hMargin * 5 + hHeight * 6, width: hWidth, height: hHeight});      
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 4 + hWidth * 4, y: hMargin * 5 + hHeight * 6, width: hWidth, height: hHeight  });        
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 5 + hWidth * 5, y: hMargin * 5 + hHeight * 6, width: hWidth, height: hHeight});     
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 6 + hWidth * 6, y: hMargin * 5 + hHeight * 6, width: hWidth, height: hHeight });      
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 7 + hWidth * 7, y: hMargin * 5 + hHeight * 6, width: hWidth, height: hHeight  });       
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 8 + hWidth * 8, y: hMargin * 5 + hHeight * 6, width: hWidth, height: hHeight });
        this.houses.push({ id: this.idGen.generate(), x: hMargin * 9 + hWidth * 10, y: hMargin * 5 + hHeight * 6, width: hWidth, height: hHeight });


        this.houses.forEach(function (h) {
            c.svg.append('rect')
                .at({ x: h.x, y: h.y, width: h.width, height: h.height })
                .attr("class", "house")
                .attr("id", h.id);
        });

       // create store



    }       
}


function IDGen() {

    this.length = 8;
    this.timestamp = +new Date;

    var _getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this.generate = function () {
        var ts = this.timestamp.toString();
        var parts = ts.split("").reverse();
        var id = "";

        for (var i = 0; i < this.length; ++i) {
            var index = _getRandomInt(0, parts.length - 1);
            id += parts[index];
        }

        return id;
    };
}
