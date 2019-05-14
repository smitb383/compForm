let time = 0;
let curlWidth = 10;
let frequency = 0.15; //frequency //how fast they rotate 
let pointTightness = 1;
let pointDiameter = 1;
let hairColors = [];

function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
    smooth();

    colorMode(RGB, 255, 255, 255, 1);

    // stroke(255, 102, 0, 1);
    fill(255, 102, 0);
    noStroke();

    // }
    // window.draw = function () {
    clear();
    background(0, 0, 0);
    for (tuft = 1; tuft < 15; tuft++) {
        //starting point for a tuft of hair 
        origin = tuft * 40;
        tuftLength = Math.floor(Math.random() * 40) + 600;

        //maybe drawing this all the time 
        // or maybe as you draw the strands you see the colors change from one to the next 
        // width  is length of strands 
        let yOffset = random(-100, -50);
        for (strands = 0; strands < 50; strands++) {
            //strand opacity 
            // let opacity = (Math.random() - .2)
            length = tuftLength + (Math.random() * 90);
            let opacity = (map(length, 600, 730, 0, 1)) - .2;
            color
            let lavander = {
                r: random(220, 230),
                g: random(118, 230),
                b: random(218, 230),
            };
            // fill(lavander.r, lavander.g, lavander.b, opacity);
            blonde = {
                r: random(189, 228),
                g: random(183, 232),
                b: random(107, 170),
            };


            fill(blonde.r, blonde.g, blonde.b, opacity);

            let red = {
                r: random(100, 150),
                g: random(40, 50),
                b: random(8, 12),
            };
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
            // time++;
        }
    }
}