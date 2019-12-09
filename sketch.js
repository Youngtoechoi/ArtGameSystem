let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var meX, meY;
var me;
var passengers;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
  passengers = new Group();
  for(var i=0; i<5; i++)
  {
    var passenger = createSprite(random(0,width), random(0, height),30,30);
    passenger.setSpeed(random(2,3),random (0,360));
    passengers.add(passenger);
  }
}

function draw() {
  background(30);


drawSprites();
}
