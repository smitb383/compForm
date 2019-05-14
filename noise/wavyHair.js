let inc = 0.05;
let scl = 6;
let cols, rows;
let zOff = 0;
let b = 30;

function setup() {
    createCanvas(782, 540);
    // background(0, 0, 0);
    colorMode(HSB, 360, 100, 100, 1);
    cols = floor(width / scl);
    rows = floor(height / scl);
    // colorMode(HSB);
    frameRate(5);

}

function draw() {
    background(30, 87, 0, .2);
    strokeWeight(1);

    var yOff = 0;
    for (let y = 0; y < rows; y++) {
        var xOff = 0;
        strokeWeight(1);

        noFill();

        for (let x = 0; x < cols; x++) {
            let index = (x + y * width) * 4;
            let angle = noise(xOff, yOff, zOff) * TWO_PI;
            let v = p5.Vector.fromAngle(angle);
            xOff += inc;

            push();
            b = noise(xOff, yOff) * 100;
            stroke(109, 90, b, .1);
            translate(x * scl, y * scl);
            rotate(v.heading());
            line(0, 0, scl, scl + 40);
            pop();
            // rect(x * scl, y * scl, scl, scl);
        }
        yOff += inc;
    }
    zOff += inc;

    // noLoop();
}