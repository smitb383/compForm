var player, chest, treasure;
var playerImage, chestImage, treaureImage;
var score = 0;
var frameCount;
var timeLeft = 10;
var chestPos;
var won = false;

function setup() {
    createCanvas(800, 600);
    playerImage = loadImage("adventurer2.png");
    chestImage = loadImage("Treasure Chest .png");
    treasureImage = loadImage("gold_pile_0.png");
    //position of adventurer at start
    player = createSprite(10, 40, 0, 0);

    //work on increasing this every round 
    var randomX = Math.floor(Math.random() * width);
    var randomY = Math.floor(Math.random() * height);
    chestPos = createVector(randomX, randomY);

    player.maxSpeed = 6;
    background(0, 0, 0);

}

function draw() {
    background(100, 100, 100);
    chest = createSprite(chestPos.x, chestPos.y, 0, 0);
    //player interactions 
    text('Controls: Arrow Keys Up, Down, Left, and Right Arrows', width / 2, 20);
    text('Mission: Get to the treasure in time!', width / 2, 40);
    text('Time Left:' + timeLeft, width / 2, 70);
    text('Score:' + score, width / 2, 90);

    player.maxSpeed = 6;
    player.friction = 0.98;
    player.setCollider('circle', 0, 0, 20);
    player.addImage('normal', playerImage);
    player.scale = .08;
    chest.setCollider("rectangle", 0, 0, 20, 20);
    chest.addImage('normal', chestImage);
    chest.scale = .2;

    keyPressed();

    function keyPressed() {
        if (keyCode === LEFT_ARROW) {
            player.position.x -= 2;
            player.velocity.x -= 2;
        }
        if (keyCode === RIGHT_ARROW) {
            player.position.x += 2;
            player.velocity.x += 2;

        }
        if (keyCode === UP_ARROW) {
            player.position.y -= 2;
            player.velocity.y -= 2;
        }
        if (keyCode === DOWN_ARROW) {
            player.position.y += 2;
            player.velocity.y += 2;
        }
    }
    checkPlayerPos()
    drawSprites();

    frameCount++;
    if (frameCount % 30 == 0) {
        timeLeft--;
    }

    checkIfFailed();

}


function checkPlayerPos() {
    if (distanceFromChest() <= 45) {
        console.log("you got treasure!!!!!!!");
        treasure = createSprite(chestPos.x, chestPos.y, 0, 0);
        treasure.addImage('normal', treasureImage);
        won = true;
        score++;
        //bring player back to start 
        player.position.x = 10;
        player.position.y = 40;
        //reset time 
        timeLeft = 10;
        //reset treasure position
        var randomX = Math.floor(Math.random() * width);
        var randomY = Math.floor(Math.random() * height);
        chestPos = createVector(randomX, randomY);
        player.velocity.x = 0;
        player.velocity.y = 0;
    }
}


function distanceFromChest() {
    var distance;
    distance = dist(player.position.x, player.position.y, chest.position.x, chest.position.y);
    // console.log(distance);
    return distance
}

function checkIfFailed() {
    if (timeLeft <= 0) {
        won = false;
        console.log("you didnt get the treasure in time! Try again");
        player.position.x = 10;
        player.position.y = 40;
        player.velocity.x = 0;
        player.velocity.y = 0;
        timeLeft = 10;
        var randomX = Math.floor(Math.random() * width);
        var randomY = Math.floor(Math.random() * height);
        chestPos = createVector(randomX, randomY);
    }

}