class Chopper{
    constructor(x,y,width,height){
       var options = {
           density: 0.9,
           friction: 2.0
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
      //function draw(){
        
            
      //}
   
    }
    display(){
      var pos= this.body.position;
      var angle= this.body.angle;
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      imageMode(CENTER);
    image(c1,pos.x,pos.y,this.width,this.height);
    
    //pop();
    }
}