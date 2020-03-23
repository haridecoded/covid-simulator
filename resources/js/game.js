/*
https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics

fastfowrd button
US/GLOBAL summary at the end
set me to center quad
*/

class GameWorld {

    constructor(canvasId) {
        this.canvas = null;
        this.context = null;
        this.oldTimeStamp = 0;
        this.gameObjects = [];
        this.resetCounter = 0;

        //this.healthyCountEl = document.querySelector('.stats__healthy-count');
        //this.contagiousCountEl = document.querySelector('.stats__contagious-count');
        //this.recoveredCountEl = document.querySelector('.stats__recovered-count');
        //this.deathCountEl = document.querySelector('.stats__death-count');
        //this.percentContractedEl = document.querySelector('.stats__percent-contracted');

        //this.statusBarHealthy = document.querySelector('.stats__bar-healthy');
        //this.statusBarContagious = document.querySelector('.stats__bar-contagios');
        //this.statusBarRecovered = document.querySelector('.stats__bar-recovered');
        //this.statusBarDeaths = document.querySelector('.stats__bar-deaths');
        //this.statusBarGotSick = document.querySelector('.stats__bar-got-sick');

        this.updateStatsInterval;
        this.mostRecentDeathIndex = 0;
        this.rafCounter = 0;
        this.userMode;

        this.desktopMarginOffset = 300;
        this.mobileBreakPointWidth = 800; //keep in line with CSS

        this.init(canvasId);
    }

    init(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth < this.mobileBreakPointWidth ? window.innerWidth : window.innerWidth - this.desktopMarginOffset
        this.canvas.height = window.innerHeight;

        this.canvasLeft = 0;
        this.canvasTop = 0;
        this.canvasRight = this.canvas.offsetWidth;
        this.canvasBottom = this.canvas.offsetHeight;

        let defaultInfectedCount = 10;

        this.createWorld({
            percentHome: +document.querySelector('.percent__input').value,
            infectedCount: defaultInfectedCount
        });

        let percentDisplay = document.querySelector('.percent__title span');
        document.querySelector('.percent__input').addEventListener('change', (e) => {
            this.resetWorld()
            this.createWorld({
                percentHome: +e.target.value,
                infectedCount: defaultInfectedCount,
                userMode: this.userMode
            });
            percentDisplay.textContent = Math.ceil(e.target.value * 100) + '%';
        })
        document.querySelector('.percent__input').addEventListener('input', (e) => {
            percentDisplay.textContent = Math.ceil(e.target.value * 100) + '%';
        })
        percentDisplay.textContent = document.querySelector('.percent__input').value * 100 + '%';
        // document.querySelector('.starting-contageous').addEventListener('change', (e) => {
        //     console.log(e)
        //     this.resetWorld()
        //     this.createWorld({
        //         percentHome: +document.querySelector('.percent__input').value,
        //         infectedCount: e.target.value
        //     });
        // })

        document.querySelectorAll('.modal__button').forEach(button => {
            button.addEventListener('click', e => {
                let modal = document.querySelector('.modal')
                modal.parentNode.removeChild(modal);
                this.userMode = button.value;

                this.createWorld({
                    percentHome: +document.querySelector('.percent__input').value,
                    infectedCount: defaultInfectedCount,
                    userMode: this.userMode
                });
            })
        })

        window.requestAnimationFrame((timeStamp) => { this.gameLoop(timeStamp) });

        let lastWindowWidth = window.innerWidth;
        window.addEventListener("resize", this.debounce(function (e) {

            if (lastWindowWidth != window.innerWidth) {
                this.canvas.width = window.innerWidth < this.mobileBreakPointWidth ? window.innerWidth : window.innerWidth - this.desktopMarginOffset
                this.canvas.height = window.innerHeight;
                this.canvasRight = this.canvas.offsetWidth;
                this.canvasBottom = this.canvas.offsetHeight;

                this.createWorld({
                    percentHome: +document.querySelector('.percent__input').value,
                    infectedCount: defaultInfectedCount,
                    userMode: this.userMode
                });

                lastWindowWidth = this.canvas.width
                console.log('debounced')
            }

            console.log('trying to debounced', this, lastWindowWidth)

        }.bind(this)));
    }

    resetWorld() {
        this.gameObjects = [];
    }

