// from codepen
class Enemy {
  constructor(ctx, x, y, width, height, vx, vy, color, img) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.vx = vx
    this.vy = vy
    this.img = new Image()
    this.img.src = img
    this.color = color
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    // ctx.closePath();
    // ctx.fillStyle = this.color;
    // ctx.fill();
  }

  top() { return this.y }
  bottom() { return this.y + this.height }
  left() { return this.x }
  right() { return this.x + this.width }

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
