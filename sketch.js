var wall,thickness;
var speed1,weight1;
//var Car=[];
var bullet1,bullet2;
var edges;

function setup() {
  createCanvas(1600,400);
  
  speed1=Math.round(random(4,5))
weight1=Math.round(random(30,52))

  thickness=Math.round(random(23,83));
 bullet2 = new bullet(100,50,weight1,speed1);
  bullet1 = new bullet(200,100,weight1,speed1);

  wall=createSprite(1200,200,thickness,400);
edges = createEdgeSprites();
}

function draw() {
  background("black"); 
  bullet1.display();
  bullet2.display();
  
  if(bullet1.isTouchingwall(wall,bullet)){
    bullet1.velocityX=0;
    bullet1.collition(wall);
    
    var damage=0.5*this.weight*this.speed*this.speed/(wall.width^3);
    console.log(damage);
    if(damage>10){
      bullet1.shapeColor="red";
    }
    if(damage<10){
      bullet1.shapeColor="blue";
    }
  }
}


