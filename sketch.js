let frog;
var car1;
let goal;
let sound_hit;
let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
let carVelocX;
var carGroup;

function preload() {
  sound_hit = loadSound('assets/hit.wav');
  sad_frog = loadImage('assets/sad_frog.png');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position (windowWidth/2 - canvasWidth/2, 20);
  frog = createSprite(width/2, height -40);
  frog.addImage(sad_frog);
  // frog.scale = 0.05;

  noCursor();

  resetGame();

}

function draw() {
  background(220);

for (var i  = 0; i<carGroup.length; i++){
var c = carGroup[i];
  if (c.position.x >= width ) {
    c.position.x = 0;
    c.setVelocity(random(3,10), 0);
  };
}
  //
  //

  if (frog.bounce(c)) {
    sound_hit.play();
  }
  //
  //
  // // 충돌 시 사운드 효과에 대한 또 다른 방법
  // // frog.collide(car1, playHitSound);
  // // frog.bounce(car1);
  //
  //
  if (frog.overlap(goal)) {
    nextLevel();
  }
  //
  Uturn();
  drawSprites();
  checkGameOver();
}


function resetGame() {
  goal = createSprite(width/2, 0, width, 30);
  carGroup = new Group();
for(var i = 0 ; i<10; i++){
 car1 = createSprite(round(random(-1,-10)*60), round (random(1,10))*30, 60, 30);

  carVelocX = 3;
  car1.setVelocity(carVelocX,0);
  car1.addToGroup(carGroup);

}
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    frog.position.y -= 10;
  }
}


function checkGameOver() {
  if (frog.position.x <= 0 || width <= frog.position.x) {
    fill(255, 0, 0);
    textSize(60);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);

  }
}


function nextLevel() {
  frog.position.x = width/2;
  frog.position.y = height-30;
}


function playHitSound() {
  sound_hit.play();
}
function Uturn() {
  let carDist = abs(frog  .position.x - car1.position.x);
  if (carDist < 100 && frog.position.y == car1.position.y) {
    carVelocX = carVelocX*-1;
    car1.setVelocity (carVelocX,0);}
  }
//
