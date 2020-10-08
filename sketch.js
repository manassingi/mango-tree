
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rock1,ground1,boy,chain,launchingForce=100;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	rock1=new rock(100,600,30)
	ground1=new Ground(400,650,800,20);
	boy=createSprite(100,600,50.60)
	chain=new slingshort(rock1.body,{x:200,y:400})
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 rock1.display();
 ground1.display();
 chain.display();
}
function mouseDragged(){

	Matter.Body.setPosition(rock1.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	
	  chain.fly()
	}


