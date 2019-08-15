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
    var incorrect = null;

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
            if (e.keyCode === 37 && lightup) {
              leftPoints += 1;
              LEFT = true;
              setTimeout(function () {
                return LEFT = false;
              }, 250);
              lightup = false;
            }

            if (e.keyCode === 40 && lightup2) {
              downPoints += 1;
              DOWN = true;
              setTimeout(function () {
                return DOWN = false;
              }, 250);
              lightup2 = false;
            }

            if (e.keyCode === 38 && lightup3) {
              upPoints += 1;
              UP = true;
              setTimeout(function () {
                return UP = false;
              }, 250);
              lightup3 = false;
            }

            if (e.keyCode === 39 && lightup4) {
              rightPoints += 1;
              RIGHT = true;
              setTimeout(function () {
                return RIGHT = false;
              }, 250);
              lightup4 = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImNhbnZhc19ib3R0b20iLCJhdWRpbyIsIm9uY2hhbmdlIiwiZmlsZXMiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjdHhfYm90dG9tIiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImFuYWx5c2VyIiwiY3JlYXRlQW5hbHlzZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJmZnRTaXplIiwiYnVmZmVyTGVuZ3RoIiwiZnJlcXVlbmN5QmluQ291bnQiLCJkYXRhQXJyYXkiLCJVaW50OEFycmF5IiwiV0lEVEgiLCJIRUlHSFQiLCJiYXJXaWR0aCIsImJhckhlaWdodCIsIngiLCJsaWdodHVwIiwibGlnaHR1cDIiLCJsaWdodHVwMyIsImxpZ2h0dXA0IiwiTEVGVCIsIkRPV04iLCJVUCIsIlJJR0hUIiwibGVmdFBvaW50cyIsImRvd25Qb2ludHMiLCJ1cFBvaW50cyIsInJpZ2h0UG9pbnRzIiwicHJlc3NlZCIsImluY29ycmVjdCIsInJlbmRlckZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInIiLCJnIiwiYiIsImJhcnMiLCJxdWFydGVyTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwibmV3QXJyIiwiaiIsInN1YkFyciIsImkiLCJoYW5kbGVQcmVzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsInRleHQiLCJhbHBoYSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJmb250IiwiZmlsbFRleHQiLCJjbGVhckludGVydmFsIiwiY29sb3JlZExlZnRBcnJvdyIsIkltYWdlIiwicHJlc3NlZExlZnRBcnJvdyIsImxlZnRBcnJvdyIsImNvbG9yZWREb3duQXJyb3ciLCJwcmVzc2VkRG93bkFycm93IiwiZG93bkFycm93IiwiY29sb3JlZFVwQXJyb3ciLCJwcmVzc2VkVXBBcnJvdyIsInVwQXJyb3ciLCJjb2xvcmVkUmlnaHRBcnJvdyIsInByZXNzZWRSaWdodEFycm93IiwicmlnaHRBcnJvdyIsImF2ZyIsInN1bSIsImNvdW50IiwiY291bnQyIiwiY291bnQzIiwiY291bnQ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsbFBvaW50cyIsImRyYXdJbWFnZSIsInBsYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwr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LFNBQUosQ0FBY1QsVUFBZCxFQUEwQixJQUExQixFQUFnQyxFQUFoQyxFQUQ2QixDQUNRO0FBQ3RDOztBQUVELGNBQUk1QixNQUFNLENBQU4sSUFBV3hCLEtBQWYsRUFBc0I7QUFDcEIzQixnQkFBSXdGLFNBQUosQ0FBY1YsaUJBQWQsRUFBaUMsSUFBakMsRUFBdUMsRUFBdkM7QUFDRDs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0Y7QUFFRjs7QUFFRHhGLFVBQU1tRyxJQUFOO0FBQ0F2RDtBQUNELEdBOWREO0FBK2RELENBcmVELEM7Ozs7Ozs7Ozs7O0FDRkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlLWlucHV0XCIpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY2FudmFzX2JvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzX2JvdHRvbVwiKTtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuXG4gIGZpbGUub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXM7XG4gICAgYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSk7IFxuXG4gICAgLy8gY2FudmFzIGluaXRpYWxpemF0aW9uXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vXG5cbiAgICAvLyBzZWNvbmQgY2FudmFzXG4gICAgY2FudmFzX2JvdHRvbS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhc19ib3R0b20uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eF9ib3R0b20gPSBjYW52YXNfYm90dG9tLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgIGNvbnN0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuXG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAvLyBhbmFseXNlci5mZnRTaXplID0gMTYzODQ7XG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgLy8gYW5hbHlzZXIuZmZ0U2l6ZSA9IDI1NjtcbiAgICBjb25zdCBidWZmZXJMZW5ndGggPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuXG4gICAgY29uc3QgV0lEVEggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiA5OyBcbiAgICAvLyBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiAyOyBcblxuICAgIGxldCBiYXJIZWlnaHQ7XG4gICAgbGV0IHggPSAwO1xuXG4gICAgbGV0IGxpZ2h0dXAgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDQgPSBmYWxzZTtcblxuICAgIGxldCBMRUZUID0gZmFsc2U7XG4gICAgbGV0IERPV04gPSBmYWxzZTtcbiAgICBsZXQgVVAgPSBmYWxzZTtcbiAgICBsZXQgUklHSFQgPSBmYWxzZTtcblxuICAgIGxldCBsZWZ0UG9pbnRzID0gMDtcbiAgICBsZXQgZG93blBvaW50cyA9IDA7XG4gICAgbGV0IHVwUG9pbnRzID0gMDtcbiAgICBsZXQgcmlnaHRQb2ludHMgPSAwO1xuXG4gICAgbGV0IHByZXNzZWQgPSBudWxsO1xuICAgIGxldCBpbmNvcnJlY3QgPSBudWxsO1xuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlUHJlc3MpO1xuXG4gICAgLy8gMzcgbGVmdCwgMzggdXAsIDM5IHJpZ2h0LCA0MCBkb3duXG4gICAgLy8gZnVuY3Rpb24gaGFuZGxlUHJlc3MoZSkge1xuICAgIC8vICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAvLyAgICAgY2FzZSAzNzpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ2xlZnQnKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSA0MDpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ2Rvd24nKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSAzODpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ3VwJyk7XG4gICAgLy8gICAgICAgYnJlYWs7XG4gICAgLy8gICAgIGNhc2UgMzk6XG4gICAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckZyYW1lKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckZyYW1lKTtcbiAgICAgIHggPSAwO1xuXG4gICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShkYXRhQXJyYXkpOyAvLyBmcmVxdWVuY2llc1xuXG4gICAgICBjdHhfYm90dG9tLmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjIpXCI7XG4gICAgICBjdHhfYm90dG9tLmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuXG4gICAgICBsZXQgciwgZywgYjtcbiAgICAgIGxldCBiYXJzID0gNDA7IC8vIDExOFxuXG4gICAgICAvLyBzcGxpdCB0aGUgZGF0YSBhcnJheSBpbiA0IGVxdWFsIHBhcnRzXG4gICAgICBsZXQgcXVhcnRlckxlbmd0aCA9IGRhdGFBcnJheS5sZW5ndGggLyA0O1xuXG4gICAgICBsZXQgZmlyc3QgPSBkYXRhQXJyYXkuc2xpY2UoMCwgcXVhcnRlckxlbmd0aCk7XG4gICAgICBsZXQgc2Vjb25kID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGgsIHF1YXJ0ZXJMZW5ndGggKiAyKTtcbiAgICAgIGxldCB0aGlyZCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMiwgcXVhcnRlckxlbmd0aCAqIDMpO1xuICAgICAgbGV0IGZvdXJ0aCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMywgcXVhcnRlckxlbmd0aCAqIDQpO1xuXG4gICAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0Fyci5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyAzMFxuICAgICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpOyAvLyAyLjUgLSBnb29kXG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IC8vIDIxMCwgMjMwLCAyNDAgKHNraW5ueSlcbiAgICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICAgIGcgPSAwXG4gICAgICAgICAgICBiID0gMTkxXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyAvLyAyMTAsIDIzMFxuICAgICAgICAgICAgciA9IDcxXG4gICAgICAgICAgICBnID0gNFxuICAgICAgICAgICAgYiA9IDcwXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkgeyAvLyAxMjAsIDEzMCwgMTQwIChza2lubnkpLCAxODBcbiAgICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgICBiID0gMjUxXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA8IDE5MCkgeyAvLyAxMjAsIDEzMFxuICAgICAgICAgICAgciA9IDJcbiAgICAgICAgICAgIGcgPSA2NFxuICAgICAgICAgICAgYiA9IDc5XG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkgeyAvLyAxMDAsIDExMCwgMTIwIChza2lubnkpXG4gICAgICAgICAgICByID0gMjIzXG4gICAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgICBiID0gNDJcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldIDwgMTcwKSB7IC8vIDEwMCwgMTEwXG4gICAgICAgICAgICByID0gNFxuICAgICAgICAgICAgZyA9IDcxXG4gICAgICAgICAgICBiID0gOVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkgeyAvLyAzMCwgNDAgKHNraW5ueSlcbiAgICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICAgIGcgPSAxNjRcbiAgICAgICAgICAgIGIgPSAwXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA8IDUwKSB7IC8vIDMwXG4gICAgICAgICAgICByID0gNzFcbiAgICAgICAgICAgIGcgPSAxNFxuICAgICAgICAgICAgYiA9IDRcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4X2JvdHRvbS5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgICAgY3R4X2JvdHRvbS5maWxsUmVjdCh4LCAoSEVJR0hUIC0gYmFySGVpZ2h0KSwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG5cbiAgICAgICAgICB4ICs9IGJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgICAvLyBDcmVhdGluZyBhbGwgb2YgdGhlIGFycm93c1xuICAgICAgICAgIGxldCBjb2xvcmVkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29sb3JlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWRMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBwcmVzc2VkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgbGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgbGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGNvbG9yZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBkb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBkb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBwcmVzc2VkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICB1cEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBjb2xvcmVkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWRSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgdGhlIGF2ZXJhZ2UgXG4gICAgICAgICAgbGV0IGF2ZztcbiAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YkFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHN1YkFycltpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXZnID0gc3VtIC8gc3ViQXJyLmxlbmd0aDtcblxuICAgICAgICAgIC8vIENvdW50aW5nIDQgYmFyc1xuXG4gICAgICAgICAgLy9uZXdBcnJbMF1baV1cbiAgICAgICAgICAvLyBsZXQgbGlnaHR1cCA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMF1baV0gPiAyNTApIHtcbiAgICAgICAgICAgICAgY291bnQgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQgPj0gNCAmJiBsaWdodHVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cCA9IGZhbHNlLCA3NTApO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cblxuICAgICAgICAgIC8vIGxldCBsaWdodHVwMiA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDIgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzFdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzFdW2ldID4gMTkwKSB7XG4gICAgICAgICAgICAgIGNvdW50MiArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudDIgPj0gNCAmJiBsaWdodHVwMiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwMiA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgICAgY291bnQyID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGxldCBsaWdodHVwMyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDMgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzJdW2ldID4gMTcwKSB7XG4gICAgICAgICAgICAgIGNvdW50MyArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudDMgPj0gNCAmJiBsaWdodHVwMyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwMyA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwMyA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgICAgY291bnQzID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGxldCBsaWdodHVwNCA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDQgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzNdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzNdW2ldID4gNTApIHtcbiAgICAgICAgICAgICAgY291bnQ0ICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50NCA+PSA0ICYmIGxpZ2h0dXA0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXA0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXA0ID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDQgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8vLy8vIGlmIGFycm93IGlzIGxpdCwgdGhlbiBsb29rIGZvciBrZXkgcHJlc3NcblxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZVByZXNzKTtcbiAgICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlUHJlc3MpO1xuICAgICAgICAgIFxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAgICAgbGVmdFBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBMRUZUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBMRUZUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgbGlnaHR1cDIpIHtcbiAgICAgICAgICAgICAgZG93blBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBET1dOID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBET1dOID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCAmJiBsaWdodHVwMykge1xuICAgICAgICAgICAgICB1cFBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBVUCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVVAgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgICByaWdodFBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBSSUdIVCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gUklHSFQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwNCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIC8vICAgY2FzZSAzNzogXG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9ICdsZWZ0JztcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgY2FzZSA0MDpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gJ2Rvd24nO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlIDM4OlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAndXAnO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlIDM5OiBcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gJ3JpZ2h0JztcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gc3dpdGNoIChwcmVzc2VkKSB7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIGlmIChMRUZUICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gbGVmdFBvaW50cyArPSAxLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgICBsZWZ0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBMRUZUID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBlLmtleUNvZGUgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIC8vICAgICAgIC8vIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKGxlZnRQb2ludHMpXG4gICAgICAgICAgICAvLyAgICAgICAvLyBicmVhaztcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYgKExFRlQgJiYgIWxpZ2h0dXApIHtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gbGVmdFBvaW50cyAtPSAxLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgICBsZWZ0UG9pbnRzIC09IDE7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBMRUZUID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBicmVhaztcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBMRUZUID0gZmFsc2UsIDUwMClcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgRE9XTiA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKERPV04gJiYgbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIC8vICAgICAgIGRvd25Qb2ludHMgKz0gMVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoRE9XTiAmJiAhbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIC8vICAgICAgIGRvd25Qb2ludHMgLT0gMVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IERPV04gPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlICd1cCc6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgVVAgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIGlmIChVUCAmJiBsaWdodHVwMykge1xuICAgICAgICAgICAgLy8gICAgICAgdXBQb2ludHMgKz0gMVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoVVAgJiYgIWxpZ2h0dXAzKSB7XG4gICAgICAgICAgICAvLyAgICAgICB1cFBvaW50cyAtPSAxXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gVVAgPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgUklHSFQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIGlmIChSSUdIVCAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgLy8gICAgICAgcmlnaHRQb2ludHMgKz0gMVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoUklHSFQgJiYgIWxpZ2h0dXA0KSB7XG4gICAgICAgICAgICAvLyAgICAgICByaWdodFBvaW50cyAtPSAxXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gUklHSFQgPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxlZnRQb2ludHMpXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZG93blBvaW50cylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1cFBvaW50cylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyaWdodFBvaW50cylcblxuICAgICAgICAgIC8vLy8vLyBQT0lOVFMgQVJFIFNIT1dJTkcgVVAgQU5EIE5FVkVSIERJU0FQUEVBUklOR1xuICAgICAgICAgIC8vIGN0eC5mb250ID0gXCI0OHB4IHNlcmlmXCI7XG4gICAgICAgICAgLy8gY3R4LnRleHRCYXNlbGluZSA9IFwiaGFuZ2luZ1wiO1xuICAgICAgICAgIC8vIGN0eC5maWxsVGV4dChsZWZ0UG9pbnRzLCAwLCAyMDApO1xuICAgICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAgIC8vIHdpbmRvdy5hbGVydChsZWZ0UG9pbnRzKVxuICAgICAgICAgIC8vIFJlbmRlcmluZyBjb2xvcmVkIHZzIGdyYXkgYXJyb3dzXG4gICAgICAgICAgLy8gYXZnID4gMTEwXG5cbiAgICAgICAgICBmdW5jdGlvbiBmYWRlT3V0KHRleHQpIHtcbiAgICAgICAgICAgIHZhciBhbHBoYSA9IDEuMCwgICAvLyBmdWxsIG9wYWNpdHlcbiAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoOyAvLyBDbGVhcnMgdGhlIGNhbnZhc1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAwLCAwLCBcIiArIGFscGhhICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjIwcHQgQXJpYWxcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgNjAwLCA1MCk7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBhbHBoYSAtIDAuMDU7IC8vIGRlY3JlYXNlIG9wYWNpdHkgKGZhZGUgb3V0KVxuICAgICAgICAgICAgICAgIGlmIChhbHBoYSA8IDApIHtcbiAgICAgICAgICAgICAgICAgIGN0eC53aWR0aCA9IGN0eC53aWR0aDtcbiAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBhbGxQb2ludHMgPSBsZWZ0UG9pbnRzICsgcmlnaHRQb2ludHMgKyB1cFBvaW50cyArIGRvd25Qb2ludHM7XG4gICAgICAgICAgLy8gaWYgKCFhbGxQb2ludHMpIGFsbFBvaW50cyA9IGFsbFBvaW50cyAvIDEwMDAwO1xuICAgICAgICAgIGZhZGVPdXQoYWxsUG9pbnRzKTtcblxuXG4gICAgICAgICAgLy8gaWYgKGogPT09IDAgJiYgbGlnaHR1cCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkTGVmdEFycm93LCAxMCwgMTApOyAvLyA1MFxuICAgICAgICAgIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKSwgMzAwMClcbiAgICAgICAgICAvLyAgIC8vIHNldFRpbWVvdXQoKCkgPT4gY3R4LmNsZWFyUmVjdCgxMCwgMTAsIDEyMCwgMTIwKSwgMzAwMClcbiAgICAgICAgICAvLyB9IFxuICAgICAgICAgIC8vIGVsc2UgaWYgKGogPT09IDAgJiYgIWxpZ2h0dXApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApOyAvLyA1MFxuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIGlmIChqID09PSAwICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZExlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9IFxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDAgJiYgIWxpZ2h0dXApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH0gXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgYSBrZXkgcHJlc3MsIHN1Y2Nlc3NmdWwgb3Igbm90XG4gICAgICAgICAgLy8gaXMgTEVGVCBldmVyIGdldHRpbmcgc2V0IHRvIGZhbHNlP1xuICAgICAgICAgIGlmIChqID09PSAwICYmIExFRlQpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZExlZnRBcnJvdywgMTAsIDEwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cblxuICAgICAgICAgIGlmIChqID09PSAxICYmIGxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWREb3duQXJyb3csIDM2NSwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChqID09PSAxICYmICFsaWdodHVwMikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duQXJyb3csIDM2NSwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAxICYmIERPV04pIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZERvd25BcnJvdywgMzY1LCAxMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMiAmJiBsaWdodHVwMykge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDIgJiYgIWxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHVwQXJyb3csIDcyNiwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAyICYmIFVQKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWRVcEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL1xuXG4gICAgICAgICAgaWYgKGogPT09IDMgJiYgbGlnaHR1cDQpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZFJpZ2h0QXJyb3csIDExMDAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMyAmJiAhbGlnaHR1cDQpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocmlnaHRBcnJvdywgMTEwMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAzICYmIFJJR0hUKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWRSaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICAgIC8vIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkRG93bkFycm93LCAzNjUsIDEwKTtcbiAgICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMTUwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMCk7IFxuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDEzMCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAvLyBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAzMCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBhdWRpby5wbGF5KCk7XG4gICAgcmVuZGVyRnJhbWUoKTtcbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=