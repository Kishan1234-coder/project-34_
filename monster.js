class Monster{
    constructor(x, y,width,height) {
        var options = {
          //isStatic:true,
            'frictionAir':0.005,
            'density': 1,
            "friction":2
        }
        this.body = Bodies.circle(x, y,300,options);
        this.width = width;
        this.height = height;
        this.diameter = 300;
        //this.height = height;
        this.image = loadImage("images/Monster-01.png");
        //this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //fill("black");
        imageMode(CENTER);
        image(this.image, 0,0, this.diameter,this.width,this.height);
        pop();
      }
}