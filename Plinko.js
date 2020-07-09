class Plinko{
    constructor(x,y,r){
        var options = {
            restitution:0.4,
            isStatic : true
        }
        this.r=r;
        this.body = Bodies.circle(x,y,r,options)
        World.add(world, this.body);
    }
    display(){
        push();
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y, this.r, this.r);
        pop();
    }
};