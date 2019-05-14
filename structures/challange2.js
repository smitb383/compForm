// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

let amplitude_slider, frequency_slider, time_slider;
var startX = 50;
var startY = 250;
var endX = 450;
var endY = 50;
var noiseFrequency = .02;

function setup() {
    createCanvas(500, 300);
    createP('Amplitude');
    amplitude_slider = createSlider(0, 200, 120);
    createP('Frequency');
    frequency_slider = createSlider(0, .07, .02, .01);
    createP('Time Speed');
    time_slider = createSlider(0, 10, 2);
}

function draw() {
    background(50);
    ellipseMode(CENTER);
    noiseDetail(1, .5);
    fill(255);
    noStroke();
    let w;
    for (i = 0; i < 1; i += noiseFrequency) {
        var x = lerp(startX, endX, i);
        var y = lerp(startY, endY, i);
        // hint: drive offsetX and offsetY with noise() instead of random()
        w = noise(x * frequency_slider.value() + millis() * time_slider.value() * noiseFrequency / 10);
        var offsetX = w * amplitude_slider.value();
        var offsetY = noise(x) * noiseFrequency;
        ellipse(x + offsetX, y + offsetY, 10, 10);
    }
}