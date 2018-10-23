class Bubble {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  top() { return this.y }
  bottom() { return this.y + this.height }
  left() { return this.x }
  right() { return this.x + this.width }
  draw() {
    ctx.save()
    ctx.fillStyle = "skyblue"
    this.ctx.strokeRect(this.x, this.y, this.width, this.height)
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.restore()
  }
}