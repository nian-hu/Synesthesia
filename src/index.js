import './scss/main.scss'

window.onload = function () {
  const file = document.getElementById("file-input");
  const canvas = document.getElementById("canvas");
  const canvas_bottom = document.getElementById("canvas_bottom");
  const audio = document.getElementById("audio");

  file.onchange = function () {

    const files = this.files;
    audio.src = URL.createObjectURL(files[0]); 

    // canvas initialization
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    //

    // second canvas
    canvas_bottom.width = window.innerWidth;
    canvas_bottom.height = window.innerHeight;
    const ctx_bottom = canvas_bottom.getContext("2d");
    //

    const context = new AudioContext();
    let src = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();

    src.connect(analyser);
    analyser.connect(context.destination);

    // analyser.fftSize = 16384;
    analyser.fftSize = 1024;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const barWidth = (WIDTH / bufferLength) * 9; // 13, 9

    let barHeight;
    let x = 0;

    let lightup = false;
    let lightup2 = false;
    let lightup3 = false;
    let lightup4 = false;

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;

      analyser.getByteFrequencyData(dataArray); // frequencies

      ctx_bottom.fillStyle = "rgba(0,0,0,0.2)";
      ctx_bottom.fillRect(0, 0, WIDTH, HEIGHT);

      let r, g, b;
      let bars = 40; // 118

      // split the data array in 4 equal parts
      let quarterLength = dataArray.length / 4;

      let first = dataArray.slice(0, quarterLength);
      let second = dataArray.slice(quarterLength, quarterLength * 2);
      let third = dataArray.slice(quarterLength * 2, quarterLength * 3);
      let fourth = dataArray.slice(quarterLength * 3, quarterLength * 4);

      let newArr = [first, second, third, fourth];

      for (let j = 0; j < newArr.length; j++) {

        let subArr = newArr[j];
        for (let i = 0; i < 10; i++) { // 30
          barHeight = (subArr[i] * 2.5); // 2.5 - good
          if (j === 0 && subArr[i] > 250) { // 210, 230, 240 (skinny)
            r = 255
            g = 0
            b = 191
          } else if (j === 0 && subArr[i] < 250) { // 210, 230
            r = 71
            g = 4
            b = 70
          } else if (j === 1 && subArr[i] > 190) { // 120, 130, 140 (skinny), 180
            r = 0
            g = 255
            b = 251
          } else if (j === 1 && subArr[i] < 190) { // 120, 130
            r = 2
            g = 64
            b = 79
          } else if (j === 2 && subArr[i] > 170) { // 100, 110, 120 (skinny)
            r = 223
            g = 255
            b = 42
          } else if (j === 2 && subArr[i] < 170) { // 100, 110
            r = 4
            g = 71
            b = 9
          } else if (j === 3 && subArr[i] > 50) { // 30, 40 (skinny)
            r = 255
            g = 164
            b = 0
          } else if (j === 3 && subArr[i] < 50) { // 30
            r = 71
            g = 14
            b = 4
          }
          ctx_bottom.fillStyle = `rgb(${r},${g},${b})`;
          ctx_bottom.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);

          x += barWidth + 10;

          // Creating all of the arrows
          let coloredLeftArrow = new Image();
          coloredLeftArrow.src = "src/assets/colored_left_arrow.png";

          let leftArrow = new Image();
          leftArrow.src = "src/assets/left_arrow.png";

          let coloredDownArrow = new Image();
          coloredDownArrow.src = "src/assets/colored_down_arrow.png";

          let downArrow = new Image();
          downArrow.src = "src/assets/down_arrow.png";

          let coloredUpArrow = new Image();
          coloredUpArrow.src = "src/assets/colored_up_arrow.png";

          let upArrow = new Image();
          upArrow.src = "src/assets/up_arrow.png";

          let coloredRightArrow = new Image();
          coloredRightArrow.src = "src/assets/colored_right_arrow.png";

          let rightArrow = new Image();
          rightArrow.src = "src/assets/right_arrow.png";

          // Calculating the average 
          let avg;
          let sum = 0;
          for (let i = 0; i < subArr.length; i++) {
            sum += subArr[i];
          }
          avg = sum / subArr.length;

          // Counting 4 bars

          //newArr[0][i]
          // let lightup = false;
          let count = 0;
          for (let i = 0; i < newArr[0].length; i++) {
            if (newArr[0][i] > 250) {
              count += 1;

              if (count >= 4 && lightup === false) {
                lightup = true;
                setTimeout(() => lightup = false, 750);
                count = 0;
              }
            } 
          }
          //

          // let lightup2 = false;
          let count2 = 0;
          for (let i = 0; i < newArr[1].length; i++) {
            if (newArr[1][i] > 190) {
              count2 += 1;

              if (count2 >= 4 && lightup2 === false) {
                lightup2 = true;
                setTimeout(() => lightup2 = false, 750)
                count2 = 0;
              }
            }
          }
          //
          // let lightup3 = false;
          let count3 = 0;
          for (let i = 0; i < newArr[2].length; i++) {
            if (newArr[2][i] > 170) {
              count3 += 1;

              if (count3 >= 4 && lightup3 === false) {
                lightup3 = true;
                setTimeout(() => lightup3 = false, 750)
                count3 = 0;
              }
            }
          }
          //
          // let lightup4 = false;
          let count4 = 0;
          for (let i = 0; i < newArr[3].length; i++) {
            if (newArr[3][i] > 50) {
              count4 += 1;

              if (count4 >= 4 && lightup4 === false) {
                lightup4 = true;
                setTimeout(() => lightup4 = false, 750)
                count4 = 0;
              }
            }
          }

          // Rendering colored vs gray arrows
          // avg > 110


          // if (j === 0 && lightup) {
          //   ctx.drawImage(coloredLeftArrow, 10, 10); // 50
          //   // setTimeout(() => ctx.drawImage(leftArrow, 10, 10), 3000)
          //   // setTimeout(() => ctx.clearRect(10, 10, 120, 120), 3000)
          // } 
          // else if (j === 0 && !lightup) {
          //   ctx.drawImage(leftArrow, 10, 10); // 50
          // }

          if (j === 0 && lightup) {
            ctx.drawImage(coloredLeftArrow, 10, 10); // 50
          } 
          else if (j === 0 && !lightup) {
            ctx.drawImage(leftArrow, 10, 10); // 50
          }

          if (j === 1 && lightup2) {
            ctx.drawImage(coloredDownArrow, 365, 10); // 50
          }
          else if (j === 1 && !lightup2) {
            ctx.drawImage(downArrow, 365, 10); // 50
          }

          if (j === 2 && lightup3) {
            ctx.drawImage(coloredUpArrow, 726, 10); // 50
          }
          else if (j === 2 && !lightup3) {
            ctx.drawImage(upArrow, 726, 10); // 50
          }

          if (j === 3 && lightup4) {
            ctx.drawImage(coloredRightArrow, 1100, 10); // 50
          }
          else if (j === 3 && !lightup4) {
            ctx.drawImage(rightArrow, 1100, 10); // 50
          }



          // if (j === 1 && subArr[i] > 190) {
          //   ctx.drawImage(coloredDownArrow, 365, 10);
          // } else if (j === 0 && subArr[i] < 150) {
          //   ctx.drawImage(downArrow, 365, 10); 
          // }

          // if (j === 2 && subArr[i] > 170) {
          //   ctx.drawImage(coloredUpArrow, 726, 10);
          // } else if (j === 0 && subArr[i] < 130) {
          //   ctx.drawImage(upArrow, 726, 10);
          // }

          // if (j === 3 && subArr[i] > 50) {
          //   ctx.drawImage(coloredRightArrow, 1100, 10);
          // } else if (j === 0 && subArr[i] < 30) {
          //   ctx.drawImage(rightArrow, 1100, 10);
          // }
        }
      }

    }

    audio.play();
    renderFrame();
  }
}