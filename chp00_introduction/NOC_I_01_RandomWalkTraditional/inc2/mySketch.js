let aRandomWalker;

function setup() {
  createCanvas(400, 300);
  aRandomWalker = new RandomWalker();
}

function draw() {
  aRandomWalker.step();
  aRandomWalker.render();
  print("x:" + aRandomWalker.x);
  print("y:" + aRandomWalker.y);
}

class RandomWalker {
  constructor() {
    this.x = width * 0.5;
    this.y = height * 0.5;
  }

  render() {
    circle(this.x, this.y, 1);
  }

  step() {
    // let randomFloat = random(4);
    // let randomInt = floor(randomFloat);
    let randomInt = floor(random(4));
    if (randomInt == 0) {
      this.y--;
    } else if (randomInt == 1) {
      this.y++;
    } else if (randomInt == 2) {
      this.x--;
    } else if (randomInt == 3) {
      this.x++;
    }
  }
}
