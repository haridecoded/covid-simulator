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
var sdSimulationData = [];
var userSimulationData = [];
var userPreviousSimulationData = [];
var simulationWorld;
var pid;
var defaultRandomSeed = 1234;
var reSimuluateNormal = false;
var reSimuluateSD = false;
var reSimulateUser = false;
var userSimultionOptions;
var userSimCount = 0;
var defaultSimulationOptions = {
    nDays: 30, // How many days to simulate
    populationSize: 200, // How many people to simulate
    avgAge: 38.1, // Average age of population
    infectionMultiplier: 0.25, // Adjusts the rate of infection given exposure (use to simulate hygeine / overall susceptibility)
    propInfected: 0.001, // What proportion of people are infected at the beginning
    randomSeed: 7,
    transmissionMitigation: {
        multiplier: 0.5,
        symptomaticOnly: false,
        everyoneUnder: null, // Int Age
        everyoneOver: null // Int Age
    },
    receptionMitigation: {
        multiplier: 0.5,
        everyoneUnder: null, // Int Age
        everyoneOver: null // Int Age
    },
    socialDistancing: {
        multiplier: 0.1,
        symptomaticOnly: false,
        everyoneUnder: null, // Int Age
        everyoneOver: null // Int Age
    },
    user: {
        age: 30, // User Age
        houseSize: 7 // User House Size
    },
    neighborhood: {
        nHouses: 31,
        // neighborVisitsPerMonth: 5,
        // pNeighborContact: 1,
        events: [
            {
                id: "groceryShopping",
                timesPerMonth: 5, // Average number of times per month people visit
                pContact: 0.7 // If two people are here at the same time, what is the prob. they interact
            },
            {
                id: "walkInPark",
                timesPerMonth: 20, 
                pContact: 0.05
            },
            // {
            //     id: "houseParty",
            //     timesPerMonth: 2,
            //     pContact: 0.9
            // }
        ]
    }
};

var randomGenerator = covidModel.randomFactory.factory({'seed': defaultRandomSeed});

function resetRandomGenerator(seed){
    randomGenerator = covidModel.randomFactory.factory({'seed': seed | defaultRandomSeed});
}

// user simulation parameters
var sliders = {    
    // Options based on: https://en.wikipedia.org/wiki/List_of_countries_by_median_age
    "ageSlider": {
        "values": [15.4	, 28.1, 38.1, 45.5, 53.1],
        "labels": ["15.4", "28.1", "38.1", "45.5", "53.1"],
        "explanations": [
            "Median age in Niger (youngest country)",
            "Median age in India (141st oldest country)",
            "Median age in U.S. (61st oldest country)",
            "Median age in Italy (5th oldest country)",
            "Median age in Monaco (oldest Country)"
        ],
        "default": 2,
        "optionName": "avgAge",
        "type": "slider"
    }   
};

var currentSimulationOptions = _.cloneDeep(defaultSimulationOptions);


$(window).on('load', function () {
    $(".panel").hide();
    $("#panel" + currentStep).show();   
    var key = JSON.stringify(defaultSimulationOptions);
    if (!simulationCache.hasOwnProperty(key)){
        simulationCache[key] = covidModel.simulateNeighborhood(defaultSimulationOptions);
    }
    simulationData = simulationCache[key];
    trendData = simulationData
        .map(function (d) { return { day: d.day, cases: d.summary.nInfected }; });
    freeformData = simulationData
        .map(function (d) { return { day: d.day, cases: d.summary.nInfected }; });
    pid = new IDGenerator().generate();
    initializeDrawView();
    getCovidCount();
});

