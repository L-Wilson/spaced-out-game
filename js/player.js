
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
    // this.ctx.save();
    // this.ctx.translate(this.x, this.y);
    // this.ctx.rotate(this.angle);
    this.ctx.fillStyle = this.color;
    // this.ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    // this.ctx.restore();
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

    // if (this.x > canvas.width || this.x < 0) {
    //   this.x = 0;
    // } else if (this.x < 0) {
    //   this.x = canvas.width;
    // }
    this.ctx = ctx
    // this.angle += this.moveAngle * Math.PI / 180;
    // this.x += this.speed * Math.sin(this.angle);
    // this.y -= this.speed * Math.cos(this.angle);
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


// if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
//   this.vy *= -1;
// }
// if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
//   this.vx *= -1;
// }