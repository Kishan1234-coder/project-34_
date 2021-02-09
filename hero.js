class Hero{
    constructor(x, y,width,height) {
        var options = {
            'friction':0.5,
            'density': 1.0,
            "friction":0.1
        }
        this.body = Bodies.circle(x, y,300,width,height,options);
        this.diameter = 300;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Superhero-01.png");
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