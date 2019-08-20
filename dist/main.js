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

  instructionsButton.click();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImNhbnZhc19ib3R0b20iLCJhdWRpbyIsImluc3RydWN0aW9ucyIsImluc3RydWN0aW9uc0J1dHRvbiIsImNsb3NlSW5zdHJ1Y3Rpb25zIiwiZGVtbyIsImNvbnRhY3QiLCJjb250YWN0QnV0dG9uIiwiY2xvc2VDb250YWN0Iiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJzcmMiLCJwbGF5Iiwib25jaGFuZ2UiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImN0eF9ib3R0b20iLCJjb250ZXh0IiwiQXVkaW9Db250ZXh0IiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiYW5hbHlzZXIiLCJjcmVhdGVBbmFseXNlciIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImZmdFNpemUiLCJidWZmZXJMZW5ndGgiLCJmcmVxdWVuY3lCaW5Db3VudCIsImRhdGFBcnJheSIsIlVpbnQ4QXJyYXkiLCJXSURUSCIsIkhFSUdIVCIsImJhcldpZHRoIiwiYmFySGVpZ2h0IiwieCIsImxpZ2h0dXAiLCJsaWdodHVwMiIsImxpZ2h0dXAzIiwibGlnaHR1cDQiLCJMRUZUIiwiRE9XTiIsIlVQIiwiUklHSFQiLCJsZWZ0UG9pbnRzIiwiZG93blBvaW50cyIsInVwUG9pbnRzIiwicmlnaHRQb2ludHMiLCJwcmVzc2VkIiwiaW5jb3JyZWN0IiwiaW5jb3JyZWN0MiIsImluY29ycmVjdDMiLCJpbmNvcnJlY3Q0IiwicmVuZGVyRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiciIsImciLCJiIiwiYmFycyIsInF1YXJ0ZXJMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdCIsInNsaWNlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJuZXdBcnIiLCJqIiwic3ViQXJyIiwiaSIsImhhbmRsZVByZXNzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwidGV4dCIsImFscGhhIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImZvbnQiLCJmaWxsVGV4dCIsImNsZWFySW50ZXJ2YWwiLCJjdXJyZW50U2NvcmUiLCJjb2xvcmVkTGVmdEFycm93IiwiSW1hZ2UiLCJwcmVzc2VkTGVmdEFycm93IiwiaW5jb3JyZWN0TGVmdEFycm93IiwibGVmdEFycm93IiwiY29sb3JlZERvd25BcnJvdyIsInByZXNzZWREb3duQXJyb3ciLCJpbmNvcnJlY3REb3duQXJyb3ciLCJkb3duQXJyb3ciLCJjb2xvcmVkVXBBcnJvdyIsInByZXNzZWRVcEFycm93IiwiaW5jb3JyZWN0VXBBcnJvdyIsInVwQXJyb3ciLCJjb2xvcmVkUmlnaHRBcnJvdyIsInByZXNzZWRSaWdodEFycm93IiwiaW5jb3JyZWN0UmlnaHRBcnJvdyIsInJpZ2h0QXJyb3ciLCJhdmciLCJzdW0iLCJjb3VudCIsImNvdW50MiIsImNvdW50MyIsImNvdW50NCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGxQb2ludHMiLCJkcmF3SW1hZ2UiLCJwYXVzZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QUFJZ0csU0FBSixDQUFjWixpQkFBZCxFQUFpQyxJQUFqQyxFQUF1QyxFQUF2QyxFQUR1QixDQUNxQjtBQUM3QyxXQUZELE1BR0ssSUFBSTlCLE1BQU0sQ0FBTixJQUFXLENBQUMvQixRQUFoQixFQUEwQjtBQUM3QnZCLGdCQUFJZ0csU0FBSixDQUFjVCxVQUFkLEVBQTBCLElBQTFCLEVBQWdDLEVBQWhDLEVBRDZCLENBQ1E7QUFDdEM7O0FBRUQsY0FBSWpDLE1BQU0sQ0FBTixJQUFXM0IsS0FBWCxJQUFvQkosUUFBeEIsRUFBa0M7QUFDaEN2QixnQkFBSWdHLFNBQUosQ0FBY1gsaUJBQWQsRUFBaUMsSUFBakMsRUFBdUMsRUFBdkM7QUFDRDs7QUFFRCxjQUFJL0IsTUFBTSxDQUFOLElBQVczQixLQUFYLElBQW9CLENBQUNKLFFBQXpCLEVBQW1DO0FBQ2pDdkIsZ0JBQUlnRyxTQUFKLENBQWNWLG1CQUFkLEVBQW1DLElBQW5DLEVBQXlDLEVBQXpDO0FBQ0Q7O0FBcUNELGNBQUk5RyxNQUFNeUgsTUFBVixFQUFrQjtBQUNoQjNCLHlCQUFhLFlBQVl5QixTQUF6QjtBQUNEO0FBQ0Y7O0FBRUQ5RCxvQkFBWSxJQUFaO0FBQ0FDLHFCQUFhLElBQWI7QUFDQUMscUJBQWEsSUFBYjtBQUNBQyxxQkFBYSxJQUFiO0FBQ0Q7QUFDRjs7QUFFRDVELFVBQU1lLElBQU47QUFDQThDO0FBQ0Q7QUFDRixDQTNuQkQsQzs7Ozs7Ozs7Ozs7QUNGQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGUtaW5wdXRcIik7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBjYW52YXNfYm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNfYm90dG9tXCIpO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdHJ1Y3Rpb25zXCIpO1xuICBjb25zdCBpbnN0cnVjdGlvbnNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW4taW5zdHJ1Y3Rpb25zXCIpO1xuICBjb25zdCBjbG9zZUluc3RydWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtaW5zdHJ1Y3Rpb25zXCIpO1xuICBjb25zdCBkZW1vID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLWNvbnRhY3RcIik7XG4gIGNvbnN0IGNsb3NlQ29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtY29udGFjdFwiKTtcblxuICBpbnN0cnVjdGlvbnNCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgaW5zdHJ1Y3Rpb25zQnV0dG9uLmNsaWNrKCk7XG5cbiAgY2xvc2VJbnN0cnVjdGlvbnMub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICBpbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBjb250YWN0KSB7XG4gICAgICBjb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH1cblxuICBjb250YWN0QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICBjbG9zZUNvbnRhY3Qub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgZGVtby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgYXVkaW8uc3JjID0gXCJzcmMvYXNzZXRzL0N5YmVycHVuay5tcDNcIjtcbiAgICBwbGF5KCk7XG4gIH1cblxuICBmaWxlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgIGF1ZGlvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pOyBcbiAgICBwbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5KCkge1xuXG4gICAgLy8gY2FudmFzIGluaXRpYWxpemF0aW9uXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vXG5cbiAgICAvLyBzZWNvbmQgY2FudmFzXG4gICAgY2FudmFzX2JvdHRvbS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhc19ib3R0b20uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eF9ib3R0b20gPSBjYW52YXNfYm90dG9tLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgLy8gQ3JlYXRlIG5ldyBhdWRpbyBjb250ZXh0XG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAvLyBHaXZlIHRoZSBhdWRpbyBjb250ZXh0IGFuIGF1ZGlvIHNvdXJjZVxuICAgIGxldCBzcmMgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG4gICAgLy8gQ3JlYXRlIGFuYWx5emVyIGZvciBhdWRpbyBjb250ZXh0XG4gICAgY29uc3QgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgLy8gQ29ubmVjdCB0aGUgYXVkaW8gc291cmNlIHRvIHRoZSBhbmFseXplclxuICAgIHNyYy5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICAvLyBTZW5kIHNvdW5kIHRvIHNwZWFrZXJzXG4gICAgYW5hbHlzZXIuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAvLyBVc2UgRmFzdCBGb3VyaWVyIFRyYW5zZm9ybSBhbGdvcml0aG0gdG8gZ2V0IGZyZXF1ZW5jeSBkb21haW4gaW5mb3JtYXRpb25cbiAgICBhbmFseXNlci5mZnRTaXplID0gMTAyNDtcbiAgICAvLyBDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgZGF0YSB2YWx1ZXMgYXZhaWxhYmxlIGZvciB0aGUgdmlzdWFsaXphdGlvblxuICAgIGNvbnN0IGJ1ZmZlckxlbmd0aCA9IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIC8vIENyZWF0ZXMgYW4gYXJyYXkgd2l0aCBsZW5ndGggb2YgYnVmZmVyTGVuZ3RoIHdoZXJlIGFsbCB2YWx1ZXMgYXJlIDBcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuXG4gICAgY29uc3QgV0lEVEggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiA5OyBcbiAgICAvLyBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiAyOyBcblxuICAgIGxldCBiYXJIZWlnaHQ7XG4gICAgbGV0IHggPSAwO1xuXG4gICAgbGV0IGxpZ2h0dXAgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDQgPSBmYWxzZTtcblxuICAgIGxldCBMRUZUID0gZmFsc2U7XG4gICAgbGV0IERPV04gPSBmYWxzZTtcbiAgICBsZXQgVVAgPSBmYWxzZTtcbiAgICBsZXQgUklHSFQgPSBmYWxzZTtcblxuICAgIGxldCBsZWZ0UG9pbnRzID0gMDtcbiAgICBsZXQgZG93blBvaW50cyA9IDA7XG4gICAgbGV0IHVwUG9pbnRzID0gMDtcbiAgICBsZXQgcmlnaHRQb2ludHMgPSAwO1xuXG4gICAgbGV0IHByZXNzZWQgPSBudWxsO1xuXG4gICAgbGV0IGluY29ycmVjdCA9IHRydWU7XG4gICAgbGV0IGluY29ycmVjdDIgPSB0cnVlO1xuICAgIGxldCBpbmNvcnJlY3QzID0gdHJ1ZTtcbiAgICBsZXQgaW5jb3JyZWN0NCA9IHRydWU7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVQcmVzcyk7XG5cbiAgICAvLyAzNyBsZWZ0LCAzOCB1cCwgMzkgcmlnaHQsIDQwIGRvd25cbiAgICAvLyBmdW5jdGlvbiBoYW5kbGVQcmVzcyhlKSB7XG4gICAgLy8gICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIC8vICAgICBjYXNlIDM3OlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnbGVmdCcpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgICBjYXNlIDQwOlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnZG93bicpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgICBjYXNlIDM4OlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygndXAnKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSAzOTpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ3JpZ2h0Jyk7XG4gICAgLy8gICAgICAgYnJlYWs7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyRnJhbWUoKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyRnJhbWUpO1xuICAgICAgeCA9IDA7XG4gICAgICBcbiAgICAgIC8vIEZpbGxzIHRoZSBhcnJheSB3aXRoIGZyZXF1ZW5jeSBpbmZvcm1hdGlvbiBpbnN0ZWFkIG9mIHplcm9zXG4gICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShkYXRhQXJyYXkpOyAvLyBmcmVxdWVuY2llc1xuXG4gICAgICBjdHhfYm90dG9tLmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjIpXCI7XG4gICAgICBjdHhfYm90dG9tLmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuXG4gICAgICBsZXQgciwgZywgYjtcbiAgICAgIGxldCBiYXJzID0gNDA7IC8vIDExOFxuXG4gICAgICAvLyBzcGxpdCB0aGUgZGF0YSBhcnJheSBpbiA0IGVxdWFsIHBhcnRzXG4gICAgICBsZXQgcXVhcnRlckxlbmd0aCA9IGRhdGFBcnJheS5sZW5ndGggLyA0O1xuXG4gICAgICBsZXQgZmlyc3QgPSBkYXRhQXJyYXkuc2xpY2UoMCwgcXVhcnRlckxlbmd0aCk7XG4gICAgICBsZXQgc2Vjb25kID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGgsIHF1YXJ0ZXJMZW5ndGggKiAyKTtcbiAgICAgIGxldCB0aGlyZCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMiwgcXVhcnRlckxlbmd0aCAqIDMpO1xuICAgICAgbGV0IGZvdXJ0aCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMywgcXVhcnRlckxlbmd0aCAqIDQpO1xuXG4gICAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0Fyci5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyAzMFxuICAgICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpOyAvLyAyLjUgLSBnb29kXG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IC8vIDIxMCwgMjMwLCAyNDAgKHNraW5ueSlcbiAgICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICAgIGcgPSAwXG4gICAgICAgICAgICBiID0gMTkxXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyAvLyAyMTAsIDIzMFxuICAgICAgICAgICAgciA9IDcxXG4gICAgICAgICAgICBnID0gNFxuICAgICAgICAgICAgYiA9IDcwXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkgeyAvLyAxMjAsIDEzMCwgMTQwIChza2lubnkpLCAxODBcbiAgICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgICBiID0gMjUxXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA8IDE5MCkgeyAvLyAxMjAsIDEzMFxuICAgICAgICAgICAgciA9IDJcbiAgICAgICAgICAgIGcgPSA2NFxuICAgICAgICAgICAgYiA9IDc5XG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkgeyAvLyAxMDAsIDExMCwgMTIwIChza2lubnkpXG4gICAgICAgICAgICByID0gMjIzXG4gICAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgICBiID0gNDJcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldIDwgMTcwKSB7IC8vIDEwMCwgMTEwXG4gICAgICAgICAgICByID0gNFxuICAgICAgICAgICAgZyA9IDcxXG4gICAgICAgICAgICBiID0gOVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkgeyAvLyAzMCwgNDAgKHNraW5ueSlcbiAgICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICAgIGcgPSAxNjRcbiAgICAgICAgICAgIGIgPSAwXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA8IDUwKSB7IC8vIDMwXG4gICAgICAgICAgICByID0gNzFcbiAgICAgICAgICAgIGcgPSAxNFxuICAgICAgICAgICAgYiA9IDRcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4X2JvdHRvbS5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgICAgY3R4X2JvdHRvbS5maWxsUmVjdCh4LCAoSEVJR0hUIC0gYmFySGVpZ2h0KSwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG5cbiAgICAgICAgICB4ICs9IGJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgICAvLyBDcmVhdGluZyBhbGwgb2YgdGhlIGFycm93c1xuICAgICAgICAgIGxldCBjb2xvcmVkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29sb3JlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWRMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBwcmVzc2VkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgaW5jb3JyZWN0TGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW5jb3JyZWN0TGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfbGVmdF9hcnJvdy5wbmdcIlxuXG4gICAgICAgICAgbGV0IGxlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGxlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBjb2xvcmVkRG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29sb3JlZERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBwcmVzc2VkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgaW5jb3JyZWN0RG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW5jb3JyZWN0RG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfZG93bl9hcnJvdy5wbmdcIlxuXG4gICAgICAgICAgbGV0IGRvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGRvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvZG93bl9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBjb2xvcmVkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfdXBfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgaW5jb3JyZWN0VXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGluY29ycmVjdFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF91cF9hcnJvdy5wbmdcIlxuXG4gICAgICAgICAgbGV0IHVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICB1cEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBjb2xvcmVkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWRSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgaW5jb3JyZWN0UmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGluY29ycmVjdFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9yaWdodF9hcnJvdy5wbmdcIlxuXG4gICAgICAgICAgbGV0IHJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICByaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIC8vIENhbGN1bGF0aW5nIHRoZSBhdmVyYWdlIFxuICAgICAgICAgIGxldCBhdmc7XG4gICAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBzdWJBcnJbaV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGF2ZyA9IHN1bSAvIHN1YkFyci5sZW5ndGg7XG5cbiAgICAgICAgICAvLyBDb3VudGluZyA0IGJhcnNcblxuICAgICAgICAgIC8vbmV3QXJyWzBdW2ldXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXAgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzBdW2ldID4gMjUwKSB7XG4gICAgICAgICAgICAgIGNvdW50ICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50ID49IDQgJiYgbGlnaHR1cCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXAgPSBmYWxzZSwgNzUwKTtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICAvLyBsZXQgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgY291bnQyID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclsxXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5ld0FyclsxXVtpXSA+IDE5MCkge1xuICAgICAgICAgICAgICBjb3VudDIgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQyID49IDQgJiYgbGlnaHR1cDIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cDIgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICAgIGNvdW50MiA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBsZXQgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgY291bnQzID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclsyXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5ld0FyclsyXVtpXSA+IDE3MCkge1xuICAgICAgICAgICAgICBjb3VudDMgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQzID49IDQgJiYgbGlnaHR1cDMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cDMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cDMgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICAgIGNvdW50MyA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBsZXQgbGlnaHR1cDQgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgY291bnQ0ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclszXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5ld0FyclszXVtpXSA+IDUwKSB7XG4gICAgICAgICAgICAgIGNvdW50NCArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudDQgPj0gNCAmJiBsaWdodHVwNCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwNCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwNCA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgICAgY291bnQ0ID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vLy8vLyBpZiBhcnJvdyBpcyBsaXQsIHRoZW4gbG9vayBmb3Iga2V5IHByZXNzXG5cbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVQcmVzcyk7XG4gICAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZVByZXNzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVQcmVzcyhlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiBsaWdodHVwICYmIGluY29ycmVjdCkge1xuICAgICAgICAgICAgLy8gICBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gICBsZWZ0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAvLyAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgLy8gICAvLyBsaWdodHVwID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgIGluY29ycmVjdCA9ICFpbmNvcnJlY3Q7XG4gICAgICAgICAgICAvLyB9IFxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiBsaWdodHVwICYmIGluY29ycmVjdCkge1xuICAgICAgICAgICAgICBsZWZ0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdCA9ICFpbmNvcnJlY3Q7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiAhbGlnaHR1cCAmJiBpbmNvcnJlY3QpIHtcbiAgICAgICAgICAgICAgbGVmdFBvaW50cyAtPSAxO1xuICAgICAgICAgICAgICBMRUZUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBMRUZUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgaW5jb3JyZWN0ID0gIWluY29ycmVjdDtcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDQwICYmIGxpZ2h0dXAyICYmIGluY29ycmVjdDIpIHtcbiAgICAgICAgICAgICAgZG93blBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBET1dOID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBET1dOID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0MiA9ICFpbmNvcnJlY3QyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiAhbGlnaHR1cDIgJiYgaW5jb3JyZWN0Mikge1xuICAgICAgICAgICAgICBkb3duUG9pbnRzIC09IDE7XG4gICAgICAgICAgICAgIERPV04gPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IERPV04gPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMiA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QyID0gIWluY29ycmVjdDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vLyBVUFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCAmJiBsaWdodHVwMyAmJiBpbmNvcnJlY3QzKSB7XG4gICAgICAgICAgICAgIHVwUG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIFVQID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBVUCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDMgPSAhaW5jb3JyZWN0MztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzggJiYgIWxpZ2h0dXAzICYmIGluY29ycmVjdDMpIHtcbiAgICAgICAgICAgICAgdXBQb2ludHMgLT0gMTtcbiAgICAgICAgICAgICAgVVAgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFVQID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0MyA9ICFpbmNvcnJlY3QzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgJiYgbGlnaHR1cDQgJiYgaW5jb3JyZWN0NCkge1xuICAgICAgICAgICAgICByaWdodFBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBSSUdIVCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gUklHSFQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwNCA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3Q0ID0gIWluY29ycmVjdDQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5ICYmICFsaWdodHVwNCAmJiBpbmNvcnJlY3Q0KSB7XG4gICAgICAgICAgICAgIHJpZ2h0UG9pbnRzIC09IDE7XG4gICAgICAgICAgICAgIFJJR0hUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBSSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDQgPSAhaW5jb3JyZWN0NDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIC8vICAgY2FzZSAzNzogXG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9ICdsZWZ0JztcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgY2FzZSA0MDpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gJ2Rvd24nO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlIDM4OlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAndXAnO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlIDM5OiBcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gJ3JpZ2h0JztcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gc3dpdGNoIChwcmVzc2VkKSB7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIGlmIChMRUZUICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gbGVmdFBvaW50cyArPSAxLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgICBsZWZ0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBMRUZUID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBlLmtleUNvZGUgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIC8vICAgICAgIC8vIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKGxlZnRQb2ludHMpXG4gICAgICAgICAgICAvLyAgICAgICAvLyBicmVhaztcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYgKExFRlQgJiYgIWxpZ2h0dXApIHtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gbGVmdFBvaW50cyAtPSAxLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgICBsZWZ0UG9pbnRzIC09IDE7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBMRUZUID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBicmVhaztcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBMRUZUID0gZmFsc2UsIDUwMClcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgRE9XTiA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKERPV04gJiYgbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIC8vICAgICAgIGRvd25Qb2ludHMgKz0gMVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoRE9XTiAmJiAhbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIC8vICAgICAgIGRvd25Qb2ludHMgLT0gMVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IERPV04gPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlICd1cCc6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgVVAgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIGlmIChVUCAmJiBsaWdodHVwMykge1xuICAgICAgICAgICAgLy8gICAgICAgdXBQb2ludHMgKz0gMVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoVVAgJiYgIWxpZ2h0dXAzKSB7XG4gICAgICAgICAgICAvLyAgICAgICB1cFBvaW50cyAtPSAxXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gVVAgPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgUklHSFQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIGlmIChSSUdIVCAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgLy8gICAgICAgcmlnaHRQb2ludHMgKz0gMVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoUklHSFQgJiYgIWxpZ2h0dXA0KSB7XG4gICAgICAgICAgICAvLyAgICAgICByaWdodFBvaW50cyAtPSAxXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gUklHSFQgPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxlZnRQb2ludHMpXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZG93blBvaW50cylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1cFBvaW50cylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyaWdodFBvaW50cylcblxuICAgICAgICAgIC8vLy8vLyBQT0lOVFMgQVJFIFNIT1dJTkcgVVAgQU5EIE5FVkVSIERJU0FQUEVBUklOR1xuICAgICAgICAgIC8vIGN0eC5mb250ID0gXCI0OHB4IHNlcmlmXCI7XG4gICAgICAgICAgLy8gY3R4LnRleHRCYXNlbGluZSA9IFwiaGFuZ2luZ1wiO1xuICAgICAgICAgIC8vIGN0eC5maWxsVGV4dChsZWZ0UG9pbnRzLCAwLCAyMDApO1xuICAgICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAgIC8vIHdpbmRvdy5hbGVydChsZWZ0UG9pbnRzKVxuICAgICAgICAgIC8vIFJlbmRlcmluZyBjb2xvcmVkIHZzIGdyYXkgYXJyb3dzXG4gICAgICAgICAgLy8gYXZnID4gMTEwXG5cbiAgICAgICAgICBmdW5jdGlvbiBmYWRlT3V0KHRleHQpIHtcbiAgICAgICAgICAgIGxldCBhbHBoYSA9IDEuMCwgICAvLyBmdWxsIG9wYWNpdHlcbiAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoOyAvLyBDbGVhcnMgdGhlIGNhbnZhc1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAwLCAxNDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiYm9sZCAyNXB0IEFyaWFsXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIDYwMCwgNTApO1xuICAgICAgICAgICAgICAgIGFscGhhID0gYWxwaGEgLSAwLjA1OyAvLyBkZWNyZWFzZSBvcGFjaXR5IChmYWRlIG91dClcbiAgICAgICAgICAgICAgICBpZiAoYWxwaGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICBjdHgud2lkdGggPSBjdHgud2lkdGg7XG4gICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgYWxsUG9pbnRzID0gbGVmdFBvaW50cyArIHJpZ2h0UG9pbnRzICsgdXBQb2ludHMgKyBkb3duUG9pbnRzO1xuICAgICAgICAgIC8vIGlmICghYWxsUG9pbnRzKSBhbGxQb2ludHMgPSBhbGxQb2ludHMgLyAxMDAwMDtcbiAgICAgICAgICBmYWRlT3V0KGFsbFBvaW50cyk7XG5cblxuICAgICAgICAgIC8vIGlmIChqID09PSAwICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZExlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICAvLyAgIC8vIHNldFRpbWVvdXQoKCkgPT4gY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCksIDMwMDApXG4gICAgICAgICAgLy8gICAvLyBzZXRUaW1lb3V0KCgpID0+IGN0eC5jbGVhclJlY3QoMTAsIDEwLCAxMjAsIDEyMCksIDMwMDApXG4gICAgICAgICAgLy8gfSBcbiAgICAgICAgICAvLyBlbHNlIGlmIChqID09PSAwICYmICFsaWdodHVwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMCAmJiBsaWdodHVwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRMZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfSBcbiAgICAgICAgICBlbHNlIGlmIChqID09PSAwICYmICFsaWdodHVwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9IFxuICAgICAgICAgIFxuICAgICAgICAgIC8vIGluIHRoZSBjYXNlIG9mIGEga2V5IHByZXNzLCBzdWNjZXNzZnVsIG9yIG5vdFxuICAgICAgICAgIC8vIGlzIExFRlQgZXZlciBnZXR0aW5nIHNldCB0byBmYWxzZT9cbiAgICAgICAgICBpZiAoaiA9PT0gMCAmJiBMRUZUICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZExlZnRBcnJvdywgMTAsIDEwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cblxuICAgICAgICAgIGlmIChqID09PSAwICYmIExFRlQgJiYgIWxpZ2h0dXApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW5jb3JyZWN0TGVmdEFycm93LCAxMCwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMSAmJiBsaWdodHVwMikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkRG93bkFycm93LCAzNjUsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMSAmJiAhbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bkFycm93LCAzNjUsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMSAmJiBET1dOICYmIGxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWREb3duQXJyb3csIDM2NSwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAxICYmIERPV04gJiYgIWxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGluY29ycmVjdERvd25BcnJvdywgMzY1LCAxMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMiAmJiBsaWdodHVwMykge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDIgJiYgIWxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHVwQXJyb3csIDcyNiwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAyICYmIFVQICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWRVcEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMiAmJiBVUCAmJiAhbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW5jb3JyZWN0VXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9cblxuICAgICAgICAgIGlmIChqID09PSAzICYmIGxpZ2h0dXA0KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRSaWdodEFycm93LCAxMTAwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDMgJiYgIWxpZ2h0dXA0KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMyAmJiBSSUdIVCAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkUmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAzICYmIFJJR0hUICYmICFsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbmNvcnJlY3RSaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICAgIC8vIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkRG93bkFycm93LCAzNjUsIDEwKTtcbiAgICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMTUwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMCk7IFxuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDEzMCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAvLyBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAzMCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgZnVuY3Rpb24gY3VycmVudFNjb3JlKHRleHQpIHtcbiAgICAgICAgICAgIGxldCBhbHBoYSA9IDEuMCwgICAvLyBmdWxsIG9wYWNpdHlcbiAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoOyAvLyBDbGVhcnMgdGhlIGNhbnZhc1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAwLCAxNDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA1MHB0IEFyaWFsXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIDQ1MCwgMzAwKTtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFscGhhIC0gMC4wNTsgLy8gZGVjcmVhc2Ugb3BhY2l0eSAoZmFkZSBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgY3R4LndpZHRoID0gY3R4LndpZHRoO1xuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGF1ZGlvLnBhdXNlZCkge1xuICAgICAgICAgICAgY3VycmVudFNjb3JlKFwiU0NPUkU6IFwiICsgYWxsUG9pbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbmNvcnJlY3QgPSB0cnVlO1xuICAgICAgICBpbmNvcnJlY3QyID0gdHJ1ZTtcbiAgICAgICAgaW5jb3JyZWN0MyA9IHRydWU7XG4gICAgICAgIGluY29ycmVjdDQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICByZW5kZXJGcmFtZSgpO1xuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==