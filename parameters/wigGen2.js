let redSlider, greenSlider, blueSlider;


function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
    smooth();
    noFill();
    colorMode(RGB, 255, 255, 255, 1);
    frameRate(10);
    createP('Red');
    redSlider = createSlider(0, 255, 255 * 10);
    createP('Blue');
    blueSlider = createSlider(0, 255, 10 * 10);
    createP('Green');
    greenSlider = createSlider(0, 255, 10 * 10);
    createP('Straight     Wavy      Curly');
    textureSlider = createSlider(0, 2, 0 * 1);
    createP('Strand Thickness');
    strandThickness = createSlider(0, 3, 2 * 1);
}

function setColor() {
    let red = redSlider.value();
    let green = greenSlider.value();
    let blue = blueSlider.value();
    let opacity = Math.random() - .82;
    let c = color(red, green, blue, opacity);
    return c;
}

function setThickness() {
    let thickness = strandThickness.value();
    let strandWidth;
    if (thickness == 0) {
        strandWidth = (1 * Math.random() + .5);
    }
    if (thickness == 1) {
        strandWidth = (3 * Math.random() + 1);
    }
    if (thickness == 2) {
        strandWidth = (3 * Math.random() + 2);
    }
    if (thickness == 3) {
        strandWidth = (3 * Math.random() + 3);
    }
    strokeWeight(strandWidth);
    return strandWidth;
}

function draw() {
    background(0, 0, 0, 1);
    // hairTexture();
    let texture = textureSlider.value();
    if (texture == 0) {
        drawStraightHair();
    } else if (texture == 1) {
        drawWavyHair();
    }
    if (texture == 2) {
        drawCurly();
    }
}

function drawStraightHair() {
    for (let tuff = (-30); tuff < 40; tuff++) {
        let origin = (tuff + 30) * 10;
        let tuffLength = map(abs(tuff), 0, 30, 200, 70);
        for (let strand = 0; strand < 200; strand++) {
            strokeWeight(setThickness());
            let horizontalLean = random(-70, 70);
            let length = map(abs(horizontalLean), 0, 70, 400, 200) + tuffLength;
            push();
            let lightThickness = (2 * Math.random() + 1);
            let lightBrightness = (Math.random() - .9);
            strokeWeight(lightThickness);
            stroke(0, 0, 0, lightBrightness);
            line(origin, -100, origin + horizontalLean, length - 30)
            pop();

            stroke(setColor());
            line(origin, -100, origin + horizontalLean, length);
        }
    }
}

function drawWavyHair() {
    for (tuft = 1; tuft < 18; tuft++) {
        //starting point for a tuft of hair 
        origin = {
            x: tuft * 40,
            y: 0,
        };
        //end point for a tuft of hair 
        strandEnd = {
            x: tuft * 50,
            y: 400,
        };
        //curve deviation relative to strands 
        let curveDeviation = (Math.random() * 150) + 50;
        strokeWeight(setThickness());
        //strands in a tuft
        for (strand = 0; strand < 200; strand++) {
            let opacity = Math.random() - .6;
            stroke(setColor());
            let originDeviationX = (Math.random() * 30) + 5;
            curveStart = {
                x: origin.x + originDeviationX,
                y: origin.y,
            };

            //end point of each strand
            let strandEndDeviationX = (Math.random() * 30) + 5;
            //make strands that fall further from the x axis longer, and strands that end closer, shorter
            let length = map(strandEndDeviationX, 5, 25, 0, 200);
            curveEnd = {
                x: strandEnd.x + strandEndDeviationX,
                y: strandEnd.y + length,
            };

            //straight axis for start and end of strand of hair
            let axis = dist(curveStart.x, curveStart.y, curveEnd.x, curveEnd.y);
            //halfway point of a strand 
            let halfAxisLength = curveEnd.y / 2;

            // control points 
            //the amount of curvature  of a control point is relative to its origin 
            let controlOne = {
                //let the x axis of the control point be a random no larger than the curvedeviation
                x: curveStart.x - (Math.floor(Math.random() * curveDeviation) + 100),
                y: Math.floor(Math.random() * halfAxisLength),
            };

            //control Pont Two
            let controlTwo = {
                x: curveStart.x + (Math.floor(Math.random() * curveDeviation)),
                y: Math.floor((Math.random() * halfAxisLength + halfAxisLength)),
            };
            push();
            let lightThickness = (2 * Math.random() + 1);
            let lightBrightness = (Math.random() - .9);
            strokeWeight(lightThickness);
            stroke(0, 0, 0, lightBrightness);
            bezier(curveStart.x, curveStart.y, controlOne.x, controlOne.y, controlTwo.x, controlTwo.y, curveEnd.x, curveEnd.y);
            pop();
            bezier(curveStart.x, curveStart.y, controlOne.x, controlOne.y, controlTwo.x, controlTwo.y, curveEnd.x, curveEnd.y);
        }
    }
}

