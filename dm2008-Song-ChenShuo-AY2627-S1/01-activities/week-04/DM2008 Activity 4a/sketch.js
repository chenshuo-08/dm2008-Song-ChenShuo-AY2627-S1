// DM2008 — Activity 4a [Guided]
// Bake a Cookie (30 min)
//
// A class is a blueprint — Cookie describes what every cookie has and can do.
// Your job is to complete the class, then add movement and a flavor randomizer.
//
// Suggested order:
// 1. Add the missing properties to the constructor (sz, x, y)
// 2. Fix show() so it uses this.flavor, this.x, this.y, this.sz
// 3. Implement move() and randomFlavor()
// 4. Wire them up in keyPressed() and mousePressed()
//
// Stretch: add a second cookie with different starting values.

let cookie;

function setup() {
  createCanvas(400, 400);
  noStroke();
  cookie = new Cookie("chocolate", 80, width / 2, height / 2);
}

function draw() {
  background(230);
  cookie.show();
}

class Cookie {
  constructor(flavor, sz, x, y) {
    // this. binds each value to this specific cookie object
    // Add the missing properties below
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

  show() {
    // Fix this method — it should use this.flavor, this.x, this.y, this.sz
    if (this.flavor == "chocolate") {
      fill(196, 146, 96);
    } else if (this.flavor == "vanilla") {
      fill(255, 223, 150);
    } else {
      fill(220, 180, 120);
    }
    ellipse(this.x, this.y, this.sz);
  
  const s = this.sz * 0.1;
    fill(60);
    ellipse(this.x - this.sz*0.22, this.y - this.sz*0.15, s);
    ellipse(this.x + this.sz*0.18, this.y - this.sz*0.10, s);
    ellipse(this.x - this.sz*0.05, this.y + this.sz*0.12, s);
    ellipse(this.x + this.sz*0.20, this.y + this.sz*0.18, s);
  }

  // Add a move() method — update this.x or this.y based on which key is pressed
  move() {
    this.x += 2;
  }

  // Add a randomFlavor() method — set this.flavor to one of at least 3 options
  randomFlavor() {
    const flavors = ["chocolate","vanilla","strawberry"];
    this.flavor = random(flavors);
  }
}

// Call cookie.move() when an arrow key is pressed
function keyPressed() {
  if (key === "d") {
    cookie.move();
  }
}

// Call cookie.randomFlavor() when the mouse is clicked
function mousePressed() {
  if(mouseIsPressed){
    cookie.randomFlavor();
  }
}
