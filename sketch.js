
let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(710, 500);

  input = createInput();
  input.position(15, 350);

  button = createButton('comment');
  button.position(input.x + input.width, 350);
  button.mousePressed(greet);

  greeting = createElement('h3', 'lilycrocamo');
  greeting.position(10, 0);

  textAlign(CENTER);
  textSize(50);
}

function draw() {
  fill (50, 50, 50)
  rect(15, 55, 275, 275)
}

function greet() {
  const name = input.value();
  // input.value('');
    push();
    translate(30, 425);
    text(name, 0, 0);
    pop();
  
}


