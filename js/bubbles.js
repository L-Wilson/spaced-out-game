

var bubbleCount = 20;
var bubbleSpeed = 1;
var popLines = 6;
var popDistance = 40;

class Bubble {
  constructor(ctx, x, y, radius, color) {
    this.ctx = ctx
    this.radius = radius;
    this.x = x;
    this.y = y
    this.distanceBetweenWaves = 50 + Math.random() * this.radius;
    this.count = canvas.height + this.y;
    this.color = color;
    this.lines = [];
    this.popping = false;
    this.maxRotation = 85;
    this.rotation = Math.floor(Math.random() * (this.maxRotation - (this.maxRotation * -1))) + (this.maxRotation * -1);
    this.rotationDirection = 'forward';
    this.crashed = false

    // Populate Lines
    for (var i = 0; i < popLines; i++) {
      var tempLine = new CreateLine(this.color);
      tempLine.bubble = this;
      tempLine.index = i;

      this.lines.push(tempLine);
    }
  }
  top() { return this.y }
  bottom() { return this.y + this.height }
  left() { return this.x }
  right() { return this.x + this.width }


  // draw the circles
  draw() {
    if (this.rotationDirection === 'forward') {
      if (this.rotation < this.maxRotation) {
        this.rotation++;
      } else {
        this.rotationDirection = 'backward';
      }
    } else {
      if (this.rotation > this.maxRotation * -1) {
        this.rotation--;
      } else {
        this.rotationDirection = 'forward';
      }
    }

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation * Math.PI / 180);

    if (!this.popping) {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 4;
      ctx.arc(0, 0, this.radius * 0.70, 0, Math.PI * 1.5, true);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
      ctx.stroke();
    }

    ctx.restore();

    // Draw the lines
    for (var a = 0; a < this.lines.length; a++) {
      if (this.lines[a].popping) {
        if (this.lines[a].lineLength < popDistance && !this.lines[a].inversePop) {
          this.lines[a].popDistance += 0.06;
        } else {
          if (this.lines[a].popDistance >= 0) {
            this.lines[a].inversePop = true;
            this.lines[a].popDistanceReturn += 1;
            this.lines[a].popDistance -= 0.03;
          }
        }

        this.lines[a].updateValues();
        this.lines[a].draw();
      }
    }
  }
}


// ----------------
// Line Constructor
// ----------------

class CreateLine {
  constructor(color) {
    this.lineLength = 0;
    this.popDistance = 0;
    this.popDistanceReturn = 0;
    this.inversePop = false; // When the lines reach full length they need to shrink into the end position
    this.popping = false;
    this.color = color;
  }

  resetValues() {
    this.lineLength = 0;
    this.popDistance = 0;
    this.popDistanceReturn = 0;
    this.inversePop = false;
    this.popping = false;

    this.updateValues();
  }

  updateValues() {
    this.x = this.bubble.x + (this.bubble.radius + this.popDistanceReturn) * Math.cos(2 * Math.PI * this.index / this.bubble.lines.length);
    this.y = this.bubble.y + (this.bubble.radius + this.popDistanceReturn) * Math.sin(2 * Math.PI * this.index / this.bubble.lines.length);
    this.lineLength = this.bubble.radius * this.popDistance;
    this.endX = this.lineLength;
    this.endY = this.lineLength;
  }

  draw() {
    this.updateValues();

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 4;
    ctx.moveTo(this.x, this.y);
    if (this.x < this.bubble.x) {
      this.endX = this.lineLength * -1;
    }
    if (this.y < this.bubble.y) {
      this.endY = this.lineLength * -1;
    }
    if (this.y === this.bubble.y) {
      this.endY = 0;
    }
    if (this.x === this.bubble.x) {
      this.endX = 0;
    }
    ctx.lineTo(this.x + this.endX, this.y + this.endY);
    ctx.stroke();
  };
}
