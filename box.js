class box extends Base{
    constructor(x,y){
        super(x,y,windowWidth/25,windowHeight/10)
    }
    display(){
        fill("cyan")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,windowWidth/25,windowHeight/10)
    }
}