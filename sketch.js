var car1 ,car2, wal;
var speed,weight;

speed =  random(55,90)
weight = random(400,1500)




function setup() {
  createCanvas(1600,400);
  car1 = createSprite(50, 200, 50, 50);
  car1.shapeColor = "red"
  car1.velocity = -5;

  car2  = createSprite (80,200,50,50);
  car2.shapeColor = "yellow"
  car2.velocityX = -2;

  wall = createSprite(1500,200,60,height/2);
  

}

function draw() {
  background(255,255,255);  

   car1.collied(car2);
   car2.collied(car1);

  drawSprites();
}