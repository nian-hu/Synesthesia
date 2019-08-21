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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");

var _game = __webpack_require__(/*! ./js/game */ "./src/js/game.js");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.addEventListener("DOMContentLoaded", function () {
  var intro = new Intro(document);
  intro.loadInstructions();
  intro.startGame();
});

var Intro = function () {
  function Intro(document) {
    _classCallCheck(this, Intro);

    this.document = document;
    this.instructionsButton = document.getElementById("open-instructions");
    this.instructions = document.getElementById("instructions");
    this.closeInstructions = document.getElementById("close-instructions");
    this.contact = document.getElementById("contact");
    this.contactButton = document.getElementById("open-contact");
    this.closeContact = document.getElementById("close-contact");

    this.closeInstructions.onclick = function () {
      instructions.style.display = "none";
    };

    this.contactButton.onclick = function () {
      this.contact.style.display = "block";
    };

    this.closeContact.onclick = function () {
      this.contact.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === this.instructions) {
        this.instructions.style.display = "none";
      }

      if (event.target === this.contact) {
        this.contact.style.display = "none";
      }
    };
  }

  _createClass(Intro, [{
    key: 'loadInstructions',
    value: function loadInstructions() {
      this.instructionsButton.onclick = function () {
        this.instructions.style.display = "block";
      };
      this.instructionsButton.click();
    }
  }, {
    key: 'startGame',
    value: function startGame() {
      return new _game2.default();
    }
  }]);

  return Intro;
}();

/// OLD CODE

window.onload = function () {
  var file = document.getElementById("file");
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

  instructionsButton.click();

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

    // Create new audio context
    var context = new AudioContext();
    // Give the audio context an audio source
    var src = context.createMediaElementSource(audio);
    // Create analyzer for audio context
    var analyser = context.createAnalyser();
    // Connect the audio source to the analyzer
    src.connect(analyser);
    // Send sound to speakers
    analyser.connect(context.destination);
    // Use Fast Fourier Transform algorithm to get frequency domain information
    analyser.fftSize = 1024;
    // Calculates the number of data values available for the visualization
    var bufferLength = analyser.frequencyBinCount;
    // Creates an array with length of bufferLength where all values are 0
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

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;

      // Fills the array with frequency information instead of zeros
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
          };

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
          ctx_bottom.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
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
          fadeOut(allPoints);

          if (j === 0 && lightup) {
            ctx.drawImage(coloredLeftArrow, 10, 10); // 50
          } else if (j === 0 && !lightup) {
            ctx.drawImage(leftArrow, 10, 10); // 50
          }

          if (j === 0 && LEFT && lightup) {
            ctx.drawImage(pressedLeftArrow, 10, 10);
          }
          //

          if (j === 0 && LEFT && !lightup) {
            ctx.drawImage(incorrectLeftArrow, 10, 10);
          }

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

/***/ "./src/js/down_arrow.js":
/*!******************************!*\
  !*** ./src/js/down_arrow.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DownArrow = function () {
  function DownArrow(ctx) {
    _classCallCheck(this, DownArrow);

    this.pos = [365, 10];
    this.ctx = ctx;

    this.coloredDownArrow = new Image();
    this.coloredDownArrow.src = "src/assets/colored_down_arrow.png";

    this.pressedDownArrow = new Image();
    this.pressedDownArrow.src = "src/assets/pressed_down_arrow.png";

    this.incorrectDownArrow = new Image();
    this.incorrectDownArrow.src = "src/assets/incorrect_down_arrow.png";

    this.downArrow = new Image();
    this.downArrow.src = "src/assets/down_arrow.png";
  }

  _createClass(DownArrow, [{
    key: "drawColored",
    value: function drawColored() {
      this.ctx.drawImage(this.coloredDownArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawNormal",
    value: function drawNormal() {
      this.ctx.drawImage(this.downArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawPressed",
    value: function drawPressed() {
      this.ctx.drawImage(this.pressedDownArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawIncorrect",
    value: function drawIncorrect() {
      this.ctx.drawImage(this.incorrectDownArrow, this.pos[0], this.pos[1]);
    }
  }]);

  return DownArrow;
}();

exports.default = DownArrow;

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _left_arrow = __webpack_require__(/*! ./left_arrow */ "./src/js/left_arrow.js");

var _left_arrow2 = _interopRequireDefault(_left_arrow);

var _down_arrow = __webpack_require__(/*! ./down_arrow */ "./src/js/down_arrow.js");

var _down_arrow2 = _interopRequireDefault(_down_arrow);

var _up_arrow = __webpack_require__(/*! ./up_arrow */ "./src/js/up_arrow.js");

var _up_arrow2 = _interopRequireDefault(_up_arrow);

var _right_arrow = __webpack_require__(/*! ./right_arrow */ "./src/js/right_arrow.js");

var _right_arrow2 = _interopRequireDefault(_right_arrow);

var _visualizer = __webpack_require__(/*! ./visualizer */ "./src/js/visualizer.js");

