/*
 * @name Clock
 * @description The current time can be read with the second(),
 * minute(), and hour() functions. In this example, sin() and
 * cos() values are used to set the position of the hands.
 */
let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

var hourimg;
var minuteimg;
var clockface;

let csize;

let hrx, hry;
let mnx, mny;

function preload(){
    hourimg = loadImage('assets/c1.png');
    minuteimg = loadImage('assets/c2.png');
    clockface = loadImage('assets/cface.png');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //print("resize to "+windowWidth)
    //print("cx is "+cx)
    
    var radius = min(width, height) / 2.5;
    secondsRadius = radius * 0.71;
    minutesRadius = radius * 0.6;
    hoursRadius = radius * 0.5;
    clockDiameter = radius * 1.7;
    
    cx = width / 2;
    cy = height / 2;
    
    csize = radius/2.5;
}


function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display','block');


    let radius = min(width, height) / 2.5;
    secondsRadius = radius * 0.71;
    minutesRadius = radius * 0.6;
    hoursRadius = radius * 0.5;
    clockDiameter = radius * 1.7;

    cx = width / 2;
    cy = height / 2;
    
    csize = radius/2.5;
}

function draw() {
  background(230);

  // Draw the clock background
  noStroke();
  //fill(244, 122, 158);
  //ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  //fill(237, 34, 93);
  //ellipse(cx, cy, clockDiameter, clockDiameter);
  
  image(clockface,cx-clockDiameter/2,cy-clockDiameter/2,clockDiameter,clockDiameter)
  

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(50);
  //strokeWeight(1);
  //line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(6);
  mnx = cx + cos(m) * minutesRadius;
  mny = cy + sin(m) * minutesRadius;
  line(cx, cy, mnx, mny);
  strokeWeight(9);
  hrx = cx + cos(h) * hoursRadius;
  hry = cy + sin(h) * hoursRadius;
  line(cx, cy, hrx, hry);
  
  
  //Draw characters
  
  //csize
  image(minuteimg,mnx-csize/2,mny-csize/2,csize,csize)
  image(hourimg,hrx-csize/2,hry-csize/2,csize,csize)
  
  

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
  
  
  stroke(0);
  fill(255);
  text("cx, cy: "+cx+", "+cy,width-150,height-50)
  text("width, height: "+width+", "+height,width-150,height-70)
}
