let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
  background(30);
}

function draw() {
  fill(random(40,200),random(40,200),random(40,200),random(40,200))
  ellipse(random(canvasWidth), random(canvasHeight), random(50,150), random(50,150));
  delay(15);
}