var _visualizer2 = _interopRequireDefault(_visualizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById("canvas");
    this.demo = document.getElementById("demo");
    this.file = document.getElementById("file");
    this.audio = document.getElementById("audio");

    demo.onclick = function () {
      this.audio.src = "src/assets/Cyberpunk.mp3";
      this.play();
    };

    file.onchange = function () {
      var files = this.files;
      this.audio.src = URL.createObjectURL(files[0]);
      this.play();
    };
  }

  _createClass(Game, [{
    key: 'play',
    value: function play() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      var ctx = this.canvas.getContext("2d");

      var context = new AudioContext();
      var src = context.createMediaElementSource(audio);
      var analyser = context.createAnalyser();
      src.connect(analyser);
      analyser.connect(context.destination);
      analyser.fftSize = 1024;
      var bufferLength = analyser.frequencyBinCount;
      var dataArray = new Uint8Array(bufferLength);

      var WIDTH = this.canvas.width;
      var HEIGHT = this.canvas.height;
      var barWidth = WIDTH / bufferLength * 9;

      var visualizer = new _visualizer2.default(analyser, dataArray, ctx);
      audio.play();
      visualizer.renderFrame();
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),

/***/ "./src/js/left_arrow.js":
/*!******************************!*\
  !*** ./src/js/left_arrow.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeftArrow = function () {
  function LeftArrow(ctx) {
    _classCallCheck(this, LeftArrow);

    this.pos = [10, 10];
    this.ctx = ctx;

    this.coloredLeftArrow = new Image();
    this.coloredLeftArrow.src = "src/assets/colored_left_arrow.png";

    this.pressedLeftArrow = new Image();
    this.pressedLeftArrow.src = "src/assets/pressed_left_arrow.png";

    this.incorrectLeftArrow = new Image();
    this.incorrectLeftArrow.src = "src/assets/incorrect_left_arrow.png";

    this.leftArrow = new Image();
    this.leftArrow.src = "src/assets/left_arrow.png";
  }

  _createClass(LeftArrow, [{
    key: "drawColored",
    value: function drawColored() {
      this.ctx.drawImage(this.coloredLeftArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawNormal",
    value: function drawNormal() {
      this.ctx.drawImage(this.leftArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawPressed",
    value: function drawPressed() {
      this.ctx.drawImage(this.pressedLeftArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawIncorrect",
    value: function drawIncorrect() {
      this.ctx.drawImage(this.incorrectLeftArrow, this.pos[0], this.pos[1]);
    }
  }]);

  return LeftArrow;
}();

exports.default = LeftArrow;

/***/ }),

/***/ "./src/js/right_arrow.js":
/*!*******************************!*\
  !*** ./src/js/right_arrow.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RightArrow = function () {
  function RightArrow(ctx) {
    _classCallCheck(this, RightArrow);

    this.pos = [1100, 10];
    this.ctx = ctx;

    this.coloredRightArrow = new Image();
    this.coloredRightArrow.src = "src/assets/colored_right_arrow.png";

    this.pressedRightArrow = new Image();
    this.pressedRightArrow.src = "src/assets/pressed_right_arrow.png";

    this.incorrectRightArrow = new Image();
    this.incorrectRightArrow.src = "src/assets/incorrect_right_arrow.png";

    this.rightArrow = new Image();
    this.rightArrow.src = "src/assets/right_arrow.png";
  }

  _createClass(RightArrow, [{
    key: "drawColored",
    value: function drawColored() {
      this.ctx.drawImage(this.coloredRightArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawNormal",
    value: function drawNormal() {
      this.ctx.drawImage(this.rightArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawPressed",
    value: function drawPressed() {
      this.ctx.drawImage(this.pressedRightArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawIncorrect",
    value: function drawIncorrect() {
      this.ctx.drawImage(this.incorrectRightArrow, this.pos[0], this.pos[1]);
    }
  }]);

  return RightArrow;
}();

exports.default = RightArrow;

/***/ }),

/***/ "./src/js/up_arrow.js":
/*!****************************!*\
  !*** ./src/js/up_arrow.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpArrow = function () {
  function UpArrow(ctx) {
    _classCallCheck(this, UpArrow);

    this.pos = [726, 10];
    this.ctx = ctx;

    this.coloredUpArrow = new Image();
    this.coloredUpArrow.src = "src/assets/colored_up_arrow.png";

    this.pressedUpArrow = new Image();
    this.pressedUpArrow.src = "src/assets/pressed_up_arrow.png";

    this.incorrectUpArrow = new Image();
    this.incorrectUpArrow.src = "src/assets/incorrect_up_arrow.png";

    this.upArrow = new Image();
    this.upArrow.src = "src/assets/up_arrow.png";
  }

  _createClass(UpArrow, [{
    key: "drawColored",
    value: function drawColored() {
      this.ctx.drawImage(this.coloredUpArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawNormal",
    value: function drawNormal() {
      this.ctx.drawImage(this.upArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawPressed",
    value: function drawPressed() {
      this.ctx.drawImage(this.pressedUpArrow, this.pos[0], this.pos[1]);
    }
  }, {
    key: "drawIncorrect",
    value: function drawIncorrect() {
      this.ctx.drawImage(this.incorrectUpArrow, this.pos[0], this.pos[1]);
    }
  }]);

  return UpArrow;
}();

exports.default = UpArrow;

/***/ }),

