// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-3: Vector subtraction

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);

  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);
  // strokeWeight(2);
  // stroke(255, 0, 0);
  // line(0, 0, mouse.x, mouse.y);
  // stroke(0, 0, 255);
  // line(0, 0, center.x, center.y);
  mouse.sub(center);
  // stroke(0, 255, 0);
  // line(0, 0, mouse.x, mouse.y);
  // stroke(0, 255, 255);
  // line(center.x, center.y,
  //   center.x + mouse.x, center.y + mouse.y);

  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  line(0, 0, mouse.x, mouse.y);
}
