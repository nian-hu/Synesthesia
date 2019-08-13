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
    audio.src = URL.createObjectURL(files[0]); // look at what files is, figure out how to queue them up

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
      var second = dataArray.slice(quarterLength, quarterLength * 2);
      var third = dataArray.slice(quarterLength * 2, quarterLength * 3);
      var fourth = dataArray.slice(quarterLength * 3, quarterLength * 4);

      var newArr = [first, second, third, fourth];
      // console.log(newArr);

      for (var j = 0; j < newArr.length; j++) {

        var subArr = newArr[j];
        // j is the section

        for (var i = 0; i < bars; i++) {
          barHeight = subArr[i] * 2.5;

          //change it to frequency range
          //get vol and freq

          if (subArr[i] > 210) {
            // hot pink 210
            r = 255;
            g = 0;
            b = 174;
          } else if (subArr[i] > 190) {
            // cyan 200
            r = 0;
            g = 255;
            b = 251;
          } else if (subArr[i] > 170) {
            // yellow 190
            r = 242;
            g = 255;
            b = 0;
          } else if (subArr[i] > 150) {
            // lime green 180
            r = 106;
            g = 255;
            b = 0;
          } else {
            // orange
            r = 255;
            g = 166;
            b = 0;
          }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImF1ZGlvIiwib25jaGFuZ2UiLCJmaWxlcyIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsIldJRFRIIiwiSEVJR0hUIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJ4IiwicmVuZGVyRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiciIsImciLCJiIiwiYmFycyIsInF1YXJ0ZXJMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdCIsInNsaWNlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJuZXdBcnIiLCJqIiwic3ViQXJyIiwiaSIsImxlZnRBcnJvdyIsImRvd25BcnJvdyIsInVwQXJyb3ciLCJyaWdodEFycm93IiwiZHJhd0ltYWdlIiwicGxheSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUF2QixTQUE0QkMsQ0FBNUIsU0FBaUNDLENBQWpDO0FBQ0ExQixjQUFJdUIsUUFBSixDQUFhTCxDQUFiLEVBQWlCSCxTQUFTRSxTQUExQixFQUFzQ0QsUUFBdEMsRUFBZ0RDLFNBQWhEOztBQUVBQyxlQUFLRixXQUFXLEVBQWhCOztBQUVBOztBQUVBLGNBQUl1QixZQUFZcEQsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUFoQjtBQUNBLGNBQUlvRCxZQUFZckQsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUFoQjtBQUNBLGNBQUlxRCxVQUFVdEQsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0EsY0FBSXNELGFBQWF2RCxTQUFTQyxjQUFULENBQXdCLGFBQXhCLENBQWpCOztBQUVBWSxjQUFJMkMsU0FBSixDQUFjSixTQUFkLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCO0FBQ0F2QyxjQUFJMkMsU0FBSixDQUFjSCxTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEVBQTlCO0FBQ0F4QyxjQUFJMkMsU0FBSixDQUFjRixPQUFkLEVBQXVCLEdBQXZCLEVBQTRCLEVBQTVCO0FBQ0F6QyxjQUFJMkMsU0FBSixDQUFjRCxVQUFkLEVBQTBCLElBQTFCLEVBQWdDLEVBQWhDO0FBRUQ7QUFFRjtBQUNBOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQXBELFVBQU1zRCxJQUFOO0FBQ0F6QjtBQUNBO0FBRUQsR0E3SEQ7QUE4SEQsQ0FuSUQsQzs7Ozs7Ozs7Ozs7QUNGQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGUtaW5wdXRcIik7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG5cbiAgZmlsZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcztcbiAgICBhdWRpby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKTsgLy8gbG9vayBhdCB3aGF0IGZpbGVzIGlzLCBmaWd1cmUgb3V0IGhvdyB0byBxdWV1ZSB0aGVtIHVwXG5cbiAgICAvLyBjYW52YXMgaW5pdGlhbGl6YXRpb25cbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy9cblxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgbGV0IHNyYyA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbiAgICBjb25zdCBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcblxuICAgIHNyYy5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICBhbmFseXNlci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDE2Mzg0O1xuICAgIC8vIGFuYWx5c2VyLmZmdFNpemUgPSAxMDI0O1xuICAgIGNvbnN0IGJ1ZmZlckxlbmd0aCA9IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlckxlbmd0aCk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuICAgIC8vIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSlcblxuICAgIGNvbnN0IFdJRFRIID0gY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IEhFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogMTM7XG4gICAgLy8gY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogMjtcblxuICAgIGxldCBiYXJIZWlnaHQ7XG4gICAgbGV0IHggPSAwO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyRnJhbWUoKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyRnJhbWUpO1xuICAgICAgeCA9IDA7XG5cbiAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSk7IC8vIGZyZXF1ZW5jaWVzXG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMilcIjtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFBcnJheSk7XG5cbiAgICAgIGxldCByLCBnLCBiO1xuICAgICAgbGV0IGJhcnMgPSAxMTg7XG5cbiAgICAgIC8vIHNwbGl0IHRoZSBkYXRhIGFycmF5IGluIDQgZXF1YWwgcGFydHNcbiAgICAgIGxldCBxdWFydGVyTGVuZ3RoID0gZGF0YUFycmF5Lmxlbmd0aCAvIDQ7XG5cbiAgICAgIGxldCBmaXJzdCA9IGRhdGFBcnJheS5zbGljZSgwLCBxdWFydGVyTGVuZ3RoKTtcbiAgICAgIGxldCBzZWNvbmQgPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCwgcXVhcnRlckxlbmd0aCAqIDIpO1xuICAgICAgbGV0IHRoaXJkID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAyLCBxdWFydGVyTGVuZ3RoICogMyk7XG4gICAgICBsZXQgZm91cnRoID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAzLCBxdWFydGVyTGVuZ3RoICogNCk7XG5cbiAgICAgIGxldCBuZXdBcnIgPSBbZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aF07XG4gICAgICAvLyBjb25zb2xlLmxvZyhuZXdBcnIpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0Fyci5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICAgIC8vIGogaXMgdGhlIHNlY3Rpb25cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXJzOyBpKyspIHtcbiAgICAgICAgYmFySGVpZ2h0ID0gKHN1YkFycltpXSAqIDIuNSk7XG5cbiAgICAgICAgLy9jaGFuZ2UgaXQgdG8gZnJlcXVlbmN5IHJhbmdlXG4gICAgICAgIC8vZ2V0IHZvbCBhbmQgZnJlcVxuXG4gICAgICAgIGlmIChzdWJBcnJbaV0gPiAyMTApIHsgLy8gaG90IHBpbmsgMjEwXG4gICAgICAgICAgciA9IDI1NVxuICAgICAgICAgIGcgPSAwXG4gICAgICAgICAgYiA9IDE3NFxuICAgICAgICB9IGVsc2UgaWYgKHN1YkFycltpXSA+IDE5MCkgeyAvLyBjeWFuIDIwMFxuICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgfSBlbHNlIGlmIChzdWJBcnJbaV0gPiAxNzApIHsgLy8geWVsbG93IDE5MFxuICAgICAgICAgIHIgPSAyNDJcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDBcbiAgICAgICAgfSBlbHNlIGlmIChzdWJBcnJbaV0gPiAxNTApIHsgLy8gbGltZSBncmVlbiAxODBcbiAgICAgICAgICByID0gMTA2XG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAwXG4gICAgICAgIH0gZWxzZSB7IC8vIG9yYW5nZVxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMTY2XG4gICAgICAgICAgYiA9IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCAoSEVJR0hUIC0gYmFySGVpZ2h0KSwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG5cbiAgICAgICAgeCArPSBiYXJXaWR0aCArIDEwO1xuXG4gICAgICAgIC8vIC8vIFJlbmRlcmluZyB0aGUgZ3JheSBhcnJvd3MgYXQgdGhlIHRvcCBvZiB0aGUgc2NyZWVuXG5cbiAgICAgICAgbGV0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1hcnJvd1wiKTtcbiAgICAgICAgbGV0IGRvd25BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bi1hcnJvd1wiKTtcbiAgICAgICAgbGV0IHVwQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwLWFycm93XCIpO1xuICAgICAgICBsZXQgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtYXJyb3dcIik7XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMClcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duQXJyb3csIDM2NSwgMTApXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCAxMClcbiAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMClcblxuICAgICAgfVxuXG4gICAgfVxuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHJlbmRlckFycm93cygpIHtcbiAgICAvLyAgIGxldCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtYXJyb3dcIik7XG4gICAgLy8gICBsZXQgZG93bkFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3duLWFycm93XCIpO1xuICAgIC8vICAgbGV0IHVwQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwLWFycm93XCIpO1xuICAgIC8vICAgbGV0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWFycm93XCIpO1xuXG4gICAgLy8gICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAwLCAxMDApXG4gICAgLy8gfVxuXG4gICAgYXVkaW8ucGxheSgpO1xuICAgIHJlbmRlckZyYW1lKCk7XG4gICAgLy8gcmVuZGVyQXJyb3dzKCk7XG5cbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=