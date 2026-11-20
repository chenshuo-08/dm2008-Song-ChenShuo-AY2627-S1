// DM2008 — Activity 2b [Guided]
// Pattern Making (40 min)
//
// Use a for loop to draw a repeating row of shapes.
// Add a condition to introduce variation — alternating color, size, or spacing.
// Then add one interaction (mouse or key) that changes the rule.
//
// Stretch: try a second row, or turn your row into a 2D grid.

let y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  
  //i is blue circle, j is purple circle, added height
  for (let i = 0; i < height; i += 50) {
    for (let j = 0; j < width; j += 50) {

      // shift both x and y by the same amount
      let x = (j + y) % width;
      let iy = (i + y) % height;

      if (mouseIsPressed) {
        fill(random(112, 255), 120, j % 255);
      } else if ((i + j) % 100 == 0) {
        fill(7, 170, 240);
      } else {
        fill(198, 112, 255);
      }
    // --- Your shape goes here ---
    // Try swapping this out for your own rule.
      if (mouseIsPressed) {
        rect(x, iy, 40);
      } else {
        ellipse(x + 25, iy + 25, 40);
      }
    }
  }

  y += height * 0.005;
  if (y > height) {
    y = 0;
  }
}