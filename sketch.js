let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var meX, meY;
var me;
var passengers;
var subways, subway, subway2;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
  passengers = new Group();
  for(var i=0; i<50; i++)
  {
    var passenger = createSprite(random(0,width), random(height/4, height/3*2),30,30);
    passenger.setSpeed(random(2,3),random (0,360));
    passengers.add(passenger);
  }
    me = createSprite(width/2, height*3/4, 40,40);
  subway();
  doorOpen();


}

function draw() {
  background(30);
  passengers.bounce(subways);
  me.collide(passengers);
  me.bounce(subways);
  bounceEdge();
  meMove();
drawSprites();


}

function subway() {
  subway = createSprite(width/2, height/4, width, 10);
  subway.immovable = true;
  subway2 = createSprite(0, height/3*2, width/2, 10);
  subway2.immovable = true;
  subway3 = createSprite(width + 60, height/3*2, width,10);
  subway3.immovable = true;
  subways = new Group();
  subways.add(subway);
  subways.add(subway2);
  subways.add(subway3);
}

function bounceEdge() {
  for(var i=0; i<allSprites.length; i++) {
   var s = allSprites[i];
   if(s.position.x<0) {
     s.position.x = 1;
     s.velocity.x = abs(s.velocity.x);
   }

   if(s.position.x>width) {
     s.position.x = width-1;
     s.velocity.x = -abs(s.velocity.x);
   }

   if(s.position.y<0) {
     s.position.y = 1;
     s.velocity.y = abs(s.velocity.y);
   }

   if(s.position.y>height) {
     s.position.y = height-1;
     s.velocity.y = -abs(s.velocity.y);
   }
 }

}

function meMove(){

   if(keyWentDown('d'))
   {me.position.x = me.position.x + 5;}
   if(keyWentDown('a'))
   {me.position.x = me.position.x + -5;}
   if(keyWentDown('w'))
  {me.position.y = me.position.y -5;}
  if(keyWentDown('s'))
    {me.position.y = me.position.y + 5;}
}

function doorOpen(){
  subway2.position.x = subway2.position.x - 0;
}
