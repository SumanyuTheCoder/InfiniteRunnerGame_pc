var END = 0
var PLAY = 1
var gameState = PLAY
var stickman,stickmanimg,stickmandied;
var bg,BGIMG;
var gtasound;
var obstakle,obstakleGroup;
var ground;
var poster,posterimg,ad;
var GameOVER,GAMEOVERIMG,gameoversound;
var Restart,RestartImg,RestartImg2;
var jumpsound;
function preload() {
     BGIMG = loadImage("bgmi.jpg");
     stickmanimg = loadAnimation("stickman1.png","stickman 2.png");
     gtasound = loadSound("Gta San Andreas.mp3");
     posterimg = loadImage("poster1.jpg")
     obstakle = loadAnimation("monster1.png","monster2.png")
     obstakle2 = loadImage("obstakle1.png","obstakle2")
     stickmandied = loadAnimation("stickmandied.png")
     GAMEOVERIMG = loadAnimation("gameover.png","gameover2.png","gameover3.png","gameover4.png");
     gameoversound = loadSound("sfx-defeat1.mp3");
     RestartImg = loadImage("restart.png");
     RestartImg2 = loadImage("restart2.png");
     jumpsound = loadSound("jumpsound.mp3")
}


function setup() {
 createCanvas(800,400);
    
    bg = createSprite(400,200);
    bg.scale = 0.5;
    bg.addImage(BGIMG);

    stickman = createSprite(100,380);
    stickman.addAnimation("run",stickmanimg);
    stickman.scale = 0.1;
    ground = createSprite(400,400,800,10);
    
    GameOVER = createSprite(400,200);
    GameOVER.addAnimation("over",GAMEOVERIMG);
    GameOVER.visible = false;

    Restart = createSprite(400,320,50,50);
    Restart.addImage(RestartImg);
    Restart.scale =  0.3;
    Restart.visible = false;


    obstakleGroup = new Group();

}

function draw() {
 background("white"); 
//gtasound.play();
 


if(gameState === PLAY){
  posters();
  obstacleop();

  if(keyDown("space") && stickman.y >= 340  ) {
    stickman.velocityY = -16;
    console.log("text");
    jumpsound.play();
  }
  stickman.velocityY = stickman.velocityY + 0.8           
  Restart.addImage(RestartImg)

  if (bg.x < 0){
    bg.x = bg.width/2;
  }
  bg.velocityX = -6;

  if(stickman.isTouching(obstakleGroup)){
    gameState = END;
    }

    Restart.visible = false;
    GameOVER.visible = false;
   
}



if(gameState === END){
  stickman.addAnimation("run",stickmandied)
  bg.velocityX = 0;
  GameOVER.visible = true;
  Restart.visible = true;

  gameoversound.play();
  if(mousePressedOver(Restart)){
    gameState = PLAY;
  
    Restart.visible = true;
    stickman.addAnimation("run",stickmanimg);

  }
}
  
stickman.collide(ground)
  drawSprites();
}
function posters(){
  if (frameCount % 110 === 0) {
    var poster1 = createSprite(700,150,40,10);
    //poster1.y = Math.round(random(800,400));
    poster1.addImage(posterimg);
    poster1.scale = 0.5;
    poster1.velocityX = -6;
  
     //assign lifetime to the variable
    poster1.lifetime = 120;
    
}
}



function obstacleop(){
  if (frameCount % 90 === 0) {
    var obstacle = createSprite(700,370,40,10);
  //  obstacle1.y = Math.round(random(obstakle,obstakle2));
    obstacle.addAnimation("monster",obstakle);
    obstacle.scale = 0.3;
    obstacle.velocityX = -7;
  console.log("op");
  obstakleGroup.add(obstacle);

     //assign lifetime to the variable
     //obstacle1.lifetime = 120;
    
}
}