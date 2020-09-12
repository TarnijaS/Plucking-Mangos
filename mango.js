class mango extends BaseClass {
    constructor(x,y){
      super(x,y,40,40);
      this.image = loadImage("sprites/mango.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }
  