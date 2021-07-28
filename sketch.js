var Backdrop, BackdropImg, Monkey_Running, Reward, ObstacleImg, Monkey, score, FoodGroup, ObstacleGroup

var stone;

function preload() {
  BackdropImg = loadImage("Background.jpg");
  Monkey_Running = loadAnimation("download.png", "download1.png", "download2.png", "download3.png", "download4.png", "download5.png", "download6.png", "download7.png");
  Reward = loadImage("Banana.png");
  ObstacleImg = loadImage("Stone.png");
}

function setup() {
  createCanvas(800, 400);
  Backdrop = createSprite(200, 200);
  Backdrop.addImage("Background", BackdropImg);
  Backdrop.scale = 1.5;
  Backdrop.velocityX = -5;
  
   InvisibleGround = createSprite(200, 310  ,  400, 10);
  InvisibleGround.visible = false;
  
  Monkey = createSprite(50, 300, 40, 40);
  Monkey.addAnimation("MonkeyIsRunning", Monkey_Running);

  
    FoodGroup = createGroup();
  ObstacleGroup = createGroup();
  
}

function draw() {
  fill("black");
  text("Score : " + score, 500, 50);
  score = Math.ceil(frameCount/frameRate());
  
   Backdrop.velocityX = -5;
  
  if(Backdrop.x < 40) {
    Backdrop.x =  Backdrop.width/2;
  }
  
  
  if(keyDown("space") && (Monkey.y>100) ) {
    Monkey.velocityY = -10;  
  }
  
  
  
  if(FoodGroup.isTouching(Monkey)) {
    score = score + 2;
    FoodGroup.destroy()
  }
  

  
  
  
  
  
Monkey.velocityY = Monkey.velocityY + 0.8;
  
 
  
  
  Monkey.collide(InvisibleGround);
  spawnReward();
  spawnObstacles();
  drawSprites();
}


function spawnObstacles() {
  if(frameCount % 300 === 0) {
   Stone = createSprite(400, 300, 40, 10);
    Stone.addImage(ObstacleImg);
    Stone.scale=0.1;
   
    
    Stone.velocityX = -3;  
    Stone.lifetime = -1;
    
    
  }
  
}












function spawnReward() {
  if(frameCount % 80 === 0) {
    Boon = createSprite(800, 100, 40, 40);
    Boon.addImage(Reward);
    Boon.y = random(20,120);
    Boon.scale = 0.06 ;
    Boon.velocityX = -4;  
    Boon.lifetime = 200;
    Boon.depth = Monkey.depth;
    Monkey.depth = Monkey.depth + 1;   
    
  }
  
}
  
  
  
  
  
  
  
  
  
 
