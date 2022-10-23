class Rect {
  constructor(x, y, w, h, opt) {
    this.w = w;
    this.h = h;
    this.bodies = Bodies.rectangle(x, y, this.w, this.h, opt);
  }

  render() {
    rectMode(CENTER);
    push();
    translate(this.bodies.position.x, this.bodies.position.y);
    rotate(this.bodies.angle);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
