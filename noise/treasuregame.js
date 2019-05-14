var player, chest, treasure;
var playerImage, chestImage, treaureImage;
var frameCount = 0;
var currentBackground;

let inc = 0.02;
let scl = 2;
let cols, rows;
let zOff = 0;
let h;
let treasurePos = {
    x: 0,
    y: 0,
};
let treasureSize = 8;

function setup() {

    createCanvas(800, 600);
    playerImage = loadImage("adventurer2.png");
    chestImage = loadImage("Treasure Chest .png");
    treasureImage = loadImage("gold_pile_0.png");
    //position of adventurer at start
    player = createSprite(10, 40, 0, 0);
    player.maxSpeed = 6;
    background(0, 0, 0);
    cols = floor(width / scl);
    rows = floor(height / scl);
    colorMode(HSB);
    noStroke();
    // frameRate(.5);
    currentBackground = drawBackground();
}


function draw() {
    background(0, 0, 100);

    if (frameCount == 0) {
        currentBackground = drawBackground();
    }
    console.log(currentBackground);
    image(currentBackground, 0, 0, 800, 600);
    //player interactions 
    text('Controls: Arrow Keys + X', width / 2, 20);
    player.maxSpeed = 6;
    player.friction = 0.98;
    player.setCollider('circle', 0, 0, 20);
    player.addImage('normal', playerImage);
    player.scale = .08;
    keyPressed();

    function keyPressed() {
        if (keyCode === LEFT_ARROW) {
            player.position.x -= 4;
            player.velocity.x -= 4;

        }

        if (keyCode === RIGHT_ARROW) {
            player.position.x += 4;
            player.velocity.x += 4;

        }
        if (keyCode === UP_ARROW) {
            player.position.y -= 4;
            player.velocity.y -= 4;
        }
        if (keyCode === DOWN_ARROW) {
            player.position.y += 4;
            player.velocity.y += 4;

        }
    }
    drawSprites();
    frameCount++;
}

function mousePressed() {
    if (insideTreasure()) {
        console.log("you got treasure!!!!!!!");
        push();
        fill(57, 90, 56);
        ellipse(mouseX, mouseY, 18);
        pop();
    }
}

function drawBackground() {
    img = createImage(10, 10);
    img.loadPixels();
    var yOff = 0;
    let treasureheight = 150;
    treasurePos = {
        x: 0,
        y: 0
    };
    for (let y = 0; y < rows; y++) {
        var xOff = 0;
        for (let x = 0; x < cols; x++) {
            let index = (x + y * width) * 4;
            let brightness = noise(xOff, yOff, zOff) * 255;
            setColors(brightness);
            //update brightness
            if (brightness > treasureheight) {
                treasureheight = brightness;
                treasurePos = {
                    x: x * scl,
                    y: y * scl,
                };
            }
            xOff += inc;
            rect(x * scl, y * scl, scl, scl);
            img.set(x, y, setColors(brightness))
        }
        yOff += inc;
        zOff += 0.010;
    }

    push();
    fill(0, 90, 90);
    textSize(12);
    text('x', treasurePos.x, treasurePos.y);
    pop();
    img.updatePixels();
    return img;
}

function insideTreasure() {
    if (mouseX - treasurePos.x + mouseY - treasurePos.y < treasureSize) {
        return true;
    } else {
        return false;
    }
}

function setColors(brightness) {
    if (brightness > 150) {
        h = 37;
        s = map(brightness, 150, 255, 0, 30);
        // s = 30;
        b = map(brightness, 150, 255, 70, 0);
    } else if (brightness > 105) {
        //make it a grass
        h = 109;
        s = map(brightness, 150, 255, 100, 0);
        // s = 100;
        b = map(brightness, 105, 150, 0, 100);
    } else if (brightness > 0) {
        //make it water
        h = 230;
        s = 100;
        b = map(brightness, 0, 100, 0, 100);
    }
    fill(h, s, b);
}