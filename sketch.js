let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var SCENE_W = 1600;
var SCENE_H = 800;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
}

function draw() {
