
class Player {
  constructor(ctx, width, height, color, x, y) {
    this.ctx = ctx
    this.img = new Image()
    this.img.src = "./imgs/player.png"
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
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  update() {
    if (this.y > canvas.height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = canvas.height;
    }

    if (this.x > canvas.width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = canvas.width;
    }

    this.ctx = ctx
  }

  crashWithBall(ball) {
    var crash = false;
    if (this.x + this.width + ball.radius > ball.x
      && this.x < ball.x + ball.radius
      && this.y + this.height + ball.radius > ball.y
      && this.y < ball.y + ball.radius) {
      crash = true;
    }
    return crash;

  }
  crashWith(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((mybottom < othertop) ||
      (mytop > otherbottom) ||
      (myright < otherleft) ||
      (myleft > otherright)) {
      crash = false;
    }
    return crash;
  }
}
