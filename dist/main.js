/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");

window.onload = function () {
  var file = document.getElementById("file-input");
  var canvas = document.getElementById("canvas");
  var canvas_bottom = document.getElementById("canvas_bottom");
  var audio = document.getElementById("audio");
  var instructions = document.getElementById("instructions");
  var instructionsButton = document.getElementById("open-instructions");
  var closeInstructions = document.getElementById("close-instructions");
  var demo = document.getElementById("demo");
  var contact = document.getElementById("contact");
  var contactButton = document.getElementById("open-contact");
  var closeContact = document.getElementById("close-contact");

  instructionsButton.onclick = function () {
    instructions.style.display = "block";
  };

  closeInstructions.onclick = function () {
    instructions.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === instructions) {
      instructions.style.display = "none";
    }

    if (event.target === contact) {
      contact.style.display = "none";
    }
  };

  contactButton.onclick = function () {
    contact.style.display = "block";
  };

  closeContact.onclick = function () {
    contact.style.display = "none";
  };

  demo.onclick = function () {
    audio.src = "src/assets/Cyberpunk.mp3";
    play();
  };

  file.onchange = function () {

    var files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    play();
  };

  function play() {

    // canvas initialization
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    //

    // second canvas
    canvas_bottom.width = window.innerWidth;
    canvas_bottom.height = window.innerHeight;
    var ctx_bottom = canvas_bottom.getContext("2d");
    //

    // Create new audio context
    var context = new AudioContext();
    // Give the audio context an audio source
    var src = context.createMediaElementSource(audio);
    // Create analyzer for audio context
    var analyser = context.createAnalyser();
    // Connect the audio source to the analyzer
    src.connect(analyser);
    // Send sound to speakers
    analyser.connect(context.destination);
    // Use Fast Fourier Transform algorithm to get frequency domain information
    analyser.fftSize = 1024;
    // Calculates the number of data values available for the visualization
    var bufferLength = analyser.frequencyBinCount;
    // Creates an array with length of bufferLength where all values are 0
    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = WIDTH / bufferLength * 9;
    // const barWidth = (WIDTH / bufferLength) * 2; 

    var barHeight = void 0;
    var x = 0;

    var lightup = false;
    var lightup2 = false;
    var lightup3 = false;
    var lightup4 = false;

    var LEFT = false;
    var DOWN = false;
    var UP = false;
    var RIGHT = false;

    var leftPoints = 0;
    var downPoints = 0;
    var upPoints = 0;
    var rightPoints = 0;

    var pressed = null;

    var incorrect = true;
    var incorrect2 = true;
    var incorrect3 = true;
    var incorrect4 = true;

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

      var r = void 0,
          g = void 0,
          b = void 0;
      var bars = 40; // 118

      // split the data array in 4 equal parts
      var quarterLength = dataArray.length / 4;

      var first = dataArray.slice(0, quarterLength);
      var second = dataArray.slice(quarterLength, quarterLength * 2);
      var third = dataArray.slice(quarterLength * 2, quarterLength * 3);
      var fourth = dataArray.slice(quarterLength * 3, quarterLength * 4);

      var newArr = [first, second, third, fourth];

      for (var j = 0; j < newArr.length; j++) {

        var subArr = newArr[j];
        for (var i = 0; i < 10; i++) {
          // document.addEventListener("keyup", handlePress);

          var handlePress = function handlePress(e) {
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
              setTimeout(function () {
                return LEFT = false;
              }, 250);
              lightup = false;
              incorrect = !incorrect;
            }

            if (e.keyCode === 37 && !lightup && incorrect) {
              leftPoints -= 1;
              LEFT = true;
              setTimeout(function () {
                return LEFT = false;
              }, 250);
              incorrect = !incorrect;
            }

            if (e.keyCode === 40 && lightup2 && incorrect2) {
              downPoints += 1;
              DOWN = true;
              setTimeout(function () {
                return DOWN = false;
              }, 250);
              lightup2 = false;
              incorrect2 = !incorrect2;
            }

            if (e.keyCode === 40 && !lightup2 && incorrect2) {
              downPoints -= 1;
              DOWN = true;
              setTimeout(function () {
                return DOWN = false;
              }, 250);
              lightup2 = false;
              incorrect2 = !incorrect2;
            }

            /// UP

            if (e.keyCode === 38 && lightup3 && incorrect3) {
              upPoints += 1;
              UP = true;
              setTimeout(function () {
                return UP = false;
              }, 250);
              lightup3 = false;
              incorrect3 = !incorrect3;
            }

            if (e.keyCode === 38 && !lightup3 && incorrect3) {
              upPoints -= 1;
              UP = true;
              setTimeout(function () {
                return UP = false;
              }, 250);
              lightup3 = false;
              incorrect3 = !incorrect3;
            }
            //

            if (e.keyCode === 39 && lightup4 && incorrect4) {
              rightPoints += 1;
              RIGHT = true;
              setTimeout(function () {
                return RIGHT = false;
              }, 250);
              lightup4 = false;
              incorrect4 = !incorrect4;
            }

            if (e.keyCode === 39 && !lightup4 && incorrect4) {
              rightPoints -= 1;
              RIGHT = true;
              setTimeout(function () {
                return RIGHT = false;
              }, 250);
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
          };

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

          var fadeOut = function fadeOut(text) {
            var alpha = 1.0,
                // full opacity
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
          };

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

          var currentScore = function currentScore(text) {
            var alpha = 1.0,
                // full opacity
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
          };

          // 30
          barHeight = subArr[i] * 2.5; // 2.5 - good
          if (j === 0 && subArr[i] > 250) {
            // 210, 230, 240 (skinny)
            r = 255;
            g = 0;
            b = 191;
          } else if (j === 0 && subArr[i] < 250) {
            // 210, 230
            r = 71;
            g = 4;
            b = 70;
          } else if (j === 1 && subArr[i] > 190) {
            // 120, 130, 140 (skinny), 180
            r = 0;
            g = 255;
            b = 251;
          } else if (j === 1 && subArr[i] < 190) {
            // 120, 130
            r = 2;
            g = 64;
            b = 79;
          } else if (j === 2 && subArr[i] > 170) {
            // 100, 110, 120 (skinny)
            r = 223;
            g = 255;
            b = 42;
          } else if (j === 2 && subArr[i] < 170) {
            // 100, 110
            r = 4;
            g = 71;
            b = 9;
          } else if (j === 3 && subArr[i] > 50) {
            // 30, 40 (skinny)
            r = 255;
            g = 164;
            b = 0;
          } else if (j === 3 && subArr[i] < 50) {
            // 30
            r = 71;
            g = 14;
            b = 4;
          }
          ctx_bottom.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx_bottom.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          x += barWidth + 10;

          // Creating all of the arrows
          var coloredLeftArrow = new Image();
          coloredLeftArrow.src = "src/assets/colored_left_arrow.png";

          var pressedLeftArrow = new Image();
          pressedLeftArrow.src = "src/assets/pressed_left_arrow.png";

          var incorrectLeftArrow = new Image();
          incorrectLeftArrow.src = "src/assets/incorrect_left_arrow.png";

          var leftArrow = new Image();
          leftArrow.src = "src/assets/left_arrow.png";

          var coloredDownArrow = new Image();
          coloredDownArrow.src = "src/assets/colored_down_arrow.png";

          var pressedDownArrow = new Image();
          pressedDownArrow.src = "src/assets/pressed_down_arrow.png";

          var incorrectDownArrow = new Image();
          incorrectDownArrow.src = "src/assets/incorrect_down_arrow.png";

          var downArrow = new Image();
          downArrow.src = "src/assets/down_arrow.png";

          var coloredUpArrow = new Image();
          coloredUpArrow.src = "src/assets/colored_up_arrow.png";

          var pressedUpArrow = new Image();
          pressedUpArrow.src = "src/assets/pressed_up_arrow.png";

          var incorrectUpArrow = new Image();
          incorrectUpArrow.src = "src/assets/incorrect_up_arrow.png";

          var upArrow = new Image();
          upArrow.src = "src/assets/up_arrow.png";

          var coloredRightArrow = new Image();
          coloredRightArrow.src = "src/assets/colored_right_arrow.png";

          var pressedRightArrow = new Image();
          pressedRightArrow.src = "src/assets/pressed_right_arrow.png";

          var incorrectRightArrow = new Image();
          incorrectRightArrow.src = "src/assets/incorrect_right_arrow.png";

          var rightArrow = new Image();
          rightArrow.src = "src/assets/right_arrow.png";

          // Calculating the average 
          var avg = void 0;
          var sum = 0;
          for (var _i = 0; _i < subArr.length; _i++) {
            sum += subArr[_i];
          }
          avg = sum / subArr.length;

          // Counting 4 bars

          //newArr[0][i]
          // let lightup = false;
          var count = 0;
          for (var _i2 = 0; _i2 < newArr[0].length; _i2++) {
            if (newArr[0][_i2] > 250) {
              count += 1;

              if (count >= 4 && lightup === false) {
                lightup = true;
                setTimeout(function () {
                  return lightup = false;
                }, 750);
                count = 0;
              }
            }
          }
          //

          // let lightup2 = false;
          var count2 = 0;
          for (var _i3 = 0; _i3 < newArr[1].length; _i3++) {
            if (newArr[1][_i3] > 190) {
              count2 += 1;

              if (count2 >= 4 && lightup2 === false) {
                lightup2 = true;
                setTimeout(function () {
                  return lightup2 = false;
                }, 750);
                count2 = 0;
              }
            }
          }
          //
          // let lightup3 = false;
          var count3 = 0;
          for (var _i4 = 0; _i4 < newArr[2].length; _i4++) {
            if (newArr[2][_i4] > 170) {
              count3 += 1;

              if (count3 >= 4 && lightup3 === false) {
                lightup3 = true;
                setTimeout(function () {
                  return lightup3 = false;
                }, 750);
                count3 = 0;
              }
            }
          }
          //
          // let lightup4 = false;
          var count4 = 0;
          for (var _i5 = 0; _i5 < newArr[3].length; _i5++) {
            if (newArr[3][_i5] > 50) {
              count4 += 1;

              if (count4 >= 4 && lightup4 === false) {
                lightup4 = true;
                setTimeout(function () {
                  return lightup4 = false;
                }, 750);
                count4 = 0;
              }
            }
          }

          ////// if arrow is lit, then look for key press

          document.addEventListener("keydown", handlePress);

          var allPoints = leftPoints + rightPoints + upPoints + downPoints;
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
          } else if (j === 0 && !lightup) {
            ctx.drawImage(leftArrow, 10, 10); // 50
          }

          // in the case of a key press, successful or not
          // is LEFT ever getting set to false?
          if (j === 0 && LEFT && lightup) {
            ctx.drawImage(pressedLeftArrow, 10, 10);
          }
          //

          if (j === 0 && LEFT && !lightup) {
            ctx.drawImage(incorrectLeftArrow, 10, 10);
          }

          ///

          if (j === 1 && lightup2) {
            ctx.drawImage(coloredDownArrow, 365, 10); // 50
          } else if (j === 1 && !lightup2) {
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
          } else if (j === 2 && !lightup3) {
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
          } else if (j === 3 && !lightup4) {
            ctx.drawImage(rightArrow, 1100, 10); // 50
          }

          if (j === 3 && RIGHT && lightup4) {
            ctx.drawImage(pressedRightArrow, 1100, 10);
          }

          if (j === 3 && RIGHT && !lightup4) {
            ctx.drawImage(incorrectRightArrow, 1100, 10);
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
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImNhbnZhc19ib3R0b20iLCJhdWRpbyIsImluc3RydWN0aW9ucyIsImluc3RydWN0aW9uc0J1dHRvbiIsImNsb3NlSW5zdHJ1Y3Rpb25zIiwiZGVtbyIsImNvbnRhY3QiLCJjb250YWN0QnV0dG9uIiwiY2xvc2VDb250YWN0Iiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0Iiwic3JjIiwicGxheSIsIm9uY2hhbmdlIiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjdHhfYm90dG9tIiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImFuYWx5c2VyIiwiY3JlYXRlQW5hbHlzZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJmZnRTaXplIiwiYnVmZmVyTGVuZ3RoIiwiZnJlcXVlbmN5QmluQ291bnQiLCJkYXRhQXJyYXkiLCJVaW50OEFycmF5IiwiV0lEVEgiLCJIRUlHSFQiLCJiYXJXaWR0aCIsImJhckhlaWdodCIsIngiLCJsaWdodHVwIiwibGlnaHR1cDIiLCJsaWdodHVwMyIsImxpZ2h0dXA0IiwiTEVGVCIsIkRPV04iLCJVUCIsIlJJR0hUIiwibGVmdFBvaW50cyIsImRvd25Qb2ludHMiLCJ1cFBvaW50cyIsInJpZ2h0UG9pbnRzIiwicHJlc3NlZCIsImluY29ycmVjdCIsImluY29ycmVjdDIiLCJpbmNvcnJlY3QzIiwiaW5jb3JyZWN0NCIsInJlbmRlckZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInIiLCJnIiwiYiIsImJhcnMiLCJxdWFydGVyTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwibmV3QXJyIiwiaiIsInN1YkFyciIsImkiLCJoYW5kbGVQcmVzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsInRleHQiLCJhbHBoYSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJmb250IiwiZmlsbFRleHQiLCJjbGVhckludGVydmFsIiwiY3VycmVudFNjb3JlIiwiY29sb3JlZExlZnRBcnJvdyIsIkltYWdlIiwicHJlc3NlZExlZnRBcnJvdyIsImluY29ycmVjdExlZnRBcnJvdyIsImxlZnRBcnJvdyIsImNvbG9yZWREb3duQXJyb3ciLCJwcmVzc2VkRG93bkFycm93IiwiaW5jb3JyZWN0RG93bkFycm93IiwiZG93bkFycm93IiwiY29sb3JlZFVwQXJyb3ciLCJwcmVzc2VkVXBBcnJvdyIsImluY29ycmVjdFVwQXJyb3ciLCJ1cEFycm93IiwiY29sb3JlZFJpZ2h0QXJyb3ciLCJwcmVzc2VkUmlnaHRBcnJvdyIsImluY29ycmVjdFJpZ2h0QXJyb3ciLCJyaWdodEFycm93IiwiYXZnIiwic3VtIiwiY291bnQiLCJjb3VudDIiLCJjb3VudDMiLCJjb3VudDQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxsUG9pbnRzIiwiZHJhd0ltYWdlIiwicGF1c2VkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUFBLE9BQU9DLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQixNQUFNQyxPQUFPQyxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBQWI7QUFDQSxNQUFNQyxTQUFTRixTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNRSxnQkFBZ0JILFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQSxNQUFNRyxRQUFRSixTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQWQ7QUFDQSxNQUFNSSxlQUFlTCxTQUFTQyxjQUFULENBQXdCLGNBQXhCLENBQXJCO0FBQ0EsTUFBTUsscUJBQXFCTixTQUFTQyxjQUFULENBQXdCLG1CQUF4QixDQUEzQjtBQUNBLE1BQU1NLG9CQUFvQlAsU0FBU0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FBMUI7QUFDQSxNQUFNTyxPQUFPUixTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFDQSxNQUFNUSxVQUFVVCxTQUFTQyxjQUFULENBQXdCLFNBQXhCLENBQWhCO0FBQ0EsTUFBTVMsZ0JBQWdCVixTQUFTQyxjQUFULENBQXdCLGNBQXhCLENBQXRCO0FBQ0EsTUFBTVUsZUFBZVgsU0FBU0MsY0FBVCxDQUF3QixlQUF4QixDQUFyQjs7QUFFQUsscUJBQW1CTSxPQUFuQixHQUE2QixZQUFXO0FBQ3RDUCxpQkFBYVEsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsT0FBN0I7QUFDRCxHQUZEOztBQUlBUCxvQkFBa0JLLE9BQWxCLEdBQTRCLFlBQVc7QUFDckNQLGlCQUFhUSxLQUFiLENBQW1CQyxPQUFuQixHQUE2QixNQUE3QjtBQUNELEdBRkQ7O0FBSUFqQixTQUFPZSxPQUFQLEdBQWlCLFVBQVNHLEtBQVQsRUFBZ0I7QUFDL0IsUUFBSUEsTUFBTUMsTUFBTixLQUFpQlgsWUFBckIsRUFBbUM7QUFDakNBLG1CQUFhUSxLQUFiLENBQW1CQyxPQUFuQixHQUE2QixNQUE3QjtBQUNEOztBQUVELFFBQUlDLE1BQU1DLE1BQU4sS0FBaUJQLE9BQXJCLEVBQThCO0FBQzVCQSxjQUFRSSxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDRDtBQUNGLEdBUkQ7O0FBVUFKLGdCQUFjRSxPQUFkLEdBQXdCLFlBQVc7QUFDakNILFlBQVFJLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixPQUF4QjtBQUNELEdBRkQ7O0FBSUFILGVBQWFDLE9BQWIsR0FBdUIsWUFBVztBQUNoQ0gsWUFBUUksS0FBUixDQUFjQyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0QsR0FGRDs7QUFJQU4sT0FBS0ksT0FBTCxHQUFlLFlBQVc7QUFDeEJSLFVBQU1hLEdBQU4sR0FBWSwwQkFBWjtBQUNBQztBQUNELEdBSEQ7O0FBS0FuQixPQUFLb0IsUUFBTCxHQUFnQixZQUFZOztBQUUxQixRQUFNQyxRQUFRLEtBQUtBLEtBQW5CO0FBQ0FoQixVQUFNYSxHQUFOLEdBQVlJLElBQUlDLGVBQUosQ0FBb0JGLE1BQU0sQ0FBTixDQUFwQixDQUFaO0FBQ0FGO0FBQ0QsR0FMRDs7QUFPQSxXQUFTQSxJQUFULEdBQWdCOztBQUVkO0FBQ0FoQixXQUFPcUIsS0FBUCxHQUFlMUIsT0FBTzJCLFVBQXRCO0FBQ0F0QixXQUFPdUIsTUFBUCxHQUFnQjVCLE9BQU82QixXQUF2QjtBQUNBLFFBQU1DLE1BQU16QixPQUFPMEIsVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0E7O0FBRUE7QUFDQXpCLGtCQUFjb0IsS0FBZCxHQUFzQjFCLE9BQU8yQixVQUE3QjtBQUNBckIsa0JBQWNzQixNQUFkLEdBQXVCNUIsT0FBTzZCLFdBQTlCO0FBQ0EsUUFBTUcsYUFBYTFCLGNBQWN5QixVQUFkLENBQXlCLElBQXpCLENBQW5CO0FBQ0E7O0FBRUE7QUFDQSxRQUFNRSxVQUFVLElBQUlDLFlBQUosRUFBaEI7QUFDQTtBQUNBLFFBQUlkLE1BQU1hLFFBQVFFLHdCQUFSLENBQWlDNUIsS0FBakMsQ0FBVjtBQUNBO0FBQ0EsUUFBTTZCLFdBQVdILFFBQVFJLGNBQVIsRUFBakI7QUFDQTtBQUNBakIsUUFBSWtCLE9BQUosQ0FBWUYsUUFBWjtBQUNBO0FBQ0FBLGFBQVNFLE9BQVQsQ0FBaUJMLFFBQVFNLFdBQXpCO0FBQ0E7QUFDQUgsYUFBU0ksT0FBVCxHQUFtQixJQUFuQjtBQUNBO0FBQ0EsUUFBTUMsZUFBZUwsU0FBU00saUJBQTlCO0FBQ0E7QUFDQSxRQUFNQyxZQUFZLElBQUlDLFVBQUosQ0FBZUgsWUFBZixDQUFsQjs7QUFFQSxRQUFNSSxRQUFReEMsT0FBT3FCLEtBQXJCO0FBQ0EsUUFBTW9CLFNBQVN6QyxPQUFPdUIsTUFBdEI7QUFDQSxRQUFNbUIsV0FBWUYsUUFBUUosWUFBVCxHQUF5QixDQUExQztBQUNBOztBQUVBLFFBQUlPLGtCQUFKO0FBQ0EsUUFBSUMsSUFBSSxDQUFSOztBQUVBLFFBQUlDLFVBQVUsS0FBZDtBQUNBLFFBQUlDLFdBQVcsS0FBZjtBQUNBLFFBQUlDLFdBQVcsS0FBZjtBQUNBLFFBQUlDLFdBQVcsS0FBZjs7QUFFQSxRQUFJQyxPQUFPLEtBQVg7QUFDQSxRQUFJQyxPQUFPLEtBQVg7QUFDQSxRQUFJQyxLQUFLLEtBQVQ7QUFDQSxRQUFJQyxRQUFRLEtBQVo7O0FBRUEsUUFBSUMsYUFBYSxDQUFqQjtBQUNBLFFBQUlDLGFBQWEsQ0FBakI7QUFDQSxRQUFJQyxXQUFXLENBQWY7QUFDQSxRQUFJQyxjQUFjLENBQWxCOztBQUVBLFFBQUlDLFVBQVUsSUFBZDs7QUFFQSxRQUFJQyxZQUFZLElBQWhCO0FBQ0EsUUFBSUMsYUFBYSxJQUFqQjtBQUNBLFFBQUlDLGFBQWEsSUFBakI7QUFDQSxRQUFJQyxhQUFhLElBQWpCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFTQyxXQUFULEdBQXVCO0FBQ3JCQyw0QkFBc0JELFdBQXRCO0FBQ0FsQixVQUFJLENBQUo7O0FBRUE7QUFDQWIsZUFBU2lDLG9CQUFULENBQThCMUIsU0FBOUIsRUFMcUIsQ0FLcUI7O0FBRTFDWCxpQkFBV3NDLFNBQVgsR0FBdUIsaUJBQXZCO0FBQ0F0QyxpQkFBV3VDLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIxQixLQUExQixFQUFpQ0MsTUFBakM7O0FBRUEsVUFBSTBCLFVBQUo7QUFBQSxVQUFPQyxVQUFQO0FBQUEsVUFBVUMsVUFBVjtBQUNBLFVBQUlDLE9BQU8sRUFBWCxDQVhxQixDQVdOOztBQUVmO0FBQ0EsVUFBSUMsZ0JBQWdCakMsVUFBVWtDLE1BQVYsR0FBbUIsQ0FBdkM7O0FBRUEsVUFBSUMsUUFBUW5DLFVBQVVvQyxLQUFWLENBQWdCLENBQWhCLEVBQW1CSCxhQUFuQixDQUFaO0FBQ0EsVUFBSUksU0FBU3JDLFVBQVVvQyxLQUFWLENBQWdCSCxhQUFoQixFQUErQkEsZ0JBQWdCLENBQS9DLENBQWI7QUFDQSxVQUFJSyxRQUFRdEMsVUFBVW9DLEtBQVYsQ0FBZ0JILGdCQUFnQixDQUFoQyxFQUFtQ0EsZ0JBQWdCLENBQW5ELENBQVo7QUFDQSxVQUFJTSxTQUFTdkMsVUFBVW9DLEtBQVYsQ0FBZ0JILGdCQUFnQixDQUFoQyxFQUFtQ0EsZ0JBQWdCLENBQW5ELENBQWI7O0FBRUEsVUFBSU8sU0FBUyxDQUFDTCxLQUFELEVBQVFFLE1BQVIsRUFBZ0JDLEtBQWhCLEVBQXVCQyxNQUF2QixDQUFiOztBQUVBLFdBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxPQUFPTixNQUEzQixFQUFtQ08sR0FBbkMsRUFBd0M7O0FBRXRDLFlBQUlDLFNBQVNGLE9BQU9DLENBQVAsQ0FBYjtBQUNBLGFBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEVBQXBCLEVBQXdCQSxHQUF4QixFQUE2QjtBQWdLM0I7O0FBaEsyQixjQWtLbEJDLFdBbEtrQixHQWtLM0IsU0FBU0EsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0I7QUFDdEJBLGNBQUVDLGNBQUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFJRCxFQUFFRSxPQUFGLEtBQWMsRUFBZCxJQUFvQnhDLE9BQXBCLElBQStCYSxTQUFuQyxFQUE4QztBQUM1Q0wsNEJBQWMsQ0FBZDtBQUNBSixxQkFBTyxJQUFQO0FBQ0FxQyx5QkFBVztBQUFBLHVCQUFNckMsT0FBTyxLQUFiO0FBQUEsZUFBWCxFQUErQixHQUEvQjtBQUNBSix3QkFBVSxLQUFWO0FBQ0FhLDBCQUFZLENBQUNBLFNBQWI7QUFDRDs7QUFFRCxnQkFBSXlCLEVBQUVFLE9BQUYsS0FBYyxFQUFkLElBQW9CLENBQUN4QyxPQUFyQixJQUFnQ2EsU0FBcEMsRUFBK0M7QUFDN0NMLDRCQUFjLENBQWQ7QUFDQUoscUJBQU8sSUFBUDtBQUNBcUMseUJBQVc7QUFBQSx1QkFBTXJDLE9BQU8sS0FBYjtBQUFBLGVBQVgsRUFBK0IsR0FBL0I7QUFDQVMsMEJBQVksQ0FBQ0EsU0FBYjtBQUNEOztBQUVELGdCQUFJeUIsRUFBRUUsT0FBRixLQUFjLEVBQWQsSUFBb0J2QyxRQUFwQixJQUFnQ2EsVUFBcEMsRUFBZ0Q7QUFDOUNMLDRCQUFjLENBQWQ7QUFDQUoscUJBQU8sSUFBUDtBQUNBb0MseUJBQVc7QUFBQSx1QkFBTXBDLE9BQU8sS0FBYjtBQUFBLGVBQVgsRUFBK0IsR0FBL0I7QUFDQUoseUJBQVcsS0FBWDtBQUNBYSwyQkFBYSxDQUFDQSxVQUFkO0FBQ0Q7O0FBRUQsZ0JBQUl3QixFQUFFRSxPQUFGLEtBQWMsRUFBZCxJQUFvQixDQUFDdkMsUUFBckIsSUFBaUNhLFVBQXJDLEVBQWlEO0FBQy9DTCw0QkFBYyxDQUFkO0FBQ0FKLHFCQUFPLElBQVA7QUFDQW9DLHlCQUFXO0FBQUEsdUJBQU1wQyxPQUFPLEtBQWI7QUFBQSxlQUFYLEVBQStCLEdBQS9CO0FBQ0FKLHlCQUFXLEtBQVg7QUFDQWEsMkJBQWEsQ0FBQ0EsVUFBZDtBQUNEOztBQUVEOztBQUVBLGdCQUFJd0IsRUFBRUUsT0FBRixLQUFjLEVBQWQsSUFBb0J0QyxRQUFwQixJQUFnQ2EsVUFBcEMsRUFBZ0Q7QUFDOUNMLDBCQUFZLENBQVo7QUFDQUosbUJBQUssSUFBTDtBQUNBbUMseUJBQVc7QUFBQSx1QkFBTW5DLEtBQUssS0FBWDtBQUFBLGVBQVgsRUFBNkIsR0FBN0I7QUFDQUoseUJBQVcsS0FBWDtBQUNBYSwyQkFBYSxDQUFDQSxVQUFkO0FBQ0Q7O0FBRUQsZ0JBQUl1QixFQUFFRSxPQUFGLEtBQWMsRUFBZCxJQUFvQixDQUFDdEMsUUFBckIsSUFBaUNhLFVBQXJDLEVBQWlEO0FBQy9DTCwwQkFBWSxDQUFaO0FBQ0FKLG1CQUFLLElBQUw7QUFDQW1DLHlCQUFXO0FBQUEsdUJBQU1uQyxLQUFLLEtBQVg7QUFBQSxlQUFYLEVBQTZCLEdBQTdCO0FBQ0FKLHlCQUFXLEtBQVg7QUFDQWEsMkJBQWEsQ0FBQ0EsVUFBZDtBQUNEO0FBQ0Q7O0FBRUEsZ0JBQUl1QixFQUFFRSxPQUFGLEtBQWMsRUFBZCxJQUFvQnJDLFFBQXBCLElBQWdDYSxVQUFwQyxFQUFnRDtBQUM5Q0wsNkJBQWUsQ0FBZjtBQUNBSixzQkFBUSxJQUFSO0FBQ0FrQyx5QkFBVztBQUFBLHVCQUFNbEMsUUFBUSxLQUFkO0FBQUEsZUFBWCxFQUFnQyxHQUFoQztBQUNBSix5QkFBVyxLQUFYO0FBQ0FhLDJCQUFhLENBQUNBLFVBQWQ7QUFDRDs7QUFFRCxnQkFBSXNCLEVBQUVFLE9BQUYsS0FBYyxFQUFkLElBQW9CLENBQUNyQyxRQUFyQixJQUFpQ2EsVUFBckMsRUFBaUQ7QUFDL0NMLDZCQUFlLENBQWY7QUFDQUosc0JBQVEsSUFBUjtBQUNBa0MseUJBQVc7QUFBQSx1QkFBTWxDLFFBQVEsS0FBZDtBQUFBLGVBQVgsRUFBZ0MsR0FBaEM7QUFDQUoseUJBQVcsS0FBWDtBQUNBYSwyQkFBYSxDQUFDQSxVQUFkO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELFdBbFQwQjs7QUFvVDNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBbFUyQixjQW9VbEIwQixPQXBVa0IsR0FvVTNCLFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ3JCLGdCQUFJQyxRQUFRLEdBQVo7QUFBQSxnQkFBbUI7QUFDakJDLHVCQUFXQyxZQUFZLFlBQVk7QUFDakMzRixxQkFBT3FCLEtBQVAsR0FBZXJCLE9BQU9xQixLQUF0QixDQURpQyxDQUNKO0FBQzdCSSxrQkFBSXdDLFNBQUosR0FBZ0IsdUJBQXVCd0IsS0FBdkIsR0FBK0IsR0FBL0M7QUFDQWhFLGtCQUFJbUUsSUFBSixHQUFXLGlCQUFYO0FBQ0FuRSxrQkFBSW9FLFFBQUosQ0FBYUwsSUFBYixFQUFtQixHQUFuQixFQUF3QixFQUF4QjtBQUNBQyxzQkFBUUEsUUFBUSxJQUFoQixDQUxpQyxDQUtYO0FBQ3RCLGtCQUFJQSxRQUFRLENBQVosRUFBZTtBQUNiaEUsb0JBQUlKLEtBQUosR0FBWUksSUFBSUosS0FBaEI7QUFDQXlFLDhCQUFjSixRQUFkO0FBQ0Q7QUFDRixhQVZVLEVBVVIsRUFWUSxDQURiO0FBWUQsV0FqVjBCOztBQXVhM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdmIyQixjQXlibEJLLFlBemJrQixHQXliM0IsU0FBU0EsWUFBVCxDQUFzQlAsSUFBdEIsRUFBNEI7QUFDMUIsZ0JBQUlDLFFBQVEsR0FBWjtBQUFBLGdCQUFtQjtBQUNqQkMsdUJBQVdDLFlBQVksWUFBWTtBQUNqQzNGLHFCQUFPcUIsS0FBUCxHQUFlckIsT0FBT3FCLEtBQXRCLENBRGlDLENBQ0o7QUFDN0JJLGtCQUFJd0MsU0FBSixHQUFnQix1QkFBdUJ3QixLQUF2QixHQUErQixHQUEvQztBQUNBaEUsa0JBQUltRSxJQUFKLEdBQVcsaUJBQVg7QUFDQW5FLGtCQUFJb0UsUUFBSixDQUFhTCxJQUFiLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCO0FBQ0FDLHNCQUFRQSxRQUFRLElBQWhCLENBTGlDLENBS1g7QUFDdEIsa0JBQUlBLFFBQVEsQ0FBWixFQUFlO0FBQ2JoRSxvQkFBSUosS0FBSixHQUFZSSxJQUFJSixLQUFoQjtBQUNBeUUsOEJBQWNKLFFBQWQ7QUFDRDtBQUNGLGFBVlUsRUFVUixFQVZRLENBRGI7QUFZRCxXQXRjMEI7O0FBQUU7QUFDN0IvQyxzQkFBYXFDLE9BQU9DLENBQVAsSUFBWSxHQUF6QixDQUQyQixDQUNJO0FBQy9CLGNBQUlGLE1BQU0sQ0FBTixJQUFXQyxPQUFPQyxDQUFQLElBQVksR0FBM0IsRUFBZ0M7QUFBRTtBQUNoQ2QsZ0JBQUksR0FBSjtBQUNBQyxnQkFBSSxDQUFKO0FBQ0FDLGdCQUFJLEdBQUo7QUFDRCxXQUpELE1BSU8sSUFBSVUsTUFBTSxDQUFOLElBQVdDLE9BQU9DLENBQVAsSUFBWSxHQUEzQixFQUFnQztBQUFFO0FBQ3ZDZCxnQkFBSSxFQUFKO0FBQ0FDLGdCQUFJLENBQUo7QUFDQUMsZ0JBQUksRUFBSjtBQUNELFdBSk0sTUFJQSxJQUFJVSxNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEdBQTNCLEVBQWdDO0FBQUU7QUFDdkNkLGdCQUFJLENBQUo7QUFDQUMsZ0JBQUksR0FBSjtBQUNBQyxnQkFBSSxHQUFKO0FBQ0QsV0FKTSxNQUlBLElBQUlVLE1BQU0sQ0FBTixJQUFXQyxPQUFPQyxDQUFQLElBQVksR0FBM0IsRUFBZ0M7QUFBRTtBQUN2Q2QsZ0JBQUksQ0FBSjtBQUNBQyxnQkFBSSxFQUFKO0FBQ0FDLGdCQUFJLEVBQUo7QUFDRCxXQUpNLE1BSUEsSUFBSVUsTUFBTSxDQUFOLElBQVdDLE9BQU9DLENBQVAsSUFBWSxHQUEzQixFQUFnQztBQUFFO0FBQ3ZDZCxnQkFBSSxHQUFKO0FBQ0FDLGdCQUFJLEdBQUo7QUFDQUMsZ0JBQUksRUFBSjtBQUNELFdBSk0sTUFJQSxJQUFJVSxNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEdBQTNCLEVBQWdDO0FBQUU7QUFDdkNkLGdCQUFJLENBQUo7QUFDQUMsZ0JBQUksRUFBSjtBQUNBQyxnQkFBSSxDQUFKO0FBQ0QsV0FKTSxNQUlBLElBQUlVLE1BQU0sQ0FBTixJQUFXQyxPQUFPQyxDQUFQLElBQVksRUFBM0IsRUFBK0I7QUFBRTtBQUN0Q2QsZ0JBQUksR0FBSjtBQUNBQyxnQkFBSSxHQUFKO0FBQ0FDLGdCQUFJLENBQUo7QUFDRCxXQUpNLE1BSUEsSUFBSVUsTUFBTSxDQUFOLElBQVdDLE9BQU9DLENBQVAsSUFBWSxFQUEzQixFQUErQjtBQUFFO0FBQ3RDZCxnQkFBSSxFQUFKO0FBQ0FDLGdCQUFJLEVBQUo7QUFDQUMsZ0JBQUksQ0FBSjtBQUNEO0FBQ0QxQyxxQkFBV3NDLFNBQVgsWUFBOEJFLENBQTlCLFNBQW1DQyxDQUFuQyxTQUF3Q0MsQ0FBeEM7QUFDQTFDLHFCQUFXdUMsUUFBWCxDQUFvQnRCLENBQXBCLEVBQXdCSCxTQUFTRSxTQUFqQyxFQUE2Q0QsUUFBN0MsRUFBdURDLFNBQXZEOztBQUVBQyxlQUFLRixXQUFXLEVBQWhCOztBQUVBO0FBQ0EsY0FBSXNELG1CQUFtQixJQUFJQyxLQUFKLEVBQXZCO0FBQ0FELDJCQUFpQmpGLEdBQWpCLEdBQXVCLG1DQUF2Qjs7QUFFQSxjQUFJbUYsbUJBQW1CLElBQUlELEtBQUosRUFBdkI7QUFDQUMsMkJBQWlCbkYsR0FBakIsR0FBdUIsbUNBQXZCOztBQUVBLGNBQUlvRixxQkFBcUIsSUFBSUYsS0FBSixFQUF6QjtBQUNBRSw2QkFBbUJwRixHQUFuQixHQUF5QixxQ0FBekI7O0FBRUEsY0FBSXFGLFlBQVksSUFBSUgsS0FBSixFQUFoQjtBQUNBRyxvQkFBVXJGLEdBQVYsR0FBZ0IsMkJBQWhCOztBQUVBLGNBQUlzRixtQkFBbUIsSUFBSUosS0FBSixFQUF2QjtBQUNBSSwyQkFBaUJ0RixHQUFqQixHQUF1QixtQ0FBdkI7O0FBRUEsY0FBSXVGLG1CQUFtQixJQUFJTCxLQUFKLEVBQXZCO0FBQ0FLLDJCQUFpQnZGLEdBQWpCLEdBQXVCLG1DQUF2Qjs7QUFFQSxjQUFJd0YscUJBQXFCLElBQUlOLEtBQUosRUFBekI7QUFDQU0sNkJBQW1CeEYsR0FBbkIsR0FBeUIscUNBQXpCOztBQUVBLGNBQUl5RixZQUFZLElBQUlQLEtBQUosRUFBaEI7QUFDQU8sb0JBQVV6RixHQUFWLEdBQWdCLDJCQUFoQjs7QUFFQSxjQUFJMEYsaUJBQWlCLElBQUlSLEtBQUosRUFBckI7QUFDQVEseUJBQWUxRixHQUFmLEdBQXFCLGlDQUFyQjs7QUFFQSxjQUFJMkYsaUJBQWlCLElBQUlULEtBQUosRUFBckI7QUFDQVMseUJBQWUzRixHQUFmLEdBQXFCLGlDQUFyQjs7QUFFQSxjQUFJNEYsbUJBQW1CLElBQUlWLEtBQUosRUFBdkI7QUFDQVUsMkJBQWlCNUYsR0FBakIsR0FBdUIsbUNBQXZCOztBQUVBLGNBQUk2RixVQUFVLElBQUlYLEtBQUosRUFBZDtBQUNBVyxrQkFBUTdGLEdBQVIsR0FBYyx5QkFBZDs7QUFFQSxjQUFJOEYsb0JBQW9CLElBQUlaLEtBQUosRUFBeEI7QUFDQVksNEJBQWtCOUYsR0FBbEIsR0FBd0Isb0NBQXhCOztBQUVBLGNBQUkrRixvQkFBb0IsSUFBSWIsS0FBSixFQUF4QjtBQUNBYSw0QkFBa0IvRixHQUFsQixHQUF3QixvQ0FBeEI7O0FBRUEsY0FBSWdHLHNCQUFzQixJQUFJZCxLQUFKLEVBQTFCO0FBQ0FjLDhCQUFvQmhHLEdBQXBCLEdBQTBCLHNDQUExQjs7QUFFQSxjQUFJaUcsYUFBYSxJQUFJZixLQUFKLEVBQWpCO0FBQ0FlLHFCQUFXakcsR0FBWCxHQUFpQiw0QkFBakI7O0FBRUE7QUFDQSxjQUFJa0csWUFBSjtBQUNBLGNBQUlDLE1BQU0sQ0FBVjtBQUNBLGVBQUssSUFBSWpDLEtBQUksQ0FBYixFQUFnQkEsS0FBSUQsT0FBT1IsTUFBM0IsRUFBbUNTLElBQW5DLEVBQXdDO0FBQ3RDaUMsbUJBQU9sQyxPQUFPQyxFQUFQLENBQVA7QUFDRDtBQUNEZ0MsZ0JBQU1DLE1BQU1sQyxPQUFPUixNQUFuQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBSTJDLFFBQVEsQ0FBWjtBQUNBLGVBQUssSUFBSWxDLE1BQUksQ0FBYixFQUFnQkEsTUFBSUgsT0FBTyxDQUFQLEVBQVVOLE1BQTlCLEVBQXNDUyxLQUF0QyxFQUEyQztBQUN6QyxnQkFBSUgsT0FBTyxDQUFQLEVBQVVHLEdBQVYsSUFBZSxHQUFuQixFQUF3QjtBQUN0QmtDLHVCQUFTLENBQVQ7O0FBRUEsa0JBQUlBLFNBQVMsQ0FBVCxJQUFjdEUsWUFBWSxLQUE5QixFQUFxQztBQUNuQ0EsMEJBQVUsSUFBVjtBQUNBeUMsMkJBQVc7QUFBQSx5QkFBTXpDLFVBQVUsS0FBaEI7QUFBQSxpQkFBWCxFQUFrQyxHQUFsQztBQUNBc0Usd0JBQVEsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjtBQUNEOztBQUVBO0FBQ0EsY0FBSUMsU0FBUyxDQUFiO0FBQ0EsZUFBSyxJQUFJbkMsTUFBSSxDQUFiLEVBQWdCQSxNQUFJSCxPQUFPLENBQVAsRUFBVU4sTUFBOUIsRUFBc0NTLEtBQXRDLEVBQTJDO0FBQ3pDLGdCQUFJSCxPQUFPLENBQVAsRUFBVUcsR0FBVixJQUFlLEdBQW5CLEVBQXdCO0FBQ3RCbUMsd0JBQVUsQ0FBVjs7QUFFQSxrQkFBSUEsVUFBVSxDQUFWLElBQWV0RSxhQUFhLEtBQWhDLEVBQXVDO0FBQ3JDQSwyQkFBVyxJQUFYO0FBQ0F3QywyQkFBVztBQUFBLHlCQUFNeEMsV0FBVyxLQUFqQjtBQUFBLGlCQUFYLEVBQW1DLEdBQW5DO0FBQ0FzRSx5QkFBUyxDQUFUO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Q7QUFDQTtBQUNBLGNBQUlDLFNBQVMsQ0FBYjtBQUNBLGVBQUssSUFBSXBDLE1BQUksQ0FBYixFQUFnQkEsTUFBSUgsT0FBTyxDQUFQLEVBQVVOLE1BQTlCLEVBQXNDUyxLQUF0QyxFQUEyQztBQUN6QyxnQkFBSUgsT0FBTyxDQUFQLEVBQVVHLEdBQVYsSUFBZSxHQUFuQixFQUF3QjtBQUN0Qm9DLHdCQUFVLENBQVY7O0FBRUEsa0JBQUlBLFVBQVUsQ0FBVixJQUFldEUsYUFBYSxLQUFoQyxFQUF1QztBQUNyQ0EsMkJBQVcsSUFBWDtBQUNBdUMsMkJBQVc7QUFBQSx5QkFBTXZDLFdBQVcsS0FBakI7QUFBQSxpQkFBWCxFQUFtQyxHQUFuQztBQUNBc0UseUJBQVMsQ0FBVDtBQUNEO0FBQ0Y7QUFDRjtBQUNEO0FBQ0E7QUFDQSxjQUFJQyxTQUFTLENBQWI7QUFDQSxlQUFLLElBQUlyQyxNQUFJLENBQWIsRUFBZ0JBLE1BQUlILE9BQU8sQ0FBUCxFQUFVTixNQUE5QixFQUFzQ1MsS0FBdEMsRUFBMkM7QUFDekMsZ0JBQUlILE9BQU8sQ0FBUCxFQUFVRyxHQUFWLElBQWUsRUFBbkIsRUFBdUI7QUFDckJxQyx3QkFBVSxDQUFWOztBQUVBLGtCQUFJQSxVQUFVLENBQVYsSUFBZXRFLGFBQWEsS0FBaEMsRUFBdUM7QUFDckNBLDJCQUFXLElBQVg7QUFDQXNDLDJCQUFXO0FBQUEseUJBQU10QyxXQUFXLEtBQWpCO0FBQUEsaUJBQVgsRUFBbUMsR0FBbkM7QUFDQXNFLHlCQUFTLENBQVQ7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7O0FBRUF4SCxtQkFBU3lILGdCQUFULENBQTBCLFNBQTFCLEVBQXFDckMsV0FBckM7O0FBb0xBLGNBQUlzQyxZQUFZbkUsYUFBYUcsV0FBYixHQUEyQkQsUUFBM0IsR0FBc0NELFVBQXREO0FBQ0E7QUFDQWlDLGtCQUFRaUMsU0FBUjs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQUl6QyxNQUFNLENBQU4sSUFBV2xDLE9BQWYsRUFBd0I7QUFDdEJwQixnQkFBSWdHLFNBQUosQ0FBY3pCLGdCQUFkLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDLEVBRHNCLENBQ21CO0FBQzFDLFdBRkQsTUFHSyxJQUFJakIsTUFBTSxDQUFOLElBQVcsQ0FBQ2xDLE9BQWhCLEVBQXlCO0FBQzVCcEIsZ0JBQUlnRyxTQUFKLENBQWNyQixTQUFkLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBRDRCLENBQ007QUFDbkM7O0FBRUQ7QUFDQTtBQUNBLGNBQUlyQixNQUFNLENBQU4sSUFBVzlCLElBQVgsSUFBbUJKLE9BQXZCLEVBQWdDO0FBQzlCcEIsZ0JBQUlnRyxTQUFKLENBQWN2QixnQkFBZCxFQUFnQyxFQUFoQyxFQUFvQyxFQUFwQztBQUNEO0FBQ0Q7O0FBRUEsY0FBSW5CLE1BQU0sQ0FBTixJQUFXOUIsSUFBWCxJQUFtQixDQUFDSixPQUF4QixFQUFpQztBQUMvQnBCLGdCQUFJZ0csU0FBSixDQUFjdEIsa0JBQWQsRUFBa0MsRUFBbEMsRUFBc0MsRUFBdEM7QUFDRDs7QUFFRDs7QUFFQSxjQUFJcEIsTUFBTSxDQUFOLElBQVdqQyxRQUFmLEVBQXlCO0FBQ3ZCckIsZ0JBQUlnRyxTQUFKLENBQWNwQixnQkFBZCxFQUFnQyxHQUFoQyxFQUFxQyxFQUFyQyxFQUR1QixDQUNtQjtBQUMzQyxXQUZELE1BR0ssSUFBSXRCLE1BQU0sQ0FBTixJQUFXLENBQUNqQyxRQUFoQixFQUEwQjtBQUM3QnJCLGdCQUFJZ0csU0FBSixDQUFjakIsU0FBZCxFQUF5QixHQUF6QixFQUE4QixFQUE5QixFQUQ2QixDQUNNO0FBQ3BDOztBQUVELGNBQUl6QixNQUFNLENBQU4sSUFBVzdCLElBQVgsSUFBbUJKLFFBQXZCLEVBQWlDO0FBQy9CckIsZ0JBQUlnRyxTQUFKLENBQWNuQixnQkFBZCxFQUFnQyxHQUFoQyxFQUFxQyxFQUFyQztBQUNEOztBQUVELGNBQUl2QixNQUFNLENBQU4sSUFBVzdCLElBQVgsSUFBbUIsQ0FBQ0osUUFBeEIsRUFBa0M7QUFDaENyQixnQkFBSWdHLFNBQUosQ0FBY2xCLGtCQUFkLEVBQWtDLEdBQWxDLEVBQXVDLEVBQXZDO0FBQ0Q7QUFDRDs7QUFFQSxjQUFJeEIsTUFBTSxDQUFOLElBQVdoQyxRQUFmLEVBQXlCO0FBQ3ZCdEIsZ0JBQUlnRyxTQUFKLENBQWNoQixjQUFkLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBRHVCLENBQ2lCO0FBQ3pDLFdBRkQsTUFHSyxJQUFJMUIsTUFBTSxDQUFOLElBQVcsQ0FBQ2hDLFFBQWhCLEVBQTBCO0FBQzdCdEIsZ0JBQUlnRyxTQUFKLENBQWNiLE9BQWQsRUFBdUIsR0FBdkIsRUFBNEIsRUFBNUIsRUFENkIsQ0FDSTtBQUNsQzs7QUFFRCxjQUFJN0IsTUFBTSxDQUFOLElBQVc1QixFQUFYLElBQWlCSixRQUFyQixFQUErQjtBQUM3QnRCLGdCQUFJZ0csU0FBSixDQUFjZixjQUFkLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DO0FBQ0Q7O0FBRUQsY0FBSTNCLE1BQU0sQ0FBTixJQUFXNUIsRUFBWCxJQUFpQixDQUFDSixRQUF0QixFQUFnQztBQUM5QnRCLGdCQUFJZ0csU0FBSixDQUFjZCxnQkFBZCxFQUFnQyxHQUFoQyxFQUFxQyxFQUFyQztBQUNEOztBQUVEOztBQUVBLGNBQUk1QixNQUFNLENBQU4sSUFBVy9CLFFBQWYsRUFBeUI7QUFDdkJ2QixnQkFBSWdHLFNBQUosQ0FBY1osaUJBQWQsRUFBaUMsSUFBakMsRUFBdUMsRUFBdkMsRUFEdUIsQ0FDcUI7QUFDN0MsV0FGRCxNQUdLLElBQUk5QixNQUFNLENBQU4sSUFBVyxDQUFDL0IsUUFBaEIsRUFBMEI7QUFDN0J2QixnQkFBSWdHLFNBQUosQ0FBY1QsVUFBZCxFQUEwQixJQUExQixFQUFnQyxFQUFoQyxFQUQ2QixDQUNRO0FBQ3RDOztBQUVELGNBQUlqQyxNQUFNLENBQU4sSUFBVzNCLEtBQVgsSUFBb0JKLFFBQXhCLEVBQWtDO0FBQ2hDdkIsZ0JBQUlnRyxTQUFKLENBQWNYLGlCQUFkLEVBQWlDLElBQWpDLEVBQXVDLEVBQXZDO0FBQ0Q7O0FBRUQsY0FBSS9CLE1BQU0sQ0FBTixJQUFXM0IsS0FBWCxJQUFvQixDQUFDSixRQUF6QixFQUFtQztBQUNqQ3ZCLGdCQUFJZ0csU0FBSixDQUFjVixtQkFBZCxFQUFtQyxJQUFuQyxFQUF5QyxFQUF6QztBQUNEOztBQXFDRCxjQUFJN0csTUFBTXdILE1BQVYsRUFBa0I7QUFDaEIzQix5QkFBYSxZQUFZeUIsU0FBekI7QUFDRDtBQUNGOztBQUVEOUQsb0JBQVksSUFBWjtBQUNBQyxxQkFBYSxJQUFiO0FBQ0FDLHFCQUFhLElBQWI7QUFDQUMscUJBQWEsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQzRCxVQUFNYyxJQUFOO0FBQ0E4QztBQUNEO0FBQ0YsQ0F6bkJELEM7Ozs7Ozs7Ozs7O0FDRkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlLWlucHV0XCIpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY2FudmFzX2JvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzX2JvdHRvbVwiKTtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc1wiKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLWluc3RydWN0aW9uc1wiKTtcbiAgY29uc3QgY2xvc2VJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWluc3RydWN0aW9uc1wiKTtcbiAgY29uc3QgZGVtbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbi1jb250YWN0XCIpO1xuICBjb25zdCBjbG9zZUNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWNvbnRhY3RcIik7XG5cbiAgaW5zdHJ1Y3Rpb25zQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIGNsb3NlSW5zdHJ1Y3Rpb25zLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IGluc3RydWN0aW9ucykge1xuICAgICAgaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IFxuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gY29udGFjdCkge1xuICAgICAgY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cbiAgY29udGFjdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgY2xvc2VDb250YWN0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGRlbW8ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGF1ZGlvLnNyYyA9IFwic3JjL2Fzc2V0cy9DeWJlcnB1bmsubXAzXCI7XG4gICAgcGxheSgpO1xuICB9XG5cbiAgZmlsZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcztcbiAgICBhdWRpby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKTsgXG4gICAgcGxheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheSgpIHtcblxuICAgIC8vIGNhbnZhcyBpbml0aWFsaXphdGlvblxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgLy8gc2Vjb25kIGNhbnZhc1xuICAgIGNhbnZhc19ib3R0b20ud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXNfYm90dG9tLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdHhfYm90dG9tID0gY2FudmFzX2JvdHRvbS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy9cblxuICAgIC8vIENyZWF0ZSBuZXcgYXVkaW8gY29udGV4dFxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgLy8gR2l2ZSB0aGUgYXVkaW8gY29udGV4dCBhbiBhdWRpbyBzb3VyY2VcbiAgICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgIC8vIENyZWF0ZSBhbmFseXplciBmb3IgYXVkaW8gY29udGV4dFxuICAgIGNvbnN0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgIC8vIENvbm5lY3QgdGhlIGF1ZGlvIHNvdXJjZSB0byB0aGUgYW5hbHl6ZXJcbiAgICBzcmMuY29ubmVjdChhbmFseXNlcik7XG4gICAgLy8gU2VuZCBzb3VuZCB0byBzcGVha2Vyc1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgLy8gVXNlIEZhc3QgRm91cmllciBUcmFuc2Zvcm0gYWxnb3JpdGhtIHRvIGdldCBmcmVxdWVuY3kgZG9tYWluIGluZm9ybWF0aW9uXG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgLy8gQ2FsY3VsYXRlcyB0aGUgbnVtYmVyIG9mIGRhdGEgdmFsdWVzIGF2YWlsYWJsZSBmb3IgdGhlIHZpc3VhbGl6YXRpb25cbiAgICBjb25zdCBidWZmZXJMZW5ndGggPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICAvLyBDcmVhdGVzIGFuIGFycmF5IHdpdGggbGVuZ3RoIG9mIGJ1ZmZlckxlbmd0aCB3aGVyZSBhbGwgdmFsdWVzIGFyZSAwXG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcblxuICAgIGNvbnN0IFdJRFRIID0gY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IEhFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogOTsgXG4gICAgLy8gY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogMjsgXG5cbiAgICBsZXQgYmFySGVpZ2h0O1xuICAgIGxldCB4ID0gMDtcblxuICAgIGxldCBsaWdodHVwID0gZmFsc2U7XG4gICAgbGV0IGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgbGV0IGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgbGV0IGxpZ2h0dXA0ID0gZmFsc2U7XG5cbiAgICBsZXQgTEVGVCA9IGZhbHNlO1xuICAgIGxldCBET1dOID0gZmFsc2U7XG4gICAgbGV0IFVQID0gZmFsc2U7XG4gICAgbGV0IFJJR0hUID0gZmFsc2U7XG5cbiAgICBsZXQgbGVmdFBvaW50cyA9IDA7XG4gICAgbGV0IGRvd25Qb2ludHMgPSAwO1xuICAgIGxldCB1cFBvaW50cyA9IDA7XG4gICAgbGV0IHJpZ2h0UG9pbnRzID0gMDtcblxuICAgIGxldCBwcmVzc2VkID0gbnVsbDtcblxuICAgIGxldCBpbmNvcnJlY3QgPSB0cnVlO1xuICAgIGxldCBpbmNvcnJlY3QyID0gdHJ1ZTtcbiAgICBsZXQgaW5jb3JyZWN0MyA9IHRydWU7XG4gICAgbGV0IGluY29ycmVjdDQgPSB0cnVlO1xuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlUHJlc3MpO1xuXG4gICAgLy8gMzcgbGVmdCwgMzggdXAsIDM5IHJpZ2h0LCA0MCBkb3duXG4gICAgLy8gZnVuY3Rpb24gaGFuZGxlUHJlc3MoZSkge1xuICAgIC8vICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAvLyAgICAgY2FzZSAzNzpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ2xlZnQnKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSA0MDpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ2Rvd24nKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSAzODpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ3VwJyk7XG4gICAgLy8gICAgICAgYnJlYWs7XG4gICAgLy8gICAgIGNhc2UgMzk6XG4gICAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckZyYW1lKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckZyYW1lKTtcbiAgICAgIHggPSAwO1xuICAgICAgXG4gICAgICAvLyBGaWxscyB0aGUgYXJyYXkgd2l0aCBmcmVxdWVuY3kgaW5mb3JtYXRpb24gaW5zdGVhZCBvZiB6ZXJvc1xuICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KTsgLy8gZnJlcXVlbmNpZXNcblxuICAgICAgY3R4X2JvdHRvbS5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4yKVwiO1xuICAgICAgY3R4X2JvdHRvbS5maWxsUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcblxuICAgICAgbGV0IHIsIGcsIGI7XG4gICAgICBsZXQgYmFycyA9IDQwOyAvLyAxMThcblxuICAgICAgLy8gc3BsaXQgdGhlIGRhdGEgYXJyYXkgaW4gNCBlcXVhbCBwYXJ0c1xuICAgICAgbGV0IHF1YXJ0ZXJMZW5ndGggPSBkYXRhQXJyYXkubGVuZ3RoIC8gNDtcblxuICAgICAgbGV0IGZpcnN0ID0gZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgICAgbGV0IHNlY29uZCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoLCBxdWFydGVyTGVuZ3RoICogMik7XG4gICAgICBsZXQgdGhpcmQgPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDIsIHF1YXJ0ZXJMZW5ndGggKiAzKTtcbiAgICAgIGxldCBmb3VydGggPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDMsIHF1YXJ0ZXJMZW5ndGggKiA0KTtcblxuICAgICAgbGV0IG5ld0FyciA9IFtmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoXTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdBcnIubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICBsZXQgc3ViQXJyID0gbmV3QXJyW2pdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8gMzBcbiAgICAgICAgICBiYXJIZWlnaHQgPSAoc3ViQXJyW2ldICogMi41KTsgLy8gMi41IC0gZ29vZFxuICAgICAgICAgIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDI1MCkgeyAvLyAyMTAsIDIzMCwgMjQwIChza2lubnkpXG4gICAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgICBnID0gMFxuICAgICAgICAgICAgYiA9IDE5MVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAyNTApIHsgLy8gMjEwLCAyMzBcbiAgICAgICAgICAgIHIgPSA3MVxuICAgICAgICAgICAgZyA9IDRcbiAgICAgICAgICAgIGIgPSA3MFxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPiAxOTApIHsgLy8gMTIwLCAxMzAsIDE0MCAoc2tpbm55KSwgMTgwXG4gICAgICAgICAgICByID0gMFxuICAgICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgICAgYiA9IDI1MVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPCAxOTApIHsgLy8gMTIwLCAxMzBcbiAgICAgICAgICAgIHIgPSAyXG4gICAgICAgICAgICBnID0gNjRcbiAgICAgICAgICAgIGIgPSA3OVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPiAxNzApIHsgLy8gMTAwLCAxMTAsIDEyMCAoc2tpbm55KVxuICAgICAgICAgICAgciA9IDIyM1xuICAgICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgICAgYiA9IDQyXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA8IDE3MCkgeyAvLyAxMDAsIDExMFxuICAgICAgICAgICAgciA9IDRcbiAgICAgICAgICAgIGcgPSA3MVxuICAgICAgICAgICAgYiA9IDlcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gNTApIHsgLy8gMzAsIDQwIChza2lubnkpXG4gICAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgICBnID0gMTY0XG4gICAgICAgICAgICBiID0gMFxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPCA1MCkgeyAvLyAzMFxuICAgICAgICAgICAgciA9IDcxXG4gICAgICAgICAgICBnID0gMTRcbiAgICAgICAgICAgIGIgPSA0XG4gICAgICAgICAgfVxuICAgICAgICAgIGN0eF9ib3R0b20uZmlsbFN0eWxlID0gYHJnYigke3J9LCR7Z30sJHtifSlgO1xuICAgICAgICAgIGN0eF9ib3R0b20uZmlsbFJlY3QoeCwgKEhFSUdIVCAtIGJhckhlaWdodCksIGJhcldpZHRoLCBiYXJIZWlnaHQpO1xuXG4gICAgICAgICAgeCArPSBiYXJXaWR0aCArIDEwO1xuXG4gICAgICAgICAgLy8gQ3JlYXRpbmcgYWxsIG9mIHRoZSBhcnJvd3NcbiAgICAgICAgICBsZXQgY29sb3JlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWRMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBwcmVzc2VkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGluY29ycmVjdExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGluY29ycmVjdExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X2xlZnRfYXJyb3cucG5nXCJcblxuICAgICAgICAgIGxldCBsZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBsZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBwcmVzc2VkRG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGluY29ycmVjdERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGluY29ycmVjdERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X2Rvd25fYXJyb3cucG5nXCJcblxuICAgICAgICAgIGxldCBkb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBkb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBwcmVzc2VkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGluY29ycmVjdFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpbmNvcnJlY3RVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfdXBfYXJyb3cucG5nXCJcblxuICAgICAgICAgIGxldCB1cEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgdXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvdXBfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkUmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBwcmVzc2VkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGluY29ycmVjdFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpbmNvcnJlY3RSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfcmlnaHRfYXJyb3cucG5nXCJcblxuICAgICAgICAgIGxldCByaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICAvLyBDYWxjdWxhdGluZyB0aGUgYXZlcmFnZSBcbiAgICAgICAgICBsZXQgYXZnO1xuICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gc3ViQXJyW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhdmcgPSBzdW0gLyBzdWJBcnIubGVuZ3RoO1xuXG4gICAgICAgICAgLy8gQ291bnRpbmcgNCBiYXJzXG5cbiAgICAgICAgICAvL25ld0FyclswXVtpXVxuICAgICAgICAgIC8vIGxldCBsaWdodHVwID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5ld0FyclswXVtpXSA+IDI1MCkge1xuICAgICAgICAgICAgICBjb3VudCArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudCA+PSA0ICYmIGxpZ2h0dXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwID0gZmFsc2UsIDc1MCk7XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50MiA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMV1baV0gPiAxOTApIHtcbiAgICAgICAgICAgICAgY291bnQyICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50MiA+PSA0ICYmIGxpZ2h0dXAyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXAyID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDIgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50MyA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMl1baV0gPiAxNzApIHtcbiAgICAgICAgICAgICAgY291bnQzICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50MyA+PSA0ICYmIGxpZ2h0dXAzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXAzID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDMgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50NCA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbM10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbM11baV0gPiA1MCkge1xuICAgICAgICAgICAgICBjb3VudDQgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQ0ID49IDQgJiYgbGlnaHR1cDQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cDQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cDQgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICAgIGNvdW50NCA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLy8vLy8gaWYgYXJyb3cgaXMgbGl0LCB0aGVuIGxvb2sgZm9yIGtleSBwcmVzc1xuXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlUHJlc3MpO1xuICAgICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVQcmVzcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlUHJlc3MoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gaWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgbGlnaHR1cCAmJiBpbmNvcnJlY3QpIHtcbiAgICAgICAgICAgIC8vICAgZGVidWdnZXJcbiAgICAgICAgICAgIC8vICAgbGVmdFBvaW50cyArPSAxO1xuICAgICAgICAgICAgLy8gICBMRUZUID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiBMRUZUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgIC8vICAgLy8gbGlnaHR1cCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gICBpbmNvcnJlY3QgPSAhaW5jb3JyZWN0O1xuICAgICAgICAgICAgLy8gfSBcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgbGlnaHR1cCAmJiBpbmNvcnJlY3QpIHtcbiAgICAgICAgICAgICAgbGVmdFBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBMRUZUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBMRUZUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QgPSAhaW5jb3JyZWN0O1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgIWxpZ2h0dXAgJiYgaW5jb3JyZWN0KSB7XG4gICAgICAgICAgICAgIGxlZnRQb2ludHMgLT0gMTtcbiAgICAgICAgICAgICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGluY29ycmVjdCA9ICFpbmNvcnJlY3Q7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiBsaWdodHVwMiAmJiBpbmNvcnJlY3QyKSB7XG4gICAgICAgICAgICAgIGRvd25Qb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgRE9XTiA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gRE9XTiA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDIgPSAhaW5jb3JyZWN0MjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgIWxpZ2h0dXAyICYmIGluY29ycmVjdDIpIHtcbiAgICAgICAgICAgICAgZG93blBvaW50cyAtPSAxO1xuICAgICAgICAgICAgICBET1dOID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBET1dOID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0MiA9ICFpbmNvcnJlY3QyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLy8gVVBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzggJiYgbGlnaHR1cDMgJiYgaW5jb3JyZWN0Mykge1xuICAgICAgICAgICAgICB1cFBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBVUCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVVAgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QzID0gIWluY29ycmVjdDM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmICFsaWdodHVwMyAmJiBpbmNvcnJlY3QzKSB7XG4gICAgICAgICAgICAgIHVwUG9pbnRzIC09IDE7XG4gICAgICAgICAgICAgIFVQID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBVUCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDMgPSAhaW5jb3JyZWN0MztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vXG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5ICYmIGxpZ2h0dXA0ICYmIGluY29ycmVjdDQpIHtcbiAgICAgICAgICAgICAgcmlnaHRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgUklHSFQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFJJR0hUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0NCA9ICFpbmNvcnJlY3Q0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiAhbGlnaHR1cDQgJiYgaW5jb3JyZWN0NCkge1xuICAgICAgICAgICAgICByaWdodFBvaW50cyAtPSAxO1xuICAgICAgICAgICAgICBSSUdIVCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gUklHSFQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwNCA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3Q0ID0gIWluY29ycmVjdDQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAvLyAgIGNhc2UgMzc6IFxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAnbGVmdCc7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgNDA6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9ICdkb3duJztcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgY2FzZSAzODpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gJ3VwJztcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgY2FzZSAzOTogXG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9ICdyaWdodCc7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIHN3aXRjaCAocHJlc3NlZCkge1xuICAgICAgICAgICAgLy8gICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBMRUZUID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICBpZiAoTEVGVCAmJiBsaWdodHVwKSB7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IGxlZnRQb2ludHMgKz0gMSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgICAgbGVmdFBvaW50cyArPSAxO1xuICAgICAgICAgICAgLy8gICAgICAgLy8gTEVGVCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gICAgICAgLy8gZS5rZXlDb2RlID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyAgICAgICAvLyBMRUZUID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhsZWZ0UG9pbnRzKVxuICAgICAgICAgICAgLy8gICAgICAgLy8gYnJlYWs7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChMRUZUICYmICFsaWdodHVwKSB7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IGxlZnRQb2ludHMgLT0gMSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgICAgbGVmdFBvaW50cyAtPSAxO1xuICAgICAgICAgICAgLy8gICAgICAgLy8gTEVGVCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gICAgICAgLy8gYnJlYWs7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gTEVGVCA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgIERPV04gPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIGlmIChET1dOICYmIGxpZ2h0dXAyKSB7XG4gICAgICAgICAgICAvLyAgICAgICBkb3duUG9pbnRzICs9IDFcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYgKERPV04gJiYgIWxpZ2h0dXAyKSB7XG4gICAgICAgICAgICAvLyAgICAgICBkb3duUG9pbnRzIC09IDFcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBET1dOID0gZmFsc2UsIDUwMClcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgIFVQID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICBpZiAoVVAgJiYgbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHVwUG9pbnRzICs9IDFcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYgKFVQICYmICFsaWdodHVwMykge1xuICAgICAgICAgICAgLy8gICAgICAgdXBQb2ludHMgLT0gMVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IFVQID0gZmFsc2UsIDUwMClcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgIFJJR0hUID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICBpZiAoUklHSFQgJiYgbGlnaHR1cDQpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHJpZ2h0UG9pbnRzICs9IDFcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYgKFJJR0hUICYmICFsaWdodHVwNCkge1xuICAgICAgICAgICAgLy8gICAgICAgcmlnaHRQb2ludHMgLT0gMVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IFJJR0hUID0gZmFsc2UsIDUwMClcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsZWZ0UG9pbnRzKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvd25Qb2ludHMpXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codXBQb2ludHMpXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmlnaHRQb2ludHMpXG5cbiAgICAgICAgICAvLy8vLy8gUE9JTlRTIEFSRSBTSE9XSU5HIFVQIEFORCBORVZFUiBESVNBUFBFQVJJTkdcbiAgICAgICAgICAvLyBjdHguZm9udCA9IFwiNDhweCBzZXJpZlwiO1xuICAgICAgICAgIC8vIGN0eC50ZXh0QmFzZWxpbmUgPSBcImhhbmdpbmdcIjtcbiAgICAgICAgICAvLyBjdHguZmlsbFRleHQobGVmdFBvaW50cywgMCwgMjAwKTtcbiAgICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgICAvLyB3aW5kb3cuYWxlcnQobGVmdFBvaW50cylcbiAgICAgICAgICAvLyBSZW5kZXJpbmcgY29sb3JlZCB2cyBncmF5IGFycm93c1xuICAgICAgICAgIC8vIGF2ZyA+IDExMFxuXG4gICAgICAgICAgZnVuY3Rpb24gZmFkZU91dCh0ZXh0KSB7XG4gICAgICAgICAgICBsZXQgYWxwaGEgPSAxLjAsICAgLy8gZnVsbCBvcGFjaXR5XG4gICAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDsgLy8gQ2xlYXJzIHRoZSBjYW52YXNcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMCwgMTQwLCBcIiArIGFscGhhICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMjVwdCBBcmlhbFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCA2MDAsIDUwKTtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFscGhhIC0gMC4wNTsgLy8gZGVjcmVhc2Ugb3BhY2l0eSAoZmFkZSBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgY3R4LndpZHRoID0gY3R4LndpZHRoO1xuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGFsbFBvaW50cyA9IGxlZnRQb2ludHMgKyByaWdodFBvaW50cyArIHVwUG9pbnRzICsgZG93blBvaW50cztcbiAgICAgICAgICAvLyBpZiAoIWFsbFBvaW50cykgYWxsUG9pbnRzID0gYWxsUG9pbnRzIC8gMTAwMDA7XG4gICAgICAgICAgZmFkZU91dChhbGxQb2ludHMpO1xuXG5cbiAgICAgICAgICAvLyBpZiAoaiA9PT0gMCAmJiBsaWdodHVwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRMZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgLy8gICAvLyBzZXRUaW1lb3V0KCgpID0+IGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApLCAzMDAwKVxuICAgICAgICAgIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiBjdHguY2xlYXJSZWN0KDEwLCAxMCwgMTIwLCAxMjApLCAzMDAwKVxuICAgICAgICAgIC8vIH0gXG4gICAgICAgICAgLy8gZWxzZSBpZiAoaiA9PT0gMCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkTGVmdEFycm93LCAxMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfSBcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBpbiB0aGUgY2FzZSBvZiBhIGtleSBwcmVzcywgc3VjY2Vzc2Z1bCBvciBub3RcbiAgICAgICAgICAvLyBpcyBMRUZUIGV2ZXIgZ2V0dGluZyBzZXQgdG8gZmFsc2U/XG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgTEVGVCAmJiBsaWdodHVwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWRMZWZ0QXJyb3csIDEwLCAxMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMCAmJiBMRUZUICYmICFsaWdodHVwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGluY29ycmVjdExlZnRBcnJvdywgMTAsIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vL1xuXG4gICAgICAgICAgaWYgKGogPT09IDEgJiYgbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZERvd25BcnJvdywgMzY1LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDEgJiYgIWxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDEgJiYgRE9XTiAmJiBsaWdodHVwMikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkRG93bkFycm93LCAzNjUsIDEwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMSAmJiBET1dOICYmICFsaWdodHVwMikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbmNvcnJlY3REb3duQXJyb3csIDM2NSwgMTApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuXG4gICAgICAgICAgaWYgKGogPT09IDIgJiYgbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZFVwQXJyb3csIDcyNiwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChqID09PSAyICYmICFsaWdodHVwMykge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMiAmJiBVUCAmJiBsaWdodHVwMykge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkVXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDIgJiYgVVAgJiYgIWxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGluY29ycmVjdFVwQXJyb3csIDcyNiwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMyAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChqID09PSAzICYmICFsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDMgJiYgUklHSFQgJiYgbGlnaHR1cDQpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZFJpZ2h0QXJyb3csIDExMDAsIDEwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMyAmJiBSSUdIVCAmJiAhbGlnaHR1cDQpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW5jb3JyZWN0UmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAvLyBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPiAxOTApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZERvd25BcnJvdywgMzY1LCAxMCk7XG4gICAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDE1MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShkb3duQXJyb3csIDM2NSwgMTApOyBcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAvLyBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPiAxNzApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZFVwQXJyb3csIDcyNiwgMTApO1xuICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAxMzApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgLy8gaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gNTApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZFJpZ2h0QXJyb3csIDExMDAsIDEwKTtcbiAgICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMzApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UocmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGN1cnJlbnRTY29yZSh0ZXh0KSB7XG4gICAgICAgICAgICBsZXQgYWxwaGEgPSAxLjAsICAgLy8gZnVsbCBvcGFjaXR5XG4gICAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDsgLy8gQ2xlYXJzIHRoZSBjYW52YXNcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMCwgMTQwLCBcIiArIGFscGhhICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNTBwdCBBcmlhbFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCA0NTAsIDMwMCk7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBhbHBoYSAtIDAuMDU7IC8vIGRlY3JlYXNlIG9wYWNpdHkgKGZhZGUgb3V0KVxuICAgICAgICAgICAgICAgIGlmIChhbHBoYSA8IDApIHtcbiAgICAgICAgICAgICAgICAgIGN0eC53aWR0aCA9IGN0eC53aWR0aDtcbiAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhdWRpby5wYXVzZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZShcIlNDT1JFOiBcIiArIGFsbFBvaW50cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgICAgIGluY29ycmVjdDMgPSB0cnVlO1xuICAgICAgICBpbmNvcnJlY3Q0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhdWRpby5wbGF5KCk7XG4gICAgcmVuZGVyRnJhbWUoKTtcbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=