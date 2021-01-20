function setup() {
  createCanvas(800,400);
  
fx=createSprite (200,200,50,50);
mvr=createSprite (400,200,50,50);
fx.shapeColor="green"
mvr.shapeColor="green"
go1=createSprite (100,100,50,50);
go2=createSprite (200,100,50,50);
go3=createSprite (300,100,50,50);
go4=createSprite (400,100,50,50);
go1.shapeColor="green"
go2.shapeColor="green"
go3.shapeColor="green"
go4.shapeColor="green"
go1.velocityX=2
go1.velocityY=1
}

function draw() {
  background(0);  
  mvr.x=mouseX;
  mvr.y=mouseY;
 if(isTouching(mvr,go2)){
  go2.shapeColor="blue";
  mvr.shapeColor="blue";
 }else{
  go2.shapeColor="green"
  mvr.shapeColor="green"
 }
 if(isTouching(mvr,go1)){
  go1.shapeColor="blue";
  mvr.shapeColor="blue";
 }else{
  go1.shapeColor="green"
  mvr.shapeColor="green"
 }
 bounceoff(mvr,go1)
  drawSprites();
}
