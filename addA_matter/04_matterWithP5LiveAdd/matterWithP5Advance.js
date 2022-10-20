let Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

let engine;

let boxes = [];
let ground;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  ground = new Rect(400, 610, 810, 60, { isStatic: true });
  Composite.add(engine.world, ground.bodies);
}

function mousePressed() {
  let size = random(10, 40);
  let newRect = new Rect(mouseX, mouseY, size, size);
  Composite.add(engine.world, newRect.bodies);
  boxes.push(newRect);
}

function draw() {
  background("#F8F3FD");

  Engine.update(engine);
  noStroke();
  fill("#FF8C58");
  boxes.forEach((e) => e.render());
  fill("#C0AAA9");
  ground.render();
}
