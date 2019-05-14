let mouths = [];
let eyes = [];
let noses = [];

function preload() {

    // open on one side
    body = loadImage('head.jpg');
    face = loadImage('face.jpg');
    //open on two sides (across from one another)
    mouth1 = loadImage('mouth1.jpg');
    //open on two sides (next to each other)
    mouth2 = loadImage('mouth2.jpg');

}

function setup() {
    background(0, 0, 0);
    createCanvas(800, 800);

    mouths[0] = mouth1;
    mouths[1] = mouth2;
    eyes[0] = face;
    image(body, 0, 0);


}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        image(mouths[0], mouseX, mouseY, 200, 200);
    }
}

function mousePressed() {

}

// click m for new mouth, any time you click m a new mouth will come up[ 
//when you click and drag n a =n image it will move 
]