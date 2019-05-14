let amplitude_slider, frequency_slider, time_slider;
var startX = -150;
var startY = 200;
var endX = 450;
var endY = -250;

let waveCounter = 0;

var noiseFrequency = .02;
let waves = [];
let numWaves = 30;
let step = 1;
let waveSeperationMultiplier = 13;
let b = 0;

function setup() {
    createCanvas(500, 300);
    createP('Amplitude');
    amplitude_slider = createSlider(0, 200, 120);
    createP('Frequency');
    frequency_slider = createSlider(0, .07, .02, .01);
    createP('Time Speed');
    time_slider = createSlider(0, 10, 2);
    background(50);

    colorMode(HSB, 360, 100, 100, 1);

    for (let w = 0; w < numWaves; w++) {
        wave = createWave();
        wave.startX += w * waveSeperationMultiplier,
            wave.startY = w * waveSeperationMultiplier,
            wave.endX += w * waveSeperationMultiplier,
            wave.endY += w * waveSeperationMultiplier,
            waves[w] = wave;
    }
}

function draw() {
    background(0, .05);
    ellipseMode(CENTER);
    noiseDetail(1, .5);

    noStroke();

    for (let w = 0; w < numWaves; w++) {
        waves[w].drawWave();
        waves[w].updateStartPos();
    }
}


function createWave() {
    var wave = new Object();
    wave = {
        startX: -150,
        startY: 100,
        endX: 250,
        endY: -150,
        drawWave() {
            for (i = 0; i < 1; i += noiseFrequency) {
                var x = lerp(this.startX, this.endX, i);
                var y = lerp(this.startY, this.endY, i);
                // hint: drive offsetX and offsetY with noise() instead of random()
                w = noise(x * frequency_slider.value() + millis() * time_slider.value() * noiseFrequency / 10);
                var offsetX = w * amplitude_slider.value();
                var offsetY = noise(x) * noiseFrequency;

                if (b == 100) {
                    b = random(0, 100);
                }
                b++
                fill(203, 100, b, .1);
                ellipse(x + offsetX, y + offsetY, 15, 15);

            }
        },
        updateStartPos() {

            this.startX += step;
            this.startY += step;
            this.endY += step;
            this.endX += step;
            if (this.startY > width) {
                this.startX = -150;
                this.startY = 100;
                this.endX = 250;
                this.endY = -150;
            }
        }
        // wave.drawWave()

    };

    return wave;
}