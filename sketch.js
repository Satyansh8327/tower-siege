
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground1= new Ground(600,200,1200,50)

   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
 
    ground1.display();
}

