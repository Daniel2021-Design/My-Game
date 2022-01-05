var boy;
var boyImage1,boyImage2,boyImage3;
var backgroundImage;
var boyLeft1,boyLeft2,boyLeft3;
var invisibleGround;
var glassBottle,paper,plasticBottle;
var glassImage,paperImage,plasticImage;


function preload() {
  boyImage1 = loadImage("Images/Boy.animation1.png");
  boyImage2 = loadImage("Images/Boy.animation2.png");
  boyImage3 = loadImage("Images/Boy.animation3.png");
  backgroundImage = loadImage("Images/Background.jpg");
  boyLeft1 = loadImage("Images/Boy.leftAnimation1.png");
  boyLeft2 = loadImage("Images/Boy.leftAnimation2.png");
  boyLeft3 = loadImage("Images/Boy.leftAnimation3.png");

  glassImage = loadImage("Images/GlassBottle.jpg");
  paperImage = loadImage("Images/Paper.jpg");
  plasticImage = loadImage("Images/plasticBottle.png");
}
function setup() {
  createCanvas(1000,600);
  boy = createSprite(400,500,50,50);
  boy.addAnimation("lefttoright",boyImage1,boyImage2,boyImage3);
  boy.addAnimation("righttoleft",boyLeft1,boyLeft2,boyLeft3);
  boy.scale = 0.3;

  invisibleGround = createSprite(500,260,1000,10);
  invisibleGround.visible = false;


  edges = createEdgeSprites();
}

function draw() {
  background(backgroundImage);  
  if(keyDown(UP_ARROW)) {
    boy.y = boy.y-5;
    boy.changeAnimation("lefttoright");
  }

  if(keyDown(DOWN_ARROW)) {
    boy.y = boy.y+5;
    boy.changeAnimation("righttoleft");
  }

  if(keyDown(LEFT_ARROW)) {
    boy.x = boy.x-5;

    boy.changeAnimation("righttoleft");
  }

  if(keyDown(RIGHT_ARROW)) {
    boy.x = boy.x+5;
    boy.changeAnimation("lefttoright");
  }

  boy.collide(edges);
  boy.collide(invisibleGround);
  
  createPlastic();
  createPaper();
  createGlassBottles();
  drawSprites();
}

function createGlassBottles(){
 if(frameCount % 60 === 0) {
  glassBottle = createSprite(random(50, 950),random(330,600), 10,10);
  glassBottle.addImage(glassImage);     
  glassBottle.scale = 0.07;
  }
}

function createPaper(){
  if(frameCount % 150 === 0) {
   paper = createSprite(random(50, 950),random(330,600), 10,10);
   paper.addImage(paperImage);     
   paper.scale = 0.01;
   }
 }

 function createPlastic(){
  if(frameCount % 200 === 0) {
   plasticBottle = createSprite(random(50, 950),random(330,600), 10,10);
   plasticBottle.addImage(plasticImage);     
   plasticBottle.scale = 0.07;
   }
 }

