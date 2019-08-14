class LeftArrow {
  constructor(array, ctx) {
    this.array = array;
    this.pos = [10, 10];
    this.ctx = ctx;
    this.state = { colored: false }
  }

  calculateAverage() {
    let sum = 0;
    for (let i = 0; i < this.array.length; i++) {
      sum += this.array[i];
    }
    this.avg = sum / this.array.length;
    return this.avg;
  }

  isColored() {
    if (this.avg)
  }

  drawArrow() {
    if (this.state.colored) {
      let coloredLeftArrow = new Image();
      coloredLeftArrow.src = "src/assets/colored_left_arrow.png";
    }


    this.ctx.drawImage(this.img, this.pos[0], this.pos[1]);
    setTimeout();
    clearTimeout();
  }
}