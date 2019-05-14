 let colorVariability;

 function setup() {
     canvas = createCanvas(600, 800);
     canvas.position(200, 380);
     smooth();

     colorMode(RGB, 255, 255, 255, 1);
     background(0, 0, 0, 1);
     // fill(230, 60, 32);
     noStroke();
     // drawBackground();
     setSliders();

     colorVariability = 15;
     colorVariability2 = 10;
     colorVariability3 = 5;
     frameRate(2);
     draw();
 }

 //first four are position and height and width relative after strokeSpacing 
 //function drawRectangle(strokeSpacing,y, x, columnQuantity, rowQuantity, colorFunction)


 function draw() {
     background(0, 0, 0, 1);
     //background rectangle 
     //  drawRectangle(10, 0, 0, 560, 400, 34, 57, 34, 75, 90, 159);
     drawRectangle(strokeSpacing.value(), backgroundX.value(), backgroundY.value(), backgroundWidth.value(), backgroundHeight.value(), bk1R.value() - colorVariability3, bk1R.value() + colorVariability3, bk1G.value() - colorVariability2, bk1G.value() + colorVariability2, bk1B.value() - colorVariability2, bk1B.value() + colorVariability2);
     //backdrop rectangle 
     let darkBorderR = bk1R.value() - borderShadow.value();
     let darkBorderG = bk1G.value() - borderShadow.value();
     let darkBorderB = bk1B.value() - borderShadow.value();
     drawRectangle(strokeSpacing.value(), 5, 15, 520, 400, darkBorderR - colorVariability, darkBorderR + colorVariability, darkBorderG - colorVariability, darkBorderG + colorVariability, darkBorderB - colorVariability, darkBorderB + colorVariability);
     drawRectangle(strokeSpacing.value(), sq1Y.value(), sq1X.value(), sq1Width.value(), sq1Height.value(), sq1R.value() - colorVariability2, sq1R.value() + colorVariability2, sq1G.value() - colorVariability, sq1G.value() + colorVariability, sq1B.value() - colorVariability, sq1B.value() + colorVariability);
     // drawRectangle(strokeSpacing.value(), 0, 50, 500, 50, 58, 65, 57, 64, 92, 110);
     drawRectangle(strokeSpacing.value(), sq2Y.value(), sq2X.value(), sq2Width.value(), sq2Height.value(), sq2R.value() - colorVariability, sq2R.value() + colorVariability, sq2G.value() - colorVariability, sq2G.value() + colorVariability, sq2B.value() - colorVariability, sq2B.value() + colorVariability);
     //  drawRectangle(strokeSpacing.value(), 250, 30, 500, 30, 40, 64, 69, 90, 158, 188);
     drawRectangle(strokeSpacing.value(), sq3Y.value(), sq3X.value(), sq3Width.value(), sq3Height.value(), sq3R.value() - colorVariability, sq3R.value() + colorVariability, sq3G.value() - colorVariability, sq3G.value() + colorVariability, sq3B.value() - colorVariability3, sq3B.value() + colorVariability3);
     // drawRectangle(15, 440, 30, 500, 60, 46, 72, 15, 19, 33, 35);

 }

 function drawRectangle(strokeSpacing, y, xOffset, columnQuantity, rowQuantity, redMin, redMax, greenMin, greenMax, blueMin, blueMax) {
     for (rows = 0; rows < rowQuantity; rows++) {
         for (i = xOffset; i < columnQuantity; i += strokeSpacing) {
             let width = random(strokeWidth.value() - 5, strokeWidth.value() + 10);
             let height = random(strokeHeight.value() - 5, strokeHeight.value() + 10);
             let startOffset = random(10, 30);
             let endOffset = random(10, 30);

             makeColor(redMin, redMax, greenMin, greenMax, blueMin, blueMax);
             rect(i + startOffset, y + startOffset, width, height);
         }
         i = 0;
         //change this 
         y += strokeSpacingY.value();
     }
 }

 function setSliders() {
     let sliderSpacing = 180;
     let sliderX = 50;
     let sliderY = 120;
     let sliderHeight = 60;
     //  brush = createP('Brush Stroke Spacing');
     strokeSpacing = createSlider(1, 20, 9, 1);
     strokeSpacing.position(sliderX, 120);
     sliderX += sliderSpacing;
     //Y stroke seperation
     strokeSpacingY = createSlider(2, 10, 5, 1);
     strokeSpacingY.position(sliderX, 120);
     sliderX += sliderSpacing;
     //  createP('Stroke Width');
     strokeWidth = createSlider(5, 30, 20, 1);
     strokeWidth.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  strokeWidth.position(160, 920);
     //  createP('Stroke Height');
     strokeHeight = createSlider(5, 35, 15, 1);
     strokeHeight.position(sliderX, sliderY);
     sliderX += sliderSpacing;

     //***************** */BACKGROUND *******************************************
     //  createP('Background StartX');
     sliderX = 50;
     sliderY += sliderHeight;
     backgroundX = createSlider(0, 500, 0, 1);
     backgroundX.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Background StartY');
     backgroundY = createSlider(0, 500, 0, 1);
     backgroundY.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Background Width');
     backgroundWidth = createSlider(0, 700, 560, 10);
     backgroundWidth.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Background HEIGHT');
     backgroundHeight = createSlider(0, 300, 200, 10);
     backgroundHeight.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Background Red');
     bk1R = createSlider(0, 255, 45.5, 1);
     bk1R.position(sliderX, sliderY);
     sliderX += sliderSpacing;

     //  createP('Background Green');
     bk1G = createSlider(0, 255, 54.5, 1);
     bk1G.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Background Blue');
     bk1B = createSlider(0, 255, 120, 1);
     bk1B.position(sliderX, sliderY);
     sliderX += sliderSpacing;

     //***************** */SQUARE 1 *******************************************
     sliderX = 50;
     sliderY += sliderHeight;
     //Y POSITION
     sq1Y = createSlider(0, 500, 0, 2);
     sq1Y.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  X POSITION
     sq1X = createSlider(0, 300, 50, 1);
     sq1X.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  WIDTH SLIDER
     sq1Width = createSlider(300, 600, 500, 10);
     sq1Width.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  HEIGHT SLIDER
     sq1Height = createSlider(0, 400, 50, 1);
     sq1Height.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Square 1 Red');
     sq1R = createSlider(0, 255, 61.5, 1);
     sq1R.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Square 1 Green');
     sq1G = createSlider(0, 255, 60.5, 1);
     sq1G.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Square 1 Blue');
     sq1B = createSlider(0, 255, 101, 1);
     sq1B.position(sliderX, sliderY);
     sliderX += sliderSpacing;

     //***************** */SQUARE 2 *******************************************
     // 
     sliderX = 50;
     sliderY += sliderHeight;
     //Y POSITION
     sq2Y = createSlider(0, 500, 250, 2);
     sq2Y.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  X POSITION
     sq2X = createSlider(0, 300, 30, 1);
     sq2X.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  WIDTH SLIDER
     sq2Width = createSlider(300, 600, 500, 10);
     sq2Width.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  HEIGHT SLIDER
     sq2Height = createSlider(0, 200, 30, 1);
     sq2Height.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Square 2 Red');
     sq2R = createSlider(0, 255, 52, 1);
     sq2R.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Square 2 Green');
     sq2G = createSlider(0, 255, 79.5, 1);
     sq2G.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Square 2 Blue');
     sq2B = createSlider(0, 255, 173, 1);
     sq2B.position(sliderX, sliderY);
     sliderX += sliderSpacing;

     //***************** */SQUARE 3 *******************************************
     sliderX = 50;
     sliderY += sliderHeight;
     //Y POSITION
     sq3Y = createSlider(0, 800, 440, 2);
     sq3Y.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  X POSITION
     sq3X = createSlider(0, 300, 20, 1);
     sq3X.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  WIDTH SLIDER
     sq3Width = createSlider(300, 600, 500, 10);
     sq3Width.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  HEIGHT SLIDER
     sq3Height = createSlider(0, 300, 60, 2);
     sq3Height.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Square 3 Red');
     sq3R = createSlider(0, 255, 59, 1);
     sq3R.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Square 3 Green');
     sq3G = createSlider(0, 255, 16.5, 1);
     sq3G.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Square 3 Blue');
     sq3B = createSlider(0, 255, 34, 1);
     sq3B.position(sliderX, sliderY);
     sliderX += sliderSpacing;
     //  createP('Square 3 Blue');
     sliderX = 50;
     sliderY += sliderHeight;
     borderShadow = createSlider(0, 50, 25, 1);
     borderShadow.position(sliderX, sliderY);
     sliderX += sliderSpacing;


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