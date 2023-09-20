let ballx = 200;
let rectx = 200
let ballspeed = 5;
let diameter = 100;
let move = true;
let gray = 125; 

function setup() {
  createCanvas(400, 400);
  noStroke()
  rectMode(CENTER)
}

function draw() {
  if (millis() > 10000) {
    background("orange");
  } else {
    background(125, 200, 0);
  }
  if (ballx >= width - diameter/2 || ballx <= 0 - diameter/2 + 100) {
    ballspeed = ballspeed * -1;
  }
  if (move) {
    ballx=ballx+ballspeed
  }
  fill(gray)
  ellipse(ballx, height/2, diameter);
  fill(90, 0, 125, frameCount)
  rect(rectx, height/5, 90)
}

function mouseClicked() {
  if (move) {
    move = false;
  } else {
    move = true;
    gray = random(255);
  }
}

function keyPressed() {
  if (key == 'j' || key == 'J') {
    if (ballspeed < 0) {
      console.log("left");
    } else {
      console.log("right");
    }    
  }
}
