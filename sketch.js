let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
let sX =0;
let sY =200;
var s, wall;
let wX = 300;
let wY = 200;
let velocity = 1;
function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();

   s = createSprite(sX, sY, 30, 30)
   wall = createSprite(wX, wY, 10, 10)

}

function draw() {
  background(255,255,255)
  s.position.x = sX;
  s.position.y = sY;
  wall.position.x = wX;
  wall.position.y = wY;
  wY = wY +5;
  if (wY >400) {
    wY = 0;
  };
  drawSprties();
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
  sX=  sX-15}
  else if (keyCode == RIGHT_ARROW){
  sX=  sX+15}
  else if (keyCode == DOWN_ARROW){
  sY=  sY+15}
  else if (keyCode == UP_ARROW){
  sY=  sY-15}

  }
