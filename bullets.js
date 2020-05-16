class bullet{
    constructor(x,y,weight, speed){
        this.weight=weight;
        this.speed=speed;
        this.velocityX=this.speed;
        this.width=35;
        this.heigth=5;
        this.x = x;
        this.y = y;
        this.bullet = createSprite(this.x,this.y,this.width,this.height);
        this.bullet.velocityX = this.speed;
        this.bullet.shapeColor = "white";
        this.bulletRightEdge=this.x+this.width;
        
    }

display() {
    
    drawSprites();
}
isTouchingwall(wall,bullet){
    console.log("isTouchingwall")
    var wallLeftEdge=wall.x;
    if(this.bulletRightEdge<=wallLeftEdge){
        console.log("art");
        return true;
    }
    else{
        return false;
    }
  }
  collition(){
      this.bullet.collide(wall);
  }
}