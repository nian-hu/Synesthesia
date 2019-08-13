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
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    console.log(dataArray);

    // analyser.getByteFrequencyData(dataArray)

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = WIDTH / bufferLength * 13;

    var barHeight = void 0;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;

      analyser.getByteFrequencyData(dataArray);
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      var r = void 0,
          g = void 0,
          b = void 0;
      var bars = 118;

      for (var i = 0; i < bars; i++) {
        barHeight = dataArray[i] * 2.5;

        if (dataArray[i] > 210) {
          // hot pink
          r = 255;
          g = 0;
          b = 174;
        } else if (dataArray[i] > 200) {
          // cyan
          r = 0;
          g = 255;
          b = 251;
        } else if (dataArray[i] > 190) {
          // yellow
          r = 242;
          g = 255;
          b = 0;
        } else if (dataArray[i] > 180) {
          // lime green
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImF1ZGlvIiwib25jaGFuZ2UiLCJmaWxlcyIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJXSURUSCIsIkhFSUdIVCIsImJhcldpZHRoIiwiYmFySGVpZ2h0IiwieCIsInJlbmRlckZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInIiLCJnIiwiYiIsImJhcnMiLCJpIiwicGxheSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFB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Y0FBSSxDQUFKO0FBQ0QsU0FKTSxNQUlBLElBQUloQixVQUFVa0IsQ0FBVixJQUFlLEdBQW5CLEVBQXdCO0FBQUU7QUFDL0JKLGNBQUksR0FBSjtBQUNBQyxjQUFJLEdBQUo7QUFDQUMsY0FBSSxDQUFKO0FBQ0QsU0FKTSxNQUlBO0FBQUU7QUFDUEYsY0FBSSxHQUFKO0FBQ0FDLGNBQUksR0FBSjtBQUNBQyxjQUFJLENBQUo7QUFDRDs7QUFFRDVCLFlBQUl3QixTQUFKLFlBQXVCRSxDQUF2QixTQUE0QkMsQ0FBNUIsU0FBaUNDLENBQWpDO0FBQ0E1QixZQUFJeUIsUUFBSixDQUFhTCxDQUFiLEVBQWlCSCxTQUFTRSxTQUExQixFQUFzQ0QsUUFBdEMsRUFBZ0RDLFNBQWhEOztBQUVBQyxhQUFLRixXQUFXLEVBQWhCO0FBRUQ7QUFDRjs7QUFFRDVCLFVBQU15QyxJQUFOO0FBQ0FWO0FBRUQsR0EvRUQ7QUFnRkQsQ0FyRkQsQzs7Ozs7Ozs7Ozs7QUNGQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGUtaW5wdXRcIik7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG5cbiAgZmlsZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcztcbiAgICBhdWRpby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKTtcblxuICAgIC8vIGNhbnZhcyBpbml0aWFsaXphdGlvblxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgIGNvbnN0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuXG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICBhbmFseXNlci5mZnRTaXplID0gMTYzODQ7XG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuXG4gICAgLy8gYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KVxuXG4gICAgY29uc3QgV0lEVEggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiAxMztcblxuICAgIGxldCBiYXJIZWlnaHQ7XG4gICAgbGV0IHggPSAwOyBcblxuICAgIGZ1bmN0aW9uIHJlbmRlckZyYW1lKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckZyYW1lKTtcbiAgICAgIHggPSAwO1xuXG4gICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShkYXRhQXJyYXkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjIpXCI7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG5cbiAgICAgIGxldCByLCBnLCBiO1xuICAgICAgbGV0IGJhcnMgPSAxMTg7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFyczsgaSsrKSB7XG4gICAgICAgIGJhckhlaWdodCA9IChkYXRhQXJyYXlbaV0gKiAyLjUpO1xuXG4gICAgICAgIGlmIChkYXRhQXJyYXlbaV0gPiAyMTApIHsgLy8gaG90IHBpbmtcbiAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgZyA9IDBcbiAgICAgICAgICBiID0gMTc0XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YUFycmF5W2ldID4gMjAwKSB7IC8vIGN5YW5cbiAgICAgICAgICByID0gMFxuICAgICAgICAgIGcgPSAyNTVcbiAgICAgICAgICBiID0gMjUxXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YUFycmF5W2ldID4gMTkwKSB7IC8vIHllbGxvd1xuICAgICAgICAgIHIgPSAyNDJcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDBcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhQXJyYXlbaV0gPiAxODApIHsgLy8gbGltZSBncmVlblxuICAgICAgICAgIHIgPSAxMDZcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDBcbiAgICAgICAgfSBlbHNlIHsgLy8gb3JhbmdlXG4gICAgICAgICAgciA9IDI1NVxuICAgICAgICAgIGcgPSAxNjZcbiAgICAgICAgICBiID0gMFxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyfSwke2d9LCR7Yn0pYDtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIChIRUlHSFQgLSBiYXJIZWlnaHQpLCBiYXJXaWR0aCwgYmFySGVpZ2h0KTtcblxuICAgICAgICB4ICs9IGJhcldpZHRoICsgMTA7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhdWRpby5wbGF5KCk7XG4gICAgcmVuZGVyRnJhbWUoKTsgXG5cbiAgfSBcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9