
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
 
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

    
	paper = new Paper(100,300,100)
	
	dustbin1 = new dustbin(1300,690)

	ground = new ground(1000,700,1000000,10)    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  paper.display()
  dustbin1.display()
  ground.display()
  

  

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:600,y:-700})
	}

}

