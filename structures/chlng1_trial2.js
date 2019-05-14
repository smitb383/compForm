let points = [];
let rows, cols, spacing;
let Xoffset = 0;
let Yoffset = 0;
let x;
let distance;
let frequency = 10;
let amount = 20;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 255, 100, 100, 1);
    hue = 70;
    rows = 100;
    cols = 100;
    total = 1000;
    spacing = 4;
    diameter = 40;
    noiseStrength = 40;

    for (let y = 0; y < cols; y++) {
        for (let x = 0; x < rows; x++) {

            // console.log("Hue: ", hue);
            points.push({
                x: x * spacing + random(spacing),
                y: y * spacing + random(spacing),

            });
        }
    }

    background(20);
    // noStroke();
    ellipseMode(CENTER);
    var noiseFrequency = .02;
    // beginShape();
    for (let i = 0; i < points.length; i++) {
        const p = points[i];
        Xoffset = noise(p.x, 0) * noiseStrength;
        Yoffset = noise(p.y * noiseFrequency, 1000) * noiseStrength;
        p.h = map(Xoffset, 0, 40, 255, 300);

        p.x += Xoffset;
        p.y += Yoffset;
        //checking if the point is too close to the other ones around it 
        //if the point is not the first point 
        if (i > 0) {
            //check the point to the bottom of it 
            distance = dist(points[i - 1].x, points[i - 1].y, p.x, p.y);
            console.log(distance);
            //increase this point until it is away from the diameter
            if (distance < diameter + 4) {
                //maybe get a random number and apply 
                points.splice(1, 1);
                // p.x++;
                // p.y++;
                console.log(" to close to left distance: ", distance);
            }
            if (i < cols - 10) {
                distanceT = dist(p.x, p.y, points[i + cols].x, points[i + cols].y);
                if (distanceT < diameter + 4) {
                    //maybe get a random number and apply 
                    // p.x++;
                    // p.y++;
                    points.splice(1, 1);
                    console.log(distanceT);
                }
            }
            if (i > cols) {
                distanceB = dist(p.x, p.y, points[i - cols].x, points[i - cols].y);
                if (distanceB < diameter + 4) {
                    //maybe get a random number and apply 
                    // p.x++;
                    // p.y++;
                    points.splice(1, 1);
                    console.log(distanceB);
                }
            }
        }
        hue += 5;
        if (hue >= 100) {
            hue = random(70, 110);
        }
        fill(hue, 70, 70, .3);
        stroke(hue, 100, 50, .2);
        // ellipse(p.x, p.y, diameter, diameter);
        line(p.x, p.y, p.x, p.y + diameter)
        console.log("x: ", p.x, "x: ", p.y, "xOffset: ", Xoffset, "yOffset: ", Yoffset);
    }
}

// function draw() {

//     // endShape();
//     // noiseFrequency += .01;



//     // noLoop();
// }