class BallThrow{

    constructor(x, y)
    {
    
    var circleOptions2 = {
        
        restitution:0.5,
        density:2,
        friction:0.0
    }
    
    
    this.body=Bodies.circle(x, y, 20, circleOptions2)
    this.r1=30

    World.add(world, this.body)
    }
    
            
        display(){

            push()
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);

    
    ellipseMode(CENTER)
    ellipse(0, 0, this.r1, this.r1);    
    

    pop();
    
        }

    
    
    }