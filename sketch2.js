var indo;


function setup(){
createCanvas(800,700);

indo=createSprite(400,200,50,50);
indo.shapeColor="green";
indo.debug = true;
}
function draw(){
    background(25,25,25);
    //indo.x = mouseX;
    //indo.y = mouseY;
    if(keyDown("up")){
        indo.velocityY=-5;
        //indo.Collied(topEdge);
    }
    if(keyDown("down")){
        indo.velocityY=5;
        //indo.Collied(downEdge);
    }
   if(keyDown("right")){
    indo.velocityX=5;
    //indo.Collied(rightEdge);
    }
    if(keyDown("left")){
        indo.velocityX=-5;
        //indo.Collied(leftEdge);
    }
    if(keyDown("space")){
    indo.shapeColor="red";
    }
    else{
        indo.shapeColor="green";
    }
    //this page is a collider code
    //indo.setCollider("topEdge");
    //indo.setCollider("downEdge");
    //indo.setCollider("rightEdge");
    //indo.setCollider("leftEdge");
    
    //if(indo.collide(topEdge)){
        //indo.shapeColor="red";
    //}
    //if(indo.collide(downEdge)){
        //indo.shapeColor="yellow";
    //}
    //if(indo.collide(rightEdge)){
        //indo.shapeColor="green";
    //}
    //if(indo.collide(leftEdge)){
        //indo.shapeColor="blue";
    //}
drawSprites();
}