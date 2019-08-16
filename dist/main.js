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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2Nzcz8zNzFmIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImZpbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiYXVkaW8iLCJvbmNoYW5nZSIsImZpbGVzIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImFuYWx5c2VyIiwiY3JlYXRlQW5hbHlzZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJmZnRTaXplIiwiYnVmZmVyTGVuZ3RoIiwiZnJlcXVlbmN5QmluQ291bnQiLCJkYXRhQXJyYXkiLCJVaW50OEFycmF5IiwiV0lEVEgiLCJIRUlHSFQiLCJiYXJXaWR0aCIsImJhckhlaWdodCIsIngiLCJyZW5kZXJGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdldEJ5dGVGcmVxdWVuY3lEYXRhIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyIiwiZyIsImIiLCJiYXJzIiwicXVhcnRlckxlbmd0aCIsImxlbmd0aCIsImZpcnN0Iiwic2xpY2UiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsIm5ld0FyciIsImoiLCJzdWJBcnIiLCJpIiwibGVmdEFycm93IiwiZG93bkFycm93IiwidXBBcnJvdyIsInJpZ2h0QXJyb3ciLCJkcmF3SW1hZ2UiLCJwbGF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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NEJDLENBQTVCLFNBQWlDQyxDQUFqQztBQUNBMUIsY0FBSXVCLFFBQUosQ0FBYUwsQ0FBYixFQUFpQkgsU0FBU0UsU0FBMUIsRUFBc0NELFFBQXRDLEVBQWdEQyxTQUFoRDs7QUFFQUMsZUFBS0YsV0FBVyxFQUFoQjs7QUFFQTs7QUFFQSxjQUFJdUIsWUFBWXBELFNBQVNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBaEI7QUFDQSxjQUFJb0QsWUFBWXJELFNBQVNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBaEI7QUFDQSxjQUFJcUQsVUFBVXRELFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZDtBQUNBLGNBQUlzRCxhQUFhdkQsU0FBU0MsY0FBVCxDQUF3QixhQUF4QixDQUFqQjs7QUFFQVksY0FBSTJDLFNBQUosQ0FBY0osU0FBZCxFQUF5QixFQUF6QixFQUE2QixFQUE3QjtBQUNBdkMsY0FBSTJDLFNBQUosQ0FBY0gsU0FBZCxFQUF5QixHQUF6QixFQUE4QixFQUE5QjtBQUNBeEMsY0FBSTJDLFNBQUosQ0FBY0YsT0FBZCxFQUF1QixHQUF2QixFQUE0QixFQUE1QjtBQUNBekMsY0FBSTJDLFNBQUosQ0FBY0QsVUFBZCxFQUEwQixJQUExQixFQUFnQyxFQUFoQztBQUVEO0FBRUY7QUFDQTs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUFwRCxVQUFNc0QsSUFBTjtBQUNBekI7QUFDQTtBQUVELEdBN0hEO0FBOEhELENBbklELEM7Ozs7Ozs7Ozs7O0FDRkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlLWlucHV0XCIpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuXG4gIGZpbGUub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXM7XG4gICAgYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSk7IFxuXG4gICAgLy8gY2FudmFzIGluaXRpYWxpemF0aW9uXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vXG5cbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGxldCBzcmMgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG4gICAgY29uc3QgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG5cbiAgICBzcmMuY29ubmVjdChhbmFseXNlcik7XG4gICAgYW5hbHlzZXIuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIGFuYWx5c2VyLmZmdFNpemUgPSAxNjM4NDtcbiAgICAvLyBhbmFseXNlci5mZnRTaXplID0gMTAyNDtcbiAgICBjb25zdCBidWZmZXJMZW5ndGggPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGFBcnJheSk7XG5cbiAgICAvLyBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShkYXRhQXJyYXkpXG5cbiAgICBjb25zdCBXSURUSCA9IGNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBIRUlHSFQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDEzO1xuICAgIC8vIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDI7XG5cbiAgICBsZXQgYmFySGVpZ2h0O1xuICAgIGxldCB4ID0gMDtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckZyYW1lKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckZyYW1lKTtcbiAgICAgIHggPSAwO1xuXG4gICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShkYXRhQXJyYXkpOyAvLyBmcmVxdWVuY2llc1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjIpXCI7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuXG4gICAgICBsZXQgciwgZywgYjtcbiAgICAgIGxldCBiYXJzID0gMTE4O1xuXG4gICAgICAvLyBzcGxpdCB0aGUgZGF0YSBhcnJheSBpbiA0IGVxdWFsIHBhcnRzXG4gICAgICBsZXQgcXVhcnRlckxlbmd0aCA9IGRhdGFBcnJheS5sZW5ndGggLyA0O1xuXG4gICAgICBsZXQgZmlyc3QgPSBkYXRhQXJyYXkuc2xpY2UoMCwgcXVhcnRlckxlbmd0aCk7XG4gICAgICBsZXQgc2Vjb25kID0gZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGgsIHF1YXJ0ZXJMZW5ndGggKiAyKTtcbiAgICAgIGxldCB0aGlyZCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMiwgcXVhcnRlckxlbmd0aCAqIDMpO1xuICAgICAgbGV0IGZvdXJ0aCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoICogMywgcXVhcnRlckxlbmd0aCAqIDQpO1xuXG4gICAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuICAgICAgLy8gY29uc29sZS5sb2cobmV3QXJyKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdBcnIubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICBsZXQgc3ViQXJyID0gbmV3QXJyW2pdO1xuICAgICAgICAvLyBqIGlzIHRoZSBzZWN0aW9uXG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFyczsgaSsrKSB7XG4gICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpO1xuXG4gICAgICAgIC8vY2hhbmdlIGl0IHRvIGZyZXF1ZW5jeSByYW5nZVxuICAgICAgICAvL2dldCB2b2wgYW5kIGZyZXFcblxuICAgICAgICBpZiAoc3ViQXJyW2ldID4gMjEwKSB7IC8vIGhvdCBwaW5rIDIxMFxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMFxuICAgICAgICAgIGIgPSAxNzRcbiAgICAgICAgfSBlbHNlIGlmIChzdWJBcnJbaV0gPiAxOTApIHsgLy8gY3lhbiAyMDBcbiAgICAgICAgICByID0gMFxuICAgICAgICAgIGcgPSAyNTVcbiAgICAgICAgICBiID0gMjUxXG4gICAgICAgIH0gZWxzZSBpZiAoc3ViQXJyW2ldID4gMTcwKSB7IC8vIHllbGxvdyAxOTBcbiAgICAgICAgICByID0gMjQyXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAwXG4gICAgICAgIH0gZWxzZSBpZiAoc3ViQXJyW2ldID4gMTUwKSB7IC8vIGxpbWUgZ3JlZW4gMTgwXG4gICAgICAgICAgciA9IDEwNlxuICAgICAgICAgIGcgPSAyNTVcbiAgICAgICAgICBiID0gMFxuICAgICAgICB9IGVsc2UgeyAvLyBvcmFuZ2VcbiAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgZyA9IDE2NlxuICAgICAgICAgIGIgPSAwXG4gICAgICAgIH1cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3J9LCR7Z30sJHtifSlgO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgKEhFSUdIVCAtIGJhckhlaWdodCksIGJhcldpZHRoLCBiYXJIZWlnaHQpO1xuXG4gICAgICAgIHggKz0gYmFyV2lkdGggKyAxMDtcblxuICAgICAgICAvLyAvLyBSZW5kZXJpbmcgdGhlIGdyYXkgYXJyb3dzIGF0IHRoZSB0b3Agb2YgdGhlIHNjcmVlblxuXG4gICAgICAgIGxldCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtYXJyb3dcIik7XG4gICAgICAgIGxldCBkb3duQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd24tYXJyb3dcIik7XG4gICAgICAgIGxldCB1cEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cC1hcnJvd1wiKTtcbiAgICAgICAgbGV0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWFycm93XCIpO1xuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdEFycm93LCAxMCwgMTApXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bkFycm93LCAzNjUsIDEwKVxuICAgICAgICBjdHguZHJhd0ltYWdlKHVwQXJyb3csIDcyNiwgMTApXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UocmlnaHRBcnJvdywgMTEwMCwgMTApXG5cbiAgICAgIH1cblxuICAgIH1cbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiByZW5kZXJBcnJvd3MoKSB7XG4gICAgLy8gICBsZXQgbGVmdEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LWFycm93XCIpO1xuICAgIC8vICAgbGV0IGRvd25BcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bi1hcnJvd1wiKTtcbiAgICAvLyAgIGxldCB1cEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cC1hcnJvd1wiKTtcbiAgICAvLyAgIGxldCByaWdodEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1hcnJvd1wiKTtcblxuICAgIC8vICAgY3R4LmRyYXdJbWFnZShsZWZ0QXJyb3csIDEwMCwgMTAwKVxuICAgIC8vIH1cblxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICByZW5kZXJGcmFtZSgpO1xuICAgIC8vIHJlbmRlckFycm93cygpO1xuXG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9