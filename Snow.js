class Snow {
    constructor(x,y){
        var option={
            restitution:0.3,
            density:1,
            frictionAir:2
        }
        this.snow=Matter.Bodies.circle(x,y,20,option);
        Matter.World.add(myWorld,this.snow);
        this.image=loadImage("snow4.webp")
        this.r=20;

    }
    display(){
        imageMode(CENTER);
        image(this.image,this.snow.position.x,this.snow.position.y,this.r,this.r);

        


    }
}