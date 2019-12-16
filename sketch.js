let canvas;
let canvasWidth = 1200;
let canvasHeight = 400;
var meX, meY;
var me;
var passengers;
var subways, subway, subway2,subway3,subway4;
let sadang;
var time;


function preload(){
  sadang = loadImage('assets/sadang.jpg')
}
function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20 );
  // noCursor();
  frameRate(60);
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
  background(255,255,255);
  passengers.bounce(subways);
  passengers.bounce(passengers);
  me.collide(passengers);
  me.bounce(subways);
  bounceEdge();
  text(frameCount);
  meMove();
  doorOpen();
    image(sadang, 0, 0);
    sadang.resize(width, height);
    gameOver();
drawSprites();
  textSize(50);
  text('TIME:', width-200, 80);
  time = frameCount/60;
  time = int(time);

  text(12-time, width-60, 80);
  // text(mouseY, width/2, height/2);

}

function subway() {
  subway = createSprite(width/2, height/4, width, 20);
  subway.immovable = true;
  subway2 = createSprite(0, height/3*2, width/2+400, 20);
  subway2.immovable = true;
  subway3 = createSprite(width-120, height/3*2, width,20);
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


function doorOpen() {
  if
  (frameCount > 60*3 && frameCount < 60*8)
    {
      if(subway3.position.x < width )
      {
      subway3.velocity.x = 2;}
      else if( subway3.position.x > width -120)
      {subway3.velocity.x = 0;}}

  else if
  (frameCount > 60*12)
    {
      if(subway3.position.x > width-100 )
    {subway3.velocity.x = -2;}
    else if( subway3.position.x < width -120)
    {subway3.velocity.x = 0;}
}
}

function gameOver() {
  if (time >12 && me.position.y> 100&& me.position.y < 265)
  { textAlign(CENTER);
    textSize(100);
    text('Succeed', width/2, height/2);
  fill(0);}

  else if (time >12 && me.position.y > 265)
  { textAlign(CENTER);
    textSize(100);
    fill(255,0,0);
    text('GAMEOVER', width/2, height/2);}
    fill(0);
}
