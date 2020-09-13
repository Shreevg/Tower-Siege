class Block {
 constructor(x, y, width, height, color) {

      var options = {
          friction: 1.5,
          restitution: 0.1,
          density: 0.8
      }


      this.block = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color


      this.Visibility = 255
      World.add(world, this.block);
      
  }


  display() {

      
      if (this.block.speed < 3) {
        fill(this.color);
          //      this.display()
          //  var angle = this.body.angle;
          push();
          translate(this.block.position.x, this.block.position.y);
          rectMode(CENTER);
          strokeWeight(1);
          stroke("black")
              // fill(this.color);
          rect(0, 0, this.width, this.height);
          pop();
      } else {
          
          
          World.remove(world, this.block)
          push()
          this.Visibility = this.Visibility - 5 
        //  tint(255, this.Visibility)
      //    fill(this.color);
              //      rectMode(CENTER);
              //    strokeWeight(1);
              //     stroke("black")


       //   rect(this.block.position.x, this.block.position.y, this.width, this.height);
          
          pop();

      }
         

      }


      blockScore(point){

        if(this.Visibility<255 && this.Visibility>=250){
        
          score=score+point;
        }
        
        }

  

  

}




/*

  display(){

    push()
  
      rectMode(CENTER);
    strokeWeight(1);
      stroke("black")

    fill(this.color);
    rect(this.block.position.x, this.block.position.y, this.width, this.height);

   
    
    
  
   
  
    pop();
    }
        
      
    
    }



*/