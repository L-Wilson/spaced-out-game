class Game {
  constructor(ctx, grid) {
    this.BUBBLE_WIDTH = ctx.canvas.width / grid[0].length
    this.BUBBLE_HEIGHT = 50
    this.PLAYER_RADIUS = this.BUBBLE_HEIGHT / 2

    this.ctx = ctx
    this.bubbles = []
    // Creation of bubbles based on the grid
    for (var row = 0; row < grid.length; row++) {
      for (var col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === 'X') {
          this.bubbles.push(new Bubble(
            this.ctx,
            col * this.BUBBLE_WIDTH,
            row * this.BUBBLE_HEIGHT,
            this.BUBBLE_WIDTH,
            this.BUBBLE_HEIGHT
          ))
        }
      }
    }
    // width, height, color, x, y, type
    this.player = new Player(this.ctx, 50, 50, "red", 900, 700)

    this.lives = 3
  }

  start() {
    var that = this

    this.intervalId = setInterval(function () {
      that.update()
      that.draw()
    }, 1000 / 60)

    // this.update()
    // this.draw()
    // window.requestAnimationFrame(function(){
    //   that.start()
    // })
  }
  stop() {
    clearInterval(this.intervalId)
  }
  launchBalls() {
    for (var i = 0; i < this.balls.length; i++) {
      this.balls[i].launch()
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    for (var i = 0; i < this.bubbles.length; i++) {
      this.bubbles[i].draw()
    }

    this.player.draw()

    // Draw of lives
    this.ctx.save()
    this.ctx.font = "30px sans-serif"
    this.ctx.textAlign = "right"
    this.ctx.fillText("Lives: " + this.lives, this.ctx.canvas.width - 5, 30)
    this.ctx.restore()
  }

  update() {
    //this.player.update()
    for (var iplayer = 0; iplayer < this.player.length; iplayer++) {
      this.player[iplayer].update()
      this.checkBallPaddleCollisionAndUpdate(this.player[iplayer], this.paddle)
      for (var iBUBBLE = this.bubbles.length - 1; iBUBBLE >= 0; iBUBBLE--) {
        if (this.checkBallBUBBLECollisionAndUpdate(this.player[iplayer], this.bubbles[iBUBBLE])) {
          console.log("DELETE", iBUBBLE)
          this.bubbles.splice(iBUBBLE, 1)
        }
      }
    }
  }

  checkBallPaddleCollisionAndUpdate(ball, paddle) {
    if (paddle.left() < ball.x && ball.x < paddle.right() && paddle.top() < ball.bottom() && ball.y < paddle.top()) {
      var factor = 2 * (ball.x - paddle.center().x) / paddle.width // Number between -1 and 1
      var maxAngle = 0.9 * Math.PI / 2
      var paddleAngle = -Math.PI / 2 + factor * maxAngle
      ball.angle = (-ball.angle + paddleAngle) / 2
      ball.y = paddle.top() - ball.radius
    }
  }

  // Return true if there is a collision
  checkBallBUBBLECollisionAndUpdate(ball, BUBBLE) {
    // Check with the bottom and top part of the  BUBBLE
    if ((Math.abs(BUBBLE.bottom() - ball.y) < ball.radius || Math.abs(BUBBLE.top() - ball.y) < ball.radius) && BUBBLE.left() < ball.x && ball.x < BUBBLE.right()) {
      ball.bounceHorizontally()
      return true
    }
    if ((Math.abs(BUBBLE.left() - ball.x) < ball.radius || Math.abs(BUBBLE.right() - ball.x) < ball.radius) && BUBBLE.top() < ball.y && ball.y < BUBBLE.bottom()) {
      ball.bounceVertically()
      return true
    }
    return false
  }

}

// window.addEventListener('keydown', function(e) {
//   e.preventDefault();
//   game.keys = (game.keys || []);
//   game.keys[e.keyCode] = (e.type == "keydown");
// })
// window.addEventListener('keyup', function(e) {
//   game.keys[e.keyCode] = (e.type == "keydown");
// })
// }
