var sword;
var backgroundd;
var fruit;
var enemy;
var fruitGroup;
var enemyGroup;
var PLAY = 1;
var END = 0;
var gameState=PLAY;



function preload() {
  swordI = loadImage("sword-removebg-preview.png");
  backId = loadImage("Wiki-background.jpg");
  fru1 = loadImage("fruit1.png");
  fru2 = loadImage("fruit2.png");
  fru3 = loadImage("fruit3.png");
  fru4 = loadImage("fruit4.png");
  enemyI = loadImage("alien1.png");
  gameOverImg =loadImage("gameover.png");

}

function setup() {
  createCanvas(600, 600);

  backgroundd = createSprite(300, 300, 10, 10);
  backgroundd.addImage(backId);
  backgroundd.scale = 0.9;

  sword = createSprite(300, 400, 20, 20);
  sword.addImage(swordI);
  sword.scale = 0.7;

 
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  gameOver = createSprite(300,300);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 2;

  
  
  
  
   sword.setCollider("rectangle",0,0,50,100)
score = 0;



}

function draw() {
  background(400);  
  
  sword.y = mouseY;
  sword.x = mouseX;

  fruits();
  enemys();
  
 if(gameState === PLAY){
    gameOver.visible = false;
  fruitGroup.velocityX = -7;
  if(fruitGroup.isTouching(sword)){
    score=score+2;
    fruitGroup.destroyEach();
    
 }  
 }
 
  if(enemyGroup.isTouching(sword)){
    gameState = END;
  }
  if (gameState === END) {
    gameOver.visible = true;
    
     fruitGroup.velocityX = 0;
      fruitGroup.velocityY = 0
    fruitGroup.setVelocityXEach(0);
    
    
    enemyGroup.velocityX = 0;
      enemyGroup.velocityY = 0
     enemyGroup.setVelocityXEach(0);
    
}
  
  
  
  
  drawSprites();
text("Score: "+ score, 500,50);
}

function fruits() {
  if (frameCount % 80 === 0) {
    fruit = createSprite(600, 200, 20, 20);
    fruit.scale = 0.3;
    r = Math.round(random(1, 4))
    if (r == 1) {
      fruit.addImage(fru1);
    } else if (r == 2) {
      fruit.addImage(fru2);
    } else if (r == 3) {
      fruit.addImage(fru3);
    } else if (r == 4) {
      fruit.addImage(fru4);
    }


    fruit.y = Math.round(random(50, 340));
    fruit.velocityX = -7;
    fruit.setlifetime = 150;
    fruitGroup.add(fruit);

  }
}

function enemys() {
  if (frameCount % 300 === 0) {
    enemy = createSprite(600, 200, 20, 20);
    enemy.addImage(enemyI);
    enemy.scale = 1;
    enemy.y = Math.round(random(50, 340));
    enemy.velocitX = Math.round(random(-1, -5));
    enemy.velocityX = -9;
    enemy.setlifetime = 50;
    enemyGroup.add(enemy);



  }
}