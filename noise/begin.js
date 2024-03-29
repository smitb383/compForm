//asteroid clone (core mechanics only)
//arrow keys to move + x to shoot

var bullets;
var asteroids;
var ship;
var shipImage, bulletImage, particleImage;
var MARGIN = 40;

function setup() {
    createCanvas(800, 600);

    bulletImage = loadImage('bullet.png');
    shipImage = loadImage('spaceShip.png');
    particleImage = loadImage('explosion.gif');
    console.log(particleImage);
    ship = createSprite(width / 2, height / 2);
    ship.maxSpeed = 6;

    ship.friction = 0.98;
    ship.setCollider('circle', 0, 0, 20);
    ship.addImage('normal', shipImage);
    // ship.addAnimation('thrust', 'assets/asteroids_ship0002.png', 'assets/asteroids_ship0007.png');
    ship.scale = .5;
    // particleImage.scale = ;

    asteroids = new Group();
    bullets = new Group();

    for (var i = 0; i < 8; i++) {
        var ang = random(360);
        var px = width / 2 + 1000 * cos(radians(ang));
        var py = height / 2 + 1000 * sin(radians(ang));
        createAsteroid(3, px, py);
    }
}

function draw() {
    background(0);

    fill(255);
    textAlign(CENTER);
    text('Controls: Arrow Keys + X', width / 2, 20);
    // bulletImage.rotation = 90;
    particleImage.scale = .2;
    for (var i = 0; i < allSprites.length; i++) {
        var s = allSprites[i];
        if (s.position.x < -MARGIN) s.position.x = width + MARGIN;
        if (s.position.x > width + MARGIN) s.position.x = -MARGIN;
        if (s.position.y < -MARGIN) s.position.y = height + MARGIN;
        if (s.position.y > height + MARGIN) s.position.y = -MARGIN;
    }

    asteroids.overlap(bullets, asteroidHit);
    ship.bounce(asteroids);

    if (keyDown(LEFT_ARROW))
        ship.rotation -= 4;
    if (keyDown(RIGHT_ARROW))
        ship.rotation += 4;
    if (keyDown(UP_ARROW)) {
        ship.addSpeed(0.2, ship.rotation);
        ship.changeAnimation('thrust');
    } else
        ship.changeAnimation('normal');

    if (keyWentDown('x')) {
        var bullet = createSprite(ship.position.x, ship.position.y);
        // bullet.rotation = 90;
        bullet.addImage(bulletImage);
        bullet.setSpeed(10 + ship.getSpeed(), ship.rotation - 90);
        bullet.life = 30;
        bullets.add(bullet);
    }

    drawSprites();

}

function createAsteroid(type, x, y) {
    var a = createSprite(x, y);
    var img = loadImage('book.' + floor(random(0, 3)) + '.png');
    a.addImage(img);
    a.setSpeed(2.5 - (type / 2), random(360));
    a.rotationSpeed = 0.5;
    //a.debug = true;
    a.type = type;
    a.scale = .5;
    if (type == 2)
        a.scale = 0.01;
    if (type == 1)
        a.scale = 0.02;

    a.mass = a.scale;
    a.setCollider('circle', 0, 0, 50);
    asteroids.add(a);
    return a;
}

function asteroidHit(asteroid, bullet) {
    var newType = asteroid.type - 1;

    if (newType > 0) {
        createAsteroid(newType, asteroid.position.x, asteroid.position.y);
        createAsteroid(newType, asteroid.position.x, asteroid.position.y);
    }

    for (var i = 0; i < 10; i++) {
        var p = createSprite(bullet.position.x, bullet.position.y);
        p.addImage(particleImage);
        p.setSpeed(random(3, 5), random(360));
        p.friction = 0.95;
        p.life = 15;
    }

    bullet.remove();
    asteroid.remove();
}