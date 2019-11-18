let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
let sX =0;
let sY =200;
var s, wall;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();

   s = createSprite(sX, sY, 30, 30)
   wall = createSprite(width/2, height/2, 10, 10)
}

function draw() {
  background(255,255,255)


  var s = createSprite(sX, sY, 30, 30)
  var wall = createSprite(width/2, height/2, 10, 10)

  if (s.overlap(wall)){
    wall.visible = false;
  }
  else {
    wall.visible = true;
  }
  drawSprites();
}
function keyPressed(){
  if (keyCode == LEFT_ARROW){
  sX=  sX-5}
  else if (keyCode == RIGHT_ARROW){
  sX=  sX+5}
  else if (keyCode == DOWN_ARROW){
  sY=  sY+5}
  else if (keyCode == UP_ARROW){
  sY=  sY-5}

  }
