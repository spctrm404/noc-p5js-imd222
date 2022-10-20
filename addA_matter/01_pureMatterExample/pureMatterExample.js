// 물리 시뮬레이션 및 렌더링을 위한 모듈들.
// 당연하지만 좌변 이름은 마음대로, 우변은 그대로.
let Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// 물리 엔진 생성.
let engine = Engine.create();

// 렌더러 생성.
// P5를 이용해 렌더링할거라면 필요없.
let dom = document.querySelector(".matterDiv");
let render = Render.create({
  element: dom,
  engine: engine,
});

// 두개의 박스를 생성.
let boxA = Bodies.rectangle(400, 200, 80, 80);
let boxB = Bodies.rectangle(450, 50, 80, 80);
// 바닥 역할을 할 박스를 생성.
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// 생성한 박스를 물리 엔진 속 세계에 추가.
Composite.add(engine.world, [boxA, boxB, ground]);

// 렌더링.
Render.run(render);

// 무한 반복 실행하게 할 러너 생성.
let runner = Runner.create();

// 무한 반복.
Runner.run(runner, engine);
