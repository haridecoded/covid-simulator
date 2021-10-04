// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAM8_o8jO-sUSaSyH1hCMz_MQsGsP_1Z3E",
    authDomain: "baac-covid-visualization.firebaseapp.com",
    databaseURL: "https://baac-covid-visualization.firebaseio.com",
    projectId: "baac-covid-visualization",
    storageBucket: "baac-covid-visualization.appspot.com",
    messagingSenderId: "234816545802",
    appId: "1:234816545802:web:a5a9267639827180f9abf3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// Get userId from URL
var userId = (new URLSearchParams(window.location.search)).get('user');
var logger = new Logger(firebase, firestore, userId);


///////////////////////// Code adapted from////////////////////
// https://bl.ocks.org/1wheel/07d9040c3422dac16bd5be741433ff1e
// http://covid19simulator.com/
///////////////////////////////////////////////////////////////
var currentStep = 3;
var world;
var renderer;
var simulationData;
var yourData;
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
var userSimulationOptions;
var userPreviousSimulationOptions;
var userSimulationStartTime;
var simulationWorld;
var pid;
var defaultRandomSeed = 45235;
var reSimuluateNormal = false;
var reSimuluateSD = false;
var reSimulateUser = false;
var userSimCount = 0;

// Prevent people from recovering for now.
PandemicSimulator.Virus.pRecovery = 0;
var defaultSimulationOptions = PandemicSimulator.defaultParams;
defaultSimulationOptions.diseaseSpread.infectionMultiplier = 2;
defaultSimulationOptions.diseaseSpread.wearMask.multiplier = {
    recieve: 0.9,
    transmit: 0.7
};
defaultSimulationOptions.dots.repulsion = 0.04;

var smcount = 0;
var parentDiv;
var randomGenerator = PandemicSimulator.Random.randomFactory({'seed': defaultRandomSeed});

function resetRandomGenerator(seed){
    randomGenerator = PandemicSimulator.Random.randomFactory({'seed': seed | defaultRandomSeed});
}

// user simulation parameters
// const precautionAges = [0, 25, 35, 45, 60];
const precautionPercentages = [0.0, 0.1, 0.25, 0.5, 0.75, 0.9, 1.0];
const precautionPercentageLabels = ["Nobody", "1 in 10 people", "1 in 4 people", "Half of the people", "3 in 4 people", "9 in 10 people", "Everyone"];
var sliders = {
    maskSlider: {
        values: precautionPercentages,
        explanations: precautionPercentageLabels,
        default: 0,
        update: function (options, value) {
            options.diseaseSpread.wearMask.percentOfPopulation = value;
        },
        type: "slider",
    },
    vaccineSlider: {
        values: precautionPercentages,
        explanations: precautionPercentageLabels,
        default: 0,
        update: function (options, value) {
            options.diseaseSpread.vaccinated.percentOfPopulation = value;
        },
        type: "slider",
    },
    shelterSlider: {
        values: precautionPercentages,
        explanations: precautionPercentageLabels,
        default: 0,
        update: function (options, value) {
            options.diseaseSpread.shelterInPlace.percentOfPopulation = value;
        },
        type: "slider",
    },
  // Options based on: https://en.wikipedia.org/wiki/List_of_countries_by_median_age
//   ageSlider: {
//     values: [15.4, 28.1, 38.1, 45.5, 53.1],
//     labels: ["15.4", "28.1", "38.1", "45.5", "53.1"],
//     explanations: [
//       "Median age in Niger (youngest country)",
//       "Median age in India (141st oldest country)",
//       "Median age in U.S. (61st oldest country)",
//       "Median age in Italy (5th oldest country)",
//       "Median age in Monaco (oldest Country)",
//     ],
//     default: 2,
//     update: function (options, value) {
//       options.population.averageAge = value;
//     },
//     type: "slider",
//   },
//   maskOverSlider: {
//     values: precautionAges,
//     explanations: precautionAges.map((x) => "Everyone Over " + x),
//     default: 0,
//     update: function (options, value) {
//       options.diseaseSpread.everyoneOver = value;
//     },
//     type: "slider",
//   },
//   maskUnderSlider: {
//     values: precautionAges,
//     explanations: precautionAges.map((x) => "Everyone Under " + x),
//     default: 0,
//     update: function (options, value) {
//       options.diseaseSpread.everyoneUnder = value;
//     },
//     type: "slider",
//   },
//   distanceOverSlider: {
//     values: precautionAges,
//     explanations: precautionAges.map((x) => "Everyone Over " + x),
//     default: 0,
//     update: function (options, value) {
//       options.diseaseSpread.everyoneOver = value;
//     },
//     type: "slider",
//   },
//   distanceUnderSlider: {
//     values: precautionAges,
//     explanations: precautionAges.map((x) => "Everyone Under " + x),
//     default: 0,
//     update: function (options, value) {
//       options.diseaseSpread.everyoneUnder = value;
//     },
//     type: "slider",
//   },
//   shelterOverSlider: {
//     values: precautionAges,
//     explanations: precautionAges.map((x) => "Everyone Over " + x),
//     default: 0,
//     update: function (options, value) {
//       options.diseaseSpread.everyoneOver = value;
//     },
//     type: "slider",
//   },
//   shelterUnderSlider: {
//     values: precautionAges,
//     explanations: precautionAges.map((x) => "Everyone Under " + x),
//     default: 0,
//     update: function (options, value) {
//       options.diseaseSpread.everyoneUnder = value;
//     },
//     type: "slider",
//   },
};


