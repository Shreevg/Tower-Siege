class BTLink{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 20
        }
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }


fly(){

this.body.bodyA=null

}

attach(body){

this.body.bodyA=body

}





    display(){
        
        if(this.body.bodyA){


        var pointA = this.body.bodyA.position;
        var pointB = this.body.pointB
        strokeWeight(3);
        stroke("brown")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
    }
    
}