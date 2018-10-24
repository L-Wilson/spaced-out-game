class Game {
  constructor(ctx, grid) {
    this.BUBBLE_WIDTH = ctx.canvas.width / grid[0].length
    this.BUBBLE_HEIGHT = 50
    this.PLAYER_RADIUS = this.BUBBLE_HEIGHT / 2

    this.ctx = ctx
    this.bubbles = []
    // Creation of bubbles based on the grid
    // for (var row = 0; row < grid.length; row++) {
    //   for (var col = 0; col < grid[row].length; col++) {
    //     if (grid[row][col] === 'X') {
    //       this.bubbles.push(new Bubble(
    //         this.ctx,
    //         col * this.BUBBLE_WIDTH,
    //         row * this.BUBBLE_HEIGHT,
    //         this.BUBBLE_WIDTH,
    //         this.BUBBLE_HEIGHT
    //       ))
    //     }
    //   }
    // }

    //create a function that returns a random number between 0 and canvas.width
    // for loop to add x new Bubbles to this.bubbles array. new Bubble( randomX, randomY, width, heigh,radius)

    function getRandomNumber(maxSize) {
      var randomNumber = Math.floor(Math.random() * maxSize)
      return randomNumber;
    }

    var level1Bubbles = 10
    var level2Bubbles = 15

    for (var i = 0; i <= 10; i++) {
      this.bubbles.push(new Bubble(this.ctx, getRandomNumber(canvas.width), getRandomNumber(canvas.width), 60, 60, 50))
    }



    // Player:                   ctx, width, height, color, x, y
    this.player = new Player(this.ctx, 80, 80, "red", 900, 700)
    // Enemy:                       ctx, x, y, radius, vx, vy, color
    this.enemy = new Enemy(this.ctx, 600, 700, 90, 5, 5, "chartreuse")
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
  // launchBalls() {
  //   for (var i = 0; i < this.balls.length; i++) {
  //     this.balls[i].launch()
  //   }
  // }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    for (var i = 0; i < this.bubbles.length; i++) {
      // console.log("drawing bublles",
      //   this.bubbles[i].x,
      //   this.bubbles[i].y
      // )
      this.bubbles[i].draw()
    }

    this.player.draw()
    this.enemy.draw()

    // Draw of lives
    this.ctx.save()
    this.ctx.font = "30px sans-serif"
    this.ctx.textAlign = "right"
    this.ctx.fillText("Lives: " + this.lives, this.ctx.canvas.width - 5, 30)
    this.ctx.restore()
  }

  update() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.enemy.update()
    this.player.moveAngle = 0;
    this.player.speed = 0;
    if (this.keys && this.keys[37]) { this.player.moveAngle = -5; }
    if (this.keys && this.keys[39]) { this.player.moveAngle = 5; }
    if (this.keys && this.keys[38]) { this.player.speed = 10; }
    if (this.keys && this.keys[40]) { this.player.speed = -10; }
    this.player.update();
    // for (var iplayer = 0; iplayer < this.player.length; iplayer++) {
    //   this.player[iplayer].update()
    // this.checkPlayerEnemyCollisionAndUpdate(this.player, this.enemy)
    for (var iBUBBLE = this.bubbles.length - 1; iBUBBLE >= 0; iBUBBLE--) {
      // if (this.checkPlayerBubbleCollisionAndUpdate(this.player, this.bubbles[iBUBBLE])) {
      //   console.log("DELETE", iBUBBLE)
      //   this.bubbles.splice(iBUBBLE, 1)
      //   // }
      // }
    }

  }

  // checkPlayerEnemyCollisionAndUpdate(player, enemy) {
  //   if (enemy.left() < player.x && player.x < enemy.right() && enemy.top() < player.bottom() && player.y < enemy.top()) {
  //     var factor = 2 * (player.x - enemy.center().x) / enemy.width // Number between -1 and 1
  //     var maxAngle = 0.9 * Math.PI / 2
  //     var enemyAngle = -Math.PI / 2 + factor * maxAngle
  //     player.angle = (-player.angle + enemyAngle) / 2
  //     player.y = enemy.top() - player.radius
  //   }
  // }

  // // Return true if there is a collision
  // checkPlayerBubbleCollisionAndUpdate(player, bubble) {
  //   // Check with the bottom and top part of the  bubble
  //   if ((Math.abs(bubble.bottom() - player.y) < player.radius || Math.abs(bubble.top() - player.y) < player.radius) && bubble.left() < player.x && player.x < bubble.right()) {
  //     player.bounceHorizontally()
  //     return true
  //   }
  //   if ((Math.abs(BUBBLE.left() - ball.x) < ball.radius || Math.abs(BUBBLE.right() - ball.x) < ball.radius) && BUBBLE.top() < ball.y && ball.y < BUBBLE.bottom()) {
  //     ball.bounceVertically()
  //     return true
  //   }
  //   return false
  // }

}

