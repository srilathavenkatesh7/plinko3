const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var count=0;
var engine,world;
var score=0;
var gameState="play";

function setup() {
  engine=Engine.create();
  world=engine.world
  createCanvas(480,800);
  ground=new Ground(240,795,480,10);
}
 var particle
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
  if(gameState==="end"){
    push ();
    textSize(18)
    text ("Game ended",240,400);
    pop ();
  }
  push ();
  strokeWeight (3)
  stroke ("yellow")
  line (2,500,478,500);
  pop ();
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
    push ();
    textSize(18);
    text ("Score:"+score,340,20);
    pop ();
    push ();
    textSize(20)
    text ("100",28,520);
    text ("200",108,520);
    text ("300",188,520);
    text ("300",268,520);
    text ("200",348,520);
    text ("100",428,520);
    pop ();
    if(particle!==null){
particle.display();
if(particle.body.position.y>500){

  if(particle.body.x<80){
    score=score+100;
    particle=null;
    if(count>=5){
      gameState="end"
    }
  }
  if(particle.body.position.x<160 && particle.body.position.x>80){
    score=score+200;
    particle=null;
    if(count>=5){
      gameState="end"
    }
  }
  if(particle.body.position.x<240 && particle.body.position.x>160){
    score=score+300;
    particle=null;
    if(count>=5){
      gameState="end"
    }
  }
  if(particle.body.position.x<320 && particle.body.position.x>240){
    score=score+300;
    particle=null;
    if(count>=5){
      gameState="end"
    }
  }
  if(particle.body.position.x<400 && particle.body.position.x>320){
    score=score+200;
    particle=null;
    if(count>=5){
      gameState="end"
    }
  }
  if(particle.body.position.x<480 &&particle.body.position.x>400){
    score=score+100;
    particle=null;
    if(count>=5){
      gameState="end"
    }
  }
}
    }
  }
  
function mousePressed(){
  if(gameState!=="end"){
 particle=new Ball(mouseX,10,10);
 count=count+1;;
  }
}
 


