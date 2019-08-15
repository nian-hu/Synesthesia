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
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = WIDTH / bufferLength * 9; // 13, 9

    var barHeight = void 0;
    var x = 0;

    var lightup = false;
    var lightup2 = false;
    var lightup3 = false;
    var lightup4 = false;

    var pressed = false;
    var pressed2 = false;
    var pressed3 = false;
    var pressed4 = false;

    var LEFT = false;
    var DOWN = false;
    var UP = false;
    var RIGHT = false;

    var leftPoints = 0;
    var downPoints = 0;
    var upPoints = 0;
    var rightPoints = 0;

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
          var handlePress = function handlePress(e) {
            switch (e.keyCode) {
              case 37:
                e.preventDefault();
                LEFT = true;
                if (LEFT && lightup) {
                  leftPoints += 1;
                  // console.log(leftPoints)
                } else if (LEFT && !lightup) {
                  leftPoints -= 1;
                }
                break;
              case 40:
                e.preventDefault();
                DOWN = true;
                if (DOWN && lightup2) {
                  downPoints += 1;
                } else if (DOWN && !lightup2) {
                  downPoints -= 1;
                }
                break;
              case 38:
                e.preventDefault();
                UP = true;
                if (UP && lightup3) {
                  upPoints += 1;
                } else if (UP && !lightup3) {
                  upPoints -= 1;
                }
                break;
              case 39:
                e.preventDefault();
                RIGHT = true;
                if (RIGHT && lightup4) {
                  rightPoints += 1;
                } else if (RIGHT && !lightup4) {
                  rightPoints -= 1;
                }
                break;
            }
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

          var leftArrow = new Image();
          leftArrow.src = "src/assets/left_arrow.png";

          var coloredDownArrow = new Image();
          coloredDownArrow.src = "src/assets/colored_down_arrow.png";

          var downArrow = new Image();
          downArrow.src = "src/assets/down_arrow.png";

          var coloredUpArrow = new Image();
          coloredUpArrow.src = "src/assets/colored_up_arrow.png";

          var upArrow = new Image();
          upArrow.src = "src/assets/up_arrow.png";

          var coloredRightArrow = new Image();
          coloredRightArrow.src = "src/assets/colored_right_arrow.png";

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
          if (!allPoints) allPoints = allPoints / 10000;
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

          if (j === 1 && lightup2) {
            ctx.drawImage(coloredDownArrow, 365, 10); // 50
          } else if (j === 1 && !lightup2) {
            ctx.drawImage(downArrow, 365, 10); // 50
          }

          if (j === 2 && lightup3) {
            ctx.drawImage(coloredUpArrow, 726, 10); // 50
          } else if (j === 2 && !lightup3) {
            ctx.drawImage(upArrow, 726, 10); // 50
          }

          if (j === 3 && lightup4) {
            ctx.drawImage(coloredRightArrow, 1100, 10); // 50
          } else if (j === 3 && !lightup4) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImNhbnZhc19ib3R0b20iLCJhdWRpbyIsIm9uY2hhbmdlIiwiZmlsZXMiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjdHhfYm90dG9tIiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImFuYWx5c2VyIiwiY3JlYXRlQW5hbHlzZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJmZnRTaXplIiwiYnVmZmVyTGVuZ3RoIiwiZnJlcXVlbmN5QmluQ291bnQiLCJkYXRhQXJyYXkiLCJVaW50OEFycmF5IiwiV0lEVEgiLCJIRUlHSFQiLCJiYXJXaWR0aCIsImJhckhlaWdodCIsIngiLCJsaWdodHVwIiwibGlnaHR1cDIiLCJsaWdodHVwMyIsImxpZ2h0dXA0IiwicHJlc3NlZCIsInByZXNzZWQyIiwicHJlc3NlZDMiLCJwcmVzc2VkNCIsIkxFRlQiLCJET1dOIiwiVVAiLCJSSUdIVCIsImxlZnRQb2ludHMiLCJkb3duUG9pbnRzIiwidXBQb2ludHMiLCJyaWdodFBvaW50cyIsInJlbmRlckZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInIiLCJnIiwiYiIsImJhcnMiLCJxdWFydGVyTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwibmV3QXJyIiwiaiIsInN1YkFyciIsImkiLCJoYW5kbGVQcmVzcyIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJmYWRlT3V0IiwidGV4dCIsImFscGhhIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImZvbnQiLCJmaWxsVGV4dCIsImNsZWFySW50ZXJ2YWwiLCJjb2xvcmVkTGVmdEFycm93IiwiSW1hZ2UiLCJsZWZ0QXJyb3ciLCJjb2xvcmVkRG93bkFycm93IiwiZG93bkFycm93IiwiY29sb3JlZFVwQXJyb3ciLCJ1cEFycm93IiwiY29sb3JlZFJpZ2h0QXJyb3ciLCJyaWdodEFycm93IiwiYXZnIiwic3VtIiwiY291bnQiLCJzZXRUaW1lb3V0IiwiY291bnQyIiwiY291bnQzIiwiY291bnQ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsbFBvaW50cyIsImRyYXdJbWFnZSIsInBsYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFF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RixTQUFKLENBQWNWLFVBQWQsRUFBMEIsSUFBMUIsRUFBZ0MsRUFBaEMsRUFENkIsQ0FDUTtBQUN0Qzs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0Y7QUFFRjs7QUFFRHRGLFVBQU1pRyxJQUFOO0FBQ0FuRDtBQUNELEdBL1hEO0FBZ1lELENBdFlELEM7Ozs7Ozs7Ozs7O0FDRkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlLWlucHV0XCIpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY2FudmFzX2JvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzX2JvdHRvbVwiKTtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuXG4gIGZpbGUub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXM7XG4gICAgYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSk7IFxuXG4gICAgLy8gY2FudmFzIGluaXRpYWxpemF0aW9uXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vXG5cbiAgICAvLyBzZWNvbmQgY2FudmFzXG4gICAgY2FudmFzX2JvdHRvbS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhc19ib3R0b20uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eF9ib3R0b20gPSBjYW52YXNfYm90dG9tLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgIGNvbnN0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuXG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAvLyBhbmFseXNlci5mZnRTaXplID0gMTYzODQ7XG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcblxuICAgIGNvbnN0IFdJRFRIID0gY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IEhFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogOTsgLy8gMTMsIDlcblxuICAgIGxldCBiYXJIZWlnaHQ7XG4gICAgbGV0IHggPSAwO1xuXG4gICAgbGV0IGxpZ2h0dXAgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDQgPSBmYWxzZTtcblxuICAgIGxldCBwcmVzc2VkID0gZmFsc2U7XG4gICAgbGV0IHByZXNzZWQyID0gZmFsc2U7XG4gICAgbGV0IHByZXNzZWQzID0gZmFsc2U7XG4gICAgbGV0IHByZXNzZWQ0ID0gZmFsc2U7XG5cbiAgICBsZXQgTEVGVCA9IGZhbHNlO1xuICAgIGxldCBET1dOID0gZmFsc2U7XG4gICAgbGV0IFVQID0gZmFsc2U7XG4gICAgbGV0IFJJR0hUID0gZmFsc2U7XG5cbiAgICBsZXQgbGVmdFBvaW50cyA9IDA7XG4gICAgbGV0IGRvd25Qb2ludHMgPSAwO1xuICAgIGxldCB1cFBvaW50cyA9IDA7XG4gICAgbGV0IHJpZ2h0UG9pbnRzID0gMDtcblxuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZVByZXNzKTtcblxuICAgIC8vIDM3IGxlZnQsIDM4IHVwLCAzOSByaWdodCwgNDAgZG93blxuICAgIC8vIGZ1bmN0aW9uIGhhbmRsZVByZXNzKGUpIHtcbiAgICAvLyAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgLy8gICAgIGNhc2UgMzc6XG4gICAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0Jyk7XG4gICAgLy8gICAgICAgYnJlYWs7XG4gICAgLy8gICAgIGNhc2UgNDA6XG4gICAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdkb3duJyk7XG4gICAgLy8gICAgICAgYnJlYWs7XG4gICAgLy8gICAgIGNhc2UgMzg6XG4gICAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCd1cCcpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgICBjYXNlIDM5OlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygncmlnaHQnKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJGcmFtZSgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJGcmFtZSk7XG4gICAgICB4ID0gMDtcblxuICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KTsgLy8gZnJlcXVlbmNpZXNcblxuICAgICAgY3R4X2JvdHRvbS5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4yKVwiO1xuICAgICAgY3R4X2JvdHRvbS5maWxsUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcblxuICAgICAgbGV0IHIsIGcsIGI7XG4gICAgICBsZXQgYmFycyA9IDQwOyAvLyAxMThcblxuICAgICAgLy8gc3BsaXQgdGhlIGRhdGEgYXJyYXkgaW4gNCBlcXVhbCBwYXJ0c1xuICAgICAgbGV0IHF1YXJ0ZXJMZW5ndGggPSBkYXRhQXJyYXkubGVuZ3RoIC8gNDtcblxuICAgICAgbGV0IGZpcnN0ID0gZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgICAgbGV0IHNlY29uZCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoLCBxdWFydGVyTGVuZ3RoICogMik7XG4gICAgICBsZXQgdGhpcmQgPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDIsIHF1YXJ0ZXJMZW5ndGggKiAzKTtcbiAgICAgIGxldCBmb3VydGggPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDMsIHF1YXJ0ZXJMZW5ndGggKiA0KTtcblxuICAgICAgbGV0IG5ld0FyciA9IFtmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoXTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdBcnIubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICBsZXQgc3ViQXJyID0gbmV3QXJyW2pdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8gMzBcbiAgICAgICAgICBiYXJIZWlnaHQgPSAoc3ViQXJyW2ldICogMi41KTsgLy8gMi41IC0gZ29vZFxuICAgICAgICAgIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDI1MCkgeyAvLyAyMTAsIDIzMCwgMjQwIChza2lubnkpXG4gICAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgICBnID0gMFxuICAgICAgICAgICAgYiA9IDE5MVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAyNTApIHsgLy8gMjEwLCAyMzBcbiAgICAgICAgICAgIHIgPSA3MVxuICAgICAgICAgICAgZyA9IDRcbiAgICAgICAgICAgIGIgPSA3MFxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPiAxOTApIHsgLy8gMTIwLCAxMzAsIDE0MCAoc2tpbm55KSwgMTgwXG4gICAgICAgICAgICByID0gMFxuICAgICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgICAgYiA9IDI1MVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPCAxOTApIHsgLy8gMTIwLCAxMzBcbiAgICAgICAgICAgIHIgPSAyXG4gICAgICAgICAgICBnID0gNjRcbiAgICAgICAgICAgIGIgPSA3OVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPiAxNzApIHsgLy8gMTAwLCAxMTAsIDEyMCAoc2tpbm55KVxuICAgICAgICAgICAgciA9IDIyM1xuICAgICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgICAgYiA9IDQyXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA8IDE3MCkgeyAvLyAxMDAsIDExMFxuICAgICAgICAgICAgciA9IDRcbiAgICAgICAgICAgIGcgPSA3MVxuICAgICAgICAgICAgYiA9IDlcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gNTApIHsgLy8gMzAsIDQwIChza2lubnkpXG4gICAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgICBnID0gMTY0XG4gICAgICAgICAgICBiID0gMFxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPCA1MCkgeyAvLyAzMFxuICAgICAgICAgICAgciA9IDcxXG4gICAgICAgICAgICBnID0gMTRcbiAgICAgICAgICAgIGIgPSA0XG4gICAgICAgICAgfVxuICAgICAgICAgIGN0eF9ib3R0b20uZmlsbFN0eWxlID0gYHJnYigke3J9LCR7Z30sJHtifSlgO1xuICAgICAgICAgIGN0eF9ib3R0b20uZmlsbFJlY3QoeCwgKEhFSUdIVCAtIGJhckhlaWdodCksIGJhcldpZHRoLCBiYXJIZWlnaHQpO1xuXG4gICAgICAgICAgeCArPSBiYXJXaWR0aCArIDEwO1xuXG4gICAgICAgICAgLy8gQ3JlYXRpbmcgYWxsIG9mIHRoZSBhcnJvd3NcbiAgICAgICAgICBsZXQgY29sb3JlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWRMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBsZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBsZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBkb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBkb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCB1cEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgdXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvdXBfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkUmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCByaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICAvLyBDYWxjdWxhdGluZyB0aGUgYXZlcmFnZSBcbiAgICAgICAgICBsZXQgYXZnO1xuICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gc3ViQXJyW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhdmcgPSBzdW0gLyBzdWJBcnIubGVuZ3RoO1xuXG4gICAgICAgICAgLy8gQ291bnRpbmcgNCBiYXJzXG5cbiAgICAgICAgICAvL25ld0FyclswXVtpXVxuICAgICAgICAgIC8vIGxldCBsaWdodHVwID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5ld0FyclswXVtpXSA+IDI1MCkge1xuICAgICAgICAgICAgICBjb3VudCArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudCA+PSA0ICYmIGxpZ2h0dXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwID0gZmFsc2UsIDc1MCk7XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50MiA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMV1baV0gPiAxOTApIHtcbiAgICAgICAgICAgICAgY291bnQyICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50MiA+PSA0ICYmIGxpZ2h0dXAyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXAyID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDIgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50MyA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMl1baV0gPiAxNzApIHtcbiAgICAgICAgICAgICAgY291bnQzICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50MyA+PSA0ICYmIGxpZ2h0dXAzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXAzID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDMgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50NCA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbM10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbM11baV0gPiA1MCkge1xuICAgICAgICAgICAgICBjb3VudDQgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQ0ID49IDQgJiYgbGlnaHR1cDQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cDQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cDQgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICAgIGNvdW50NCA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLy8vLy8gaWYgYXJyb3cgaXMgbGl0LCB0aGVuIGxvb2sgZm9yIGtleSBwcmVzc1xuXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlUHJlc3MpO1xuICAgICAgICAgIFxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChMRUZUICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAgICAgICAgIGxlZnRQb2ludHMgKz0gMVxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobGVmdFBvaW50cylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKExFRlQgJiYgIWxpZ2h0dXApIHtcbiAgICAgICAgICAgICAgICAgIGxlZnRQb2ludHMgLT0gMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgRE9XTiA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKERPV04gJiYgbGlnaHR1cDIpIHtcbiAgICAgICAgICAgICAgICAgIGRvd25Qb2ludHMgKz0gMVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoRE9XTiAmJiAhbGlnaHR1cDIpIHtcbiAgICAgICAgICAgICAgICAgIGRvd25Qb2ludHMgLT0gMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgVVAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChVUCAmJiBsaWdodHVwMykge1xuICAgICAgICAgICAgICAgICAgdXBQb2ludHMgKz0gMVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoVVAgJiYgIWxpZ2h0dXAzKSB7XG4gICAgICAgICAgICAgICAgICB1cFBvaW50cyAtPSAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBSSUdIVCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKFJJR0hUICYmIGxpZ2h0dXA0KSB7XG4gICAgICAgICAgICAgICAgICByaWdodFBvaW50cyArPSAxXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChSSUdIVCAmJiAhbGlnaHR1cDQpIHtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0UG9pbnRzIC09IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cobGVmdFBvaW50cylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb3duUG9pbnRzKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVwUG9pbnRzKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJpZ2h0UG9pbnRzKVxuXG4gICAgICAgICAgLy8vLy8vIFBPSU5UUyBBUkUgU0hPV0lORyBVUCBBTkQgTkVWRVIgRElTQVBQRUFSSU5HXG4gICAgICAgICAgLy8gY3R4LmZvbnQgPSBcIjQ4cHggc2VyaWZcIjtcbiAgICAgICAgICAvLyBjdHgudGV4dEJhc2VsaW5lID0gXCJoYW5naW5nXCI7XG4gICAgICAgICAgLy8gY3R4LmZpbGxUZXh0KGxlZnRQb2ludHMsIDAsIDIwMCk7XG4gICAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgLy8gd2luZG93LmFsZXJ0KGxlZnRQb2ludHMpXG4gICAgICAgICAgLy8gUmVuZGVyaW5nIGNvbG9yZWQgdnMgZ3JheSBhcnJvd3NcbiAgICAgICAgICAvLyBhdmcgPiAxMTBcblxuICAgICAgICAgIGZ1bmN0aW9uIGZhZGVPdXQodGV4dCkge1xuICAgICAgICAgICAgdmFyIGFscGhhID0gMS4wLCAgIC8vIGZ1bGwgb3BhY2l0eVxuICAgICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7IC8vIENsZWFycyB0aGUgY2FudmFzXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDAsIDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiMjBwdCBBcmlhbFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCA2MDAsIDUwKTtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFscGhhIC0gMC4wNTsgLy8gZGVjcmVhc2Ugb3BhY2l0eSAoZmFkZSBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgY3R4LndpZHRoID0gY3R4LndpZHRoO1xuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGFsbFBvaW50cyA9IGxlZnRQb2ludHMgKyByaWdodFBvaW50cyArIHVwUG9pbnRzICsgZG93blBvaW50cztcbiAgICAgICAgICBpZiAoIWFsbFBvaW50cykgYWxsUG9pbnRzID0gYWxsUG9pbnRzIC8gMTAwMDA7XG4gICAgICAgICAgZmFkZU91dChhbGxQb2ludHMpO1xuXG5cbiAgICAgICAgICAvLyBpZiAoaiA9PT0gMCAmJiBsaWdodHVwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRMZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgLy8gICAvLyBzZXRUaW1lb3V0KCgpID0+IGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApLCAzMDAwKVxuICAgICAgICAgIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiBjdHguY2xlYXJSZWN0KDEwLCAxMCwgMTIwLCAxMjApLCAzMDAwKVxuICAgICAgICAgIC8vIH0gXG4gICAgICAgICAgLy8gZWxzZSBpZiAoaiA9PT0gMCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkTGVmdEFycm93LCAxMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDEgJiYgbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZERvd25BcnJvdywgMzY1LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDEgJiYgIWxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDIgJiYgbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZFVwQXJyb3csIDcyNiwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChqID09PSAyICYmICFsaWdodHVwMykge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMyAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChqID09PSAzICYmICFsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICAgIC8vIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkRG93bkFycm93LCAzNjUsIDEwKTtcbiAgICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMTUwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMCk7IFxuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDEzMCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAvLyBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAzMCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBhdWRpby5wbGF5KCk7XG4gICAgcmVuZGVyRnJhbWUoKTtcbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=