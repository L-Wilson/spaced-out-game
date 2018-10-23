
class Player {
  constructor(ctx, width, height, color, x, y) {
    this.ctx = ctx
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.angle);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.width / 2, this.height / 2, this.width, this.height);
    this.ctx.restore();
  }
  update() {
    this.angle += this.moveAngle * Math.PI / 180;
    this.x += this.speed * Math.sin(this.angle);
    this.y -= this.speed * Math.cos(this.angle);
  }
}

// function updateGameArea() {
//   game.clear();
//   player.moveAngle = 0;
//   player.speed = 0;
//   if (game.keys && game.keys[37]) { player.moveAngle = -1; }
//   if (game.keys && game.keys[39]) { player.moveAngle = 1; }
//   if (game.keys && game.keys[38]) { player.speed = 1; }
//   if (game.keys && game.keys[40]) { player.speed = -1; }
//   player.newPos();
//   player.update();
// }
