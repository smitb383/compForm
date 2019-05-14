function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
    smooth();
    // colorMode(HSB);
    colorMode(RGB, 255, 255, 255, 1);


    // startShape();
    noFill();
    stroke(255, 102, 0, 1);

    //a tuft of hair 
    for (tuft = 1; tuft < 15; tuft++) {
        //starting point for a tuft of hair 
        origin = {
            x: tuft * 50,
            y: 50,
        };
        //end point for a tuft of hair 
        strandEnd = {
            x: tuft * 50,
            y: 400,
        };
        //curve deviation relative to strands 
        let curveDeviation = (Math.random() * 150) + 50;
        //strands in a tuft
        for (strand = 0; strand < 200; strand++) {
            let opacity = Math.random() - .6;
            lavander = {
                r: random(220, 230),
                g: random(118, 230),
                b: random(218, 230),
            };

            stroke(lavander.r, lavander.g, lavander.b, opacity);
            //origin for a strand of hair deviates slightly from central tuft position
            let originDeviationX = (Math.random() * 30) + 5;
            curveStart = {
                x: origin.x + originDeviationX,
                y: origin.y,
            };

            //end point of each strand
            let strandEndDeviationX = (Math.random() * 20) + 5;
            //make strands that fall further from the x axis longer, and strands that end closer, shorter
            let length = map(strandEndDeviationX, 5, 25, 0, 200);
            curveEnd = {
                x: strandEnd.x + strandEndDeviationX,
                y: strandEnd.y + length,
            };

            //straight axis for start and end of strand of hair
            let axis = dist(curveStart.x, curveStart.y, curveEnd.x, curveEnd.y);
            //halfway point of a strand 
            let halfAxisLength = curveEnd.y / 2;

            // control points 
            //the amount of curvature  of a control point is relative to its origin 

            let controlOne = {
                //let the x axis of the control point be a random no larger than the curvedeviation
                x: curveStart.x - (Math.floor(Math.random() * curveDeviation) + 100),
                y: Math.floor(Math.random() * halfAxisLength),
            };

            //control Pont Two
            let controlTwo = {
                x: curveStart.x + (Math.floor(Math.random() * curveDeviation)),
                y: Math.floor((Math.random() * halfAxisLength + halfAxisLength)),
            };

            bezier(curveStart.x, curveStart.y, controlOne.x, controlOne.y, controlTwo.x, controlTwo.y, curveEnd.x, curveEnd.y);
        }
    }
}