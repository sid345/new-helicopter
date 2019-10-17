const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var c1,c2,c3,c4;
function preload(){
c1 = loadImage('h1.png');

}


function setup(){
    createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;
    g1 = new Ground(1000,900,2000,200);
    c2 = new Chopper(100,150,200,90);
}
function draw() {
    background(0);
    //console.log('jty');
    Engine.update(engine);
    //if(keyDown("space")){
        //c2.body.velocity.y = -5;
        //gravity
        //c2.velocityY = c2.velocityY + 0.8;
    //}
    g1.display();
    c2.display();
    
}
function keyPressed(){
    if (keyCode === 32){
       Matter.Body.translate(c2.body,{x: 0,y: -100})
    }
    if (keyCode === 49){
        Matter.Body.translate(c2.body,{x: -100,y: 0})
     }
     if (keyCode === 50){
        Matter.Body.translate(c2.body,{x: 100,y: 0})
     }
}
//49:1:left //50:2:right