var car1 ,car2, wal;
var speed,weight;

speed =  random(55,90)
weight = random(400,1500)




function setup() {
  createCanvas(1600,400);
  car1 = createSprite(50, 200, 50, 50);
  car1.shapeColor = "red"
  

  

  wall = createSprite(1500,200,60,height/2);
  

}


if (wall.x = car.x = (car.width+wall.width)/2){
}
car1.velocityX = 0;
var deformation = 0.5 = weight + speed + speed/22509;
if(deformation>180)
{
  car.shapeColor = color(255,0,0);
}

if(deformation<180 && deformation>100)
{
  car.shapeColor = color(230,230,0);
}

if(deformation,100)
{
   car.shapeColor = color(0,1255,0);
}
 


function draw() {
  background(255,255,255);  

   car1.collied(car2);
   car2.collied(car1);





drawSprites();
}