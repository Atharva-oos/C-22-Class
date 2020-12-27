const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ball,ground;

function setup(){
    createCanvas(600,600);
    myEngine=Engine.create();
    myWorld=myEngine.world;

    var ground_option={
        isStatic: true
    }

    ground=Bodies.rectangle(300,580,600,20,ground_option);
    World.add(myWorld,ground);

    var ball_option={
        restitution:1
    }

    console.log(ground);
    ball=Bodies.circle(300,300,30,ball_option);
    World.add(myWorld,ball);
}

function draw(){
    background("black");
    Engine.update(myEngine);
    fill("red");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,20);
   
    fill("lime");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30);
    

}



