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
    // console.log(dataArray);
    // [250, 190, 0, 270]

    // analyser.getByteFrequencyData(dataArray)

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = WIDTH / bufferLength * 9; // 13, 9
    // const barWidth = (WIDTH / bufferLength) * 2;

    var barHeight = void 0;
    var x = 0;
    // let x = 10

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;

      analyser.getByteFrequencyData(dataArray); // frequencies
      // ctx.fillStyle = "rgba(0,0,0,0.2)";
      // ctx.fillRect(0, 0, WIDTH, HEIGHT);

      ctx_bottom.fillStyle = "rgba(0,0,0,0.2)";
      ctx_bottom.fillRect(0, 0, WIDTH, HEIGHT);

      // console.log(dataArray);

      var r = void 0,
          g = void 0,
          b = void 0;
      var bars = 40; // 118

      // split the data array in 4 equal parts
      var quarterLength = dataArray.length / 4;

      var first = dataArray.slice(0, quarterLength);
      // debugger
      var second = dataArray.slice(quarterLength, quarterLength * 2);
      var third = dataArray.slice(quarterLength * 2, quarterLength * 3);
      var fourth = dataArray.slice(quarterLength * 3, quarterLength * 4);

      var newArr = [first, second, third, fourth];
      // console.log(newArr);
      // console.log(fourth);
      // console.log(third);
      // console.log(second);
      // console.log(first);

      for (var j = 0; j < newArr.length; j++) {

        var subArr = newArr[j];
        // j is the section
        // if (j === 1) { 
        //   debugger
        // }
        for (var i = 0; i < 10; i++) {
          // 30
          barHeight = subArr[i] * 2.5; // 2.5 - good

          //change it to frequency range
          //get vol and freq

          // j === 0 (left)
          // hot pink
          // 255, 0, 191
          // lighter
          // 255, 130, 224

          // j === 1 (down)
          // cyan
          // 0, 255, 221
          // lighter
          // 145, 255, 241

          // j === 2 (up) 
          // chartreuse
          // 223, 255, 42
          // lighter
          // 234, 255, 115

          // j === 3
          // orange
          // 255, 164, 0
          // lighter
          // 255, 195, 87

          if (j === 0 && subArr[i] > 250) {
            // 210, 230, 240 (skinny)
            // we are in the first section
            // hot pink
            r = 255;
            g = 0;
            b = 191;

            // ARROW RENDERING ATTEMPT:
            // let coloredLeftArrow = document.getElementById("colored-left-arrow")
            // ctx.drawImage(coloredLeftArrow, 20, 10)

            // } else if (j === 0 && subArr[i] > 190) {
            //   r = 255
            //   g = 97
            //   b = 202
            // } else if (j === 0 && subArr[i] > 170) {
            //   r = 255
            //   g = 166
            //   b = 225
            // } else if (j === 0 && subArr[i] > 150) {
            //   r = 252
            //   g = 217
            //   b = 241
          } else if (j === 0 && subArr[i] < 250) {
            // 210, 230
            //everything else is light pink
            r = 71;
            g = 4;
            b = 70;
          } else if (j === 1 && subArr[i] > 190) {
            // 120, 130, 140 (skinny), 180
            // debugger
            // cyan
            r = 0;
            g = 255;
            b = 251;
            // } else if (j === 1 && subArr[i] > 190) {
            //   r = 63
            //   g = 217
            //   b = 214
            // } else if (j === 1 && subArr[i] > 170) {
            //   r = 160
            //   g = 250
            //   b = 248
            // } else if (j === 1 && subArr[i] > 150) {
            //   r = 217
            //   g = 252
            //   b = 252
          } else if (j === 1 && subArr[i] < 190) {
            // 120, 130
            // light cyan
            r = 2;
            g = 64;
            b = 79;
          } else if (j === 2 && subArr[i] > 170) {
            // 100, 110, 120 (skinny)
            //third
            //chartreuse
            r = 223;
            g = 255;
            b = 42;
            // } else if (j === 2 && subArr[i] > 190) {
            //   r = 240
            //   g = 245
            //   b = 98
            // } else if (j === 2 && subArr[i] > 170) {
            //   r = 248
            //   g = 250
            //   b = 182
            // } else if (j === 2 && subArr[i] > 150) {
            //   r = 246
            //   g = 247
            //   b = 213
          } else if (j === 2 && subArr[i] < 170) {
            // 100, 110
            //light chartreuse
            r = 4;
            g = 71;
            b = 9;
          } else if (j === 3 && subArr[i] > 50) {
            // 30, 40 (skinny)
            //fourth section
            //orange
            r = 255;
            g = 164;
            b = 0;
            // } else if (j === 3 && subArr[i] > 190) {
            //   r = 60
            //   g = 207
            //   b = 72
            // } else if (j === 3 && subArr[i] > 170) {
            //   r = 154
            //   g = 252
            //   b = 162
            // } else if (j === 3 && subArr[i] > 150) {
            //   // debugger
            //   r = 210
            //   g = 250
            //   b = 213
          } else if (j === 3 && subArr[i] < 50) {
            // 30
            r = 71;
            g = 14;
            b = 4;
          }

          // if (subArr[i] > 210) { // hot pink 210
          //   r = 255
          //   g = 0
          //   b = 174
          // } else if (subArr[i] > 190) { // cyan 200
          //   r = 0
          //   g = 255
          //   b = 251
          // } else if (subArr[i] > 170) { // yellow 190
          //   r = 242
          //   g = 255
          //   b = 0
          // } else if (subArr[i] > 150) { // lime green 180
          //   r = 106
          //   g = 255
          //   b = 0
          // } else { // orange
          //   r = 255
          //   g = 166
          //   b = 0
          // }

          ctx_bottom.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx_bottom.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          // x += barWidth + 2;
          x += barWidth + 10;

          // // Rendering the gray arrows at the top of the screen

          // let leftArrow = document.getElementById("left-arrow");
          // let downArrow = document.getElementById("down-arrow");
          // let upArrow = document.getElementById("up-arrow");
          // let rightArrow = document.getElementById("right-arrow");

          // let coloredLeftArrow = document.getElementById("colored-left-arrow")
          // let coloredDownArrow = document.getElementById("colored-down-arrow")
          // let coloredUpArrow = document.getElementById("colored-up-arrow")
          // let coloredRightArrow = document.getElementById("colored-right-arrow")

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

          // necessary? idk
          // ctx_bottom.drawImage(leftArrow, 10, 10);

          // if (j === 0 && subArr[i] > 250) { 
          if (j === 0 && subArr[i] > 250) {
            // ctx.clearRect(10, 50, 120, 120);
            // ctx.clearRect(0, 0, canvas.width, canvas.height)
            // debugger
            ctx.drawImage(coloredLeftArrow, 10, 10); // 50
            // setTimeout()
            // ctx.clearRect(0, 0, canvas.width, canvas.height);

            // ctx.clearRect(10, 10, 120, 120); 
          }
          // KINDA FLICKERS
          else if (j === 0 && subArr[i] < 150) {
              ctx.drawImage(leftArrow, 10, 10); // 50
            }

          if (j === 1 && subArr[i] > 190) {
            ctx.drawImage(coloredDownArrow, 365, 10);
          } else if (j === 0 && subArr[i] < 150) {
            ctx.drawImage(downArrow, 365, 10);
          }

          if (j === 2 && subArr[i] > 170) {
            ctx.drawImage(coloredUpArrow, 726, 10);
          } else if (j === 0 && subArr[i] < 130) {
            ctx.drawImage(upArrow, 726, 10);
          }

          if (j === 3 && subArr[i] > 50) {
            ctx.drawImage(coloredRightArrow, 1100, 10);
          } else if (j === 0 && subArr[i] < 30) {
            ctx.drawImage(rightArrow, 1100, 10);
          }

          // ctx.clearRect(10, 50, 120, 120)

          // if (j === 0 && subArr[i] < 250) {
          //   ctx.drawImage(leftArrow, 10, 100) 
          // } else if (j === 0 && subArr[i] > 250) {
          //   ctx.drawImage(coloredLeftArrow, 10, 50)
          // }

          /////NOT A FUNCTION
          // if (j === 0 && subArr[i] > 250) {
          //   // ctx.clearRect(10, 10, 120, 120)
          //   ctx.drawImage(coloredLeftArrow, 10, 10)
          //   // ctx.clearImage(leftArrow)
          //   // debugger
          // } else {
          //   ctx.drawImage(leftArrow, 10, 100) // 10, 10
          // }

          //// MORE NOT FUNCTIONS
          // if (j === 1 && subArr[i] > 190) {
          //   ctx.drawImage(coloredDownArrow, 365, 10)
          //   ctx.clearImage(downArrow)
          //   // debugger
          // } else {
          //   ctx.drawImage(downArrow, 365, 10)
          // }

          // if (j === 2 && subArr[i] > 170) {
          //   ctx.drawImage(coloredUpArrow, 726, 10)
          //   ctx.clearImage(upArrow)
          // } else {
          //   ctx.drawImage(upArrow, 726, 10)
          // }

          // if (j === 3 && subArr[i] > 50) {
          //   ctx.drawImage(coloredRightArrow, 1100, 10)
          //   ctx.clearImage(rightArrow)
          // } else {
          //   ctx.drawImage(rightArrow, 1100, 10)
          // }
          ///// END OF NOT FUNCTIONS

          // ctx.drawImage(leftArrow, 10, 10)
          // ctx.drawImage(downArrow, 365, 10)
          // ctx.drawImage(upArrow, 726, 10)
          // ctx.drawImage(rightArrow, 1100, 10)

          // experimental
          // ctx.drawImage(downArrow, 365, 60)
          // ctx.drawImage(upArrow, 726, 60)
          // ctx.drawImage(rightArrow, 1100, 60)
        }
      }
    }

    // function renderArrows() {
    //   let leftArrow = document.getElementById("left-arrow");
    //   let downArrow = document.getElementById("down-arrow");
    //   let upArrow = document.getElementById("up-arrow");
    //   let rightArrow = document.getElementById("right-arrow");

    //   ctx.drawImage(leftArrow, 100, 100)
    // }

    audio.play();
    renderFrame();
    // renderArrows();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImNhbnZhc19ib3R0b20iLCJhdWRpbyIsIm9uY2hhbmdlIiwiZmlsZXMiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjdHhfYm90dG9tIiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImFuYWx5c2VyIiwiY3JlYXRlQW5hbHlzZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJmZnRTaXplIiwiYnVmZmVyTGVuZ3RoIiwiZnJlcXVlbmN5QmluQ291bnQiLCJkYXRhQXJyYXkiLCJVaW50OEFycmF5IiwiV0lEVEgiLCJIRUlHSFQiLCJiYXJXaWR0aCIsImJhckhlaWdodCIsIngiLCJyZW5kZXJGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdldEJ5dGVGcmVxdWVuY3lEYXRhIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyIiwiZyIsImIiLCJiYXJzIiwicXVhcnRlckxlbmd0aCIsImxlbmd0aCIsImZpcnN0Iiwic2xpY2UiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsIm5ld0FyciIsImoiLCJzdWJBcnIiLCJpIiwiY29sb3JlZExlZnRBcnJvdyIsIkltYWdlIiwibGVmdEFycm93IiwiY29sb3JlZERvd25BcnJvdyIsImRvd25BcnJvdyIsImNvbG9yZWRVcEFycm93IiwidXBBcnJvdyIsImNvbG9yZWRSaWdodEFycm93IiwicmlnaHRBcnJvdyIsImRyYXdJbWFnZSIsInBsYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQUEsT0FBT0MsTUFBUCxHQUFnQixZQUFZO0FBQzFCLE1BQU1DLE9BQU9DLFNBQVNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBYjtBQUNBLE1BQU1DLFNBQVNGLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLE1BQU1FLGdCQUFnQkgsU0FBU0MsY0FBVCxDQUF3QixlQUF4QixDQUF0QjtBQUNBLE1BQU1HLFFBQVFKLFNBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDs7QUFFQUYsT0FBS00sUUFBTCxHQUFnQixZQUFZOztBQUUxQixRQUFNQyxRQUFRLEtBQUtBLEtBQW5CO0FBQ0FGLFVBQU1HLEdBQU4sR0FBWUMsSUFBSUMsZUFBSixDQUFvQkgsTUFBTSxDQUFOLENBQXBCLENBQVo7O0FBRUE7QUFDQUosV0FBT1EsS0FBUCxHQUFlYixPQUFPYyxVQUF0QjtBQUNBVCxXQUFPVSxNQUFQLEdBQWdCZixPQUFPZ0IsV0FBdkI7QUFDQSxRQUFNQyxNQUFNWixPQUFPYSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQTs7QUFFQTtBQUNBWixrQkFBY08sS0FBZCxHQUFzQmIsT0FBT2MsVUFBN0I7QUFDQVIsa0JBQWNTLE1BQWQsR0FBdUJmLE9BQU9nQixXQUE5QjtBQUNBLFFBQU1HLGFBQWFiLGNBQWNZLFVBQWQsQ0FBeUIsSUFBekIsQ0FBbkI7QUFDQTs7QUFFQSxRQUFNRSxVQUFVLElBQUlDLFlBQUosRUFBaEI7QUFDQSxRQUFJWCxNQUFNVSxRQUFRRSx3QkFBUixDQUFpQ2YsS0FBakMsQ0FBVjtBQUNBLFFBQU1nQixXQUFXSCxRQUFRSSxjQUFSLEVBQWpCOztBQUVBZCxRQUFJZSxPQUFKLENBQVlGLFFBQVo7QUFDQUEsYUFBU0UsT0FBVCxDQUFpQkwsUUFBUU0sV0FBekI7O0FBRUE7QUFDQUgsYUFBU0ksT0FBVCxHQUFtQixJQUFuQjtBQUNBLFFBQU1DLGVBQWVMLFNBQVNNLGlCQUE5QjtBQUNBLFFBQU1DLFlBQVksSUFBSUMsVUFBSixDQUFlSCxZQUFmLENBQWxCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxRQUFNSSxRQUFRM0IsT0FBT1EsS0FBckI7QUFDQSxRQUFNb0IsU0FBUzVCLE9BQU9VLE1BQXRCO0FBQ0EsUUFBTW1CLFdBQVlGLFFBQVFKLFlBQVQsR0FBeUIsQ0FBMUMsQ0FuQzBCLENBbUNtQjtBQUM3Qzs7QUFFQSxRQUFJTyxrQkFBSjtBQUNBLFFBQUlDLElBQUksQ0FBUjtBQUNBOztBQUVBLGFBQVNDLFdBQVQsR0FBdUI7QUFDckJDLDRCQUFzQkQsV0FBdEI7QUFDQUQsVUFBSSxDQUFKOztBQUVBYixlQUFTZ0Isb0JBQVQsQ0FBOEJULFNBQTlCLEVBSnFCLENBSXFCO0FBQzFDO0FBQ0E7O0FBRUFYLGlCQUFXcUIsU0FBWCxHQUF1QixpQkFBdkI7QUFDQXJCLGlCQUFXc0IsUUFBWCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQlQsS0FBMUIsRUFBaUNDLE1BQWpDOztBQUVBOztBQUVBLFVBQUlTLFVBQUo7QUFBQSxVQUFPQyxVQUFQO0FBQUEsVUFBVUMsVUFBVjtBQUNBLFVBQUlDLE9BQU8sRUFBWCxDQWRxQixDQWNOOztBQUVmO0FBQ0EsVUFBSUMsZ0JBQWdCaEIsVUFBVWlCLE1BQVYsR0FBbUIsQ0FBdkM7O0FBRUEsVUFBSUMsUUFBUWxCLFVBQVVtQixLQUFWLENBQWdCLENBQWhCLEVBQW1CSCxhQUFuQixDQUFaO0FBQ0E7QUFDQSxVQUFJSSxTQUFTcEIsVUFBVW1CLEtBQVYsQ0FBZ0JILGFBQWhCLEVBQStCQSxnQkFBZ0IsQ0FBL0MsQ0FBYjtBQUNBLFVBQUlLLFFBQVFyQixVQUFVbUIsS0FBVixDQUFnQkgsZ0JBQWdCLENBQWhDLEVBQW1DQSxnQkFBZ0IsQ0FBbkQsQ0FBWjtBQUNBLFVBQUlNLFNBQVN0QixVQUFVbUIsS0FBVixDQUFnQkgsZ0JBQWdCLENBQWhDLEVBQW1DQSxnQkFBZ0IsQ0FBbkQsQ0FBYjs7QUFFQSxVQUFJTyxTQUFTLENBQUNMLEtBQUQsRUFBUUUsTUFBUixFQUFnQkMsS0FBaEIsRUFBdUJDLE1BQXZCLENBQWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxPQUFPTixNQUEzQixFQUFtQ08sR0FBbkMsRUFBd0M7O0FBRXRDLFlBQUlDLFNBQVNGLE9BQU9DLENBQVAsQ0FBYjtBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsYUFBSyxJQUFJRSxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0FBQUU7QUFDN0JyQixzQkFBYW9CLE9BQU9DLENBQVAsSUFBWSxHQUF6QixDQUQyQixDQUNJOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBSUYsTUFBTSxDQUFOLElBQVdDLE9BQU9DLENBQVAsSUFBWSxHQUEzQixFQUFnQztBQUFFO0FBQ2hDO0FBQ0E7QUFDQWQsZ0JBQUksR0FBSjtBQUNBQyxnQkFBSSxDQUFKO0FBQ0FDLGdCQUFJLEdBQUo7O0FBRUE7QUFDQTtBQUNBOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLFdBdkJELE1BdUJPLElBQUlVLE1BQU0sQ0FBTixJQUFXQyxPQUFPQyxDQUFQLElBQVksR0FBM0IsRUFBZ0M7QUFBRTtBQUN2QztBQUNBZCxnQkFBSSxFQUFKO0FBQ0FDLGdCQUFJLENBQUo7QUFDQUMsZ0JBQUksRUFBSjtBQUNELFdBTE0sTUFLQSxJQUFJVSxNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEdBQTNCLEVBQWdDO0FBQUU7QUFDdkM7QUFDQTtBQUNBZCxnQkFBSSxDQUFKO0FBQ0FDLGdCQUFJLEdBQUo7QUFDQUMsZ0JBQUksR0FBSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLFdBbEJNLE1Ba0JBLElBQUlVLE1BQU0sQ0FBTixJQUFXQyxPQUFPQyxDQUFQLElBQVksR0FBM0IsRUFBZ0M7QUFBRTtBQUN2QztBQUNBZCxnQkFBSSxDQUFKO0FBQ0FDLGdCQUFJLEVBQUo7QUFDQUMsZ0JBQUksRUFBSjtBQUNELFdBTE0sTUFLQSxJQUFJVSxNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEdBQTNCLEVBQWdDO0FBQUU7QUFDdkM7QUFDQTtBQUNBZCxnQkFBSSxHQUFKO0FBQ0FDLGdCQUFJLEdBQUo7QUFDQUMsZ0JBQUksRUFBSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLFdBbEJNLE1Ba0JBLElBQUlVLE1BQU0sQ0FBTixJQUFXQyxPQUFPQyxDQUFQLElBQVksR0FBM0IsRUFBZ0M7QUFBRTtBQUN2QztBQUNBZCxnQkFBSSxDQUFKO0FBQ0FDLGdCQUFJLEVBQUo7QUFDQUMsZ0JBQUksQ0FBSjtBQUNELFdBTE0sTUFLQSxJQUFJVSxNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEVBQTNCLEVBQStCO0FBQUU7QUFDdEM7QUFDQTtBQUNBZCxnQkFBSSxHQUFKO0FBQ0FDLGdCQUFJLEdBQUo7QUFDQUMsZ0JBQUksQ0FBSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsV0FuQk0sTUFtQkEsSUFBSVUsTUFBTSxDQUFOLElBQVdDLE9BQU9DLENBQVAsSUFBWSxFQUEzQixFQUErQjtBQUFFO0FBQ3RDZCxnQkFBSSxFQUFKO0FBQ0FDLGdCQUFJLEVBQUo7QUFDQUMsZ0JBQUksQ0FBSjtBQUNEOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXpCLHFCQUFXcUIsU0FBWCxZQUE4QkUsQ0FBOUIsU0FBbUNDLENBQW5DLFNBQXdDQyxDQUF4QztBQUNBekIscUJBQVdzQixRQUFYLENBQW9CTCxDQUFwQixFQUF3QkgsU0FBU0UsU0FBakMsRUFBNkNELFFBQTdDLEVBQXVEQyxTQUF2RDs7QUFFQTtBQUNBQyxlQUFLRixXQUFXLEVBQWhCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQUl1QixtQkFBbUIsSUFBSUMsS0FBSixFQUF2QjtBQUNBRCwyQkFBaUIvQyxHQUFqQixHQUF1QixtQ0FBdkI7O0FBRUEsY0FBSWlELFlBQVksSUFBSUQsS0FBSixFQUFoQjtBQUNBQyxvQkFBVWpELEdBQVYsR0FBZ0IsMkJBQWhCOztBQUVBLGNBQUlrRCxtQkFBbUIsSUFBSUYsS0FBSixFQUF2QjtBQUNBRSwyQkFBaUJsRCxHQUFqQixHQUF1QixtQ0FBdkI7O0FBRUEsY0FBSW1ELFlBQVksSUFBSUgsS0FBSixFQUFoQjtBQUNBRyxvQkFBVW5ELEdBQVYsR0FBZ0IsMkJBQWhCOztBQUVBLGNBQUlvRCxpQkFBaUIsSUFBSUosS0FBSixFQUFyQjtBQUNBSSx5QkFBZXBELEdBQWYsR0FBcUIsaUNBQXJCOztBQUVBLGNBQUlxRCxVQUFVLElBQUlMLEtBQUosRUFBZDtBQUNBSyxrQkFBUXJELEdBQVIsR0FBYyx5QkFBZDs7QUFFQSxjQUFJc0Qsb0JBQW9CLElBQUlOLEtBQUosRUFBeEI7QUFDQU0sNEJBQWtCdEQsR0FBbEIsR0FBd0Isb0NBQXhCOztBQUVBLGNBQUl1RCxhQUFhLElBQUlQLEtBQUosRUFBakI7QUFDQU8scUJBQVd2RCxHQUFYLEdBQWlCLDRCQUFqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBSTRDLE1BQU0sQ0FBTixJQUFXQyxPQUFPQyxDQUFQLElBQVksR0FBM0IsRUFBZ0M7QUFDOUI7QUFDQTtBQUNBO0FBQ0F2QyxnQkFBSWlELFNBQUosQ0FBY1QsZ0JBQWQsRUFBZ0MsRUFBaEMsRUFBb0MsRUFBcEMsRUFKOEIsQ0FJVztBQUN6QztBQUNBOztBQUVBO0FBQ0Q7QUFDRDtBQVZBLGVBV0ssSUFBSUgsTUFBTSxDQUFOLElBQVdDLE9BQU9DLENBQVAsSUFBWSxHQUEzQixFQUFnQztBQUNuQ3ZDLGtCQUFJaUQsU0FBSixDQUFjUCxTQUFkLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBRG1DLENBQ0Q7QUFDbkM7O0FBRUQsY0FBSUwsTUFBTSxDQUFOLElBQVdDLE9BQU9DLENBQVAsSUFBWSxHQUEzQixFQUFnQztBQUM5QnZDLGdCQUFJaUQsU0FBSixDQUFjTixnQkFBZCxFQUFnQyxHQUFoQyxFQUFxQyxFQUFyQztBQUNELFdBRkQsTUFFTyxJQUFJTixNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEdBQTNCLEVBQWdDO0FBQ3JDdkMsZ0JBQUlpRCxTQUFKLENBQWNMLFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsRUFBOUI7QUFDRDs7QUFFRCxjQUFJUCxNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEdBQTNCLEVBQWdDO0FBQzlCdkMsZ0JBQUlpRCxTQUFKLENBQWNKLGNBQWQsRUFBOEIsR0FBOUIsRUFBbUMsRUFBbkM7QUFDRCxXQUZELE1BRU8sSUFBSVIsTUFBTSxDQUFOLElBQVdDLE9BQU9DLENBQVAsSUFBWSxHQUEzQixFQUFnQztBQUNyQ3ZDLGdCQUFJaUQsU0FBSixDQUFjSCxPQUFkLEVBQXVCLEdBQXZCLEVBQTRCLEVBQTVCO0FBQ0Q7O0FBRUQsY0FBSVQsTUFBTSxDQUFOLElBQVdDLE9BQU9DLENBQVAsSUFBWSxFQUEzQixFQUErQjtBQUM3QnZDLGdCQUFJaUQsU0FBSixDQUFjRixpQkFBZCxFQUFpQyxJQUFqQyxFQUF1QyxFQUF2QztBQUNELFdBRkQsTUFFTyxJQUFJVixNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEVBQTNCLEVBQStCO0FBQ3BDdkMsZ0JBQUlpRCxTQUFKLENBQWNELFVBQWQsRUFBMEIsSUFBMUIsRUFBZ0MsRUFBaEM7QUFDRDs7QUFXQzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVEO0FBR0Y7QUFFQTs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUExRCxVQUFNNEQsSUFBTjtBQUNBOUI7QUFDQTtBQUVELEdBellEO0FBMFlELENBaFpELEM7Ozs7Ozs7Ozs7O0FDRkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlLWlucHV0XCIpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY2FudmFzX2JvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzX2JvdHRvbVwiKTtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuXG4gIGZpbGUub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXM7XG4gICAgYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSk7IFxuXG4gICAgLy8gY2FudmFzIGluaXRpYWxpemF0aW9uXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vXG5cbiAgICAvLyBzZWNvbmQgY2FudmFzXG4gICAgY2FudmFzX2JvdHRvbS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhc19ib3R0b20uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eF9ib3R0b20gPSBjYW52YXNfYm90dG9tLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgIGNvbnN0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuXG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAvLyBhbmFseXNlci5mZnRTaXplID0gMTYzODQ7XG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuICAgIC8vIFsyNTAsIDE5MCwgMCwgMjcwXVxuXG4gICAgLy8gYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KVxuXG4gICAgY29uc3QgV0lEVEggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiA5OyAvLyAxMywgOVxuICAgIC8vIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDI7XG5cbiAgICBsZXQgYmFySGVpZ2h0O1xuICAgIGxldCB4ID0gMDtcbiAgICAvLyBsZXQgeCA9IDEwXG5cbiAgICBmdW5jdGlvbiByZW5kZXJGcmFtZSgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJGcmFtZSk7XG4gICAgICB4ID0gMDtcblxuICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KTsgLy8gZnJlcXVlbmNpZXNcbiAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4yKVwiO1xuICAgICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuXG4gICAgICBjdHhfYm90dG9tLmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjIpXCI7XG4gICAgICBjdHhfYm90dG9tLmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuXG4gICAgICBsZXQgciwgZywgYjtcbiAgICAgIGxldCBiYXJzID0gNDA7IC8vIDExOFxuXG4gICAgICAvLyBzcGxpdCB0aGUgZGF0YSBhcnJheSBpbiA0IGVxdWFsIHBhcnRzXG4gICAgICBsZXQgcXVhcnRlckxlbmd0aCA9IGRhdGFBcnJheS5sZW5ndGggLyA0O1xuXG4gICAgICBsZXQgZmlyc3QgPSBkYXRhQXJyYXkuc2xpY2UoMCwgcXVhcnRlckxlbmd0aCk7XG4gICAgICAvLyBkZWJ1Z2dlclxuICAgICAgbGV0IHNlY29uZCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoLCBxdWFydGVyTGVuZ3RoICogMik7XG4gICAgICBsZXQgdGhpcmQgPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDIsIHF1YXJ0ZXJMZW5ndGggKiAzKTtcbiAgICAgIGxldCBmb3VydGggPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDMsIHF1YXJ0ZXJMZW5ndGggKiA0KTtcblxuICAgICAgbGV0IG5ld0FyciA9IFtmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0Fycik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmb3VydGgpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcmQpO1xuICAgICAgLy8gY29uc29sZS5sb2coc2Vjb25kKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpcnN0KTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdBcnIubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICBsZXQgc3ViQXJyID0gbmV3QXJyW2pdO1xuICAgICAgICAvLyBqIGlzIHRoZSBzZWN0aW9uXG4gICAgICAvLyBpZiAoaiA9PT0gMSkgeyBcbiAgICAgIC8vICAgZGVidWdnZXJcbiAgICAgIC8vIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyAzMFxuICAgICAgICBiYXJIZWlnaHQgPSAoc3ViQXJyW2ldICogMi41KTsgLy8gMi41IC0gZ29vZFxuXG4gICAgICAgIC8vY2hhbmdlIGl0IHRvIGZyZXF1ZW5jeSByYW5nZVxuICAgICAgICAvL2dldCB2b2wgYW5kIGZyZXFcblxuICAgICAgICAvLyBqID09PSAwIChsZWZ0KVxuICAgICAgICAvLyBob3QgcGlua1xuICAgICAgICAvLyAyNTUsIDAsIDE5MVxuICAgICAgICAvLyBsaWdodGVyXG4gICAgICAgIC8vIDI1NSwgMTMwLCAyMjRcblxuICAgICAgICAvLyBqID09PSAxIChkb3duKVxuICAgICAgICAvLyBjeWFuXG4gICAgICAgIC8vIDAsIDI1NSwgMjIxXG4gICAgICAgIC8vIGxpZ2h0ZXJcbiAgICAgICAgLy8gMTQ1LCAyNTUsIDI0MVxuXG4gICAgICAgIC8vIGogPT09IDIgKHVwKSBcbiAgICAgICAgLy8gY2hhcnRyZXVzZVxuICAgICAgICAvLyAyMjMsIDI1NSwgNDJcbiAgICAgICAgLy8gbGlnaHRlclxuICAgICAgICAvLyAyMzQsIDI1NSwgMTE1XG5cbiAgICAgICAgLy8gaiA9PT0gM1xuICAgICAgICAvLyBvcmFuZ2VcbiAgICAgICAgLy8gMjU1LCAxNjQsIDBcbiAgICAgICAgLy8gbGlnaHRlclxuICAgICAgICAvLyAyNTUsIDE5NSwgODdcblxuICAgICAgICBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAyNTApIHsgLy8gMjEwLCAyMzAsIDI0MCAoc2tpbm55KVxuICAgICAgICAgIC8vIHdlIGFyZSBpbiB0aGUgZmlyc3Qgc2VjdGlvblxuICAgICAgICAgIC8vIGhvdCBwaW5rXG4gICAgICAgICAgciA9IDI1NVxuICAgICAgICAgIGcgPSAwXG4gICAgICAgICAgYiA9IDE5MVxuXG4gICAgICAgICAgLy8gQVJST1cgUkVOREVSSU5HIEFUVEVNUFQ6XG4gICAgICAgICAgLy8gbGV0IGNvbG9yZWRMZWZ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yZWQtbGVmdC1hcnJvd1wiKVxuICAgICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UoY29sb3JlZExlZnRBcnJvdywgMjAsIDEwKVxuXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAxOTApIHtcbiAgICAgICAgLy8gICByID0gMjU1XG4gICAgICAgIC8vICAgZyA9IDk3XG4gICAgICAgIC8vICAgYiA9IDIwMlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMTcwKSB7XG4gICAgICAgIC8vICAgciA9IDI1NVxuICAgICAgICAvLyAgIGcgPSAxNjZcbiAgICAgICAgLy8gICBiID0gMjI1XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAxNTApIHtcbiAgICAgICAgLy8gICByID0gMjUyXG4gICAgICAgIC8vICAgZyA9IDIxN1xuICAgICAgICAvLyAgIGIgPSAyNDFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyAvLyAyMTAsIDIzMFxuICAgICAgICAgIC8vZXZlcnl0aGluZyBlbHNlIGlzIGxpZ2h0IHBpbmtcbiAgICAgICAgICByID0gNzFcbiAgICAgICAgICBnID0gNFxuICAgICAgICAgIGIgPSA3MFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7IC8vIDEyMCwgMTMwLCAxNDAgKHNraW5ueSksIDE4MFxuICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgLy8gY3lhblxuICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkge1xuICAgICAgICAvLyAgIHIgPSA2M1xuICAgICAgICAvLyAgIGcgPSAyMTdcbiAgICAgICAgLy8gICBiID0gMjE0XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPiAxNzApIHtcbiAgICAgICAgLy8gICByID0gMTYwXG4gICAgICAgIC8vICAgZyA9IDI1MFxuICAgICAgICAvLyAgIGIgPSAyNDhcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE1MCkge1xuICAgICAgICAvLyAgIHIgPSAyMTdcbiAgICAgICAgLy8gICBnID0gMjUyXG4gICAgICAgIC8vICAgYiA9IDI1MlxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldIDwgMTkwKSB7IC8vIDEyMCwgMTMwXG4gICAgICAgICAgLy8gbGlnaHQgY3lhblxuICAgICAgICAgIHIgPSAyXG4gICAgICAgICAgZyA9IDY0XG4gICAgICAgICAgYiA9IDc5XG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPiAxNzApIHsgLy8gMTAwLCAxMTAsIDEyMCAoc2tpbm55KVxuICAgICAgICAgIC8vdGhpcmRcbiAgICAgICAgICAvL2NoYXJ0cmV1c2VcbiAgICAgICAgICByID0gMjIzXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSA0MlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgIC8vICAgciA9IDI0MFxuICAgICAgICAvLyAgIGcgPSAyNDVcbiAgICAgICAgLy8gICBiID0gOThcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAvLyAgIHIgPSAyNDhcbiAgICAgICAgLy8gICBnID0gMjUwXG4gICAgICAgIC8vICAgYiA9IDE4MlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTUwKSB7XG4gICAgICAgIC8vICAgciA9IDI0NlxuICAgICAgICAvLyAgIGcgPSAyNDdcbiAgICAgICAgLy8gICBiID0gMjEzXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxNzApIHsgLy8gMTAwLCAxMTBcbiAgICAgICAgICAvL2xpZ2h0IGNoYXJ0cmV1c2VcbiAgICAgICAgICByID0gNFxuICAgICAgICAgIGcgPSA3MVxuICAgICAgICAgIGIgPSA5XG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkgeyAvLyAzMCwgNDAgKHNraW5ueSlcbiAgICAgICAgICAvL2ZvdXJ0aCBzZWN0aW9uXG4gICAgICAgICAgLy9vcmFuZ2VcbiAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgZyA9IDE2NFxuICAgICAgICAgIGIgPSAwXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiAxOTApIHtcbiAgICAgICAgLy8gICByID0gNjBcbiAgICAgICAgLy8gICBnID0gMjA3XG4gICAgICAgIC8vICAgYiA9IDcyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiAxNzApIHtcbiAgICAgICAgLy8gICByID0gMTU0XG4gICAgICAgIC8vICAgZyA9IDI1MlxuICAgICAgICAvLyAgIGIgPSAxNjJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDE1MCkge1xuICAgICAgICAvLyAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vICAgciA9IDIxMFxuICAgICAgICAvLyAgIGcgPSAyNTBcbiAgICAgICAgLy8gICBiID0gMjEzXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPCA1MCkgeyAvLyAzMFxuICAgICAgICAgIHIgPSA3MVxuICAgICAgICAgIGcgPSAxNFxuICAgICAgICAgIGIgPSA0XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIGlmIChzdWJBcnJbaV0gPiAyMTApIHsgLy8gaG90IHBpbmsgMjEwXG4gICAgICAgIC8vICAgciA9IDI1NVxuICAgICAgICAvLyAgIGcgPSAwXG4gICAgICAgIC8vICAgYiA9IDE3NFxuICAgICAgICAvLyB9IGVsc2UgaWYgKHN1YkFycltpXSA+IDE5MCkgeyAvLyBjeWFuIDIwMFxuICAgICAgICAvLyAgIHIgPSAwXG4gICAgICAgIC8vICAgZyA9IDI1NVxuICAgICAgICAvLyAgIGIgPSAyNTFcbiAgICAgICAgLy8gfSBlbHNlIGlmIChzdWJBcnJbaV0gPiAxNzApIHsgLy8geWVsbG93IDE5MFxuICAgICAgICAvLyAgIHIgPSAyNDJcbiAgICAgICAgLy8gICBnID0gMjU1XG4gICAgICAgIC8vICAgYiA9IDBcbiAgICAgICAgLy8gfSBlbHNlIGlmIChzdWJBcnJbaV0gPiAxNTApIHsgLy8gbGltZSBncmVlbiAxODBcbiAgICAgICAgLy8gICByID0gMTA2XG4gICAgICAgIC8vICAgZyA9IDI1NVxuICAgICAgICAvLyAgIGIgPSAwXG4gICAgICAgIC8vIH0gZWxzZSB7IC8vIG9yYW5nZVxuICAgICAgICAvLyAgIHIgPSAyNTVcbiAgICAgICAgLy8gICBnID0gMTY2XG4gICAgICAgIC8vICAgYiA9IDBcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGN0eF9ib3R0b20uZmlsbFN0eWxlID0gYHJnYigke3J9LCR7Z30sJHtifSlgO1xuICAgICAgICBjdHhfYm90dG9tLmZpbGxSZWN0KHgsIChIRUlHSFQgLSBiYXJIZWlnaHQpLCBiYXJXaWR0aCwgYmFySGVpZ2h0KTtcblxuICAgICAgICAvLyB4ICs9IGJhcldpZHRoICsgMjtcbiAgICAgICAgeCArPSBiYXJXaWR0aCArIDEwO1xuXG4gICAgICAgIC8vIC8vIFJlbmRlcmluZyB0aGUgZ3JheSBhcnJvd3MgYXQgdGhlIHRvcCBvZiB0aGUgc2NyZWVuXG5cbiAgICAgICAgLy8gbGV0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1hcnJvd1wiKTtcbiAgICAgICAgLy8gbGV0IGRvd25BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bi1hcnJvd1wiKTtcbiAgICAgICAgLy8gbGV0IHVwQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwLWFycm93XCIpO1xuICAgICAgICAvLyBsZXQgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtYXJyb3dcIik7XG5cbiAgICAgICAgLy8gbGV0IGNvbG9yZWRMZWZ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yZWQtbGVmdC1hcnJvd1wiKVxuICAgICAgICAvLyBsZXQgY29sb3JlZERvd25BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JlZC1kb3duLWFycm93XCIpXG4gICAgICAgIC8vIGxldCBjb2xvcmVkVXBBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JlZC11cC1hcnJvd1wiKVxuICAgICAgICAvLyBsZXQgY29sb3JlZFJpZ2h0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yZWQtcmlnaHQtYXJyb3dcIilcblxuICAgICAgICBsZXQgY29sb3JlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb2xvcmVkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgbGV0IGxlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgbGV0IGNvbG9yZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY29sb3JlZERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgIGxldCBkb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgIGxldCBjb2xvcmVkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb2xvcmVkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICBsZXQgdXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB1cEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICBsZXQgY29sb3JlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY29sb3JlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgbGV0IHJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgLy8gbmVjZXNzYXJ5PyBpZGtcbiAgICAgICAgLy8gY3R4X2JvdHRvbS5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApO1xuXG4gICAgICAgIC8vIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDI1MCkgeyBcbiAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IFxuICAgICAgICAgIC8vIGN0eC5jbGVhclJlY3QoMTAsIDUwLCAxMjAsIDEyMCk7XG4gICAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRMZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgLy8gc2V0VGltZW91dCgpXG4gICAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIGN0eC5jbGVhclJlY3QoMTAsIDEwLCAxMjAsIDEyMCk7IFxuICAgICAgICB9IFxuICAgICAgICAvLyBLSU5EQSBGTElDS0VSU1xuICAgICAgICBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDE1MCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApOyAvLyA1MFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkRG93bkFycm93LCAzNjUsIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDE1MCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bkFycm93LCAzNjUsIDEwKTsgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPiAxNzApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRVcEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDEzMCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZFJpZ2h0QXJyb3csIDExMDAsIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDMwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgIC8vIGN0eC5jbGVhclJlY3QoMTAsIDUwLCAxMjAsIDEyMClcblxuICAgICAgICAvLyBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAyNTApIHtcbiAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwMCkgXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAyNTApIHtcbiAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRMZWZ0QXJyb3csIDEwLCA1MClcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgICAgLy8vLy9OT1QgQSBGVU5DVElPTlxuICAgICAgICAvLyBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAyNTApIHtcbiAgICAgICAgLy8gICAvLyBjdHguY2xlYXJSZWN0KDEwLCAxMCwgMTIwLCAxMjApXG4gICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkTGVmdEFycm93LCAxMCwgMTApXG4gICAgICAgIC8vICAgLy8gY3R4LmNsZWFySW1hZ2UobGVmdEFycm93KVxuICAgICAgICAvLyAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMDApIC8vIDEwLCAxMFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8vLyBNT1JFIE5PVCBGVU5DVElPTlNcbiAgICAgICAgLy8gaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkRG93bkFycm93LCAzNjUsIDEwKVxuICAgICAgICAvLyAgIGN0eC5jbGVhckltYWdlKGRvd25BcnJvdylcbiAgICAgICAgLy8gICAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UoZG93bkFycm93LCAzNjUsIDEwKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7XG4gICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMClcbiAgICAgICAgLy8gICBjdHguY2xlYXJJbWFnZSh1cEFycm93KVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCAxMClcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7XG4gICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApXG4gICAgICAgIC8vICAgY3R4LmNsZWFySW1hZ2UocmlnaHRBcnJvdylcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vLy8vIEVORCBPRiBOT1QgRlVOQ1RJT05TXG5cbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMClcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShkb3duQXJyb3csIDM2NSwgMTApXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCAxMClcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMClcblxuICAgICAgICAvLyBleHBlcmltZW50YWxcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShkb3duQXJyb3csIDM2NSwgNjApXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCA2MClcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCA2MClcblxuICAgICAgfVxuXG4gICAgICBcbiAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiByZW5kZXJBcnJvd3MoKSB7XG4gICAgLy8gICBsZXQgbGVmdEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LWFycm93XCIpO1xuICAgIC8vICAgbGV0IGRvd25BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bi1hcnJvd1wiKTtcbiAgICAvLyAgIGxldCB1cEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cC1hcnJvd1wiKTtcbiAgICAvLyAgIGxldCByaWdodEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1hcnJvd1wiKTtcblxuICAgIC8vICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwMCwgMTAwKVxuICAgIC8vIH1cblxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICByZW5kZXJGcmFtZSgpO1xuICAgIC8vIHJlbmRlckFycm93cygpO1xuXG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9