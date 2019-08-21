class Visualizer {
  constructor(analyser, dataArray, ctx) {
    this.analyser = analyser;
    this.dataArray = dataArray;
    this.ctx = ctx;

    this.lightup = false;
    this.lightup2 = false;
    this.lightup3 = false;
    this.lightup4 = false;

    this.LEFT = false;
    this.DOWN = false;
    this.UP = false;
    this.RIGHT = false;

    this.leftPoints = 0;
    this.downPoints = 0;
    this.upPoints = 0;
    this.rightPoints = 0;

    this.incorrect = true;
    this.incorrect2 = true;
    this.incorrect3 = true;
    this.incorrect4 = true;
  }

  renderFrame() {
    requestAnimationFrame(renderFrame);
    let x = 0;

    this.analyser.getByteFrequencyData(this.dataArray);
    let r, g, b;
    let bars = 40;

    let quarterLength = this.dataArray.length / 4;

    let first = this.dataArray.slice(0, quarterLength);
    let second = this.dataArray.slice(quarterLength, quarterLength * 2);
    let third = this.dataArray.slice(quarterLength * 2, quarterLength * 3);
    let fourth = this.dataArray.slice(quarterLength * 3, quarterLength * 4);
    
    let newArr = [first, second, third, fourth];

    for (let j = 0; j < newArr.length; j++) {
      let subArr = newArr[j];
      for (let i = 0; i < 10; i++) { 
        barHeight = (subArr[i] * 2.5); 
        if (j === 0 && subArr[i] > 250) { 
          r = 255
          g = 0
          b = 191
        } else if (j === 0 && subArr[i] < 250) { 
          r = 71
          g = 4
          b = 70
        } else if (j === 1 && subArr[i] > 190) { 
          r = 0
          g = 255
          b = 251
        } else if (j === 1 && subArr[i] < 190) { 
          r = 2
          g = 64
          b = 79
        } else if (j === 2 && subArr[i] > 170) { 
          r = 223
          g = 255
          b = 42
        } else if (j === 2 && subArr[i] < 170) { 
          r = 4
          g = 71
          b = 9
        } else if (j === 3 && subArr[i] > 50) { 
          r = 255
          g = 164
          b = 0
        } else if (j === 3 && subArr[i] < 50) { 
          r = 71
          g = 14
          b = 4
        }
        ctx_bottom.fillStyle = `rgb(${r},${g},${b})`;
        ctx_bottom.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);

        x += barWidth + 10;
      }
    }
  }
}

export default Visualizer;