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

    analyser.fftSize = 16384;
    // analyser.fftSize = 1024;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    // console.log(dataArray);
    // [250, 190, 0, 270]

    // analyser.getByteFrequencyData(dataArray)

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = WIDTH / bufferLength * 13;
    // const barWidth = (WIDTH / bufferLength) * 2;

    var barHeight = void 0;
    var x = 0;

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
      var bars = 118;

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
        for (var i = 0; i < 30; i++) {
          barHeight = subArr[i] * 4; // 2.5 

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

          if (j === 0 && subArr[i] > 240) {
            // 210, 230
            // debugger
            // we are in the first section
            // hot pink
            r = 255;
            g = 0;
            b = 191;
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
          } else if (j === 0 && subArr[i] < 240) {
            // 210, 230
            //everything else is light pink
            r = 71;
            g = 4;
            b = 70;
          } else if (j === 1 && subArr[i] > 140) {
            // 120, 130
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
          } else if (j === 1 && subArr[i] < 140) {
            // 120, 130
            // light cyan
            r = 2;
            g = 64;
            b = 79;
          } else if (j === 2 && subArr[i] > 120) {
            // 100, 110
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
          } else if (j === 2 && subArr[i] < 120) {
            // 100, 110
            //light chartreuse
            r = 4;
            g = 71;
            b = 9;
          } else if (j === 3 && subArr[i] > 40) {
            // 30
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
          } else if (j === 3 && subArr[i] < 40) {
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

          x += barWidth + 10;

          // // Rendering the gray arrows at the top of the screen

          var leftArrow = document.getElementById("left-arrow");
          var downArrow = document.getElementById("down-arrow");
          var upArrow = document.getElementById("up-arrow");
          var rightArrow = document.getElementById("right-arrow");

          ctx.drawImage(leftArrow, 10, 10);
          ctx.drawImage(downArrow, 365, 10);
          ctx.drawImage(upArrow, 726, 10);
          ctx.drawImage(rightArrow, 1100, 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImF1ZGlvIiwib25jaGFuZ2UiLCJmaWxlcyIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsIldJRFRIIiwiSEVJR0hUIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJ4IiwicmVuZGVyRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiciIsImciLCJiIiwiYmFycyIsInF1YXJ0ZXJMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdCIsInNsaWNlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJuZXdBcnIiLCJqIiwic3ViQXJyIiwiaSIsImxlZnRBcnJvdyIsImRvd25BcnJvdyIsInVwQXJyb3ciLCJyaWdodEFycm93IiwiZHJhd0ltYWdlIiwicGxheSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FB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SSxDQUFKO0FBQ0Q7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBMUIsY0FBSXNCLFNBQUosWUFBdUJFLENBQXZCLFNBQTRCQyxDQUE1QixTQUFpQ0MsQ0FBakM7QUFDQTFCLGNBQUl1QixRQUFKLENBQWFMLENBQWIsRUFBaUJILFNBQVNFLFNBQTFCLEVBQXNDRCxRQUF0QyxFQUFnREMsU0FBaEQ7O0FBRUFDLGVBQUtGLFdBQVcsRUFBaEI7O0FBRUE7O0FBRUEsY0FBSXVCLFlBQVlwRCxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBQWhCO0FBQ0EsY0FBSW9ELFlBQVlyRCxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBQWhCO0FBQ0EsY0FBSXFELFVBQVV0RCxTQUFTQyxjQUFULENBQXdCLFVBQXhCLENBQWQ7QUFDQSxjQUFJc0QsYUFBYXZELFNBQVNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBakI7O0FBRUFZLGNBQUkyQyxTQUFKLENBQWNKLFNBQWQsRUFBeUIsRUFBekIsRUFBNkIsRUFBN0I7QUFDQXZDLGNBQUkyQyxTQUFKLENBQWNILFNBQWQsRUFBeUIsR0FBekIsRUFBOEIsRUFBOUI7QUFDQXhDLGNBQUkyQyxTQUFKLENBQWNGLE9BQWQsRUFBdUIsR0FBdkIsRUFBNEIsRUFBNUI7QUFDQXpDLGNBQUkyQyxTQUFKLENBQWNELFVBQWQsRUFBMEIsSUFBMUIsRUFBZ0MsRUFBaEM7QUFFRDtBQUVGO0FBQ0E7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBcEQsVUFBTXNELElBQU47QUFDQXpCO0FBQ0E7QUFFRCxHQTdQRDtBQThQRCxDQW5RRCxDOzs7Ozs7Ozs7OztBQ0ZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zY3NzL21haW4uc2Nzcydcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZS1pbnB1dFwiKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKTtcblxuICBmaWxlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgIGF1ZGlvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pOyBcblxuICAgIC8vIGNhbnZhcyBpbml0aWFsaXphdGlvblxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgIGNvbnN0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuXG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICBhbmFseXNlci5mZnRTaXplID0gMTYzODQ7XG4gICAgLy8gYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuICAgIC8vIFsyNTAsIDE5MCwgMCwgMjcwXVxuXG4gICAgLy8gYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KVxuXG4gICAgY29uc3QgV0lEVEggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiAxMztcbiAgICAvLyBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiAyO1xuXG4gICAgbGV0IGJhckhlaWdodDtcbiAgICBsZXQgeCA9IDA7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJGcmFtZSgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJGcmFtZSk7XG4gICAgICB4ID0gMDtcblxuICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KTsgLy8gZnJlcXVlbmNpZXNcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4yKVwiO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuICAgICAgbGV0IHIsIGcsIGI7XG4gICAgICBsZXQgYmFycyA9IDExODtcblxuICAgICAgLy8gc3BsaXQgdGhlIGRhdGEgYXJyYXkgaW4gNCBlcXVhbCBwYXJ0c1xuICAgICAgbGV0IHF1YXJ0ZXJMZW5ndGggPSBkYXRhQXJyYXkubGVuZ3RoIC8gNDtcblxuICAgICAgbGV0IGZpcnN0ID0gZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgICAgLy8gZGVidWdnZXJcbiAgICAgIGxldCBzZWNvbmQgPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCwgcXVhcnRlckxlbmd0aCAqIDIpO1xuICAgICAgbGV0IHRoaXJkID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAyLCBxdWFydGVyTGVuZ3RoICogMyk7XG4gICAgICBsZXQgZm91cnRoID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAzLCBxdWFydGVyTGVuZ3RoICogNCk7XG5cbiAgICAgIGxldCBuZXdBcnIgPSBbZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aF07XG4gICAgICAvLyBjb25zb2xlLmxvZyhuZXdBcnIpO1xuICAgICAgLy8gY29uc29sZS5sb2coZm91cnRoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXJkKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlY29uZCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmaXJzdCk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3QXJyLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgbGV0IHN1YkFyciA9IG5ld0FycltqXTtcbiAgICAgICAgLy8gaiBpcyB0aGUgc2VjdGlvblxuICAgICAgLy8gaWYgKGogPT09IDEpIHsgXG4gICAgICAvLyAgIGRlYnVnZ2VyXG4gICAgICAvLyB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgYmFySGVpZ2h0ID0gKHN1YkFycltpXSAqIDQpOyAvLyAyLjUgXG5cbiAgICAgICAgLy9jaGFuZ2UgaXQgdG8gZnJlcXVlbmN5IHJhbmdlXG4gICAgICAgIC8vZ2V0IHZvbCBhbmQgZnJlcVxuXG4gICAgICAgIC8vIGogPT09IDAgKGxlZnQpXG4gICAgICAgIC8vIGhvdCBwaW5rXG4gICAgICAgIC8vIDI1NSwgMCwgMTkxXG4gICAgICAgIC8vIGxpZ2h0ZXJcbiAgICAgICAgLy8gMjU1LCAxMzAsIDIyNFxuXG4gICAgICAgIC8vIGogPT09IDEgKGRvd24pXG4gICAgICAgIC8vIGN5YW5cbiAgICAgICAgLy8gMCwgMjU1LCAyMjFcbiAgICAgICAgLy8gbGlnaHRlclxuICAgICAgICAvLyAxNDUsIDI1NSwgMjQxXG5cbiAgICAgICAgLy8gaiA9PT0gMiAodXApIFxuICAgICAgICAvLyBjaGFydHJldXNlXG4gICAgICAgIC8vIDIyMywgMjU1LCA0MlxuICAgICAgICAvLyBsaWdodGVyXG4gICAgICAgIC8vIDIzNCwgMjU1LCAxMTVcblxuICAgICAgICAvLyBqID09PSAzXG4gICAgICAgIC8vIG9yYW5nZVxuICAgICAgICAvLyAyNTUsIDE2NCwgMFxuICAgICAgICAvLyBsaWdodGVyXG4gICAgICAgIC8vIDI1NSwgMTk1LCA4N1xuXG4gICAgICAgIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDI0MCkgeyAvLyAyMTAsIDIzMFxuICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgLy8gd2UgYXJlIGluIHRoZSBmaXJzdCBzZWN0aW9uXG4gICAgICAgICAgLy8gaG90IHBpbmtcbiAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgZyA9IDBcbiAgICAgICAgICBiID0gMTkxXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAxOTApIHtcbiAgICAgICAgLy8gICByID0gMjU1XG4gICAgICAgIC8vICAgZyA9IDk3XG4gICAgICAgIC8vICAgYiA9IDIwMlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMTcwKSB7XG4gICAgICAgIC8vICAgciA9IDI1NVxuICAgICAgICAvLyAgIGcgPSAxNjZcbiAgICAgICAgLy8gICBiID0gMjI1XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAxNTApIHtcbiAgICAgICAgLy8gICByID0gMjUyXG4gICAgICAgIC8vICAgZyA9IDIxN1xuICAgICAgICAvLyAgIGIgPSAyNDFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI0MCkgeyAvLyAyMTAsIDIzMFxuICAgICAgICAgIC8vZXZlcnl0aGluZyBlbHNlIGlzIGxpZ2h0IHBpbmtcbiAgICAgICAgICByID0gNzFcbiAgICAgICAgICBnID0gNFxuICAgICAgICAgIGIgPSA3MFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTQwKSB7IC8vIDEyMCwgMTMwXG4gICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAvLyBjeWFuXG4gICAgICAgICAgciA9IDBcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDI1MVxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgIC8vICAgciA9IDYzXG4gICAgICAgIC8vICAgZyA9IDIxN1xuICAgICAgICAvLyAgIGIgPSAyMTRcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAvLyAgIHIgPSAxNjBcbiAgICAgICAgLy8gICBnID0gMjUwXG4gICAgICAgIC8vICAgYiA9IDI0OFxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTUwKSB7XG4gICAgICAgIC8vICAgciA9IDIxN1xuICAgICAgICAvLyAgIGcgPSAyNTJcbiAgICAgICAgLy8gICBiID0gMjUyXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPCAxNDApIHsgLy8gMTIwLCAxMzBcbiAgICAgICAgICAvLyBsaWdodCBjeWFuXG4gICAgICAgICAgciA9IDJcbiAgICAgICAgICBnID0gNjRcbiAgICAgICAgICBiID0gNzlcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDEyMCkgeyAvLyAxMDAsIDExMFxuICAgICAgICAgIC8vdGhpcmRcbiAgICAgICAgICAvL2NoYXJ0cmV1c2VcbiAgICAgICAgICByID0gMjIzXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSA0MlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgIC8vICAgciA9IDI0MFxuICAgICAgICAvLyAgIGcgPSAyNDVcbiAgICAgICAgLy8gICBiID0gOThcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAvLyAgIHIgPSAyNDhcbiAgICAgICAgLy8gICBnID0gMjUwXG4gICAgICAgIC8vICAgYiA9IDE4MlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTUwKSB7XG4gICAgICAgIC8vICAgciA9IDI0NlxuICAgICAgICAvLyAgIGcgPSAyNDdcbiAgICAgICAgLy8gICBiID0gMjEzXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxMjApIHsgLy8gMTAwLCAxMTBcbiAgICAgICAgICAvL2xpZ2h0IGNoYXJ0cmV1c2VcbiAgICAgICAgICByID0gNFxuICAgICAgICAgIGcgPSA3MVxuICAgICAgICAgIGIgPSA5XG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA0MCkgeyAvLyAzMFxuICAgICAgICAgIC8vZm91cnRoIHNlY3Rpb25cbiAgICAgICAgICAvL29yYW5nZVxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMTY0XG4gICAgICAgICAgYiA9IDBcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDE5MCkge1xuICAgICAgICAvLyAgIHIgPSA2MFxuICAgICAgICAvLyAgIGcgPSAyMDdcbiAgICAgICAgLy8gICBiID0gNzJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAvLyAgIHIgPSAxNTRcbiAgICAgICAgLy8gICBnID0gMjUyXG4gICAgICAgIC8vICAgYiA9IDE2MlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gMTUwKSB7XG4gICAgICAgIC8vICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gICByID0gMjEwXG4gICAgICAgIC8vICAgZyA9IDI1MFxuICAgICAgICAvLyAgIGIgPSAyMTNcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA8IDQwKSB7IC8vIDMwXG4gICAgICAgICAgciA9IDcxXG4gICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgYiA9IDRcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gaWYgKHN1YkFycltpXSA+IDIxMCkgeyAvLyBob3QgcGluayAyMTBcbiAgICAgICAgLy8gICByID0gMjU1XG4gICAgICAgIC8vICAgZyA9IDBcbiAgICAgICAgLy8gICBiID0gMTc0XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoc3ViQXJyW2ldID4gMTkwKSB7IC8vIGN5YW4gMjAwXG4gICAgICAgIC8vICAgciA9IDBcbiAgICAgICAgLy8gICBnID0gMjU1XG4gICAgICAgIC8vICAgYiA9IDI1MVxuICAgICAgICAvLyB9IGVsc2UgaWYgKHN1YkFycltpXSA+IDE3MCkgeyAvLyB5ZWxsb3cgMTkwXG4gICAgICAgIC8vICAgciA9IDI0MlxuICAgICAgICAvLyAgIGcgPSAyNTVcbiAgICAgICAgLy8gICBiID0gMFxuICAgICAgICAvLyB9IGVsc2UgaWYgKHN1YkFycltpXSA+IDE1MCkgeyAvLyBsaW1lIGdyZWVuIDE4MFxuICAgICAgICAvLyAgIHIgPSAxMDZcbiAgICAgICAgLy8gICBnID0gMjU1XG4gICAgICAgIC8vICAgYiA9IDBcbiAgICAgICAgLy8gfSBlbHNlIHsgLy8gb3JhbmdlXG4gICAgICAgIC8vICAgciA9IDI1NVxuICAgICAgICAvLyAgIGcgPSAxNjZcbiAgICAgICAgLy8gICBiID0gMFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyfSwke2d9LCR7Yn0pYDtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIChIRUlHSFQgLSBiYXJIZWlnaHQpLCBiYXJXaWR0aCwgYmFySGVpZ2h0KTtcblxuICAgICAgICB4ICs9IGJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgLy8gLy8gUmVuZGVyaW5nIHRoZSBncmF5IGFycm93cyBhdCB0aGUgdG9wIG9mIHRoZSBzY3JlZW5cblxuICAgICAgICBsZXQgbGVmdEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LWFycm93XCIpO1xuICAgICAgICBsZXQgZG93bkFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3duLWFycm93XCIpO1xuICAgICAgICBsZXQgdXBBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXAtYXJyb3dcIik7XG4gICAgICAgIGxldCByaWdodEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1hcnJvd1wiKTtcblxuICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKVxuICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMClcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKVxuICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKVxuXG4gICAgICB9XG5cbiAgICB9XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gcmVuZGVyQXJyb3dzKCkge1xuICAgIC8vICAgbGV0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1hcnJvd1wiKTtcbiAgICAvLyAgIGxldCBkb3duQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd24tYXJyb3dcIik7XG4gICAgLy8gICBsZXQgdXBBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXAtYXJyb3dcIik7XG4gICAgLy8gICBsZXQgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtYXJyb3dcIik7XG5cbiAgICAvLyAgIGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMDAsIDEwMClcbiAgICAvLyB9XG5cbiAgICBhdWRpby5wbGF5KCk7XG4gICAgcmVuZGVyRnJhbWUoKTtcbiAgICAvLyByZW5kZXJBcnJvd3MoKTtcblxuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==