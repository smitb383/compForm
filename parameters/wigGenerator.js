// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

let redSlider, greenSlider, blueSlider;


function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
    smooth();
    noFill();
    colorMode(RGB, 255, 255, 255, 1);
    frameRate(60);
    createP('Red');
    redSlider = createSlider(0, 255, 255 * 10);
    createP('Blue');
    blueSlider = createSlider(0, 255, 10 * 10);
    createP('Green');
    greenSlider = createSlider(0, 255, 10 * 10);
    createP('Straight     Wavy      Curly');
    textureSlider = createSlider(0, 3, 10 * 10);
    straightButton = createButton('straight');
    // button.position(19, 19);
    wavyButton = createButton('wavy');

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
    let strandWidth = (3 * Math.random() + 1);
    strokeWeight(strandWidth);
    return strandWidth;
}

window.draw = function () {
    straightButton.mousePressed(drawStraightHair);
    wavyButton.mousePressed(drawWavyHair);
    if (straightButton.mousePressed) {
        let hairTexture = drawStraightHair;
    }
    if (wavyButton.mousePressed) {
        hairTexture = drawWavyHair;
    }
    background(0, 0, 0, 1);
    hairTexture();
}

function drawStraightHair() {
    for (let tuff = (-30); tuff < 40; tuff++) {
        let origin = (tuff + 30) * 10;
        let tuffLength = map(abs(tuff), 0, 30, 200, 70);
        for (let strand = 0; strand < 200; strand++) {
            // setThickness();

            // let strandWidth = (3 * Math.random() + 1);
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