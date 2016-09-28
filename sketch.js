var cars = [];
			
function setup()
{
  createCanvas(800, 400);
  
  
  for(var i = 0; i < 25; i++)
  {
    cars[i] = new Car();
  }
}
 
function draw()
{
 
  background(255);
  
 
  for(var i = 0; i < cars.length; i++)
  {
    cars[i].drive();
    cars[i].display();
  }      
  
}
 

function Car(ypos, speed)
{
  this.xpos = random(width);
  this.ypos = random(height);
  this.speed = random(4);
  this.c = color(random(255), random(255), random(255));
 
  
  this.drive = function()
  {
    if(this.xpos > width)
    {
      this.xpos = -200; 
      this.ypos = random(height);
    }
    this.xpos = this.xpos + this.speed;        
  }
 
  
  this.display = function()
  {
  
    fill(this.c);
    rectMode(CORNER);
    rect(this.xpos, this.ypos, 100, 50);
 
    
    fill(0);
    ellipse(this.xpos + 20, this.ypos + 45, 40, 40);
    ellipse(this.xpos + 80, this.ypos + 45, 40, 40);
  }
}