function onBtnNextClick() {
    switch (currentStep) {
        case 1:
            currentStep++;
            $(".panel").hide();
            $("#panel" + currentStep).show();
            setupNormalSimulation();
            break;
        case 2:
            currentStep++;
            $(".panel").hide();
            $("#panel" + currentStep).show();
            $("#panel2Chart1").contents().appendTo($("#panel3Chart1"));
            $("#panel2Chart2").contents().appendTo($("#panel3Chart2"));
            showThreshold();
            break;
        case 3:
            currentStep++;
            $(".panel").hide();
            $("#panel" + currentStep).show();
            setupSDSimulation();
            break;        
        case 4:
            currentStep++;
            $(".panel").hide();
            $("#panel" + currentStep).show();
            setUpUserSimulation();
            break;
        case 5:
            currentStep++;
            $(".panel").hide();
            $("#panel" + currentStep).show();
            $("#btnNext").hide();
            $("#surveyCode").text(pid);
            break;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// PANEL 1
function initializeDrawView() {
    document.getElementById("showMe").disabled = true;
    $("#btnNext").hide();
    var width = Math.min($("#panel1Chart1").width(), 700);
    var height = Math.min($("#panel1Chart1").width() * 0.6, 400);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]).domain([0, 200]);
    var margin = { left: 50, right: 50, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#panel1Chart1');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });

    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 1 }).attr("fill","white");

    c.x.domain([1, d3.max(trendData, function (d) { return d.day; })]);
    c.y.domain([0, 200]);

    $("#infectedText").text(((d3.max(trendData, function (d) { return d.cases; }) / 200) * 100).toFixed(2) + "%");

    c.xAxis.ticks().tickFormat(f());
    c.yAxis.ticks(8).tickFormat(f());
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
        .text("Days since first case ");

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
    var line = d3.area().x(f('day', c.x)).y(f('cases', c.y)).curve(d3.curveBasis);
    var userDrawStart = 8;
    var clipRect = c.svg
        .append('clipPath#clip')
        .append('rect')
        .at({ width: c.x(userDrawStart) + 2, height: c.height });

    var correctSel = c.svg.append('g').attr('clip-path', 'url(#clip)');

    correctSel.append('path.area').at({ d: area(trendData) });
    correctSel.append('path.line').at({ d: line(trendData) });
    yourDataSel = c.svg.append('path.your-line');

    c.svg.append("svg:image")
        .attr("id","pencil")
        .attr('x', c.x(trendData[userDrawStart - 1].day))
        .attr('y', c.y(trendData[userDrawStart - 1].cases)-48)
        .attr('width', 48)
        .attr('height', 48)
        .attr("xlink:href", "images/pencil.png");


    yourData = trendData
        .map(function (d) { return { day: d.day, cases: d.cases, defined: 0 };})
        .filter(function (d) {
            if (d.day === userDrawStart)
                d.defined = true;
            return d.day >= userDrawStart;
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
            var day = clamp(userDrawStart-1, defaultSimulationOptions.nDays, c.x.invert(pos[0]));
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

            d3.select("#pencil").attr('x', c.x(day))
                .attr('y', c.y(cases) - 48);

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
        clipRect.transition().duration(1000).attr('width', c.x(defaultSimulationOptions.nDays));
        freeformData = _.cloneDeep(yourData);
        $("#showMe").hide();
        $(".result").show();
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
            $("#caseCount").text(addCommas(covid_all));
        }
    });
}

// PANEL 2
function setupNormalSimulation() {
    $("#btnNext").hide();
    drawNormalSimulationChart();
    reSimuluateNormal = false;
    var simOptions = _.cloneDeep(defaultSimulationOptions);
    simOptions.infectionMultiplier = 6.0;
    // initialize simulation canvas
    simulationWorld = new SimulationWorld('normalCanvas', .1, defaultSimulationOptions.populationSize - 1, 0, null, null, simOptions);
}

function drawNormalSimulationChart() {
    $("#panel2Chart2").empty();
    var width = Math.min($("#panel2Chart2").width(), 700);
    var height = Math.min($("#panel2Chart2").width() * 0.5, 400);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scalePow().range([height, 0]);
    var margin = { left: 50, right: 0, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#panel2Chart2');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });

    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 1 }).attr("fill", "white");

    c.x.domain([1, defaultSimulationOptions.nDays + 1]);
    c.y.domain([0, defaultSimulationOptions.populationSize]);


    c.xAxis.ticks().tickFormat(f());
    c.yAxis.ticks(8).tickFormat(f());
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


    var threshold = 20;
    // hospital threshold line
    c.svg.append("line")
        .attr("id", "threshold")
        .attr("class", "threshold")
        .attr("display", "none")
        .attr("stroke-width", 2)
        .attr("stroke", "#8C2E26")
        .attr("x1", c.x(1))
        .attr("y1", c.y(threshold))
        .attr("x2", c.x(defaultSimulationOptions.nDays))
        .attr("y2", c.y(threshold));

    // hospital threshold text
    c.svg.append("text")
        .attr("class", "label threshold")
        .attr("display", "none")
        .attr("id", "thresholdLabel")
        .attr("transform", "translate(" + width * .15 + "," + (c.y(threshold) - 10) + ")")
        .style("text-anchor", "middle")
        .text("Total hospital beds");

    c.svg.append("text")
        .attr("class", "label threshold")
        .attr("display", "none")
        .attr("id", "thresholdLabel1")
        .attr("transform", "translate(" + width * .4 + "," + c.y(d3.max(normalSimulationData, function (d) { return d.cases; })) + ")")
        .style("text-anchor", "middle")
        .text("Patients without treatment");

    // hospital threshold area
    c.svg.append("defs").append("pattern")
        .attrs({ id: "hash4_4", width: "15", height: "8", patternUnits: "userSpaceOnUse", patternTransform: "rotate(60)" })
        .append("rect")
        .attrs({ width: "4", height: "8", transform: "translate(0,0)", fill: "#034AA6", opacity:0.6 });

    var diffarea = d3.area().x(f('day', c.x)).y0(f('cases', c.y)).y1(c.y(threshold));
    correctSel.append('path.diffarea')
        .at({ d: diffarea(_.filter(normalSimulationData, function (t) { return t.cases >= threshold; })) })
        .attr("class", "threshold")
        .attr("display", "none")
        .attr("fill", "#F2B138");
        //.attr("fill", "url(#hash4_4)");
}

