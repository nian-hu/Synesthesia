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
    var barWidth = WIDTH / bufferLength * 9; // 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImF1ZGlvIiwib25jaGFuZ2UiLCJmaWxlcyIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsIldJRFRIIiwiSEVJR0hUIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJ4IiwicmVuZGVyRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiciIsImciLCJiIiwiYmFycyIsInF1YXJ0ZXJMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdCIsInNsaWNlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJuZXdBcnIiLCJqIiwic3ViQXJyIiwiaSIsImxlZnRBcnJvdyIsImRvd25BcnJvdyIsInVwQXJyb3ciLCJyaWdodEFycm93IiwiZHJhd0ltYWdlIiwicGxheSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FB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ZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGUtaW5wdXRcIik7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG5cbiAgZmlsZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcztcbiAgICBhdWRpby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKTsgXG5cbiAgICAvLyBjYW52YXMgaW5pdGlhbGl6YXRpb25cbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy9cblxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgbGV0IHNyYyA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbiAgICBjb25zdCBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcblxuICAgIHNyYy5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICBhbmFseXNlci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgLy8gYW5hbHlzZXIuZmZ0U2l6ZSA9IDE2Mzg0O1xuICAgIGFuYWx5c2VyLmZmdFNpemUgPSAxMDI0O1xuICAgIGNvbnN0IGJ1ZmZlckxlbmd0aCA9IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlckxlbmd0aCk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YUFycmF5KTtcbiAgICAvLyBbMjUwLCAxOTAsIDAsIDI3MF1cblxuICAgIC8vIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSlcblxuICAgIGNvbnN0IFdJRFRIID0gY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IEhFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogOTsgLy8gMTNcbiAgICAvLyBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiAyO1xuXG4gICAgbGV0IGJhckhlaWdodDtcbiAgICBsZXQgeCA9IDA7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJGcmFtZSgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJGcmFtZSk7XG4gICAgICB4ID0gMDtcblxuICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KTsgLy8gZnJlcXVlbmNpZXNcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4yKVwiO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuICAgICAgbGV0IHIsIGcsIGI7XG4gICAgICBsZXQgYmFycyA9IDQwOyAvLyAxMThcblxuICAgICAgLy8gc3BsaXQgdGhlIGRhdGEgYXJyYXkgaW4gNCBlcXVhbCBwYXJ0c1xuICAgICAgbGV0IHF1YXJ0ZXJMZW5ndGggPSBkYXRhQXJyYXkubGVuZ3RoIC8gNDtcblxuICAgICAgbGV0IGZpcnN0ID0gZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgICAgLy8gZGVidWdnZXJcbiAgICAgIGxldCBzZWNvbmQgPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCwgcXVhcnRlckxlbmd0aCAqIDIpO1xuICAgICAgbGV0IHRoaXJkID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAyLCBxdWFydGVyTGVuZ3RoICogMyk7XG4gICAgICBsZXQgZm91cnRoID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAzLCBxdWFydGVyTGVuZ3RoICogNCk7XG5cbiAgICAgIGxldCBuZXdBcnIgPSBbZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aF07XG4gICAgICAvLyBjb25zb2xlLmxvZyhuZXdBcnIpO1xuICAgICAgLy8gY29uc29sZS5sb2coZm91cnRoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXJkKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlY29uZCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmaXJzdCk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3QXJyLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgbGV0IHN1YkFyciA9IG5ld0FycltqXTtcbiAgICAgICAgLy8gaiBpcyB0aGUgc2VjdGlvblxuICAgICAgLy8gaWYgKGogPT09IDEpIHsgXG4gICAgICAvLyAgIGRlYnVnZ2VyXG4gICAgICAvLyB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8gMzBcbiAgICAgICAgYmFySGVpZ2h0ID0gKHN1YkFycltpXSAqIDQpOyAvLyAyLjUgXG5cbiAgICAgICAgLy9jaGFuZ2UgaXQgdG8gZnJlcXVlbmN5IHJhbmdlXG4gICAgICAgIC8vZ2V0IHZvbCBhbmQgZnJlcVxuXG4gICAgICAgIC8vIGogPT09IDAgKGxlZnQpXG4gICAgICAgIC8vIGhvdCBwaW5rXG4gICAgICAgIC8vIDI1NSwgMCwgMTkxXG4gICAgICAgIC8vIGxpZ2h0ZXJcbiAgICAgICAgLy8gMjU1LCAxMzAsIDIyNFxuXG4gICAgICAgIC8vIGogPT09IDEgKGRvd24pXG4gICAgICAgIC8vIGN5YW5cbiAgICAgICAgLy8gMCwgMjU1LCAyMjFcbiAgICAgICAgLy8gbGlnaHRlclxuICAgICAgICAvLyAxNDUsIDI1NSwgMjQxXG5cbiAgICAgICAgLy8gaiA9PT0gMiAodXApIFxuICAgICAgICAvLyBjaGFydHJldXNlXG4gICAgICAgIC8vIDIyMywgMjU1LCA0MlxuICAgICAgICAvLyBsaWdodGVyXG4gICAgICAgIC8vIDIzNCwgMjU1LCAxMTVcblxuICAgICAgICAvLyBqID09PSAzXG4gICAgICAgIC8vIG9yYW5nZVxuICAgICAgICAvLyAyNTUsIDE2NCwgMFxuICAgICAgICAvLyBsaWdodGVyXG4gICAgICAgIC8vIDI1NSwgMTk1LCA4N1xuXG4gICAgICAgIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDI0MCkgeyAvLyAyMTAsIDIzMFxuICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgLy8gd2UgYXJlIGluIHRoZSBmaXJzdCBzZWN0aW9uXG4gICAgICAgICAgLy8gaG90IHBpbmtcbiAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgZyA9IDBcbiAgICAgICAgICBiID0gMTkxXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAxOTApIHtcbiAgICAgICAgLy8gICByID0gMjU1XG4gICAgICAgIC8vICAgZyA9IDk3XG4gICAgICAgIC8vICAgYiA9IDIwMlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMTcwKSB7XG4gICAgICAgIC8vICAgciA9IDI1NVxuICAgICAgICAvLyAgIGcgPSAxNjZcbiAgICAgICAgLy8gICBiID0gMjI1XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPiAxNTApIHtcbiAgICAgICAgLy8gICByID0gMjUyXG4gICAgICAgIC8vICAgZyA9IDIxN1xuICAgICAgICAvLyAgIGIgPSAyNDFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI0MCkgeyAvLyAyMTAsIDIzMFxuICAgICAgICAgIC8vZXZlcnl0aGluZyBlbHNlIGlzIGxpZ2h0IHBpbmtcbiAgICAgICAgICByID0gNzFcbiAgICAgICAgICBnID0gNFxuICAgICAgICAgIGIgPSA3MFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTQwKSB7IC8vIDEyMCwgMTMwXG4gICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAvLyBjeWFuXG4gICAgICAgICAgciA9IDBcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDI1MVxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgIC8vICAgciA9IDYzXG4gICAgICAgIC8vICAgZyA9IDIxN1xuICAgICAgICAvLyAgIGIgPSAyMTRcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAvLyAgIHIgPSAxNjBcbiAgICAgICAgLy8gICBnID0gMjUwXG4gICAgICAgIC8vICAgYiA9IDI0OFxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTUwKSB7XG4gICAgICAgIC8vICAgciA9IDIxN1xuICAgICAgICAvLyAgIGcgPSAyNTJcbiAgICAgICAgLy8gICBiID0gMjUyXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPCAxNDApIHsgLy8gMTIwLCAxMzBcbiAgICAgICAgICAvLyBsaWdodCBjeWFuXG4gICAgICAgICAgciA9IDJcbiAgICAgICAgICBnID0gNjRcbiAgICAgICAgICBiID0gNzlcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDEyMCkgeyAvLyAxMDAsIDExMFxuICAgICAgICAgIC8vdGhpcmRcbiAgICAgICAgICAvL2NoYXJ0cmV1c2VcbiAgICAgICAgICByID0gMjIzXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSA0MlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTkwKSB7XG4gICAgICAgIC8vICAgciA9IDI0MFxuICAgICAgICAvLyAgIGcgPSAyNDVcbiAgICAgICAgLy8gICBiID0gOThcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAvLyAgIHIgPSAyNDhcbiAgICAgICAgLy8gICBnID0gMjUwXG4gICAgICAgIC8vICAgYiA9IDE4MlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTUwKSB7XG4gICAgICAgIC8vICAgciA9IDI0NlxuICAgICAgICAvLyAgIGcgPSAyNDdcbiAgICAgICAgLy8gICBiID0gMjEzXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxMjApIHsgLy8gMTAwLCAxMTBcbiAgICAgICAgICAvL2xpZ2h0IGNoYXJ0cmV1c2VcbiAgICAgICAgICByID0gNFxuICAgICAgICAgIGcgPSA3MVxuICAgICAgICAgIGIgPSA5XG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPiA0MCkgeyAvLyAzMFxuICAgICAgICAgIC8vZm91cnRoIHNlY3Rpb25cbiAgICAgICAgICAvL29yYW5nZVxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMTY0XG4gICAgICAgICAgYiA9IDBcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDE5MCkge1xuICAgICAgICAvLyAgIHIgPSA2MFxuICAgICAgICAvLyAgIGcgPSAyMDdcbiAgICAgICAgLy8gICBiID0gNzJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDE3MCkge1xuICAgICAgICAvLyAgIHIgPSAxNTRcbiAgICAgICAgLy8gICBnID0gMjUyXG4gICAgICAgIC8vICAgYiA9IDE2MlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gMTUwKSB7XG4gICAgICAgIC8vICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gICByID0gMjEwXG4gICAgICAgIC8vICAgZyA9IDI1MFxuICAgICAgICAvLyAgIGIgPSAyMTNcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA8IDQwKSB7IC8vIDMwXG4gICAgICAgICAgciA9IDcxXG4gICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgYiA9IDRcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gaWYgKHN1YkFycltpXSA+IDIxMCkgeyAvLyBob3QgcGluayAyMTBcbiAgICAgICAgLy8gICByID0gMjU1XG4gICAgICAgIC8vICAgZyA9IDBcbiAgICAgICAgLy8gICBiID0gMTc0XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoc3ViQXJyW2ldID4gMTkwKSB7IC8vIGN5YW4gMjAwXG4gICAgICAgIC8vICAgciA9IDBcbiAgICAgICAgLy8gICBnID0gMjU1XG4gICAgICAgIC8vICAgYiA9IDI1MVxuICAgICAgICAvLyB9IGVsc2UgaWYgKHN1YkFycltpXSA+IDE3MCkgeyAvLyB5ZWxsb3cgMTkwXG4gICAgICAgIC8vICAgciA9IDI0MlxuICAgICAgICAvLyAgIGcgPSAyNTVcbiAgICAgICAgLy8gICBiID0gMFxuICAgICAgICAvLyB9IGVsc2UgaWYgKHN1YkFycltpXSA+IDE1MCkgeyAvLyBsaW1lIGdyZWVuIDE4MFxuICAgICAgICAvLyAgIHIgPSAxMDZcbiAgICAgICAgLy8gICBnID0gMjU1XG4gICAgICAgIC8vICAgYiA9IDBcbiAgICAgICAgLy8gfSBlbHNlIHsgLy8gb3JhbmdlXG4gICAgICAgIC8vICAgciA9IDI1NVxuICAgICAgICAvLyAgIGcgPSAxNjZcbiAgICAgICAgLy8gICBiID0gMFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyfSwke2d9LCR7Yn0pYDtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIChIRUlHSFQgLSBiYXJIZWlnaHQpLCBiYXJXaWR0aCwgYmFySGVpZ2h0KTtcblxuICAgICAgICB4ICs9IGJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgLy8gLy8gUmVuZGVyaW5nIHRoZSBncmF5IGFycm93cyBhdCB0aGUgdG9wIG9mIHRoZSBzY3JlZW5cblxuICAgICAgICBsZXQgbGVmdEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LWFycm93XCIpO1xuICAgICAgICBsZXQgZG93bkFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3duLWFycm93XCIpO1xuICAgICAgICBsZXQgdXBBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXAtYXJyb3dcIik7XG4gICAgICAgIGxldCByaWdodEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1hcnJvd1wiKTtcblxuICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKVxuICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25BcnJvdywgMzY1LCAxMClcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh1cEFycm93LCA3MjYsIDEwKVxuICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKVxuXG4gICAgICB9XG5cbiAgICB9XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gcmVuZGVyQXJyb3dzKCkge1xuICAgIC8vICAgbGV0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1hcnJvd1wiKTtcbiAgICAvLyAgIGxldCBkb3duQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd24tYXJyb3dcIik7XG4gICAgLy8gICBsZXQgdXBBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXAtYXJyb3dcIik7XG4gICAgLy8gICBsZXQgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtYXJyb3dcIik7XG5cbiAgICAvLyAgIGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMDAsIDEwMClcbiAgICAvLyB9XG5cbiAgICBhdWRpby5wbGF5KCk7XG4gICAgcmVuZGVyRnJhbWUoKTtcbiAgICAvLyByZW5kZXJBcnJvd3MoKTtcblxuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==