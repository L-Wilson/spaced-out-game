class Bubble {
  constructor(ctx, x, y, width, height, radius) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
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
  }

  //update()

}

this.ctx.save()
this.ctx.fillStyle = "skyblue"
this.ctx.strokeRect(this.x, this.y, this.width, this.height)
this.ctx.fillRect(this.x, this.y, this.width, this.height)
ctx.restore()