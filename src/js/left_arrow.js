class LeftArrow {
  constructor(ctx) {
    this.pos = [10, 10];
    this.ctx = ctx;

    this.coloredLeftArrow = new Image();
    this.coloredLeftArrow.src = "src/assets/colored_left_arrow.png";

    this.pressedLeftArrow = new Image();
    this.pressedLeftArrow.src = "src/assets/pressed_left_arrow.png";

    this.incorrectLeftArrow = new Image();
    this.incorrectLeftArrow.src = "src/assets/incorrect_left_arrow.png"

    this.leftArrow = new Image();
    this.leftArrow.src = "src/assets/left_arrow.png";
  }

  drawColored() {
    this.ctx.drawImage(this.coloredLeftArrow, this.pos[0], this.pos[1]);
  }

  drawNormal() {
    this.ctx.drawImage(this.leftArrow, this.pos[0], this.pos[1]);
  }

  drawPressed() {
    this.ctx.drawImage(this.pressedLeftArrow, this.pos[0], this.pos[1]);
  }

  drawIncorrect() {
    this.ctx.drawImage(this.incorrectLeftArrow, this.pos[0], this.pos[1]);
  }
}

export default LeftArrow;