function simulateSpreadNormal() {
    if ($(this).attr('disabled')) {
        return;
    }
    if (reSimuluateNormal) {
        resetNormalSimulation();       
    }
   
    function updateChart(day, count) {       
        if (day > 0 && day <= defaultSimulationOptions.nDays) {
            normalSimulationData.push({ "day": day, "cases": count });
        }
        if (day === defaultSimulationOptions.nDays) {
            $("#btnNext").show();          
            document.getElementById("btnNormalSim").disabled = false;
            reSimuluateNormal = true;
        }
        drawNormalSimulationChart();
    }
    normalSimulationData = [];
    simulationWorld.update = updateChart;
    simulationWorld.days = defaultSimulationOptions.nDays + 1;
    simulationWorld.totalPeople = defaultSimulationOptions.populationSize;
    simulationWorld.addInfectedPerson();   
    document.getElementById("btnNormalSim").disabled = true;
}

function resetNormalSimulation() {
    document.getElementById("btnNormalSim").disabled = true;
    reSimuluateNormal = false;
    normalSimulationData = [];
    drawNormalSimulationChart();
    simulationWorld.resetWorld();
    simulationWorld = null;
    var simOptions = _.cloneDeep(defaultSimulationOptions);
    simOptions.infectionMultiplier = 6.0;
    simulationWorld = new SimulationWorld('normalCanvas', .1, defaultSimulationOptions.populationSize - 1, 0, null, null, simOptions);
}

// PANEL 3
function showThreshold() {   
    $(".threshold").fadeIn(2000);
    if (normalSimulationData && normalSimulationData.length > 0) {
        simulationWorld.showOverflow(normalSimulationData[normalSimulationData.length - 1].cases - 20);
    }    
}

// PANEL 4
function setupSDSimulation() {
    $("#btnNext").hide();
    drawSDSimulationChart();
    reSimuluateSD = false;
    simulationWorld.resetWorld();
    simulationWorld = null;
    var simOptions = _.cloneDeep(defaultSimulationOptions);
    simOptions.infectionMultiplier = 2;
    simOptions.socialDistancing.everyoneOver = 0;
    simOptions.socialDistancing.everyoneUnder = null;
    simulationWorld = new SimulationWorld('sdCanvas', .9, defaultSimulationOptions.populationSize - 1, 0, null, null, simOptions, 0.90);
}

function drawSDSimulationChart() {
    $("#panel4Chart2").empty();
    var width = Math.min($("#panel4Chart2").width(), 700);
    var height = Math.min($("#panel4Chart2").width() * 0.6, 500);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scalePow().range([height, 0]);
    var margin = { left: 50, right: 0, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#panel4Chart2');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });

    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 1 }).attr("fill", "white");

    c.x.domain([1, defaultSimulationOptions.nDays + 1]);
    c.y.domain([0, defaultSimulationOptions.populationSize]);


    c.xAxis.ticks().tickFormat(f());
    c.yAxis.ticks(8).tickFormat(f());
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

    correctSel.append('path.area').at({ d: area(sdSimulationData) });
    correctSel.append('path.line').at({ d: line(sdSimulationData) });
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


    var threshold = 20;
    // hospital threshold line
    c.svg.append("line")
        .attr("id", "threshold")
        .attr("class", "threshold")      
        .attr("stroke-width", 2)
        .attr("stroke", "#8C2E26")
        .attr("x1", c.x(1))
        .attr("y1", c.y(threshold))
        .attr("x2", c.x(defaultSimulationOptions.nDays))
        .attr("y2", c.y(threshold));

    // hospital threshold text
    c.svg.append("text")
        .attr("class", "label threshold")     
        .attr("id", "thresholdLabel")
        .attr("transform", "translate(" + width * .15 + "," + (c.y(threshold) - 10) + ")")
        .style("text-anchor", "middle")
        .text("Total hospital beds");

}

function simulateSDSpread() {
    if ($(this).attr('disabled')) {
        return;
    }
    if (reSimuluateSD) {
        resetSDSimulation();
    }
    
    function updateChart(day, count) {
        if (day > 0 && day <= defaultSimulationOptions.nDays) {
            sdSimulationData.push({ "day": day, "cases": count });
        }
        if (day === defaultSimulationOptions.nDays) {
            $("#btnNext").show();
            document.getElementById("btnSDSim").disabled = false;
            reSimuluateSD = true;
        }
        drawSDSimulationChart();
    }
    simulationWorld.update = updateChart;
    simulationWorld.days = defaultSimulationOptions.nDays + 1;
    simulationWorld.totalPeople = defaultSimulationOptions.populationSize;
    simulationWorld.addInfectedPerson();   
    document.getElementById("btnSDSim").disabled = true;
}

function resetSDSimulation() {
    document.getElementById("btnSDSim").disabled = true;
    reSimuluateSD = false;
    sdSimulationData = [];
    drawSDSimulationChart();
    simulationWorld.resetWorld();
    simulationWorld = null;
    var simOptions = _.cloneDeep(defaultSimulationOptions);
    simOptions.infectionMultiplier = 2;
    simOptions.socialDistancing.everyoneOver = 0;
    simOptions.socialDistancing.everyoneUnder = null;
    simulationWorld = new SimulationWorld('sdCanvas', .9, defaultSimulationOptions.populationSize - 1, 0, null, null, simOptions, 0.90);
}

