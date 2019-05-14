var drawX;
var drawY;
var tileLength;
var canvasSize;

var rowJump;
var rowCounter;

var counter;

var topOpen;
var bottomOpen;
var leftOpen;
var rightOpen;

var images = [];
var tiles = [];



function preload() {
    //open on one side
    right = loadImage("RIGHT.jpg")
    let r = {
        img: right;
        rightOpen: true,
        leftOpen: false,
        topOpen: false,
        bottomOpen: false,
    };

    images[0] = right;
    //open on two sides (across from one another)
    leftRight = loadImage("LEFT_RIGHT.jpg")
    let lR = {
        rightOpen: true,
        leftOpen: true,
        topOpen: false,
        bottomOpen: false,
    };
    images[1] = leftRight;
    //open on two sides (next to each other)
    leftBottom = loadImage("LEFT_BOTTOM.jpg")
    let lB = {
        rightOpen: false,
        leftOpen: true,
        topOpen: false,
        bottomOpen: true,
    };
    images[2] = leftBottom;
    //open on three sides
    leftBottomTop = loadImage("LEFT_BOTTOm_TOP.jpg")
    let lBT = {
        rightOpen: false,
        leftOpen: true,
        topOpen: false,
        bottomOpen: true,
    };
    images[3] = leftBottomTop;

}

function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);

    drawX = 0;
    drawY = 0;
    tileLength = 60;
    canvasSize = 600;

    counter = 0;
    rowJump = false
    rowCounter = 1;
    newTable = 0;

    image(right, 0, 0, 60, 60);
    image(leftRight, 60, 0, 60, 60);
    image(leftBottom, 120, 0, 60, 60);
    image(leftBottomTop, 180, 0, 60, 60);

    // create an array of these images

    // assign them values of if sides are open or closed 

}

window.draw = function () {
    //update the tile position 
    if (drawX > canvasSize - tileLength) {
        rowJump = true;
        drawX = 0;
        rowCounter++;
        drawY += tileLength;
    }

    if (drawY > canvasSize - tileLength) {
        rowJump = true;
        drawY = 0;
        drawX = 0;
    }

    //randomly choose one of the images from the array 
    let img = Math.floor(4 * Math.random());
    image(images[img], drawX, drawY, 60, 60);
    drawX += tileLength;
    counter++;



    // let image = the image you are going to draw 

    //figure out what image to draw 

    //increase the counter every time you draw a tile 
}