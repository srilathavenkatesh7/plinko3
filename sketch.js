const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;



function setup() {
  engine=Engine.create();
  world=engine.world
  createCanvas(480,800);
  ground=new Ground(240,795,480,10);
}
 var particles=[];
 var plinkos=[];
 var divisions=[];
 var divisionHeight=300;
 
function draw() {
  background(0);  
  
  Engine.update(engine);
  ground.display();
  for(var k=0;k<=800;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  
  }
  for(var j=40;j<=800 ;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var i=15;i<=790;i=i+50){
    plinkos.push(new Plinko(i,175));
  }
  for(var l=40;l<=800;l=l+50){
    plinkos.push(new Plinko(l,275));
  }
  for(var m=15;m<=790;m=m+50){
    plinkos.push(new Plinko(m,375));
  }
 
    for(var n=0;n<divisions.length;n++){
      divisions[n].display();
    }
    for(var a=0;a<plinkos.length;a++){
      plinkos[a].display();
    }
    if(frameCount%90===0){
      
particles.push(new Ball(random(10,475),20,20));
     
      for(z=0;z<particles.length;z++){
        particles[z].display();
    }
    
    }
  }

