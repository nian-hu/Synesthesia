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

  file.onchange = function () {

    var files = this.files;
    audio.src = URL.createObjectURL(files[0]);

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
              ctx.font = "20pt Arial";
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

          var leftArrow = new Image();
          leftArrow.src = "src/assets/left_arrow.png";

          var coloredDownArrow = new Image();
          coloredDownArrow.src = "src/assets/colored_down_arrow.png";

          var pressedDownArrow = new Image();
          pressedDownArrow.src = "src/assets/pressed_down_arrow.png";

          var downArrow = new Image();
          downArrow.src = "src/assets/down_arrow.png";

          var coloredUpArrow = new Image();
          coloredUpArrow.src = "src/assets/colored_up_arrow.png";

          var pressedUpArrow = new Image();
          pressedUpArrow.src = "src/assets/pressed_up_arrow.png";

          var upArrow = new Image();
          upArrow.src = "src/assets/up_arrow.png";

          var coloredRightArrow = new Image();
          coloredRightArrow.src = "src/assets/colored_right_arrow.png";

          var pressedRightArrow = new Image();
          pressedRightArrow.src = "src/assets/pressed_right_arrow.png";

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
          if (j === 0 && LEFT) {
            ctx.drawImage(pressedLeftArrow, 10, 10);
          }
          //

          if (j === 1 && lightup2) {
            ctx.drawImage(coloredDownArrow, 365, 10); // 50
          } else if (j === 1 && !lightup2) {
            ctx.drawImage(downArrow, 365, 10); // 50
          }

          if (j === 1 && DOWN) {
            ctx.drawImage(pressedDownArrow, 365, 10);
          }
          //

          if (j === 2 && lightup3) {
            ctx.drawImage(coloredUpArrow, 726, 10); // 50
          } else if (j === 2 && !lightup3) {
            ctx.drawImage(upArrow, 726, 10); // 50
          }

          if (j === 2 && UP) {
            ctx.drawImage(pressedUpArrow, 726, 10);
          }

          //

          if (j === 3 && lightup4) {
            ctx.drawImage(coloredRightArrow, 1100, 10); // 50
          } else if (j === 3 && !lightup4) {
            ctx.drawImage(rightArrow, 1100, 10); // 50
          }

          if (j === 3 && RIGHT) {
            ctx.drawImage(pressedRightArrow, 1100, 10);
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
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImNhbnZhc19ib3R0b20iLCJhdWRpbyIsIm9uY2hhbmdlIiwiZmlsZXMiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjdHhfYm90dG9tIiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImFuYWx5c2VyIiwiY3JlYXRlQW5hbHlzZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJmZnRTaXplIiwiYnVmZmVyTGVuZ3RoIiwiZnJlcXVlbmN5QmluQ291bnQiLCJkYXRhQXJyYXkiLCJVaW50OEFycmF5IiwiV0lEVEgiLCJIRUlHSFQiLCJiYXJXaWR0aCIsImJhckhlaWdodCIsIngiLCJsaWdodHVwIiwibGlnaHR1cDIiLCJsaWdodHVwMyIsImxpZ2h0dXA0IiwiTEVGVCIsIkRPV04iLCJVUCIsIlJJR0hUIiwibGVmdFBvaW50cyIsImRvd25Qb2ludHMiLCJ1cFBvaW50cyIsInJpZ2h0UG9pbnRzIiwicHJlc3NlZCIsImluY29ycmVjdCIsImluY29ycmVjdDIiLCJpbmNvcnJlY3QzIiwiaW5jb3JyZWN0NCIsInJlbmRlckZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInIiLCJnIiwiYiIsImJhcnMiLCJxdWFydGVyTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwibmV3QXJyIiwiaiIsInN1YkFyciIsImkiLCJoYW5kbGVQcmVzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsInRleHQiLCJhbHBoYSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJmb250IiwiZmlsbFRleHQiLCJjbGVhckludGVydmFsIiwiY29sb3JlZExlZnRBcnJvdyIsIkltYWdlIiwicHJlc3NlZExlZnRBcnJvdyIsImxlZnRBcnJvdyIsImNvbG9yZWREb3duQXJyb3ciLCJwcmVzc2VkRG93bkFycm93IiwiZG93bkFycm93IiwiY29sb3JlZFVwQXJyb3ciLCJwcmVzc2VkVXBBcnJvdyIsInVwQXJyb3ciLCJjb2xvcmVkUmlnaHRBcnJvdyIsInByZXNzZWRSaWdodEFycm93IiwicmlnaHRBcnJvdyIsImF2ZyIsInN1bSIsImNvdW50IiwiY291bnQyIiwiY291bnQzIiwiY291bnQ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsbFBvaW50cyIsImRyYXdJbWFnZSIsInBsYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxl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QUosQ0FBY2IsY0FBZCxFQUE4QixHQUE5QixFQUFtQyxFQUFuQztBQUNEOztBQUVEOztBQUVBLGNBQUl4QixNQUFNLENBQU4sSUFBVy9CLFFBQWYsRUFBeUI7QUFDdkJ2QixnQkFBSTJGLFNBQUosQ0FBY1gsaUJBQWQsRUFBaUMsSUFBakMsRUFBdUMsRUFBdkMsRUFEdUIsQ0FDcUI7QUFDN0MsV0FGRCxNQUdLLElBQUkxQixNQUFNLENBQU4sSUFBVyxDQUFDL0IsUUFBaEIsRUFBMEI7QUFDN0J2QixnQkFBSTJGLFNBQUosQ0FBY1QsVUFBZCxFQUEwQixJQUExQixFQUFnQyxFQUFoQyxFQUQ2QixDQUNRO0FBQ3RDOztBQUVELGNBQUk1QixNQUFNLENBQU4sSUFBVzNCLEtBQWYsRUFBc0I7QUFDcEIzQixnQkFBSTJGLFNBQUosQ0FBY1YsaUJBQWQsRUFBaUMsSUFBakMsRUFBdUMsRUFBdkM7QUFDRDs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVEaEQsb0JBQVksSUFBWjtBQUNBQyxxQkFBYSxJQUFiO0FBQ0FDLHFCQUFhLElBQWI7QUFDQUMscUJBQWEsSUFBYjtBQUNEO0FBRUY7O0FBRUQ5QyxVQUFNc0csSUFBTjtBQUNBdkQ7QUFDRCxHQW5oQkQ7QUFvaEJELENBMWhCRCxDOzs7Ozs7Ozs7OztBQ0ZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zY3NzL21haW4uc2Nzcydcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZS1pbnB1dFwiKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGNhbnZhc19ib3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc19ib3R0b21cIik7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKTtcblxuICBmaWxlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgIGF1ZGlvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pOyBcblxuICAgIC8vIGNhbnZhcyBpbml0aWFsaXphdGlvblxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgLy8gc2Vjb25kIGNhbnZhc1xuICAgIGNhbnZhc19ib3R0b20ud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXNfYm90dG9tLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdHhfYm90dG9tID0gY2FudmFzX2JvdHRvbS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy9cblxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgbGV0IHNyYyA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbiAgICBjb25zdCBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcblxuICAgIHNyYy5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICBhbmFseXNlci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgLy8gYW5hbHlzZXIuZmZ0U2l6ZSA9IDE2Mzg0O1xuICAgIGFuYWx5c2VyLmZmdFNpemUgPSAxMDI0O1xuICAgIC8vIGFuYWx5c2VyLmZmdFNpemUgPSAyNTY7XG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcblxuICAgIGNvbnN0IFdJRFRIID0gY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IEhFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogOTsgXG4gICAgLy8gY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogMjsgXG5cbiAgICBsZXQgYmFySGVpZ2h0O1xuICAgIGxldCB4ID0gMDtcblxuICAgIGxldCBsaWdodHVwID0gZmFsc2U7XG4gICAgbGV0IGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgbGV0IGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgbGV0IGxpZ2h0dXA0ID0gZmFsc2U7XG5cbiAgICBsZXQgTEVGVCA9IGZhbHNlO1xuICAgIGxldCBET1dOID0gZmFsc2U7XG4gICAgbGV0IFVQID0gZmFsc2U7XG4gICAgbGV0IFJJR0hUID0gZmFsc2U7XG5cbiAgICBsZXQgbGVmdFBvaW50cyA9IDA7XG4gICAgbGV0IGRvd25Qb2ludHMgPSAwO1xuICAgIGxldCB1cFBvaW50cyA9IDA7XG4gICAgbGV0IHJpZ2h0UG9pbnRzID0gMDtcblxuICAgIGxldCBwcmVzc2VkID0gbnVsbDtcblxuICAgIGxldCBpbmNvcnJlY3QgPSB0cnVlO1xuICAgIGxldCBpbmNvcnJlY3QyID0gdHJ1ZTtcbiAgICBsZXQgaW5jb3JyZWN0MyA9IHRydWU7XG4gICAgbGV0IGluY29ycmVjdDQgPSB0cnVlO1xuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlUHJlc3MpO1xuXG4gICAgLy8gMzcgbGVmdCwgMzggdXAsIDM5IHJpZ2h0LCA0MCBkb3duXG4gICAgLy8gZnVuY3Rpb24gaGFuZGxlUHJlc3MoZSkge1xuICAgIC8vICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAvLyAgICAgY2FzZSAzNzpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ2xlZnQnKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSA0MDpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ2Rvd24nKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSAzODpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ3VwJyk7XG4gICAgLy8gICAgICAgYnJlYWs7XG4gICAgLy8gICAgIGNhc2UgMzk6XG4gICAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckZyYW1lKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckZyYW1lKTtcbiAgICAgIHggPSAwO1xuXG4gICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShkYXRhQXJyYXkpOyAvLyBmcmVxdWVuY2llc1xuXG4gICAgICBjdHhfYm90dG9tLmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjIpXCI7XG4gICAgICBjdHhfYm90dG9tLmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuXG4gICAgICBsZXQgciwgZywgYjtcbiAgICAgIGxldCBiYXJzID0gNDA7IC8vIDExOFxuXG4gICAgICAvLyBzcGxpdCB0aGUgZGF0YSBhcnJheSBpbiA0IGVxdWFsIHBhcnRzXG4gICAgICBsZXQgcXVhcnRlckxlbmd0aCA9IGRhdGFBcnJheS5sZW5ndGggLyA0O1xuXG4gICAgICBsZXQgZmlyc3QgPSBkYXRhQXJyYXkuc2xpY2UoMCwgcXVhcnRlckxlbmd0aCk7XG4gICAgICBsZXQgc2Vjb25kID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGgsIHF1YXJ0ZXJMZW5ndGggKiAyKTtcbiAgICAgIGxldCB0aGlyZCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMiwgcXVhcnRlckxlbmd0aCAqIDMpO1xuICAgICAgbGV0IGZvdXJ0aCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMywgcXVhcnRlckxlbmd0aCAqIDQpO1xuXG4gICAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0Fyci5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyAzMFxuICAgICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpOyAvLyAyLjUgLSBnb29kXG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IC8vIDIxMCwgMjMwLCAyNDAgKHNraW5ueSlcbiAgICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICAgIGcgPSAwXG4gICAgICAgICAgICBiID0gMTkxXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyAvLyAyMTAsIDIzMFxuICAgICAgICAgICAgciA9IDcxXG4gICAgICAgICAgICBnID0gNFxuICAgICAgICAgICAgYiA9IDcwXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkgeyAvLyAxMjAsIDEzMCwgMTQwIChza2lubnkpLCAxODBcbiAgICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgICBiID0gMjUxXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA8IDE5MCkgeyAvLyAxMjAsIDEzMFxuICAgICAgICAgICAgciA9IDJcbiAgICAgICAgICAgIGcgPSA2NFxuICAgICAgICAgICAgYiA9IDc5XG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkgeyAvLyAxMDAsIDExMCwgMTIwIChza2lubnkpXG4gICAgICAgICAgICByID0gMjIzXG4gICAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgICBiID0gNDJcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldIDwgMTcwKSB7IC8vIDEwMCwgMTEwXG4gICAgICAgICAgICByID0gNFxuICAgICAgICAgICAgZyA9IDcxXG4gICAgICAgICAgICBiID0gOVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkgeyAvLyAzMCwgNDAgKHNraW5ueSlcbiAgICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICAgIGcgPSAxNjRcbiAgICAgICAgICAgIGIgPSAwXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA8IDUwKSB7IC8vIDMwXG4gICAgICAgICAgICByID0gNzFcbiAgICAgICAgICAgIGcgPSAxNFxuICAgICAgICAgICAgYiA9IDRcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4X2JvdHRvbS5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgICAgY3R4X2JvdHRvbS5maWxsUmVjdCh4LCAoSEVJR0hUIC0gYmFySGVpZ2h0KSwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG5cbiAgICAgICAgICB4ICs9IGJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgICAvLyBDcmVhdGluZyBhbGwgb2YgdGhlIGFycm93c1xuICAgICAgICAgIGxldCBjb2xvcmVkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29sb3JlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWRMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBwcmVzc2VkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgbGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgbGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGNvbG9yZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBkb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBkb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBwcmVzc2VkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICB1cEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBjb2xvcmVkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWRSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgdGhlIGF2ZXJhZ2UgXG4gICAgICAgICAgbGV0IGF2ZztcbiAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YkFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHN1YkFycltpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXZnID0gc3VtIC8gc3ViQXJyLmxlbmd0aDtcblxuICAgICAgICAgIC8vIENvdW50aW5nIDQgYmFyc1xuXG4gICAgICAgICAgLy9uZXdBcnJbMF1baV1cbiAgICAgICAgICAvLyBsZXQgbGlnaHR1cCA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMF1baV0gPiAyNTApIHtcbiAgICAgICAgICAgICAgY291bnQgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQgPj0gNCAmJiBsaWdodHVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cCA9IGZhbHNlLCA3NTApO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cblxuICAgICAgICAgIC8vIGxldCBsaWdodHVwMiA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDIgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzFdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzFdW2ldID4gMTkwKSB7XG4gICAgICAgICAgICAgIGNvdW50MiArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudDIgPj0gNCAmJiBsaWdodHVwMiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwMiA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgICAgY291bnQyID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGxldCBsaWdodHVwMyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDMgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzJdW2ldID4gMTcwKSB7XG4gICAgICAgICAgICAgIGNvdW50MyArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudDMgPj0gNCAmJiBsaWdodHVwMyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwMyA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwMyA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgICAgY291bnQzID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGxldCBsaWdodHVwNCA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDQgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzNdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzNdW2ldID4gNTApIHtcbiAgICAgICAgICAgICAgY291bnQ0ICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50NCA+PSA0ICYmIGxpZ2h0dXA0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXA0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXA0ID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDQgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8vLy8vIGlmIGFycm93IGlzIGxpdCwgdGhlbiBsb29rIGZvciBrZXkgcHJlc3NcblxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZVByZXNzKTtcbiAgICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlUHJlc3MpO1xuICAgICAgICAgIFxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGlmIChlLmtleUNvZGUgPT09IDM3ICYmIGxpZ2h0dXAgJiYgaW5jb3JyZWN0KSB7XG4gICAgICAgICAgICAvLyAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyAgIGxlZnRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgIC8vICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgIHNldFRpbWVvdXQoKCkgPT4gTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAvLyAgIC8vIGxpZ2h0dXAgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgaW5jb3JyZWN0ID0gIWluY29ycmVjdDtcbiAgICAgICAgICAgIC8vIH0gXG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmIGxpZ2h0dXAgJiYgaW5jb3JyZWN0KSB7XG4gICAgICAgICAgICAgIGxlZnRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0ID0gIWluY29ycmVjdDtcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmICFsaWdodHVwICYmIGluY29ycmVjdCkge1xuICAgICAgICAgICAgICBsZWZ0UG9pbnRzIC09IDE7XG4gICAgICAgICAgICAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBpbmNvcnJlY3QgPSAhaW5jb3JyZWN0O1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgbGlnaHR1cDIgJiYgaW5jb3JyZWN0Mikge1xuICAgICAgICAgICAgICBkb3duUG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIERPV04gPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IERPV04gPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMiA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QyID0gIWluY29ycmVjdDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDQwICYmICFsaWdodHVwMiAmJiBpbmNvcnJlY3QyKSB7XG4gICAgICAgICAgICAgIGRvd25Qb2ludHMgLT0gMTtcbiAgICAgICAgICAgICAgRE9XTiA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gRE9XTiA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDIgPSAhaW5jb3JyZWN0MjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8vIFVQXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmIGxpZ2h0dXAzICYmIGluY29ycmVjdDMpIHtcbiAgICAgICAgICAgICAgdXBQb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgVVAgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFVQID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0MyA9ICFpbmNvcnJlY3QzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCAmJiAhbGlnaHR1cDMgJiYgaW5jb3JyZWN0Mykge1xuICAgICAgICAgICAgICB1cFBvaW50cyAtPSAxO1xuICAgICAgICAgICAgICBVUCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVVAgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QzID0gIWluY29ycmVjdDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1xuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiBsaWdodHVwNCAmJiBpbmNvcnJlY3Q0KSB7XG4gICAgICAgICAgICAgIHJpZ2h0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIFJJR0hUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBSSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDQgPSAhaW5jb3JyZWN0NDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgJiYgIWxpZ2h0dXA0ICYmIGluY29ycmVjdDQpIHtcbiAgICAgICAgICAgICAgcmlnaHRQb2ludHMgLT0gMTtcbiAgICAgICAgICAgICAgUklHSFQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFJJR0hUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0NCA9ICFpbmNvcnJlY3Q0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgLy8gICBjYXNlIDM3OiBcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gJ2xlZnQnO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlIDQwOlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAnZG93bic7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgMzg6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9ICd1cCc7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgMzk6IFxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAncmlnaHQnO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBzd2l0Y2ggKHByZXNzZWQpIHtcbiAgICAgICAgICAgIC8vICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKExFRlQgJiYgbGlnaHR1cCkge1xuICAgICAgICAgICAgLy8gICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBsZWZ0UG9pbnRzICs9IDEsIDUwMClcbiAgICAgICAgICAgIC8vICAgICAgIGxlZnRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGUua2V5Q29kZSA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gICAgICAgLy8gTEVGVCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gICAgICAgLy8gY29uc29sZS5sb2cobGVmdFBvaW50cylcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoTEVGVCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgICAgLy8gICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBsZWZ0UG9pbnRzIC09IDEsIDUwMClcbiAgICAgICAgICAgIC8vICAgICAgIGxlZnRQb2ludHMgLT0gMTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBET1dOID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICBpZiAoRE9XTiAmJiBsaWdodHVwMikge1xuICAgICAgICAgICAgLy8gICAgICAgZG93blBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChET1dOICYmICFsaWdodHVwMikge1xuICAgICAgICAgICAgLy8gICAgICAgZG93blBvaW50cyAtPSAxXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gRE9XTiA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBVUCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFVQICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICAvLyAgICAgICB1cFBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChVUCAmJiAhbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHVwUG9pbnRzIC09IDFcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBVUCA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBSSUdIVCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFJJR0hUICYmIGxpZ2h0dXA0KSB7XG4gICAgICAgICAgICAvLyAgICAgICByaWdodFBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChSSUdIVCAmJiAhbGlnaHR1cDQpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHJpZ2h0UG9pbnRzIC09IDFcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBSSUdIVCA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cobGVmdFBvaW50cylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb3duUG9pbnRzKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVwUG9pbnRzKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJpZ2h0UG9pbnRzKVxuXG4gICAgICAgICAgLy8vLy8vIFBPSU5UUyBBUkUgU0hPV0lORyBVUCBBTkQgTkVWRVIgRElTQVBQRUFSSU5HXG4gICAgICAgICAgLy8gY3R4LmZvbnQgPSBcIjQ4cHggc2VyaWZcIjtcbiAgICAgICAgICAvLyBjdHgudGV4dEJhc2VsaW5lID0gXCJoYW5naW5nXCI7XG4gICAgICAgICAgLy8gY3R4LmZpbGxUZXh0KGxlZnRQb2ludHMsIDAsIDIwMCk7XG4gICAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgLy8gd2luZG93LmFsZXJ0KGxlZnRQb2ludHMpXG4gICAgICAgICAgLy8gUmVuZGVyaW5nIGNvbG9yZWQgdnMgZ3JheSBhcnJvd3NcbiAgICAgICAgICAvLyBhdmcgPiAxMTBcblxuICAgICAgICAgIGZ1bmN0aW9uIGZhZGVPdXQodGV4dCkge1xuICAgICAgICAgICAgdmFyIGFscGhhID0gMS4wLCAgIC8vIGZ1bGwgb3BhY2l0eVxuICAgICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7IC8vIENsZWFycyB0aGUgY2FudmFzXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDAsIDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiMjBwdCBBcmlhbFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCA2MDAsIDUwKTtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFscGhhIC0gMC4wNTsgLy8gZGVjcmVhc2Ugb3BhY2l0eSAoZmFkZSBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgY3R4LndpZHRoID0gY3R4LndpZHRoO1xuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGFsbFBvaW50cyA9IGxlZnRQb2ludHMgKyByaWdodFBvaW50cyArIHVwUG9pbnRzICsgZG93blBvaW50cztcbiAgICAgICAgICAvLyBpZiAoIWFsbFBvaW50cykgYWxsUG9pbnRzID0gYWxsUG9pbnRzIC8gMTAwMDA7XG4gICAgICAgICAgZmFkZU91dChhbGxQb2ludHMpO1xuXG5cbiAgICAgICAgICAvLyBpZiAoaiA9PT0gMCAmJiBsaWdodHVwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRMZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgLy8gICAvLyBzZXRUaW1lb3V0KCgpID0+IGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApLCAzMDAwKVxuICAgICAgICAgIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiBjdHguY2xlYXJSZWN0KDEwLCAxMCwgMTIwLCAxMjApLCAzMDAwKVxuICAgICAgICAgIC8vIH0gXG4gICAgICAgICAgLy8gZWxzZSBpZiAoaiA9PT0gMCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkTGVmdEFycm93LCAxMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfSBcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBpbiB0aGUgY2FzZSBvZiBhIGtleSBwcmVzcywgc3VjY2Vzc2Z1bCBvciBub3RcbiAgICAgICAgICAvLyBpcyBMRUZUIGV2ZXIgZ2V0dGluZyBzZXQgdG8gZmFsc2U/XG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgTEVGVCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkTGVmdEFycm93LCAxMCwgMTApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuXG4gICAgICAgICAgaWYgKGogPT09IDEgJiYgbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZERvd25BcnJvdywgMzY1LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDEgJiYgIWxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDEgJiYgRE9XTikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkRG93bkFycm93LCAzNjUsIDEwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cblxuICAgICAgICAgIGlmIChqID09PSAyICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRVcEFycm93LCA3MjYsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMiAmJiAhbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDIgJiYgVVApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZFVwQXJyb3csIDcyNiwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMyAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChqID09PSAzICYmICFsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDMgJiYgUklHSFQpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZFJpZ2h0QXJyb3csIDExMDAsIDEwKTtcbiAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgLy8gaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWREb3duQXJyb3csIDM2NSwgMTApO1xuICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAxNTApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UoZG93bkFycm93LCAzNjUsIDEwKTsgXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgLy8gaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRVcEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMTMwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKHVwQXJyb3csIDcyNiwgMTApO1xuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRSaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDMwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuICAgICAgICBpbmNvcnJlY3QgPSB0cnVlO1xuICAgICAgICBpbmNvcnJlY3QyID0gdHJ1ZTtcbiAgICAgICAgaW5jb3JyZWN0MyA9IHRydWU7XG4gICAgICAgIGluY29ycmVjdDQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgYXVkaW8ucGxheSgpO1xuICAgIHJlbmRlckZyYW1lKCk7XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9