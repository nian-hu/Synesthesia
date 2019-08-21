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
    var _this = this;

    _classCallCheck(this, Game);

    this.canvas = document.getElementById("canvas");
    this.demo = document.getElementById("demo");
    this.file = document.getElementById("file");
    this.audio = document.getElementById("audio");

    demo.onclick = function () {
      _this.audio.src = "src/assets/Cyberpunk.mp3";
      _this.play();
    };

    file.onchange = function () {
      var files = _this.files;
      _this.audio.src = URL.createObjectURL(files[0]);
      _this.play();
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

      var visualizer = new _visualizer2.default(analyser, dataArray, this.canvas);
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
  function Visualizer(analyser, dataArray, canvas) {
    _classCallCheck(this, Visualizer);

    this.analyser = analyser;
    this.dataArray = dataArray;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.WIDTH = this.canvas.width;
    this.HEIGHT = this.canvas.height;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.barWidth = this.WIDTH / this.bufferLength * 9;

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
    this.renderFrame = this.renderFrame.bind(this);
  }

  _createClass(Visualizer, [{
    key: 'displayPoints',
    value: function displayPoints(text) {
      var _this = this;

      var alpha = 1.0,
          interval = setInterval(function () {
        _this.canvas.width = canvas.width;
        _this.ctx.fillStyle = "rgba(255, 0, 140, " + alpha + ")";
        _this.ctx.font = "bold 25pt Arial";
        _this.ctx.fillText(text, 600, 50);
        alpha = alpha - 0.05;
        if (alpha < 0) {
          _this.ctx.width = _this.ctx.width;
          clearInterval(interval);
        }
      }, 50);
    }
  }, {
    key: 'handlePress',
    value: function handlePress(e) {
      var _this2 = this;

      e.preventDefault();

      if (e.keyCode === 37 && this.lightup && this.incorrect) {
        this.points += 1;
        this.LEFT = true;
        setTimeout(function () {
          return _this2.LEFT = false;
        }, 250);
        this.lightup = false;
        this.incorrect = !this.incorrect;
      }

      if (e.keyCode === 37 && !this.lightup && this.incorrect) {
        this.points -= 1;
        this.LEFT = true;
        setTimeout(function () {
          return _this2.LEFT = false;
        }, 250);
        this.incorrect = !this.incorrect;
      }

      if (e.keyCode === 40 && this.lightup2 && this.incorrect2) {
        this.points += 1;
        this.DOWN = true;
        setTimeout(function () {
          return _this2.DOWN = false;
        }, 250);
        this.lightup2 = false;
        this.incorrect2 = !this.incorrect2;
      }

      if (e.keyCode === 40 && !this.lightup2 && this.incorrect2) {
        this.points -= 1;
        this.DOWN = true;
        setTimeout(function () {
          return _this2.DOWN = false;
        }, 250);
        this.lightup2 = false;
        this.incorrect2 = !this.incorrect2;
      }

      if (e.keyCode === 38 && this.lightup3 && this.incorrect3) {
        this.points += 1;
        this.UP = true;
        setTimeout(function () {
          return _this2.UP = false;
        }, 250);
        this.lightup3 = false;
        this.incorrect3 = !this.incorrect3;
      }

      if (e.keyCode === 38 && !this.lightup3 && this.incorrect3) {
        this.points -= 1;
        this.UP = true;
        setTimeout(function () {
          return _this2.UP = false;
        }, 250);
        this.lightup3 = false;
        this.incorrect3 = !this.incorrect3;
      }

      if (e.keyCode === 39 && this.lightup4 && this.incorrect4) {
        this.points += 1;
        this.RIGHT = true;
        setTimeout(function () {
          return _this2.RIGHT = false;
        }, 250);
        this.lightup4 = false;
        this.incorrect4 = !this.incorrect4;
      }

      if (e.keyCode === 39 && !this.lightup4 && this.incorrect4) {
        this.points -= 1;
        this.RIGHT = true;
        setTimeout(function () {
          return _this2.RIGHT = false;
        }, 250);
        this.lightup4 = false;
        this.incorrect4 = !this.incorrect4;
      }
    }
  }, {
    key: 'renderFrame',
    value: function renderFrame() {
      var _this3 = this;

      requestAnimationFrame(this.renderFrame);
      var barHeight = void 0;
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
          this.ctx.fillRect(x, this.HEIGHT - barHeight, this.barWidth, barHeight);

          x += this.barWidth + 10;

          var count = 0;

          for (var _i = 0; _i < newArr[0].length; _i++) {
            if (newArr[0][_i] > 250) {
              count += 1;

              if (count >= 4 && this.lightup === false) {
                this.lightup = true;
                setTimeout(function () {
                  return _this3.lightup = false;
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
                  return _this3.lightup2 = false;
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
                  return _this3.lightup3 = false;
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
                  return _this3.lightup4 = false;
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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb3duX2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sZWZ0X2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yaWdodF9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXBfYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnRybyIsIkludHJvIiwiZG9jdW1lbnQiLCJsb2FkSW5zdHJ1Y3Rpb25zIiwic3RhcnRHYW1lIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnN0cnVjdGlvbnMiLCJjbG9zZUluc3RydWN0aW9ucyIsImNvbnRhY3QiLCJjb250YWN0QnV0dG9uIiwiY2xvc2VDb250YWN0Iiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwiY2xpY2siLCJHYW1lIiwiRG93bkFycm93IiwiY3R4IiwicG9zIiwiY29sb3JlZERvd25BcnJvdyIsIkltYWdlIiwic3JjIiwicHJlc3NlZERvd25BcnJvdyIsImluY29ycmVjdERvd25BcnJvdyIsImRvd25BcnJvdyIsImRyYXdJbWFnZSIsImNhbnZhcyIsImRlbW8iLCJmaWxlIiwiYXVkaW8iLCJwbGF5Iiwib25jaGFuZ2UiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsIldJRFRIIiwiSEVJR0hUIiwiYmFyV2lkdGgiLCJ2aXN1YWxpemVyIiwiVmlzdWFsaXplciIsInJlbmRlckZyYW1lIiwiTGVmdEFycm93IiwiY29sb3JlZExlZnRBcnJvdyIsInByZXNzZWRMZWZ0QXJyb3ciLCJpbmNvcnJlY3RMZWZ0QXJyb3ciLCJsZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiY29sb3JlZFJpZ2h0QXJyb3ciLCJwcmVzc2VkUmlnaHRBcnJvdyIsImluY29ycmVjdFJpZ2h0QXJyb3ciLCJyaWdodEFycm93IiwiVXBBcnJvdyIsImNvbG9yZWRVcEFycm93IiwicHJlc3NlZFVwQXJyb3ciLCJpbmNvcnJlY3RVcEFycm93IiwidXBBcnJvdyIsImxpZ2h0dXAiLCJsaWdodHVwMiIsImxpZ2h0dXAzIiwibGlnaHR1cDQiLCJMRUZUIiwiRE9XTiIsIlVQIiwiUklHSFQiLCJsZWZ0UG9pbnRzIiwiZG93blBvaW50cyIsInVwUG9pbnRzIiwicmlnaHRQb2ludHMiLCJpbmNvcnJlY3QiLCJpbmNvcnJlY3QyIiwiaW5jb3JyZWN0MyIsImluY29ycmVjdDQiLCJwb2ludHMiLCJiaW5kIiwidGV4dCIsImFscGhhIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImZpbGxTdHlsZSIsImZvbnQiLCJmaWxsVGV4dCIsImNsZWFySW50ZXJ2YWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwic2V0VGltZW91dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJhckhlaWdodCIsIngiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsInIiLCJnIiwiYiIsImJhcnMiLCJxdWFydGVyTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwibmV3QXJyIiwiaiIsInN1YkFyciIsImkiLCJmaWxsUmVjdCIsImNvdW50IiwiY291bnQyIiwiY291bnQzIiwiY291bnQ0IiwiaGFuZGxlUHJlc3MiLCJkcmF3Q29sb3JlZCIsImRyYXdOb3JtYWwiLCJkcmF3UHJlc3NlZCIsImRyYXdJbmNvcnJlY3QiLCJkaXNwbGF5UG9pbnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7Ozs7Ozs7QUFFQUEsT0FBT0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDaEQsTUFBTUMsUUFBUSxJQUFJQyxLQUFKLENBQVVDLFFBQVYsQ0FBZDtBQUNBRixRQUFNRyxnQkFBTjtBQUNBSCxRQUFNSSxTQUFOO0FBQ0QsQ0FKRDs7SUFNTUgsSztBQUNKLGlCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FB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QyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixJQUFsQjs7QUFFQSxhQUFLNEMsYUFBTCxDQUFtQixLQUFLM0MsTUFBeEI7QUFDRDtBQUNGOzs7Ozs7a0JBR1lqQyxVOzs7Ozs7Ozs7OztBQ3pUZix1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBpbnRybyA9IG5ldyBJbnRybyhkb2N1bWVudCk7XG4gIGludHJvLmxvYWRJbnN0cnVjdGlvbnMoKTtcbiAgaW50cm8uc3RhcnRHYW1lKCk7XG59KVxuXG5jbGFzcyBJbnRybyB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLWluc3RydWN0aW9uc1wiKTtcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdHJ1Y3Rpb25zXCIpO1xuICAgIHRoaXMuY2xvc2VJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWluc3RydWN0aW9uc1wiKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuICAgIHRoaXMuY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbi1jb250YWN0XCIpO1xuICAgIHRoaXMuY2xvc2VDb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1jb250YWN0XCIpO1xuXG4gICAgdGhpcy5jbG9zZUluc3RydWN0aW9ucy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhY3RCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlQ29udGFjdC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5jb250YWN0KSB7XG4gICAgICAgIHRoaXMuY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZEluc3RydWN0aW9ucygpIHtcbiAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSB0aGlzLmluc3RydWN0aW9ucztcbiAgICAvLyBkZWJ1Z2dlclxuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBkZWJ1Z2dlclxuICAgICAgLy8gdGhpcy5pbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICB0aGlzLmluc3RydWN0aW9uc0J1dHRvbi5jbGljaygpO1xuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHJldHVybiBuZXcgR2FtZSgpO1xuICB9XG59IiwiY2xhc3MgRG93bkFycm93IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5wb3MgPSBbMzY1LCAxMF07XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmNvbG9yZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNvbG9yZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMucHJlc3NlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJlc3NlZERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5pbmNvcnJlY3REb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmluY29ycmVjdERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X2Rvd25fYXJyb3cucG5nXCJcblxuICAgIHRoaXMuZG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5kb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2Rvd25fYXJyb3cucG5nXCI7XG4gIH1cblxuICBkcmF3Q29sb3JlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb2xvcmVkRG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd05vcm1hbCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5kb3duQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3UHJlc3NlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmVzc2VkRG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd0luY29ycmVjdCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmNvcnJlY3REb3duQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG93bkFycm93OyIsImltcG9ydCBWaXN1YWxpemVyIGZyb20gJy4vdmlzdWFsaXplcic7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIHRoaXMuZGVtbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKTtcbiAgICB0aGlzLmZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVcIik7XG4gICAgdGhpcy5hdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG5cbiAgICBkZW1vLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmF1ZGlvLnNyYyA9IFwic3JjL2Fzc2V0cy9DeWJlcnB1bmsubXAzXCI7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG5cbiAgICBmaWxlLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgICAgdGhpcy5hdWRpby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKTtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgbGV0IHNyYyA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbiAgICBjb25zdCBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICBzcmMuY29ubmVjdChhbmFseXNlcik7XG4gICAgYW5hbHlzZXIuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICBhbmFseXNlci5mZnRTaXplID0gMTAyNDtcbiAgICBjb25zdCBidWZmZXJMZW5ndGggPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuXG4gICAgY29uc3QgV0lEVEggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBIRUlHSFQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogOTsgXG5cbiAgICBjb25zdCB2aXN1YWxpemVyID0gbmV3IFZpc3VhbGl6ZXIoYW5hbHlzZXIsIGRhdGFBcnJheSwgdGhpcy5jYW52YXMpXG4gICAgYXVkaW8ucGxheSgpO1xuICAgIHZpc3VhbGl6ZXIucmVuZGVyRnJhbWUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIExlZnRBcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzEwLCAxMF07XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmNvbG9yZWRMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNvbG9yZWRMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMucHJlc3NlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJlc3NlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5pbmNvcnJlY3RMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmluY29ycmVjdExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X2xlZnRfYXJyb3cucG5nXCJcblxuICAgIHRoaXMubGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5sZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2xlZnRfYXJyb3cucG5nXCI7XG4gIH1cblxuICBkcmF3Q29sb3JlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb2xvcmVkTGVmdEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd05vcm1hbCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3UHJlc3NlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmVzc2VkTGVmdEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd0luY29ycmVjdCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmNvcnJlY3RMZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVmdEFycm93OyIsImNsYXNzIFJpZ2h0QXJyb3cge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLnBvcyA9IFsxMTAwLCAxMF07XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmNvbG9yZWRSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkUmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMucHJlc3NlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5pbmNvcnJlY3RSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3RSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfcmlnaHRfYXJyb3cucG5nXCJcblxuICAgIHRoaXMucmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcmlnaHRfYXJyb3cucG5nXCI7XG4gIH1cblxuICBkcmF3Q29sb3JlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb2xvcmVkUmlnaHRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdQcmVzc2VkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByZXNzZWRSaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd0luY29ycmVjdCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmNvcnJlY3RSaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0QXJyb3c7IiwiY2xhc3MgVXBBcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzcyNiwgMTBdO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5jb2xvcmVkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY29sb3JlZFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfdXBfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLnByZXNzZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmVzc2VkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMuaW5jb3JyZWN0VXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW5jb3JyZWN0VXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X3VwX2Fycm93LnBuZ1wiXG5cbiAgICB0aGlzLnVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3VwX2Fycm93LnBuZ1wiO1xuICB9XG5cbiAgZHJhd0NvbG9yZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY29sb3JlZFVwQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3Tm9ybWFsKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnVwQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3UHJlc3NlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmVzc2VkVXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdJbmNvcnJlY3QoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5jb3JyZWN0VXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcEFycm93OyIsImltcG9ydCBMZWZ0QXJyb3cgZnJvbSAnLi9sZWZ0X2Fycm93JztcbmltcG9ydCBEb3duQXJyb3cgZnJvbSAnLi9kb3duX2Fycm93JztcbmltcG9ydCBVcEFycm93IGZyb20gJy4vdXBfYXJyb3cnO1xuaW1wb3J0IFJpZ2h0QXJyb3cgZnJvbSAnLi9yaWdodF9hcnJvdyc7XG5cbmNsYXNzIFZpc3VhbGl6ZXIge1xuICBjb25zdHJ1Y3RvcihhbmFseXNlciwgZGF0YUFycmF5LCBjYW52YXMpIHtcbiAgICB0aGlzLmFuYWx5c2VyID0gYW5hbHlzZXI7XG4gICAgdGhpcy5kYXRhQXJyYXkgPSBkYXRhQXJyYXk7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5XSURUSCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgIHRoaXMuSEVJR0hUID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gdGhpcy5hbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICB0aGlzLmJhcldpZHRoID0gKHRoaXMuV0lEVEggLyB0aGlzLmJ1ZmZlckxlbmd0aCkgKiA5OyBcblxuICAgIHRoaXMubGVmdEFycm93ID0gbmV3IExlZnRBcnJvdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5kb3duQXJyb3cgPSBuZXcgRG93bkFycm93KHRoaXMuY3R4KTtcbiAgICB0aGlzLnVwQXJyb3cgPSBuZXcgVXBBcnJvdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5yaWdodEFycm93ID0gbmV3IFJpZ2h0QXJyb3codGhpcy5jdHgpO1xuXG4gICAgdGhpcy5saWdodHVwID0gZmFsc2U7XG4gICAgdGhpcy5saWdodHVwMiA9IGZhbHNlO1xuICAgIHRoaXMubGlnaHR1cDMgPSBmYWxzZTtcbiAgICB0aGlzLmxpZ2h0dXA0ID0gZmFsc2U7XG5cbiAgICB0aGlzLkxFRlQgPSBmYWxzZTtcbiAgICB0aGlzLkRPV04gPSBmYWxzZTtcbiAgICB0aGlzLlVQID0gZmFsc2U7XG4gICAgdGhpcy5SSUdIVCA9IGZhbHNlO1xuXG4gICAgdGhpcy5sZWZ0UG9pbnRzID0gMDtcbiAgICB0aGlzLmRvd25Qb2ludHMgPSAwO1xuICAgIHRoaXMudXBQb2ludHMgPSAwO1xuICAgIHRoaXMucmlnaHRQb2ludHMgPSAwO1xuXG4gICAgdGhpcy5pbmNvcnJlY3QgPSB0cnVlO1xuICAgIHRoaXMuaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgdGhpcy5pbmNvcnJlY3QzID0gdHJ1ZTtcbiAgICB0aGlzLmluY29ycmVjdDQgPSB0cnVlO1xuXG4gICAgdGhpcy5wb2ludHMgPSAwO1xuICAgIHRoaXMucmVuZGVyRnJhbWUgPSB0aGlzLnJlbmRlckZyYW1lLmJpbmQodGhpcyk7XG4gIH1cblxuICBkaXNwbGF5UG9pbnRzKHRleHQpIHtcbiAgICBsZXQgYWxwaGEgPSAxLjAsICAgXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7IFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAwLCAxNDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiYm9sZCAyNXB0IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIDYwMCwgNTApO1xuICAgICAgICBhbHBoYSA9IGFscGhhIC0gMC4wNTsgXG4gICAgICAgIGlmIChhbHBoYSA8IDApIHtcbiAgICAgICAgICB0aGlzLmN0eC53aWR0aCA9IHRoaXMuY3R4LndpZHRoO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICB9LCA1MCk7XG4gIH0gXG5cbiAgaGFuZGxlUHJlc3MoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmIHRoaXMubGlnaHR1cCAmJiB0aGlzLmluY29ycmVjdCkge1xuICAgICAgdGhpcy5wb2ludHMgKz0gMTtcbiAgICAgIHRoaXMuTEVGVCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0ID0gIXRoaXMuaW5jb3JyZWN0O1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmICF0aGlzLmxpZ2h0dXAgJiYgdGhpcy5pbmNvcnJlY3QpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLkxFRlQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLkxFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5pbmNvcnJlY3QgPSAhdGhpcy5pbmNvcnJlY3Q7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgdGhpcy5saWdodHVwMiAmJiB0aGlzLmluY29ycmVjdDIpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLkRPV04gPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLkRPV04gPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwMiA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3QyID0gIXRoaXMuaW5jb3JyZWN0MjtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiAhdGhpcy5saWdodHVwMiAmJiB0aGlzLmluY29ycmVjdDIpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLkRPV04gPSB0cnVlOyBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ET1dOID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MiA9ICF0aGlzLmluY29ycmVjdDI7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzggJiYgdGhpcy5saWdodHVwMyAmJiB0aGlzLmluY29ycmVjdDMpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLlVQID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5VUCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDMgPSAhdGhpcy5pbmNvcnJlY3QzO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmICF0aGlzLmxpZ2h0dXAzICYmIHRoaXMuaW5jb3JyZWN0Mykge1xuICAgICAgdGhpcy5wb2ludHMgLT0gMTtcbiAgICAgIHRoaXMuVVAgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLlVQID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MyA9ICF0aGlzLmluY29ycmVjdDM7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgJiYgdGhpcy5saWdodHVwNCAmJiB0aGlzLmluY29ycmVjdDQpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLlJJR0hUID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5SSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDQgPSAhdGhpcy5pbmNvcnJlY3Q0O1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM5ICYmICF0aGlzLmxpZ2h0dXA0ICYmIHRoaXMuaW5jb3JyZWN0NCkge1xuICAgICAgdGhpcy5wb2ludHMgLT0gMTtcbiAgICAgIHRoaXMuUklHSFQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLlJJR0hUID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0NCA9ICF0aGlzLmluY29ycmVjdDQ7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRnJhbWUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyRnJhbWUpO1xuICAgIGxldCBiYXJIZWlnaHQ7XG4gICAgbGV0IHggPSAwO1xuXG4gICAgdGhpcy5hbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YSh0aGlzLmRhdGFBcnJheSk7XG4gICAgbGV0IHIsIGcsIGI7XG4gICAgbGV0IGJhcnMgPSA0MDtcblxuICAgIGxldCBxdWFydGVyTGVuZ3RoID0gdGhpcy5kYXRhQXJyYXkubGVuZ3RoIC8gNDtcblxuICAgIGxldCBmaXJzdCA9IHRoaXMuZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgIGxldCBzZWNvbmQgPSB0aGlzLmRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoLCBxdWFydGVyTGVuZ3RoICogMik7XG4gICAgbGV0IHRoaXJkID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDIsIHF1YXJ0ZXJMZW5ndGggKiAzKTtcbiAgICBsZXQgZm91cnRoID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDMsIHF1YXJ0ZXJMZW5ndGggKiA0KTtcbiAgICBcbiAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgXG4gICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpOyBcbiAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IFxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMFxuICAgICAgICAgIGIgPSAxOTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyBcbiAgICAgICAgICByID0gNzFcbiAgICAgICAgICBnID0gNFxuICAgICAgICAgIGIgPSA3MFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7IFxuICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA8IDE5MCkgeyBcbiAgICAgICAgICByID0gMlxuICAgICAgICAgIGcgPSA2NFxuICAgICAgICAgIGIgPSA3OVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7IFxuICAgICAgICAgIHIgPSAyMjNcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDQyXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxNzApIHsgXG4gICAgICAgICAgciA9IDRcbiAgICAgICAgICBnID0gNzFcbiAgICAgICAgICBiID0gOVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gNTApIHsgXG4gICAgICAgICAgciA9IDI1NVxuICAgICAgICAgIGcgPSAxNjRcbiAgICAgICAgICBiID0gMFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldIDwgNTApIHsgXG4gICAgICAgICAgciA9IDcxXG4gICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgYiA9IDRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgsICh0aGlzLkhFSUdIVCAtIGJhckhlaWdodCksIHRoaXMuYmFyV2lkdGgsIGJhckhlaWdodCk7XG5cbiAgICAgICAgeCArPSB0aGlzLmJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbMF1baV0gPiAyNTApIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA+PSA0ICYmIHRoaXMubGlnaHR1cCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXAgPSBmYWxzZSwgNzUwKTtcbiAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudDIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclsxXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbMV1baV0gPiAxOTApIHtcbiAgICAgICAgICAgIGNvdW50MiArPSAxO1xuXG4gICAgICAgICAgICBpZiAoY291bnQyID49IDQgJiYgdGhpcy5saWdodHVwMiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwMiA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saWdodHVwMiA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgIGNvdW50MiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgY291bnQzID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3QXJyWzJdW2ldID4gMTcwKSB7XG4gICAgICAgICAgICBjb3VudDMgKz0gMTtcblxuICAgICAgICAgICAgaWYgKGNvdW50MyA+PSA0ICYmIHRoaXMubGlnaHR1cDMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlnaHR1cDMgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubGlnaHR1cDMgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICBjb3VudDMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudDQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclszXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbM11baV0gPiA1MCkge1xuICAgICAgICAgICAgY291bnQ0ICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudDQgPj0gNCAmJiB0aGlzLmxpZ2h0dXA0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aGlzLmxpZ2h0dXA0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXA0ID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgY291bnQ0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZVByZXNzKTtcblxuICAgICAgICAvLyBSZW5kZXJpbmcgbGVmdCBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMCAmJiB0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgIXRoaXMubGlnaHR1cCkge1xuICAgICAgICAgIHRoaXMubGVmdEFycm93LmRyYXdOb3JtYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAwICYmIHRoaXMuTEVGVCAmJiB0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3UHJlc3NlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDAgJiYgdGhpcy5MRUZUICYmICF0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFJlbmRlcmluZyBkb3duIGFycm93XG4gICAgICAgIGlmIChqID09PSAxICYmIHRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgIXRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLkRPV04gJiYgdGhpcy5saWdodHVwMikge1xuICAgICAgICAgIHRoaXMuZG93bkFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLkRPV04gJiYgIXRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXJpbmcgdXAgYXJyb3dcbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5saWdodHVwMykge1xuICAgICAgICAgIHRoaXMudXBBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgIXRoaXMubGlnaHR1cDMpIHtcbiAgICAgICAgICB0aGlzLnVwQXJyb3cuZHJhd05vcm1hbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5VUCAmJiB0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMiAmJiB0aGlzLlVQICYmICF0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdJbmNvcnJlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlcmluZyByaWdodCBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLmxpZ2h0dXA0KSB7XG4gICAgICAgICAgdGhpcy5yaWdodEFycm93LmRyYXdDb2xvcmVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiAhdGhpcy5saWdodHVwNCkge1xuICAgICAgICAgIHRoaXMucmlnaHRBcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLlJJR0hUICYmIHRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd1ByZXNzZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAzICYmIHRoaXMuUklHSFQgJiYgIXRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd0luY29ycmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgICB0aGlzLmluY29ycmVjdDMgPSB0cnVlO1xuICAgICAgdGhpcy5pbmNvcnJlY3Q0ID0gdHJ1ZTtcblxuICAgICAgdGhpcy5kaXNwbGF5UG9pbnRzKHRoaXMucG9pbnRzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsaXplcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9