$(window).on('load', function () {
    $(".panel").hide();
    $("#panel" + currentStep).show();
    
    defaultSimulationData = PandemicSimulator.runSimulations(defaultSimulationOptions);
    trendData = defaultSimulationData.getRepresentativeData().map(function (d) {
      return { day: d.day+1, cases: d.counts.cumulativeCases };
    });
    freeformData = _.cloneDeep(trendData);
    pid = new IDGenerator().generate();
    $("#btnNext").show();
    logger.begin('screen' + currentStep);
    onBtnNextClick();
});

var stepStarted = null;
function onBtnNextClick() {
    logger.end('screen' + currentStep);
    switch (currentStep) {
        //case 1:
        //    currentStep++;
        //    $(".panel").hide();
        //    $("#panel" + currentStep).show();
        //    initializeDrawView();
        //    break;
        //case 2:
        //    currentStep++;
        //    $(".panel").hide();
        //    $("#panel" + currentStep).show();
        //    $("#panel2Chart1").contents().appendTo($("#panel3Chart1"));
        //    $("#btnNext").hide();            
        //    $("#res2").contents().appendTo($("#res3"));
        //    $("#btnNext").show();
        //    break;
        case 3:
            currentStep++;
            $(".panel").hide(1000);
            $("#panel" + currentStep).show();
            setupNormalSimulation();
            break;
        case 4:
            currentStep++;           
            $(".panel").fadeOut(100);
            $("#panel" + currentStep).fadeToggle(1000);
            $("#panel4Chart1").contents().appendTo($("#panel5Chart1"));
            $("#panel4Chart2").contents().appendTo($("#panel5Chart2"));          
            showThreshold();
            
            break;
        case 5:
            currentStep++;
            $(".panel").fadeOut(100);
            $("#panel" + currentStep).fadeToggle(1000);
            $("#btnNext").show();
            break;   
        case 6:
            currentStep++;
            $(".panel").fadeOut(100);
            $("#panel" + currentStep).show();
            setupSDSimulation();
            $("#btnNext").hide();
            break;
        case 7:
            currentStep++;
            $(".panel").fadeOut(100);
            $("#panel" + currentStep).show();
            setupUserSimulation();
            $("#btnNext").show();
            break;
        case 8:
            currentStep++;
            $(".panel").fadeOut(100);
            $("#panel" + currentStep).fadeToggle(1000);
            $("#btnNext").hide();
            $("#surveyCode").text(pid);
            break;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    logger.begin('screen' + currentStep);
}

// PANEL 1

function getCaseCount() {
    $.ajax({
        url: '/count',
        type: 'post',
        dataType: 'json',        
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $("#count").text(data.count);
        }
    });
}

//nothing now, the getcount service stopped working

