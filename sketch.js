let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var meX, meY;
var me;
var passengers;
var subway, subway2;

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
  subway();
}

function draw() {
  background(30);


drawSprites();
}

function subway() {
  subway = createSprite(width/2, height/4, width, 10);
  subway2 = createSprite(width/2, height/3*2, width, 10);

}
