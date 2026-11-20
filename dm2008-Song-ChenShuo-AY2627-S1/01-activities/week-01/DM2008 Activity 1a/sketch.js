// DM2008 — Activity 1a
// Simple Creatures (20 min)

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature within the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  
  // YOUR CODE HERE
  fill("#3dc5ff");
  stroke("#3dc5ff");
  arc(120, 275, 60, 60, PI, 2);
  rect(125, 125, 155, 150, 90, 20, 90, 0);
  fill("#c4deeb");
  stroke("#c4deeb")
  rect(180, 170, 100, 105, 90, 0, 90, 0);
  stroke("#daeff8");
  line(195,275,195,184);
  line(210,275,210,174);
  line(225,275,225,170);
  line(240,275,240,170);
  line(255,275,255,170);
  line(270,275,270,170);
  stroke("#ffffff");
  fill("#ffffff");
  ellipse(165, 170, 30, 30);
  fill("#418ba9");
   ellipse(165, 170, 18, 18);
 stroke("#418ba9");
  stroke("#418ba9");
  fill("#418ba9");
  rect(105, 190, 20, 40, 120, 0, 0, 0);
  // YOUR CODE HERE
  
  helperGrid(); // do not edit or remove this line
}
