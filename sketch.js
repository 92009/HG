const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground,ground1;
var stand1,stand2;
var man,jumpImg,fImg,tImg,edges;
var slingShot;
var man1,dImg;
function preload(){
  backgroundImg = loadImage("G.jpg");
 man1=loadImage("boy.png");

 jumpImg=loadImage("jump.png")
 fImg=loadImage("fire.png")
 tImg=loadImage("t.png")
 dImg=loadImage("D.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
 
 Engine.run(engine); 
  ground = new Ground();

  

 

  //Challenge1:
  man = Bodies.circle(50,90,20);
  World.add(world,man);
  f = Bodies.circle(50,50,20);
  World.add(world,f);
  t = Bodies.circle(500,200,20);
  World.add(world,t);
  d = Bodies.circle(700,200,20);
  World.add(world,d);


//challenge 2
  slingShot = new Slingshot(this.man,{x:100,y:10});
  slingShot1 = new Slingshot(this.man,{x:300,y:10});



}
function draw() {
  background(backgroundImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();

  imageMode(CENTER)
  image(man1 ,man.position.x,man.position.y,150,150);

  imageMode(CENTER)
  image(fImg ,f.position.x,f.position.y,100,100);

  imageMode(CENTER)
  image(tImg ,t.position.x,t.position.y,150,150);

  imageMode(CENTER)
  image(dImg ,d.position.x,d.position.y,250,250);

  textSize(20)
  fill("black")
  stroke(2)
  text("HELLO! SAVE THE BOY",600,70)

  textSize(20)
  fill("blue")
  stroke(2)
  text("SPACE:TO JUMP",600,100)
  console.log(man.position);

  
  
  man.velocityY = man.velocityY + 0.5;

  keyPressed();

  slingShot1.display();
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.man,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
  slingShot1.fly();

  

}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
  

    Matter.Body.setVelocity(man,man.position,{x:6,y:-0.1})

  }
}