function setCurlyThickness() {
    let thickness = strandThickness.value();
    let strandWidth;
    if (thickness == 0) {
        strandWidth = (.5 * Math.random());
    }
    if (thickness == 1) {
        strandWidth = (1 * Math.random() + .5);
    }
    if (thickness == 2) {
        strandWidth = (2 * Math.random() + 1);
    }
    if (thickness == 3) {
        strandWidth = (3 * Math.random() + 2);
    }
    strokeWeight(strandWidth);
    return strandWidth;
}

function drawCurly() {
    let time = 0;
    let curlWidth = 10;
    let frequency = 0.15; //frequency //how fast they rotate 
    let pointTightness = 1;

    let pointDiameter = setCurlyThickness();
    console.log(pointDiameter);
    clear();
    background(0, 0, 0);
    for (tuft = 1; tuft < 15; tuft++) {
        //starting point for a tuft of hair 
        origin = tuft * 40;
        tuftLength = Math.floor(Math.random() * 90) + 400;

        let yOffset = random(-100, -50);
        for (strands = 0; strands < 90; strands++) {
            //strand opacity 
            // let opacity = (Math.random() - .2)
            length = tuftLength + (Math.random() * 90);
            // let opacity = (map(length, 600, 730, 0, 1)) - .2;

            fill(setColor());
            noStroke();
            // fill(red.r, red.g, red.b, opacity);
            originDeviation = (Math.random() * 30) + 5;
            strandOriginX = origin + originDeviation;
            curlTightnessDeviation = random(.04, .043);
            curlTightnessDeviation2 = random(.04, .043);
            curlWidthDeviation = Math.floor(Math.random() * 15) + 10;
            curlWidthDeviation2 = Math.floor(Math.random() * 15) + 10;
            let twistDeviation = random((-1), (-.3));

            //single strand of hair

            for (i = 0; i < length; i += pointTightness) {
                let curlTightness = i * curlTightnessDeviation;
                curlTightness *= Math.floor(Math.random() * 1) + 1;
                let curTightness2 = i * curlTightnessDeviation2;
                curTightness2 *= Math.floor(Math.random() * 1) + 1;
                //bigger phase, the less curcles 
                ellipse(strandOriginX + curlWidth + curlWidthDeviation * sin(frequency + curlTightness), i + yOffset, pointDiameter, pointDiameter);
                push();
                pointDiameter = 2;
                fill(25, 25, 25, .1);
                ellipse(strandOriginX + curlWidth + curlWidthDeviation * sin(frequency + curlTightness), i + yOffset, pointDiameter, pointDiameter);
                pop();
                ellipse(strandOriginX + curlWidth + curlWidthDeviation2 * (twistDeviation) * sin(frequency + curTightness2), i + yOffset, pointDiameter, pointDiameter);
                push();
                pointDiameter = 2;
                fill(25, 25, 25, .1);
                ellipse(strandOriginX + curlWidth + curlWidthDeviation2 * (twistDeviation) * sin(frequency + curTightness2), i + yOffset, pointDiameter, pointDiameter);
                pop();
            }

        }
    }
}