class Base {


    constructor(x, y, width, height, fill) {

      var options = {
          isStatic:true
      }


      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.fill = fill



      World.add(world, this.body);
    }


    display(){
      
      push();
      rectMode(CENTER);
      strokeWeight(1);
      stroke("black")

      fill(this.fill);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      
  pop();
  
    }
  


};