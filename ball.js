class Ball{
    constructor(x,y,r){
        var options={
           
            'restitution':0.4
        }
        this.x=x;
        
   this.y=y;
   this.r=r;
   this.color=color(random(0,255),random(0,255),random(0,255));
   this.body=Bodies.circle(this.x,this.y,this.r,options);
   
   
   World.add(world,this.body);


}
display(){
    push ();
    translate (this.body.position.x,this.body.position.y);
    rotate (this.body.angle);
    ellipseMode(CENTER);
    fill (this.color);
    ellipse(0,0,this.r,this.r);
    pop ()
}
    }
