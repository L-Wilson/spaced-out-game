var score = 0;
var gameOver = false;

class Game {
  constructor(ctx) {
    this.PLAYER_RADIUS = this.BUBBLE_HEIGHT / 2;

    this.ctx = ctx;
    this.bubbles = [];
    this.enemyBall = [];

    // Player:                   ctx, width, height, color, x, y
    this.player = new Player(this.ctx, 80, 80, "red", 900, 700);
    // Enemy:                       ctx, x, y, radius, vx, vy, color
    this.enemy = new Enemy(this.ctx, 100, 600, 90, 4, 4, "chartreuse");
    this.enemy2 = new Enemy(this.ctx, 10, 200, 30, 5, 6, "pink");
    this.enemy3 = new Enemy(this.ctx, 500, 100, 50, 3, 3, "red");
    this.enemy4 = new Enemy(this.ctx, 0, 60, 70, 3, 3, "violet");
    this.enemy5 = new Enemy(this.ctx, 300, 10, 70, 3, 5, "maroon");

    //this.score = 0

    // this.enemy = new Player(this.ctx, 200, 200, "blue", 500, 200)
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
    // this.enemy2.draw();





    // Draw score
    this.ctx.save();
    this.ctx.font = "80px Arial black";
    this.ctx.fillStyle = "#FFF";
    this.ctx.textAlign = "right";
    this.ctx.fillText(score, canvas.width - 50, canvas.height - 700);
    this.ctx.restore();

    if (gameOver) {
      this.stop();
      this.ctx.font = "80px Arial black";
      this.ctx.fillStyle = "black";
      this.ctx.textAlign = "right";
      this.ctx.fillText("Game over", canvas.width / 2, canvas.height / 2);
    }

    function getRandomNumber(maxSize) {
      var randomNumber = Math.floor(Math.random() * maxSize);
      return randomNumber;
    }

    // ======================= LEVEL 0 ======================== //

    if (score < 100 && this.bubbles.length === 0) {
      for (var i = 0; i < 10; i++) {
        this.bubbles.push(
          new Bubble(
            this.ctx,
            getRandomNumber(canvas.width),
            getRandomNumber(canvas.height),
            60,
            "skyblue"
          )
        );

        console.log(this.bubbles);
      }

      // ====================== LEVEL 1 ====================== //
    } else if (score >= 100 && score < 200 && this.bubbles.length === 0) {
      for (var i = 0; i < 10; i++) {
        this.bubbles.push(
          new Bubble(
            this.ctx,
            getRandomNumber(canvas.width),
            getRandomNumber(canvas.height),
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
            getRandomNumber(canvas.width),
            getRandomNumber(canvas.height),
            60,
            "coral"
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
            getRandomNumber(canvas.width),
            getRandomNumber(canvas.height),
            60,
            "#38D9D4"
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
            getRandomNumber(canvas.width),
            getRandomNumber(canvas.height),
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
  }

  update() {

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.enemy.update();
    this.enemy2.update();
    this.enemy3.update();
    this.enemy4.update();
    this.enemy5.update();
    this.player.moveAngle = 0;
    this.player.speed = 0;
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
    // if (this.keys && this.keys[37]) { this.player.moveAngle = -5; }
    // if (this.keys && this.keys[39]) { this.player.moveAngle = 5; }
    // if (this.keys && this.keys[38]) { this.player.speed = 10; }
    // if (this.keys && this.keys[40]) { this.player.speed = -10; }
    this.player.update();

    // ===================== Enemy collision / Game Over ============== //
    if (this.player.crashWithBall(this.enemy)) {
      console.log("crashed with enemy");
      console.log(this.player);
      console.log("enemz 2", this.enemy2);
      // this.stop();
      // return;

      gameOver = true;

      // function gameOver() {
      // this.ctx.save()

      // this.ctx.restore()
      // }

      // this.ctx.save()

      // this.ctx.font = "80px Arial black";
      // this.ctx.fillStyle = "black";
      // this.ctx.textAlign = "right"
      // this.ctx.fillText("GAME OVER", canvas.height / 2, canvas.width / 2);
      // //this.ctx.fillText("OVER" canvas.width - 350, canvas.height - 350);
      // this.ctx.restore()
    }
    if (this.player.crashWithBall(this.enemy2) && score >= 100 && score < 200) {
      gameOver = true;
    }
    if (this.player.crashWithBall(this.enemy3) && score >= 200 && score < 300) {
      gameOver = true;
    }
    if (this.player.crashWithBall(this.enemy4) && score >= 300 && score < 400) {
      gameOver = true;
    }
    if (this.player.crashWithBall(this.enemy5) && score >= 400 && score < 500) {
      gameOver = true;
    }
    // ===================== Bubble collision ======================== //
    for (var i = 0; i < this.bubbles.length; i++) {
      if (this.player.crashWithBall(this.bubbles[i])) {
        // console.log("crashed with bubble index", i)
        this.bubbles.splice(i, 1);
        score += 10;
      } else {
        //console.log("not crashing")
      }
    }
  }
}