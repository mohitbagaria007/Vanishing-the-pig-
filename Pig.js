class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50); 
    this.visibilty = 225;
    this.image = loadImage("sprites/enemy.png");
  } 

display(){ 
  if (this.body.speed<3) {
     super.display(); 
     
  } 
  else { 
    World.remove(world,this.body) 
    push(); 
    this.visibilty= this.visibilty-5 
    tint (255,this.visibilty); 
    image(this.image,this.body.position.x,this.body.position.y,50,50) 
   pop();
  }

}

}