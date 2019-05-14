function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
    smooth();
    // colorMode(HSB);
    colorMode(RGB, 255, 255, 255, 1);

    //individual tuffs 
    frameRate(30);

}

window.draw = function () {
    for (let tuff = (-30); tuff < 40; tuff++) {
        let origin = (tuff + 30) * 10;
        let tuffLength = map(abs(tuff), 0, 30, 200, 70);
        for (let strand = 0; strand < 200; strand++) {

            //random opacity 
            let red = Math.floor(100 * Math.random() + 155);
            let green = Math.floor(20 * Math.random() + 50);
            let opacity = Math.random() - .82;

            //random stroke weight 
            let strandWidth = (3 * Math.random() + 1);
            strokeWeight(strandWidth);
            let horizontalLean = random(-70, 70);

            let length = map(abs(horizontalLean), 0, 70, 400, 200) + tuffLength;

            push();
            let lightThickness = (2 * Math.random() + 1);
            let lightBrightness = (Math.random() - .9);
            strokeWeight(lightThickness);
            stroke(0, 0, 0, lightBrightness);
            line(origin, -100, origin + horizontalLean, length - 30)
            pop();

            stroke(red, green, 10, opacity);
            line(origin, -100, origin + horizontalLean, length);

        }

    }
}