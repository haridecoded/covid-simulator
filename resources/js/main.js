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
var simulationWorld;

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
    $("#threshold").fadeIn(4000);
    $("#thresholdLabel").fadeIn(4000);  
    $(".your-line").fadeOut(500);
    $(".your-line-circle").fadeOut(500);
}

// PANEL 4
function setupNormalSimulation() {
    $("#btnNext").hide();   
    // initialize line graph
    //_.range(1, 31).forEach((v, i) => {
    //    normalSimulationData.push({ "day": v, cases: 0 });
    //});
    drawNormalSimulationChart();

    // initialize simulation canvas
    simulationWorld = new SimulationWorld('normalCanvas', .2, 500, 0, null, null);

}

function drawNormalSimulationChart() {
    $("#panel4Chart2").empty();
    var width = Math.min($("#panel4Chart2").width(), 700);
    var height = Math.min($("#panel4Chart2").width() * 0.6, 500);
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scalePow().range([height, 0]);
    var margin = { left: 70, right: 0, top: 30, bottom: 70 };

    var f = d3.f;

    var sel = d3.select('#panel4Chart2');
    var c = d3.conventions({
        parentSel: sel,
        totalWidth: width,
        height: height,
        margin: margin
    });

    c.svg.append('rect').at({ width: c.width, height: c.height, opacity: 0 });

    c.x.domain([1, 31]);
    c.y.domain([0, 300]);
    //c.y.domain([0, d3.max(normalSimulationData, function (d) { return d.cases; })]);
   

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

function simulateSpreadNormal() {
    if ($(this).attr('disabled')) {
        return;
    }
    normalSimulationData = [];
    function updateChart(day, count) {
        if (day > 0 && day < 31) {
            //_.find(normalSimulationData, function (d) { if (d.day === day) { d.cases = count; } });
            normalSimulationData.push({ "day": day, "cases": count>300? 300:count });
        }
        drawNormalSimulationChart();
    }
    simulationWorld = new SimulationWorld('normalCanvas', .2, 500, 2, 30, updateChart);
    $("#btnNext").show();
    document.getElementById("btnNormalSim").disabled = true;
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
class SimulationWorld {

    constructor(canvasId, percentHome, populationSize, infectedCount, days, callback) {
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

        this.init(canvasId);
        this.update = callback;
        this.days = days;
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
            userMode: this.userMode
        });

        window.requestAnimationFrame((timeStamp) => { this.gameLoop(timeStamp);});    
    }

    resetWorld() {
        this.gameObjects = [];
    }

    createWorld({ percentHome, infectedCount, userMode = null }) {
        let homeCount = Math.ceil(this.totalPeople * this.percentHome);
        let movingCount = Math.ceil(this.totalPeople * (1 - percentHome));
        let speedMultiplier = 0.55;

        let moving = Array.from(Array(movingCount)).map((val, index) => {
            let rand = (Math.random() * 100) - 50;
            return new Person(this.context, {
                index,
                movingState: 'moving',
                infectedState: 'healthy',
                x: Math.ceil((Math.random() * this.canvasRight) / 10) * 10,
                y: Math.ceil((Math.random() * this.canvasBottom) / 10) * 10,
                radius: Math.min(this.canvas.width / 225, 3.4),
                speedMultiplier
            });
        });

        let home = Array.from(Array(homeCount)).map((val, index) => {
            return new Person(this.context, {
                index,
                movingState: 'home',
                infectedState: 'healthy',
                x: Math.ceil((Math.random() * this.canvasRight) / 10) * 10,
                y: Math.ceil((Math.random() * this.canvasBottom) / 10) * 10,
                radius: Math.min(this.canvas.width / 225, 3.4),
                speedMultiplier
            });
        });

        let infected = Array.from(Array(+infectedCount)).map((val, index) => {
            return new Person(this.context, {
                index,
                movingState: 'moving',
                infectedState: 'sick',
                x: infectedCount === 1 ? 100: Math.ceil((Math.random() * this.canvasRight) / 10) * 10,
                y: infectedCount === 1 ? 100 : Math.ceil((Math.random() * this.canvasBottom) / 10) * 10,
                radius: Math.min(this.canvas.width / 225, 3.4),
                infectedTime: Date.now(),
                speedMultiplier
            });
        });

        

        this.gameObjects = [...infected, ...moving, ...home];
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

        if (this.rafCounter % 30 === 0) {
            let contagiousCount = this.gameObjects.filter(person => person.infectedState === 'sick').length;
            if (this.update) {
                this.update.call(this, this.dayCount, contagiousCount);
            }            
            this.dayCount++;
        }

        this.rafCounter++;

        

        // Loop over all game objects to draw
        //if (this.days) {
        //    if (this.dayCount < this.days) {
        //        this.clearCanvas();
        //        this.gameObjects.forEach(go => go.draw());
        //    }
        //}
        // else {
        //    this.clearCanvas();
        //    this.gameObjects.forEach(go => go.draw());
        //}

        this.clearCanvas();
        this.gameObjects.forEach(go => go.draw());
      
        // Keep requesting new frames
        window.requestAnimationFrame((timeStamp) => this.gameLoop(timeStamp));

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
                    var vCollisionNorm = { x: vCollision.x / distance, y: vCollision.y / distance };
                    var vRelativeVelocity = { x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy };
                    var speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

                    if (speed < 0) {
                        break;
                    }

                    var impulse = 2 * speed / (obj1.mass + obj2.mass);
                    obj1.vx -= (impulse * obj2.mass * vCollisionNorm.x);
                    obj1.vy -= (impulse * obj2.mass * vCollisionNorm.y);
                    obj2.vx += (impulse * obj1.mass * vCollisionNorm.x);
                    obj2.vy += (impulse * obj1.mass * vCollisionNorm.y);

                    if (obj1.infectedState === 'sick' || obj2.infectedState === 'sick') {

                        obj2.infectedState = obj1.infectedState = 'sick';

                        if (!obj1.infectedTime) obj1.infectedTime = Date.now();
                        if (!obj2.infectedTime) obj2.infectedTime = Date.now();
                    }
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
            if (go.y + go.radius > this.canvasBottom) {
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


}