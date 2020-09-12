
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground
var tree1, treeImg
var boy1
var mango1,mango2,mango3,mango4,mango5
var stone1
var throw1

function preload()
{
  //treeImg = loadImage("Sprites/tree.png")	
}

function setup() {
	createCanvas(900,700);
	engine = Engine.create();
	world = engine.world;

	ground = createSprite(500,500,1000,30);
	 
	tree1 = new tree(700,300,300,400)

	boy1 = new boy(200,450,120,250)

	mango1 = new mango(700,200)
	mango2 = new mango(750,250)
	mango3 = new mango(650,270)
	mango4 = new mango(650,180)
	mango5 = new mango(800,250)

	stone1 = new stone(150,380)

	Engine.run(engine);
  
}


function draw() {

  background("black");
  Engine.update(engine);

  mouseDragged();
  mouseReleased();

  detectCollision(stone1,mango1)
  detectCollision(stone1,mango2)
  detectCollision(stone1,mango3)
  detectCollision(stone1,mango4)
  detectCollision(stone1,mango5)

  ground.display();
 
  tree1.display();

  boy1.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone1.display();

}

 function fly(){
	this.stone.bodyA = null;
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    throw1.fly();
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition= Lmango.body.position
	stoneBodyPosition= Lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}
