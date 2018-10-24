// from codepen
class Enemy {
  constructor(ctx, x, y, radius, vx, vy, color) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.vx = vx
    this.vy = vy
    this.color = color
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  top() { return this.y - this.radius }
  bottom() { return this.y + this.radius }
  left() { return this.x - this.radius }
  right() { return this.x + this.radius }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
      this.vy *= -1;
    }
    if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
      this.vx *= -1;
    }
  }
}
