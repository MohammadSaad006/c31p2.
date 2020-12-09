class ball{
    constructor(x,y,radius,angle) {
        var options= {    
     'restitution':0.8,
     'friction':1,
     'density':1
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.radius=radius;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body)
        
    }

    display(){
        var b1pos=this.body.position
        var angle= this.body.angle
       // b1pos.x=mouseX
        //b1pos.y=mouseY
        push()
        translate(b1pos.x,b1pos.y)
        rotate(angle)
        ellipseMode(CENTER);
        ellipse(b1pos.x,b1pos.y,50,50);
        pop()
    }
}
