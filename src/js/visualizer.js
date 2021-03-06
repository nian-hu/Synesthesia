import LeftArrow from './left_arrow';
import DownArrow from './down_arrow';
import UpArrow from './up_arrow';
import RightArrow from './right_arrow';

class Visualizer {
  constructor(analyser, dataArray, canvas) {
    this.analyser = analyser;
    this.dataArray = dataArray;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.WIDTH = this.canvas.width;
    this.HEIGHT = this.canvas.height;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.barWidth = (this.WIDTH / this.bufferLength) * 9; 

    this.leftArrow = new LeftArrow(this.ctx);
    this.downArrow = new DownArrow(this.ctx);
    this.upArrow = new UpArrow(this.ctx);
    this.rightArrow = new RightArrow(this.ctx);

    this.lightup = false;
    this.lightup2 = false;
    this.lightup3 = false;
    this.lightup4 = false;

    this.LEFT = false;
    this.DOWN = false;
    this.UP = false;
    this.RIGHT = false;

    this.incorrect = true;
    this.incorrect2 = true;
    this.incorrect3 = true;
    this.incorrect4 = true;

    this.points = 0;
    this.renderFrame = this.renderFrame.bind(this);
    this.handlePress = this.handlePress.bind(this);
    document.addEventListener("keydown", this.handlePress);
  }

  handlePress(e) {
    e.preventDefault();

    if (e.keyCode === 37 && this.lightup && this.incorrect) {
      this.points += 1;
      this.LEFT = true;
      setTimeout(() => this.LEFT = false, 250)
      this.lightup = false;
      this.incorrect = !this.incorrect;
    }

    if (e.keyCode === 37 && !this.lightup && this.incorrect) {
      this.points -= 1;
      this.LEFT = true;
      setTimeout(() => this.LEFT = false, 250)
      this.incorrect = !this.incorrect;
    }

    if (e.keyCode === 40 && this.lightup2 && this.incorrect2) {
      this.points += 1;
      this.DOWN = true;
      setTimeout(() => this.DOWN = false, 250)
      this.lightup2 = false;
      this.incorrect2 = !this.incorrect2;
    }

    if (e.keyCode === 40 && !this.lightup2 && this.incorrect2) {
      this.points -= 1;
      this.DOWN = true; 
      setTimeout(() => this.DOWN = false, 250)
      this.lightup2 = false;
      this.incorrect2 = !this.incorrect2;
    }

    if (e.keyCode === 38 && this.lightup3 && this.incorrect3) {
      this.points += 1;
      this.UP = true;
      setTimeout(() => this.UP = false, 250)
      this.lightup3 = false;
      this.incorrect3 = !this.incorrect3;
    }

    if (e.keyCode === 38 && !this.lightup3 && this.incorrect3) {
      this.points -= 1;
      this.UP = true;
      setTimeout(() => this.UP = false, 250)
      this.lightup3 = false;
      this.incorrect3 = !this.incorrect3;
    }

    if (e.keyCode === 39 && this.lightup4 && this.incorrect4) {
      this.points += 1;
      this.RIGHT = true;
      setTimeout(() => this.RIGHT = false, 250)
      this.lightup4 = false;
      this.incorrect4 = !this.incorrect4;
    }

    if (e.keyCode === 39 && !this.lightup4 && this.incorrect4) {
      this.points -= 1;
      this.RIGHT = true;
      setTimeout(() => this.RIGHT = false, 250)
      this.lightup4 = false;
      this.incorrect4 = !this.incorrect4;
    }
  }

  renderFrame() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "rgba(255, 0, 140, " + 1 + ")";
    this.ctx.font = "bold 25pt Arial";
    this.ctx.fillText(this.points, 600, 50);
    // debugger
    let barHeight;
    let x = 0;

    this.analyser.getByteFrequencyData(this.dataArray);
    let r, g, b;
    let bars = 40;

    let quarterLength = 128;

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
        this.ctx.fillStyle = `rgb(${r},${g},${b})`;
        this.ctx.fillRect(x, (this.HEIGHT - barHeight), this.barWidth, barHeight);
        debugger

        x += this.barWidth + 10;

        let count = 0;

        for (let i = 0; i < newArr[0].length; i++) {
          if (newArr[0][i] > 250) {
            count += 1;

            if (count >= 4 && this.lightup === false) {
              this.lightup = true;
              setTimeout(() => this.lightup = false, 750);
              count = 0;
            }
          }
        }

        let count2 = 0;
        for (let i = 0; i < newArr[1].length; i++) {
          if (newArr[1][i] > 190) {
            count2 += 1;

            if (count2 >= 4 && this.lightup2 === false) {
              this.lightup2 = true;
              setTimeout(() => this.lightup2 = false, 750)
              count2 = 0;
            }
          }
        }
        
        let count3 = 0;
        for (let i = 0; i < newArr[2].length; i++) {
          if (newArr[2][i] > 170) {
            count3 += 1;

            if (count3 >= 4 && this.lightup3 === false) {
              this.lightup3 = true;
              setTimeout(() => this.lightup3 = false, 750)
              count3 = 0;
            }
          }
        }

        let count4 = 0;
        for (let i = 0; i < newArr[3].length; i++) {
          if (newArr[3][i] > 50) {
            count4 += 1;

            if (count4 >= 4 && this.lightup4 === false) {
              this.lightup4 = true;
              setTimeout(() => this.lightup4 = false, 750)
              count4 = 0;
            }
          }
        }

        // Rendering left arrow
        if (j === 0 && this.lightup) {
          this.leftArrow.drawColored();
        } else if (j === 0 && !this.lightup) {
          this.leftArrow.drawNormal();
        }

        if (j === 0 && this.LEFT && this.lightup) {
          this.leftArrow.drawPressed();
        }

        if (j === 0 && this.LEFT && !this.lightup) {
          this.leftArrow.drawIncorrect();
        }
        
        // Rendering down arrow
        if (j === 1 && this.lightup2) {
          this.downArrow.drawColored();
        } else if (j === 1 && !this.lightup2) {
          this.downArrow.drawNormal();
        }

        if (j === 1 && this.DOWN && this.lightup2) {
          this.downArrow.drawPressed();
        }

        if (j === 1 && this.DOWN && !this.lightup2) {
          this.downArrow.drawIncorrect();
        }

        // Rendering up arrow
        if (j === 2 && this.lightup3) {
          this.upArrow.drawColored();
        } else if (j === 2 && !this.lightup3) {
          this.upArrow.drawNormal();
        }

        if (j === 2 && this.UP && this.lightup3) {
          this.upArrow.drawPressed();
        }

        if (j === 2 && this.UP && !this.lightup3) {
          this.upArrow.drawIncorrect();
        }

        // Rendering right arrow
        if (j === 3 && this.lightup4) {
          this.rightArrow.drawColored();
        } else if (j === 3 && !this.lightup4) {
          this.rightArrow.drawNormal();
        }

        if (j === 3 && this.RIGHT && this.lightup4) {
          this.rightArrow.drawPressed();
        }

        if (j === 3 && this.RIGHT && !this.lightup4) {
          this.rightArrow.drawIncorrect();
        }
      }

      this.incorrect = true;
      this.incorrect2 = true;
      this.incorrect3 = true;
      this.incorrect4 = true;
    }

    requestAnimationFrame(this.renderFrame);
  }
}

export default Visualizer;