    createWorld({ percentHome, infectedCount, userMode = null }) {
        let totalPeople = 1000;
        let homeCount = Math.ceil(totalPeople * percentHome);
        let movingCount = Math.ceil(totalPeople * (1 - percentHome));

        let speedMultiplier = window.innerWidth < this.mobileBreakPointWidth ? .45 : 1;

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
            })
        })

        let home = Array.from(Array(homeCount)).map((val, index) => {
            return new Person(this.context, {
                index,
                movingState: 'home',
                infectedState: 'healthy',
                x: Math.ceil((Math.random() * this.canvasRight) / 10) * 10,
                y: Math.ceil((Math.random() * this.canvasBottom) / 10) * 10,
                radius: Math.min(this.canvas.width / 225, 3.4),
                speedMultiplier
            })
        })

        let infected = Array.from(Array(+infectedCount)).map((val, index) => {
            let rand = (Math.random() * 30) + 25;
            return new Person(this.context, {
                index,
                movingState: 'moving',
                infectedState: 'sick',
                x: Math.ceil((Math.random() * this.canvasRight) / 10) * 10,
                y: Math.ceil((Math.random() * this.canvasBottom) / 10) * 10,
                radius: Math.min(this.canvas.width / 225, 3.4),
                infectedTime: Date.now(),
                speedMultiplier
            })
        })


        if (userMode) {
            if (userMode == 'moving') {
                moving[moving.length - 1].name = 'YOU';
                moving[moving.length - 1].x = this.canvasRight / 2;
                moving[moving.length - 1].y = this.canvasBottom / 2;
            }
            if (userMode == 'home') {
                home[home.length - 1].name = 'YOU';
                home[home.length - 1].x = this.canvasRight / 2;
                home[home.length - 1].y = this.canvasBottom / 2;
            }
        }

        this.gameObjects = [...infected, ...moving, ...home]


    }

    gameLoop(timeStamp) {

        // Calculate how much time has passed
        var secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;

        // Loop over all game objects to update
        this.gameObjects.forEach(go => go.update(secondsPassed));

        if (this.rafCounter % 5 == 0) {
            this.detectWall();
            this.detectCollisions();
        }

        if (this.rafCounter % 3 == 0) {
            this.updateStats();
        }
        this.rafCounter++

        this.clearCanvas();



        // Loop over all game objects to draw
        this.gameObjects.forEach(go => go.draw())

        // The loop function has reached it's end
        // Keep requesting new frames
        window.requestAnimationFrame((timeStamp) => this.gameLoop(timeStamp));
    }

    updateStats() {

        let self = this;

        // if (!this.updateStatsInterval) {
        //     this.updateStatsInterval = setTimeout(update, 500)
        // }

        update()

        function update() {
            let healthyCount = self.gameObjects.filter(person => person.infectedState == 'healthy').length
            let contagiousCount = self.gameObjects.filter(person => person.infectedState == 'sick').length;
            let recoveredCount = self.gameObjects.filter(person => person.infectedState == 'recovered').length;
            let deathCount = Math.floor(self.gameObjects.filter(person => person.infectedState != 'healthy').length * .03);
            let percentContractedCount = self.gameObjects.filter(person => person.infectedState == 'sick' || person.infectedState == 'recovered').length / 10;

            //if (contagiousCount == 0) alert('The virus was run its course. Now see what happens if more people would have stayed home...')
            //self.updateDeaths(deathCount)

            //self.healthyCountEl.textContent = healthyCount
            //self.contagiousCountEl.textContent = contagiousCount;
            //self.recoveredCountEl.textContent = recoveredCount
            //self.deathCountEl.textContent = deathCount;
            //self.percentContractedEl.textContent = (percentContractedCount).toFixed(1) + '%'


            //self.statusBarHealthy.style.width = ((healthyCount / 1000) * 260) + 'px'
            //self.statusBarContagious.style.width = ((contagiousCount / 1000) * 260) + 'px'
            //self.statusBarRecovered.style.width = ((recoveredCount / 1000) * 260) + 'px'
            //self.statusBarDeaths.style.width = ((deathCount / 1000) * 260) + 'px'
            //self.statusBarGotSick.style.width = ((percentContractedCount / 100) * 260) + 'px'



            self.updateStatsInterval = null;
        }

    }

    updateDeaths(deathCount) {
        Array.from(Array(deathCount)).forEach((val, index) => {
            this.gameObjects[index].kill();
        })
    }

    detectCollisions() {
        var obj1;
        var obj2;

        //this.gameObjects.forEach(go => go.isColliding = false)

        for (var i = 0; i < this.gameObjects.length; i++) {
            obj1 = this.gameObjects[i];
            for (var j = i + 1; j < this.gameObjects.length; j++) {
                obj2 = this.gameObjects[j];

                //if (this.rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, obj2.x, obj2.y, obj2.width, obj2.height)) {
                if (this.circleIntersect(obj1, obj2)) {
                    // obj1.isColliding = true;
                    // obj2.isColliding = true;

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

                    if (obj1.infectedState == 'sick' || obj2.infectedState == 'sick') {

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
        })

    }

    circleIntersect(circle1, circle2) {

        var dx = circle1.x - circle2.x;
        var dy = circle1.y - circle2.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        return distance < (circle1.radius + circle2.radius) + 2
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