class Throw {
    constructor(bodyA, pointB){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.stone = loadImage("sprites/stone.png");
        this.pointB = pointB;
        this.stone = Constraint.create(options);
        World.add(world, this.stone);

    }

    fly(){
        this.stone.bodyA = null;
    }

    display(){
        
        image(this.stone,200,20);
        if(this.stone.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                //image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                //image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            pop();
        }
        }
    }

