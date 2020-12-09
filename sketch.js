const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var ball2
var g1,g2,g3,g4;
var dv1,dv2,dv3,dv4,dv5,dv6,dv7
var particles = [];
var plinkos   = [];
var divisions = [];
var divisionHeight =300;
var D
var b 
function setup() {
  createCanvas(400,700);
  engine = Engine.create();
  world = engine.world;
  g1 =new Ground(2,350,5,700)
  g2=new Ground(200,655,400,5)
  g3=new Ground(395,350,5,700)
  dv1=new Divider2(5,575,3,150)
  dv2=new Divider2(70,575,3,150)
  dv3=new Divider2(135,575,3,150)
  dv4=new Divider2(195,575,3,150)
  dv5=new Divider2(255,575,3,150)
  dv6=new Divider2(320,575,3,150)
  dv7=new Divider2(390,575,3,150)
  b=new ball(230,200,10,90)
  D=new Divider(0,200,10,10)
  for  (var i =0 ;i< D.length;i++){
    D[i].display();
  }
  if (frameCount%60===0){
    b.push(new Divider(random(300,600),10,10))
  }
  }
function draw() {
  background(0);  
  g1.display()
  g2.display()
  g3.display()
  dv1.display()
  dv2.display()
  dv3.display()
  dv4.display()
  dv5.display()
  dv6.display()
  dv7.display()

}
