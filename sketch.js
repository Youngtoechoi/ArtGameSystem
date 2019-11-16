let canvas;
let canvasWidth = 600;
let canvasHeight = 400;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
}

function draw() {
  var s = createSprite(0, height/2, 30, 30)
  var wall = createSprite(width/2, height/2, 10, 10)

  if (s.overlap(wall)){
    wall.visible = false;
  }
  else {
    wall.visible = true;
  }
}