// PANEL 2
function initializeDrawView() {
    document.getElementById("showMe").disabled = true;
    $("#btnNext").hide();
    var width = Math.min($("#panel2Chart1").width(), 700);
    var height = Math.min($("#panel2Chart1").width() * 0.6, 400);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]).domain([0, 200]);
    var margin = { left: 50, right: 50, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#panel2Chart1');
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
    var userDrawStart = 10;
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
        .attr('x', c.x(trendData[userDrawStart].day-1))
        .attr('y', c.y(trendData[userDrawStart].cases)-38)
        .attr('width', 48)
        .attr('height', 48)
        .attr("xlink:href", "images/pencil.png");

    // hospital threshold line
    c.svg.append("line")     
        .attr("class", "pencil")
        .attr("stroke-width", 2)
        .attr("stroke", "#BF471B")
        .attr("x1", c.x(defaultSimulationOptions.nDays))
        .attr("y1", c.y(0))
        .attr("x2", c.x(defaultSimulationOptions.nDays))
        .attr("y2", c.y(200));

    c.svg.append("text")
        .attr("fill", "#BF471B")
        .attr("class", "pencil")
        .attr("transform", "translate(" + (c.x(defaultSimulationOptions.nDays) + 5) + "," + c.y(160) + ")rotate(90)")
        .style("text-anchor", "left")
        .text("Draw to this line");


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
            if (completed) {
                return;
            }
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
        logger.record({
            // Clone the data to avoid it accidentally being modified before 
            // the request is sent to the db.
            guess: _.cloneDeep(yourData)
        })
        $("#showMe").hide();
        $(".result").delay(1000).fadeIn(0);
        $("#btnNext").show();
        $("#pencil").hide();
        $(".pencil").hide();
    });
    function clamp(a, b, c) { return Math.max(a, Math.min(b, c)); }
}

// PANEL 3

//nothing for now

// PANEL 4
function setupNormalSimulation() {
    $("#btnNext").hide();
    //_.range(7, 0).forEach(function (t) {
    //    yourData.unshift({ day: trendData[t].day, cases: trendData[t].cases, defined: true });
    //});
    drawNormalSimulationChart();
    reSimuluateNormal = false;
    var simOptions = _.cloneDeep(defaultSimulationOptions);
    simOptions.diseaseSpread.infectionMultiplier = 6.0;
    // initialize simulation canvas
    world = defaultSimulationData.world;
    world.reset();
    renderer = new PandemicSimulator.Models.DotWorldRenderer(
      simOptions,
      document.getElementById('panel4Chart1')
    );
    renderer.renderState(world.getSummary(true));
}

function drawNormalSimulationChart() {
    $("#panel4Chart2").empty();
    var width = Math.min($("#panel4Chart2").width(), 700);
    var height = Math.min($("#panel4Chart2").width() * 0.5, 400);
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
    c.y.domain([0, defaultSimulationOptions.population.size]);


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
        .attr("stroke-width", 3)
        .attr("stroke", "#731D0A")
        .attr("x1", c.x(1))
        .attr("y1", c.y(threshold))
        .attr("x2", c.x(defaultSimulationOptions.nDays))
        .attr("y2", c.y(threshold));

    // hospital threshold text
    c.svg.append("text")
        .attr("class", "label threshold")
        .attr("display", "none")
        .attr("id", "thresholdLabel")
        .attr("transform", "translate(" + c.x(2) + "," + (c.y(threshold) - 15) + ")")
        .style("text-anchor", "left")
        .text("Total hospital beds = 20");

    // hospital threshold area
    c.svg.append("defs").append("pattern")
        .attrs({ id: "hash4_4", width: "15", height: "8", patternUnits: "userSpaceOnUse", patternTransform: "rotate(60)" })
        .append("rect")
        .attrs({ width: "4", height: "8", transform: "translate(0,0)", fill: "#FF5722", opacity:0.6 });

    var diffarea = d3.area().x(f('day', c.x)).y0(f('cases', c.y)).y1(c.y(threshold));
    correctSel.append('path.diffarea')
        .at({ d: diffarea(_.filter(normalSimulationData, function (t) { return t.cases >= threshold; })) })
        .attr("class", "threshold")
        .attr("display", "none")
        .attr("fill", "#f5683b");

    //yourDataSel = c.svg.append('path.your-line');
    //yourDataSel.at({ d: line.defined(f('defined'))(yourData) });
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
    renderer.renderRealtime(world, (state) => updateChart(state.day + 1, state.counts.cumulativeCases)); /////////////////////// Render state sequences instead.
    document.getElementById("btnNormalSim").disabled = true;
}

function resetNormalSimulation() {
    document.getElementById("btnNormalSim").disabled = true;
    renderer.showLoading();
    world.reset();
    reSimuluateNormal = false;
    drawNormalSimulationChart();
}

// PANEL 3
function showThreshold() {   
    $(".your-line").hide();
    $(".threshold").show();
    $(".area").css("fill", "#731D0A");
    if (normalSimulationData && normalSimulationData.length > 0) {
        simulationWorld.showOverflow(normalSimulationData[normalSimulationData.length - 1].cases - 20);
    }    
}

