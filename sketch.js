
var car, wall;
var speed, weight;
var a,b,c,d;
var deformation;



function setup() {

  
  createCanvas(1600,400);


  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,50,200);
  
  

  

 

}

function draw() {
  background(0,0,0);
  
  weight = Math.round(random(400,2500));
    speed = Math.round(random(55,70));
    car.velocityX = speed;

  


  if(car.isTouching(wall)) {
    car.velocityX=0;
    deformation = 0.5*weight*speed*speed/22500;}

  
    if(deformation>=180) {
      car.shapeColor=color(255,0,0);
      car.x = 1180;
      }
  
      if(deformation<180 && deformation>=80) {
        car.shapeColor=color(230,230,0);
        car.x = 1180;
      }
  
      if(deformation<80) {
        car.shapeColor=color(0,255,0);
        car.x = 1180;
      }
 

  drawSprites();
}