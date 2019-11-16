//gradually zooming animations

let zoom

function setup(){
  createCanveas(800,400)

  ghost = createSprite(400, 200, 50, 100);

  var myAnimation = ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png')
  myAnimation.offY = 18;
  ghost.addAnimation('moving', 'assets/ghost_walk0001.png', 'assets/ghost_walk0004.png');

}

function draw() {

drawSprites(ghost);
}
