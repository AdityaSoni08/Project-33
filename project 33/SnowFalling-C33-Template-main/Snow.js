class Snow{
    constructor(x,y,r){
        var options={
            resitution:0.1,
            frictionAir:0.05,
            isStatic:false
        }
        this.r=r;
        this.image=loadImage("snow4.webp")
        this.body= Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display() {
      
        var pos= this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        imageMode (CENTER);
        image(this.image,0,0,this.r,this.r);
        pop ();
    }
}