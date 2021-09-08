var snowBg
var myEngine,myWorld;
var snowFall=[];






function preload() {
  
snowBg=loadImage("snow2.jpg");



}
function setup() {
  createCanvas(1200,800);
 // createSprite(400, 200, 50, 50);
  myEngine=Matter.Engine.create();
  myWorld=myEngine.world;
  Matter.Engine.run(myEngine);
  for(var i=0;i<=600;i++){
    snowFall.push(new Snow(Math.round(random(30,1150)),Math.round(random(10,30))));
  }




}

function draw() {
  background(snowBg);  
  //drawSprites();
  for(var i=0;i<=600;i++)
  snowFall[i].display();





}