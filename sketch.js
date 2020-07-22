/*
 * Clock from p5js sample code.
 */

let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

let hourimg, minuteimg;
let clockface;

function preload(){
    hourimg = loadImage('assets/c1.png');
    minuteimg = loadImage('assets/c2.png');
    clockface = loadImage('assets/cface.png');
}


function setup(){
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display','block');
    stroke(255);
    let radius = min(width, height) / 2.5;
    secondsRadius = radius * 0.71;
    minutesRadius = radius * 0.6;
    hoursRadius = radius * 0.5;
    clockDiameter = radius * 1.7;

    cx = width / 2;
    cy = height / 2;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    
    let radius = min(width, height) / 2.5;
    secondsRadius = radius * 0.71;
    minutesRadius = radius * 0.6;
    hoursRadius = radius * 0.5;
    clockDiameter = radius * 1.7;
    
    cx = width / 2;
    cy = height / 2;
}

function draw() {
    background(230);

    // Draw the clock background
    noStroke();
    fill(244, 122, 158);
    ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
    fill(237, 34, 93);
    ellipse(cx, cy, clockDiameter, clockDiameter);

    // Angles for sin() and cos() start at 3 o'clock;
    // subtract HALF_PI to make them start at the top
    let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

    // Draw the hands of the clock
    stroke(255);
    strokeWeight(1);
    line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    strokeWeight(2);
    
    let minposx, minposy;
    minposx = cx + cos(m) * minutesRadius;
    minposy = cy + sin(m) * minutesRadius;
    
    line(cx, cy, minposx, minposy);
    strokeWeight(4);
    
    let hrposx, hrposy;
    hrposx = cx = cos(h) * hoursRadius;
    hrposy = cy + sin(h) * hoursRadius;
    
    line(cx, cy, hrposx, hrposy);

    // Draw the minute ticks
    strokeWeight(2);
    beginShape(POINTS);
    for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
    }
    endShape();
}
