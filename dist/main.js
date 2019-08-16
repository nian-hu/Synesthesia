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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2Nzcz8zNzFmIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImZpbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiY2FudmFzX2JvdHRvbSIsImF1ZGlvIiwiaW5zdHJ1Y3Rpb25zIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uIiwiY2xvc2VJbnN0cnVjdGlvbnMiLCJkZW1vIiwiY29udGFjdCIsImNvbnRhY3RCdXR0b24iLCJjbG9zZUNvbnRhY3QiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwiZXZlbnQiLCJ0YXJnZXQiLCJzcmMiLCJwbGF5Iiwib25jaGFuZ2UiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImN0eF9ib3R0b20iLCJjb250ZXh0IiwiQXVkaW9Db250ZXh0IiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiYW5hbHlzZXIiLCJjcmVhdGVBbmFseXNlciIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImZmdFNpemUiLCJidWZmZXJMZW5ndGgiLCJmcmVxdWVuY3lCaW5Db3VudCIsImRhdGFBcnJheSIsIlVpbnQ4QXJyYXkiLCJXSURUSCIsIkhFSUdIVCIsImJhcldpZHRoIiwiYmFySGVpZ2h0IiwieCIsImxpZ2h0dXAiLCJsaWdodHVwMiIsImxpZ2h0dXAzIiwibGlnaHR1cDQiLCJMRUZUIiwiRE9XTiIsIlVQIiwiUklHSFQiLCJsZWZ0UG9pbnRzIiwiZG93blBvaW50cyIsInVwUG9pbnRzIiwicmlnaHRQb2ludHMiLCJwcmVzc2VkIiwiaW5jb3JyZWN0IiwiaW5jb3JyZWN0MiIsImluY29ycmVjdDMiLCJpbmNvcnJlY3Q0IiwicmVuZGVyRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiciIsImciLCJiIiwiYmFycyIsInF1YXJ0ZXJMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdCIsInNsaWNlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJuZXdBcnIiLCJqIiwic3ViQXJyIiwiaSIsImhhbmRsZVByZXNzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwidGV4dCIsImFscGhhIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImZvbnQiLCJmaWxsVGV4dCIsImNsZWFySW50ZXJ2YWwiLCJjb2xvcmVkTGVmdEFycm93IiwiSW1hZ2UiLCJwcmVzc2VkTGVmdEFycm93IiwiaW5jb3JyZWN0TGVmdEFycm93IiwibGVmdEFycm93IiwiY29sb3JlZERvd25BcnJvdyIsInByZXNzZWREb3duQXJyb3ciLCJpbmNvcnJlY3REb3duQXJyb3ciLCJkb3duQXJyb3ciLCJjb2xvcmVkVXBBcnJvdyIsInByZXNzZWRVcEFycm93IiwiaW5jb3JyZWN0VXBBcnJvdyIsInVwQXJyb3ciLCJjb2xvcmVkUmlnaHRBcnJvdyIsInByZXNzZWRSaWdodEFycm93IiwiaW5jb3JyZWN0UmlnaHRBcnJvdyIsInJpZ2h0QXJyb3ciLCJhdmciLCJzdW0iLCJjb3VudCIsImNvdW50MiIsImNvdW50MyIsImNvdW50NCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGxQb2ludHMiLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFD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Qzs7Ozs7Ozs7Ozs7QUNGQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGUtaW5wdXRcIik7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBjYW52YXNfYm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNfYm90dG9tXCIpO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdHJ1Y3Rpb25zXCIpO1xuICBjb25zdCBpbnN0cnVjdGlvbnNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW4taW5zdHJ1Y3Rpb25zXCIpO1xuICBjb25zdCBjbG9zZUluc3RydWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtaW5zdHJ1Y3Rpb25zXCIpO1xuICBjb25zdCBkZW1vID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLWNvbnRhY3RcIik7XG4gIGNvbnN0IGNsb3NlQ29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtY29udGFjdFwiKTtcblxuICBpbnN0cnVjdGlvbnNCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgY2xvc2VJbnN0cnVjdGlvbnMub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICBpbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBjb250YWN0KSB7XG4gICAgICBjb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH1cblxuICBjb250YWN0QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICBjbG9zZUNvbnRhY3Qub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgZGVtby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgYXVkaW8uc3JjID0gXCJzcmMvYXNzZXRzL0N5YmVycHVuay5tcDNcIjtcbiAgICBwbGF5KCk7XG4gIH1cblxuICBmaWxlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgIGF1ZGlvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pOyBcbiAgICBwbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5KCkge1xuXG4gICAgLy8gY2FudmFzIGluaXRpYWxpemF0aW9uXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vXG5cbiAgICAvLyBzZWNvbmQgY2FudmFzXG4gICAgY2FudmFzX2JvdHRvbS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhc19ib3R0b20uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eF9ib3R0b20gPSBjYW52YXNfYm90dG9tLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgIGNvbnN0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuXG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAvLyBhbmFseXNlci5mZnRTaXplID0gMTYzODQ7XG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgLy8gYW5hbHlzZXIuZmZ0U2l6ZSA9IDI1NjtcbiAgICBjb25zdCBidWZmZXJMZW5ndGggPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuXG4gICAgY29uc3QgV0lEVEggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiA5OyBcbiAgICAvLyBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiAyOyBcblxuICAgIGxldCBiYXJIZWlnaHQ7XG4gICAgbGV0IHggPSAwO1xuXG4gICAgbGV0IGxpZ2h0dXAgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICBsZXQgbGlnaHR1cDQgPSBmYWxzZTtcblxuICAgIGxldCBMRUZUID0gZmFsc2U7XG4gICAgbGV0IERPV04gPSBmYWxzZTtcbiAgICBsZXQgVVAgPSBmYWxzZTtcbiAgICBsZXQgUklHSFQgPSBmYWxzZTtcblxuICAgIGxldCBsZWZ0UG9pbnRzID0gMDtcbiAgICBsZXQgZG93blBvaW50cyA9IDA7XG4gICAgbGV0IHVwUG9pbnRzID0gMDtcbiAgICBsZXQgcmlnaHRQb2ludHMgPSAwO1xuXG4gICAgbGV0IHByZXNzZWQgPSBudWxsO1xuXG4gICAgbGV0IGluY29ycmVjdCA9IHRydWU7XG4gICAgbGV0IGluY29ycmVjdDIgPSB0cnVlO1xuICAgIGxldCBpbmNvcnJlY3QzID0gdHJ1ZTtcbiAgICBsZXQgaW5jb3JyZWN0NCA9IHRydWU7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVQcmVzcyk7XG5cbiAgICAvLyAzNyBsZWZ0LCAzOCB1cCwgMzkgcmlnaHQsIDQwIGRvd25cbiAgICAvLyBmdW5jdGlvbiBoYW5kbGVQcmVzcyhlKSB7XG4gICAgLy8gICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIC8vICAgICBjYXNlIDM3OlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnbGVmdCcpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgICBjYXNlIDQwOlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnZG93bicpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgICBjYXNlIDM4OlxuICAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygndXAnKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSAzOTpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ3JpZ2h0Jyk7XG4gICAgLy8gICAgICAgYnJlYWs7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyRnJhbWUoKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyRnJhbWUpO1xuICAgICAgeCA9IDA7XG5cbiAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSk7IC8vIGZyZXF1ZW5jaWVzXG5cbiAgICAgIGN0eF9ib3R0b20uZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMilcIjtcbiAgICAgIGN0eF9ib3R0b20uZmlsbFJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG5cbiAgICAgIGxldCByLCBnLCBiO1xuICAgICAgbGV0IGJhcnMgPSA0MDsgLy8gMTE4XG5cbiAgICAgIC8vIHNwbGl0IHRoZSBkYXRhIGFycmF5IGluIDQgZXF1YWwgcGFydHNcbiAgICAgIGxldCBxdWFydGVyTGVuZ3RoID0gZGF0YUFycmF5Lmxlbmd0aCAvIDQ7XG5cbiAgICAgIGxldCBmaXJzdCA9IGRhdGFBcnJheS5zbGljZSgwLCBxdWFydGVyTGVuZ3RoKTtcbiAgICAgIGxldCBzZWNvbmQgPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCwgcXVhcnRlckxlbmd0aCAqIDIpO1xuICAgICAgbGV0IHRoaXJkID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAyLCBxdWFydGVyTGVuZ3RoICogMyk7XG4gICAgICBsZXQgZm91cnRoID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAzLCBxdWFydGVyTGVuZ3RoICogNCk7XG5cbiAgICAgIGxldCBuZXdBcnIgPSBbZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aF07XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3QXJyLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgbGV0IHN1YkFyciA9IG5ld0FycltqXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vIDMwXG4gICAgICAgICAgYmFySGVpZ2h0ID0gKHN1YkFycltpXSAqIDIuNSk7IC8vIDIuNSAtIGdvb2RcbiAgICAgICAgICBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAyNTApIHsgLy8gMjEwLCAyMzAsIDI0MCAoc2tpbm55KVxuICAgICAgICAgICAgciA9IDI1NVxuICAgICAgICAgICAgZyA9IDBcbiAgICAgICAgICAgIGIgPSAxOTFcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMjUwKSB7IC8vIDIxMCwgMjMwXG4gICAgICAgICAgICByID0gNzFcbiAgICAgICAgICAgIGcgPSA0XG4gICAgICAgICAgICBiID0gNzBcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7IC8vIDEyMCwgMTMwLCAxNDAgKHNraW5ueSksIDE4MFxuICAgICAgICAgICAgciA9IDBcbiAgICAgICAgICAgIGcgPSAyNTVcbiAgICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldIDwgMTkwKSB7IC8vIDEyMCwgMTMwXG4gICAgICAgICAgICByID0gMlxuICAgICAgICAgICAgZyA9IDY0XG4gICAgICAgICAgICBiID0gNzlcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7IC8vIDEwMCwgMTEwLCAxMjAgKHNraW5ueSlcbiAgICAgICAgICAgIHIgPSAyMjNcbiAgICAgICAgICAgIGcgPSAyNTVcbiAgICAgICAgICAgIGIgPSA0MlxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxNzApIHsgLy8gMTAwLCAxMTBcbiAgICAgICAgICAgIHIgPSA0XG4gICAgICAgICAgICBnID0gNzFcbiAgICAgICAgICAgIGIgPSA5XG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7IC8vIDMwLCA0MCAoc2tpbm55KVxuICAgICAgICAgICAgciA9IDI1NVxuICAgICAgICAgICAgZyA9IDE2NFxuICAgICAgICAgICAgYiA9IDBcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldIDwgNTApIHsgLy8gMzBcbiAgICAgICAgICAgIHIgPSA3MVxuICAgICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgICBiID0gNFxuICAgICAgICAgIH1cbiAgICAgICAgICBjdHhfYm90dG9tLmZpbGxTdHlsZSA9IGByZ2IoJHtyfSwke2d9LCR7Yn0pYDtcbiAgICAgICAgICBjdHhfYm90dG9tLmZpbGxSZWN0KHgsIChIRUlHSFQgLSBiYXJIZWlnaHQpLCBiYXJXaWR0aCwgYmFySGVpZ2h0KTtcblxuICAgICAgICAgIHggKz0gYmFyV2lkdGggKyAxMDtcblxuICAgICAgICAgIC8vIENyZWF0aW5nIGFsbCBvZiB0aGUgYXJyb3dzXG4gICAgICAgICAgbGV0IGNvbG9yZWRMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWRMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBpbmNvcnJlY3RMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpbmNvcnJlY3RMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9sZWZ0X2Fycm93LnBuZ1wiXG5cbiAgICAgICAgICBsZXQgbGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgbGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGNvbG9yZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBpbmNvcnJlY3REb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpbmNvcnJlY3REb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9kb3duX2Fycm93LnBuZ1wiXG5cbiAgICAgICAgICBsZXQgZG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgZG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGNvbG9yZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29sb3JlZFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfdXBfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBwcmVzc2VkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBpbmNvcnJlY3RVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW5jb3JyZWN0VXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X3VwX2Fycm93LnBuZ1wiXG5cbiAgICAgICAgICBsZXQgdXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGNvbG9yZWRSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29sb3JlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgcHJlc3NlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBwcmVzc2VkUmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBpbmNvcnJlY3RSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW5jb3JyZWN0UmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X3JpZ2h0X2Fycm93LnBuZ1wiXG5cbiAgICAgICAgICBsZXQgcmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgdGhlIGF2ZXJhZ2UgXG4gICAgICAgICAgbGV0IGF2ZztcbiAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YkFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHN1YkFycltpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXZnID0gc3VtIC8gc3ViQXJyLmxlbmd0aDtcblxuICAgICAgICAgIC8vIENvdW50aW5nIDQgYmFyc1xuXG4gICAgICAgICAgLy9uZXdBcnJbMF1baV1cbiAgICAgICAgICAvLyBsZXQgbGlnaHR1cCA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMF1baV0gPiAyNTApIHtcbiAgICAgICAgICAgICAgY291bnQgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQgPj0gNCAmJiBsaWdodHVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cCA9IGZhbHNlLCA3NTApO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cblxuICAgICAgICAgIC8vIGxldCBsaWdodHVwMiA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDIgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzFdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzFdW2ldID4gMTkwKSB7XG4gICAgICAgICAgICAgIGNvdW50MiArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudDIgPj0gNCAmJiBsaWdodHVwMiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwMiA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgICAgY291bnQyID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGxldCBsaWdodHVwMyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDMgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzJdW2ldID4gMTcwKSB7XG4gICAgICAgICAgICAgIGNvdW50MyArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudDMgPj0gNCAmJiBsaWdodHVwMyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwMyA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwMyA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgICAgY291bnQzID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGxldCBsaWdodHVwNCA9IGZhbHNlO1xuICAgICAgICAgIGxldCBjb3VudDQgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzNdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzNdW2ldID4gNTApIHtcbiAgICAgICAgICAgICAgY291bnQ0ICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50NCA+PSA0ICYmIGxpZ2h0dXA0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXA0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXA0ID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDQgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8vLy8vIGlmIGFycm93IGlzIGxpdCwgdGhlbiBsb29rIGZvciBrZXkgcHJlc3NcblxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZVByZXNzKTtcbiAgICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlUHJlc3MpO1xuICAgICAgICAgIFxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGlmIChlLmtleUNvZGUgPT09IDM3ICYmIGxpZ2h0dXAgJiYgaW5jb3JyZWN0KSB7XG4gICAgICAgICAgICAvLyAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyAgIGxlZnRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgIC8vICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgIHNldFRpbWVvdXQoKCkgPT4gTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAvLyAgIC8vIGxpZ2h0dXAgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgaW5jb3JyZWN0ID0gIWluY29ycmVjdDtcbiAgICAgICAgICAgIC8vIH0gXG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmIGxpZ2h0dXAgJiYgaW5jb3JyZWN0KSB7XG4gICAgICAgICAgICAgIGxlZnRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0ID0gIWluY29ycmVjdDtcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmICFsaWdodHVwICYmIGluY29ycmVjdCkge1xuICAgICAgICAgICAgICBsZWZ0UG9pbnRzIC09IDE7XG4gICAgICAgICAgICAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBpbmNvcnJlY3QgPSAhaW5jb3JyZWN0O1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgbGlnaHR1cDIgJiYgaW5jb3JyZWN0Mikge1xuICAgICAgICAgICAgICBkb3duUG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIERPV04gPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IERPV04gPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMiA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QyID0gIWluY29ycmVjdDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDQwICYmICFsaWdodHVwMiAmJiBpbmNvcnJlY3QyKSB7XG4gICAgICAgICAgICAgIGRvd25Qb2ludHMgLT0gMTtcbiAgICAgICAgICAgICAgRE9XTiA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gRE9XTiA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDIgPSAhaW5jb3JyZWN0MjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8vIFVQXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmIGxpZ2h0dXAzICYmIGluY29ycmVjdDMpIHtcbiAgICAgICAgICAgICAgdXBQb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgVVAgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFVQID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0MyA9ICFpbmNvcnJlY3QzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCAmJiAhbGlnaHR1cDMgJiYgaW5jb3JyZWN0Mykge1xuICAgICAgICAgICAgICB1cFBvaW50cyAtPSAxO1xuICAgICAgICAgICAgICBVUCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVVAgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QzID0gIWluY29ycmVjdDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1xuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiBsaWdodHVwNCAmJiBpbmNvcnJlY3Q0KSB7XG4gICAgICAgICAgICAgIHJpZ2h0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIFJJR0hUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBSSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDQgPSAhaW5jb3JyZWN0NDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgJiYgIWxpZ2h0dXA0ICYmIGluY29ycmVjdDQpIHtcbiAgICAgICAgICAgICAgcmlnaHRQb2ludHMgLT0gMTtcbiAgICAgICAgICAgICAgUklHSFQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFJJR0hUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0NCA9ICFpbmNvcnJlY3Q0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgLy8gICBjYXNlIDM3OiBcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gJ2xlZnQnO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlIDQwOlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAnZG93bic7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgMzg6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9ICd1cCc7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgMzk6IFxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAncmlnaHQnO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBzd2l0Y2ggKHByZXNzZWQpIHtcbiAgICAgICAgICAgIC8vICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKExFRlQgJiYgbGlnaHR1cCkge1xuICAgICAgICAgICAgLy8gICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBsZWZ0UG9pbnRzICs9IDEsIDUwMClcbiAgICAgICAgICAgIC8vICAgICAgIGxlZnRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGUua2V5Q29kZSA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gICAgICAgLy8gTEVGVCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gICAgICAgLy8gY29uc29sZS5sb2cobGVmdFBvaW50cylcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoTEVGVCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgICAgLy8gICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBsZWZ0UG9pbnRzIC09IDEsIDUwMClcbiAgICAgICAgICAgIC8vICAgICAgIGxlZnRQb2ludHMgLT0gMTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBET1dOID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICBpZiAoRE9XTiAmJiBsaWdodHVwMikge1xuICAgICAgICAgICAgLy8gICAgICAgZG93blBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChET1dOICYmICFsaWdodHVwMikge1xuICAgICAgICAgICAgLy8gICAgICAgZG93blBvaW50cyAtPSAxXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gRE9XTiA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBVUCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFVQICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICAvLyAgICAgICB1cFBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChVUCAmJiAhbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHVwUG9pbnRzIC09IDFcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBVUCA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBSSUdIVCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFJJR0hUICYmIGxpZ2h0dXA0KSB7XG4gICAgICAgICAgICAvLyAgICAgICByaWdodFBvaW50cyArPSAxXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChSSUdIVCAmJiAhbGlnaHR1cDQpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHJpZ2h0UG9pbnRzIC09IDFcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBSSUdIVCA9IGZhbHNlLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cobGVmdFBvaW50cylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb3duUG9pbnRzKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVwUG9pbnRzKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJpZ2h0UG9pbnRzKVxuXG4gICAgICAgICAgLy8vLy8vIFBPSU5UUyBBUkUgU0hPV0lORyBVUCBBTkQgTkVWRVIgRElTQVBQRUFSSU5HXG4gICAgICAgICAgLy8gY3R4LmZvbnQgPSBcIjQ4cHggc2VyaWZcIjtcbiAgICAgICAgICAvLyBjdHgudGV4dEJhc2VsaW5lID0gXCJoYW5naW5nXCI7XG4gICAgICAgICAgLy8gY3R4LmZpbGxUZXh0KGxlZnRQb2ludHMsIDAsIDIwMCk7XG4gICAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgLy8gd2luZG93LmFsZXJ0KGxlZnRQb2ludHMpXG4gICAgICAgICAgLy8gUmVuZGVyaW5nIGNvbG9yZWQgdnMgZ3JheSBhcnJvd3NcbiAgICAgICAgICAvLyBhdmcgPiAxMTBcblxuICAgICAgICAgIGZ1bmN0aW9uIGZhZGVPdXQodGV4dCkge1xuICAgICAgICAgICAgdmFyIGFscGhhID0gMS4wLCAgIC8vIGZ1bGwgb3BhY2l0eVxuICAgICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7IC8vIENsZWFycyB0aGUgY2FudmFzXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDAsIDE0MCwgXCIgKyBhbHBoYSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gXCJib2xkIDI1cHQgQXJpYWxcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgNjAwLCA1MCk7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBhbHBoYSAtIDAuMDU7IC8vIGRlY3JlYXNlIG9wYWNpdHkgKGZhZGUgb3V0KVxuICAgICAgICAgICAgICAgIGlmIChhbHBoYSA8IDApIHtcbiAgICAgICAgICAgICAgICAgIGN0eC53aWR0aCA9IGN0eC53aWR0aDtcbiAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBhbGxQb2ludHMgPSBsZWZ0UG9pbnRzICsgcmlnaHRQb2ludHMgKyB1cFBvaW50cyArIGRvd25Qb2ludHM7XG4gICAgICAgICAgLy8gaWYgKCFhbGxQb2ludHMpIGFsbFBvaW50cyA9IGFsbFBvaW50cyAvIDEwMDAwO1xuICAgICAgICAgIGZhZGVPdXQoYWxsUG9pbnRzKTtcblxuXG4gICAgICAgICAgLy8gaWYgKGogPT09IDAgJiYgbGlnaHR1cCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkTGVmdEFycm93LCAxMCwgMTApOyAvLyA1MFxuICAgICAgICAgIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKSwgMzAwMClcbiAgICAgICAgICAvLyAgIC8vIHNldFRpbWVvdXQoKCkgPT4gY3R4LmNsZWFyUmVjdCgxMCwgMTAsIDEyMCwgMTIwKSwgMzAwMClcbiAgICAgICAgICAvLyB9IFxuICAgICAgICAgIC8vIGVsc2UgaWYgKGogPT09IDAgJiYgIWxpZ2h0dXApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApOyAvLyA1MFxuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIGlmIChqID09PSAwICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZExlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9IFxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDAgJiYgIWxpZ2h0dXApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH0gXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgYSBrZXkgcHJlc3MsIHN1Y2Nlc3NmdWwgb3Igbm90XG4gICAgICAgICAgLy8gaXMgTEVGVCBldmVyIGdldHRpbmcgc2V0IHRvIGZhbHNlP1xuICAgICAgICAgIGlmIChqID09PSAwICYmIExFRlQgJiYgbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkTGVmdEFycm93LCAxMCwgMTApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuXG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgTEVGVCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbmNvcnJlY3RMZWZ0QXJyb3csIDEwLCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLy9cblxuICAgICAgICAgIGlmIChqID09PSAxICYmIGxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWREb3duQXJyb3csIDM2NSwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChqID09PSAxICYmICFsaWdodHVwMikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duQXJyb3csIDM2NSwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAxICYmIERPV04gJiYgbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZERvd25BcnJvdywgMzY1LCAxMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDEgJiYgRE9XTiAmJiAhbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW5jb3JyZWN0RG93bkFycm93LCAzNjUsIDEwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cblxuICAgICAgICAgIGlmIChqID09PSAyICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRVcEFycm93LCA3MjYsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMiAmJiAhbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDIgJiYgVVAgJiYgbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZFVwQXJyb3csIDcyNiwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAyICYmIFVQICYmICFsaWdodHVwMykge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbmNvcnJlY3RVcEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL1xuXG4gICAgICAgICAgaWYgKGogPT09IDMgJiYgbGlnaHR1cDQpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZFJpZ2h0QXJyb3csIDExMDAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMyAmJiAhbGlnaHR1cDQpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocmlnaHRBcnJvdywgMTEwMCwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAzICYmIFJJR0hUICYmIGxpZ2h0dXA0KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWRSaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGogPT09IDMgJiYgUklHSFQgJiYgIWxpZ2h0dXA0KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGluY29ycmVjdFJpZ2h0QXJyb3csIDExMDAsIDEwKTtcbiAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgLy8gaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWREb3duQXJyb3csIDM2NSwgMTApO1xuICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAxNTApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UoZG93bkFycm93LCAzNjUsIDEwKTsgXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgLy8gaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRVcEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMTMwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKHVwQXJyb3csIDcyNiwgMTApO1xuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRSaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDMwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuICAgICAgICBpbmNvcnJlY3QgPSB0cnVlO1xuICAgICAgICBpbmNvcnJlY3QyID0gdHJ1ZTtcbiAgICAgICAgaW5jb3JyZWN0MyA9IHRydWU7XG4gICAgICAgIGluY29ycmVjdDQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICByZW5kZXJGcmFtZSgpO1xuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==