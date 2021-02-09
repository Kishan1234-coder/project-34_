const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var monster;

function preload(){
    backgroundImg = loadImage("images/GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(700,height,1200,20);
   

   

    box1 = new Box(600,450,60,60);
    box2 = new Box(600,430,60,60);
    box3 = new Box(600,420,60,60);
    box4 = new Box(600,410,60,60);
    box5 = new Box(600,400,60,60);
    box6 = new Box(600,380,60,60);
    box7 = new Box(700,450,60,60);
    box8 = new Box(700,430,60,60);
    box9 = new Box(700,410,60,60);
    box10 = new Box(700,390,60,60);
    box11= new Box(700,360,60,60);
    box12= new Box(800,450,60,60);
    box13= new Box(800,430,60,60);
    box14= new Box(800,410,60,60);
    box15= new Box(800,380,60,60);
    box16= new Box(900,450,60,60);
    box17= new Box(900,430,60,60);
    box18= new Box(900,410,60,60);
    box19= new Box(900,380,60,60);
    box20= new Box(900,360,60,60);
    
    hero = new Hero(100,100,200,200);
    rope = new Rope(hero.body,{x:400,y:400});
    monster = new Monster(1250,200,200,200);


    
}

function draw(){
    
    background(backgroundImg);
    
    Engine.update(engine);

    

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    hero.display();
    rope.display();
    monster.display();
    



   
}
function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
 
}
/*function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32  && bird.body.speed<1){
        
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        slingshot.attach(bird.body);
        gameState = "onsling"
    }
}

async function getbackGroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    
    var dateTime = responseJSON.datetime;
    console.log(dateTime);
    var hour = dateTime.slice(11,13);
    console.log(hour);

    if(hour>=06 && hour<=18){
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}*/