/***/ "./src/js/visualizer.js":
/*!******************************!*\
  !*** ./src/js/visualizer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Visualizer = function () {
  function Visualizer(analyser, dataArray, ctx) {
    _classCallCheck(this, Visualizer);

    this.analyser = analyser;
    this.dataArray = dataArray;
    this.ctx = ctx;

    this.lightup = false;
    this.lightup2 = false;
    this.lightup3 = false;
    this.lightup4 = false;

    this.LEFT = false;
    this.DOWN = false;
    this.UP = false;
    this.RIGHT = false;

    this.leftPoints = 0;
    this.downPoints = 0;
    this.upPoints = 0;
    this.rightPoints = 0;

    this.incorrect = true;
    this.incorrect2 = true;
    this.incorrect3 = true;
    this.incorrect4 = true;
  }

  _createClass(Visualizer, [{
    key: "renderFrame",
    value: function (_renderFrame) {
      function renderFrame() {
        return _renderFrame.apply(this, arguments);
      }

      renderFrame.toString = function () {
        return _renderFrame.toString();
      };

      return renderFrame;
    }(function () {
      requestAnimationFrame(renderFrame);
      var x = 0;

      this.analyser.getByteFrequencyData(this.dataArray);
      var r = void 0,
          g = void 0,
          b = void 0;
      var bars = 40;

      var quarterLength = this.dataArray.length / 4;

      var first = this.dataArray.slice(0, quarterLength);
      var second = this.dataArray.slice(quarterLength, quarterLength * 2);
      var third = this.dataArray.slice(quarterLength * 2, quarterLength * 3);
      var fourth = this.dataArray.slice(quarterLength * 3, quarterLength * 4);

      var newArr = [first, second, third, fourth];

      for (var j = 0; j < newArr.length; j++) {
        var subArr = newArr[j];
        for (var i = 0; i < 10; i++) {
          barHeight = subArr[i] * 2.5;
          if (j === 0 && subArr[i] > 250) {
            r = 255;
            g = 0;
            b = 191;
          } else if (j === 0 && subArr[i] < 250) {
            r = 71;
            g = 4;
            b = 70;
          } else if (j === 1 && subArr[i] > 190) {
            r = 0;
            g = 255;
            b = 251;
          } else if (j === 1 && subArr[i] < 190) {
            r = 2;
            g = 64;
            b = 79;
          } else if (j === 2 && subArr[i] > 170) {
            r = 223;
            g = 255;
            b = 42;
          } else if (j === 2 && subArr[i] < 170) {
            r = 4;
            g = 71;
            b = 9;
          } else if (j === 3 && subArr[i] > 50) {
            r = 255;
            g = 164;
            b = 0;
          } else if (j === 3 && subArr[i] < 50) {
            r = 71;
            g = 14;
            b = 4;
          }
          ctx_bottom.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx_bottom.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          x += barWidth + 10;
        }
      }
    })
  }]);

  return Visualizer;
}();

exports.default = Visualizer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb3duX2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sZWZ0X2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yaWdodF9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXBfYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnRybyIsIkludHJvIiwiZG9jdW1lbnQiLCJsb2FkSW5zdHJ1Y3Rpb25zIiwic3RhcnRHYW1lIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnN0cnVjdGlvbnMiLCJjbG9zZUluc3RydWN0aW9ucyIsImNvbnRhY3QiLCJjb250YWN0QnV0dG9uIiwiY2xvc2VDb250YWN0Iiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwiY2xpY2siLCJHYW1lIiwib25sb2FkIiwiZmlsZSIsImNhbnZhcyIsImNhbnZhc19ib3R0b20iLCJhdWRpbyIsImRlbW8iLCJzcmMiLCJwbGF5Iiwib25jaGFuZ2UiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImN0eF9ib3R0b20iLCJjb250ZXh0IiwiQXVkaW9Db250ZXh0IiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiYW5hbHlzZXIiLCJjcmVhdGVBbmFseXNlciIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImZmdFNpemUiLCJidWZmZXJMZW5ndGgiLCJmcmVxdWVuY3lCaW5Db3VudCIsImRhdGFBcnJheSIsIlVpbnQ4QXJyYXkiLCJXSURUSCIsIkhFSUdIVCIsImJhcldpZHRoIiwiYmFySGVpZ2h0IiwieCIsImxpZ2h0dXAiLCJsaWdodHVwMiIsImxpZ2h0dXAzIiwibGlnaHR1cDQiLCJMRUZUIiwiRE9XTiIsIlVQIiwiUklHSFQiLCJsZWZ0UG9pbnRzIiwiZG93blBvaW50cyIsInVwUG9pbnRzIiwicmlnaHRQb2ludHMiLCJwcmVzc2VkIiwiaW5jb3JyZWN0IiwiaW5jb3JyZWN0MiIsImluY29ycmVjdDMiLCJpbmNvcnJlY3Q0IiwicmVuZGVyRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiciIsImciLCJiIiwiYmFycyIsInF1YXJ0ZXJMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdCIsInNsaWNlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJuZXdBcnIiLCJqIiwic3ViQXJyIiwiaSIsImhhbmRsZVByZXNzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwidGV4dCIsImFscGhhIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImZvbnQiLCJmaWxsVGV4dCIsImNsZWFySW50ZXJ2YWwiLCJjdXJyZW50U2NvcmUiLCJjb2xvcmVkTGVmdEFycm93IiwiSW1hZ2UiLCJwcmVzc2VkTGVmdEFycm93IiwiaW5jb3JyZWN0TGVmdEFycm93IiwibGVmdEFycm93IiwiY29sb3JlZERvd25BcnJvdyIsInByZXNzZWREb3duQXJyb3ciLCJpbmNvcnJlY3REb3duQXJyb3ciLCJkb3duQXJyb3ciLCJjb2xvcmVkVXBBcnJvdyIsInByZXNzZWRVcEFycm93IiwiaW5jb3JyZWN0VXBBcnJvdyIsInVwQXJyb3ciLCJjb2xvcmVkUmlnaHRBcnJvdyIsInByZXNzZWRSaWdodEFycm93IiwiaW5jb3JyZWN0UmlnaHRBcnJvdyIsInJpZ2h0QXJyb3ciLCJhdmciLCJzdW0iLCJjb3VudCIsImNvdW50MiIsImNvdW50MyIsImNvdW50NCIsImFsbFBvaW50cyIsImRyYXdJbWFnZSIsInBhdXNlZCIsIkRvd25BcnJvdyIsInBvcyIsInZpc3VhbGl6ZXIiLCJWaXN1YWxpemVyIiwiTGVmdEFycm93IiwiUmlnaHRBcnJvdyIsIlVwQXJyb3ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOzs7Ozs7OztBQUVBQSxPQUFPQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoRCxNQUFNQyxRQUFRLElBQUlDLEtBQUosQ0FBVUMsUUFBVixDQUFkO0FBQ0FGLFFBQU1HLGdCQUFOO0FBQ0FILFFBQU1JLFNBQU47QUFDRCxDQUpEOztJQU1NSCxLO0FBQ0osaUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFn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QSxJQUFJVSxNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEVBQTNCLEVBQStCO0FBQ3BDZCxnQkFBSSxHQUFKO0FBQ0FDLGdCQUFJLEdBQUo7QUFDQUMsZ0JBQUksQ0FBSjtBQUNELFdBSk0sTUFJQSxJQUFJVSxNQUFNLENBQU4sSUFBV0MsT0FBT0MsQ0FBUCxJQUFZLEVBQTNCLEVBQStCO0FBQ3BDZCxnQkFBSSxFQUFKO0FBQ0FDLGdCQUFJLEVBQUo7QUFDQUMsZ0JBQUksQ0FBSjtBQUNEO0FBQ0QxQyxxQkFBV3NDLFNBQVgsWUFBOEJFLENBQTlCLFNBQW1DQyxDQUFuQyxTQUF3Q0MsQ0FBeEM7QUFDQTFDLHFCQUFXdUMsUUFBWCxDQUFvQnRCLENBQXBCLEVBQXdCSCxTQUFTRSxTQUFqQyxFQUE2Q0QsUUFBN0MsRUFBdURDLFNBQXZEOztBQUVBQyxlQUFLRixXQUFXLEVBQWhCO0FBQ0Q7QUFDRjtBQUNGLEs7Ozs7OztrQkFHWW1GLFU7Ozs7Ozs7Ozs7O0FDMUZmLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zY3NzL21haW4uc2NzcydcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGludHJvID0gbmV3IEludHJvKGRvY3VtZW50KTtcbiAgaW50cm8ubG9hZEluc3RydWN0aW9ucygpO1xuICBpbnRyby5zdGFydEdhbWUoKTtcbn0pXG5cbmNsYXNzIEludHJvIHtcbiAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW4taW5zdHJ1Y3Rpb25zXCIpO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvbnNcIik7XG4gICAgdGhpcy5jbG9zZUluc3RydWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtaW5zdHJ1Y3Rpb25zXCIpO1xuICAgIHRoaXMuY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcbiAgICB0aGlzLmNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW4tY29udGFjdFwiKTtcbiAgICB0aGlzLmNsb3NlQ29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtY29udGFjdFwiKTtcblxuICAgIHRoaXMuY2xvc2VJbnN0cnVjdGlvbnMub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgdGhpcy5jb250YWN0QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlQ29udGFjdC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5pbnN0cnVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmNvbnRhY3QpIHtcbiAgICAgICAgdGhpcy5jb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2FkSW5zdHJ1Y3Rpb25zKCkge1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICB0aGlzLmluc3RydWN0aW9uc0J1dHRvbi5jbGljaygpO1xuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHJldHVybiBuZXcgR2FtZSgpO1xuICB9XG59XG5cbi8vLyBPTEQgQ09ERVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlXCIpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY2FudmFzX2JvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzX2JvdHRvbVwiKTtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc1wiKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLWluc3RydWN0aW9uc1wiKTtcbiAgY29uc3QgY2xvc2VJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWluc3RydWN0aW9uc1wiKTtcbiAgY29uc3QgZGVtbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbi1jb250YWN0XCIpO1xuICBjb25zdCBjbG9zZUNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWNvbnRhY3RcIik7XG5cbiAgaW5zdHJ1Y3Rpb25zQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIGluc3RydWN0aW9uc0J1dHRvbi5jbGljaygpO1xuXG4gIGNsb3NlSW5zdHJ1Y3Rpb25zLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IGluc3RydWN0aW9ucykge1xuICAgICAgaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IFxuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gY29udGFjdCkge1xuICAgICAgY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cbiAgY29udGFjdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgY2xvc2VDb250YWN0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGRlbW8ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGF1ZGlvLnNyYyA9IFwic3JjL2Fzc2V0cy9DeWJlcnB1bmsubXAzXCI7XG4gICAgcGxheSgpO1xuICB9XG5cbiAgZmlsZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXM7XG4gICAgYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSk7IFxuICAgIHBsYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXkoKSB7XG5cbiAgICAvLyBjYW52YXMgaW5pdGlhbGl6YXRpb25cbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy9cblxuICAgIC8vIHNlY29uZCBjYW52YXNcbiAgICBjYW52YXNfYm90dG9tLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzX2JvdHRvbS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4X2JvdHRvbSA9IGNhbnZhc19ib3R0b20uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vXG5cbiAgICAvLyBDcmVhdGUgbmV3IGF1ZGlvIGNvbnRleHRcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIC8vIEdpdmUgdGhlIGF1ZGlvIGNvbnRleHQgYW4gYXVkaW8gc291cmNlXG4gICAgbGV0IHNyYyA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbiAgICAvLyBDcmVhdGUgYW5hbHl6ZXIgZm9yIGF1ZGlvIGNvbnRleHRcbiAgICBjb25zdCBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAvLyBDb25uZWN0IHRoZSBhdWRpbyBzb3VyY2UgdG8gdGhlIGFuYWx5emVyXG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIC8vIFNlbmQgc291bmQgdG8gc3BlYWtlcnNcbiAgICBhbmFseXNlci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIC8vIFVzZSBGYXN0IEZvdXJpZXIgVHJhbnNmb3JtIGFsZ29yaXRobSB0byBnZXQgZnJlcXVlbmN5IGRvbWFpbiBpbmZvcm1hdGlvblxuICAgIGFuYWx5c2VyLmZmdFNpemUgPSAxMDI0O1xuICAgIC8vIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBkYXRhIHZhbHVlcyBhdmFpbGFibGUgZm9yIHRoZSB2aXN1YWxpemF0aW9uXG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgLy8gQ3JlYXRlcyBhbiBhcnJheSB3aXRoIGxlbmd0aCBvZiBidWZmZXJMZW5ndGggd2hlcmUgYWxsIHZhbHVlcyBhcmUgMFxuICAgIGNvbnN0IGRhdGFBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlckxlbmd0aCk7XG5cbiAgICBjb25zdCBXSURUSCA9IGNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBIRUlHSFQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDk7IFxuICAgIC8vIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDI7IFxuXG4gICAgbGV0IGJhckhlaWdodDtcbiAgICBsZXQgeCA9IDA7XG5cbiAgICBsZXQgbGlnaHR1cCA9IGZhbHNlO1xuICAgIGxldCBsaWdodHVwMiA9IGZhbHNlO1xuICAgIGxldCBsaWdodHVwMyA9IGZhbHNlO1xuICAgIGxldCBsaWdodHVwNCA9IGZhbHNlO1xuXG4gICAgbGV0IExFRlQgPSBmYWxzZTtcbiAgICBsZXQgRE9XTiA9IGZhbHNlO1xuICAgIGxldCBVUCA9IGZhbHNlO1xuICAgIGxldCBSSUdIVCA9IGZhbHNlO1xuXG4gICAgbGV0IGxlZnRQb2ludHMgPSAwO1xuICAgIGxldCBkb3duUG9pbnRzID0gMDtcbiAgICBsZXQgdXBQb2ludHMgPSAwO1xuICAgIGxldCByaWdodFBvaW50cyA9IDA7XG5cbiAgICBsZXQgcHJlc3NlZCA9IG51bGw7XG5cbiAgICBsZXQgaW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICBsZXQgaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgbGV0IGluY29ycmVjdDMgPSB0cnVlO1xuICAgIGxldCBpbmNvcnJlY3Q0ID0gdHJ1ZTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckZyYW1lKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckZyYW1lKTtcbiAgICAgIHggPSAwO1xuICAgICAgXG4gICAgICAvLyBGaWxscyB0aGUgYXJyYXkgd2l0aCBmcmVxdWVuY3kgaW5mb3JtYXRpb24gaW5zdGVhZCBvZiB6ZXJvc1xuICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KTsgLy8gZnJlcXVlbmNpZXNcblxuICAgICAgY3R4X2JvdHRvbS5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4yKVwiO1xuICAgICAgY3R4X2JvdHRvbS5maWxsUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcblxuICAgICAgbGV0IHIsIGcsIGI7XG4gICAgICBsZXQgYmFycyA9IDQwOyAvLyAxMThcblxuICAgICAgLy8gc3BsaXQgdGhlIGRhdGEgYXJyYXkgaW4gNCBlcXVhbCBwYXJ0c1xuICAgICAgbGV0IHF1YXJ0ZXJMZW5ndGggPSBkYXRhQXJyYXkubGVuZ3RoIC8gNDtcblxuICAgICAgbGV0IGZpcnN0ID0gZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgICAgbGV0IHNlY29uZCA9IGRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoLCBxdWFydGVyTGVuZ3RoICogMik7XG4gICAgICBsZXQgdGhpcmQgPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDIsIHF1YXJ0ZXJMZW5ndGggKiAzKTtcbiAgICAgIGxldCBmb3VydGggPSBkYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDMsIHF1YXJ0ZXJMZW5ndGggKiA0KTtcblxuICAgICAgbGV0IG5ld0FyciA9IFtmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoXTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdBcnIubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICBsZXQgc3ViQXJyID0gbmV3QXJyW2pdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8gMzBcbiAgICAgICAgICBiYXJIZWlnaHQgPSAoc3ViQXJyW2ldICogMi41KTsgLy8gMi41IC0gZ29vZFxuICAgICAgICAgIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDI1MCkgeyAvLyAyMTAsIDIzMCwgMjQwIChza2lubnkpXG4gICAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgICBnID0gMFxuICAgICAgICAgICAgYiA9IDE5MVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAyNTApIHsgLy8gMjEwLCAyMzBcbiAgICAgICAgICAgIHIgPSA3MVxuICAgICAgICAgICAgZyA9IDRcbiAgICAgICAgICAgIGIgPSA3MFxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPiAxOTApIHsgLy8gMTIwLCAxMzAsIDE0MCAoc2tpbm55KSwgMTgwXG4gICAgICAgICAgICByID0gMFxuICAgICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgICAgYiA9IDI1MVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPCAxOTApIHsgLy8gMTIwLCAxMzBcbiAgICAgICAgICAgIHIgPSAyXG4gICAgICAgICAgICBnID0gNjRcbiAgICAgICAgICAgIGIgPSA3OVxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPiAxNzApIHsgLy8gMTAwLCAxMTAsIDEyMCAoc2tpbm55KVxuICAgICAgICAgICAgciA9IDIyM1xuICAgICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgICAgYiA9IDQyXG4gICAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA8IDE3MCkgeyAvLyAxMDAsIDExMFxuICAgICAgICAgICAgciA9IDRcbiAgICAgICAgICAgIGcgPSA3MVxuICAgICAgICAgICAgYiA9IDlcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gNTApIHsgLy8gMzAsIDQwIChza2lubnkpXG4gICAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgICBnID0gMTY0XG4gICAgICAgICAgICBiID0gMFxuICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiBzdWJBcnJbaV0gPCA1MCkgeyAvLyAzMFxuICAgICAgICAgICAgciA9IDcxXG4gICAgICAgICAgICBnID0gMTRcbiAgICAgICAgICAgIGIgPSA0XG4gICAgICAgICAgfVxuICAgICAgICAgIGN0eF9ib3R0b20uZmlsbFN0eWxlID0gYHJnYigke3J9LCR7Z30sJHtifSlgO1xuICAgICAgICAgIGN0eF9ib3R0b20uZmlsbFJlY3QoeCwgKEhFSUdIVCAtIGJhckhlaWdodCksIGJhcldpZHRoLCBiYXJIZWlnaHQpO1xuXG4gICAgICAgICAgeCArPSBiYXJXaWR0aCArIDEwO1xuXG4gICAgICAgICAgLy8gQ3JlYXRpbmcgYWxsIG9mIHRoZSBhcnJvd3NcbiAgICAgICAgICBsZXQgY29sb3JlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWRMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBwcmVzc2VkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGluY29ycmVjdExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGluY29ycmVjdExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X2xlZnRfYXJyb3cucG5nXCJcblxuICAgICAgICAgIGxldCBsZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBsZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbG9yZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBwcmVzc2VkRG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcHJlc3NlZERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGluY29ycmVjdERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGluY29ycmVjdERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X2Rvd25fYXJyb3cucG5nXCJcblxuICAgICAgICAgIGxldCBkb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBkb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBwcmVzc2VkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGluY29ycmVjdFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpbmNvcnJlY3RVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfdXBfYXJyb3cucG5nXCJcblxuICAgICAgICAgIGxldCB1cEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgdXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvdXBfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICBsZXQgY29sb3JlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb2xvcmVkUmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgICAgICAgIGxldCBwcmVzc2VkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIHByZXNzZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgICAgICAgbGV0IGluY29ycmVjdFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpbmNvcnJlY3RSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfcmlnaHRfYXJyb3cucG5nXCJcblxuICAgICAgICAgIGxldCByaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgcmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICAgICAgICAvLyBDYWxjdWxhdGluZyB0aGUgYXZlcmFnZSBcbiAgICAgICAgICBsZXQgYXZnO1xuICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gc3ViQXJyW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhdmcgPSBzdW0gLyBzdWJBcnIubGVuZ3RoO1xuXG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5ld0FyclswXVtpXSA+IDI1MCkge1xuICAgICAgICAgICAgICBjb3VudCArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChjb3VudCA+PSA0ICYmIGxpZ2h0dXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsaWdodHVwID0gZmFsc2UsIDc1MCk7XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50MiA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMV1baV0gPiAxOTApIHtcbiAgICAgICAgICAgICAgY291bnQyICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50MiA+PSA0ICYmIGxpZ2h0dXAyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXAyID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDIgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50MyA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbMl1baV0gPiAxNzApIHtcbiAgICAgICAgICAgICAgY291bnQzICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKGNvdW50MyA+PSA0ICYmIGxpZ2h0dXAzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpZ2h0dXAzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpZ2h0dXAzID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgICBjb3VudDMgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gbGV0IGxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGNvdW50NCA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbM10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdBcnJbM11baV0gPiA1MCkge1xuICAgICAgICAgICAgICBjb3VudDQgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAoY291bnQ0ID49IDQgJiYgbGlnaHR1cDQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlnaHR1cDQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGlnaHR1cDQgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICAgIGNvdW50NCA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLy8vLy8gaWYgYXJyb3cgaXMgbGl0LCB0aGVuIGxvb2sgZm9yIGtleSBwcmVzc1xuXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlUHJlc3MpO1xuICAgICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVQcmVzcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlUHJlc3MoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gaWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgbGlnaHR1cCAmJiBpbmNvcnJlY3QpIHtcbiAgICAgICAgICAgIC8vICAgZGVidWdnZXJcbiAgICAgICAgICAgIC8vICAgbGVmdFBvaW50cyArPSAxO1xuICAgICAgICAgICAgLy8gICBMRUZUID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiBMRUZUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgIC8vICAgLy8gbGlnaHR1cCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gICBpbmNvcnJlY3QgPSAhaW5jb3JyZWN0O1xuICAgICAgICAgICAgLy8gfSBcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgbGlnaHR1cCAmJiBpbmNvcnJlY3QpIHtcbiAgICAgICAgICAgICAgbGVmdFBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBMRUZUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBMRUZUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QgPSAhaW5jb3JyZWN0O1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgIWxpZ2h0dXAgJiYgaW5jb3JyZWN0KSB7XG4gICAgICAgICAgICAgIGxlZnRQb2ludHMgLT0gMTtcbiAgICAgICAgICAgICAgTEVGVCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGluY29ycmVjdCA9ICFpbmNvcnJlY3Q7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiBsaWdodHVwMiAmJiBpbmNvcnJlY3QyKSB7XG4gICAgICAgICAgICAgIGRvd25Qb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgRE9XTiA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gRE9XTiA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDIgPSAhaW5jb3JyZWN0MjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgIWxpZ2h0dXAyICYmIGluY29ycmVjdDIpIHtcbiAgICAgICAgICAgICAgZG93blBvaW50cyAtPSAxO1xuICAgICAgICAgICAgICBET1dOID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBET1dOID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0MiA9ICFpbmNvcnJlY3QyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLy8gVVBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzggJiYgbGlnaHR1cDMgJiYgaW5jb3JyZWN0Mykge1xuICAgICAgICAgICAgICB1cFBvaW50cyArPSAxO1xuICAgICAgICAgICAgICBVUCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVVAgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwMyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3QzID0gIWluY29ycmVjdDM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmICFsaWdodHVwMyAmJiBpbmNvcnJlY3QzKSB7XG4gICAgICAgICAgICAgIHVwUG9pbnRzIC09IDE7XG4gICAgICAgICAgICAgIFVQID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBVUCA9IGZhbHNlLCAyNTApXG4gICAgICAgICAgICAgIGxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICAgICAgICAgIGluY29ycmVjdDMgPSAhaW5jb3JyZWN0MztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vXG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5ICYmIGxpZ2h0dXA0ICYmIGluY29ycmVjdDQpIHtcbiAgICAgICAgICAgICAgcmlnaHRQb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgUklHSFQgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFJJR0hUID0gZmFsc2UsIDI1MClcbiAgICAgICAgICAgICAgbGlnaHR1cDQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaW5jb3JyZWN0NCA9ICFpbmNvcnJlY3Q0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiAhbGlnaHR1cDQgJiYgaW5jb3JyZWN0NCkge1xuICAgICAgICAgICAgICByaWdodFBvaW50cyAtPSAxO1xuICAgICAgICAgICAgICBSSUdIVCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gUklHSFQgPSBmYWxzZSwgMjUwKVxuICAgICAgICAgICAgICBsaWdodHVwNCA9IGZhbHNlO1xuICAgICAgICAgICAgICBpbmNvcnJlY3Q0ID0gIWluY29ycmVjdDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZmFkZU91dCh0ZXh0KSB7XG4gICAgICAgICAgICBsZXQgYWxwaGEgPSAxLjAsICAgLy8gZnVsbCBvcGFjaXR5XG4gICAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDsgLy8gQ2xlYXJzIHRoZSBjYW52YXNcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMCwgMTQwLCBcIiArIGFscGhhICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMjVwdCBBcmlhbFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCA2MDAsIDUwKTtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFscGhhIC0gMC4wNTsgLy8gZGVjcmVhc2Ugb3BhY2l0eSAoZmFkZSBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgY3R4LndpZHRoID0gY3R4LndpZHRoO1xuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGFsbFBvaW50cyA9IGxlZnRQb2ludHMgKyByaWdodFBvaW50cyArIHVwUG9pbnRzICsgZG93blBvaW50cztcbiAgICAgICAgICBmYWRlT3V0KGFsbFBvaW50cyk7XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMCAmJiBsaWdodHVwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRMZWZ0QXJyb3csIDEwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfSBcbiAgICAgICAgICBlbHNlIGlmIChqID09PSAwICYmICFsaWdodHVwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRBcnJvdywgMTAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9IFxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChqID09PSAwICYmIExFRlQgJiYgbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkTGVmdEFycm93LCAxMCwgMTApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL1xuXG4gICAgICAgICAgaWYgKGogPT09IDAgJiYgTEVGVCAmJiAhbGlnaHR1cCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbmNvcnJlY3RMZWZ0QXJyb3csIDEwLCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMSAmJiBsaWdodHVwMikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkRG93bkFycm93LCAzNjUsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gMSAmJiAhbGlnaHR1cDIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bkFycm93LCAzNjUsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMSAmJiBET1dOICYmIGxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWREb3duQXJyb3csIDM2NSwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAxICYmIERPV04gJiYgIWxpZ2h0dXAyKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGluY29ycmVjdERvd25BcnJvdywgMzY1LCAxMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vXG5cbiAgICAgICAgICBpZiAoaiA9PT0gMiAmJiBsaWdodHVwMykge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjb2xvcmVkVXBBcnJvdywgNzI2LCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDIgJiYgIWxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHVwQXJyb3csIDcyNiwgMTApOyAvLyA1MFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAyICYmIFVQICYmIGxpZ2h0dXAzKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHByZXNzZWRVcEFycm93LCA3MjYsIDEwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMiAmJiBVUCAmJiAhbGlnaHR1cDMpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW5jb3JyZWN0VXBBcnJvdywgNzI2LCAxMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9cblxuICAgICAgICAgIGlmIChqID09PSAzICYmIGxpZ2h0dXA0KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNvbG9yZWRSaWdodEFycm93LCAxMTAwLCAxMCk7IC8vIDUwXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGogPT09IDMgJiYgIWxpZ2h0dXA0KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0QXJyb3csIDExMDAsIDEwKTsgLy8gNTBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaiA9PT0gMyAmJiBSSUdIVCAmJiBsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShwcmVzc2VkUmlnaHRBcnJvdywgMTEwMCwgMTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChqID09PSAzICYmIFJJR0hUICYmICFsaWdodHVwNCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbmNvcnJlY3RSaWdodEFycm93LCAxMTAwLCAxMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gY3VycmVudFNjb3JlKHRleHQpIHtcbiAgICAgICAgICAgIGxldCBhbHBoYSA9IDEuMCwgICAvLyBmdWxsIG9wYWNpdHlcbiAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoOyAvLyBDbGVhcnMgdGhlIGNhbnZhc1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAwLCAxNDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA1MHB0IEFyaWFsXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIDQ1MCwgMzAwKTtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFscGhhIC0gMC4wNTsgLy8gZGVjcmVhc2Ugb3BhY2l0eSAoZmFkZSBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgY3R4LndpZHRoID0gY3R4LndpZHRoO1xuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGF1ZGlvLnBhdXNlZCkge1xuICAgICAgICAgICAgY3VycmVudFNjb3JlKFwiU0NPUkU6IFwiICsgYWxsUG9pbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbmNvcnJlY3QgPSB0cnVlO1xuICAgICAgICBpbmNvcnJlY3QyID0gdHJ1ZTtcbiAgICAgICAgaW5jb3JyZWN0MyA9IHRydWU7XG4gICAgICAgIGluY29ycmVjdDQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICByZW5kZXJGcmFtZSgpO1xuICB9XG59IiwiY2xhc3MgRG93bkFycm93IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5wb3MgPSBbMzY1LCAxMF07XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmNvbG9yZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNvbG9yZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMucHJlc3NlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJlc3NlZERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5pbmNvcnJlY3REb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmluY29ycmVjdERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X2Rvd25fYXJyb3cucG5nXCJcblxuICAgIHRoaXMuZG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5kb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2Rvd25fYXJyb3cucG5nXCI7XG4gIH1cblxuICBkcmF3Q29sb3JlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb2xvcmVkRG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd05vcm1hbCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5kb3duQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3UHJlc3NlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmVzc2VkRG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd0luY29ycmVjdCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmNvcnJlY3REb3duQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG93bkFycm93OyIsImltcG9ydCBMZWZ0QXJyb3cgZnJvbSAnLi9sZWZ0X2Fycm93JztcbmltcG9ydCBEb3duQXJyb3cgZnJvbSAnLi9kb3duX2Fycm93JztcbmltcG9ydCBVcEFycm93IGZyb20gJy4vdXBfYXJyb3cnO1xuaW1wb3J0IFJpZ2h0QXJyb3cgZnJvbSAnLi9yaWdodF9hcnJvdyc7XG5pbXBvcnQgVmlzdWFsaXplciBmcm9tICcuL3Zpc3VhbGl6ZXInO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmRlbW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gICAgdGhpcy5maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlXCIpO1xuICAgIHRoaXMuYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuXG4gICAgZGVtby5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5hdWRpby5zcmMgPSBcInNyYy9hc3NldHMvQ3liZXJwdW5rLm1wM1wiO1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgZmlsZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcztcbiAgICAgIHRoaXMuYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSk7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGxldCBzcmMgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG4gICAgY29uc3QgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcblxuICAgIGNvbnN0IFdJRFRIID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDk7IFxuXG4gICAgY29uc3QgdmlzdWFsaXplciA9IG5ldyBWaXN1YWxpemVyKGFuYWx5c2VyLCBkYXRhQXJyYXksIGN0eClcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgdmlzdWFsaXplci5yZW5kZXJGcmFtZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiY2xhc3MgTGVmdEFycm93IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5wb3MgPSBbMTAsIDEwXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuY29sb3JlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY29sb3JlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5wcmVzc2VkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmVzc2VkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLmluY29ycmVjdExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW5jb3JyZWN0TGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfbGVmdF9hcnJvdy5wbmdcIlxuXG4gICAgdGhpcy5sZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmxlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvbGVmdF9hcnJvdy5wbmdcIjtcbiAgfVxuXG4gIGRyYXdDb2xvcmVkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvbG9yZWRMZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3Tm9ybWFsKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdQcmVzc2VkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByZXNzZWRMZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3SW5jb3JyZWN0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluY29ycmVjdExlZnRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWZ0QXJyb3c7IiwiY2xhc3MgUmlnaHRBcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzExMDAsIDEwXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuY29sb3JlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNvbG9yZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5wcmVzc2VkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJlc3NlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9yaWdodF9hcnJvdy5wbmdcIlxuXG4gICAgdGhpcy5yaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5yaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9yaWdodF9hcnJvdy5wbmdcIjtcbiAgfVxuXG4gIGRyYXdDb2xvcmVkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvbG9yZWRSaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd05vcm1hbCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZFJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3SW5jb3JyZWN0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRBcnJvdzsiLCJjbGFzcyBVcEFycm93IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5wb3MgPSBbNzI2LCAxMF07XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmNvbG9yZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMucHJlc3NlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5pbmNvcnJlY3RVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3RVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfdXBfYXJyb3cucG5nXCJcblxuICAgIHRoaXMudXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMudXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvdXBfYXJyb3cucG5nXCI7XG4gIH1cblxuICBkcmF3Q29sb3JlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb2xvcmVkVXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMudXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdQcmVzc2VkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByZXNzZWRVcEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd0luY29ycmVjdCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmNvcnJlY3RVcEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwQXJyb3c7IiwiY2xhc3MgVmlzdWFsaXplciB7XG4gIGNvbnN0cnVjdG9yKGFuYWx5c2VyLCBkYXRhQXJyYXksIGN0eCkge1xuICAgIHRoaXMuYW5hbHlzZXIgPSBhbmFseXNlcjtcbiAgICB0aGlzLmRhdGFBcnJheSA9IGRhdGFBcnJheTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMubGlnaHR1cCA9IGZhbHNlO1xuICAgIHRoaXMubGlnaHR1cDIgPSBmYWxzZTtcbiAgICB0aGlzLmxpZ2h0dXAzID0gZmFsc2U7XG4gICAgdGhpcy5saWdodHVwNCA9IGZhbHNlO1xuXG4gICAgdGhpcy5MRUZUID0gZmFsc2U7XG4gICAgdGhpcy5ET1dOID0gZmFsc2U7XG4gICAgdGhpcy5VUCA9IGZhbHNlO1xuICAgIHRoaXMuUklHSFQgPSBmYWxzZTtcblxuICAgIHRoaXMubGVmdFBvaW50cyA9IDA7XG4gICAgdGhpcy5kb3duUG9pbnRzID0gMDtcbiAgICB0aGlzLnVwUG9pbnRzID0gMDtcbiAgICB0aGlzLnJpZ2h0UG9pbnRzID0gMDtcblxuICAgIHRoaXMuaW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICB0aGlzLmluY29ycmVjdDIgPSB0cnVlO1xuICAgIHRoaXMuaW5jb3JyZWN0MyA9IHRydWU7XG4gICAgdGhpcy5pbmNvcnJlY3Q0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlckZyYW1lKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJGcmFtZSk7XG4gICAgbGV0IHggPSAwO1xuXG4gICAgdGhpcy5hbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YSh0aGlzLmRhdGFBcnJheSk7XG4gICAgbGV0IHIsIGcsIGI7XG4gICAgbGV0IGJhcnMgPSA0MDtcblxuICAgIGxldCBxdWFydGVyTGVuZ3RoID0gdGhpcy5kYXRhQXJyYXkubGVuZ3RoIC8gNDtcblxuICAgIGxldCBmaXJzdCA9IHRoaXMuZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgIGxldCBzZWNvbmQgPSB0aGlzLmRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoLCBxdWFydGVyTGVuZ3RoICogMik7XG4gICAgbGV0IHRoaXJkID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDIsIHF1YXJ0ZXJMZW5ndGggKiAzKTtcbiAgICBsZXQgZm91cnRoID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDMsIHF1YXJ0ZXJMZW5ndGggKiA0KTtcbiAgICBcbiAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgXG4gICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpOyBcbiAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IFxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMFxuICAgICAgICAgIGIgPSAxOTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyBcbiAgICAgICAgICByID0gNzFcbiAgICAgICAgICBnID0gNFxuICAgICAgICAgIGIgPSA3MFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7IFxuICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA8IDE5MCkgeyBcbiAgICAgICAgICByID0gMlxuICAgICAgICAgIGcgPSA2NFxuICAgICAgICAgIGIgPSA3OVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7IFxuICAgICAgICAgIHIgPSAyMjNcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDQyXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxNzApIHsgXG4gICAgICAgICAgciA9IDRcbiAgICAgICAgICBnID0gNzFcbiAgICAgICAgICBiID0gOVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gNTApIHsgXG4gICAgICAgICAgciA9IDI1NVxuICAgICAgICAgIGcgPSAxNjRcbiAgICAgICAgICBiID0gMFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldIDwgNTApIHsgXG4gICAgICAgICAgciA9IDcxXG4gICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgYiA9IDRcbiAgICAgICAgfVxuICAgICAgICBjdHhfYm90dG9tLmZpbGxTdHlsZSA9IGByZ2IoJHtyfSwke2d9LCR7Yn0pYDtcbiAgICAgICAgY3R4X2JvdHRvbS5maWxsUmVjdCh4LCAoSEVJR0hUIC0gYmFySGVpZ2h0KSwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG5cbiAgICAgICAgeCArPSBiYXJXaWR0aCArIDEwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxpemVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=