///////////////////////// Code adapted from////////////////////
// https://bl.ocks.org/1wheel/07d9040c3422dac16bd5be741433ff1e
// http://covid19simulator.com/
///////////////////////////////////////////////////////////////


var currentStep = 1;
var simulationData;
var trendData = []; 
var freeformData = [];
var age = 30;
var infection = 0.1;
var isolation = 0.1;
var covid_all;
var normalSimulationData = [];


$(window).on('load', function () {
    $(".panel").hide();
    $("#panel" + currentStep).show();
    simulationData = simulate({
        "nDays": 35,
        "populationSize": 500,
        "propInfected": 0.001,
        "propImmuComp": 0.028,
        "interactionsPerDay": 1
    });
    trendData = simulationData
        .map(function (d) { return { day: d.day, cases: d.nSymptomatic }; });
    freeformData = simulationData
        .map(function (d) { return { day: d.day, cases: d.nSymptomatic }; });
        
    initializeDrawView();
    getCovidCount();
});

function onBtnNextClick() {
    switch (currentStep) {
        case 1:
            currentStep++;
            $(".panel").hide();
            $("#panel" + currentStep).show();
            $("#panel1Chart1").contents().appendTo($("#panel2Chart1"));
            showThreshold();
            break;
        case 2:
            currentStep++;
            $(".panel").hide();
            $("#panel" + currentStep).show();
            $("#panel2Chart1").contents().appendTo($("#panel3Chart1"));
            $(".diffarea").fadeIn(2000);
            $("#thresholdLabel1").fadeIn(2000);  
            break;
        case 3:
            currentStep++;
            $(".panel").hide();
            $("#panel" + currentStep).show();
            setupNormalSimulation();
            break;
        case 4:
            currentStep++;
            $(".panel").hide();
            $("#panel" + currentStep).show();
            break;
        case 5:
            currentStep++;
            $(".panel").hide();
            $("#panel" + currentStep).show();
            initializeFreeformGraph();
            applyFill(document.querySelector("#ageSlider"));
            applyFill(document.querySelector("#infectedSlider"));
            applyFill(document.querySelector("#isolationSlider"));
            break;
    }
}


// PANEL 1
function initializeDrawView() {
    document.getElementById("showMe").disabled = true;
    $("#btnNext").hide();
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

    var clipRect = c.svg
        .append('clipPath#clip')
        .append('rect')
        .at({ width: c.x(5) - 2, height: c.height });

    var correctSel = c.svg.append('g').attr('clip-path', 'url(#clip)');

    correctSel.append('path.area').at({ d: area(trendData) });
    correctSel.append('path.line').at({ d: line(trendData) });
    yourDataSel = c.svg.append('path.your-line');

    // add circle to indicate draw start
    c.svg.append('circle').attrs({
        "r": 6,
        "class": "your-line-circle",
        "cx": c.x(trendData[4].day),
        "cy": c.y(trendData[4].cases)
    }).style("fill", "#b9003e");



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


    var threshold = d3.max(trendData, function (d) { return d.cases; }) * 0.15;
    // hospital threshold line
    c.svg.append("line")             
        .attr("id", "threshold")
        .attr("display", "none")  
        .attr("stroke-width", 2)
        .attr("stroke", "#b9003e")
        .attr("x1", c.x(trendData[0].day))
        .attr("y1", c.y(threshold))
        .attr("x2", c.x(trendData[trendData.length - 1].day))
        .attr("y2", c.y(threshold));

    // hospital threshold text
    c.svg.append("text")
        .attr("class", "label")
        .attr("display", "none")
        .attr("id", "thresholdLabel")
        .attr("transform", "translate(" + width * .2 + "," + (c.y(threshold)-10) + ")")
        .style("text-anchor", "middle")
        .text("Number of hospital beds available");

    c.svg.append("text")
        .attr("class", "label")
        .attr("display", "none")
        .attr("id", "thresholdLabel1")
        .attr("transform", "translate(" + width * .4 + "," + 100 + ")")
        .style("text-anchor", "middle")
        .text("Number of patients without treatment");

    // hospital threshold area
    c.svg.append("defs").append("pattern")
        .attrs({ id: "hash4_4", width: "15", height: "8", patternUnits: "userSpaceOnUse", patternTransform: "rotate(60)" })
        .append("rect")
        .attrs({ width: "4", height: "8", transform: "translate(0,0)", fill: "#b9003e" });

    var diffarea = d3.area().x(f('day', c.x)).y0(f('cases', c.y)).y1(c.y(threshold));
    correctSel.append('path.diffarea')
        .at({ d: diffarea(_.filter(trendData, function (t) { return t.cases >= threshold; })) })
        .attr("display", "none")
        .attr("fill","url(#hash4_4)");
   

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
                if (!d.defined && yourData[i - 1].defined) {

                    for (j = i + 1; j < yourData.length-1; j++) {
                        if (yourData[j] && yourData[j].defined) {
                            d.cases = yourData[i - 1].cases + (yourData[j].cases - yourData[i - 1].cases) / 2;
                            d.defined = true;
                            break;
                        }
                    }                  
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

        $("#showMe").hide();
        $("#btnNext").show();
    });
    function clamp(a, b, c) { return Math.max(a, Math.min(b, c)); }
}

