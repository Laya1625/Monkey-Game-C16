
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var obstacle
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  score=0;
 
}


function setup() {
  createCanvas(600,400)
  
  monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving" , monkey_running);
  monkey.scale=0.1;
 
  ground=createSprite(400,350,900,10);
   ground.x = ground.width /2;
   ground.velocityX = -4;
  
  bananaGroup = new Group();
  obstacleGroup=new Group();

  }
 
  
 
function draw() {
  
background("lightgreen");
  text("Score: "+ score, 500,50);
  
  
  if(gameState===PLAY){
    
    if(keyDown("space")){
    monkey.velocityY=-18;
     }
  
  if(monkey.isTouching(bananaGroup)){
    banana.destroy(); 
  }
  
  monkey.velocityY=monkey.velocityY+1;
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  spawnBanana();
  spawnObstacles();
  
    
  }
   monkey.collide(ground);
  
  
  if(monkey.isTouching(obstacleGroup)){
    gameState=END;
  }
  
if(gameState===END){
    ground.velocityX = 0;
    monkey.velocityY = 0;
  bananaGroup.destroyEach();
  obstacleGroup.destroyEach();
  monkey.destroy();
  text("GAME OVER",300,200);
      
     
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);    
}

 

  
   
  
  
  drawSprites();
   if(monkey.isTouching(bananaGroup)){
    score=score+1;
  }
 
  
}

function spawnBanana(){
  if (frameCount % 80 === 0) {
    banana = createSprite(600,150,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(120,200))
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=180;
    bananaGroup.add(banana);
    
  }
  
}

function spawnObstacles(){
  if (frameCount % 300 === 0) {
     obstacle = createSprite(600,330,40,10);
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime=200;
     obstacleGroup.add(obstacle);
    
  }
  }



