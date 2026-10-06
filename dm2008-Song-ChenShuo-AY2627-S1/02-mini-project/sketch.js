// DM2008 — Mini Project
// FLAPPY BIRD (Starter Scaffold)
//
// Complete this scaffold into a playable game.
// Your game should have player control, collision detection,
// score tracking, and at least two game states.
//
// Not sure where to start? Try this order:
// 1. Get the bird flapping — add control in keyPressed()
// 2. Get pipes spawning — uncomment the spawn logic in draw()
// 3. Add collision detection between the bird and pipes
// 4. Add scoring when the bird passes a pipe
// 5. Add game states — at minimum a playing state and a game over state
//
// Stretch: add a start screen, a high score, or a difficulty curve.

/* ----------------- Globals ----------------- */
let bird;
let pipes = [];
let score = 0;
let spawnCounter = 0;

const SPAWN_RATE = 90;
const PIPE_SPEED = 2.5;
const PIPE_GAP = 160;
const PIPE_W = 60;
const GROUND_HEIGHT = 40;

// Game states: "playing" or "gameover" — add more if you need them
let gameState = "ready";

/* ----------------- Setup & Draw ----------------- */
async function setup() {
  createCanvas(480, 640);
  noStroke();
  bird = new Bird(120, height / 2);
  birdImage = await loadImage("bird.png");
  pipes.push(new Pipe(width + 40));
  pipeImage = await loadImage("pipe.png");
  bgImage = await loadImage("background2.png");
  groundImage = await loadImage("ground.png");
  score = 0;
  gameFont = await loadFont("pixelfont.ttf");
  flapSound = await loadSound("flap.wav");
  scoreSound = await loadSound("score.mp3");
  dieSound = await loadSound("die.wav");
}

function draw() {
  image(bgImage, 0, 0, width, height);
  textFont(gameFont);

  if (gameState === "ready") {
    bird.show();

    textAlign(CENTER);
    textStyle(BOLD);
    fill("#aaff99");
    textSize(70);
    stroke(0);
    strokeWeight(7);
    text("FlappyBird", width / 2, height / 2 - 130);

    strokeWeight(5);
    fill("#ffda24");
    textSize(50);
    text("READY?", width / 2, height / 2 - 60);

    strokeWeight(5);
    textSize(18);
    fill(255);
    text("Press space to start", width / 2, height / 2);
    noStroke();
  }

  if (gameState === "playing") {
    bird.update();

    //setting up a "winning" condition

    // Spawn a new pipe every SPAWN_RATE frames, then reset the counter
    spawnCounter++;
    if (spawnCounter >= SPAWN_RATE) {
      pipes.push(new Pipe(width + 40));
      spawnCounter = 0;
    }

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();
      pipes[i].show();

      // When the bird hits a pipe, trigger game over
      if (pipes[i].hits(bird)) {
        gameState = "gameover";
        dieSound.play();
      }

      // When the bird passes a pipe, increment the score
      // Hint: use pipes[i].passed to make sure you only score once per pipe
      if (!pipes[i].passed && pipes[i].x + pipes[i].w < bird.pos.x) {
        score++;
        pipes[i].passed = true;
        scoreSound.play();
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    image(groundImage, 0, height - GROUND_HEIGHT, width, GROUND_HEIGHT);

    bird.show();

    // Display the score — look up textAlign() and textSize() in the p5.js reference
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(40);
    fill("#ffc933");
    text(score, width / 2, 60);
  }

  if (gameState === "gameover") {
    push();
    textAlign(CENTER);
    textSize(70);
    fill("#18284e");
    text("GAME OVER", width / 2, height / 2);

    stroke(0);
    strokeWeight(5);
    textSize(50);
    fill("#ffd747");
    text("Your score: " + score, width / 2, height / 2 + 50);

    textSize(20);
    fill("#ffffff");
    text("Click to restart", width / 2, height / 2 + 90);
    pop();
    noStroke();
  }
}
function resetGame() {
  bird = new Bird(120, height / 2);
  pipes = [];
  pipes.push(new Pipe(width + 40));
  score = 0;
  spawnCounter = 0;
  gameState = "ready";
}

/* ----------------- Input ----------------- */
function keyPressed() {
  // Make the bird flap on space or UP_ARROW — call bird.flap()
  if (key === " ") {
    if (gameState === "ready") {
      gameState = "playing";
      bird.flap();
    } else if (gameState === "playing") {
      bird.flap();
    }
  }
}
function mousePressed() {
  if (gameState === "gameover") {
    resetGame();
  }
}
/* ----------------- Classes ----------------- */
class Bird {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 16;
    this.gravity = 0.45;
    this.flapStrength = -7.0;
  }

  applyForce(fy) {
    this.acc.y += fy;
  }

  flap() {
    // A negative y velocity moves the bird upward
    this.vel.y = this.flapStrength;
    flapSound.play();
  }

  update() {
    this.applyForce(this.gravity);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // Keep the bird within the canvas vertically
    if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y = 0;
    }

    // Touching the ground is game over — same as hitting a pipe
    if (this.pos.y > height - GROUND_HEIGHT - this.r) {
      this.pos.y = height - GROUND_HEIGHT - this.r;
      this.vel.y = 0;
      gameState = "gameover";
      dieSound.play();
    }
  }

  show() {
    image(
      birdImage,
      this.pos.x - this.r,
      this.pos.y - this.r,
      this.r * 2,
      this.r * 2
    );
  }
}

class Pipe {
  constructor(x) {
    this.x = x;
    this.w = PIPE_W;
    this.speed = PIPE_SPEED;

    const margin = 40;
    const gapY = random(margin, height - margin - PIPE_GAP);
    this.top = gapY;
    this.bottom = gapY + PIPE_GAP;

    this.passed = false;
  }

  update() {
    this.x -= this.speed;
  }

  show() {
    image(pipeImage, this.x, this.bottom, this.w, height - this.bottom);
    push();
    translate(this.x, this.top);
    scale(1, -1);
    image(pipeImage, 0, 0, this.w, this.top);
    pop();
  }

  offscreen() {
    // 'return' sends a value back to wherever this method was called
    // We'll cover this properly next week, for now just know it gives back true or false
    return this.x + this.w < 0;
  }

  // Checks if the bird overlaps with either pipe rectangle
  // 1) Is the bird within the pipe's x range?
  // 2) If yes, is it outside the gap — above the top or below the bottom?

  hits(bird) {
    // This method also uses 'return' — coming up next week!
    const withinX =
      bird.pos.x + bird.r > this.x && bird.pos.x - bird.r < this.x + this.w;
    const aboveGap = bird.pos.y - bird.r < this.top;
    const belowGap = bird.pos.y + bird.r > this.bottom;
    return withinX && (aboveGap || belowGap);
  }
}
