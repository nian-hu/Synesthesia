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
  var audio = document.getElementById("audio");

  file.onchange = function () {

    var files = this.files;
    audio.src = URL.createObjectURL(files[0]);

    // canvas initialization
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
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
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
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
            // debugger
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

          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          // x += barWidth + 2;
          x += barWidth + 10;

          // // Rendering the gray arrows at the top of the screen

          var leftArrow = document.getElementById("left-arrow");
          var downArrow = document.getElementById("down-arrow");
          var upArrow = document.getElementById("up-arrow");
          var rightArrow = document.getElementById("right-arrow");

          var coloredLeftArrow = document.getElementById("colored-left-arrow");
          var coloredDownArrow = document.getElementById("colored-down-arrow");
          var coloredUpArrow = document.getElementById("colored-up-arrow");
          var coloredRightArrow = document.getElementById("colored-right-arrow");

          if (j === 0 && subArr[i] > 250) {
            // ctx.clearRect(10, 10, 120, 120)
            ctx.drawImage(coloredLeftArrow, 10, 10);
            // ctx.clearImage(leftArrow)
          } else {
            ctx.drawImage(leftArrow, 10, 10);
          }

          if (j === 1 && subArr[i] > 190) {
            ctx.drawImage(coloredDownArrow, 365, 10);
            ctx.clearImage(downArrow);
          } else {
            ctx.drawImage(downArrow, 365, 10);
          }

          if (j === 2 && subArr[i] > 170) {
            ctx.drawImage(coloredUpArrow, 726, 10);
            ctx.clearImage(upArrow);
          } else {
            ctx.drawImage(upArrow, 726, 10);
          }

          if (j === 3 && subArr[i] > 50) {
            ctx.drawImage(coloredRightArrow, 1100, 10);
            ctx.clearImage(rightArrow);
          } else {
            ctx.drawImage(rightArrow, 1100, 10);
          }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImF1ZGlvIiwib25jaGFuZ2UiLCJmaWxlcyIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsIldJRFRIIiwiSEVJR0hUIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJ4IiwicmVuZGVyRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiciIsImciLCJiIiwiYmFycyIsInF1YXJ0ZXJMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdCIsInNsaWNlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJuZXdBcnIiLCJqIiwic3ViQXJyIiwiaSIsImxlZnRBcnJvdyIsImRvd25BcnJvdyIsInVwQXJyb3ciLCJyaWdodEFycm93IiwiY29sb3JlZExlZnRBcnJvdyIsImNvbG9yZWREb3duQXJyb3ciLCJjb2xvcmVkVXBBcnJvdyIsImNvbG9yZWRSaWdodEFycm93IiwiZHJhd0ltYWdlIiwiY2xlYXJJbWFnZSIsInBsYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNB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O0FBQ0E7QUFFRCxHQTdTRDtBQThTRCxDQW5URCxDOzs7Ozs7Ozs7OztBQ0ZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zY3NzL21haW4uc2Nzcydcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZS1pbnB1dFwiKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKTtcblxuICBmaWxlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgIGF1ZGlvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pOyBcblxuICAgIC8vIGNhbnZhcyBpbml0aWFsaXphdGlvblxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgIGNvbnN0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuXG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAvLyBhbmFseXNlci5mZnRTaXplID0gMTYzODQ7XG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuICAgIC8vIFsyNTAsIDE5MCwgMCwgMjcwXVxuXG4gICAgLy8gYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KVxuXG4gICAgY29uc3QgV0lEVEggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiA5OyAvLyAxMywgOVxuICAgIC8vIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDI7XG5cbiAgICBsZXQgYmFySGVpZ2h0O1xuICAgIGxldCB4ID0gMDtcbiAgICAvLyBsZXQgeCA9IDEwXG5cbiAgICBmdW5jdGlvbiByZW5kZXJGcmFtZSgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJGcmFtZSk7XG4gICAgICB4ID0gMDtcblxuICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KTsgLy8gZnJlcXVlbmNpZXNcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4yKVwiO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuICAgICAgbGV0IHIsIGcsIGI7XG4gICAgICBsZXQgYmFycyA9IDQwOyAvLyAxMThcblxuICAgICAgLy8gc3BsaXQgdGhlIGRhdGEgYXJyYXkgaW4gNCBlcXVhbCBwYXJ0c1xuICAgICAgbGV0IHF1YXJ0ZXJMZW5ndGggPSBkYXRhQXJyYXkubGVuZ3RoIC8gNDtcblxuICAgICAgbGV0IGZpcnN0ID0gZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgICAgLy8gZGVidWdnZXJcbiAgICAgIGxldCBzZWNvbmQgPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCwgcXVhcnRlckxlbmd0aCAqIDIpO1xuICAgICAgbGV0IHRoaXJkID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAyLCBxdWFydGVyTGVuZ3RoICogMyk7XG4gICAgICBsZXQgZm91cnRoID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAzLCBxdWFydGVyTGVuZ3RoICogNCk7XG5cbiAgICAgIGxldCBuZXdBcnIgPSBbZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aF07XG4gICAgICAvLyBjb25zb2xlLmxvZyhuZXdBcnIpO1xuICAgICAgLy8gY29uc29sZS5sb2coZm91cnRoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXJkKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlY29uZCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmaXJzdCk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3QXJyLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgbGV0IHN1YkFyciA9IG5ld0FycltqXTtcbiAgICAgICAgLy8gaiBpcyB0aGUgc2VjdGlvblxuICAgICAgLy8gaWYgKGogPT09IDEpIHsgXG4gICAgICAvLyAgIGRlYnVnZ2VyXG4gICAgICAvLyB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8gMzBcbiAgICAgICAgYmFySGVpZ2h0ID0gKHN1YkFycltpXSAqIDIuNSk7IC8vIDIuNSAtIGdvb2RcblxuICAgICAgICAvL2NoYW5nZSBpdCB0byBmcmVxdWVuY3kgcmFuZ2VcbiAgICAgICAgLy9nZXQgdm9sIGFuZCBmcmVxXG5cbiAgICAgICAgLy8gaiA9PT0gMCAobGVmdClcbiAgICAgICAgLy8gaG90IHBpbmtcbiAgICAgICAgLy8gMjU1LCAwLCAxOTFcbiAgICAgICAgLy8gbGlnaHRlclxuICAgICAgICAvLyAyNTUsIDEzMCwgMjI0XG5cbiAgICAgICAgLy8gaiA9PT0gMSAoZG93bilcbiAgICAgICAgLy8gY3lhblxuICAgICAgICAvLyAwLCAyNTUsIDIyMVxuICAgICAgICAvLyBsaWdodGVyXG4gICAgICAgIC8vIDE0NSwgMjU1LCAyNDFcblxuICAgICAgICAvLyBqID09PSAyICh1cCkgXG4gICAgICAgIC8vIGNoYXJ0cmV1c2VcbiAgICAgICAgLy8gMjIzLCAyNTUsIDQyXG4gICAgICAgIC8vIGxpZ2h0ZXJcbiAgICAgICAgLy8gMjM0LCAyNTUsIDExNVxuXG4gICAgICAgIC8vIGogPT09IDNcbiAgICAgICAgLy8gb3JhbmdlXG4gICAgICAgIC8vIDI1NSwgMTY0LCAwXG4gICAgICAgIC8vIGxpZ2h0ZXJcbiAgICAgICAgLy8gMjU1LCAxOTUsIDg3XG5cbiAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IC8vIDIxMCwgMjMwLCAyNDAgKHNraW5ueSlcbiAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgIC8vIHdlIGFyZSBpbiB0aGUgZmlyc3Qgc2VjdGlvblxuICAgICAgICAgIC8vIGhvdCBwaW5rXG4gICAgICAgICAgciA9IDI1NVxuICAgICAgICAgIGcgPSAwXG4gICAgICAgICAgYiA9IDE5MVxuXG4gICAgICAgICAgLy8gQVJST1cgUkVOREVSSU5HIEFUVEVNUFQ6XG4gICAgICAgICAgLy8gbGV0IGNvbG9yZWRMZWZ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yZWQtbGVmdC1hcnJvd1wiKVxuICAgICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UoY29sb3JlZExlZnRBcnJvdywgMjAsIDEwKVxuXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAxOTApIHtcbiAgICAgICAgLy8gICByID0gMjU1XG4gICAgICAgIC8vICAgZyA9IDk3XG4gICAgICAgIC8vICAgYiA9IDIwMlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMTcwKSB7XG4gICAgICAgIC8vICAgciA9IDI1NVxuICAgICAgICAvLyAgIGcgPSAxNjZcbiAgICAgICAgLy8gICBiID0gMjI1XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAxNTApIHtcbiAgICAgICAgLy8gICByID0gMjUyXG4gICAgICAgIC8vICAgZyA9IDIxN1xuICAgICAgICAvLyAgIGIgPSAyNDFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyAvLyAyMTAsIDIzMFxuICAgICAgICAgIC8vZXZlcnl0aGluZyBlbHNlIGlzIGxpZ2h0IHBpbmtcbiAgICAgICAgICByID0gNzFcbiAgICAgICAgICBnID0gNFxuICAgICAgICAgIGIgPSA3MFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7IC8vIDEyMCwgMTMwLCAxNDAgKHNraW5ueSksIDE4MFxuICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgLy8gY3lhblxuICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkge1xuICAgICAgICAvLyAgIHIgPSA2M1xuICAgICAgICAvLyAgIGcgPSAyMTdcbiAgICAgICAgLy8gICBiID0gMjE0XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPiAxNzApIHtcbiAgICAgICAgLy8gICByID0gMTYwXG4gICAgICAgIC8vICAgZyA9IDI1MFxuICAgICAgICAvLyAgIGIgPSAyNDhcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE1MCkge1xuICAgICAgICAvLyAgIHIgPSAyMTdcbiAgICAgICAgLy8gICBnID0gMjUyXG4gICAgICAgIC8vICAgYiA9IDI1MlxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldIDwgMTkwKSB7IC8vIDEyMCwgMTMwXG4gICAgICAgICAgLy8gbGlnaHQgY3lhblxuICAgICAgICAgIHIgPSAyXG4gICAgICAgICAgZyA9IDY0XG4gICAgICAgICAgYiA9IDc5XG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPiAxNzApIHsgLy8gMTAwLCAxMTAsIDEyMCAoc2tpbm55KVxuICAgICAgICAgIC8vdGhpcmRcbiAgICAgICAgICAvL2NoYXJ0cmV1c2VcbiAgICAgICAgICByID0gMjIzXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSA0MlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgIC8vICAgciA9IDI0MFxuICAgICAgICAvLyAgIGcgPSAyNDVcbiAgICAgICAgLy8gICBiID0gOThcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAvLyAgIHIgPSAyNDhcbiAgICAgICAgLy8gICBnID0gMjUwXG4gICAgICAgIC8vICAgYiA9IDE4MlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTUwKSB7XG4gICAgICAgIC8vICAgciA9IDI0NlxuICAgICAgICAvLyAgIGcgPSAyNDdcbiAgICAgICAgLy8gICBiID0gMjEzXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxNzApIHsgLy8gMTAwLCAxMTBcbiAgICAgICAgICAvL2xpZ2h0IGNoYXJ0cmV1c2VcbiAgICAgICAgICByID0gNFxuICAgICAgICAgIGcgPSA3MVxuICAgICAgICAgIGIgPSA5XG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA1MCkgeyAvLyAzMCwgNDAgKHNraW5ueSlcbiAgICAgICAgICAvL2ZvdXJ0aCBzZWN0aW9uXG4gICAgICAgICAgLy9vcmFuZ2VcbiAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgZyA9IDE2NFxuICAgICAgICAgIGIgPSAwXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiAxOTApIHtcbiAgICAgICAgLy8gICByID0gNjBcbiAgICAgICAgLy8gICBnID0gMjA3XG4gICAgICAgIC8vICAgYiA9IDcyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiAxNzApIHtcbiAgICAgICAgLy8gICByID0gMTU0XG4gICAgICAgIC8vICAgZyA9IDI1MlxuICAgICAgICAvLyAgIGIgPSAxNjJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDE1MCkge1xuICAgICAgICAvLyAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vICAgciA9IDIxMFxuICAgICAgICAvLyAgIGcgPSAyNTBcbiAgICAgICAgLy8gICBiID0gMjEzXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPCA1MCkgeyAvLyAzMFxuICAgICAgICAgIHIgPSA3MVxuICAgICAgICAgIGcgPSAxNFxuICAgICAgICAgIGIgPSA0XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIGlmIChzdWJBcnJbaV0gPiAyMTApIHsgLy8gaG90IHBpbmsgMjEwXG4gICAgICAgIC8vICAgciA9IDI1NVxuICAgICAgICAvLyAgIGcgPSAwXG4gICAgICAgIC8vICAgYiA9IDE3NFxuICAgICAgICAvLyB9IGVsc2UgaWYgKHN1YkFycltpXSA+IDE5MCkgeyAvLyBjeWFuIDIwMFxuICAgICAgICAvLyAgIHIgPSAwXG4gICAgICAgIC8vICAgZyA9IDI1NVxuICAgICAgICAvLyAgIGIgPSAyNTFcbiAgICAgICAgLy8gfSBlbHNlIGlmIChzdWJBcnJbaV0gPiAxNzApIHsgLy8geWVsbG93IDE5MFxuICAgICAgICAvLyAgIHIgPSAyNDJcbiAgICAgICAgLy8gICBnID0gMjU1XG4gICAgICAgIC8vICAgYiA9IDBcbiAgICAgICAgLy8gfSBlbHNlIGlmIChzdWJBcnJbaV0gPiAxNTApIHsgLy8gbGltZSBncmVlbiAxODBcbiAgICAgICAgLy8gICByID0gMTA2XG4gICAgICAgIC8vICAgZyA9IDI1NVxuICAgICAgICAvLyAgIGIgPSAwXG4gICAgICAgIC8vIH0gZWxzZSB7IC8vIG9yYW5nZVxuICAgICAgICAvLyAgIHIgPSAyNTVcbiAgICAgICAgLy8gICBnID0gMTY2XG4gICAgICAgIC8vICAgYiA9IDBcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCAoSEVJR0hUIC0gYmFySGVpZ2h0KSwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG5cbiAgICAgICAgLy8geCArPSBiYXJXaWR0aCArIDI7XG4gICAgICAgIHggKz0gYmFyV2lkdGggKyAxMDtcblxuICAgICAgICAvLyAvLyBSZW5kZXJpbmcgdGhlIGdyYXkgYXJyb3dzIGF0IHRoZSB0b3Agb2YgdGhlIHNjcmVlblxuXG4gICAgICAgIGxldCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtYXJyb3dcIik7XG4gICAgICAgIGxldCBkb3duQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd24tYXJyb3dcIik7XG4gICAgICAgIGxldCB1cEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cC1hcnJvd1wiKTtcbiAgICAgICAgbGV0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWFycm93XCIpO1xuXG4gICAgICAgIGxldCBjb2xvcmVkTGVmdEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvcmVkLWxlZnQtYXJyb3dcIilcbiAgICAgICAgbGV0IGNvbG9yZWREb3duQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yZWQtZG93bi1hcnJvd1wiKVxuICAgICAgICBsZXQgY29sb3JlZFVwQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yZWQtdXAtYXJyb3dcIilcbiAgICAgICAgbGV0IGNvbG9yZWRSaWdodEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvcmVkLXJpZ2h0LWFycm93XCIpXG4gICAgICAgIFxuICAgICAgICBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAyNTApIHtcbiAgICAgICAgICAvLyBjdHguY2xlYXJSZWN0KDEwLCAxMCwgMTIwLCAxMjApXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkTGVmdEFycm93LCAxMCwgMTApXG4gICAgICAgICAgLy8gY3R4LmNsZWFySW1hZ2UobGVmdEFycm93KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPiAxOTApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWREb3duQXJyb3csIDM2NSwgMTApXG4gICAgICAgICAgY3R4LmNsZWFySW1hZ2UoZG93bkFycm93KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bkFycm93LCAzNjUsIDEwKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMClcbiAgICAgICAgICBjdHguY2xlYXJJbWFnZSh1cEFycm93KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCAxMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkUmlnaHRBcnJvdywgMTEwMCwgMTApXG4gICAgICAgICAgY3R4LmNsZWFySW1hZ2UocmlnaHRBcnJvdylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMClcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShkb3duQXJyb3csIDM2NSwgMTApXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCAxMClcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMClcblxuICAgICAgICAvLyBleHBlcmltZW50YWxcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShkb3duQXJyb3csIDM2NSwgNjApXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCA2MClcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCA2MClcblxuICAgICAgfVxuXG4gICAgICBcbiAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiByZW5kZXJBcnJvd3MoKSB7XG4gICAgLy8gICBsZXQgbGVmdEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LWFycm93XCIpO1xuICAgIC8vICAgbGV0IGRvd25BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bi1hcnJvd1wiKTtcbiAgICAvLyAgIGxldCB1cEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cC1hcnJvd1wiKTtcbiAgICAvLyAgIGxldCByaWdodEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1hcnJvd1wiKTtcblxuICAgIC8vICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwMCwgMTAwKVxuICAgIC8vIH1cblxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICByZW5kZXJGcmFtZSgpO1xuICAgIC8vIHJlbmRlckFycm93cygpO1xuXG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9