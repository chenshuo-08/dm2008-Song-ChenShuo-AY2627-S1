// DM2008 — Activity 1b [Georg Nees]
// Learning By Making (30 min)

let x;
let y;
let w;

function setup() {
  createCanvas(800, 800)
  background(240);
}

function draw() {
  
  x = random(width);
  y = random(height);
  w = random(10, 100);
  
  // background(240,40);
  background(50, 125, 168, 2);
  stroke(200);
  strokeWeight(random(0.5, 5));
  fill(90, 164, 237);
  circle(x, y, w);
  circle(mouseX, mouseY, 70,)
}

function keyPressed() {
    saveCanvas("activity1b-image", "jpg");
}