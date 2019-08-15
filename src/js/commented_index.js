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
    // console.log(dataArray);
    // [250, 190, 0, 270]

    // analyser.getByteFrequencyData(dataArray)

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const barWidth = (WIDTH / bufferLength) * 9; // 13, 9
    // const barWidth = (WIDTH / bufferLength) * 2;

    let barHeight;
    let x = 0;
    // let x = 10

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;

      analyser.getByteFrequencyData(dataArray); // frequencies
      // ctx.fillStyle = "rgba(0,0,0,0.2)";
      // ctx.fillRect(0, 0, WIDTH, HEIGHT);

      ctx_bottom.fillStyle = "rgba(0,0,0,0.2)";
      ctx_bottom.fillRect(0, 0, WIDTH, HEIGHT);

      // console.log(dataArray);

      let r, g, b;
      let bars = 40; // 118

      // split the data array in 4 equal parts
      let quarterLength = dataArray.length / 4;

      let first = dataArray.slice(0, quarterLength);
      // debugger
      let second = dataArray.slice(quarterLength, quarterLength * 2);
      let third = dataArray.slice(quarterLength * 2, quarterLength * 3);
      let fourth = dataArray.slice(quarterLength * 3, quarterLength * 4);

      let newArr = [first, second, third, fourth];
      // console.log(newArr);
      // console.log(fourth);
      // console.log(third);
      // console.log(second);
      // console.log(first);

      for (let j = 0; j < newArr.length; j++) {

        let subArr = newArr[j];
        // j is the section
        // if (j === 1) { 
        //   debugger
        // }
        for (let i = 0; i < 10; i++) { // 30
          barHeight = (subArr[i] * 2.5); // 2.5 - good

          //change it to frequency range
          //get vol and freq

          // j === 0 (left)
          // hot pink
          // 255, 0, 191
          // lighter
          // 255, 130, 224

          // j === 1 (down)
          // cyan
          // 0, 255, 221
          // lighter
          // 145, 255, 241

          // j === 2 (up) 
          // chartreuse
          // 223, 255, 42
          // lighter
          // 234, 255, 115

          // j === 3
          // orange
          // 255, 164, 0
          // lighter
          // 255, 195, 87

          if (j === 0 && subArr[i] > 250) { // 210, 230, 240 (skinny)
            // we are in the first section
            // hot pink
            r = 255
            g = 0
            b = 191

            // ARROW RENDERING ATTEMPT:
            // let coloredLeftArrow = document.getElementById("colored-left-arrow")
            // ctx.drawImage(coloredLeftArrow, 20, 10)

            // } else if (j === 0 && subArr[i] > 190) {
            //   r = 255
            //   g = 97
            //   b = 202
            // } else if (j === 0 && subArr[i] > 170) {
            //   r = 255
            //   g = 166
            //   b = 225
            // } else if (j === 0 && subArr[i] > 150) {
            //   r = 252
            //   g = 217
            //   b = 241
          } else if (j === 0 && subArr[i] < 250) { // 210, 230
            //everything else is light pink
            r = 71
            g = 4
            b = 70
          } else if (j === 1 && subArr[i] > 190) { // 120, 130, 140 (skinny), 180
            // debugger
            // cyan
            r = 0
            g = 255
            b = 251
            // } else if (j === 1 && subArr[i] > 190) {
            //   r = 63
            //   g = 217
            //   b = 214
            // } else if (j === 1 && subArr[i] > 170) {
            //   r = 160
            //   g = 250
            //   b = 248
            // } else if (j === 1 && subArr[i] > 150) {
            //   r = 217
            //   g = 252
            //   b = 252
          } else if (j === 1 && subArr[i] < 190) { // 120, 130
            // light cyan
            r = 2
            g = 64
            b = 79
          } else if (j === 2 && subArr[i] > 170) { // 100, 110, 120 (skinny)
            //third
            //chartreuse
            r = 223
            g = 255
            b = 42
            // } else if (j === 2 && subArr[i] > 190) {
            //   r = 240
            //   g = 245
            //   b = 98
            // } else if (j === 2 && subArr[i] > 170) {
            //   r = 248
            //   g = 250
            //   b = 182
            // } else if (j === 2 && subArr[i] > 150) {
            //   r = 246
            //   g = 247
            //   b = 213
          } else if (j === 2 && subArr[i] < 170) { // 100, 110
            //light chartreuse
            r = 4
            g = 71
            b = 9
          } else if (j === 3 && subArr[i] > 50) { // 30, 40 (skinny)
            //fourth section
            //orange
            r = 255
            g = 164
            b = 0
            // } else if (j === 3 && subArr[i] > 190) {
            //   r = 60
            //   g = 207
            //   b = 72
            // } else if (j === 3 && subArr[i] > 170) {
            //   r = 154
            //   g = 252
            //   b = 162
            // } else if (j === 3 && subArr[i] > 150) {
            //   // debugger
            //   r = 210
            //   g = 250
            //   b = 213
          } else if (j === 3 && subArr[i] < 50) { // 30
            r = 71
            g = 14
            b = 4
          }


          // if (subArr[i] > 210) { // hot pink 210
          //   r = 255
          //   g = 0
          //   b = 174
          // } else if (subArr[i] > 190) { // cyan 200
          //   r = 0
          //   g = 255
          //   b = 251
          // } else if (subArr[i] > 170) { // yellow 190
          //   r = 242
          //   g = 255
          //   b = 0
          // } else if (subArr[i] > 150) { // lime green 180
          //   r = 106
          //   g = 255
          //   b = 0
          // } else { // orange
          //   r = 255
          //   g = 166
          //   b = 0
          // }

          ctx_bottom.fillStyle = `rgb(${r},${g},${b})`;
          ctx_bottom.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);

          // x += barWidth + 2;
          x += barWidth + 10;

          // // Rendering the gray arrows at the top of the screen

          // let leftArrow = document.getElementById("left-arrow");
          // let downArrow = document.getElementById("down-arrow");
          // let upArrow = document.getElementById("up-arrow");
          // let rightArrow = document.getElementById("right-arrow");

          // let coloredLeftArrow = document.getElementById("colored-left-arrow")
          // let coloredDownArrow = document.getElementById("colored-down-arrow")
          // let coloredUpArrow = document.getElementById("colored-up-arrow")
          // let coloredRightArrow = document.getElementById("colored-right-arrow")

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

          // necessary? idk
          // ctx_bottom.drawImage(leftArrow, 10, 10);

          // if (j === 0 && subArr[i] > 250) { 
          if (j === 0 && subArr[i] > 250) {
            // ctx.clearRect(10, 50, 120, 120);
            // ctx.clearRect(0, 0, canvas.width, canvas.height)
            // debugger
            ctx.drawImage(coloredLeftArrow, 10, 10); // 50
            // setTimeout()
            // ctx.clearRect(0, 0, canvas.width, canvas.height);

            // ctx.clearRect(10, 10, 120, 120); 
          }
          // KINDA FLICKERS
          else if (j === 0 && subArr[i] < 150) {
            ctx.drawImage(leftArrow, 10, 10); // 50
          }

          if (j === 1 && subArr[i] > 190) {
            ctx.drawImage(coloredDownArrow, 365, 10);
          } else if (j === 0 && subArr[i] < 150) {
            ctx.drawImage(downArrow, 365, 10);
          }

          if (j === 2 && subArr[i] > 170) {
            ctx.drawImage(coloredUpArrow, 726, 10);
          } else if (j === 0 && subArr[i] < 130) {
            ctx.drawImage(upArrow, 726, 10);
          }

          if (j === 3 && subArr[i] > 50) {
            ctx.drawImage(coloredRightArrow, 1100, 10);
          } else if (j === 0 && subArr[i] < 30) {
            ctx.drawImage(rightArrow, 1100, 10);
          }










          // ctx.clearRect(10, 50, 120, 120)

          // if (j === 0 && subArr[i] < 250) {
          //   ctx.drawImage(leftArrow, 10, 100) 
          // } else if (j === 0 && subArr[i] > 250) {
          //   ctx.drawImage(coloredLeftArrow, 10, 50)
          // }

          /////NOT A FUNCTION
          // if (j === 0 && subArr[i] > 250) {
          //   // ctx.clearRect(10, 10, 120, 120)
          //   ctx.drawImage(coloredLeftArrow, 10, 10)
          //   // ctx.clearImage(leftArrow)
          //   // debugger
          // } else {
          //   ctx.drawImage(leftArrow, 10, 100) // 10, 10
          // }

          //// MORE NOT FUNCTIONS
          // if (j === 1 && subArr[i] > 190) {
          //   ctx.drawImage(coloredDownArrow, 365, 10)
          //   ctx.clearImage(downArrow)
          //   // debugger
          // } else {
          //   ctx.drawImage(downArrow, 365, 10)
          // }

          // if (j === 2 && subArr[i] > 170) {
          //   ctx.drawImage(coloredUpArrow, 726, 10)
          //   ctx.clearImage(upArrow)
          // } else {
          //   ctx.drawImage(upArrow, 726, 10)
          // }

          // if (j === 3 && subArr[i] > 50) {
          //   ctx.drawImage(coloredRightArrow, 1100, 10)
          //   ctx.clearImage(rightArrow)
          // } else {
          //   ctx.drawImage(rightArrow, 1100, 10)
          // }
          ///// END OF NOT FUNCTIONS

          // ctx.drawImage(leftArrow, 10, 10)
          // ctx.drawImage(downArrow, 365, 10)
          // ctx.drawImage(upArrow, 726, 10)
          // ctx.drawImage(rightArrow, 1100, 10)

          // experimental
          // ctx.drawImage(downArrow, 365, 60)
          // ctx.drawImage(upArrow, 726, 60)
          // ctx.drawImage(rightArrow, 1100, 60)

        }


      }

    }

    // function renderArrows() {
    //   let leftArrow = document.getElementById("left-arrow");
    //   let downArrow = document.getElementById("down-arrow");
    //   let upArrow = document.getElementById("up-arrow");
    //   let rightArrow = document.getElementById("right-arrow");

    //   ctx.drawImage(leftArrow, 100, 100)
    // }

    audio.play();
    renderFrame();
    // renderArrows();

  }
}