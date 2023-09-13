let x = 200;
let speed = 5;
let diameter = 100;

function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  background(125, 200, 0);
  ellipse(x, height/2, diameter);
  if (x >= width - diameter/2 || x <= 0 - diameter/2 + 100) {
    speed = speed * -1;
  }
  x += speed;
}
