let startX;
let startY;
let endX;
let endY;
let control1;
let control2;
let numLines;
let curveDeviation;

let startColor;
let endColor;
let colors = [];
let curves = [];

function setup() {

    createCanvas(600, 600);
    smooth();
    colorMode(RGB, 255, 255, 255, 1);
    stroke(255, 0, 0, 1);

    fill(255, 0, 0, .1);
    frameRate(3);
    //set color 1 
    createP('Color 1 Red');
    color1SliderR = createSlider(0, 255, 255, 2);
    color1R = color1SliderR.value();

    color1SliderG = createSlider(0, 255, 0, 2);
    color1SliderG.position(180, 730);
    color1G = color1SliderG.value();

    color1SliderB = createSlider(0, 255, 0, 2);
    color1SliderB.position(280, 730);
    color1B = color1SliderB.value();
    //set color2
    createP('Color 2 Red');
    color2SliderR = createSlider(0, 255, 0, 2);
    color2R = color2SliderR.value();
    // createP('Color 2 Green');
    color2SliderG = createSlider(0, 255, 0, 2);
    color2G = color2SliderG.value();
    // createP('Color 2 Bllue');
    color2SliderB = createSlider(0, 255, 255, 2);
    color2B = color2SliderB.value();

    createP('stroke weight');
    strokeW = createSlider(1, 30, 6, 1);


    // createP('Density');
    densitySlider = createSlider(0, 90, 16, 2);
    density = densitySlider.value();

    createP('Begin PosX');
    startXSlider = createSlider(0, 800, 400, 10);
    startX = startXSlider.value();
    createP('Begin Height');
    startYSlider = createSlider(0, 800, 100, 10);
    startY = startYSlider.value();

    createP('End PosX');
    endXSlider = createSlider(0, 800, 400, 10);
    endX = endXSlider.value();
    createP('End Height');
    endYSlider = createSlider(0, 800, 500, 10);
    endY = endYSlider.value();
    createP('Curves');
    curveSlider = createSlider(0, 1600, 700, 10);
    curve = curveSlider.value();
    createP('Center Point');
    centerSlider = createSlider(50, 750, 400, 10);
    center = centerSlider.value();
    createP('Seperation');
    seperationSlider = createSlider(-10, 10, 0, 5);
    seperation = seperationSlider.value();
}

function draw() {
    background(0, 0, 0, 1);
    strokeWeight(strokeW.value());
    let startColor = color(color1SliderR.value(), color1SliderG.value(), color1SliderB.value(), .2);
    let endColor = color(color2SliderR.value(), color2SliderG.value(), color2SliderB.value(), .2);
    //fill array with colors
    let c = 0;
    for (c = 0; c < densitySlider.value(); c++) {
        colors[c] = lerpColor(startColor, endColor, (c / densitySlider.value()));

    }
    let seperationX = random(-40, 40);
    let seperationY = random(-40, 40);
    let seperationX2 = random(-40, 40);
    let seperationY2 = random(-40, 40);
    let controlOne = {
        x: startXSlider.value() + ((Math.floor(Math.random() * curveSlider.value()))),
        y: Math.floor(Math.random() * centerSlider.value()),
    }
    let controlTwo = {
        x: startYSlider.value() + ((-1) * (Math.floor(Math.random() * curveSlider.value()))),
        y: Math.floor((Math.random() * centerSlider.value() + centerSlider.value())),
    }

    for (i = 0; i < densitySlider.value(); i++) {
        // controls = setControlPoints();

        stroke(colors[i], 1);
        // fill(colors[i], .1);
        noFill();
        b = bezier(startXSlider.value() + seperation, startYSlider.value(), controlOne.x, controlOne.y, controlTwo.x, controlTwo.y, endXSlider.value() + seperation, endYSlider.value());

        // b = bezier(startXSlider.value() + seperation, startYSlider.value(), controls[0], controls[1], controls[2], controls[3], endXSlider.value() + seperation, endYSlider.value());
        // curves[i] = b;

        // ellipse(controls[0], controls[1], 5);
        // ellipse(controls[2], controls[3], 5);
        seperation += seperationSlider.value();

        controlOne.x += seperationX;
        controlOne.y += seperationY;
        controlTwo.x += seperationX2;
        controlTwo.y += seperationY2;
    }

}

function setControlPoints() {
    // let curveDeviation = (Math.random() * 150) + 50;
    curveSlider.value();
    let r = Math.floor((Math.random() * 2)) + 1;
    let rand;
    if (r == 1) {
        rand = -1;
    } else {
        rand = 1;
    }


    let controlOne = {
        //let the x axis of the control point be a random no larger than the curvedeviation
        x: startXSlider.value() + (rand * (Math.floor(Math.random() * curveSlider.value()) + 100)),
        y: Math.floor(Math.random() * centerSlider.value()),
    };
    //control Pont Two
    let controlTwo = {
        x: startYSlider.value() + ((-1) * rand * (Math.floor(Math.random() * curveSlider.value()))),
        y: Math.floor((Math.random() * centerSlider.value() + centerSlider.value())),
    };

    return [controlOne.x, controlOne.y, controlTwo.x, controlTwo.y];
}