// PANEL 5

function setUpUserSimulation() {
    $("#btnNext").hide();
    userSimultionOptions = _.cloneDeep(defaultSimulationOptions);
    //set up controls   
    for (const sId in sliders) {
        var s = sliders[sId];
        $("#" + sId).attr("min", 0).attr("max", s.values.length - 1).attr("value", s.default);
        $("#" + sId + "Text").text(s.hasOwnProperty('labels') ? s.labels[s.default] : s.values[s.default]);
        $("#" + sId + "Explanation").text(s.hasOwnProperty('explanations') ? s.explanations[s.default] : 'Explanation Not Found');
        if (s.type === "slider") {
            applyFill(document.getElementById(sId));
        }
    }

    // draw linegraph
    drawUserSimulationChart();

    // set up dot simulation world
    if (simulationWorld) {
        simulationWorld.resetWorld();
        simulationWorld = null;
    }
    simulationWorld = new SimulationWorld('userCanvas', .1, defaultSimulationOptions.populationSize - 1, 0, null, null, userSimultionOptions);
}

function drawUserSimulationChart() {
    $("#panel5Chart2").empty();
    var width = Math.min($("#panel5Chart2").width(), 700);
    var height = Math.min($("#panel5Chart2").width() * 0.6, 500);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scalePow().range([height, 0]);
    var margin = { left: 50, right: 0, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#panel5Chart2');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });

    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 1 }).attr("fill", "white");

    c.x.domain([1, defaultSimulationOptions.nDays + 1]);
    c.y.domain([0, defaultSimulationOptions.populationSize]);


    c.xAxis.ticks().tickFormat(f());
    c.yAxis.ticks(8).tickFormat(f());
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

    correctSel.append('path.area').at({ d: area(userSimulationData) });
    correctSel.append('path.line').at({ d: line(userSimulationData) });

    

    if (userPreviousSimulationData.length > 0) {
        var shadowLine = d3.line().x(f('day', c.x)).y(f('cases', c.y)).curve(d3.curveMonotoneX);

        c.svg.append("g")
            .append('path.line').at({ d: shadowLine(userPreviousSimulationData) })
            .attr("class","shadowLine");
    }

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


    var threshold = 20;
    // hospital threshold line
    c.svg.append("line")
        .attr("id", "threshold")
        .attr("class", "threshold")
        .attr("stroke-width", 2)
        .attr("stroke", "#8C2E26")
        .attr("x1", c.x(1))
        .attr("y1", c.y(threshold))
        .attr("x2", c.x(defaultSimulationOptions.nDays))
        .attr("y2", c.y(threshold));

    // hospital threshold text
    c.svg.append("text")
        .attr("class", "label threshold")
        .attr("id", "thresholdLabel")
        .attr("transform", "translate(" + width * .15 + "," + (c.y(threshold) - 10) + ")")
        .style("text-anchor", "middle")
        .text("Total hospital beds");

}

function applyFill(slider) {
    const settings = {
        fill: '#8C2E26',
        background: '#d7dcdf'
    };

    const percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
}

function onSliderInput(slider){
    var i;
    var s = sliders[slider.id];
    if (s.type === 'toggle'){
        i = slider.checked === true ? 1 : 0;
    } else{
        i = parseInt(slider.value);
        applyFill(slider);
    }
    var v = s.values[i];
    currentSimulationOptions[s.optionName] = v;
    $("#" + slider.id + "Text").text(s.hasOwnProperty('labels') ? s.labels[i] : v);
    $("#" + slider.id + "Explanation").text(s.hasOwnProperty('explanations') ? s.explanations[i] : 'Explanation Not Found');
}

function onQuestionSelect() {
    var question = document.getElementById("behavior").value;
    switch (question) {
        case "over60":            
            $(".peopleGroup").prop("checked", false);
            $("#60plus").prop("checked", true);
            $(".behavGroup").prop("checked", false);
            $("#shelter").prop("checked", true);
            break;
        case "under25":
            $(".peopleGroup").prop("checked", false);
            $("#25plus").prop("checked", true);
            $("#60plus").prop("checked", true);
            $(".behavGroup").prop("checked", true);
            break;
        case "symptom":
            $(".peopleGroup").prop("checked", false);
            $("#symptomatic").prop("checked", true);
            $(".behavGroup").prop("checked", false);
            $("#shelter").prop("checked", true);
            break;
        case "face":
            $(".peopleGroup").prop("checked", true);
            $("#symptomatic").prop("checked", false);
            $(".behavGroup").prop("checked", true);
            $("#shelter").prop("checked", false);
            break;
        case "none":
            $(".peopleGroup").prop("checked", false);
            $(".behavGroup").prop("checked", false);
            break;

    }
}

