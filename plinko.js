class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        
    this.body=Bodies.circle(this.x,this.y,10,options)
    this.radius=10
   World.add(world,this.body);


}
display(){
    var pot=this.body.position;
  

    ellipseMode(CENTER);
    fill ("white")
    ellipse(pot.x,pot.y,10);
    
}
}