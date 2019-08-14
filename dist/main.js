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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2Nzcz8zNzFmIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImZpbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiY2FudmFzX2JvdHRvbSIsImF1ZGlvIiwib25jaGFuZ2UiLCJmaWxlcyIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImN0eF9ib3R0b20iLCJjb250ZXh0IiwiQXVkaW9Db250ZXh0IiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiYW5hbHlzZXIiLCJjcmVhdGVBbmFseXNlciIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImZmdFNpemUiLCJidWZmZXJMZW5ndGgiLCJmcmVxdWVuY3lCaW5Db3VudCIsImRhdGFBcnJheSIsIlVpbnQ4QXJyYXkiLCJXSURUSCIsIkhFSUdIVCIsImJhcldpZHRoIiwiYmFySGVpZ2h0IiwieCIsInJlbmRlckZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInIiLCJnIiwiYiIsImJhcnMiLCJxdWFydGVyTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwibmV3QXJyIiwiaiIsInN1YkFyciIsImkiLCJjb2xvcmVkTGVmdEFycm93IiwiSW1hZ2UiLCJsZWZ0QXJyb3ciLCJjb2xvcmVkRG93bkFycm93IiwiZG93bkFycm93IiwiY29sb3JlZFVwQXJyb3ciLCJ1cEFycm93IiwiY29sb3JlZFJpZ2h0QXJyb3ciLCJyaWdodEFycm93IiwiZHJhd0ltYWdlIiwi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QUVELGNBQUlQLE1BQU0sQ0FBTixJQUFXQyxPQUFPQyxDQUFQLElBQVksR0FBM0IsRUFBZ0M7QUFDOUJ2QyxnQkFBSWlELFNBQUosQ0FBY0osY0FBZCxFQUE4QixHQUE5QixFQUFtQyxFQUFuQztBQUNELFdBRkQsTUFFTyxJQUFJUixNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEdBQTNCLEVBQWdDO0FBQ3JDdkMsZ0JBQUlpRCxTQUFKLENBQWNILE9BQWQsRUFBdUIsR0FBdkIsRUFBNEIsRUFBNUI7QUFDRDs7QUFFRCxjQUFJVCxNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEVBQTNCLEVBQStCO0FBQzdCdkMsZ0JBQUlpRCxTQUFKLENBQWNGLGlCQUFkLEVBQWlDLElBQWpDLEVBQXVDLEVBQXZDO0FBQ0QsV0FGRCxNQUVPLElBQUlWLE1BQU0sQ0FBTixJQUFXQyxPQUFPQyxDQUFQLElBQVksRUFBM0IsRUFBK0I7QUFDcEN2QyxnQkFBSWlELFNBQUosQ0FBY0QsVUFBZCxFQUEwQixJQUExQixFQUFnQyxFQUFoQztBQUNEOztBQVdDOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUQ7QUFHRjtBQUVBOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTFELFVBQU00RCxJQUFOO0FBQ0E5QjtBQUNBO0FBRUQsR0F6WUQ7QUEwWUQsQ0FoWkQsQzs7Ozs7Ozs7Ozs7QUNGQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGUtaW5wdXRcIik7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBjYW52YXNfYm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNfYm90dG9tXCIpO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG5cbiAgZmlsZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcztcbiAgICBhdWRpby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKTsgXG5cbiAgICAvLyBjYW52YXMgaW5pdGlhbGl6YXRpb25cbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy9cblxuICAgIC8vIHNlY29uZCBjYW52YXNcbiAgICBjYW52YXNfYm90dG9tLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzX2JvdHRvbS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4X2JvdHRvbSA9IGNhbnZhc19ib3R0b20uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vXG5cbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGxldCBzcmMgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG4gICAgY29uc3QgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG5cbiAgICBzcmMuY29ubmVjdChhbmFseXNlcik7XG4gICAgYW5hbHlzZXIuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIC8vIGFuYWx5c2VyLmZmdFNpemUgPSAxNjM4NDtcbiAgICBhbmFseXNlci5mZnRTaXplID0gMTAyNDtcbiAgICBjb25zdCBidWZmZXJMZW5ndGggPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGFBcnJheSk7XG4gICAgLy8gWzI1MCwgMTkwLCAwLCAyNzBdXG5cbiAgICAvLyBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShkYXRhQXJyYXkpXG5cbiAgICBjb25zdCBXSURUSCA9IGNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBIRUlHSFQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDk7IC8vIDEzLCA5XG4gICAgLy8gY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogMjtcblxuICAgIGxldCBiYXJIZWlnaHQ7XG4gICAgbGV0IHggPSAwO1xuICAgIC8vIGxldCB4ID0gMTBcblxuICAgIGZ1bmN0aW9uIHJlbmRlckZyYW1lKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckZyYW1lKTtcbiAgICAgIHggPSAwO1xuXG4gICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShkYXRhQXJyYXkpOyAvLyBmcmVxdWVuY2llc1xuICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjIpXCI7XG4gICAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG5cbiAgICAgIGN0eF9ib3R0b20uZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMilcIjtcbiAgICAgIGN0eF9ib3R0b20uZmlsbFJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFBcnJheSk7XG5cbiAgICAgIGxldCByLCBnLCBiO1xuICAgICAgbGV0IGJhcnMgPSA0MDsgLy8gMTE4XG5cbiAgICAgIC8vIHNwbGl0IHRoZSBkYXRhIGFycmF5IGluIDQgZXF1YWwgcGFydHNcbiAgICAgIGxldCBxdWFydGVyTGVuZ3RoID0gZGF0YUFycmF5Lmxlbmd0aCAvIDQ7XG5cbiAgICAgIGxldCBmaXJzdCA9IGRhdGFBcnJheS5zbGljZSgwLCBxdWFydGVyTGVuZ3RoKTtcbiAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICBsZXQgc2Vjb25kID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGgsIHF1YXJ0ZXJMZW5ndGggKiAyKTtcbiAgICAgIGxldCB0aGlyZCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMiwgcXVhcnRlckxlbmd0aCAqIDMpO1xuICAgICAgbGV0IGZvdXJ0aCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMywgcXVhcnRlckxlbmd0aCAqIDQpO1xuXG4gICAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuICAgICAgLy8gY29uc29sZS5sb2cobmV3QXJyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZvdXJ0aCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlyZCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWNvbmQpO1xuICAgICAgLy8gY29uc29sZS5sb2coZmlyc3QpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0Fyci5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICAgIC8vIGogaXMgdGhlIHNlY3Rpb25cbiAgICAgIC8vIGlmIChqID09PSAxKSB7IFxuICAgICAgLy8gICBkZWJ1Z2dlclxuICAgICAgLy8gfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vIDMwXG4gICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpOyAvLyAyLjUgLSBnb29kXG5cbiAgICAgICAgLy9jaGFuZ2UgaXQgdG8gZnJlcXVlbmN5IHJhbmdlXG4gICAgICAgIC8vZ2V0IHZvbCBhbmQgZnJlcVxuXG4gICAgICAgIC8vIGogPT09IDAgKGxlZnQpXG4gICAgICAgIC8vIGhvdCBwaW5rXG4gICAgICAgIC8vIDI1NSwgMCwgMTkxXG4gICAgICAgIC8vIGxpZ2h0ZXJcbiAgICAgICAgLy8gMjU1LCAxMzAsIDIyNFxuXG4gICAgICAgIC8vIGogPT09IDEgKGRvd24pXG4gICAgICAgIC8vIGN5YW5cbiAgICAgICAgLy8gMCwgMjU1LCAyMjFcbiAgICAgICAgLy8gbGlnaHRlclxuICAgICAgICAvLyAxNDUsIDI1NSwgMjQxXG5cbiAgICAgICAgLy8gaiA9PT0gMiAodXApIFxuICAgICAgICAvLyBjaGFydHJldXNlXG4gICAgICAgIC8vIDIyMywgMjU1LCA0MlxuICAgICAgICAvLyBsaWdodGVyXG4gICAgICAgIC8vIDIzNCwgMjU1LCAxMTVcblxuICAgICAgICAvLyBqID09PSAzXG4gICAgICAgIC8vIG9yYW5nZVxuICAgICAgICAvLyAyNTUsIDE2NCwgMFxuICAgICAgICAvLyBsaWdodGVyXG4gICAgICAgIC8vIDI1NSwgMTk1LCA4N1xuXG4gICAgICAgIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDI1MCkgeyAvLyAyMTAsIDIzMCwgMjQwIChza2lubnkpXG4gICAgICAgICAgLy8gd2UgYXJlIGluIHRoZSBmaXJzdCBzZWN0aW9uXG4gICAgICAgICAgLy8gaG90IHBpbmtcbiAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgZyA9IDBcbiAgICAgICAgICBiID0gMTkxXG5cbiAgICAgICAgICAvLyBBUlJPVyBSRU5ERVJJTkcgQVRURU1QVDpcbiAgICAgICAgICAvLyBsZXQgY29sb3JlZExlZnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JlZC1sZWZ0LWFycm93XCIpXG4gICAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShjb2xvcmVkTGVmdEFycm93LCAyMCwgMTApXG5cbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDE5MCkge1xuICAgICAgICAvLyAgIHIgPSAyNTVcbiAgICAgICAgLy8gICBnID0gOTdcbiAgICAgICAgLy8gICBiID0gMjAyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAxNzApIHtcbiAgICAgICAgLy8gICByID0gMjU1XG4gICAgICAgIC8vICAgZyA9IDE2NlxuICAgICAgICAvLyAgIGIgPSAyMjVcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDE1MCkge1xuICAgICAgICAvLyAgIHIgPSAyNTJcbiAgICAgICAgLy8gICBnID0gMjE3XG4gICAgICAgIC8vICAgYiA9IDI0MVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMjUwKSB7IC8vIDIxMCwgMjMwXG4gICAgICAgICAgLy9ldmVyeXRoaW5nIGVsc2UgaXMgbGlnaHQgcGlua1xuICAgICAgICAgIHIgPSA3MVxuICAgICAgICAgIGcgPSA0XG4gICAgICAgICAgYiA9IDcwXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPiAxOTApIHsgLy8gMTIwLCAxMzAsIDE0MCAoc2tpbm55KSwgMTgwXG4gICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAvLyBjeWFuXG4gICAgICAgICAgciA9IDBcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDI1MVxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgIC8vICAgciA9IDYzXG4gICAgICAgIC8vICAgZyA9IDIxN1xuICAgICAgICAvLyAgIGIgPSAyMTRcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAvLyAgIHIgPSAxNjBcbiAgICAgICAgLy8gICBnID0gMjUwXG4gICAgICAgIC8vICAgYiA9IDI0OFxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTUwKSB7XG4gICAgICAgIC8vICAgciA9IDIxN1xuICAgICAgICAvLyAgIGcgPSAyNTJcbiAgICAgICAgLy8gICBiID0gMjUyXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPCAxOTApIHsgLy8gMTIwLCAxMzBcbiAgICAgICAgICAvLyBsaWdodCBjeWFuXG4gICAgICAgICAgciA9IDJcbiAgICAgICAgICBnID0gNjRcbiAgICAgICAgICBiID0gNzlcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkgeyAvLyAxMDAsIDExMCwgMTIwIChza2lubnkpXG4gICAgICAgICAgLy90aGlyZFxuICAgICAgICAgIC8vY2hhcnRyZXVzZVxuICAgICAgICAgIHIgPSAyMjNcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDQyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPiAxOTApIHtcbiAgICAgICAgLy8gICByID0gMjQwXG4gICAgICAgIC8vICAgZyA9IDI0NVxuICAgICAgICAvLyAgIGIgPSA5OFxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7XG4gICAgICAgIC8vICAgciA9IDI0OFxuICAgICAgICAvLyAgIGcgPSAyNTBcbiAgICAgICAgLy8gICBiID0gMTgyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPiAxNTApIHtcbiAgICAgICAgLy8gICByID0gMjQ2XG4gICAgICAgIC8vICAgZyA9IDI0N1xuICAgICAgICAvLyAgIGIgPSAyMTNcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA8IDE3MCkgeyAvLyAxMDAsIDExMFxuICAgICAgICAgIC8vbGlnaHQgY2hhcnRyZXVzZVxuICAgICAgICAgIHIgPSA0XG4gICAgICAgICAgZyA9IDcxXG4gICAgICAgICAgYiA9IDlcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7IC8vIDMwLCA0MCAoc2tpbm55KVxuICAgICAgICAgIC8vZm91cnRoIHNlY3Rpb25cbiAgICAgICAgICAvL29yYW5nZVxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMTY0XG4gICAgICAgICAgYiA9IDBcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDE5MCkge1xuICAgICAgICAvLyAgIHIgPSA2MFxuICAgICAgICAvLyAgIGcgPSAyMDdcbiAgICAgICAgLy8gICBiID0gNzJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAvLyAgIHIgPSAxNTRcbiAgICAgICAgLy8gICBnID0gMjUyXG4gICAgICAgIC8vICAgYiA9IDE2MlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gMTUwKSB7XG4gICAgICAgIC8vICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gICByID0gMjEwXG4gICAgICAgIC8vICAgZyA9IDI1MFxuICAgICAgICAvLyAgIGIgPSAyMTNcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA8IDUwKSB7IC8vIDMwXG4gICAgICAgICAgciA9IDcxXG4gICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgYiA9IDRcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gaWYgKHN1YkFycltpXSA+IDIxMCkgeyAvLyBob3QgcGluayAyMTBcbiAgICAgICAgLy8gICByID0gMjU1XG4gICAgICAgIC8vICAgZyA9IDBcbiAgICAgICAgLy8gICBiID0gMTc0XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoc3ViQXJyW2ldID4gMTkwKSB7IC8vIGN5YW4gMjAwXG4gICAgICAgIC8vICAgciA9IDBcbiAgICAgICAgLy8gICBnID0gMjU1XG4gICAgICAgIC8vICAgYiA9IDI1MVxuICAgICAgICAvLyB9IGVsc2UgaWYgKHN1YkFycltpXSA+IDE3MCkgeyAvLyB5ZWxsb3cgMTkwXG4gICAgICAgIC8vICAgciA9IDI0MlxuICAgICAgICAvLyAgIGcgPSAyNTVcbiAgICAgICAgLy8gICBiID0gMFxuICAgICAgICAvLyB9IGVsc2UgaWYgKHN1YkFycltpXSA+IDE1MCkgeyAvLyBsaW1lIGdyZWVuIDE4MFxuICAgICAgICAvLyAgIHIgPSAxMDZcbiAgICAgICAgLy8gICBnID0gMjU1XG4gICAgICAgIC8vICAgYiA9IDBcbiAgICAgICAgLy8gfSBlbHNlIHsgLy8gb3JhbmdlXG4gICAgICAgIC8vICAgciA9IDI1NVxuICAgICAgICAvLyAgIGcgPSAxNjZcbiAgICAgICAgLy8gICBiID0gMFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgY3R4X2JvdHRvbS5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgIGN0eF9ib3R0b20uZmlsbFJlY3QoeCwgKEhFSUdIVCAtIGJhckhlaWdodCksIGJhcldpZHRoLCBiYXJIZWlnaHQpO1xuXG4gICAgICAgIC8vIHggKz0gYmFyV2lkdGggKyAyO1xuICAgICAgICB4ICs9IGJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgLy8gLy8gUmVuZGVyaW5nIHRoZSBncmF5IGFycm93cyBhdCB0aGUgdG9wIG9mIHRoZSBzY3JlZW5cblxuICAgICAgICAvLyBsZXQgbGVmdEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LWFycm93XCIpO1xuICAgICAgICAvLyBsZXQgZG93bkFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3duLWFycm93XCIpO1xuICAgICAgICAvLyBsZXQgdXBBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXAtYXJyb3dcIik7XG4gICAgICAgIC8vIGxldCByaWdodEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1hcnJvd1wiKTtcblxuICAgICAgICAvLyBsZXQgY29sb3JlZExlZnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JlZC1sZWZ0LWFycm93XCIpXG4gICAgICAgIC8vIGxldCBjb2xvcmVkRG93bkFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvcmVkLWRvd24tYXJyb3dcIilcbiAgICAgICAgLy8gbGV0IGNvbG9yZWRVcEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvcmVkLXVwLWFycm93XCIpXG4gICAgICAgIC8vIGxldCBjb2xvcmVkUmlnaHRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JlZC1yaWdodC1hcnJvd1wiKVxuXG4gICAgICAgIGxldCBjb2xvcmVkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNvbG9yZWRMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgICAgICBsZXQgbGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgICAgICBsZXQgY29sb3JlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb2xvcmVkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgbGV0IGRvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBkb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgbGV0IGNvbG9yZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNvbG9yZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgIGxldCB1cEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgIGxldCBjb2xvcmVkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb2xvcmVkUmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgICAgICBsZXQgcmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICByaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAvLyBuZWNlc3Nhcnk/IGlka1xuICAgICAgICAvLyBjdHhfYm90dG9tLmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCk7XG5cbiAgICAgICAgLy8gaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IFxuICAgICAgICBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAyNTApIHsgXG4gICAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgxMCwgNTAsIDEyMCwgMTIwKTtcbiAgICAgICAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZExlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICAvLyBzZXRUaW1lb3V0KClcbiAgICAgICAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgxMCwgMTAsIDEyMCwgMTIwKTsgXG4gICAgICAgIH0gXG4gICAgICAgIC8vIEtJTkRBIEZMSUNLRVJTXG4gICAgICAgIGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMTUwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPiAxOTApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWREb3duQXJyb3csIDM2NSwgMTApO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMTUwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duQXJyb3csIDM2NSwgMTApOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZFVwQXJyb3csIDcyNiwgMTApO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMTMwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldIDwgMzApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKTtcbiAgICAgICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgxMCwgNTAsIDEyMCwgMTIwKVxuXG4gICAgICAgIC8vIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkge1xuICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTAwKSBcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDI1MCkge1xuICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UoY29sb3JlZExlZnRBcnJvdywgMTAsIDUwKVxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICAvLy8vL05PVCBBIEZVTkNUSU9OXG4gICAgICAgIC8vIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDI1MCkge1xuICAgICAgICAvLyAgIC8vIGN0eC5jbGVhclJlY3QoMTAsIDEwLCAxMjAsIDEyMClcbiAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRMZWZ0QXJyb3csIDEwLCAxMClcbiAgICAgICAgLy8gICAvLyBjdHguY2xlYXJJbWFnZShsZWZ0QXJyb3cpXG4gICAgICAgIC8vICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwMCkgLy8gMTAsIDEwXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLy8vIE1PUkUgTk9UIEZVTkNUSU9OU1xuICAgICAgICAvLyBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPiAxOTApIHtcbiAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWREb3duQXJyb3csIDM2NSwgMTApXG4gICAgICAgIC8vICAgY3R4LmNsZWFySW1hZ2UoZG93bkFycm93KVxuICAgICAgICAvLyAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZShkb3duQXJyb3csIDM2NSwgMTApXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPiAxNzApIHtcbiAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRVcEFycm93LCA3MjYsIDEwKVxuICAgICAgICAvLyAgIGN0eC5jbGVhckltYWdlKHVwQXJyb3cpXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gNTApIHtcbiAgICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGNvbG9yZWRSaWdodEFycm93LCAxMTAwLCAxMClcbiAgICAgICAgLy8gICBjdHguY2xlYXJJbWFnZShyaWdodEFycm93KVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgIGN0eC5kcmF3SW1hZ2UocmlnaHRBcnJvdywgMTEwMCwgMTApXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8vLy8gRU5EIE9GIE5PVCBGVU5DVElPTlNcblxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKVxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMClcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKVxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKVxuXG4gICAgICAgIC8vIGV4cGVyaW1lbnRhbFxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCA2MClcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDYwKVxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDYwKVxuXG4gICAgICB9XG5cbiAgICAgIFxuICAgIH1cblxuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHJlbmRlckFycm93cygpIHtcbiAgICAvLyAgIGxldCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtYXJyb3dcIik7XG4gICAgLy8gICBsZXQgZG93bkFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3duLWFycm93XCIpO1xuICAgIC8vICAgbGV0IHVwQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwLWFycm93XCIpO1xuICAgIC8vICAgbGV0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWFycm93XCIpO1xuXG4gICAgLy8gICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAwLCAxMDApXG4gICAgLy8gfVxuXG4gICAgYXVkaW8ucGxheSgpO1xuICAgIHJlbmRlckZyYW1lKCk7XG4gICAgLy8gcmVuZGVyQXJyb3dzKCk7XG5cbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=