function onBehaviorSelectionChanged(cb) {
    switch (cb.value) {
        case "6feet":
            break;
        case "handwash":
            break;
        case "mask":
            break;
        case "facetouch":
            break;
        case "shelter":
            break;
    }
}

function onPopulationSelectionChanged(cb) {
    switch (cb.value) {
        case "60plus":
            if (cb.checked) {
                if ($("#25plus").prop("checked") && $("#under25").prop("checked")) {
                    $("#everyone").prop("checked", true);
                }
                $("#symptomatic").prop("checked", false);
            }
            else {
                $("#everyone").prop("checked", false);
                $("#symptomatic").prop("checked", false);
            }
            break;
        case "25plus":
            if (cb.checked) {
                if ($("#60plus").prop("checked") && $("#under25").prop("checked")) {
                    $("#everyone").prop("checked", true);
                }
                $("#symptomatic").prop("checked", false);
            }
            else {
                $("#everyone").prop("checked", false);
                $("#symptomatic").prop("checked", false);
            }
            break;
        case "under25":
            if (cb.checked) {
                if ($("#25plus").prop("checked") && $("#60plus").prop("checked")) {
                    $("#everyone").prop("checked", true);
                }
                $("#symptomatic").prop("checked", false);
            }
            else {
                $("#everyone").prop("checked", false);
                $("#symptomatic").prop("checked", false);
            }
            break;
        case "everyone":
            if (cb.checked) {
                $("#60plus").prop("checked", true);
                $("#25plus").prop("checked", true);
                $("#under25").prop("checked", true);
                $("#symptomatic").prop("checked", false);
            } else {
                $("#60plus").prop("checked", false);
                $("#25plus").prop("checked", false);
                $("#under25").prop("checked", false);
                $("#symptomatic").prop("checked", false);
            }           
            break;
        case "symptomatic":
            if (cb.checked) {
                $(".peopleGroup").prop("checked", false);
                $("#symptomatic").prop("checked", true);
            }
            break;
    }
}

function simulateUserSpread() {

    // if simulation is running return
    if ($(this).attr('disabled')) {
        return;
    }
    var isTransmissionChecked = false;
    var isReceptionChecked = false;
    var isSDChecked = false;
    var simOptions = _.cloneDeep(defaultSimulationOptions);
    simOptions.infectionMultiplier = 6.0;
    simOptions.transmissionMitigation.multiplier = 1;
    simOptions.receptionMitigation.multiplier = 1;
    simOptions.socialDistancing.multiplier = 1;
    // age
    simOptions.avgAge = sliders["ageSlider"].values[$('#ageSlider').val()];
    userSimulationData = [];
    // behavior
    if ($("#6feet").is(":checked")) {
        simOptions.transmissionMitigation.multiplier -= 0.2;
        simOptions.receptionMitigation.multiplier -= 0.2;
        isTransmissionChecked = true;
        isReceptionChecked = true;
    }
    if ($("#handwash").is(":checked")) {
        simOptions.transmissionMitigation.multiplier -= 0.2;
        simOptions.receptionMitigation.multiplier -= 0.2;
        isTransmissionChecked = true;
        isReceptionChecked = true;
    }
    if ($("#mask").is(":checked")) {
        simOptions.receptionMitigation.multiplier -= 0.2;
        isReceptionChecked = true;
    }
    if ($("#facetouch").is(":checked")) {
        simOptions.receptionMitigation.multiplier -= 0.2;
        isReceptionChecked = true;
    }
    if ($("#shelter").is(":checked")) {
        simOptions.socialDistancing.multiplier = 0.1;
        isSDChecked = true;
    }



    // who behavior
    if ($("#60plus").is(":checked")) {
        if (isTransmissionChecked) {
            simOptions.transmissionMitigation.everyoneOver = 59;                       
        }
        if (isReceptionChecked) {
            simOptions.receptionMitigation.everyoneOver = 59;
        }
        if (isSDChecked) {
            simOptions.socialDistancing.everyoneOver = 59;
        }
    }
    if ($("#25plus").is(":checked")) {
        if (isTransmissionChecked) {
            simOptions.transmissionMitigation.everyoneOver = 24;            
        }
        if (isReceptionChecked) {
            simOptions.receptionMitigation.everyoneOver = 24;
        }
        if (isSDChecked) {
            simOptions.socialDistancing.everyoneOver = 24;
        }
    }
    if ($("#under25").is(":checked")) {
        if (isTransmissionChecked) {
            simOptions.transmissionMitigation.everyoneUnder = 25;
        }
        if (isReceptionChecked) {
            simOptions.receptionMitigation.everyoneUnder = 25;
        }
        if (isSDChecked) {
            simOptions.socialDistancing.everyoneUnder = 25;
        }
    }
    if ($("#everyone").is(":checked")) {
        if (isTransmissionChecked) {
            simOptions.transmissionMitigation.everyoneOver = 0;
            simOptions.transmissionMitigation.everyoneUnder = null;
        }
        if (isReceptionChecked) {
            simOptions.receptionMitigation.everyoneOver = 0;
            simOptions.receptionMitigation.everyoneUnder = null;
        }
        if (isSDChecked) {
            simOptions.socialDistancing.everyoneOver = 0;
            simOptions.socialDistancing.everyoneUnder = null;
        }
    }
    if ($("#symptomatic").is(":checked")) {
        if (isSDChecked) {
            simOptions.socialDistancing.everyoneOver = null;
            simOptions.socialDistancing.everyoneUnder = null;
            simOptions.socialDistancing.symptomaticOnly = true;
        }
        if (isTransmissionChecked) {
            simOptions.transmissionMitigation.everyoneUnder = null;
            simOptions.transmissionMitigation.everyoneOver = null;
            simOptions.transmissionMitigation.symptomaticOnly = true;
        }
    }

    //reset simulation world
  
    // simulate
    function updateChart(day, count) {
        if (day > 0 && day <= defaultSimulationOptions.nDays) {
            userSimulationData.push({ "day": day, "cases": count });
            drawUserSimulationChart();
        }
        if (day === defaultSimulationOptions.nDays) {
            $("#btnNext").show();
            document.getElementById("btnUserSim").disabled = false;
            reSimuluateSD = true;
            userPreviousSimulationData = _.cloneDeep(userSimulationData);
            addSmallMultipleChart();
        }
        
    }

    simulationWorld.resetWorld();
    simulationWorld = null;
    simulationWorld = new SimulationWorld('userCanvas', isSDChecked ? 0.9:0.1, defaultSimulationOptions.populationSize-1, 0, defaultSimulationOptions.nDays + 1, updateChart, simOptions);
    simulationWorld.addInfectedPerson();
    document.getElementById("btnUserSim").disabled = true;
}

