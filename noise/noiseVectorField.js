let inc = .005;
let scl = 30;
let cols, rows;
let zOff = 0;
let particles = [];
let flowField = [];

function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 255);
    cols = floor(width / scl);
    rows = floor(height / scl);
    flowField = new Array(cols * rows);
    frameRate(30);
    for (let i = 0; i < 35; i++) {
        particles[i] = new Particle();
    }
    background(51);
}

function draw() {
    background(0, 0, 17, 5);
    var yOff = 0;
    for (let y = 0; y < rows; y++) {
        var xOff = 0;

        for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = noise(xOff, yOff, zOff) * TWO_PI * 3;
            let v = p5.Vector.fromAngle(angle);
            flowField[index] = v;
            v.setMag(1);
            xOff += inc;
            stroke(0, 50);
        }
        yOff += inc;
        zOff += 0.0003;
    }




    for (let i = 0; i < particles.length; i++) {
        particles[i].follow(flowField);
        particles[i].update();
        particles[i].edges();
        particles[i].show();

    }

}

function Particle() {

    // let heightRange = (Math.random() + 100) * 5;
    this.pos = createVector(-10, random(height) + 10);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 2;
    this.prevPos = this.pos.copy();
    this.h = 0;

    this.update = function () {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.xOff = 0;
        this.yOff = 0;

    }
    this.follow = function (vectors) {
        let x = floor(this.pos.x / scl);
        let y = floor(this.pos.y / scl);
        let index = x + y * cols;
        let force = vectors[index];
        this.applyForce(force);
    }
    this.applyForce = function (force) {
        this.acc.add(force);
    }
    this.show = function () {
        // noFill();
        // fill(80, 255, 255, 90);
        let a = 35;
        strokeWeight(3);
        this.h = this.h + .5;
        if (this.h > 255) {
            this.h = 0;
        }
        // let n = noise(this.xOff, this.yOff) * 400;
        let n = (noise(this.pos.x, this.pos.y) + 3) * 90;
        let drawX1 = this.pos.x;
        let drawY1 = this.pos.y;
        let inc = 3;
        let height = (Math.random() * 100) + 200;
        for (let i = 0; i < height; i++) {
            fill(this.h, 240, 240, a);
            noStroke();
            ellipse(drawX1, drawY1, 2, 2);


            // drawX1 += inc;
            drawY1 -= inc;
            a -= .3;
        }

        //from the position 

        // line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - n);

        this.updatePrev();
        // this.xOff += inc;
        // this.yOff += inc;
    }
    this.updatePrev = function () {
        this.prevPos.y = this.pos.y;
        this.prevPos.x = this.pos.x;
        // background(0, 13, 17, 30);
    }
    this.edges = function () {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }
}