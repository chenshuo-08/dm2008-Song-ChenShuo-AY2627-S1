// DM2008 — Activity 3b
// One Function Wonder (30 min)
//
// Write a function that draws a shape or group of shapes.
// It should take at least one parameter — try x, y, size, or color.
// Call it several times with different values to create variation.
//
// Ideas: a simple face, a flower, a house, an icon.
// Example: myShape(100, 200, 50); myShape(300, 200, 80);
//
// Stretch: call your function inside a for loop to create a repeating pattern.
let extraLemons = [];
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}
function draw() {
  background("#daff94");


  myLemon(mouseX, mouseY, 120);//I dont know why is my shape not closely following the mouse


  for (let i = 0; i < extraLemons.length; i++) {
    let l = extraLemons[i];
    myLemon(l.x, l.y, l.size, l.color);
  }
}

  // Call your function here with different values each time
// Define your function outside draw()
// It can be called from anywhere in your sketch

function keyPressed() {
  if (key === "1") {
    extraLemons.push({
      x: random(width),
      y: random(height),
      size: random(50, 150)
    });
  }

  if (key === "2") {
    if (extraLemons.length > 0) {
      extraLemons.pop();
    }
  }
}
function myLemon(x, y, size) {
  push();
  translate(x, y);
  scale(size / 100);
  
  noStroke();
  fill("#312fa2")
  rect(0, 0, 95, 95);
  fill("#ffdd00")
  rect(5, 5, 70, 70, 100, 50, 0, 50);
  fill("#2f7415")
  rect(-30, -30, 20, 20, 0, 50, 0, 50);
  rect(-10, -30, 20, 20, 50, 0, 50, 0);
  rect(-30, -10, 20, 20, 50, 0, 50, 0);
  rect(-10, -10, 20, 20, 0, 50, 0, 50);
  pop();
}
//when key pressed some of the shapes are outside of the canvas