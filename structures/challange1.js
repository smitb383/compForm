function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
}

function draw() {
    background(20);

    noStroke();
    ellipseMode(CENTER);
    var noiseFrequency = .02;
    beginShape();
    for (var i = 0; i < 100; i++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        var w = random(width / 4, width);
        var h = random(height / 4, height);
        var x = noise(i * noiseFrequency) * w;
        var y = noise(i * noiseFrequency) * h;
        // the diameter shouldn't always be 10, it needs to vary
        var diameter = random(4, 15);
        h = map(diameter, 4, 15, 0, 260);
        fill(h, 100, 100)
        // the colors also need to change
        // what colorMode would be easiest to work with?

        // w = noise(x * 10 + millis() *  10);
        // var offsetX = w * 10;
        // var offsetY = noise(x) * noiseFrequency;
        ellipse(x + 15, y + 15, diameter, diameter);
    }



    noLoop();


}