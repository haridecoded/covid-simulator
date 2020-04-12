class Person {
    constructor(context, { index, movingState, infectedState, x, y, radius, speedMultiplier =1, name = null}) {
        this.context = context;
        //super(context, { index, movingState });

        this.index = index;
        this.movingState = movingState;
        this.infectedState = infectedState;
        this.infectedTime;
        this.radius = radius; //3.4
        //this.isColliding = false;
        this.data = null;
        this.x = x;
        this.y = y;

        let rand = (Math.random() * 100 +1) - 50;
        let oppRand = (Math.random() * 100 +1) - 50;

        this.speedMultiplier = speedMultiplier;

        if (this.movingState === 'moving') {
            this.vx = rand * this.speedMultiplier;
            this.vy = oppRand * this.speedMultiplier;
            this.mass = 1;
        }
        if (this.movingState === 'home') {
            this.vx = 0;
            this.vy = 0;
            this.mass = 10000000000000000;
        }
        if (isNaN(this.x) || isNaN(this.y) || isNaN(this.vx) || isNaN(this.vy)) {
            console.log("Detected NaN in constructor");
        }
        else {
            console.log("Added person");
        }
    }

    kill() {
        this.movingState = 'home';
        this.infectedState = 'dead';
        this.vx = 0;
        this.vy = 0;
        this.mass = 10000000000000000;
        console.log("killed");
    }

    highlight() {
        this.context.fillStyle = "#ff9800";
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.context.fill();
    }

    draw() {
        
        let color;

        if (this.infectedState === 'dead') {
            //this.radius = 4.5;
            //this.context.fillRect(this.x - 4, this.y - 4, 8, 8 );
            color = '#555555';
        }

        //else if (Date.now() - this.infectedTime > 5000) {
        //    this.infectedState = 'recovered';
        //    color = '#b9003e';
        //}

        else if (this.infectedState === 'sick') color = '#b9003e';

        else if (this.movingState === 'home') color = '#3a434c'; //'#0099b0';

        else if (this.infectedState === 'healthy') color = '#AAAAAA'; //'#0099b0';

        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.context.fill();
      
        
        if (this.name) {
            // this.context.font = "16px Arial";
            // this.context.fillText(this.name, this.x + 7, this.y + 7);

            var fontsize = 16;
            var fontface = 'Verdana';
            var lineHeight = fontsize * 1.286;

            this.context.font = 'bold '+fontsize + 'px ' + fontface;
            var textWidth = this.context.measureText(this.name).width;

            this.context.textAlign = 'left';
            this.context.textBaseline = 'top';

            this.context.fillText(this.name, this.x + 18, this.y - 7);
            this.context.lineWidth = 2;
            this.context.strokeStyle = color;
            //this.context.strokeRect(this.x + 6, this.y - 10, textWidth + 8, lineHeight);
            this.context.beginPath();
            this.context.moveTo(this.x + 14, this.y - 11);
            this.context.lineTo(this.x + 14 + textWidth + 10, this.y - 11);
            this.context.lineTo(this.x + 14 + textWidth + 10, this.y - 11 + lineHeight);
            this.context.lineTo(this.x + 14, this.y - 11 + lineHeight);
            this.context.lineTo(this.x + 8, this.y);
            this.context.lineTo(this.x + 14, this.y - 11);
            //this.context.fill();
            this.context.stroke();
        }
        
        // this.context.stroke();
    }

    update(secondsPassed) {
        //Move with set velocity   
        secondsPassed = secondsPassed % 0.1;
        this.x += this.vx * secondsPassed;
        this.y += this.vy * secondsPassed;             
    }
}