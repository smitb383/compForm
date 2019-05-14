let angle = 0;
let numLines = 500;
let change = 20;
// let v1 = 0.4

function setup() {
    background(0, 0, 0, 1);
    createCanvas(600, 600);
    smooth();
    colorMode(RGB, 255, 255, 255, 1);
    stroke(0, 0, 255, .5);
    noFill();
    //less can be seen as speed 

    createP('variation');
    variationSlider = createSlider(.1, .7, .3, .05);
    v1 = variationSlider.value();
    createP('size');
    sizeSlider = createSlider(50, 200, 100, 10);
    size = sizeSlider.value();
    createP('line length');
    lengthSlider = createSlider(1, 20, 10, 1);
    lineLength = lengthSlider.value();
    createP('speed');
    speedSlider = createSlider(.005, .04, .01, .005);
    speedLength = speedSlider.value();

}

function draw() {
    background(0, 0, 0, 1);
    angle += 0.04;
    translate(width / 2, height / 2);
    rotate(sin(angle));
    strokeWeight(2);
    //draw lines 
    for (i = 1; i < numLines; i++) {
        point1 = {
            x: point1X(change + i),
            y: point1Y(change + i),
        };
        // point1 = (point1X(change + i), point1Y(change + i));


        point2 = {
            x: point2X(change + i),
            y: point2Y(change + i),
        };
        line(point1.x, point1.y, point2.x, point2.y);
    }
    //bigger lines smaller and more of them 
    change += speedSlider.value();
}


function point1X(change) {
    return sin(change) * lengthSlider.value() + cos(change / variationSlider.value()) * sizeSlider.value();
}


function point1Y(change) {
    return cos(change * 2) * lengthSlider.value() + sin(change / variationSlider.value()) * sizeSlider.value();
}


function point2X(change) {
    return sin(change * 2) * (lengthSlider.value() * 10) + cos(change / variationSlider.value()) * sizeSlider.value();
}


function point2Y(change) {
    return cos(change * 2) * (lengthSlider.value() * 10) + sin(change / variationSlider.value()) * sizeSlider.value();
}