// PANEL 7
function setupSDSimulation() {
    $("#btnNext").hide();
    drawSDSimulationChart();
    reSimuluateSD = false;
    var simOptions = _.cloneDeep(defaultSimulationOptions);
    simOptions.diseaseSpread.keepDistance.everyoneOver = 0;
    simOptions.diseaseSpread.keepDistance.everyoneUnder = 200;
    simOptions.diseaseSpread.wearMask.everyoneOver = 0;
    simOptions.diseaseSpread.wearMask.everyoneUnder = 200;
    var results = PandemicSimulator.runSimulations(simOptions);
    world = results.world;
    world.reset();
    renderer = new PandemicSimulator.Models.DotWorldRenderer(
      simOptions,
      document.getElementById("panel7Chart1")
    );
    renderer.renderState(world.getSummary(true));
}

function drawSDSimulationChart() {
    $("#panel7Chart2").empty();
    var width = Math.min($("#panel7Chart2").width(), 700);
    var height = Math.min($("#panel7Chart2").width() * 0.6, 500);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scalePow().range([height, 0]);
    var margin = { left: 50, right: 0, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#panel7Chart2');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });

    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 1 }).attr("fill", "white");

    c.x.domain([1, defaultSimulationOptions.nDays + 1]);
    c.y.domain([0, defaultSimulationOptions.population.size]);


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
        .attr("stroke-width", 3)
        .attr("stroke", "#731D0A")
        .attr("x1", c.x(1))
        .attr("y1", c.y(threshold))
        .attr("x2", c.x(defaultSimulationOptions.nDays))
        .attr("y2", c.y(threshold));

    // hospital threshold text
    c.svg.append("text")
        .attr("class", "label threshold")       
        .attr("id", "thresholdLabel")
        .attr("transform", "translate(" + c.x(2) + "," + (c.y(threshold) - 15) + ")")
        .style("text-anchor", "left")
        .text("Total hospital beds = 20");

    //yourDataSel = c.svg.append('path.your-line');
    //yourDataSel.at({ d: line.defined(f('defined'))(yourData) });

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
    renderer.renderRealtime(world, (state) =>
      updateChart(state.day + 1, state.counts.cumulativeCases)
    );
    document.getElementById("btnSDSim").disabled = true;
}

function resetSDSimulation() {
    document.getElementById("btnSDSim").disabled = true;
    reSimuluateSD = false;
    sdSimulationData = [];
    drawSDSimulationChart();
    world.reset();
    renderer.showLoading();
}

// PANEL 8

function setupUserSimulation() {
    $("#btnNext").hide();
    // Set default options
    userSimulationOptions = _.cloneDeep(defaultSimulationOptions);

    //set up controls
    for (const sId in sliders) {
        var s = sliders[sId];
        $("#" + sId).attr("min", 0).attr("max", s.values.length - 1).attr("value", s.default);
        // $("#" + sId + "Text").text(s.hasOwnProperty('labels') ? s.labels[s.default] : s.values[s.default]);
        $("#" + sId + "Explanation").text(s.hasOwnProperty('explanations') ? s.explanations[s.default] : 'Explanation Not Found');
        if (s.type === "slider") {
            applyFill(document.getElementById(sId));
        }
        s.update(userSimulationOptions, s.values[s.default]);
    }
   // draw linegraph
   drawUserSimulationChart();

   // setup dot simulation
    renderer = new PandemicSimulator.Models.DotWorldRenderer(
        userSimulationOptions,
        document.getElementById("panel8Chart1")
    );
}

