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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb3duX2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sZWZ0X2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yaWdodF9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXBfYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnRybyIsIkludHJvIiwiZG9jdW1lbnQiLCJsb2FkSW5zdHJ1Y3Rpb25zIiwic3RhcnRHYW1lIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnN0cnVjdGlvbnMiLCJjbG9zZUluc3RydWN0aW9ucyIsImNvbnRhY3QiLCJjb250YWN0QnV0dG9uIiwiY2xvc2VDb250YWN0Iiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwiY2xpY2siLCJHYW1lIiwiRG93bkFycm93IiwiY3R4IiwicG9zIiwiY29sb3JlZERvd25BcnJvdyIsIkltYWdlIiwic3JjIiwicHJlc3NlZERvd25BcnJvdyIsImluY29ycmVjdERvd25BcnJvdyIsImRvd25BcnJvdyIsImRyYXdJbWFnZSIsImNhbnZhcyIsImRlbW8iLCJmaWxlIiwiYXVkaW8iLCJwbGF5Iiwib25jaGFuZ2UiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsIldJRFRIIiwiSEVJR0hUIiwiYmFyV2lkdGgiLCJ2aXN1YWxpemVyIiwiVmlzdWFsaXplciIsInJlbmRlckZyYW1lIiwiTGVmdEFycm93IiwiY29sb3JlZExlZnRBcnJvdyIsInByZXNzZWRMZWZ0QXJyb3ciLCJpbmNvcnJlY3RMZWZ0QXJyb3ciLCJsZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiY29sb3JlZFJpZ2h0QXJyb3ciLCJwcmVzc2VkUmlnaHRBcnJvdyIsImluY29ycmVjdFJpZ2h0QXJyb3ciLCJyaWdodEFycm93IiwiVXBBcnJvdyIsImNvbG9yZWRVcEFycm93IiwicHJlc3NlZFVwQXJyb3ciLCJpbmNvcnJlY3RVcEFycm93IiwidXBBcnJvdyIsImxpZ2h0dXAiLCJsaWdodHVwMiIsImxpZ2h0dXAzIiwibGlnaHR1cDQiLCJMRUZUIiwiRE9XTiIsIlVQIiwiUklHSFQiLCJsZWZ0UG9pbnRzIiwiZG93blBvaW50cyIsInVwUG9pbnRzIiwicmlnaHRQb2ludHMiLCJpbmNvcnJlY3QiLCJpbmNvcnJlY3QyIiwiaW5jb3JyZWN0MyIsImluY29ycmVjdDQiLCJwb2ludHMiLCJ0ZXh0IiwiYWxwaGEiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiZmlsbFN0eWxlIiwiZm9udCIsImZpbGxUZXh0IiwiY2xlYXJJbnRlcnZhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJzZXRUaW1lb3V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwieCIsImdldEJ5dGVGcmVxdWVuY3lEYXRhIiwiciIsImciLCJiIiwiYmFycyIsInF1YXJ0ZXJMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdCIsInNsaWNlIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJuZXdBcnIiLCJqIiwic3ViQXJyIiwiaSIsImJhckhlaWdodCIsImZpbGxSZWN0IiwiY291bnQiLCJjb3VudDIiLCJjb3VudDMiLCJjb3VudDQiLCJoYW5kbGVQcmVzcyIsImRyYXdDb2xvcmVkIiwiZHJhd05vcm1hbCIsImRyYXdQcmVzc2VkIiwiZHJhd0luY29ycmVjdCIsImRpc3BsYXlQb2ludHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOzs7Ozs7OztBQUVBQSxPQUFPQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoRCxNQUFNQyxRQUFRLElBQUlDLEtBQUosQ0FBVUMsUUFBVixDQUFkO0FBQ0FGLFFBQU1HLGdCQUFOO0FBQ0FILFFBQU1JLFNBQU47QUFDRCxDQUpEOztJQU1NSCxLO0FBQ0osaUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLRyxrQkFB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TUFBTSxDQUFOLElBQVcsS0FBS3pDLFFBQXBCLEVBQThCO0FBQzVCLGlCQUFLVCxVQUFMLENBQWdCNEQsV0FBaEI7QUFDRCxXQUZELE1BRU8sSUFBSVYsTUFBTSxDQUFOLElBQVcsQ0FBQyxLQUFLekMsUUFBckIsRUFBK0I7QUFDcEMsaUJBQUtULFVBQUwsQ0FBZ0I2RCxVQUFoQjtBQUNEOztBQUVELGNBQUlYLE1BQU0sQ0FBTixJQUFXLEtBQUtyQyxLQUFoQixJQUF5QixLQUFLSixRQUFsQyxFQUE0QztBQUMxQyxpQkFBS1QsVUFBTCxDQUFnQjhELFdBQWhCO0FBQ0Q7O0FBRUQsY0FBSVosTUFBTSxDQUFOLElBQVcsS0FBS3JDLEtBQWhCLElBQXlCLENBQUMsS0FBS0osUUFBbkMsRUFBNkM7QUFDM0MsaUJBQUtULFVBQUwsQ0FBZ0IrRCxhQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBSzdDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsSUFBbEI7O0FBRUEsYUFBSzJDLGFBQUwsQ0FBbUIsS0FBSzFDLE1BQXhCO0FBQ0Q7QUFDRixLOzs7Ozs7a0JBR1lqQyxVOzs7Ozs7Ozs7OztBQ2xUZix1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBpbnRybyA9IG5ldyBJbnRybyhkb2N1bWVudCk7XG4gIGludHJvLmxvYWRJbnN0cnVjdGlvbnMoKTtcbiAgaW50cm8uc3RhcnRHYW1lKCk7XG59KVxuXG5jbGFzcyBJbnRybyB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLWluc3RydWN0aW9uc1wiKTtcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdHJ1Y3Rpb25zXCIpO1xuICAgIHRoaXMuY2xvc2VJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWluc3RydWN0aW9uc1wiKTtcbiAgICB0aGlzLmNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG4gICAgdGhpcy5jb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLWNvbnRhY3RcIik7XG4gICAgdGhpcy5jbG9zZUNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWNvbnRhY3RcIik7XG5cbiAgICB0aGlzLmNsb3NlSW5zdHJ1Y3Rpb25zLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHRoaXMuY29udGFjdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZUNvbnRhY3Qub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5jb250YWN0KSB7XG4gICAgICAgIHRoaXMuY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZEluc3RydWN0aW9ucygpIHtcbiAgICB0aGlzLmluc3RydWN0aW9uc0J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5pbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgdGhpcy5pbnN0cnVjdGlvbnNCdXR0b24uY2xpY2soKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICByZXR1cm4gbmV3IEdhbWUoKTtcbiAgfVxufSIsImNsYXNzIERvd25BcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzM2NSwgMTBdO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5jb2xvcmVkRG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLnByZXNzZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMuaW5jb3JyZWN0RG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3REb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9kb3duX2Fycm93LnBuZ1wiXG5cbiAgICB0aGlzLmRvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9kb3duX2Fycm93LnBuZ1wiO1xuICB9XG5cbiAgZHJhd0NvbG9yZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY29sb3JlZERvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZERvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdJbmNvcnJlY3QoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5jb3JyZWN0RG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvd25BcnJvdzsiLCJpbXBvcnQgVmlzdWFsaXplciBmcm9tICcuL3Zpc3VhbGl6ZXInO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmRlbW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gICAgdGhpcy5maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlXCIpO1xuICAgIHRoaXMuYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuXG4gICAgZGVtby5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5hdWRpby5zcmMgPSBcInNyYy9hc3NldHMvQ3liZXJwdW5rLm1wM1wiO1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgZmlsZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcztcbiAgICAgIHRoaXMuYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSk7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGxldCBzcmMgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG4gICAgY29uc3QgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcblxuICAgIGNvbnN0IFdJRFRIID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDk7IFxuXG4gICAgY29uc3QgdmlzdWFsaXplciA9IG5ldyBWaXN1YWxpemVyKGFuYWx5c2VyLCBkYXRhQXJyYXksIGN0eClcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgdmlzdWFsaXplci5yZW5kZXJGcmFtZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiY2xhc3MgTGVmdEFycm93IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5wb3MgPSBbMTAsIDEwXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuY29sb3JlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY29sb3JlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5wcmVzc2VkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmVzc2VkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLmluY29ycmVjdExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW5jb3JyZWN0TGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfbGVmdF9hcnJvdy5wbmdcIlxuXG4gICAgdGhpcy5sZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmxlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvbGVmdF9hcnJvdy5wbmdcIjtcbiAgfVxuXG4gIGRyYXdDb2xvcmVkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvbG9yZWRMZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3Tm9ybWFsKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdQcmVzc2VkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByZXNzZWRMZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3SW5jb3JyZWN0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluY29ycmVjdExlZnRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWZ0QXJyb3c7IiwiY2xhc3MgUmlnaHRBcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzExMDAsIDEwXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuY29sb3JlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNvbG9yZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5wcmVzc2VkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJlc3NlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9yaWdodF9hcnJvdy5wbmdcIlxuXG4gICAgdGhpcy5yaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5yaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9yaWdodF9hcnJvdy5wbmdcIjtcbiAgfVxuXG4gIGRyYXdDb2xvcmVkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvbG9yZWRSaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd05vcm1hbCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZFJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3SW5jb3JyZWN0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRBcnJvdzsiLCJjbGFzcyBVcEFycm93IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5wb3MgPSBbNzI2LCAxMF07XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmNvbG9yZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMucHJlc3NlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5pbmNvcnJlY3RVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3RVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfdXBfYXJyb3cucG5nXCJcblxuICAgIHRoaXMudXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMudXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvdXBfYXJyb3cucG5nXCI7XG4gIH1cblxuICBkcmF3Q29sb3JlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb2xvcmVkVXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMudXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdQcmVzc2VkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByZXNzZWRVcEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd0luY29ycmVjdCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmNvcnJlY3RVcEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwQXJyb3c7IiwiaW1wb3J0IExlZnRBcnJvdyBmcm9tICcuL2xlZnRfYXJyb3cnO1xuaW1wb3J0IERvd25BcnJvdyBmcm9tICcuL2Rvd25fYXJyb3cnO1xuaW1wb3J0IFVwQXJyb3cgZnJvbSAnLi91cF9hcnJvdyc7XG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tICcuL3JpZ2h0X2Fycm93JztcblxuY2xhc3MgVmlzdWFsaXplciB7XG4gIGNvbnN0cnVjdG9yKGFuYWx5c2VyLCBkYXRhQXJyYXksIGN0eCkge1xuICAgIHRoaXMuYW5hbHlzZXIgPSBhbmFseXNlcjtcbiAgICB0aGlzLmRhdGFBcnJheSA9IGRhdGFBcnJheTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMubGVmdEFycm93ID0gbmV3IExlZnRBcnJvdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5kb3duQXJyb3cgPSBuZXcgRG93bkFycm93KHRoaXMuY3R4KTtcbiAgICB0aGlzLnVwQXJyb3cgPSBuZXcgVXBBcnJvdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5yaWdodEFycm93ID0gbmV3IFJpZ2h0QXJyb3codGhpcy5jdHgpO1xuXG4gICAgdGhpcy5saWdodHVwID0gZmFsc2U7XG4gICAgdGhpcy5saWdodHVwMiA9IGZhbHNlO1xuICAgIHRoaXMubGlnaHR1cDMgPSBmYWxzZTtcbiAgICB0aGlzLmxpZ2h0dXA0ID0gZmFsc2U7XG5cbiAgICB0aGlzLkxFRlQgPSBmYWxzZTtcbiAgICB0aGlzLkRPV04gPSBmYWxzZTtcbiAgICB0aGlzLlVQID0gZmFsc2U7XG4gICAgdGhpcy5SSUdIVCA9IGZhbHNlO1xuXG4gICAgdGhpcy5sZWZ0UG9pbnRzID0gMDtcbiAgICB0aGlzLmRvd25Qb2ludHMgPSAwO1xuICAgIHRoaXMudXBQb2ludHMgPSAwO1xuICAgIHRoaXMucmlnaHRQb2ludHMgPSAwO1xuXG4gICAgdGhpcy5pbmNvcnJlY3QgPSB0cnVlO1xuICAgIHRoaXMuaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgdGhpcy5pbmNvcnJlY3QzID0gdHJ1ZTtcbiAgICB0aGlzLmluY29ycmVjdDQgPSB0cnVlO1xuXG4gICAgdGhpcy5wb2ludHMgPSAwO1xuICB9XG5cbiAgZGlzcGxheVBvaW50cyh0ZXh0KSB7XG4gICAgbGV0IGFscGhhID0gMS4wLCAgIFxuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDsgXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAwLCAxNDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMjVwdCBBcmlhbFwiO1xuICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgNjAwLCA1MCk7XG4gICAgICAgIGFscGhhID0gYWxwaGEgLSAwLjA1OyBcbiAgICAgICAgaWYgKGFscGhhIDwgMCkge1xuICAgICAgICAgIGN0eC53aWR0aCA9IGN0eC53aWR0aDtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgfSwgNTApO1xuICB9IFxuXG4gIGhhbmRsZVByZXNzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiB0aGlzLmxpZ2h0dXAgJiYgdGhpcy5pbmNvcnJlY3QpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLkxFRlQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLkxFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdCA9ICF0aGlzLmluY29ycmVjdDtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiAhdGhpcy5saWdodHVwICYmIHRoaXMuaW5jb3JyZWN0KSB7XG4gICAgICB0aGlzLnBvaW50cyAtPSAxO1xuICAgICAgdGhpcy5MRUZUID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5MRUZUID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMuaW5jb3JyZWN0ID0gIXRoaXMuaW5jb3JyZWN0O1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDQwICYmIHRoaXMubGlnaHR1cDIgJiYgdGhpcy5pbmNvcnJlY3QyKSB7XG4gICAgICB0aGlzLnBvaW50cyArPSAxO1xuICAgICAgdGhpcy5ET1dOID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ET1dOID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MiA9ICF0aGlzLmluY29ycmVjdDI7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgIXRoaXMubGlnaHR1cDIgJiYgdGhpcy5pbmNvcnJlY3QyKSB7XG4gICAgICB0aGlzLnBvaW50cyAtPSAxO1xuICAgICAgdGhpcy5ET1dOID0gdHJ1ZTsgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuRE9XTiA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDIgPSAhdGhpcy5pbmNvcnJlY3QyO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmIHRoaXMubGlnaHR1cDMgJiYgdGhpcy5pbmNvcnJlY3QzKSB7XG4gICAgICB0aGlzLnBvaW50cyArPSAxO1xuICAgICAgdGhpcy5VUCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuVVAgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwMyA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3QzID0gIXRoaXMuaW5jb3JyZWN0MztcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCAmJiAhdGhpcy5saWdodHVwMyAmJiB0aGlzLmluY29ycmVjdDMpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLlVQID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5VUCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDMgPSAhdGhpcy5pbmNvcnJlY3QzO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM5ICYmIHRoaXMubGlnaHR1cDQgJiYgdGhpcy5pbmNvcnJlY3Q0KSB7XG4gICAgICB0aGlzLnBvaW50cyArPSAxO1xuICAgICAgdGhpcy5SSUdIVCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuUklHSFQgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwNCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3Q0ID0gIXRoaXMuaW5jb3JyZWN0NDtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiAhdGhpcy5saWdodHVwNCAmJiB0aGlzLmluY29ycmVjdDQpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLlJJR0hUID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5SSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDQgPSAhdGhpcy5pbmNvcnJlY3Q0O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZyYW1lKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJGcmFtZSk7XG4gICAgbGV0IHggPSAwO1xuXG4gICAgdGhpcy5hbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YSh0aGlzLmRhdGFBcnJheSk7XG4gICAgbGV0IHIsIGcsIGI7XG4gICAgbGV0IGJhcnMgPSA0MDtcblxuICAgIGxldCBxdWFydGVyTGVuZ3RoID0gdGhpcy5kYXRhQXJyYXkubGVuZ3RoIC8gNDtcblxuICAgIGxldCBmaXJzdCA9IHRoaXMuZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgIGxldCBzZWNvbmQgPSB0aGlzLmRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoLCBxdWFydGVyTGVuZ3RoICogMik7XG4gICAgbGV0IHRoaXJkID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDIsIHF1YXJ0ZXJMZW5ndGggKiAzKTtcbiAgICBsZXQgZm91cnRoID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDMsIHF1YXJ0ZXJMZW5ndGggKiA0KTtcbiAgICBcbiAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgXG4gICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpOyBcbiAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IFxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMFxuICAgICAgICAgIGIgPSAxOTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyBcbiAgICAgICAgICByID0gNzFcbiAgICAgICAgICBnID0gNFxuICAgICAgICAgIGIgPSA3MFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7IFxuICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA8IDE5MCkgeyBcbiAgICAgICAgICByID0gMlxuICAgICAgICAgIGcgPSA2NFxuICAgICAgICAgIGIgPSA3OVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7IFxuICAgICAgICAgIHIgPSAyMjNcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDQyXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxNzApIHsgXG4gICAgICAgICAgciA9IDRcbiAgICAgICAgICBnID0gNzFcbiAgICAgICAgICBiID0gOVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gNTApIHsgXG4gICAgICAgICAgciA9IDI1NVxuICAgICAgICAgIGcgPSAxNjRcbiAgICAgICAgICBiID0gMFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldIDwgNTApIHsgXG4gICAgICAgICAgciA9IDcxXG4gICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgYiA9IDRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgsIChIRUlHSFQgLSBiYXJIZWlnaHQpLCBiYXJXaWR0aCwgYmFySGVpZ2h0KTtcblxuICAgICAgICB4ICs9IGJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbMF1baV0gPiAyNTApIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA+PSA0ICYmIHRoaXMubGlnaHR1cCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXAgPSBmYWxzZSwgNzUwKTtcbiAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudDIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclsxXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbMV1baV0gPiAxOTApIHtcbiAgICAgICAgICAgIGNvdW50MiArPSAxO1xuXG4gICAgICAgICAgICBpZiAoY291bnQyID49IDQgJiYgdGhpcy5saWdodHVwMiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwMiA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saWdodHVwMiA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgIGNvdW50MiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgY291bnQzID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3QXJyWzJdW2ldID4gMTcwKSB7XG4gICAgICAgICAgICBjb3VudDMgKz0gMTtcblxuICAgICAgICAgICAgaWYgKGNvdW50MyA+PSA0ICYmIHRoaXMubGlnaHR1cDMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlnaHR1cDMgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubGlnaHR1cDMgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICBjb3VudDMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudDQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclszXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbM11baV0gPiA1MCkge1xuICAgICAgICAgICAgY291bnQ0ICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudDQgPj0gNCAmJiB0aGlzLmxpZ2h0dXA0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aGlzLmxpZ2h0dXA0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXA0ID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgY291bnQ0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZVByZXNzKTtcblxuICAgICAgICAvLyBSZW5kZXJpbmcgbGVmdCBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMCAmJiB0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgIXRoaXMubGlnaHR1cCkge1xuICAgICAgICAgIHRoaXMubGVmdEFycm93LmRyYXdOb3JtYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAwICYmIHRoaXMuTEVGVCAmJiB0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3UHJlc3NlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDAgJiYgdGhpcy5MRUZUICYmICF0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFJlbmRlcmluZyBkb3duIGFycm93XG4gICAgICAgIGlmIChqID09PSAxICYmIHRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgIXRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLkRPV04gJiYgdGhpcy5saWdodHVwMikge1xuICAgICAgICAgIHRoaXMuZG93bkFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLkRPV04gJiYgIXRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXJpbmcgdXAgYXJyb3dcbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5saWdodHVwMykge1xuICAgICAgICAgIHRoaXMudXBBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgIXRoaXMubGlnaHR1cDMpIHtcbiAgICAgICAgICB0aGlzLnVwQXJyb3cuZHJhd05vcm1hbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5VUCAmJiB0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMiAmJiB0aGlzLlVQICYmICF0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdJbmNvcnJlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlcmluZyByaWdodCBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLmxpZ2h0dXA0KSB7XG4gICAgICAgICAgdGhpcy5yaWdodEFycm93LmRyYXdDb2xvcmVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiAhdGhpcy5saWdodHVwNCkge1xuICAgICAgICAgIHRoaXMucmlnaHRBcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLlJJR0hUICYmIHRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd1ByZXNzZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAzICYmIHRoaXMuUklHSFQgJiYgIXRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd0luY29ycmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgICB0aGlzLmluY29ycmVjdDMgPSB0cnVlO1xuICAgICAgdGhpcy5pbmNvcnJlY3Q0ID0gdHJ1ZTtcblxuICAgICAgdGhpcy5kaXNwbGF5UG9pbnRzKHRoaXMucG9pbnRzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsaXplcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9