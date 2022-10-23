let Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

let engine;

let boxes = [];
let ground;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  ground = new Rect(400, 610, 810, 60, "#C0AAA9", { isStatic: true });
  Composite.add(engine.world, ground.bodies);
}

function mousePressed() {
  let size = random(10, 40);
  let randColor = color(random(256), random(256), random(256));
  let newRect;
  if (mouseButton === LEFT) {
    newRect = new Rect(mouseX, mouseY, size, size, randColor);
  } else if (mouseButton === CENTER) {
    newRect = new Circle(mouseX, mouseY, size, randColor);
  }
  // let newRect = new Rect(mouseX, mouseY, random(10, 40), random(10, 40));
  Composite.add(engine.world, newRect.bodies);
  boxes.push(newRect);
}

function draw() {
  background("#F8F3FD");
  Engine.update(engine);

  noStroke();
  fill("#FF8C58");
  // boxes.forEach((e) => e.render());
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].render();
  }

  ground.render();
}
