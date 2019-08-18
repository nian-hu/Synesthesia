import './scss/main.scss'

window.onload = function () {
  const file = document.getElementById("file-input");
  const canvas = document.getElementById("canvas");
  const canvas_bottom = document.getElementById("canvas_bottom");
  const audio = document.getElementById("audio");
  const instructions = document.getElementById("instructions");
  const instructionsButton = document.getElementById("open-instructions");
  const closeInstructions = document.getElementById("close-instructions");
  const demo = document.getElementById("demo");
  const contact = document.getElementById("contact");
  const contactButton = document.getElementById("open-contact");
  const closeContact = document.getElementById("close-contact");

  instructionsButton.onclick = function() {
    instructions.style.display = "block";
  }

  closeInstructions.onclick = function() {
    instructions.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target === instructions) {
      instructions.style.display = "none";
    } 

    if (event.target === contact) {
      contact.style.display = "none";
    }
  }

  contactButton.onclick = function() {
    contact.style.display = "block";
  }

  closeContact.onclick = function() {
    contact.style.display = "none";
  }

  demo.onclick = function() {
    audio.src = "src/assets/Cyberpunk.mp3";
    play();
  }

  file.onchange = function () {

    const files = this.files;
    audio.src = URL.createObjectURL(files[0]); 
    play();
  }

  function play() {

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

    // Create new audio context
    const context = new AudioContext();
    // Give the audio context an audio source
    let src = context.createMediaElementSource(audio);
    // Create analyzer for audio context
    const analyser = context.createAnalyser();
    // Connect the audio source to the analyzer
    src.connect(analyser);
    // Send sound to speakers
    analyser.connect(context.destination);
    // Use Fast Fourier Transform algorithm to get frequency domain information
    analyser.fftSize = 1024;
    // Calculates the number of data values available for the visualization
    const bufferLength = analyser.frequencyBinCount;
    // Creates an array with length of bufferLength where all values are 0
    const dataArray = new Uint8Array(bufferLength);

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const barWidth = (WIDTH / bufferLength) * 9; 
    // const barWidth = (WIDTH / bufferLength) * 2; 

    let barHeight;
    let x = 0;

    let lightup = false;
    let lightup2 = false;
    let lightup3 = false;
    let lightup4 = false;

    let LEFT = false;
    let DOWN = false;
    let UP = false;
    let RIGHT = false;

    let leftPoints = 0;
    let downPoints = 0;
    let upPoints = 0;
    let rightPoints = 0;

    let pressed = null;

    let incorrect = true;
    let incorrect2 = true;
    let incorrect3 = true;
    let incorrect4 = true;

    // document.addEventListener("keydown", handlePress);

    // 37 left, 38 up, 39 right, 40 down
    // function handlePress(e) {
    //   switch (e.keyCode) {
    //     case 37:
    //       e.preventDefault();
    //       console.log('left');
    //       break;
    //     case 40:
    //       e.preventDefault();
    //       console.log('down');
    //       break;
    //     case 38:
    //       e.preventDefault();
    //       console.log('up');
    //       break;
    //     case 39:
    //       e.preventDefault();
    //       console.log('right');
    //       break;
    //   }
    // }

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;
      
      // Fills the array with frequency information instead of zeros
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

          let pressedLeftArrow = new Image();
          pressedLeftArrow.src = "src/assets/pressed_left_arrow.png";

          let incorrectLeftArrow = new Image();
          incorrectLeftArrow.src = "src/assets/incorrect_left_arrow.png"

          let leftArrow = new Image();
          leftArrow.src = "src/assets/left_arrow.png";

          let coloredDownArrow = new Image();
          coloredDownArrow.src = "src/assets/colored_down_arrow.png";

          let pressedDownArrow = new Image();
          pressedDownArrow.src = "src/assets/pressed_down_arrow.png";

          let incorrectDownArrow = new Image();
          incorrectDownArrow.src = "src/assets/incorrect_down_arrow.png"

          let downArrow = new Image();
          downArrow.src = "src/assets/down_arrow.png";

          let coloredUpArrow = new Image();
          coloredUpArrow.src = "src/assets/colored_up_arrow.png";

          let pressedUpArrow = new Image();
          pressedUpArrow.src = "src/assets/pressed_up_arrow.png";

          let incorrectUpArrow = new Image();
          incorrectUpArrow.src = "src/assets/incorrect_up_arrow.png"

          let upArrow = new Image();
          upArrow.src = "src/assets/up_arrow.png";

          let coloredRightArrow = new Image();
          coloredRightArrow.src = "src/assets/colored_right_arrow.png";

          let pressedRightArrow = new Image();
          pressedRightArrow.src = "src/assets/pressed_right_arrow.png";

          let incorrectRightArrow = new Image();
          incorrectRightArrow.src = "src/assets/incorrect_right_arrow.png"

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

          ////// if arrow is lit, then look for key press

          document.addEventListener("keydown", handlePress);
          // document.addEventListener("keyup", handlePress);
          
          function handlePress(e) {
            e.preventDefault();
            // if (e.keyCode === 37 && lightup && incorrect) {
            //   debugger
            //   leftPoints += 1;
            //   LEFT = true;
            //   setTimeout(() => LEFT = false, 250)
            //   // lightup = false;
            //   incorrect = !incorrect;
            // } 

            if (e.keyCode === 37 && lightup && incorrect) {
              leftPoints += 1;
              LEFT = true;
              setTimeout(() => LEFT = false, 250)
              lightup = false;
              incorrect = !incorrect;
            } 

            if (e.keyCode === 37 && !lightup && incorrect) {
              leftPoints -= 1;
              LEFT = true;
              setTimeout(() => LEFT = false, 250)
              incorrect = !incorrect;
            } 

            if (e.keyCode === 40 && lightup2 && incorrect2) {
              downPoints += 1;
              DOWN = true;
              setTimeout(() => DOWN = false, 250)
              lightup2 = false;
              incorrect2 = !incorrect2;
            }

            if (e.keyCode === 40 && !lightup2 && incorrect2) {
              downPoints -= 1;
              DOWN = true;
              setTimeout(() => DOWN = false, 250)
              lightup2 = false;
              incorrect2 = !incorrect2;
            }

            /// UP
            
            if (e.keyCode === 38 && lightup3 && incorrect3) {
              upPoints += 1;
              UP = true;
              setTimeout(() => UP = false, 250)
              lightup3 = false;
              incorrect3 = !incorrect3;
            }

            if (e.keyCode === 38 && !lightup3 && incorrect3) {
              upPoints -= 1;
              UP = true;
              setTimeout(() => UP = false, 250)
              lightup3 = false;
              incorrect3 = !incorrect3;
            }
            //

            if (e.keyCode === 39 && lightup4 && incorrect4) {
              rightPoints += 1;
              RIGHT = true;
              setTimeout(() => RIGHT = false, 250)
              lightup4 = false;
              incorrect4 = !incorrect4;
            }

            if (e.keyCode === 39 && !lightup4 && incorrect4) {
              rightPoints -= 1;
              RIGHT = true;
              setTimeout(() => RIGHT = false, 250)
              lightup4 = false;
              incorrect4 = !incorrect4;
            }

            // switch (e.keyCode) {
            //   case 37: 
            //     pressed = 'left';
            //     break;
            //   case 40:
            //     pressed = 'down';
            //     break;
            //   case 38:
            //     pressed = 'up';
            //     break;
            //   case 39: 
            //     pressed = 'right';
            //     break;
            // }

            // switch (pressed) {
            //   case 'left':
            //     pressed = null;
            //     LEFT = true;
            //     if (LEFT && lightup) {
            //       // setTimeout(() => leftPoints += 1, 500)
            //       leftPoints += 1;
            //       // LEFT = false;
            //       // e.keyCode = null;
            //       // debugger
            //       // LEFT = false;
            //       // console.log(leftPoints)
            //       // break;
            //     } else if (LEFT && !lightup) {
            //       // setTimeout(() => leftPoints -= 1, 500)
            //       leftPoints -= 1;
            //       // LEFT = false;
            //       // break;
            //     }
            //     setTimeout(() => LEFT = false, 500)
            //     break;
            //   case 'down':
            //     pressed = null;
            //     DOWN = true;
            //     if (DOWN && lightup2) {
            //       downPoints += 1
            //     } else if (DOWN && !lightup2) {
            //       downPoints -= 1
            //     }
            //     setTimeout(() => DOWN = false, 500)
            //     break;
            //   case 'up':
            //     pressed = null;
            //     UP = true;
            //     if (UP && lightup3) {
            //       upPoints += 1
            //     } else if (UP && !lightup3) {
            //       upPoints -= 1
            //     }
            //     setTimeout(() => UP = false, 500)
            //     break;
            //   case 'right':
            //     pressed = null;
            //     RIGHT = true;
            //     if (RIGHT && lightup4) {
            //       rightPoints += 1
            //     } else if (RIGHT && !lightup4) {
            //       rightPoints -= 1
            //     }
            //     setTimeout(() => RIGHT = false, 500)
            //     break;
            // }
          }

          // console.log(leftPoints)
          // console.log(downPoints)
          // console.log(upPoints)
          // console.log(rightPoints)

          ////// POINTS ARE SHOWING UP AND NEVER DISAPPEARING
          // ctx.font = "48px serif";
          // ctx.textBaseline = "hanging";
          // ctx.fillText(leftPoints, 0, 200);
          // ctx.fillStyle = "#ffffff";
          //////////////////

          // window.alert(leftPoints)
          // Rendering colored vs gray arrows
          // avg > 110

          function fadeOut(text) {
            let alpha = 1.0,   // full opacity
              interval = setInterval(function () {
                canvas.width = canvas.width; // Clears the canvas
                ctx.fillStyle = "rgba(255, 0, 140, " + alpha + ")";
                ctx.font = "bold 25pt Arial";
                ctx.fillText(text, 600, 50);
                alpha = alpha - 0.05; // decrease opacity (fade out)
                if (alpha < 0) {
                  ctx.width = ctx.width;
                  clearInterval(interval);
                }
              }, 50);
          }

          let allPoints = leftPoints + rightPoints + upPoints + downPoints;
          // if (!allPoints) allPoints = allPoints / 10000;
          fadeOut(allPoints);


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
          
          // in the case of a key press, successful or not
          // is LEFT ever getting set to false?
          if (j === 0 && LEFT && lightup) {
            ctx.drawImage(pressedLeftArrow, 10, 10);
          }
          //

          if (j === 0 && LEFT && !lightup) {
            ctx.drawImage(incorrectLeftArrow, 10, 10)
          }

          ///

          if (j === 1 && lightup2) {
            ctx.drawImage(coloredDownArrow, 365, 10); // 50
          }
          else if (j === 1 && !lightup2) {
            ctx.drawImage(downArrow, 365, 10); // 50
          }

          if (j === 1 && DOWN && lightup2) {
            ctx.drawImage(pressedDownArrow, 365, 10);
          }

          if (j === 1 && DOWN && !lightup2) {
            ctx.drawImage(incorrectDownArrow, 365, 10);
          }
          //

          if (j === 2 && lightup3) {
            ctx.drawImage(coloredUpArrow, 726, 10); // 50
          }
          else if (j === 2 && !lightup3) {
            ctx.drawImage(upArrow, 726, 10); // 50
          }

          if (j === 2 && UP && lightup3) {
            ctx.drawImage(pressedUpArrow, 726, 10);
          }

          if (j === 2 && UP && !lightup3) {
            ctx.drawImage(incorrectUpArrow, 726, 10);
          }

          //

          if (j === 3 && lightup4) {
            ctx.drawImage(coloredRightArrow, 1100, 10); // 50
          }
          else if (j === 3 && !lightup4) {
            ctx.drawImage(rightArrow, 1100, 10); // 50
          }

          if (j === 3 && RIGHT && lightup4) {
            ctx.drawImage(pressedRightArrow, 1100, 10);
          }

          if (j === 3 && RIGHT && !lightup4) {
            ctx.drawImage(incorrectRightArrow, 1100, 10);
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

          function currentScore(text) {
            let alpha = 1.0,   // full opacity
              interval = setInterval(function () {
                canvas.width = canvas.width; // Clears the canvas
                ctx.fillStyle = "rgba(255, 0, 140, " + alpha + ")";
                ctx.font = "bold 50pt Arial";
                ctx.fillText(text, 450, 300);
                alpha = alpha - 0.05; // decrease opacity (fade out)
                if (alpha < 0) {
                  ctx.width = ctx.width;
                  clearInterval(interval);
                }
              }, 50);
          }

          if (audio.paused) {
            currentScore("SCORE: " + allPoints);
          }
        }

        incorrect = true;
        incorrect2 = true;
        incorrect3 = true;
        incorrect4 = true;
      }
    }

    audio.play();
    renderFrame();
  }
}