function addSmallMultipleChart() {
    var div = $("<div  class='one-third column userSM'><div id='userchart" + userSimCount + "' class='row'></div></div>");
    $("#mysimulations").append(div);
      
    var width = Math.min($("#userchart" + userSimCount).width(), 300);
    var height = Math.min($("#userchart" + userSimCount).width() * 0.6, 200);
    var margin = { left: 35, right: 0, top: 10, bottom: 10 };

    var f = d3.f;
    var sel = d3.select("#userchart" + userSimCount);
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });
    c.x.domain([1, defaultSimulationOptions.nDays + 1]);
    c.y.domain([0, defaultSimulationOptions.populationSize]);
    c.xAxis.ticks(0).tickFormat(f());
    c.yAxis.ticks(5).tickFormat(f());
    c.drawAxis();

    var line = d3.line().x(f('day', c.x)).y(f('cases', c.y)).curve(d3.curveMonotoneX);

    c.svg.append("g")
        .append('path.line').at({ d: line(userPreviousSimulationData) })        
        .attr("stroke", "#13BA81");

    c.svg.append("line")
        .attr("id", "threshold")
        .attr("class", "threshold")
        .attr("stroke-width", 2)
        .attr("stroke", "#b9003e")
        .attr("x1", c.x(1))
        .attr("y1", c.y(20))
        .attr("x2", c.x(defaultSimulationOptions.nDays))
        .attr("y2", c.y(20));

    //c.svg.append("line")
    //    .attr("id", "threshold")
    //    .attr("class", "threshold")
    //    .attr("stroke-width", 1)
    //    .attr("stroke", "black")
    //    .attr("x1", c.x(1))
    //    .attr("y1", c.y(0))
    //    .attr("x2", c.x(defaultSimulationOptions.nDays))
    //    .attr("y2", c.y(0));

    var desc = "";
    $(".behavGroup").each(function () {
        desc += $("label[for='" + $(this).val() + "']").text() + ": ";
        if ($(this).is(":checked")) {
            desc += "<b>Yes</b> <br/>";
        }
        else {
            desc += "<b>No</b>  <br/>";
        }
    });
    $(".peopleGroup").each(function () {
        desc += $("label[for='" + $(this).val() + "']").text() + ": ";
        if ($(this).is(":checked")) {
            desc += "<b>Yes</b>  <br/>";
        }
        else {
            desc += "<b>No</b>  <br/>";
        }
    });
    desc += "Average population age : <b>" + sliders["ageSlider"].values[$('#ageSlider').val()] + "</b>";
    $(div).append($("<div class='row criteria'><p>" + desc + "</p></div>"));
    userSimCount++;
}

//PANEL 6
function onCopyCodeClick() {
    if (!navigator.clipboard) {
        // Clipboard API not available
        return;
    }
    try {
        navigator.clipboard.writeText(pid);        
    } catch (err) {
        console.error('Failed to copy!', err);
    }
}

// HELPER FUNCTIONS

function logToDB(data) {
    data.pid = pid;
    data.time = new Date().toLocaleString();

    $.ajax({
        url: '/log',
        type: 'post',
        dataType: 'json',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
        }
    });
}

class SimulationWorld {

