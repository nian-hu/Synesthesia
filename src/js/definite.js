import './scss/main.scss'

window.onload = function () {
  const file = document.getElementById("file-input");
  const canvas = document.getElementById("canvas");
  const audio = document.getElementById("audio");

  file.onchange = function () {

    const files = this.files;
    audio.src = URL.createObjectURL(files[0]); // look at what files is, figure out how to queue them up

    // canvas initialization
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    //

    const context = new AudioContext();
    let src = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 16384;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    // console.log(dataArray);

    // analyser.getByteFrequencyData(dataArray)

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const barWidth = (WIDTH / bufferLength) * 13;

    let barHeight;
    let x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;

      analyser.getByteFrequencyData(dataArray); // frequencies
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      console.log(dataArray);

      let r, g, b;
      let bars = 118;

      for (let i = 0; i < bars; i++) {
        barHeight = (dataArray[i] * 2.5);

        //change it to frequency range
        //get vol and freq

        if (dataArray[i] > 210) { // hot pink 210
          r = 255
          g = 0
          b = 174
        } else if (dataArray[i] > 190) { // cyan 200
          r = 0
          g = 255
          b = 251
        } else if (dataArray[i] > 170) { // yellow 190
          r = 242
          g = 255
          b = 0
        } else if (dataArray[i] > 150) { // lime green 180
          r = 106
          g = 255
          b = 0
        } else { // orange
          r = 255
          g = 166
          b = 0
        }

        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);

        x += barWidth + 10;

        // Rendering the gray arrows at the top of the screen

        let leftArrow = document.getElementById("left-arrow");
        let downArrow = document.getElementById("down-arrow");
        let upArrow = document.getElementById("up-arrow");
        let rightArrow = document.getElementById("right-arrow");

        ctx.drawImage(leftArrow, 10, 10)
        ctx.drawImage(downArrow, 365, 10)
        ctx.drawImage(upArrow, 726, 10)
        ctx.drawImage(rightArrow, 1100, 10)

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