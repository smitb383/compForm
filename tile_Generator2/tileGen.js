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

    // open on one side
    right = loadImage("RIGHT.jpg")
    //open on two sides (across from one another)
    leftRight = loadImage("LEFT_RIGHT.jpg")

    //open on two sides (next to each other)
    leftBottom = loadImage("LEFT_BOTTOM.jpg")

    //open on three sides
    leftBottomTop = loadImage("LEFT_BOTTOm_TOP.jpg")

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

    // assign them values of if sides are open or closed 
    let r = {
        img: right,
        rightOpen: true,
        leftOpen: false,
        topOpen: false,
        bottomOpen: false,
    };
    images[0] = r;
    let lR = {
        img: leftRight,
        rightOpen: true,
        leftOpen: true,
        topOpen: false,
        bottomOpen: false,
    };
    images[1] = lR;

    let lB = {
        img: leftBottom,
        rightOpen: false,
        leftOpen: true,
        topOpen: false,
        bottomOpen: true,
    };
    images[2] = lB;
    let lBT = {
        img: leftBottomTop,
        rightOpen: false,
        leftOpen: true,
        topOpen: true,
        bottomOpen: true,
    };
    images[3] = lBT;



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
    let random = Math.floor(4 * Math.random());

    //check if thils random image selectoin works in the current tile scheme 

    //if the tile to the left's right tile is the same as the random selected image cooresponding side
    //use that else generate a new random image 
    if (counter > 0) {
        while (tiles[counter - 1].rightOpen != images[random].leftOpen) {
            random = Math.floor(4 * Math.random());
        }
        //&& counter <= 9
    }
    // if (counter > 9) {
    //     while (tiles[counter - 1].rightOpen != images[random].leftOpen || tiles[counter - 10].bottomOpen != images[random].topOpen) {
    //         random = Math.floor(4 * Math.random());
    //     }
    //     // while (tiles[counter - 10].bottomOpen != images[random].topOpen) {
    //     //     random = Math.floor(4 * Math.random());
    //     // }
    // }


    let draw = images[random].img;
    image(draw, drawX, drawY, 60, 60);

    //add this tile to the array of tiles 
    tiles.push(images[random]);

    //increase tiles poition and counter
    drawX += tileLength;
    counter++;
}