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
    var contact = document.getElementById("contact");
    this.contactButton = document.getElementById("open-contact");
    this.closeContact = document.getElementById("close-contact");

    this.closeInstructions.onclick = function () {
      instructions.style.display = "none";
    };

    this.contactButton.onclick = function () {
      contact.style.display = "block";
    };

    this.closeContact.onclick = function () {
      contact.style.display = "none";
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
      var instructions = this.instructions;
      // debugger
      this.instructionsButton.onclick = function () {
        // debugger
        // this.instructions.style.display = "block";
        instructions.style.display = "block";
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
    key: "play",
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

var _left_arrow = __webpack_require__(/*! ./left_arrow */ "./src/js/left_arrow.js");

var _left_arrow2 = _interopRequireDefault(_left_arrow);

var _down_arrow = __webpack_require__(/*! ./down_arrow */ "./src/js/down_arrow.js");

var _down_arrow2 = _interopRequireDefault(_down_arrow);

var _up_arrow = __webpack_require__(/*! ./up_arrow */ "./src/js/up_arrow.js");

var _up_arrow2 = _interopRequireDefault(_up_arrow);

var _right_arrow = __webpack_require__(/*! ./right_arrow */ "./src/js/right_arrow.js");

var _right_arrow2 = _interopRequireDefault(_right_arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Visualizer = function () {
  function Visualizer(analyser, dataArray, ctx) {
    _classCallCheck(this, Visualizer);

    this.analyser = analyser;
    this.dataArray = dataArray;
    this.ctx = ctx;

    this.leftArrow = new _left_arrow2.default(this.ctx);
    this.downArrow = new _down_arrow2.default(this.ctx);
    this.upArrow = new _up_arrow2.default(this.ctx);
    this.rightArrow = new _right_arrow2.default(this.ctx);

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

    this.points = 0;
  }

  _createClass(Visualizer, [{
    key: 'displayPoints',
    value: function displayPoints(text) {
      var alpha = 1.0,
          interval = setInterval(function () {
        canvas.width = canvas.width;
        ctx.fillStyle = "rgba(255, 0, 140, " + alpha + ")";
        ctx.font = "bold 25pt Arial";
        ctx.fillText(text, 600, 50);
        alpha = alpha - 0.05;
        if (alpha < 0) {
          ctx.width = ctx.width;
          clearInterval(interval);
        }
      }, 50);
    }
  }, {
    key: 'handlePress',
    value: function handlePress(e) {
      var _this = this;

      e.preventDefault();

      if (e.keyCode === 37 && this.lightup && this.incorrect) {
        this.points += 1;
        this.LEFT = true;
        setTimeout(function () {
          return _this.LEFT = false;
        }, 250);
        this.lightup = false;
        this.incorrect = !this.incorrect;
      }

      if (e.keyCode === 37 && !this.lightup && this.incorrect) {
        this.points -= 1;
        this.LEFT = true;
        setTimeout(function () {
          return _this.LEFT = false;
        }, 250);
        this.incorrect = !this.incorrect;
      }

      if (e.keyCode === 40 && this.lightup2 && this.incorrect2) {
        this.points += 1;
        this.DOWN = true;
        setTimeout(function () {
          return _this.DOWN = false;
        }, 250);
        this.lightup2 = false;
        this.incorrect2 = !this.incorrect2;
      }

      if (e.keyCode === 40 && !this.lightup2 && this.incorrect2) {
        this.points -= 1;
        this.DOWN = true;
        setTimeout(function () {
          return _this.DOWN = false;
        }, 250);
        this.lightup2 = false;
        this.incorrect2 = !this.incorrect2;
      }

      if (e.keyCode === 38 && this.lightup3 && this.incorrect3) {
        this.points += 1;
        this.UP = true;
        setTimeout(function () {
          return _this.UP = false;
        }, 250);
        this.lightup3 = false;
        this.incorrect3 = !this.incorrect3;
      }

      if (e.keyCode === 38 && !this.lightup3 && this.incorrect3) {
        this.points -= 1;
        this.UP = true;
        setTimeout(function () {
          return _this.UP = false;
        }, 250);
        this.lightup3 = false;
        this.incorrect3 = !this.incorrect3;
      }

      if (e.keyCode === 39 && this.lightup4 && this.incorrect4) {
        this.points += 1;
        this.RIGHT = true;
        setTimeout(function () {
          return _this.RIGHT = false;
        }, 250);
        this.lightup4 = false;
        this.incorrect4 = !this.incorrect4;
      }

      if (e.keyCode === 39 && !this.lightup4 && this.incorrect4) {
        this.points -= 1;
        this.RIGHT = true;
        setTimeout(function () {
          return _this.RIGHT = false;
        }, 250);
        this.lightup4 = false;
        this.incorrect4 = !this.incorrect4;
      }
    }
  }, {
    key: 'renderFrame',
    value: function (_renderFrame) {
      function renderFrame() {
        return _renderFrame.apply(this, arguments);
      }

      renderFrame.toString = function () {
        return _renderFrame.toString();
      };

      return renderFrame;
    }(function () {
      var _this2 = this;

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
          this.ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
          this.ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          x += barWidth + 10;

          var count = 0;

          for (var _i = 0; _i < newArr[0].length; _i++) {
            if (newArr[0][_i] > 250) {
              count += 1;

              if (count >= 4 && this.lightup === false) {
                this.lightup = true;
                setTimeout(function () {
                  return _this2.lightup = false;
                }, 750);
                count = 0;
              }
            }
          }

          var count2 = 0;
          for (var _i2 = 0; _i2 < newArr[1].length; _i2++) {
            if (newArr[1][_i2] > 190) {
              count2 += 1;

              if (count2 >= 4 && this.lightup2 === false) {
                this.lightup2 = true;
                setTimeout(function () {
                  return _this2.lightup2 = false;
                }, 750);
                count2 = 0;
              }
            }
          }

          var count3 = 0;
          for (var _i3 = 0; _i3 < newArr[2].length; _i3++) {
            if (newArr[2][_i3] > 170) {
              count3 += 1;

              if (count3 >= 4 && this.lightup3 === false) {
                this.lightup3 = true;
                setTimeout(function () {
                  return _this2.lightup3 = false;
                }, 750);
                count3 = 0;
              }
            }
          }

          var count4 = 0;
          for (var _i4 = 0; _i4 < newArr[3].length; _i4++) {
            if (newArr[3][_i4] > 50) {
              count4 += 1;

              if (count4 >= 4 && this.lightup4 === false) {
                this.lightup4 = true;
                setTimeout(function () {
                  return _this2.lightup4 = false;
                }, 750);
                count4 = 0;
              }
            }
          }

          document.addEventListener("keydown", this.handlePress);

          // Rendering left arrow
          if (j === 0 && this.lightup) {
            this.leftArrow.drawColored();
          } else if (j === 0 && !this.lightup) {
            this.leftArrow.drawNormal();
          }

          if (j === 0 && this.LEFT && this.lightup) {
            this.leftArrow.drawPressed();
          }

          if (j === 0 && this.LEFT && !this.lightup) {
            this.leftArrow.drawIncorrect();
          }

          // Rendering down arrow
          if (j === 1 && this.lightup2) {
            this.downArrow.drawColored();
          } else if (j === 1 && !this.lightup2) {
            this.downArrow.drawNormal();
          }

          if (j === 1 && this.DOWN && this.lightup2) {
            this.downArrow.drawPressed();
          }

          if (j === 1 && this.DOWN && !this.lightup2) {
            this.downArrow.drawIncorrect();
          }

          // Rendering up arrow
          if (j === 2 && this.lightup3) {
            this.upArrow.drawColored();
          } else if (j === 2 && !this.lightup3) {
            this.upArrow.drawNormal();
          }

          if (j === 2 && this.UP && this.lightup3) {
            this.upArrow.drawPressed();
          }

          if (j === 2 && this.UP && !this.lightup3) {
            this.upArrow.drawIncorrect();
          }

          // Rendering right arrow
          if (j === 3 && this.lightup4) {
            this.rightArrow.drawColored();
          } else if (j === 3 && !this.lightup4) {
            this.rightArrow.drawNormal();
          }

          if (j === 3 && this.RIGHT && this.lightup4) {
            this.rightArrow.drawPressed();
          }

          if (j === 3 && this.RIGHT && !this.lightup4) {
            this.rightArrow.drawIncorrect();
          }
        }

        this.incorrect = true;
        this.incorrect2 = true;
        this.incorrect3 = true;
        this.incorrect4 = true;

        this.displayPoints(this.points);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb3duX2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sZWZ0X2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yaWdodF9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXBfYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnRybyIsIkludHJvIiwiZG9jdW1lbnQiLCJsb2FkSW5zdHJ1Y3Rpb25zIiwic3RhcnRHYW1lIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnN0cnVjdGlvbnMiLCJjbG9zZUluc3RydWN0aW9ucyIsImNvbnRhY3QiLCJjb250YWN0QnV0dG9uIiwiY2xvc2VDb250YWN0Iiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwiY2xpY2siLCJHYW1lIiwiRG93bkFycm93IiwiY3R4IiwicG9zIiwiY29sb3JlZERvd25BcnJvdyIsIkltYWdlIiwic3JjIiwicHJlc3NlZERvd25BcnJvdyIsImluY29ycmVjdERvd25BcnJvdyIsImRvd25BcnJvdyIsImRyYXdJbWFnZSIsImNhbnZhcyIsImRlbW8iLCJmaWxlIiwiYXVkaW8iLCJwbGF5Iiwib25jaGFuZ2UiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsIldJRFRIIiwiSEVJR0hUIiwiYmFyV2lkdGgiLCJ2aXN1YWxpemVyIiwiVmlzdWFsaXplciIsInJlbmRlckZyYW1lIiwiTGVmdEFycm93IiwiY29sb3JlZExlZnRBcnJvdyIsInByZXNzZWRMZWZ0QXJyb3ciLCJpbmNvcnJlY3RMZWZ0QXJyb3ciLCJsZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiY29sb3JlZFJpZ2h0QXJyb3ciLCJwcmVzc2VkUmlnaHRBcnJvdyIsImluY29ycmVjdFJpZ2h0QXJyb3ciLCJyaWdodEFycm93IiwiVXBBcnJvdyIsImNvbG9yZWRVcEFycm93IiwicHJlc3NlZFVwQXJyb3ciLCJpbmNvcnJlY3RVcEFycm93IiwidXBBcnJvdyIsImxpZ2h0dXAiLCJsaWdodHVwMiIsImxpZ2h0dXAzIiwibGlnaHR1cDQiLCJMRUZUIiwiRE9XTiIsIlVQIiwiUklHSFQiLCJsZWZ0UG9pbnRzIiwiZG93blBvaW50cyIsInVwUG9pbnRzIiwicmlnaHRQb2ludHMiLCJpbmNvcnJlY3QiLCJpbmNvcnJlY3QyIiwiaW5jb3JyZWN0MyIsImluY29ycmVjdDQiLCJwb2ludHMiLCJ0ZXh0IiwiYWxwaGEiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiZmlsbFN0eWxlIiwiZm9udCIsImZpbGxUZXh0IiwiY2xlYXJJbnRlcnZhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJzZXRUaW1lb3V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwieCIsImdldEJ5dGVGcmVxdWVuY3lEYXRhIiwiciIsImciLCJiIiwiYmFycyIsInF1YXJ0ZXJMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdCIsInNsaWNlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJuZXdBcnIiLCJqIiwic3ViQXJyIiwiaSIsImJhckhlaWdodCIsImZpbGxSZWN0IiwiY291bnQiLCJjb3VudDIiLCJjb3VudDMiLCJjb3VudDQiLCJoYW5kbGVQcmVzcyIsImRyYXdDb2xvcmVkIiwiZHJhd05vcm1hbCIsImRyYXdQcmVzc2VkIiwiZHJhd0luY29ycmVjdCIsImRpc3BsYXlQb2ludHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOzs7Ozs7OztBQUVBQSxPQUFPQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoRCxNQUFNQyxRQUFRLElBQUlDLEtBQUosQ0FBVUMsUUFBVixDQUFkO0FBQ0FGLFFBQU1HLGdCQUFOO0FBQ0FILFFBQU1JLFNBQU47QUFDRCxDQUpEOztJQU1NSCxLO0FBQ0osaUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLRyxrQkFB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QUliLE1BQU0sQ0FBTixJQUFXLEtBQUt6QyxRQUFwQixFQUE4QjtBQUM1QixpQkFBS1QsVUFBTCxDQUFnQjRELFdBQWhCO0FBQ0QsV0FGRCxNQUVPLElBQUlWLE1BQU0sQ0FBTixJQUFXLENBQUMsS0FBS3pDLFFBQXJCLEVBQStCO0FBQ3BDLGlCQUFLVCxVQUFMLENBQWdCNkQsVUFBaEI7QUFDRDs7QUFFRCxjQUFJWCxNQUFNLENBQU4sSUFBVyxLQUFLckMsS0FBaEIsSUFBeUIsS0FBS0osUUFBbEMsRUFBNEM7QUFDMUMsaUJBQUtULFVBQUwsQ0FBZ0I4RCxXQUFoQjtBQUNEOztBQUVELGNBQUlaLE1BQU0sQ0FBTixJQUFXLEtBQUtyQyxLQUFoQixJQUF5QixDQUFDLEtBQUtKLFFBQW5DLEVBQTZDO0FBQzNDLGlCQUFLVCxVQUFMLENBQWdCK0QsYUFBaEI7QUFDRDtBQUNGOztBQUVELGFBQUs3QyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLElBQWxCOztBQUVBLGFBQUsyQyxhQUFMLENBQW1CLEtBQUsxQyxNQUF4QjtBQUNEO0FBQ0YsSzs7Ozs7O2tCQUdZakMsVTs7Ozs7Ozs7Ozs7QUNsVGYsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgaW50cm8gPSBuZXcgSW50cm8oZG9jdW1lbnQpO1xuICBpbnRyby5sb2FkSW5zdHJ1Y3Rpb25zKCk7XG4gIGludHJvLnN0YXJ0R2FtZSgpO1xufSlcblxuY2xhc3MgSW50cm8ge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB0aGlzLmluc3RydWN0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbi1pbnN0cnVjdGlvbnNcIik7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc1wiKTtcbiAgICB0aGlzLmNsb3NlSW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1pbnN0cnVjdGlvbnNcIik7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcbiAgICB0aGlzLmNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW4tY29udGFjdFwiKTtcbiAgICB0aGlzLmNsb3NlQ29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtY29udGFjdFwiKTtcblxuICAgIHRoaXMuY2xvc2VJbnN0cnVjdGlvbnMub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgdGhpcy5jb250YWN0QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZUNvbnRhY3Qub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmluc3RydWN0aW9ucykge1xuICAgICAgICB0aGlzLmluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuY29udGFjdCkge1xuICAgICAgICB0aGlzLmNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWRJbnN0cnVjdGlvbnMoKSB7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gdGhpcy5pbnN0cnVjdGlvbnM7XG4gICAgLy8gZGVidWdnZXJcbiAgICB0aGlzLmluc3RydWN0aW9uc0J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZGVidWdnZXJcbiAgICAgIC8vIHRoaXMuaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBpbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgdGhpcy5pbnN0cnVjdGlvbnNCdXR0b24uY2xpY2soKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICByZXR1cm4gbmV3IEdhbWUoKTtcbiAgfVxufSIsImNsYXNzIERvd25BcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzM2NSwgMTBdO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5jb2xvcmVkRG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLnByZXNzZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMuaW5jb3JyZWN0RG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3REb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9kb3duX2Fycm93LnBuZ1wiXG5cbiAgICB0aGlzLmRvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9kb3duX2Fycm93LnBuZ1wiO1xuICB9XG5cbiAgZHJhd0NvbG9yZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY29sb3JlZERvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZERvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdJbmNvcnJlY3QoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5jb3JyZWN0RG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvd25BcnJvdzsiLCJpbXBvcnQgVmlzdWFsaXplciBmcm9tICcuL3Zpc3VhbGl6ZXInO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmRlbW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gICAgdGhpcy5maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlXCIpO1xuICAgIHRoaXMuYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuXG4gICAgZGVtby5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5hdWRpby5zcmMgPSBcInNyYy9hc3NldHMvQ3liZXJwdW5rLm1wM1wiO1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgZmlsZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcztcbiAgICAgIHRoaXMuYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSk7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGxldCBzcmMgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG4gICAgY29uc3QgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcblxuICAgIGNvbnN0IFdJRFRIID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDk7IFxuXG4gICAgY29uc3QgdmlzdWFsaXplciA9IG5ldyBWaXN1YWxpemVyKGFuYWx5c2VyLCBkYXRhQXJyYXksIGN0eClcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgdmlzdWFsaXplci5yZW5kZXJGcmFtZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiY2xhc3MgTGVmdEFycm93IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5wb3MgPSBbMTAsIDEwXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuY29sb3JlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY29sb3JlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5wcmVzc2VkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmVzc2VkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLmluY29ycmVjdExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW5jb3JyZWN0TGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfbGVmdF9hcnJvdy5wbmdcIlxuXG4gICAgdGhpcy5sZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmxlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvbGVmdF9hcnJvdy5wbmdcIjtcbiAgfVxuXG4gIGRyYXdDb2xvcmVkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvbG9yZWRMZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3Tm9ybWFsKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdQcmVzc2VkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByZXNzZWRMZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3SW5jb3JyZWN0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluY29ycmVjdExlZnRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWZ0QXJyb3c7IiwiY2xhc3MgUmlnaHRBcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzExMDAsIDEwXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuY29sb3JlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNvbG9yZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5wcmVzc2VkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJlc3NlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9yaWdodF9hcnJvdy5wbmdcIlxuXG4gICAgdGhpcy5yaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5yaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9yaWdodF9hcnJvdy5wbmdcIjtcbiAgfVxuXG4gIGRyYXdDb2xvcmVkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvbG9yZWRSaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd05vcm1hbCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZFJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3SW5jb3JyZWN0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRBcnJvdzsiLCJjbGFzcyBVcEFycm93IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5wb3MgPSBbNzI2LCAxMF07XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmNvbG9yZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMucHJlc3NlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5pbmNvcnJlY3RVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3RVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfdXBfYXJyb3cucG5nXCJcblxuICAgIHRoaXMudXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMudXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvdXBfYXJyb3cucG5nXCI7XG4gIH1cblxuICBkcmF3Q29sb3JlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb2xvcmVkVXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMudXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdQcmVzc2VkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByZXNzZWRVcEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd0luY29ycmVjdCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmNvcnJlY3RVcEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwQXJyb3c7IiwiaW1wb3J0IExlZnRBcnJvdyBmcm9tICcuL2xlZnRfYXJyb3cnO1xuaW1wb3J0IERvd25BcnJvdyBmcm9tICcuL2Rvd25fYXJyb3cnO1xuaW1wb3J0IFVwQXJyb3cgZnJvbSAnLi91cF9hcnJvdyc7XG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tICcuL3JpZ2h0X2Fycm93JztcblxuY2xhc3MgVmlzdWFsaXplciB7XG4gIGNvbnN0cnVjdG9yKGFuYWx5c2VyLCBkYXRhQXJyYXksIGN0eCkge1xuICAgIHRoaXMuYW5hbHlzZXIgPSBhbmFseXNlcjtcbiAgICB0aGlzLmRhdGFBcnJheSA9IGRhdGFBcnJheTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMubGVmdEFycm93ID0gbmV3IExlZnRBcnJvdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5kb3duQXJyb3cgPSBuZXcgRG93bkFycm93KHRoaXMuY3R4KTtcbiAgICB0aGlzLnVwQXJyb3cgPSBuZXcgVXBBcnJvdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5yaWdodEFycm93ID0gbmV3IFJpZ2h0QXJyb3codGhpcy5jdHgpO1xuXG4gICAgdGhpcy5saWdodHVwID0gZmFsc2U7XG4gICAgdGhpcy5saWdodHVwMiA9IGZhbHNlO1xuICAgIHRoaXMubGlnaHR1cDMgPSBmYWxzZTtcbiAgICB0aGlzLmxpZ2h0dXA0ID0gZmFsc2U7XG5cbiAgICB0aGlzLkxFRlQgPSBmYWxzZTtcbiAgICB0aGlzLkRPV04gPSBmYWxzZTtcbiAgICB0aGlzLlVQID0gZmFsc2U7XG4gICAgdGhpcy5SSUdIVCA9IGZhbHNlO1xuXG4gICAgdGhpcy5sZWZ0UG9pbnRzID0gMDtcbiAgICB0aGlzLmRvd25Qb2ludHMgPSAwO1xuICAgIHRoaXMudXBQb2ludHMgPSAwO1xuICAgIHRoaXMucmlnaHRQb2ludHMgPSAwO1xuXG4gICAgdGhpcy5pbmNvcnJlY3QgPSB0cnVlO1xuICAgIHRoaXMuaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgdGhpcy5pbmNvcnJlY3QzID0gdHJ1ZTtcbiAgICB0aGlzLmluY29ycmVjdDQgPSB0cnVlO1xuXG4gICAgdGhpcy5wb2ludHMgPSAwO1xuICB9XG5cbiAgZGlzcGxheVBvaW50cyh0ZXh0KSB7XG4gICAgbGV0IGFscGhhID0gMS4wLCAgIFxuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDsgXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAwLCAxNDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMjVwdCBBcmlhbFwiO1xuICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgNjAwLCA1MCk7XG4gICAgICAgIGFscGhhID0gYWxwaGEgLSAwLjA1OyBcbiAgICAgICAgaWYgKGFscGhhIDwgMCkge1xuICAgICAgICAgIGN0eC53aWR0aCA9IGN0eC53aWR0aDtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgfSwgNTApO1xuICB9IFxuXG4gIGhhbmRsZVByZXNzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiB0aGlzLmxpZ2h0dXAgJiYgdGhpcy5pbmNvcnJlY3QpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLkxFRlQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLkxFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdCA9ICF0aGlzLmluY29ycmVjdDtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiAhdGhpcy5saWdodHVwICYmIHRoaXMuaW5jb3JyZWN0KSB7XG4gICAgICB0aGlzLnBvaW50cyAtPSAxO1xuICAgICAgdGhpcy5MRUZUID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5MRUZUID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMuaW5jb3JyZWN0ID0gIXRoaXMuaW5jb3JyZWN0O1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDQwICYmIHRoaXMubGlnaHR1cDIgJiYgdGhpcy5pbmNvcnJlY3QyKSB7XG4gICAgICB0aGlzLnBvaW50cyArPSAxO1xuICAgICAgdGhpcy5ET1dOID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ET1dOID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MiA9ICF0aGlzLmluY29ycmVjdDI7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgIXRoaXMubGlnaHR1cDIgJiYgdGhpcy5pbmNvcnJlY3QyKSB7XG4gICAgICB0aGlzLnBvaW50cyAtPSAxO1xuICAgICAgdGhpcy5ET1dOID0gdHJ1ZTsgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuRE9XTiA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDIgPSAhdGhpcy5pbmNvcnJlY3QyO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmIHRoaXMubGlnaHR1cDMgJiYgdGhpcy5pbmNvcnJlY3QzKSB7XG4gICAgICB0aGlzLnBvaW50cyArPSAxO1xuICAgICAgdGhpcy5VUCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuVVAgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwMyA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3QzID0gIXRoaXMuaW5jb3JyZWN0MztcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCAmJiAhdGhpcy5saWdodHVwMyAmJiB0aGlzLmluY29ycmVjdDMpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLlVQID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5VUCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDMgPSAhdGhpcy5pbmNvcnJlY3QzO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM5ICYmIHRoaXMubGlnaHR1cDQgJiYgdGhpcy5pbmNvcnJlY3Q0KSB7XG4gICAgICB0aGlzLnBvaW50cyArPSAxO1xuICAgICAgdGhpcy5SSUdIVCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuUklHSFQgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwNCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3Q0ID0gIXRoaXMuaW5jb3JyZWN0NDtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiAhdGhpcy5saWdodHVwNCAmJiB0aGlzLmluY29ycmVjdDQpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLlJJR0hUID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5SSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDQgPSAhdGhpcy5pbmNvcnJlY3Q0O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZyYW1lKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJGcmFtZSk7XG4gICAgbGV0IHggPSAwO1xuXG4gICAgdGhpcy5hbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YSh0aGlzLmRhdGFBcnJheSk7XG4gICAgbGV0IHIsIGcsIGI7XG4gICAgbGV0IGJhcnMgPSA0MDtcblxuICAgIGxldCBxdWFydGVyTGVuZ3RoID0gdGhpcy5kYXRhQXJyYXkubGVuZ3RoIC8gNDtcblxuICAgIGxldCBmaXJzdCA9IHRoaXMuZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgIGxldCBzZWNvbmQgPSB0aGlzLmRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoLCBxdWFydGVyTGVuZ3RoICogMik7XG4gICAgbGV0IHRoaXJkID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDIsIHF1YXJ0ZXJMZW5ndGggKiAzKTtcbiAgICBsZXQgZm91cnRoID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDMsIHF1YXJ0ZXJMZW5ndGggKiA0KTtcbiAgICBcbiAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgXG4gICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpOyBcbiAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IFxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMFxuICAgICAgICAgIGIgPSAxOTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyBcbiAgICAgICAgICByID0gNzFcbiAgICAgICAgICBnID0gNFxuICAgICAgICAgIGIgPSA3MFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7IFxuICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA8IDE5MCkgeyBcbiAgICAgICAgICByID0gMlxuICAgICAgICAgIGcgPSA2NFxuICAgICAgICAgIGIgPSA3OVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7IFxuICAgICAgICAgIHIgPSAyMjNcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDQyXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxNzApIHsgXG4gICAgICAgICAgciA9IDRcbiAgICAgICAgICBnID0gNzFcbiAgICAgICAgICBiID0gOVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gNTApIHsgXG4gICAgICAgICAgciA9IDI1NVxuICAgICAgICAgIGcgPSAxNjRcbiAgICAgICAgICBiID0gMFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldIDwgNTApIHsgXG4gICAgICAgICAgciA9IDcxXG4gICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgYiA9IDRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgsIChIRUlHSFQgLSBiYXJIZWlnaHQpLCBiYXJXaWR0aCwgYmFySGVpZ2h0KTtcblxuICAgICAgICB4ICs9IGJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbMF1baV0gPiAyNTApIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA+PSA0ICYmIHRoaXMubGlnaHR1cCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXAgPSBmYWxzZSwgNzUwKTtcbiAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudDIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclsxXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbMV1baV0gPiAxOTApIHtcbiAgICAgICAgICAgIGNvdW50MiArPSAxO1xuXG4gICAgICAgICAgICBpZiAoY291bnQyID49IDQgJiYgdGhpcy5saWdodHVwMiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwMiA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saWdodHVwMiA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgIGNvdW50MiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgY291bnQzID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3QXJyWzJdW2ldID4gMTcwKSB7XG4gICAgICAgICAgICBjb3VudDMgKz0gMTtcblxuICAgICAgICAgICAgaWYgKGNvdW50MyA+PSA0ICYmIHRoaXMubGlnaHR1cDMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlnaHR1cDMgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubGlnaHR1cDMgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICBjb3VudDMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudDQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclszXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbM11baV0gPiA1MCkge1xuICAgICAgICAgICAgY291bnQ0ICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudDQgPj0gNCAmJiB0aGlzLmxpZ2h0dXA0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aGlzLmxpZ2h0dXA0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXA0ID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgY291bnQ0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZVByZXNzKTtcblxuICAgICAgICAvLyBSZW5kZXJpbmcgbGVmdCBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMCAmJiB0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgIXRoaXMubGlnaHR1cCkge1xuICAgICAgICAgIHRoaXMubGVmdEFycm93LmRyYXdOb3JtYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAwICYmIHRoaXMuTEVGVCAmJiB0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3UHJlc3NlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDAgJiYgdGhpcy5MRUZUICYmICF0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFJlbmRlcmluZyBkb3duIGFycm93XG4gICAgICAgIGlmIChqID09PSAxICYmIHRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgIXRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLkRPV04gJiYgdGhpcy5saWdodHVwMikge1xuICAgICAgICAgIHRoaXMuZG93bkFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLkRPV04gJiYgIXRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXJpbmcgdXAgYXJyb3dcbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5saWdodHVwMykge1xuICAgICAgICAgIHRoaXMudXBBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgIXRoaXMubGlnaHR1cDMpIHtcbiAgICAgICAgICB0aGlzLnVwQXJyb3cuZHJhd05vcm1hbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5VUCAmJiB0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMiAmJiB0aGlzLlVQICYmICF0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdJbmNvcnJlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlcmluZyByaWdodCBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLmxpZ2h0dXA0KSB7XG4gICAgICAgICAgdGhpcy5yaWdodEFycm93LmRyYXdDb2xvcmVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiAhdGhpcy5saWdodHVwNCkge1xuICAgICAgICAgIHRoaXMucmlnaHRBcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLlJJR0hUICYmIHRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd1ByZXNzZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAzICYmIHRoaXMuUklHSFQgJiYgIXRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd0luY29ycmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgICB0aGlzLmluY29ycmVjdDMgPSB0cnVlO1xuICAgICAgdGhpcy5pbmNvcnJlY3Q0ID0gdHJ1ZTtcblxuICAgICAgdGhpcy5kaXNwbGF5UG9pbnRzKHRoaXMucG9pbnRzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsaXplcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9