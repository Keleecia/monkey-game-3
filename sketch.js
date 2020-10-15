var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0, ground;
var rand;
var counter = 5;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {

  createCanvas(windowWidth, windowHeight);

  monkey = createSprite(windowWidth - 500, windowHeight - 300);
  
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(windowWidth - 250, windowHeight + 1,  windowWidth ,10);
  
  FoodGroup = createGroup();
  ObstacleGroup = createGroup();



}



function draw() {
  background("lightblue");

  drawSprites();

  fill("white");
  text("Score:" + score, windowWidth - 200, windowHeight - 400, 30, 30);



  Food();




  Obstacle();



  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);


  FoodGroup.lifetime = 10;
  ObstacleGroup.lifetime = 10;


  if (keyDown("space")) {
    monkey.velocityY = -10;
  }

  ground.velocityX = -2;
  ground.x = ground.width / 2;
  if(score === 0)
  {
  score = score + 1;  
  }
  
  //no backround sprite
  



function Food() {

  if (frameCount % 100 === 0) {

    banana = createSprite(windowWidth - 3, windowHeight - 300);
    banana.velocityX = -5;
    banana.scale = 0.1;
    banana.addImage(bananaImage);
    FoodGroup.add(banana);
    
  

  }
    if(monkey.isTouching(FoodGroup))
   {
   score = score + 1;
     FoodGroup.destroyEach();
   }

}

function Obstacle() {

  if (frameCount % 150 === 0) {

    obstacle = createSprite(windowWidth - 3, windowHeight - 20);
    obstacle.velocityX = -5;
    obstacle.scale = 0.3;
    obstacle.addImage(obstaceImage);
    ObstacleGroup.add(obstacle);
    monkey.collide(obstacle);
    monkey.debug = true;


    console.log(obstacle);
    obstacle.debug = true;
  }

  if (ObstacleGroup.isTouching(monkey)) {
    console.log("done");
    ObstacleGroup.velocityX = 0;
    console.log(ObstacleGroup.velocityX);
    console.log(counter);
    score = score - 1;
    ObstacleGroup.destroyEach();
    

  }
   
  switch (score)
  {
         case(10): monkey.scale = 0.2;  break;
         case(20): monkey.scale = 0.3;  break;
         case(30): monkey.scale = 0.4;  break;
         case(40): monkey.scale = 0.5;  break;
         case(50): monkey.scale = 0.6;  break;
  }

}
  
}