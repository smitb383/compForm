function setup() {
    createCanvas(600, 800);
    smooth();

    colorMode(RGB, 255, 255, 255, 1);
    background(0, 0, 0);

    //imprimatura layer
    // fill(230, 60, 32);
    noStroke();
    // drawBackground();
    drawRectangle(10, 0, 0, 560, 400, 34, 57, 34, 75, 90, 159);
    drawRectangle(10, 0, 30, 520, 400, 37, 44, 40, 44, 86, 96);
    //function drawRectangle(strokeSpacing,y, xOffset, columnQuantity, rowQuantity, colorFunction)
    drawRectangle(15, 0, 50, 500, 50, 58, 65, 57, 64, 92, 110);
    drawRectangle(12, 250, 30, 500, 30, 40, 64, 69, 90, 158, 188);
    drawRectangle(15, 440, 30, 500, 60, 46, 72, 15, 19, 33, 35);

}

function drawRectangle(strokeSpacing, y, xOffset, columnQuantity, rowQuantity, redMin, redMax, greenMin, greenMax, blueMin, blueMax) {
    for (rows = 0; rows < rowQuantity; rows++) {
        for (i = xOffset; i < columnQuantity; i += strokeSpacing) {
            let width = random(10, 25);
            let height = random(10, 30);

            let startOffset = random(10, 25);
            rect(i + startOffset, y + startOffset, width, height);

            makeColor(redMin, redMax, greenMin, greenMax, blueMin, blueMax);
        }
        i = 0;
        y += 5;
    }
}



function makeColor(redMin, redMax, greenMin, greenMax, blueMin, blueMax) {
    let r = random(redMin, redMax);
    let g = random(greenMin, greenMax);
    let b = random(blueMin, blueMax);
    let r2 = random(redMin, redMax);
    let g2 = random(greenMin, greenMax);
    let b2 = random(blueMin, blueMax);
    let r3 = random(redMin, redMax);
    let g3 = random(greenMin, greenMax);
    let b3 = random(blueMin, blueMax);
    r = (r + r2 + r3) / 3;
    g = (g + g2 + g3) / 3;
    b = (b + b2 + b3) / 3;
    let opacity = (random(1) + random(1) + random(1)) / 3;
    fill(r, g, b, opacity);

}