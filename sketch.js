const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = []
var plinkos = []
var divisions = []

var divisionHeight=300;


function setup() {
  createCanvas(480,650);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,640,480,20)

  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for(var j = 40; j <=width; j = j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  for(var j = 15; j <=width-10; j = j+50){
    plinkos.push(new Plinko(j,150,10))
  }
  for(var j = 40; j <=width; j = j+50){
    plinkos.push(new Plinko(j,225,10))
  }
  for(var j = 15; j <=width-10; j = j+50){
    plinkos.push(new Plinko(j,300,10))
  }
  
  

}

function draw() {
  background(0);  
  Engine.update(engine)

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10))
  }

  ground.display();

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }

}