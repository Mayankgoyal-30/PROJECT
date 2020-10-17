var wall,thikness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  thikness=random();

  bullet= createSprite(50,200,50,50);
  bullet.shapeColor=color(0,0,0);
  wall= createSprite(1200,20,thikness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;

  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(255,255,255);  
  
  if (hasCollided(Lbullet , Lwall)){
   bullet.velocityX=0;
   var damage=0.5 * weight * speed* speed/(thikness *thikness *thikness);
   if(damage>10){
    wall.shapeColor=color(255,0,0);
   }
   if(damage<10){
    wall.shapeColor=color(0,255,0);
   }
   }
   hasCollided();
  
   drawSprites();

}
function hasCollided(Lbullet , Lwall){
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;

}