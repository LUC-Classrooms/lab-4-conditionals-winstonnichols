var x, w;

function setup() {
  createCanvas(320, 240);
  x = width / 2;
  w = 100;
}

function draw() {
  background(0);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill(100, 175, 225);
    x = width / 3;
    w = height / 4;
  } 
  else { 
    // otherwise do this:
    fill(55, 200, 65);
    x = width / 2;
    w = 100;
  }
  ellipse(x, height / 2, w, 100);
}
