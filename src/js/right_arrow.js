class RightArrow {
  constructor(ctx) {
    // this.pos = [1100, 10];
    this.pos = [1100, 10];
    this.ctx = ctx;

    this.coloredRightArrow = new Image();
    this.coloredRightArrow.src = "src/assets/colored_right_arrow.png";

    this.pressedRightArrow = new Image();
    this.pressedRightArrow.src = "src/assets/pressed_right_arrow.png";

    this.incorrectRightArrow = new Image();
    this.incorrectRightArrow.src = "src/assets/incorrect_right_arrow.png"

    this.rightArrow = new Image();
    this.rightArrow.src = "src/assets/right_arrow.png";
  }

  drawColored() {
    this.ctx.drawImage(this.coloredRightArrow, this.pos[0], this.pos[1]);
  }

  drawNormal() {
    this.ctx.drawImage(this.rightArrow, this.pos[0], this.pos[1]);
  }

  drawPressed() {
    this.ctx.drawImage(this.pressedRightArrow, this.pos[0], this.pos[1]);
  }

  drawIncorrect() {
    this.ctx.drawImage(this.incorrectRightArrow, this.pos[0], this.pos[1]);
  }
}

export default RightArrow;