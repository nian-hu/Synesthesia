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
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    // console.log(dataArray);

    // analyser.getByteFrequencyData(dataArray)

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = WIDTH / bufferLength * 13;

    var barHeight = void 0;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;

      analyser.getByteFrequencyData(dataArray); // frequencies
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      console.log(dataArray);

      var r = void 0,
          g = void 0,
          b = void 0;
      var bars = 118;

      for (var i = 0; i < bars; i++) {
        barHeight = dataArray[i] * 2.5;

        //change it to frequency range
        //get vol and freq

        if (dataArray[i] > 210) {
          // hot pink 210
          r = 255;
          g = 0;
          b = 174;
        } else if (dataArray[i] > 190) {
          // cyan 200
          r = 0;
          g = 255;
          b = 251;
        } else if (dataArray[i] > 170) {
          // yellow 190
          r = 242;
          g = 255;
          b = 0;
        } else if (dataArray[i] > 150) {
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

        // Rendering the gray arrows at the top of the screen

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImF1ZGlvIiwib25jaGFuZ2UiLCJmaWxlcyIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsIldJRFRIIiwiSEVJR0hUIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJ4IiwicmVuZGVyRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY29uc29sZSIsImxvZyIsInIiLCJnIiwiYiIsImJhcnMiLCJpIiwibGVmdEFycm93IiwiZG93bkFycm93IiwidXBBcnJvdyIsInJpZ2h0QXJyb3ciLCJkcmF3SW1hZ2UiLCJwbGF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FB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QTtBQUNBOztBQUVBNUMsVUFBTThDLElBQU47QUFDQWpCO0FBQ0E7QUFFRCxHQXpHRDtBQTBHRCxDQS9HRCxDOzs7Ozs7Ozs7OztBQ0ZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zY3NzL21haW4uc2Nzcydcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZS1pbnB1dFwiKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKTtcblxuICBmaWxlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgIGF1ZGlvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pOyAvLyBsb29rIGF0IHdoYXQgZmlsZXMgaXMsIGZpZ3VyZSBvdXQgaG93IHRvIHF1ZXVlIHRoZW0gdXBcblxuICAgIC8vIGNhbnZhcyBpbml0aWFsaXphdGlvblxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvL1xuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pOyBcbiAgICBjb25zdCBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcblxuICAgIHNyYy5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICBhbmFseXNlci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDE2Mzg0O1xuICAgIGNvbnN0IGJ1ZmZlckxlbmd0aCA9IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlckxlbmd0aCk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuICAgIC8vIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSlcblxuICAgIGNvbnN0IFdJRFRIID0gY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IEhFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogMTM7XG5cbiAgICBsZXQgYmFySGVpZ2h0O1xuICAgIGxldCB4ID0gMDsgXG5cbiAgICBmdW5jdGlvbiByZW5kZXJGcmFtZSgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJGcmFtZSk7XG4gICAgICB4ID0gMDtcblxuICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KTsgLy8gZnJlcXVlbmNpZXNcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4yKVwiO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuICAgICAgbGV0IHIsIGcsIGI7XG4gICAgICBsZXQgYmFycyA9IDExODtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXJzOyBpKyspIHtcbiAgICAgICAgYmFySGVpZ2h0ID0gKGRhdGFBcnJheVtpXSAqIDIuNSk7XG5cbiAgICAgICAgLy9jaGFuZ2UgaXQgdG8gZnJlcXVlbmN5IHJhbmdlXG4gICAgICAgIC8vZ2V0IHZvbCBhbmQgZnJlcVxuXG4gICAgICAgIGlmIChkYXRhQXJyYXlbaV0gPiAyMTApIHsgLy8gaG90IHBpbmsgMjEwXG4gICAgICAgICAgciA9IDI1NVxuICAgICAgICAgIGcgPSAwXG4gICAgICAgICAgYiA9IDE3NFxuICAgICAgICB9IGVsc2UgaWYgKGRhdGFBcnJheVtpXSA+IDE5MCkgeyAvLyBjeWFuIDIwMFxuICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhQXJyYXlbaV0gPiAxNzApIHsgLy8geWVsbG93IDE5MFxuICAgICAgICAgIHIgPSAyNDJcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDBcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhQXJyYXlbaV0gPiAxNTApIHsgLy8gbGltZSBncmVlbiAxODBcbiAgICAgICAgICByID0gMTA2XG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAwXG4gICAgICAgIH0gZWxzZSB7IC8vIG9yYW5nZVxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMTY2XG4gICAgICAgICAgYiA9IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCAoSEVJR0hUIC0gYmFySGVpZ2h0KSwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG5cbiAgICAgICAgeCArPSBiYXJXaWR0aCArIDEwO1xuXG4gICAgICAgIC8vIFJlbmRlcmluZyB0aGUgZ3JheSBhcnJvd3MgYXQgdGhlIHRvcCBvZiB0aGUgc2NyZWVuXG5cbiAgICAgICAgbGV0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1hcnJvd1wiKTtcbiAgICAgICAgbGV0IGRvd25BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bi1hcnJvd1wiKTtcbiAgICAgICAgbGV0IHVwQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwLWFycm93XCIpO1xuICAgICAgICBsZXQgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtYXJyb3dcIik7XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwLCAxMClcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duQXJyb3csIDM2NSwgMTApXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodXBBcnJvdywgNzI2LCAxMClcbiAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodEFycm93LCAxMTAwLCAxMClcblxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHJlbmRlckFycm93cygpIHtcbiAgICAvLyAgIGxldCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtYXJyb3dcIik7XG4gICAgLy8gICBsZXQgZG93bkFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3duLWFycm93XCIpO1xuICAgIC8vICAgbGV0IHVwQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwLWFycm93XCIpO1xuICAgIC8vICAgbGV0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWFycm93XCIpO1xuXG4gICAgLy8gICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAwLCAxMDApXG4gICAgLy8gfVxuXG4gICAgYXVkaW8ucGxheSgpO1xuICAgIHJlbmRlckZyYW1lKCk7IFxuICAgIC8vIHJlbmRlckFycm93cygpO1xuXG4gIH0gXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==