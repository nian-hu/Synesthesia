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
  var modalButton = document.getElementById("open-instructions");
  var closeInstructions = document.getElementById("close-instructions");
  var demo = document.getElementById("demo");

  modalButton.onclick = function () {
    instructions.style.display = "block";
  };

  closeInstructions.onclick = function () {
    instructions.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === instructions) {
      instructions.style.display = "none";
    }
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

    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    src.connect(analyser);
    analyser.connect(context.destination);

    // analyser.fftSize = 16384;
    analyser.fftSize = 1024;
    // analyser.fftSize = 256;
    var bufferLength = analyser.frequencyBinCount;
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
              ctx.fillStyle = "rgba(255, 0, 0, " + alpha + ")";
              ctx.font = "bold 25pt Arial";
              ctx.fillText(text, 600, 50);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2Nzcz8zNzFmIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImZpbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiY2FudmFzX2JvdHRvbSIsImF1ZGlvIiwiaW5zdHJ1Y3Rpb25zIiwibW9kYWxCdXR0b24iLCJjbG9zZUluc3RydWN0aW9ucyIsImRlbW8iLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwiZXZlbnQiLCJ0YXJnZXQiLCJzcmMiLCJwbGF5Iiwib25jaGFuZ2UiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImN0eF9ib3R0b20iLCJjb250ZXh0IiwiQXVkaW9Db250ZXh0IiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiYW5hbHlzZXIiLCJjcmVhdGVBbmFseXNlciIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImZmdFNpemUiLCJidWZmZXJMZW5ndGgiLCJmcmVxdWVuY3lCaW5Db3VudCIsImRhdGFBcnJheSIsIlVpbnQ4QXJyYXkiLCJXSURUSCIsIkhFSUdIVCIsImJhcldpZHRoIiwiYmFySGVpZ2h0IiwieCIsImxpZ2h0dXAiLCJsaWdodHVwMiIsImxpZ2h0dXAzIiwibGlnaHR1cDQiLCJMRUZUIiwiRE9XTiIsIlVQIiwiUklHSFQiLCJsZWZ0UG9pbnRzIiwiZG93blBvaW50cyIsInVwUG9pbnRzIiwicmlnaHRQb2ludHMiLCJwcmVzc2VkIiwiaW5jb3JyZWN0IiwiaW5jb3JyZWN0MiIsImluY29ycmVjdDMiLCJpbmNvcnJlY3Q0IiwicmVuZGVyRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiciIsImciLCJiIiwiYmFycyIsInF1YXJ0ZXJMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdCIsInNsaWNlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJuZXdBcnIiLCJqIiwic3ViQXJyIiwiaSIsImhhbmRsZVByZXNzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwidGV4dCIsImFscGhhIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImZvbnQiLCJmaWxsVGV4dCIsImNsZWFySW50ZXJ2YWwiLCJjb2xvcmVkTGVmdEFycm93IiwiSW1hZ2UiLCJwcmVzc2VkTGVmdEFycm93IiwiaW5jb3JyZWN0TGVmdEFycm93IiwibGVmdEFycm93IiwiY29sb3JlZERvd25BcnJvdyIsInByZXNzZWREb3duQXJyb3ciLCJpbmNvcnJlY3REb3duQXJyb3ciLCJkb3duQXJyb3ciLCJjb2xvcmVkVXBBcnJvdyIsInByZXNzZWRVcEFycm93IiwiaW5jb3JyZWN0VXBBcnJvdyIsInVwQXJyb3ciLCJjb2xvcmVkUmlnaHRBcnJvdyIsInByZXNzZWRSaWdodEFycm93IiwiaW5jb3JyZWN0UmlnaHRBcnJvdyIsInJpZ2h0QXJyb3ciLCJhdmciLCJzdW0iLCJjb3VudCIsImNvdW50MiIsImNvdW50MyIsImNvdW50NCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGxQb2ludHMiLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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LENBQ1E7QUFDdEM7O0FBRUQsY0FBSWhDLE1BQU0sQ0FBTixJQUFXM0IsS0FBWCxJQUFvQkosUUFBeEIsRUFBa0M7QUFDaEN2QixnQkFBSStGLFNBQUosQ0FBY1gsaUJBQWQsRUFBaUMsSUFBakMsRUFBdUMsRUFBdkM7QUFDRDs7QUFFRCxjQUFJOUIsTUFBTSxDQUFOLElBQVczQixLQUFYLElBQW9CLENBQUNKLFFBQXpCLEVBQW1DO0FBQ2pDdkIsZ0JBQUkrRixTQUFKLENBQWNWLG1CQUFkLEVBQW1DLElBQW5DLEVBQXlDLEVBQXpDO0FBQ0Q7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFFRHBELG9CQUFZLElBQVo7QUFDQUMscUJBQWEsSUFBYjtBQUNBQyxxQkFBYSxJQUFiO0FBQ0FDLHFCQUFhLElBQWI7QUFDRDtBQUNGOztBQUVEeEQsVUFBTVcsSUFBTjtBQUNBOEM7QUFDRDtBQUNGLENBbGxCRCxDOzs7Ozs7Ozs7OztBQ0ZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zY3NzL21haW4uc2Nzcydcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZS1pbnB1dFwiKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGNhbnZhc19ib3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc19ib3R0b21cIik7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvbnNcIik7XG4gIGNvbnN0IG1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLWluc3RydWN0aW9uc1wiKTtcbiAgY29uc3QgY2xvc2VJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWluc3RydWN0aW9uc1wiKTtcbiAgY29uc3QgZGVtbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKTtcblxuICBtb2RhbEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICBjbG9zZUluc3RydWN0aW9ucy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBpbnN0cnVjdGlvbnMpIHtcbiAgICAgIGluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cbiAgZGVtby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgYXVkaW8uc3JjID0gXCJzcmMvYXNzZXRzL0N5YmVycHVuay5tcDNcIjtcbiAgICBwbGF5KCk7XG4gIH1cblxuICBmaWxlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgIGF1ZGlvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pOyBcbiAgICBwbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5KCkge1xuXG4gICAgLy8gY2FudmFzIGluaXRpYWxpemF0aW9uXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vXG5cbiAgICAvLyBzZWNvbmQgY2FudmFzXG4gICAgY2FudmFzX2JvdHRvbS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhc19ib3R0b20uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eF9ib3R0b20gPSBjYW52YXNfYm90dG9tLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgIGNvbnN0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuXG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAvLyBhbmFseXNlci5mZnRTaXplID0gMTYzODQ7XG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgLy8gYW5hbHlzZXIuZmZ0U2l6ZSA9IDI1NjtcbiAgICBjb25zdCBidWZmZXJMZW5ndGggPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuXG4gICAgY29uc3QgV0lEVEggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiA5OyBcbiAgICAvLyBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiAyOyBcblxuICAgIGxldCBiYXJIZWlnaHQ7XG4gICAgbGV0IHggPSAwO1xuXG4gICAgbGV0IGxpZ2h0dXAgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDQgPSBmYWxzZTtcblxuICAgIGxldCBMRUZUID0gZmFsc2U7XG4gICAgbGV0IERPV04gPSBmYWxzZTtcbiAgICBsZXQgVVAgPSBmYWxzZTtcbiAgICBsZXQgUklHSFQgPSBmYWxzZTtcblxuICAgIGxldCBsZWZ0UG9pbnRzID0gMDtcbiAgICBsZXQgZG93blBvaW50cyA9IDA7XG4gICAgbGV0IHVwUG9pbnRzID0gMDtcbiAgICBsZXQgcmlnaHRQb2ludHMgPSAwO1xuXG4gICAgbGV0IHByZXNzZWQgPSBudWxsO1xuXG4gICAgbGV0IGluY29ycmVjdCA9IHRydWU7XG4gICAgbGV0IGluY29ycmVjdDIgPSB0cnVlO1xuICAgIGxldCBpbmNvcnJlY3QzID0gdHJ1ZTtcbiAgICBsZXQgaW5jb3JyZWN0NCA9IHRydWU7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVQcmVzcyk7XG5cbiAgICAvLyAzNyBsZWZ0LCAzOCB1cCwgMzkgcmlnaHQsIDQwIGRvd25cbiAgICAvLyBmdW5jdGlvbiBoYW5kbGVQcmVzcyhlKSB7XG4gICAgLy8gICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIC8vICAgICBjYXNlIDM3OlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnbGVmdCcpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgICBjYXNlIDQwOlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnZG93bicpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgICBjYXNlIDM4OlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygndXAnKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSAzOTpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ3JpZ2h0Jyk7XG4gICAgLy8gICAgICAgYnJlYWs7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyRnJhbWUoKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyRnJhbWUpO1xuICAgICAgeCA9IDA7XG5cbiAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSk7IC8vIGZyZXF1ZW5jaWVzXG5cbiAgICAgIGN0eF9ib3R0b20uZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMilcIjtcbiAgICAgIGN0eF9ib3R0b20uZmlsbFJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG5cbiAgICAgIGxldCByLCBnLCBiO1xuICAgICAgbGV0IGJhcnMgPSA0MDsgLy8gMTE4XG5cbiAgICAgIC8vIHNwbGl0IHRoZSBkYXRhIGFycmF5IGluIDQgZXF1YWwgcGFydHNcbiAgICAgIGxldCBxdWFydGVyTGVuZ3RoID0gZGF0YUFycmF5Lmxlbmd0aCAvIDQ7XG5cbiAgICAgIGxldCBmaXJzdCA9IGRhdGFBcnJheS5zbGljZSgwLCBxdWFydGVyTGVuZ3RoKTtcbiAgICAgIGxldCBzZWNvbmQgPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCwgcXVhcnRlckxlbmd0aCAqIDIpO1xuICAgICAgbGV0IHRoaXJkID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAyLCBxdWFydGVyTGVuZ3RoICogMyk7XG4gICAgICBsZXQgZm91cnRoID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAzLCBxdWFydGVyTGVuZ3RoICogNCk7XG5cbiAgICAgIGxldCBuZXdBcnIgPSBbZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aF07XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3QXJyLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgbGV0IHN1YkFyciA9IG5ld0FycltqXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vIDMwXG4gICAgICAgICAgYmFySGVpZ2h0ID0gKHN1YkFycltpXSAqIDIuNSk7IC8vIDIuNSAtIGdvb2RcbiAgICAgICAgICBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAyNTApIHsgLy8gMjEwLCAyMzAsIDI0MCAoc2tpbm55KVxuICAgICAgICAgICAgciA9IDI1NVxuICAgICAgICAgICAgZyA9IDBcbiAgICAgICAgICAgIGIgPSAxOTFcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMjUwKSB7IC8vIDIxMCwgMjMwXG4gICAgICAgICAgICByID0gNzFcbiAgICAgICAgICAgIGcgPSA0XG4gICAgICAgICAgICBiID0gNzBcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7IC8vIDEyMCwgMTMwLCAxNDAgKHNraW5ueSksIDE4MFxuICAgICAgICAgICAgciA9IDBcbiAgICAgICAgICAgIGcgPSAyNTVcbiAgICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldIDwgMTkwKSB7IC8vIDEyMCwgMTMwXG4gICAgICAgICAgICByID0gMlxuICAgICAgICAgICAgZyA9IDY0XG4gICAgICAgICAgICBiID0gNzlcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7IC8vIDEwMCwgMTEwLCAxMjAgKHNraW5ueSlcbiAgICAgICAgICAgIHIgPSAyMjNcbiAgICAgICAgICAgIGcgPSAyNTVcbiAgICAgICAgICAgIGIgPSA0MlxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxNzApIHsgLy8gMTAwLCAxMTBcbiAgICAgICAgICAgIHIgPSA0XG4gICAgICAgICAgICBnID0gNzFcbiAgICAgICAgICAgIGIgPSA5XG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7IC8vIDMwLCA0MCAoc2tpbm55KVxuICAgICAgICAgICAgciA9IDI1NVxuICAgICAgICAgICAgZyA9IDE2NFxuICAgICAgICAgICAgYiA9IDBcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldIDwgNTApIHsgLy8gMzBcbiAgICAgICAgICAgIHIgPSA3MVxuICAgICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgICBiID0gNFxuICAgICAgICAgIH1cbiAgICAgICAgICBjdHhfYm90dG9tLmZpbGxTdHlsZSA9IGByZ2IoJHtyfSwke2d9LCR7Yn0pYDtcbiAgICAgICAgICBjdHhfYm90dG9tLmZpbGxSZWN0KHgsIChIRUlHSFQgLSBiYXJIZWlnaHQpLCBiYXJXaWR0aCwgYmFySGVpZ2h0KTtcblxuICAgICAgICAgIHggKz0gYmFyV2lkdGggKyAxMDtcblxuICAgICAgICAgIC8vIENyZWF0aW5nIGFsbCBvZiB0aGUgYXJyb3dzXG4gICAgICAgICAgbGV0IGNvbG9yZWRMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWRMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBpbmNvcnJlY3RMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpbmNvcnJlY3RMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9sZWZ0X2Fycm93LnBuZ1wiXG5cbiAgICAgICAgICBsZXQgbGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgbGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGNvbG9yZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBpbmNvcnJlY3REb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpbmNvcnJlY3REb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9kb3duX2Fycm93LnBuZ1wiXG5cbiAgICAgICAgICBsZXQgZG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgZG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGNvbG9yZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29sb3JlZFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfdXBfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBwcmVzc2VkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBpbmNvcnJlY3RVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW5jb3JyZWN0VXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X3VwX2Fycm93LnBuZ1wiXG5cbiAgICAgICAgICBsZXQgdXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGNvbG9yZWRSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29sb3JlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBwcmVzc2VkUmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBpbmNvcnJlY3RSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW5jb3JyZWN0UmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X3JpZ2h0X2Fycm93LnBuZ1wiXG5cbiAgICAgICAgICBsZXQgcmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgdGhlIGF2ZXJhZ2UgXG4gICAgICAgICAgbGV0IGF2ZztcbiAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YkFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHN1YkFycltpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXZnID0gc3VtIC8gc3ViQXJyLmxlbmd0aDtcblxuICAgICAgICAgIC8vIENvdW50aW5nIDQgYmFyc1xuXG4gICAgICAgICAgLy9uZXdBcnJbMF1baV1cbiAgICAgICAgICAvLyBsZXQgbGlnaHR1cCA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMF1baV0gPiAyNTApIHtcbiAgICAgICAgICAgICAgY291bnQgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQgPj0gNCAmJiBsaWdodHVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cCA9IGZhbHNlLCA3NTApO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cblxuICAgICAgICAgIC8vIGxldCBsaWdodHVwMiA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDIgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzFdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzFdW2ldID4gMTkwKSB7XG4gICAgICAgICAgICAgIGNvdW50MiArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudDIgPj0gNCAmJiBsaWdodHVwMiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwMiA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgICAgY291bnQyID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGxldCBsaWdodHVwMyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDMgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzJdW2ldID4gMTcwKSB7XG4gICAgICAgICAgICAgIGNvdW50MyArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudDMgPj0gNCAmJiBsaWdodHVwMyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwMyA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwMyA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgICAgY291bnQzID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGxldCBsaWdodHVwNCA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDQgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzNdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzNdW2ldID4gNTApIHtcbiAgICAgICAgICAgICAgY291bnQ0ICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50NCA+PSA0ICYmIGxpZ2h0dXA0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXA0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXA0ID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDQgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8vLy8vIGlmIGFycm93IGlzIGxpdCwgdGhlbiBsb29rIGZvciBrZXkgcHJlc3NcblxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZVByZXNzKTtcbiAgICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlUHJlc3MpO1xuICAgICAgICAgIFxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGlmIChlLmtleUNvZGUgPT09IDM3ICYmIGxpZ2h0dXAgJiYgaW5jb3JyZWN0KSB7XG4gICAgICAgICAgICAvLyAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyAgIGxlZnRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgIC8vICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgIHNldFRpbWVvdXQoKCkgPT4gTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAvLyAgIC8vIGxpZ2h0dXAgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgaW5jb3JyZWN0ID0gIWluY29ycmVjdDtcbiAgICAgICAgICAgIC8vIH0gXG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmIGxpZ2h0dXAgJiYgaW5jb3JyZWN0KSB7XG4gICAgICAgICAgICAgIGxlZnRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0ID0gIWluY29ycmVjdDtcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmICFsaWdodHVwICYmIGluY29ycmVjdCkge1xuICAgICAgICAgICAgICBsZWZ0UG9pbnRzIC09IDE7XG4gICAgICAgICAgICAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBpbmNvcnJlY3QgPSAhaW5jb3JyZWN0O1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgbGlnaHR1cDIgJiYgaW5jb3JyZWN0Mikge1xuICAgICAgICAgICAgICBkb3duUG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIERPV04gPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IERPV04gPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMiA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QyID0gIWluY29ycmVjdDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDQwICYmICFsaWdodHVwMiAmJiBpbmNvcnJlY3QyKSB7XG4gICAgICAgICAgICAgIGRvd25Qb2ludHMgLT0gMTtcbiAgICAgICAgICAgICAgRE9XTiA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gRE9XTiA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDIgPSAhaW5jb3JyZWN0MjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8vIFVQXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmIGxpZ2h0dXAzICYmIGluY29ycmVjdDMpIHtcbiAgICAgICAgICAgICAgdXBQb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgVVAgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFVQID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0MyA9ICFpbmNvcnJlY3QzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCAmJiAhbGlnaHR1cDMgJiYgaW5jb3JyZWN0Mykge1xuICAgICAgICAgICAgICB1cFBvaW50cyAtPSAxO1xuICAgICAgICAgICAgICBVUCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVVAgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QzID0gIWluY29ycmVjdDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1xuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiBsaWdodHVwNCAmJiBpbmNvcnJlY3Q0KSB7XG4gICAgICAgICAgICAgIHJpZ2h0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIFJJR0hUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBSSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDQgPSAhaW5jb3JyZWN0NDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgJiYgIWxpZ2h0dXA0ICYmIGluY29ycmVjdDQpIHtcbiAgICAgICAgICAgICAgcmlnaHRQb2ludHMgLT0gMTtcbiAgICAgICAgICAgICAgUklHSFQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFJJR0hUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0NCA9ICFpbmNvcnJlY3Q0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgLy8gICBjYXNlIDM3OiBcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gJ2xlZnQnO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlIDQwOlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAnZG93bic7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgMzg6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9ICd1cCc7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgMzk6IFxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAncmlnaHQnO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBzd2l0Y2ggKHByZXNzZWQpIHtcbiAgICAgICAgICAgIC8vICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKExFRlQgJiYgbGlnaHR1cCkge1xuICAgICAgICAgICAgLy8gICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBsZWZ0UG9pbnRzICs9IDEsIDUwMClcbiAgICAgICAgICAgIC8vICAgICAgIGxlZnRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGUua2V5Q29kZSA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gICAgICAgLy8gTEVGVCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gICAgICAgLy8gY29uc29sZS5sb2cobGVmdFBvaW50cylcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoTEVGVCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgICAgLy8gICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBsZWZ0UG9pbnRzIC09IDEsIDUwMClcbiAgICAgICAgICAgIC8vICAgICAgIGxlZnRQb2ludHMgLT0gMTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBET1dOID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICBpZiAoRE9XTiAmJiBsaWdodHVwMikge1xuICAgICAgICAgICAgLy8gICAgICAgZG93blBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChET1dOICYmICFsaWdodHVwMikge1xuICAgICAgICAgICAgLy8gICAgICAgZG93blBvaW50cyAtPSAxXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gRE9XTiA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBVUCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFVQICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICAvLyAgICAgICB1cFBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChVUCAmJiAhbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHVwUG9pbnRzIC09IDFcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBVUCA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBSSUdIVCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFJJR0hUICYmIGxpZ2h0dXA0KSB7XG4gICAgICAgICAgICAvLyAgICAgICByaWdodFBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChSSUdIVCAmJiAhbGlnaHR1cDQpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHJpZ2h0UG9pbnRzIC09IDFcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBSSUdIVCA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cobGVmdFBvaW50cylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb3duUG9pbnRzKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVwUG9pbnRzKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJpZ2h0UG9pbnRzKVxuXG4gICAgICAgICAgLy8vLy8vIFBPSU5UUyBBUkUgU0hPV0lORyBVUCBBTkQgTkVWRVIgRElTQVBQRUFSSU5HXG4gICAgICAgICAgLy8gY3R4LmZvbnQgPSBcIjQ4cHggc2VyaWZcIjtcbiAgICAgICAgICAvLyBjdHgudGV4dEJhc2VsaW5lID0gXCJoYW5naW5nXCI7XG4gICAgICAgICAgLy8gY3R4LmZpbGxUZXh0KGxlZnRQb2ludHMsIDAsIDIwMCk7XG4gICAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgLy8gd2luZG93LmFsZXJ0KGxlZnRQb2ludHMpXG4gICAgICAgICAgLy8gUmVuZGVyaW5nIGNvbG9yZWQgdnMgZ3JheSBhcnJvd3NcbiAgICAgICAgICAvLyBhdmcgPiAxMTBcblxuICAgICAgICAgIGZ1bmN0aW9uIGZhZGVPdXQodGV4dCkge1xuICAgICAgICAgICAgdmFyIGFscGhhID0gMS4wLCAgIC8vIGZ1bGwgb3BhY2l0eVxuICAgICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7IC8vIENsZWFycyB0aGUgY2FudmFzXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDAsIDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiYm9sZCAyNXB0IEFyaWFsXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIDYwMCwgNTApO1xuICAgICAgICAgICAgICAgIGFscGhhID0gYWxwaGEgLSAwLjA1OyAvLyBkZWNyZWFzZSBvcGFjaXR5IChmYWRlIG91dClcbiAgICAgICAgICAgICAgICBpZiAoYWxwaGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICBjdHgud2lkdGggPSBjdHgud2lkdGg7XG4gICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgYWxsUG9pbnRzID0gbGVmdFBvaW50cyArIHJpZ2h0UG9pbnRzICsgdXBQb2ludHMgKyBkb3duUG9pbnRzO1xuICAgICAgICAgIC8vIGlmICghYWxsUG9pbnRzKSBhbGxQb2ludHMgPSBhbGxQb2ludHMgLyAxMDAwMDtcbiAgICAgICAgICBmYWRlT3V0KGFsbFBvaW50cyk7XG5cblxuICAgICAgICAgIC8vIGlmIChqID09PSAwICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZExlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICAvLyAgIC8vIHNldFRpbWVvdXQoKCkgPT4gY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCksIDMwMDApXG4gICAgICAgICAgLy8gICAvLyBzZXRUaW1lb3V0KCgpID0+IGN0eC5jbGVhclJlY3QoMTAsIDEwLCAxMjAsIDEyMCksIDMwMDApXG4gICAgICAgICAgLy8gfSBcbiAgICAgICAgICAvLyBlbHNlIGlmIChqID09PSAwICYmICFsaWdodHVwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMCAmJiBsaWdodHVwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRMZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfSBcbiAgICAgICAgICBlbHNlIGlmIChqID09PSAwICYmICFsaWdodHVwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9IFxuICAgICAgICAgIFxuICAgICAgICAgIC8vIGluIHRoZSBjYXNlIG9mIGEga2V5IHByZXNzLCBzdWNjZXNzZnVsIG9yIG5vdFxuICAgICAgICAgIC8vIGlzIExFRlQgZXZlciBnZXR0aW5nIHNldCB0byBmYWxzZT9cbiAgICAgICAgICBpZiAoaiA9PT0gMCAmJiBMRUZUICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZExlZnRBcnJvdywgMTAsIDEwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cblxuICAgICAgICAgIGlmIChqID09PSAwICYmIExFRlQgJiYgIWxpZ2h0dXApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW5jb3JyZWN0TGVmdEFycm93LCAxMCwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMSAmJiBsaWdodHVwMikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkRG93bkFycm93LCAzNjUsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMSAmJiAhbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bkFycm93LCAzNjUsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMSAmJiBET1dOICYmIGxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWREb3duQXJyb3csIDM2NSwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAxICYmIERPV04gJiYgIWxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGluY29ycmVjdERvd25BcnJvdywgMzY1LCAxMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMiAmJiBsaWdodHVwMykge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDIgJiYgIWxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHVwQXJyb3csIDcyNiwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAyICYmIFVQICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWRVcEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMiAmJiBVUCAmJiAhbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW5jb3JyZWN0VXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9cblxuICAgICAgICAgIGlmIChqID09PSAzICYmIGxpZ2h0dXA0KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRSaWdodEFycm93LCAxMTAwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDMgJiYgIWxpZ2h0dXA0KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMyAmJiBSSUdIVCAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkUmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAzICYmIFJJR0hUICYmICFsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbmNvcnJlY3RSaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICAgIC8vIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkRG93bkFycm93LCAzNjUsIDEwKTtcbiAgICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMTUwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMCk7IFxuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDEzMCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAvLyBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAzMCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgICAgIGluY29ycmVjdDMgPSB0cnVlO1xuICAgICAgICBpbmNvcnJlY3Q0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhdWRpby5wbGF5KCk7XG4gICAgcmVuZGVyRnJhbWUoKTtcbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=