function getCovidCount() {
    $.ajax({
        url: "/count",
        type: "post",
        contentType: "application/json",
        success: function (data) {
            covid_all = JSON.parse(data).count;
            $("#caseCount").text(covid_all);
        }
    });
}

// PANEL 2
function showThreshold() {   
    $("#threshold").fadeIn(3000);
    $("#thresholdLabel").fadeIn(3000);  
    $(".your-line").fadeOut(500);
    $(".your-line-circle").fadeOut(500);
}

// PANEL 4
function setupNormalSimulation() {
    $("#btnNext").hide();
    //var gameWorld = new GameWorld('normalCanvas');

    // initialize line graph
    _.range(1, 30).forEach((v, i) => {
        normalSimulationData.push({ "day": v, cases: 0 });
    });
    drawNormalSimulationChart();

}

function drawNormalSimulationChart() {
    $("#panel4Chart2").empty();
    var width = Math.min($("#panel4Chart2").width(), 700);
    var height = Math.min($("#panel4Chart2").width() * 0.6, 400);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scalePow().range([height, 0]);
    var margin = { left: 70, right: 50, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#panel4Chart2');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });

    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 0 });

    c.x.domain([1, d3.max(normalSimulationData, function (d) { return d.day; })]);
    //c.y.domain([0, d3.max(normalSimulationData, function (d) { return d.cases; })]);
    c.y.domain([0, 250]);

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

    correctSel.append('path.area').at({ d: area(normalSimulationData) });
    correctSel.append('path.line').at({ d: line(normalSimulationData) });
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


    var threshold = d3.max(trendData, function (d) { return d.cases; }) * 0.15;
    // hospital threshold line
    c.svg.append("line")
        .attr("id", "threshold")
        .attr("stroke-width", 2)
        .attr("stroke", "#b9003e")
        .attr("x1", c.x(normalSimulationData[0].day))
        .attr("y1", c.y(threshold))
        .attr("x2", c.x(normalSimulationData[normalSimulationData.length - 1].day))
        .attr("y2", c.y(threshold));

    // hospital threshold text
    c.svg.append("text")
        .attr("class", "label")
        .attr("id", "thresholdLabel")
        .attr("transform", "translate(" + width * .2 + "," + (c.y(threshold) - 10) + ")")
        .style("text-anchor", "middle")
        .text("Number of hospital beds available");

}


function simulateSpreadNormal() {
    $("#btnNext").show();
}

// PANEL X
function initializeFreeformGraph() {
    $("#panel6Chart1").empty();
    $("#btnNext").hide();
    var width = Math.min($("#panel6Chart1").width(), 700);
    var height = Math.min($("#panel6Chart1").width() * 0.6, 400);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scalePow().range([height, 0]);
    var margin = { left: 70, right: 50, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#panel6Chart1');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });

    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 0 });

    c.x.domain([1, d3.max(freeformData, function (d) { return d.day; })]);
    c.y.domain([0, d3.max(freeformData, function (d) { return d.cases; })]);


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

    correctSel.append('path.area').at({ d: area(freeformData) });
    correctSel.append('path.line').at({ d: line(freeformData) });
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


    var threshold = d3.max(trendData, function (d) { return d.cases; }) * 0.15;
    // hospital threshold line
    c.svg.append("line")
        .attr("id", "threshold")       
        .attr("stroke-width", 2)
        .attr("stroke", "#b9003e")
        .attr("x1", c.x(trendData[0].day))
        .attr("y1", c.y(threshold))
        .attr("x2", c.x(trendData[trendData.length - 1].day))
        .attr("y2", c.y(threshold));

    // hospital threshold text
    c.svg.append("text")
        .attr("class", "label")       
        .attr("id", "thresholdLabel")
        .attr("transform", "translate(" + width * .2 + "," + (c.y(threshold) - 10) + ")")
        .style("text-anchor", "middle")
        .text("Number of hospital beds available");
}

function onAgeInput(v) {
    age = parseInt(v);
    $('#ageSliderText').text(v);   
    applyFill(document.querySelector("#ageSlider"));
    
}

function onInfectedInput(v) {
    infection = parseFloat(v);
    $('#infectedSliderText').text(v);
    applyFill(document.querySelector("#infectedSlider"));
    redraw();
}

function onIsolationInput(v) {
    isolation = parseFloat(v);
    $('#isolationSliderText').text(v);
    applyFill(document.querySelector("#isolationSlider"));
    redraw();
}

function onChanged() {
    redraw();
}

function redraw() {

    simulationData = simulate({
        "nDays": 35,
        "populationSize": 500,
        "propInfected": 0.001,
        "propImmuComp": 0.028,
        "interactionsPerDay": 1
    });
    freeformData = simulationData
        .map(function (d) { return { day: d.day, cases: d.nSymptomatic }; });

    initializeFreeformGraph();
}

function applyFill(slider) {
    const settings = {
        fill: '#b9003e',
        background: '#d7dcdf'
    };

    const percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
}



// HELPER FUNCTIONS
