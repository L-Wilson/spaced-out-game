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

  // bounceHorizontally() {
  //     this.angle = -1*this.angle
  //   }
  //   bounceVertically() {
  //     this.angle = -1*(this.angle-Math.PI/2) + Math.PI/2
  //   }

  update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    enemy.draw();
    enemy.x += enemy.vx;
    enemy.y += enemy.vy;
    if (enemy.y + enemy.vy > canvas.height || enemy.y + enemy.vy < 0) {
      enemy.vy *= -1;
    }
    if (enemy.x + enemy.vx > canvas.width || enemy.x + enemy.vx < 0) {
      enemy.vx *= -1;
    }
  }
}