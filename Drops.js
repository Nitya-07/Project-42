class Drops{
    constructor(x,y){
        var options = {
            friction: 0.1,
            restitution:0.4
    }
    this.r = 5;
        this.body = Bodies.circle(x, y, 5, options);
        
        World.add(world, this.body);
    }

updateY(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body, {x : random(0,400), y : random(0,400)});
    }
}
display() {

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    
    translate(pos.x, pos.y);
    rotate(angle);
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
  }
};
