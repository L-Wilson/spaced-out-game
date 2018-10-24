class Bubble {
  constructor(ctx, x, y, radius) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.height = this.radius * 2
    this.width = this.radius * 2
  }
  top() { return this.y }
  bottom() { return this.y + this.height }
  left() { return this.x }
  right() { return this.x + this.width }
  draw() {
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.fillStyle = "skyblue"
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
    this.ctx.fill()
    this.ctx.restore()
    // this.ctx.save()
    // this.ctx.fillStyle = "red"
    // this.ctx.fillRect(this.x, this.y, this.width, this.height)
    // this.ctx.restore()
  }

  //update()

}