class DownArrow {
  constructor(ctx) {
    this.pos = [365, 10];
    this.ctx = ctx;

    this.coloredDownArrow = new Image();
    this.coloredDownArrow.src = "src/assets/colored_down_arrow.png";

    this.pressedDownArrow = new Image();
    this.pressedDownArrow.src = "src/assets/pressed_down_arrow.png";

    this.incorrectDownArrow = new Image();
    this.incorrectDownArrow.src = "src/assets/incorrect_down_arrow.png"

    this.downArrow = new Image();
    this.downArrow.src = "src/assets/down_arrow.png";
  }

  drawColored() {
    this.ctx.drawImage(this.coloredDownArrow, this.pos[0], this.pos[1]);
  }

  drawNormal() {
    this.ctx.drawImage(this.downArrow, this.pos[0], this.pos[1]);
  }

  drawPressed() {
    this.ctx.drawImage(this.pressedDownArrow, this.pos[0], this.pos[1]);
  }

  drawIncorrect() {
    this.ctx.drawImage(this.incorrectDownArrow, this.pos[0], this.pos[1]);
  }
}

export default DownArrow;