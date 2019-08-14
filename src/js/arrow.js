class Arrow {
  constructor(imgPath, array, pos, ctx) {
    this.array = array;
    this.pos = pos;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = imgPath;
    this.state = { hidden: true }
  }

  calculateAverage() {
    let sum = 0;
    for (let i = 0; i < this.array.length; i++) {
      sum += this.array[i];
    }
    this.avg = sum / this.array.length;
    return this.avg;
  }

  isHidden() {
    if (this.avg)
  }

  drawArrow() {
    this.ctx.drawImage(this.img, this.pos[0], this.pos[1]);
    setTimeout();
    clearTimeout();
  }
}