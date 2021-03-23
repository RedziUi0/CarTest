var car , testingblock
var speed , weight;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  
  weight = random(400,1500);

  car=createSprite(100, 200, 20, 20);
  car.velocityX=speed
  car.shapeColor=color(250)
  

  testingblock=createSprite(1000, 200, 40,height/2);

 
 
}

function draw() {
  background("black");  



if(testingblock.x-car.x < (testingblock.width+testingblock.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22500;
if(deformation>180)
{
  car.shapeColor=color(250,0,0);
}

if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}

} 
drawSprites();
}