    constructor(canvasId, percentHome, populationSize, infectedCount, days, callback, modelParam = null, populationObedience = 1.0) {
        this.canvas = null;
        this.context = null;
        this.oldTimeStamp = 0;
        this.gameObjects = [];
        this.resetCounter = 0;
        this.dayCount = 0;

        this.updateStatsInterval;
        this.mostRecentDeathIndex = 0;
        this.rafCounter = 0;
        this.userMode = "moving";
        this.percentHome = percentHome;
        this.totalPeople = populationSize;
        this.defaultInfectedCount = infectedCount;

        this.update = callback;
        this.days = days;
        this.reset = false;
        this.modelParam = modelParam; 
        this.populationObedience = populationObedience;
        this.population = covidModel.generatePopulation(this.modelParam);
        this.init(canvasId);
        resetRandomGenerator();
        this.mobileBreakPointWidth = 400;
       
    }

    refreshPopulation(params) {
        this.modelParam = params;
        this.population = covidModel.generatePopulation(this.modelParam);
    }

    init(canvasId) {
       
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');

        this.canvas.width = Math.min($('#' + canvasId).parent().width(), 700);
        this.canvas.height = Math.min($('#' + canvasId).parent().width() * 0.6, 500);

        this.canvasLeft = 0;
        this.canvasTop = 0;
        this.canvasRight = this.canvas.offsetWidth;
        this.canvasBottom = this.canvas.offsetHeight;

        this.createWorld({
            percentHome: this.percentHome,
            infectedCount: this.defaultInfectedCount,
            userMode: this.userMode,
            populationObedience: this.populationObedience
        });

        window.requestAnimationFrame((timeStamp) => { this.gameLoop(timeStamp); });       
       
    }

    resetWorld() {
        resetRandomGenerator();
        this.gameObjects = [];
        this.reset = true;
    }

    showOverflow(number) {
        var over = this.gameObjects.filter(person => person.infectedState === 'sick');
        over.forEach(function (p, i) {
            if (i < number) {
                p.highlight();
            }
        });
    }

    createWorld({ percentHome, infectedCount, userMode = null , populationObedience = 1.0}) {
        //let homeCount = Math.ceil((this.totalPeople - infectedCount) * this.percentHome);
        //let movingCount = this.totalPeople - infectedCount - homeCount;
        let speedMultiplier = window.innerWidth < this.mobileBreakPointWidth ? .45 : 1;
        _.initial(this.population.people).forEach((person,index) => {
            var dot = new Person(this.context, {
                index,
                movingState: covidModel.isParticipating(person, this.modelParam.socialDistancing) && (randomGenerator() <= populationObedience) ? "home" : "moving",
                infectedState: 'healthy',
                x: randomIntFromInterval(10, this.canvasRight - 10),
                y: randomIntFromInterval(10, this.canvasBottom - 10),
                radius: Math.max(this.canvas.width / 200, 3.6),
                speedMultiplier
            });
            dot.data = person;
            dot.data.infected = false;
            this.gameObjects.push(dot);
        });
            
   



        ////assign people to objects        
        //let moving = Array.from(Array(movingCount)).map((val, index) => {
        //    let rand = (randomGenerator() * 100) - 50;
        //    return new Person(this.context, {
        //        index,
        //        movingState: 'moving',
        //        infectedState: 'healthy',
        //        x: randomIntFromInterval(10, this.canvasRight - 10),
        //        y: randomIntFromInterval(10, this.canvasBottom -10),
        //        radius: Math.max(this.canvas.width / 200, 3.6),
        //        speedMultiplier
        //    });
        //});

        //let home = Array.from(Array(homeCount)).map((val, index) => {
        //    return new Person(this.context, {
        //        index,
        //        movingState: 'home',
        //        infectedState: 'healthy',
        //        x: randomIntFromInterval(10, this.canvasRight - 10),
        //        y: randomIntFromInterval(10, this.canvasBottom - 10),
        //        radius: Math.max(this.canvas.width / 200, 3.6),
        //        speedMultiplier
        //    });
        //});

        //let infected = Array.from(Array(+infectedCount)).map((val, index) => {
        //    return new Person(this.context, {
        //        index,
        //        movingState: 'moving',
        //        infectedState: 'sick',
        //        x: randomIntFromInterval(10, this.canvasRight - 10),
        //        y: randomIntFromInterval(10, this.canvasBottom - 10),
        //        radius: Math.max(this.canvas.width / 200, 3.6),
        //        infectedTime: Date.now(),
        //        speedMultiplier
        //    });
        //});
        
        //this.gameObjects = [...infected, ...moving, ...home];       
        //_.forEach(this.gameObjects, function (o, i) {
        //    o.data = p.people[i];
        //    o.data.infected = o.infectedState === 'sick';
        //    if (covidModel.isParticipating(o.data, params.socialDistancing)) {
        //        o.movingState = "home";
        //    }
        //    else {
        //        o.movingState = "moving";
        //    }
        //});

    }

