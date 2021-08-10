var bg,bgimg;
var iss,s1;
var issimg,s1img;
var dock = false;

function setup() {
  createCanvas(800,400);
  bg=createSprite(800,400)
  iss = createSprite(400, 150, 50, 50);
  s1 = createSprite(400,350,50,50)
  iss.addImage(issimg)
  s1.addAnimation('s1',s1img)
  s1.scale=0.2
  bg.addImage(bgimg)
  bg.scale=3
}

function draw() {
  background(255,255,255);
  s1.velocityX=0
  s1.velocityY=0
  if(keyDown(LEFT_ARROW)){
    s1.velocityX=-2
  }  
  if(keyDown(RIGHT_ARROW)){
    s1.velocityX=2
  }  
  if(keyDown(DOWN_ARROW)){
    s1.velocityY=2
  }  
  if(keyDown(UP_ARROW)){
    s1.velocityY=-2
  } 
  
  drawSprites();


if(s1.y<220 && s1.y>200){
textSize(25)
  fill('red')
text("DOCKED SUCCESFULLY",300,300)

}
  

}

function preload(){

bgimg=loadImage('spacebg.jpg')
issimg=loadImage('iss.png')
s1img=loadAnimation('spacecraft1.png','spacecraft2.png','spacecraft3.png','spacecraft4.png')
}