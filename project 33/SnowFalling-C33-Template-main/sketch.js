const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var snowimg,bgImg
var snow=[]

function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(1600,800);

}
function preload(){
snowimg=loadImage("snow4.webp")
bgImg=loadImage("snow2.jpg")
}
function draw() {
  background(bgImg);
  
  Engine.update(engine)
  if(frameCount%50==0){
    snow.push(new Snow(random(100,1500),-10,80))
  }
  for(var i=0; i<snow.length; i++){
    snow[i].display()
  }
  drawSprites();
}