const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var throwBall;
var btlink;
var base1, base2, base3;
var blockL1N1;
var blockL2N1, blockL2N2;
var blockL3N1, blockL3N2, blockL3N3;
var blockL4N1, blockL4N2, blockL4N3, blockL4N4;
var blockL5N1, blockL5N2, blockL5N3, blockL5N4, blockL5N5;

var b11, b21, b22, b31, b32, b33, b41, b42, b43, b44;

var bigBlock;

var bg;

var score = 0;

var timeScore = 0;

var timeScoreSec;


function preload() {
    backgroundImg = loadImage("whiteBG.png");
    dayTime()
}

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    throwBall = new BallThrow(150, 400)

    btlink = new BTLink(throwBall.body, {
        x: 150,
        y: 400
    })

    base1 = new Base(700, 500, 350, 20, "purple")

    blockL1N1 = new Block(700, 260, 50, 50, "red")

    blockL2N1 = new Block(675, 310, 50, 50, "orange")
    blockL2N2 = new Block(725, 310, 50, 50, "orange")

    blockL3N1 = new Block(650, 360, 50, 50, "yellow")
    blockL3N2 = new Block(700, 360, 50, 50, "yellow")
    blockL3N3 = new Block(750, 360, 50, 50, "yellow")

    blockL4N1 = new Block(625, 410, 50, 50, "green")
    blockL4N2 = new Block(675, 410, 50, 50, "green")
    blockL4N3 = new Block(725, 410, 50, 50, "green")
    blockL4N4 = new Block(775, 410, 50, 50, "green")

    blockL5N1 = new Block(600, 460, 50, 50, "blue")
    blockL5N2 = new Block(650, 460, 50, 50, "blue")
    blockL5N3 = new Block(700, 460, 50, 50, "blue")
    blockL5N4 = new Block(750, 460, 50, 50, "blue")
    blockL5N5 = new Block(800, 460, 50, 50, "blue")


    base2 = new Base(1000, 300, 350, 20, "blue")

    b11 = new Block(1000, 110, 50, 50, "red")

    b21 = new Block(975, 160, 50, 50, "orange")
    b22 = new Block(1025, 160, 50, 50, "orange")

    b31 = new Block(950, 210, 50, 50, "yellow")
    b32 = new Block(1000, 210, 50, 50, "yellow")
    b33 = new Block(1050, 210, 50, 50, "yellow")

    b41 = new Block(925, 260, 50, 50, "green")
    b42 = new Block(975, 260, 50, 50, "green")
    b43 = new Block(1025, 260, 50, 50, "green")
    b44 = new Block(1075, 260, 50, 50, "green")


    base3 = new Base(1050, 550, 200, 20, "orange")

    bigBlock = new Block(1050, 470, 150, 150, "red")




    Engine.run(engine);

}


function draw() {

    background(backgroundImg);
    Engine.update(engine);

    textSize(30)
    text("Score: " + score, 300, 100)

    timeScoreSec = Math.round(timeScore)/100

    if(score<177){
      timeScore = timeScore + 100/30
      textSize(30)
      text("Time: "+timeScoreSec, 300, 200)
    }
    else{
      timeScore = timeScore+0
      textSize(75)
      text("Time: "+timeScoreSec, 300, 325)
    }

    throwBall.display()

    btlink.display()

    base1.display()

    blockL1N1.display()

    blockL2N1.display()
    blockL2N2.display()

    blockL3N1.display()
    blockL3N2.display()
    blockL3N3.display()

    blockL4N1.display()
    blockL4N2.display()
    blockL4N3.display()
    blockL4N4.display()

    blockL5N1.display()
    blockL5N2.display()
    blockL5N3.display()
    blockL5N4.display()
    blockL5N5.display()


    base2.display()

    b11.display()

    b21.display()
    b22.display()

    b31.display()
    b32.display()
    b33.display()

    b41.display()
    b42.display()
    b43.display()
    b44.display()


    base3.display()

    bigBlock.display()






    blockL1N1.blockScore(1)
        
        blockL2N1.blockScore(2)
        blockL2N2.blockScore(2)

        blockL3N1.blockScore(3)
        blockL3N2.blockScore(3)
        blockL3N3.blockScore(3)

        blockL4N1.blockScore(5)
        blockL4N2.blockScore(5)
        blockL4N3.blockScore(5)
        blockL4N4.blockScore(5)

        blockL5N1.blockScore(10)
        blockL5N2.blockScore(10)
        blockL5N3.blockScore(10)
        blockL5N4.blockScore(10)
        blockL5N5.blockScore(10)


    

        b11.blockScore(2)

        b21.blockScore(4)
        b22.blockScore(4)

        b31.blockScore(6)
        b32.blockScore(6)
        b33.blockScore(6)

        b41.blockScore(10)
        b42.blockScore(10)
        b43.blockScore(10)
        b44.blockScore(10)



        bigBlock.blockScore(25)
        

    // drawSprites();


}




function mouseDragged() {
    Matter.Body.setPosition(throwBall.body, {
        x: mouseX,
        y: mouseY
    });
}


function mouseReleased() {
    btlink.fly();
}

function keyPressed() {
    btlink.attach(throwBall.body)
}

async function dayTime() {

    var daytime = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago")
    var daytimeJson = await daytime.json()
        //    console.log(daytimeJson)
    var dt = daytimeJson.datetime
        //    console.log(dt)
    var hr = dt.slice(11, 13)
    console.log(hr)

    if (hr > 6 && hr < 20) {
        bg = "whiteBG.png"

    } else {
        bg = "blackBG.png"

    }

    backgroundImg = loadImage(bg)

}