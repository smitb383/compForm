let inc = 0.01;
let start = 0;

function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
    smooth();
    // colorMode(HSB);
    colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
    background(0, 0, 0);
    stroke(255);
    noFill();
    beginShape();
    let xOff = start;
    for (let x = 0; x < width; x++) {
        let y = noise(xOff) * height;
        vertex(x, y);
        xOff += inc;
    }
    endShape();
    start += inc;
}