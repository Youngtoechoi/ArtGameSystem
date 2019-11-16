let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var SCENE_W = 1600;
var SCENE_H = 800;
var cameraZoom = 1;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
}

function draw() {
  background(30);
  rect(mouseX, mouseY, 30, 30);
  if (mouseIsPressed){cameraZoom =+ cameraZoom+0.05;}
  else {cameraZoom = 1;}
  camera.zoom = cameraZoom;
}
