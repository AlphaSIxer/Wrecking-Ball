const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a1,a2,a3,a4,a5,a6,a7,a8,a9
var b1,b2,b3,b4,b5,b6,b7,b8,b9
var g1,g2
var w25
var shoot,c1

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    g1=new Base(windowWidth/2.4,windowHeight/1.6,windowWidth/4,20)
    Matter.Body.setStatic(g1.body,true)

    g2=new Base(windowWidth/1.3,windowHeight/1.4,windowWidth/3.5,20)
    Matter.Body.setStatic(g2.body,true)

    w25=windowWidth/25

    a1=new box(windowWidth/2.4,windowHeight/2)
    a2=new box(windowWidth/2.4+w25,windowHeight/2)
    a3=new box(windowWidth/2.4-w25,windowHeight/2)
    a4=new box(windowWidth/2.4-w25-w25,windowHeight/2)
    a5=new box(windowWidth/2.4+w25+w25,windowHeight/2)

    a6=new box(windowWidth/2.4,windowHeight/3)
    a7=new box(windowWidth/2.4+w25,windowHeight/3)
    a8=new box(windowWidth/2.4-w25,windowHeight/3)

    a9=new box(windowWidth/2.4,windowHeight/4)
    
    b1=new box(windowWidth/1.3,windowHeight/1.6)
    b2=new box(windowWidth/1.3+w25,windowHeight/1.6)
    b3=new box(windowWidth/1.3-w25,windowHeight/1.6)
    b4=new box(windowWidth/1.3+w25+w25,windowHeight/1.6)
    b5=new box(windowWidth/1.3-w25-w25,windowHeight/1.6)
    b6=new box(windowWidth/1.3+w25*3,windowHeight/1.6)
    b7=new box(windowWidth/1.3-w25*3,windowHeight/1.6)

    b8=new box(windowWidth/1.3,windowHeight/2.6)
    b9=new box(windowWidth/1.3+w25,windowHeight/2.6)
    b10=new box(windowWidth/1.3-w25,windowHeight/2.6)
    b11=new box(windowWidth/1.3+w25+w25,windowHeight/2.6)
    b12=new box(windowWidth/1.3-w25-w25,windowHeight/2.6)

    b13=new box(windowWidth/1.3,windowHeight/3.6)
    b14=new box(windowWidth/1.3+w25,windowHeight/3.6)
    b15=new box(windowWidth/1.3-w25,windowHeight/3.6)

    b16=new box(windowWidth/1.3,windowHeight/4.6)

    shoot=new Base(windowWidth/7,windowHeight/2,windowWidth/35,windowHeight/15)
    c1=new Chain(shoot.body,{x:windowWidth/7,y:windowHeight/2})

}

function draw(){
    background(0);
    Engine.update(engine)

    fill("blue")
    text("Press up to return shooter to original position",windowWidth/3,windowHeight/40)

    g1.display()
    g2.display()

    a1.display()
    a2.display()
    a3.display()
    a4.display()
    a5.display()

    a6.display()
    a7.display()
    a8.display()

    a9.display()

    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()

    b8.display()
    b9.display()
    b10.display()
    b11.display()
    b12.display()

    b13.display()
    b14.display()
    b15.display()

    b16.display()

    shoot.display()
    c1.display()

    if(a1.body.position.y>1000&&
        a2.body.position.y>1000&&
        a3.body.position.y>1000&&
        a4.body.position.y>1000&&
        a5.body.position.y>1000&&
        a6.body.position.y>1000&&
        a7.body.position.y>1000&&
        a8.body.position.y>1000&&
        a9.body.position.y>1000){
            Matter.Body.setStatic(g1.body,false)
        }

    if(b1.body.position.y>1000
        &&b2.body.position.y>1000&&
        b3.body.position.y>1000&&
        b4.body.position.y>1000&&
        b5.body.position.y>1000&&
        b6.body.position.y>1000&&
        b7.body.position.y>1000&&
        b8.body.position.y>1000&&
        b9.body.position.y>1000&&
        b10.body.position.y>1000&&
        b11.body.position.y>1000&&
        b12.body.position.y>1000&&
        b13.body.position.y>1000&&
        b14.body.position.y>1000&&
        b15.body.position.y>1000){
            Matter.Body.setStatic(g2.body,false)
        }

    if(g2.body.position.y>1000){
        push()
        textSize(72)
        fill("yellow")
        text("You have won!!",windowWidth/3,windowHeight/2)
        pop()
    }
}

function mouseDragged(){
    Matter.Body.setPosition(shoot.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    c1.fly()
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        shoot=new Base(windowWidth/7,windowHeight/2,windowWidth/35,windowHeight/15)
        c1=new Chain(shoot.body,{x:windowWidth/7,y:windowHeight/2})  
    }
}




