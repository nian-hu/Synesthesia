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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImNhbnZhc19ib3R0b20iLCJhdWRpbyIsIm9uY2hhbmdlIiwiZmlsZXMiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjdHhfYm90dG9tIiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImFuYWx5c2VyIiwiY3JlYXRlQW5hbHlzZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJmZnRTaXplIiwiYnVmZmVyTGVuZ3RoIiwiZnJlcXVlbmN5QmluQ291bnQiLCJkYXRhQXJyYXkiLCJVaW50OEFycmF5IiwiV0lEVEgiLCJIRUlHSFQiLCJiYXJXaWR0aCIsImJhckhlaWdodCIsIngiLCJsaWdodHVwIiwibGlnaHR1cDIiLCJsaWdodHVwMyIsImxpZ2h0dXA0IiwiTEVGVCIsIkRPV04iLCJVUCIsIlJJR0hUIiwibGVmdFBvaW50cyIsImRvd25Qb2ludHMiLCJ1cFBvaW50cyIsInJpZ2h0UG9pbnRzIiwicHJlc3NlZCIsInJlbmRlckZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInIiLCJnIiwiYiIsImJhcnMiLCJxdWFydGVyTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwibmV3QXJyIiwiaiIsInN1YkFyciIsImkiLCJoYW5kbGVQcmVzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsInRleHQiLCJhbHBoYSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJmb250IiwiZmlsbFRleHQiLCJjbGVhckludGVydmFsIiwiY29sb3JlZExlZnRBcnJvdyIsIkltYWdlIiwicHJlc3NlZExlZnRBcnJvdyIsImxlZnRBcnJvdyIsImNvbG9yZWREb3duQXJyb3ciLCJwcmVzc2VkRG93bkFycm93IiwiZG93bkFycm93IiwiY29sb3JlZFVwQXJyb3ciLCJwcmVzc2VkVXBBcnJvdyIsInVwQXJyb3ciLCJjb2xvcmVkUmlnaHRBcnJvdyIsInByZXNzZWRSaWdodEFycm93IiwicmlnaHRBcnJvdyIsImF2ZyIsInN1bSIsImNvdW50IiwiY291bnQyIiwiY291bnQzIiwiY291bnQ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsbFBvaW50cyIsImRyYXdJbWFnZSIsInBsYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJI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LEVBQWhDLEVBRDZCLENBQ1E7QUFDdEM7O0FBRUQsY0FBSTVCLE1BQU0sQ0FBTixJQUFXdkIsS0FBZixFQUFzQjtBQUNwQjNCLGdCQUFJdUYsU0FBSixDQUFjVixpQkFBZCxFQUFpQyxJQUFqQyxFQUF1QyxFQUF2QztBQUNEOztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFDRjtBQUVGOztBQUVEdkYsVUFBTWtHLElBQU47QUFDQXZEO0FBQ0QsR0ExZEQ7QUEyZEQsQ0FqZUQsQzs7Ozs7Ozs7Ozs7QUNGQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGUtaW5wdXRcIik7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBjYW52YXNfYm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNfYm90dG9tXCIpO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG5cbiAgZmlsZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcztcbiAgICBhdWRpby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKTsgXG5cbiAgICAvLyBjYW52YXMgaW5pdGlhbGl6YXRpb25cbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy9cblxuICAgIC8vIHNlY29uZCBjYW52YXNcbiAgICBjYW52YXNfYm90dG9tLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzX2JvdHRvbS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4X2JvdHRvbSA9IGNhbnZhc19ib3R0b20uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vXG5cbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGxldCBzcmMgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG4gICAgY29uc3QgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG5cbiAgICBzcmMuY29ubmVjdChhbmFseXNlcik7XG4gICAgYW5hbHlzZXIuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIC8vIGFuYWx5c2VyLmZmdFNpemUgPSAxNjM4NDtcbiAgICBhbmFseXNlci5mZnRTaXplID0gMTAyNDtcbiAgICAvLyBhbmFseXNlci5mZnRTaXplID0gMjU2O1xuICAgIGNvbnN0IGJ1ZmZlckxlbmd0aCA9IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlckxlbmd0aCk7XG5cbiAgICBjb25zdCBXSURUSCA9IGNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBIRUlHSFQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDk7IFxuICAgIC8vIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDI7IFxuXG4gICAgbGV0IGJhckhlaWdodDtcbiAgICBsZXQgeCA9IDA7XG5cbiAgICBsZXQgbGlnaHR1cCA9IGZhbHNlO1xuICAgIGxldCBsaWdodHVwMiA9IGZhbHNlO1xuICAgIGxldCBsaWdodHVwMyA9IGZhbHNlO1xuICAgIGxldCBsaWdodHVwNCA9IGZhbHNlO1xuXG4gICAgbGV0IExFRlQgPSBmYWxzZTtcbiAgICBsZXQgRE9XTiA9IGZhbHNlO1xuICAgIGxldCBVUCA9IGZhbHNlO1xuICAgIGxldCBSSUdIVCA9IGZhbHNlO1xuXG4gICAgbGV0IGxlZnRQb2ludHMgPSAwO1xuICAgIGxldCBkb3duUG9pbnRzID0gMDtcbiAgICBsZXQgdXBQb2ludHMgPSAwO1xuICAgIGxldCByaWdodFBvaW50cyA9IDA7XG5cbiAgICBsZXQgcHJlc3NlZCA9IG51bGw7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVQcmVzcyk7XG5cbiAgICAvLyAzNyBsZWZ0LCAzOCB1cCwgMzkgcmlnaHQsIDQwIGRvd25cbiAgICAvLyBmdW5jdGlvbiBoYW5kbGVQcmVzcyhlKSB7XG4gICAgLy8gICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIC8vICAgICBjYXNlIDM3OlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnbGVmdCcpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgICBjYXNlIDQwOlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnZG93bicpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgICBjYXNlIDM4OlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygndXAnKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSAzOTpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ3JpZ2h0Jyk7XG4gICAgLy8gICAgICAgYnJlYWs7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyRnJhbWUoKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyRnJhbWUpO1xuICAgICAgeCA9IDA7XG5cbiAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSk7IC8vIGZyZXF1ZW5jaWVzXG5cbiAgICAgIGN0eF9ib3R0b20uZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMilcIjtcbiAgICAgIGN0eF9ib3R0b20uZmlsbFJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG5cbiAgICAgIGxldCByLCBnLCBiO1xuICAgICAgbGV0IGJhcnMgPSA0MDsgLy8gMTE4XG5cbiAgICAgIC8vIHNwbGl0IHRoZSBkYXRhIGFycmF5IGluIDQgZXF1YWwgcGFydHNcbiAgICAgIGxldCBxdWFydGVyTGVuZ3RoID0gZGF0YUFycmF5Lmxlbmd0aCAvIDQ7XG5cbiAgICAgIGxldCBmaXJzdCA9IGRhdGFBcnJheS5zbGljZSgwLCBxdWFydGVyTGVuZ3RoKTtcbiAgICAgIGxldCBzZWNvbmQgPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCwgcXVhcnRlckxlbmd0aCAqIDIpO1xuICAgICAgbGV0IHRoaXJkID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAyLCBxdWFydGVyTGVuZ3RoICogMyk7XG4gICAgICBsZXQgZm91cnRoID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAzLCBxdWFydGVyTGVuZ3RoICogNCk7XG5cbiAgICAgIGxldCBuZXdBcnIgPSBbZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aF07XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3QXJyLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgbGV0IHN1YkFyciA9IG5ld0FycltqXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vIDMwXG4gICAgICAgICAgYmFySGVpZ2h0ID0gKHN1YkFycltpXSAqIDIuNSk7IC8vIDIuNSAtIGdvb2RcbiAgICAgICAgICBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAyNTApIHsgLy8gMjEwLCAyMzAsIDI0MCAoc2tpbm55KVxuICAgICAgICAgICAgciA9IDI1NVxuICAgICAgICAgICAgZyA9IDBcbiAgICAgICAgICAgIGIgPSAxOTFcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMjUwKSB7IC8vIDIxMCwgMjMwXG4gICAgICAgICAgICByID0gNzFcbiAgICAgICAgICAgIGcgPSA0XG4gICAgICAgICAgICBiID0gNzBcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7IC8vIDEyMCwgMTMwLCAxNDAgKHNraW5ueSksIDE4MFxuICAgICAgICAgICAgciA9IDBcbiAgICAgICAgICAgIGcgPSAyNTVcbiAgICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldIDwgMTkwKSB7IC8vIDEyMCwgMTMwXG4gICAgICAgICAgICByID0gMlxuICAgICAgICAgICAgZyA9IDY0XG4gICAgICAgICAgICBiID0gNzlcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7IC8vIDEwMCwgMTEwLCAxMjAgKHNraW5ueSlcbiAgICAgICAgICAgIHIgPSAyMjNcbiAgICAgICAgICAgIGcgPSAyNTVcbiAgICAgICAgICAgIGIgPSA0MlxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxNzApIHsgLy8gMTAwLCAxMTBcbiAgICAgICAgICAgIHIgPSA0XG4gICAgICAgICAgICBnID0gNzFcbiAgICAgICAgICAgIGIgPSA5XG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7IC8vIDMwLCA0MCAoc2tpbm55KVxuICAgICAgICAgICAgciA9IDI1NVxuICAgICAgICAgICAgZyA9IDE2NFxuICAgICAgICAgICAgYiA9IDBcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldIDwgNTApIHsgLy8gMzBcbiAgICAgICAgICAgIHIgPSA3MVxuICAgICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgICBiID0gNFxuICAgICAgICAgIH1cbiAgICAgICAgICBjdHhfYm90dG9tLmZpbGxTdHlsZSA9IGByZ2IoJHtyfSwke2d9LCR7Yn0pYDtcbiAgICAgICAgICBjdHhfYm90dG9tLmZpbGxSZWN0KHgsIChIRUlHSFQgLSBiYXJIZWlnaHQpLCBiYXJXaWR0aCwgYmFySGVpZ2h0KTtcblxuICAgICAgICAgIHggKz0gYmFyV2lkdGggKyAxMDtcblxuICAgICAgICAgIC8vIENyZWF0aW5nIGFsbCBvZiB0aGUgYXJyb3dzXG4gICAgICAgICAgbGV0IGNvbG9yZWRMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWRMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBsZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBsZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBwcmVzc2VkRG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGRvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGRvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvZG93bl9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBjb2xvcmVkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfdXBfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgdXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGNvbG9yZWRSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29sb3JlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBwcmVzc2VkUmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCByaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICAvLyBDYWxjdWxhdGluZyB0aGUgYXZlcmFnZSBcbiAgICAgICAgICBsZXQgYXZnO1xuICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gc3ViQXJyW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhdmcgPSBzdW0gLyBzdWJBcnIubGVuZ3RoO1xuXG4gICAgICAgICAgLy8gQ291bnRpbmcgNCBiYXJzXG5cbiAgICAgICAgICAvL25ld0FyclswXVtpXVxuICAgICAgICAgIC8vIGxldCBsaWdodHVwID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5ld0FyclswXVtpXSA+IDI1MCkge1xuICAgICAgICAgICAgICBjb3VudCArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudCA+PSA0ICYmIGxpZ2h0dXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwID0gZmFsc2UsIDc1MCk7XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50MiA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMV1baV0gPiAxOTApIHtcbiAgICAgICAgICAgICAgY291bnQyICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50MiA+PSA0ICYmIGxpZ2h0dXAyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXAyID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDIgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50MyA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMl1baV0gPiAxNzApIHtcbiAgICAgICAgICAgICAgY291bnQzICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50MyA+PSA0ICYmIGxpZ2h0dXAzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXAzID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDMgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50NCA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbM10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbM11baV0gPiA1MCkge1xuICAgICAgICAgICAgICBjb3VudDQgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQ0ID49IDQgJiYgbGlnaHR1cDQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cDQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cDQgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICAgIGNvdW50NCA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLy8vLy8gaWYgYXJyb3cgaXMgbGl0LCB0aGVuIGxvb2sgZm9yIGtleSBwcmVzc1xuXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlUHJlc3MpO1xuICAgICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVQcmVzcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlUHJlc3MoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgbGlnaHR1cCkge1xuICAgICAgICAgICAgICBsZWZ0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwID0gZmFsc2U7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiBsaWdodHVwMikge1xuICAgICAgICAgICAgICBkb3duUG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIERPV04gPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IERPV04gPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICAgIHVwUG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIFVQID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBVUCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5ICYmIGxpZ2h0dXA0KSB7XG4gICAgICAgICAgICAgIHJpZ2h0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIFJJR0hUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBSSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgLy8gICBjYXNlIDM3OiBcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gJ2xlZnQnO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlIDQwOlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAnZG93bic7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgMzg6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9ICd1cCc7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgMzk6IFxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAncmlnaHQnO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBzd2l0Y2ggKHByZXNzZWQpIHtcbiAgICAgICAgICAgIC8vICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKExFRlQgJiYgbGlnaHR1cCkge1xuICAgICAgICAgICAgLy8gICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBsZWZ0UG9pbnRzICs9IDEsIDUwMClcbiAgICAgICAgICAgIC8vICAgICAgIGxlZnRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGUua2V5Q29kZSA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gICAgICAgLy8gTEVGVCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gICAgICAgLy8gY29uc29sZS5sb2cobGVmdFBvaW50cylcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoTEVGVCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgICAgLy8gICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBsZWZ0UG9pbnRzIC09IDEsIDUwMClcbiAgICAgICAgICAgIC8vICAgICAgIGxlZnRQb2ludHMgLT0gMTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBET1dOID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICBpZiAoRE9XTiAmJiBsaWdodHVwMikge1xuICAgICAgICAgICAgLy8gICAgICAgZG93blBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChET1dOICYmICFsaWdodHVwMikge1xuICAgICAgICAgICAgLy8gICAgICAgZG93blBvaW50cyAtPSAxXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gRE9XTiA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBVUCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFVQICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICAvLyAgICAgICB1cFBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChVUCAmJiAhbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHVwUG9pbnRzIC09IDFcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBVUCA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBSSUdIVCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFJJR0hUICYmIGxpZ2h0dXA0KSB7XG4gICAgICAgICAgICAvLyAgICAgICByaWdodFBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChSSUdIVCAmJiAhbGlnaHR1cDQpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHJpZ2h0UG9pbnRzIC09IDFcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBSSUdIVCA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cobGVmdFBvaW50cylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb3duUG9pbnRzKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVwUG9pbnRzKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJpZ2h0UG9pbnRzKVxuXG4gICAgICAgICAgLy8vLy8vIFBPSU5UUyBBUkUgU0hPV0lORyBVUCBBTkQgTkVWRVIgRElTQVBQRUFSSU5HXG4gICAgICAgICAgLy8gY3R4LmZvbnQgPSBcIjQ4cHggc2VyaWZcIjtcbiAgICAgICAgICAvLyBjdHgudGV4dEJhc2VsaW5lID0gXCJoYW5naW5nXCI7XG4gICAgICAgICAgLy8gY3R4LmZpbGxUZXh0KGxlZnRQb2ludHMsIDAsIDIwMCk7XG4gICAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgLy8gd2luZG93LmFsZXJ0KGxlZnRQb2ludHMpXG4gICAgICAgICAgLy8gUmVuZGVyaW5nIGNvbG9yZWQgdnMgZ3JheSBhcnJvd3NcbiAgICAgICAgICAvLyBhdmcgPiAxMTBcblxuICAgICAgICAgIGZ1bmN0aW9uIGZhZGVPdXQodGV4dCkge1xuICAgICAgICAgICAgdmFyIGFscGhhID0gMS4wLCAgIC8vIGZ1bGwgb3BhY2l0eVxuICAgICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7IC8vIENsZWFycyB0aGUgY2FudmFzXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDAsIDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiMjBwdCBBcmlhbFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCA2MDAsIDUwKTtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFscGhhIC0gMC4wNTsgLy8gZGVjcmVhc2Ugb3BhY2l0eSAoZmFkZSBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgY3R4LndpZHRoID0gY3R4LndpZHRoO1xuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGFsbFBvaW50cyA9IGxlZnRQb2ludHMgKyByaWdodFBvaW50cyArIHVwUG9pbnRzICsgZG93blBvaW50cztcbiAgICAgICAgICAvLyBpZiAoIWFsbFBvaW50cykgYWxsUG9pbnRzID0gYWxsUG9pbnRzIC8gMTAwMDA7XG4gICAgICAgICAgZmFkZU91dChhbGxQb2ludHMpO1xuXG5cbiAgICAgICAgICAvLyBpZiAoaiA9PT0gMCAmJiBsaWdodHVwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRMZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgLy8gICAvLyBzZXRUaW1lb3V0KCgpID0+IGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApLCAzMDAwKVxuICAgICAgICAgIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiBjdHguY2xlYXJSZWN0KDEwLCAxMCwgMTIwLCAxMjApLCAzMDAwKVxuICAgICAgICAgIC8vIH0gXG4gICAgICAgICAgLy8gZWxzZSBpZiAoaiA9PT0gMCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkTGVmdEFycm93LCAxMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfSBcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBpbiB0aGUgY2FzZSBvZiBhIGtleSBwcmVzcywgc3VjY2Vzc2Z1bCBvciBub3RcbiAgICAgICAgICAvLyBpcyBMRUZUIGV2ZXIgZ2V0dGluZyBzZXQgdG8gZmFsc2U/XG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgTEVGVCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkTGVmdEFycm93LCAxMCwgMTApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuXG4gICAgICAgICAgaWYgKGogPT09IDEgJiYgbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZERvd25BcnJvdywgMzY1LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDEgJiYgIWxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDEgJiYgRE9XTikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkRG93bkFycm93LCAzNjUsIDEwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cblxuICAgICAgICAgIGlmIChqID09PSAyICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRVcEFycm93LCA3MjYsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMiAmJiAhbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDIgJiYgVVApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZFVwQXJyb3csIDcyNiwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMyAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChqID09PSAzICYmICFsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDMgJiYgUklHSFQpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZFJpZ2h0QXJyb3csIDExMDAsIDEwKTtcbiAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgLy8gaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWREb3duQXJyb3csIDM2NSwgMTApO1xuICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAxNTApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UoZG93bkFycm93LCAzNjUsIDEwKTsgXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgLy8gaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRVcEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMTMwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKHVwQXJyb3csIDcyNiwgMTApO1xuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRSaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDMwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICByZW5kZXJGcmFtZSgpO1xuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==