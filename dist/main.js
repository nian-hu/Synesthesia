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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImNhbnZhc19ib3R0b20iLCJhdWRpbyIsImluc3RydWN0aW9ucyIsImluc3RydWN0aW9uc0J1dHRvbiIsImNsb3NlSW5zdHJ1Y3Rpb25zIiwiZGVtbyIsImNvbnRhY3QiLCJjb250YWN0QnV0dG9uIiwiY2xvc2VDb250YWN0Iiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0Iiwic3JjIiwicGxheSIsIm9uY2hhbmdlIiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjdHhfYm90dG9tIiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImFuYWx5c2VyIiwiY3JlYXRlQW5hbHlzZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJmZnRTaXplIiwiYnVmZmVyTGVuZ3RoIiwiZnJlcXVlbmN5QmluQ291bnQiLCJkYXRhQXJyYXkiLCJVaW50OEFycmF5IiwiV0lEVEgiLCJIRUlHSFQiLCJiYXJXaWR0aCIsImJhckhlaWdodCIsIngiLCJsaWdodHVwIiwibGlnaHR1cDIiLCJsaWdodHVwMyIsImxpZ2h0dXA0IiwiTEVGVCIsIkRPV04iLCJVUCIsIlJJR0hUIiwibGVmdFBvaW50cyIsImRvd25Qb2ludHMiLCJ1cFBvaW50cyIsInJpZ2h0UG9pbnRzIiwicHJlc3NlZCIsImluY29ycmVjdCIsImluY29ycmVjdDIiLCJpbmNvcnJlY3QzIiwiaW5jb3JyZWN0NCIsInJlbmRlckZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInIiLCJnIiwiYiIsImJhcnMiLCJxdWFydGVyTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwibmV3QXJyIiwiaiIsInN1YkFyciIsImkiLCJoYW5kbGVQcmVzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsInRleHQiLCJhbHBoYSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJmb250IiwiZmlsbFRleHQiLCJjbGVhckludGVydmFsIiwiY3VycmVudFNjb3JlIiwiY29sb3JlZExlZnRBcnJvdyIsIkltYWdlIiwicHJlc3NlZExlZnRBcnJvdyIsImluY29ycmVjdExlZnRBcnJvdyIsImxlZnRBcnJvdyIsImNvbG9yZWREb3duQXJyb3ciLCJwcmVzc2VkRG93bkFycm93IiwiaW5jb3JyZWN0RG93bkFycm93IiwiZG93bkFycm93IiwiY29sb3JlZFVwQXJyb3ciLCJwcmVzc2VkVXBBcnJvdyIsImluY29ycmVjdFVwQXJyb3ciLCJ1cEFycm93IiwiY29sb3JlZFJpZ2h0QXJyb3ciLCJwcmVzc2VkUmlnaHRBcnJvdyIsImluY29ycmVjdFJpZ2h0QXJyb3ciLCJyaWdodEFycm93IiwiYXZnIiwic3VtIiwiY291bnQiLCJjb3VudDIiLCJjb3VudDMiLCJjb3VudDQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxsUG9pbnRzIiwiZHJhd0ltYWdlIiwicGF1c2VkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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N0MsV0FGRCxNQUdLLElBQUk5QixNQUFNLENBQU4sSUFBVyxDQUFDL0IsUUFBaEIsRUFBMEI7QUFDN0J2QixnQkFBSWdHLFNBQUosQ0FBY1QsVUFBZCxFQUEwQixJQUExQixFQUFnQyxFQUFoQyxFQUQ2QixDQUNRO0FBQ3RDOztBQUVELGNBQUlqQyxNQUFNLENBQU4sSUFBVzNCLEtBQVgsSUFBb0JKLFFBQXhCLEVBQWtDO0FBQ2hDdkIsZ0JBQUlnRyxTQUFKLENBQWNYLGlCQUFkLEVBQWlDLElBQWpDLEVBQXVDLEVBQXZDO0FBQ0Q7O0FBRUQsY0FBSS9CLE1BQU0sQ0FBTixJQUFXM0IsS0FBWCxJQUFvQixDQUFDSixRQUF6QixFQUFtQztBQUNqQ3ZCLGdCQUFJZ0csU0FBSixDQUFjVixtQkFBZCxFQUFtQyxJQUFuQyxFQUF5QyxFQUF6QztBQUNEOztBQXFDRCxjQUFJN0csTUFBTXdILE1BQVYsRUFBa0I7QUFDaEIzQix5QkFBYSxZQUFZeUIsU0FBekI7QUFDRDtBQUNGOztBQUVEOUQsb0JBQVksSUFBWjtBQUNBQyxxQkFBYSxJQUFiO0FBQ0FDLHFCQUFhLElBQWI7QUFDQUMscUJBQWEsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQzRCxVQUFNYyxJQUFOO0FBQ0E4QztBQUNEO0FBQ0YsQ0FwbkJELEM7Ozs7Ozs7Ozs7O0FDRkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlLWlucHV0XCIpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY2FudmFzX2JvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzX2JvdHRvbVwiKTtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc1wiKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLWluc3RydWN0aW9uc1wiKTtcbiAgY29uc3QgY2xvc2VJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWluc3RydWN0aW9uc1wiKTtcbiAgY29uc3QgZGVtbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbi1jb250YWN0XCIpO1xuICBjb25zdCBjbG9zZUNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWNvbnRhY3RcIik7XG5cbiAgaW5zdHJ1Y3Rpb25zQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIGNsb3NlSW5zdHJ1Y3Rpb25zLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IGluc3RydWN0aW9ucykge1xuICAgICAgaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IFxuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gY29udGFjdCkge1xuICAgICAgY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cbiAgY29udGFjdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgY2xvc2VDb250YWN0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGRlbW8ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGF1ZGlvLnNyYyA9IFwic3JjL2Fzc2V0cy9DeWJlcnB1bmsubXAzXCI7XG4gICAgcGxheSgpO1xuICB9XG5cbiAgZmlsZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcztcbiAgICBhdWRpby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKTsgXG4gICAgcGxheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheSgpIHtcblxuICAgIC8vIGNhbnZhcyBpbml0aWFsaXphdGlvblxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgLy8gc2Vjb25kIGNhbnZhc1xuICAgIGNhbnZhc19ib3R0b20ud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXNfYm90dG9tLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdHhfYm90dG9tID0gY2FudmFzX2JvdHRvbS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy9cblxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgbGV0IHNyYyA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbiAgICBjb25zdCBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcblxuICAgIHNyYy5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICBhbmFseXNlci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgLy8gYW5hbHlzZXIuZmZ0U2l6ZSA9IDE2Mzg0O1xuICAgIGFuYWx5c2VyLmZmdFNpemUgPSAxMDI0O1xuICAgIC8vIGFuYWx5c2VyLmZmdFNpemUgPSAyNTY7XG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcblxuICAgIGNvbnN0IFdJRFRIID0gY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IEhFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogOTsgXG4gICAgLy8gY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogMjsgXG5cbiAgICBsZXQgYmFySGVpZ2h0O1xuICAgIGxldCB4ID0gMDtcblxuICAgIGxldCBsaWdodHVwID0gZmFsc2U7XG4gICAgbGV0IGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgbGV0IGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgbGV0IGxpZ2h0dXA0ID0gZmFsc2U7XG5cbiAgICBsZXQgTEVGVCA9IGZhbHNlO1xuICAgIGxldCBET1dOID0gZmFsc2U7XG4gICAgbGV0IFVQID0gZmFsc2U7XG4gICAgbGV0IFJJR0hUID0gZmFsc2U7XG5cbiAgICBsZXQgbGVmdFBvaW50cyA9IDA7XG4gICAgbGV0IGRvd25Qb2ludHMgPSAwO1xuICAgIGxldCB1cFBvaW50cyA9IDA7XG4gICAgbGV0IHJpZ2h0UG9pbnRzID0gMDtcblxuICAgIGxldCBwcmVzc2VkID0gbnVsbDtcblxuICAgIGxldCBpbmNvcnJlY3QgPSB0cnVlO1xuICAgIGxldCBpbmNvcnJlY3QyID0gdHJ1ZTtcbiAgICBsZXQgaW5jb3JyZWN0MyA9IHRydWU7XG4gICAgbGV0IGluY29ycmVjdDQgPSB0cnVlO1xuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlUHJlc3MpO1xuXG4gICAgLy8gMzcgbGVmdCwgMzggdXAsIDM5IHJpZ2h0LCA0MCBkb3duXG4gICAgLy8gZnVuY3Rpb24gaGFuZGxlUHJlc3MoZSkge1xuICAgIC8vICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAvLyAgICAgY2FzZSAzNzpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ2xlZnQnKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSA0MDpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ2Rvd24nKTtcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSAzODpcbiAgICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ3VwJyk7XG4gICAgLy8gICAgICAgYnJlYWs7XG4gICAgLy8gICAgIGNhc2UgMzk6XG4gICAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckZyYW1lKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckZyYW1lKTtcbiAgICAgIHggPSAwO1xuXG4gICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShkYXRhQXJyYXkpOyAvLyBmcmVxdWVuY2llc1xuXG4gICAgICBjdHhfYm90dG9tLmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjIpXCI7XG4gICAgICBjdHhfYm90dG9tLmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuXG4gICAgICBsZXQgciwgZywgYjtcbiAgICAgIGxldCBiYXJzID0gNDA7IC8vIDExOFxuXG4gICAgICAvLyBzcGxpdCB0aGUgZGF0YSBhcnJheSBpbiA0IGVxdWFsIHBhcnRzXG4gICAgICBsZXQgcXVhcnRlckxlbmd0aCA9IGRhdGFBcnJheS5sZW5ndGggLyA0O1xuXG4gICAgICBsZXQgZmlyc3QgPSBkYXRhQXJyYXkuc2xpY2UoMCwgcXVhcnRlckxlbmd0aCk7XG4gICAgICBsZXQgc2Vjb25kID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGgsIHF1YXJ0ZXJMZW5ndGggKiAyKTtcbiAgICAgIGxldCB0aGlyZCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMiwgcXVhcnRlckxlbmd0aCAqIDMpO1xuICAgICAgbGV0IGZvdXJ0aCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMywgcXVhcnRlckxlbmd0aCAqIDQpO1xuXG4gICAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0Fyci5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyAzMFxuICAgICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpOyAvLyAyLjUgLSBnb29kXG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IC8vIDIxMCwgMjMwLCAyNDAgKHNraW5ueSlcbiAgICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICAgIGcgPSAwXG4gICAgICAgICAgICBiID0gMTkxXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyAvLyAyMTAsIDIzMFxuICAgICAgICAgICAgciA9IDcxXG4gICAgICAgICAgICBnID0gNFxuICAgICAgICAgICAgYiA9IDcwXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkgeyAvLyAxMjAsIDEzMCwgMTQwIChza2lubnkpLCAxODBcbiAgICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgICBiID0gMjUxXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA8IDE5MCkgeyAvLyAxMjAsIDEzMFxuICAgICAgICAgICAgciA9IDJcbiAgICAgICAgICAgIGcgPSA2NFxuICAgICAgICAgICAgYiA9IDc5XG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkgeyAvLyAxMDAsIDExMCwgMTIwIChza2lubnkpXG4gICAgICAgICAgICByID0gMjIzXG4gICAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgICBiID0gNDJcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldIDwgMTcwKSB7IC8vIDEwMCwgMTEwXG4gICAgICAgICAgICByID0gNFxuICAgICAgICAgICAgZyA9IDcxXG4gICAgICAgICAgICBiID0gOVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkgeyAvLyAzMCwgNDAgKHNraW5ueSlcbiAgICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICAgIGcgPSAxNjRcbiAgICAgICAgICAgIGIgPSAwXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA8IDUwKSB7IC8vIDMwXG4gICAgICAgICAgICByID0gNzFcbiAgICAgICAgICAgIGcgPSAxNFxuICAgICAgICAgICAgYiA9IDRcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4X2JvdHRvbS5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgICAgY3R4X2JvdHRvbS5maWxsUmVjdCh4LCAoSEVJR0hUIC0gYmFySGVpZ2h0KSwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG5cbiAgICAgICAgICB4ICs9IGJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgICAvLyBDcmVhdGluZyBhbGwgb2YgdGhlIGFycm93c1xuICAgICAgICAgIGxldCBjb2xvcmVkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29sb3JlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWRMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBwcmVzc2VkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgaW5jb3JyZWN0TGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW5jb3JyZWN0TGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfbGVmdF9hcnJvdy5wbmdcIlxuXG4gICAgICAgICAgbGV0IGxlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGxlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBjb2xvcmVkRG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29sb3JlZERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBwcmVzc2VkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgaW5jb3JyZWN0RG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW5jb3JyZWN0RG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfZG93bl9hcnJvdy5wbmdcIlxuXG4gICAgICAgICAgbGV0IGRvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGRvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvZG93bl9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBjb2xvcmVkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfdXBfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgaW5jb3JyZWN0VXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGluY29ycmVjdFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF91cF9hcnJvdy5wbmdcIlxuXG4gICAgICAgICAgbGV0IHVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICB1cEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBjb2xvcmVkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IHByZXNzZWRSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgaW5jb3JyZWN0UmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGluY29ycmVjdFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9yaWdodF9hcnJvdy5wbmdcIlxuXG4gICAgICAgICAgbGV0IHJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICByaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIC8vIENhbGN1bGF0aW5nIHRoZSBhdmVyYWdlIFxuICAgICAgICAgIGxldCBhdmc7XG4gICAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBzdWJBcnJbaV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGF2ZyA9IHN1bSAvIHN1YkFyci5sZW5ndGg7XG5cbiAgICAgICAgICAvLyBDb3VudGluZyA0IGJhcnNcblxuICAgICAgICAgIC8vbmV3QXJyWzBdW2ldXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXAgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmV3QXJyWzBdW2ldID4gMjUwKSB7XG4gICAgICAgICAgICAgIGNvdW50ICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50ID49IDQgJiYgbGlnaHR1cCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXAgPSBmYWxzZSwgNzUwKTtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICAvLyBsZXQgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgY291bnQyID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclsxXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5ld0FyclsxXVtpXSA+IDE5MCkge1xuICAgICAgICAgICAgICBjb3VudDIgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQyID49IDQgJiYgbGlnaHR1cDIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cDIgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICAgIGNvdW50MiA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBsZXQgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgY291bnQzID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclsyXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5ld0FyclsyXVtpXSA+IDE3MCkge1xuICAgICAgICAgICAgICBjb3VudDMgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQzID49IDQgJiYgbGlnaHR1cDMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cDMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cDMgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICAgIGNvdW50MyA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBsZXQgbGlnaHR1cDQgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgY291bnQ0ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclszXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5ld0FyclszXVtpXSA+IDUwKSB7XG4gICAgICAgICAgICAgIGNvdW50NCArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudDQgPj0gNCAmJiBsaWdodHVwNCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaWdodHVwNCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwNCA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgICAgY291bnQ0ID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vLy8vLyBpZiBhcnJvdyBpcyBsaXQsIHRoZW4gbG9vayBmb3Iga2V5IHByZXNzXG5cbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVQcmVzcyk7XG4gICAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZVByZXNzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVQcmVzcyhlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiBsaWdodHVwICYmIGluY29ycmVjdCkge1xuICAgICAgICAgICAgLy8gICBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gICBsZWZ0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAvLyAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgLy8gICAvLyBsaWdodHVwID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgIGluY29ycmVjdCA9ICFpbmNvcnJlY3Q7XG4gICAgICAgICAgICAvLyB9IFxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiBsaWdodHVwICYmIGluY29ycmVjdCkge1xuICAgICAgICAgICAgICBsZWZ0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IExFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdCA9ICFpbmNvcnJlY3Q7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiAhbGlnaHR1cCAmJiBpbmNvcnJlY3QpIHtcbiAgICAgICAgICAgICAgbGVmdFBvaW50cyAtPSAxO1xuICAgICAgICAgICAgICBMRUZUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBMRUZUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgaW5jb3JyZWN0ID0gIWluY29ycmVjdDtcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDQwICYmIGxpZ2h0dXAyICYmIGluY29ycmVjdDIpIHtcbiAgICAgICAgICAgICAgZG93blBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBET1dOID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBET1dOID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0MiA9ICFpbmNvcnJlY3QyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiAhbGlnaHR1cDIgJiYgaW5jb3JyZWN0Mikge1xuICAgICAgICAgICAgICBkb3duUG9pbnRzIC09IDE7XG4gICAgICAgICAgICAgIERPV04gPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IERPV04gPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMiA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QyID0gIWluY29ycmVjdDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vLyBVUFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCAmJiBsaWdodHVwMyAmJiBpbmNvcnJlY3QzKSB7XG4gICAgICAgICAgICAgIHVwUG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgIFVQID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBVUCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDMgPSAhaW5jb3JyZWN0MztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzggJiYgIWxpZ2h0dXAzICYmIGluY29ycmVjdDMpIHtcbiAgICAgICAgICAgICAgdXBQb2ludHMgLT0gMTtcbiAgICAgICAgICAgICAgVVAgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFVQID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0MyA9ICFpbmNvcnJlY3QzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgJiYgbGlnaHR1cDQgJiYgaW5jb3JyZWN0NCkge1xuICAgICAgICAgICAgICByaWdodFBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBSSUdIVCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gUklHSFQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwNCA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3Q0ID0gIWluY29ycmVjdDQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5ICYmICFsaWdodHVwNCAmJiBpbmNvcnJlY3Q0KSB7XG4gICAgICAgICAgICAgIHJpZ2h0UG9pbnRzIC09IDE7XG4gICAgICAgICAgICAgIFJJR0hUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBSSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDQgPSAhaW5jb3JyZWN0NDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIC8vICAgY2FzZSAzNzogXG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9ICdsZWZ0JztcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgY2FzZSA0MDpcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gJ2Rvd24nO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlIDM4OlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSAndXAnO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlIDM5OiBcbiAgICAgICAgICAgIC8vICAgICBwcmVzc2VkID0gJ3JpZ2h0JztcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gc3dpdGNoIChwcmVzc2VkKSB7XG4gICAgICAgICAgICAvLyAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgLy8gICAgIHByZXNzZWQgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgIExFRlQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIGlmIChMRUZUICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gbGVmdFBvaW50cyArPSAxLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgICBsZWZ0UG9pbnRzICs9IDE7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBMRUZUID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBlLmtleUNvZGUgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIC8vICAgICAgIC8vIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKGxlZnRQb2ludHMpXG4gICAgICAgICAgICAvLyAgICAgICAvLyBicmVhaztcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYgKExFRlQgJiYgIWxpZ2h0dXApIHtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gbGVmdFBvaW50cyAtPSAxLCA1MDApXG4gICAgICAgICAgICAvLyAgICAgICBsZWZ0UG9pbnRzIC09IDE7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBMRUZUID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAvLyBicmVhaztcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBMRUZUID0gZmFsc2UsIDUwMClcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgRE9XTiA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKERPV04gJiYgbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIC8vICAgICAgIGRvd25Qb2ludHMgKz0gMVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoRE9XTiAmJiAhbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIC8vICAgICAgIGRvd25Qb2ludHMgLT0gMVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IERPV04gPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlICd1cCc6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgVVAgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIGlmIChVUCAmJiBsaWdodHVwMykge1xuICAgICAgICAgICAgLy8gICAgICAgdXBQb2ludHMgKz0gMVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoVVAgJiYgIWxpZ2h0dXAzKSB7XG4gICAgICAgICAgICAvLyAgICAgICB1cFBvaW50cyAtPSAxXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gVVAgPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAvLyAgICAgcHJlc3NlZCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgUklHSFQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIGlmIChSSUdIVCAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgLy8gICAgICAgcmlnaHRQb2ludHMgKz0gMVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoUklHSFQgJiYgIWxpZ2h0dXA0KSB7XG4gICAgICAgICAgICAvLyAgICAgICByaWdodFBvaW50cyAtPSAxXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gUklHSFQgPSBmYWxzZSwgNTAwKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxlZnRQb2ludHMpXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZG93blBvaW50cylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1cFBvaW50cylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyaWdodFBvaW50cylcblxuICAgICAgICAgIC8vLy8vLyBQT0lOVFMgQVJFIFNIT1dJTkcgVVAgQU5EIE5FVkVSIERJU0FQUEVBUklOR1xuICAgICAgICAgIC8vIGN0eC5mb250ID0gXCI0OHB4IHNlcmlmXCI7XG4gICAgICAgICAgLy8gY3R4LnRleHRCYXNlbGluZSA9IFwiaGFuZ2luZ1wiO1xuICAgICAgICAgIC8vIGN0eC5maWxsVGV4dChsZWZ0UG9pbnRzLCAwLCAyMDApO1xuICAgICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAgIC8vIHdpbmRvdy5hbGVydChsZWZ0UG9pbnRzKVxuICAgICAgICAgIC8vIFJlbmRlcmluZyBjb2xvcmVkIHZzIGdyYXkgYXJyb3dzXG4gICAgICAgICAgLy8gYXZnID4gMTEwXG5cbiAgICAgICAgICBmdW5jdGlvbiBmYWRlT3V0KHRleHQpIHtcbiAgICAgICAgICAgIGxldCBhbHBoYSA9IDEuMCwgICAvLyBmdWxsIG9wYWNpdHlcbiAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoOyAvLyBDbGVhcnMgdGhlIGNhbnZhc1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAwLCAxNDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiYm9sZCAyNXB0IEFyaWFsXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIDYwMCwgNTApO1xuICAgICAgICAgICAgICAgIGFscGhhID0gYWxwaGEgLSAwLjA1OyAvLyBkZWNyZWFzZSBvcGFjaXR5IChmYWRlIG91dClcbiAgICAgICAgICAgICAgICBpZiAoYWxwaGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICBjdHgud2lkdGggPSBjdHgud2lkdGg7XG4gICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgYWxsUG9pbnRzID0gbGVmdFBvaW50cyArIHJpZ2h0UG9pbnRzICsgdXBQb2ludHMgKyBkb3duUG9pbnRzO1xuICAgICAgICAgIC8vIGlmICghYWxsUG9pbnRzKSBhbGxQb2ludHMgPSBhbGxQb2ludHMgLyAxMDAwMDtcbiAgICAgICAgICBmYWRlT3V0KGFsbFBvaW50cyk7XG5cblxuICAgICAgICAgIC8vIGlmIChqID09PSAwICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZExlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICAvLyAgIC8vIHNldFRpbWVvdXQoKCkgPT4gY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCksIDMwMDApXG4gICAgICAgICAgLy8gICAvLyBzZXRUaW1lb3V0KCgpID0+IGN0eC5jbGVhclJlY3QoMTAsIDEwLCAxMjAsIDEyMCksIDMwMDApXG4gICAgICAgICAgLy8gfSBcbiAgICAgICAgICAvLyBlbHNlIGlmIChqID09PSAwICYmICFsaWdodHVwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMCAmJiBsaWdodHVwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRMZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfSBcbiAgICAgICAgICBlbHNlIGlmIChqID09PSAwICYmICFsaWdodHVwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9IFxuICAgICAgICAgIFxuICAgICAgICAgIC8vIGluIHRoZSBjYXNlIG9mIGEga2V5IHByZXNzLCBzdWNjZXNzZnVsIG9yIG5vdFxuICAgICAgICAgIC8vIGlzIExFRlQgZXZlciBnZXR0aW5nIHNldCB0byBmYWxzZT9cbiAgICAgICAgICBpZiAoaiA9PT0gMCAmJiBMRUZUICYmIGxpZ2h0dXApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocHJlc3NlZExlZnRBcnJvdywgMTAsIDEwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cblxuICAgICAgICAgIGlmIChqID09PSAwICYmIExFRlQgJiYgIWxpZ2h0dXApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW5jb3JyZWN0TGVmdEFycm93LCAxMCwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMSAmJiBsaWdodHVwMikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkRG93bkFycm93LCAzNjUsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMSAmJiAhbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bkFycm93LCAzNjUsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMSAmJiBET1dOICYmIGxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWREb3duQXJyb3csIDM2NSwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAxICYmIERPV04gJiYgIWxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGluY29ycmVjdERvd25BcnJvdywgMzY1LCAxMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMiAmJiBsaWdodHVwMykge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDIgJiYgIWxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHVwQXJyb3csIDcyNiwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAyICYmIFVQICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWRVcEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMiAmJiBVUCAmJiAhbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW5jb3JyZWN0VXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9cblxuICAgICAgICAgIGlmIChqID09PSAzICYmIGxpZ2h0dXA0KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRSaWdodEFycm93LCAxMTAwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDMgJiYgIWxpZ2h0dXA0KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMyAmJiBSSUdIVCAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkUmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAzICYmIFJJR0hUICYmICFsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbmNvcnJlY3RSaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICAgIC8vIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkRG93bkFycm93LCAzNjUsIDEwKTtcbiAgICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMTUwKSB7XG4gICAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMCk7IFxuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIC8vIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDEzMCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAvLyBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAzMCkge1xuICAgICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgZnVuY3Rpb24gY3VycmVudFNjb3JlKHRleHQpIHtcbiAgICAgICAgICAgIGxldCBhbHBoYSA9IDEuMCwgICAvLyBmdWxsIG9wYWNpdHlcbiAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoOyAvLyBDbGVhcnMgdGhlIGNhbnZhc1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAwLCAxNDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA1MHB0IEFyaWFsXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIDQ1MCwgMzAwKTtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFscGhhIC0gMC4wNTsgLy8gZGVjcmVhc2Ugb3BhY2l0eSAoZmFkZSBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgY3R4LndpZHRoID0gY3R4LndpZHRoO1xuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGF1ZGlvLnBhdXNlZCkge1xuICAgICAgICAgICAgY3VycmVudFNjb3JlKFwiU0NPUkU6IFwiICsgYWxsUG9pbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbmNvcnJlY3QgPSB0cnVlO1xuICAgICAgICBpbmNvcnJlY3QyID0gdHJ1ZTtcbiAgICAgICAgaW5jb3JyZWN0MyA9IHRydWU7XG4gICAgICAgIGluY29ycmVjdDQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICByZW5kZXJGcmFtZSgpO1xuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==