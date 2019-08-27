class UpArrow {
  constructor(ctx) {
    this.pos = [726, 10];
    this.ctx = ctx;

    this.coloredUpArrow = new Image();
    this.coloredUpArrow.src = "src/assets/colored_up_arrow.png";

    this.pressedUpArrow = new Image();
    this.pressedUpArrow.src = "src/assets/pressed_up_arrow.png";

    this.incorrectUpArrow = new Image();
    this.incorrectUpArrow.src = "src/assets/incorrect_up_arrow.png"

    this.upArrow = new Image();
    this.upArrow.src = "src/assets/up_arrow.png";
  }

  drawColored() {
    this.ctx.drawImage(this.coloredUpArrow, this.pos[0], this.pos[1]);
  }

  drawNormal() {
    this.ctx.drawImage(this.upArrow, this.pos[0], this.pos[1]);
  }

  drawPressed() {
    this.ctx.drawImage(this.pressedUpArrow, this.pos[0], this.pos[1]);
  }

  drawIncorrect() {
    this.ctx.drawImage(this.incorrectUpArrow, this.pos[0], this.pos[1]);
  }
}

export default UpArrow;