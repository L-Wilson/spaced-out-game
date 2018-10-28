var score = 0;
var gameOver = false;

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.bubbles = [];
    this.enemyBall = [];

    // Player:                   ctx, width, height, color, x, y
    this.player = new Player(this.ctx, 150, 150, "red", 900, 600);
    // Enemy:                       ctx, x, y, radius, vx, vy, color
    this.enemy = new Enemy(this.ctx, 100, 600, 200, 200, 4, 4, "chartreuse", "imgs/green-planet.png");
    this.enemy2 = new Enemy(this.ctx, 10, 200, 90, 90, 5, 6, "pink", "imgs/pink-planet.png");
    this.enemy3 = new Enemy(this.ctx, 500, 300, 120, 120, 5, 3, "blue", "imgs/blue-planet.png");
    this.enemy4 = new Enemy(this.ctx, 250, 0, 140, 140, 2, 5, "red", "imgs/red-planet.png");
    this.enemy5 = new Enemy(this.ctx, 0, 60, 110, 110, 3, 3, "violet", "imgs/violet-planet.png");
    this.enemy6 = new Enemy(this.ctx, 300, 130, 95, 95, 5, 5, "orange", "imgs/orange-planet.png");
  }

  start() {
    var that = this;
    this.intervalId = setInterval(function () {
      that.update();
      that.draw();
    }, 1000 / 60);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    for (var i = 0; i < this.bubbles.length; i++) {
      this.bubbles[i].draw();
    }
    this.player.draw();
    this.enemy.draw();
    // Draw score
    this.ctx.save();

    this.ctx.font = "bold 80px Comfortaa";
    this.ctx.fillStyle = "#FFF";
    this.ctx.textAlign = "right";
    this.ctx.fillText(score, canvas.width - 50, canvas.height - 700);
    this.ctx.restore();

    // ======================= LEVEL 0 ======================== //

    if (score < 100 && this.bubbles.length === 0) {
      for (var i = 0; i < 10; i++) {
        this.bubbles.push(
          new Bubble(
            this.ctx,
            this.getRandomNumber(canvas.width),
            this.getRandomNumber(canvas.height),
            60,
            "skyblue"
          )
        );
        console.log(this.bubbles);
      }

      // ====================== LEVEL 1 ====================== //
    } else if (score >= 100 && score < 200 && this.bubbles.length === 0) {
      for (var i = 0; i < 10; i++) {
        console.log("level 2")
        this.bubbles.push(
          new Bubble(
            this.ctx,
            this.getRandomNumber(canvas.width),
            this.getRandomNumber(canvas.height),
            60,
            "blue"
          )
        );
        console.log(this.bubbles);
      }

    } else if (score >= 100 && score < 200) {
      this.enemy2.draw()
    }
    // ===================== LEVEL 2 ====================== //
    else if (score >= 200 && score < 300 && this.bubbles.length === 0) {
      for (var i = 0; i < 10; i++) {
        this.bubbles.push(
          new Bubble(
            this.ctx,
            this.getRandomNumber(canvas.width),
            this.getRandomNumber(canvas.height),
            60,
            "orange"
          )
        );
        console.log(this.bubbles);
      }
    }
    if (score >= 200 && score < 300) {
      this.enemy2.draw()
      this.enemy3.draw()
    }

    // ===================== LEVEL 3 ====================== //
    else if (score >= 300 && score < 400 && this.bubbles.length === 0) {
      for (var i = 0; i < 10; i++) {
        this.bubbles.push(
          new Bubble(
            this.ctx,
            this.getRandomNumber(canvas.width),
            this.getRandomNumber(canvas.height),
            60,
            "chartreuse"
          )
        );
        console.log(this.bubbles);
      }
    }

    if (score >= 300 && score < 400) {
      this.enemy2.draw()
      this.enemy3.draw()
      this.enemy4.draw()
    }

    // =================== LEVEL 4 ==================== //
    else if (score >= 400 && score < 500 && this.bubbles.length === 0) {
      for (var i = 0; i < 10; i++) {
        this.bubbles.push(
          new Bubble(
            this.ctx,
            this.getRandomNumber(canvas.width),
            this.getRandomNumber(canvas.height),
            60,
            "#F9EE54"
          )
        );
        console.log(this.bubbles);
      }
    }
    if (score >= 400 && score < 500) {
      this.enemy2.draw()
      this.enemy3.draw()
      this.enemy4.draw()
      this.enemy5.draw()
    }

    // =================== LEVEL 5 ==================== //
    else if (score >= 500 && score < 600 && this.bubbles.length === 0) {
      for (var i = 0; i < 10; i++) {
        this.bubbles.push(
          new Bubble(
            this.ctx,
            this.getRandomNumber(canvas.width),
            this.getRandomNumber(canvas.height),
            60,
            "pink"
          )
        );
        console.log(this.bubbles);
      }
    }
    if (score >= 500 && score < 600) {
      this.enemy2.draw()
      this.enemy3.draw()
      this.enemy4.draw()
      this.enemy5.draw()
      this.enemy6.draw()
    }


    // ====================== if GAME OVER ====================== //
    if (gameOver) {
      this.stop();
      this.ctx.font = "700 120px Comfortaa";
      this.ctx.fillStyle = "#FFF";
      this.ctx.textAlign = "right";
      this.ctx.fillText("GAME OVER", canvas.width - 200, canvas.height - 350);
    }
  }

  getRandomNumber(maxSize) {
    var randomNumber = Math.floor(Math.random() * maxSize);
    return randomNumber;
  }

  update() {

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.enemy.update();
    this.enemy2.update();
    this.enemy3.update();
    this.enemy4.update();
    this.enemy5.update();
    this.enemy6.update();

    if (this.keys && this.keys[37]) {
      this.player.x -= 15;
    }
    if (this.keys && this.keys[39]) {
      this.player.x += 15;
    }
    if (this.keys && this.keys[38]) {
      this.player.y -= 15;
    }
    if (this.keys && this.keys[40]) {
      this.player.y += 15;
    }

    this.player.update();

    // ===================== Enemy collision / Game Over ============== //
    if (this.player.crashWithEnemy(this.enemy)) {
      console.log("crashed with enemy !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(this.player);
      gameOver = true;
    }
    if (this.player.crashWithEnemy(this.enemy2) && score >= 100 && score < 200) {
      gameOver = true;
    }
    if (this.player.crashWithEnemy(this.enemy3) && score >= 200 && score < 300) {
      gameOver = true;
    }
    if (this.player.crashWithEnemy(this.enemy4) && score >= 300 && score < 400) {
      gameOver = true;
    }
    if (this.player.crashWithEnemy(this.enemy5) && score >= 400 && score < 500) {
      gameOver = true;
    }
    if (this.player.crashWithEnemy(this.enemy6) && score >= 500 && score < 600) {
      gameOver = true;
    }
    // ===================== Bubble collision ======================== //
    var indexArray = []
    for (var i = this.bubbles.length - 1; i >= 0; --i) {
      if (this.player.crashWithBall(this.bubbles[i]) && !this.bubbles[i].crashed) {
        for (var a = 0; a < this.bubbles[i].lines.length; a++) {
          popDistance = this.bubbles[i].radius * 0.4;
          this.bubbles[i].lines[a].popping = true;
          this.bubbles[i].popping = true;
        }
        this.bubbles[i].crashed = true;
        score += 10;
        this.removeBubble()
      }
    }
  }

  removeBubble() {
    setTimeout(() => {
      console.log(this.bubbles)
      this.bubbles = this.bubbles.filter((el) => { return el.crashed ? false : true })
    }, 100)

  }

}