function drawUserSimulationChart() {
    $("#panel8Chart2").empty();
    var width = Math.min($("#panel8Chart2").width(), 700);
    var height = Math.min($("#panel8Chart2").width() * 0.6, 500);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scalePow().range([height, 0]);
    var margin = { left: 50, right: 0, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#panel8Chart2');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });

    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 1 }).attr("fill", "white");

    c.x.domain([1, defaultSimulationOptions.nDays + 1]);
    c.y.domain([0, defaultSimulationOptions.population.size]);


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
        .attr("stroke-width", 3)
        .attr("stroke", "#731D0A")
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
       fill: '#BF471B',
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
    const v = s.values[i];
    s.update(userSimulationOptions, v);
    // $("#" + slider.id + "Text").text(s.hasOwnProperty('labels') ? s.labels[i] : v);
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
  if ($(this).attr("disabled")) {
    return;
  }
  userSimulationData = [];

  // simulate
  function updateChart(day, count) {
    if (day > 0 && day <= userSimulationOptions.nDays) {
      userSimulationData.push({ day: day, cases: count });
      drawUserSimulationChart();
    }
    if (day === userSimulationOptions.nDays) {
      $("#btnNext").show();
      document.getElementById("btnUserSim").disabled = false;
      reSimuluateSD = true;
      userPreviousSimulationData = _.cloneDeep(userSimulationData);
      userPreviousSimulationOptions = _.cloneDeep(userSimulationOptions);
      userSimulationStartTime = logger.recordSimulation({
        data: userSimulationData,
        params: userSimulationOptions,
        start: userSimulationStartTime,
        end: new Date(),
      });
      addSmallMultipleChart();
    }
  }

  var results = PandemicSimulator.runSimulations(userSimulationOptions);
  console.log(results);
  world = results.world;
  world.reset();
  userSimulationStartTime = new Date();
  renderer.renderRealtime(world, (state) =>
    updateChart(state.day + 1, state.counts.cumulativeCases)
  );
  document.getElementById("btnUserSim").disabled = true;
}

function addSmallMultipleChart() {
    if (smcount % 3 === 0) {
        parentDiv = $("<div class='row'></div>");
        $("#mysimulations").append(parentDiv);
    }
    smcount++;
    var div = $("<div  class='one-third column userSM'><div id='userchart" + userSimCount + "' class='row'></div></div>");
    $(parentDiv).append(div);
      
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
    c.x.domain([1, userPreviousSimulationOptions.nDays + 1]);
    c.y.domain([0, userPreviousSimulationOptions.population.size]);
    c.xAxis.ticks(0).tickFormat(f());
    c.yAxis.ticks(5).tickFormat(f());
    c.drawAxis();

    var line = d3.line().x(f('day', c.x)).y(f('cases', c.y)).curve(d3.curveMonotoneX);
    var area = d3.area().x(f('day', c.x)).y0(f('cases', c.y)).y1(c.height);

    c.svg.append('path').at({ d: area(userPreviousSimulationData) }).attr("fill","#731D0A");
    c.svg.append("g")
        .append('path.line').at({ d: line(userPreviousSimulationData) })        
        .attr("stroke", "#13BA81");

    c.svg
      .append("line")
      .attr("id", "threshold")
      .attr("class", "threshold")
      .attr("stroke-width", 2)
      .attr("stroke", "#731D0A")
      .attr("x1", c.x(1))
      .attr("y1", c.y(20))
      .attr("x2", c.x(userPreviousSimulationOptions.nDays))
      .attr("y2", c.y(20));
    var threshold = 20;

    c.svg.append("defs").append("pattern")
        .attrs({ id: "hash4_4", width: "15", height: "8", patternUnits: "userSpaceOnUse", patternTransform: "rotate(60)" })
        .append("rect")
        .attrs({ width: "4", height: "8", transform: "translate(0,0)", fill: "#034AA6", opacity: 0.6 });

    var diffarea = d3.area().x(f('day', c.x)).y0(f('cases', c.y)).y1(c.y(threshold));
    c.svg.append('path.diffarea')
        .at({ d: diffarea(_.filter(userPreviousSimulationData, function (t) { return t.cases >= threshold; })) })
        .attr("class", "threshold")       
        .attr("fill", "#f5683b");
    
    // function optionToSpan(_, tag){
    //     var span = $('<span/>')
    //         .addClass($(tag).is(":checked") ? "selected-sim-option": "unselected-sim-option")
    //         .html($("label[for='" + $(tag).val() + "']").text()).get();
    //     return span
    // }
    // $(div).append(
    //     $("<div class='row criteria'></div>")
    //         .append(
    //             $('<div/>').append(
    //                 $('<p class="criteria-group"></p>').append($(".behavGroup").map(optionToSpan).get()),
    //                 $('<p class="criteria-group"></p>').append($(".peopleGroup").map(optionToSpan).get())
    //             ),
    //             $('<div/>').append(`
    //             <p class="age-criterion">
    //                 <span>
    //                     <span class="unselected-sim-option">Average Population Age: </span>
    //                     <span class=selected-sim-option>${sliders["ageSlider"].values[$('#ageSlider').val()]}</span>
    //                 </span>
    //             </p>`)
    //         )
    // )
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