// DM2008 — Activity 4b [Guided]
// Objects in Motion (50 min)
//
// You have a working Agent class to start with — your job is to bring it to life.
// Each agent moves, changes over time, and is drawn to the screen.
// Mouse click adds a new agent. C clears them all.
//
// Things to try:
// - Change the starting values (size, speed, color) to see what happens
// - Make agents bounce instead of wrap — what needs to change?
// - Add a second method to your class beyond update() and show()
//
// Stretch: give each agent a lifespan — shrink or fade it over time, then remove it.
// Hint: a backward loop lets you safely splice items while iterating.

let agents = [];
const NUM_START = 10;

function setup() {
  createCanvas(600, 400);
  noStroke();

  for (let i = 0; i < NUM_START; i++) {
    let x = random(width);
    let y = random(height);
    let sz = random(12, 36);
    let speedX = random(-2, 2);
    let speedY = random(-2, 2);
    agents.push(new Agent(x, y, sz, speedX, speedY));
  }
}

function draw() {
  background(35,123);

  for (let i = agents.length - 1; i >= 0; i--) {
    agents[i].shrink();
    agents[i].update();
    agents[i].show();

    if (agents[i].sz <=0) {
      agents.splice(i,1);
    }
  }
}

function mousePressed() {
  let sz = random(5, 100);
  let speedX = random(-10, 10);
  let speedY = random(-10, 10);
  agents.push(new Agent(mouseX, mouseY, sz, speedX, speedY));
}

function keyPressed() {
  // Replacing the array with an empty one effectively clears all agents
  if (key == "C" || key == "c") {
    agents = [];
  }
}

class Agent {
  constructor(x, y, sz, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.sz = sz;
    this.dx = speedX;
    this.dy = speedY;
    this.col = random(255); // a color value that will change over time
    // What else might your agent need to know about itself?
  }
  shrink(){
    this.sz -=0.3;
  }

  update() {
    // Position changes by speed each frame — can you see why?
    this.x += this.dx;
    this.y += this.dy;

    // This is a property changing over time — try changing size or speed instead
    this.col = (this.col + 5) % 255;

    // This wraps agents around the edges — could you make them bounce instead?
    if (this.x > width) {
      this.dx *= -1;
    }
    if (this.x < 0) {
      this.dx *= -1;
    }
    if (this.y > height) {
      this.dy *= -1;
    }
    if (this.y < 0) {
      this.dy *= -1;
    }
  }

  show() {
    // this.col drives the color shift — how could you use your other properties here?
    fill(this.col, 50, 250);
    ellipse(this.x, this.y, this.sz);
  }
}
