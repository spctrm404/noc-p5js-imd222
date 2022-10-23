let Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

let engine;

let boxA;
let boxB;
let ground;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  boxA = new Rect(400, 200, 100, 20);
  boxB = new Rect(450, 50, 40, 150);
  ground = new Rect(400, 610, 810, 60, { isStatic: true });
  Composite.add(engine.world, [boxA.bodies, boxB.bodies, ground.bodies]);
}

function draw() {
  background("#F8F3FD");
  Engine.update(engine);
  noStroke();
  fill("#FF8C58");
  boxA.render();
  fill("#93CCB7");
  boxB.render();
  fill("#C0AAA9");
  ground.render();
}
