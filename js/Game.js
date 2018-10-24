
var score = 0;


class Game {
  constructor(ctx) {

    this.PLAYER_RADIUS = this.BUBBLE_HEIGHT / 2

    this.ctx = ctx
    this.bubbles = []

    function getRandomNumber(maxSize) {
      var randomNumber = Math.floor(Math.random() * maxSize)
      return randomNumber;
    }


    // if score less than 100 ...
    for (var i = 0; i <= 10; i++) {
      this.bubbles.push(new Bubble(this.ctx, getRandomNumber(canvas.width), getRandomNumber(canvas.height), 60, 60, 50))
    }
    // else if score less than 300 ...
    for (var i = 0; i <= 10; i++) {
      this.bubbles.push(new Bubble(this.ctx, getRandomNumber(canvas.width), getRandomNumber(canvas.height), 60, 60, 50))
    }

    // Player:                   ctx, width, height, color, x, y
    this.player = new Player(this.ctx, 80, 80, "red", 900, 700)
    // Enemy:                       ctx, x, y, radius, vx, vy, color
    this.enemy = new Enemy(this.ctx, 100, 600, 90, 4, 4, "chartreuse")
    this.score = 0
  }


  start() {
    var that = this
    this.intervalId = setInterval(function () {
      that.update()
      that.draw()
    }, 1000 / 60)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    for (var i = 0; i < this.bubbles.length; i++) {

      this.bubbles[i].draw()
    }

    this.player.draw()
    this.enemy.draw()

    this.ctx.save()
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "#FFF";
    this.ctx.textAlign = "right"
    this.ctx.fillText("Score: " + score, canvas.width - 120, 30);
    this.ctx.fillText("Level 1", 30, 30);
    this.ctx.restore()

    // Draw of lives
    // this.ctx.save()
    // this.ctx.font = "30px sans-serif"
    // this.ctx.textAlign = "right"
    // this.ctx.fillText("Lives: " + this.lives, this.ctx.canvas.width - 5, 30)
    // this.ctx.restore()
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

    // ===================== Enemy collision / Game Over ============== //
    if (this.player.crashWith(this.enemy)) {
      // console.log("crashed with enemy")
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    // ===================== Bubble collision / Game Over ============== //
    for (var i = 0; i < this.bubbles.length; i++) {
      if (this.player.crashWith(this.bubbles[i])) {
        // console.log("crashed with bubble index", i)
        this.bubbles.splice(i, 1)
        score += 10;
      } else {
        //console.log("not crashing")
      }
    }

    // ===================== Level up ============== //
    if (this.bubbles === []) {
      // next level!
      this.update()

    }
  }
}