class box {
    constructor(x,y,width,height){
        var options={
             isStatic:true
        }
       this.box=Bodies.rectangle(x,y,width,height,options)
       this.width=width
       this.height=height
       World.add(world,this.box)

    }

    display(){
    //var pos =this.box.position
    rectMode(CENTER)
    push()
    fill("blue")
    stroke("red")
    strokeWeight(3)
    rect(this.box.position.x,this.box.position.y,this.width,this.height)
    pop()
    }
}
