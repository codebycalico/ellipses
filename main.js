let circles = [];
let numberOfCircles = 3000;
let whichStartingCircle = 0;
let clicked = false;
let average;
let shade;
let wallColor;

function setup(){
	createCanvas(windowWidth,windowHeight);
  for (let i = 0; i < numberOfCircles; i++){
    circles[i] = new Circle();
  }
}

function draw() {
  background(0);

  for (let i = 0; i < numberOfCircles; i++){
    if(circles[i].visible){
      circles[i].display();
      circles[i].move();
    }
  }
}


function keyPressed(){
  whichStartingCircle+=10;
  for (let i=0; i<10; i++){
    circles[whichStartingCircle+i].visible = true;
  } 
}

class Circle {
  constructor(){
    this.x=width/2;
    this.y=height/2;
    this.smallness=random(50);
    this.xSpeed=random(-5,5);
    this.ySpeed=random(-5,5);
    this.visible=false;
    this.white=false;
  }

  display(){
    shade=random(255);
    if (shade<100){
      shade=shade+100;
    }
    wallColor=0;
    if (this.white===true || this.x<=0 || this.x>=width || this.y<=0 || this.y>=height){
      wallColor=255;
    }
 
    noStroke();
    fill(wallColor,wallColor,255,shade);
    ellipse(this.x-4,this.y-4,this.smallness,this.smallness);
    noStroke();
    fill(255,wallColor,wallColor,shade);
    ellipse(this.x, this.y, this.smallness, this.smallness);
  }

  move(){
    // average=random(25);
    // if (average<21){
    //   average=21;
    // }
    if (mouseIsPressed){
      this.x=(this.x*20+mouseX)/21;
      this.y=(this.y*20+mouseY)/21;
    }else{
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
    }

    if (this.x>=width || this.y>=height || this.x<=0 || this.y<=0){
        this.x=this.x-this.xSpeed;
        this.y=this.y-this.ySpeed;
        this.white=true;
    }else{
      this.white=false;
    }
  }

}