    gameLoop(timeStamp) {
        // Calculate how much time has passed
   
        var secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;
       

        // Loop over all game objects to update
        this.gameObjects.forEach(go => go.update(secondsPassed));

        if (this.rafCounter % 5 === 0) {
            this.detectWall();
            this.detectCollisions();
        }

        let contagiousCount = this.gameObjects.filter(person => person.infectedState === 'sick').length;

        if (this.rafCounter % 20 === 0) {
            
            if (this.update) {
                this.update.call(this, this.dayCount, contagiousCount);
            }            
            this.dayCount++;
        }

        this.rafCounter++;        

        this.clearCanvas();
        this.gameObjects.forEach(go => go.draw());
     
        if (this.days) {
            if (!this.reset && this.dayCount < this.days) {
                window.requestAnimationFrame((timeStamp) => this.gameLoop(timeStamp));
                
            }
        }
        else if (!this.reset) {
            window.requestAnimationFrame((timeStamp) => this.gameLoop(timeStamp));
            
        }


        // Keep requesting new frames
        //if (!this.reset && this.days && this.dayCount < this.days) {
        //    window.requestAnimationFrame((timeStamp) => this.gameLoop(timeStamp));
        //}         
    }

    detectCollisions() {
        var obj1;
        var obj2;

        for (var i = 0; i < this.gameObjects.length; i++) {
            obj1 = this.gameObjects[i];
            for (var j = i + 1; j < this.gameObjects.length; j++) {
                obj2 = this.gameObjects[j];

                if (this.circleIntersect(obj1, obj2)) {

                    var vCollision = { x: obj2.x - obj1.x, y: obj2.y - obj1.y };
                    var distance = Math.sqrt((obj2.x - obj1.x) * (obj2.x - obj1.x) + (obj2.y - obj1.y) * (obj2.y - obj1.y));
                    if (distance === 0) {
                        distance = 0.2;
                    }
                    var vCollisionNorm = { x: vCollision.x / distance, y: vCollision.y / distance };
                    var vRelativeVelocity = { x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy };
                    var speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

                    if (isNaN(speed)) {
                        speed = randomIntFromInterval(1, 20);
                    }

                    if (speed < 0) {
                        break;
                    }                  

                    var impulse = 2 * speed / (obj1.mass + obj2.mass);
                    obj1.vx -= (impulse * obj2.mass * vCollisionNorm.x);
                    obj1.vy -= (impulse * obj2.mass * vCollisionNorm.y);
                    obj2.vx += (impulse * obj1.mass * vCollisionNorm.x);
                    obj2.vy += (impulse * obj1.mass * vCollisionNorm.y);
                  
                    // Uncomment this to use model to determine whether dots get infected on collision.
                    covidModel.simulateInteraction(obj1.data, obj2.data, currentSimulationOptions);
                    if (obj1.data.infected){
                        obj1.infectedState = 'sick';
                        if (!obj1.infectedTime) obj1.infectedTime = Date.now();
                    }
                    if (obj2.data.infected){
                        obj2.infectedState = 'sick';
                        if (!obj2.infectedTime) obj2.infectedTime = Date.now();
                    }
                    // if (obj1.infectedState === 'sick' || obj2.infectedState === 'sick') {
                    //     obj1.data.infected
                    //     obj2.infectedState = obj1.infectedState = 'sick';

                    //     if (!obj1.infectedTime) obj1.infectedTime = Date.now();
                    //     if (!obj2.infectedTime) obj2.infectedTime = Date.now();
                    // }
                }
            }
        }
    }

    detectWall() {

        this.gameObjects.forEach(go => {
            if (this.canvasRight < go.x + go.radius) {
                go.vx = -go.vx;
                go.x = this.canvasRight - go.radius;
            } else if (go.x - go.radius < this.canvasLeft) {
                go.vx = -go.vx;
                go.x = this.canvasLeft + go.radius;
            }
            else if (go.y + go.radius > this.canvasBottom) {
                go.vy = -go.vy;
                go.y = this.canvasBottom - go.radius;
            } else if (go.y - go.radius < this.canvasTop) {
                go.vy = -go.vy;
                go.y = this.canvasTop + go.radius;
            }           
        });

    }

    circleIntersect(circle1, circle2) {

        var dx = circle1.x - circle2.x;
        var dy = circle1.y - circle2.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        return distance < (circle1.radius + circle2.radius) + 2;
    }

    clearCanvas() {
        // Clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    debounce(func) {
        var timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(func, 100, event);
        };
    }

    addInfectedPerson() {
        this.dayCount = 0;
        var infectedPerson = new Person(this.context, {
            index: this.gameObjects.length,
            movingState: 'moving',
            infectedState: 'sick',
            x: this.canvasRight / 2,
            y: this.canvasBottom/2,
            radius: Math.max(this.canvas.width / 200, 3.6),
            infectedTime: Date.now(),
            speedMultiplier:0.5
        });
        infectedPerson.data = this.population.people[this.gameObjects.length];
        infectedPerson.data.infected = true;
        this.gameObjects.push(infectedPerson);
        
    }
}

function IDGenerator() {

    this.length = 8;
    this.timestamp = +new Date;

    var _getRandomInt = function (min, max) {
        return Math.floor(randomGenerator() * (max - min + 1)) + min;
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

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(randomGenerator() * (max - min + 1) + min);
}