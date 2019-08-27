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
    var _this = this;

    _classCallCheck(this, Intro);

    this.document = document;
    this.instructionsButton = document.getElementById("open-instructions");
    this.instructions = document.getElementById("instructions");
    this.closeInstructions = document.getElementById("close-instructions");
    this.contact = document.getElementById("contact");
    this.contactButton = document.getElementById("open-contact");
    this.closeContact = document.getElementById("close-contact");

    this.closeInstructions.onclick = function () {
      _this.instructions.style.display = "none";
    };

    this.contactButton.onclick = function () {
      _this.contact.style.display = "block";
    };

    this.closeContact.onclick = function () {
      _this.contact.style.display = "none";
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
      var _this2 = this;

      this.instructionsButton.onclick = function () {
        _this2.instructions.style.display = "block";
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
    var audio = document.getElementById("audio");
    this.handleChange = this.handleChange.bind(this);

    demo.onclick = function () {
      audio.src = "src/assets/Cyberpunk.mp3";
      _this.play();
    };

    file.onchange = function (e) {
      return _this.handleChange(e);
    };
  }

  _createClass(Game, [{
    key: "handleChange",
    value: function handleChange(e) {
      var newsong = e.target.files[0];
      audio.src = URL.createObjectURL(newsong);
      this.play();
    }
  }, {
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

    // this.pos = [1100, 10];
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

    this.incorrect = true;
    this.incorrect2 = true;
    this.incorrect3 = true;
    this.incorrect4 = true;

    this.points = 0;
    this.renderFrame = this.renderFrame.bind(this);
    this.handlePress = this.handlePress.bind(this);
    document.addEventListener("keydown", this.handlePress);
  }

  _createClass(Visualizer, [{
    key: 'displayPoints',
    value: function displayPoints(text) {
      var _this = this;

      var alpha = 1;
      var interval = setInterval(function () {
        _this.canvas.width = canvas.width;
        _this.ctx.fillStyle = "rgba(255, 0, 140, " + alpha + ")";
        _this.ctx.font = "bold 25pt Arial";
        _this.ctx.fillText(text, 600, 50);
        alpha = alpha - 0.05;
        if (alpha < 0) {
          _this.ctx.width = _this.ctx.width;
          clearInterval(interval);
        }
      }, 1000 / 60);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb3duX2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sZWZ0X2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yaWdodF9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXBfYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnRybyIsIkludHJvIiwiZG9jdW1lbnQiLCJsb2FkSW5zdHJ1Y3Rpb25zIiwic3RhcnRHYW1lIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnN0cnVjdGlvbnMiLCJjbG9zZUluc3RydWN0aW9ucyIsImNvbnRhY3QiLCJjb250YWN0QnV0dG9uIiwiY2xvc2VDb250YWN0Iiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwiY2xpY2siLCJHYW1lIiwiRG93bkFycm93IiwiY3R4IiwicG9zIiwiY29sb3JlZERvd25BcnJvdyIsIkltYWdlIiwic3JjIiwicHJlc3NlZERvd25BcnJvdyIsImluY29ycmVjdERvd25BcnJvdyIsImRvd25BcnJvdyIsImRyYXdJbWFnZSIsImNhbnZhcyIsImRlbW8iLCJmaWxlIiwiYXVkaW8iLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwicGxheSIsIm9uY2hhbmdlIiwiZSIsIm5ld3NvbmciLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsIldJRFRIIiwiSEVJR0hUIiwiYmFyV2lkdGgiLCJ2aXN1YWxpemVyIiwiVmlzdWFsaXplciIsInJlbmRlckZyYW1lIiwiTGVmdEFycm93IiwiY29sb3JlZExlZnRBcnJvdyIsInByZXNzZWRMZWZ0QXJyb3ciLCJpbmNvcnJlY3RMZWZ0QXJyb3ciLCJsZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiY29sb3JlZFJpZ2h0QXJyb3ciLCJwcmVzc2VkUmlnaHRBcnJvdyIsImluY29ycmVjdFJpZ2h0QXJyb3ciLCJyaWdodEFycm93IiwiVXBBcnJvdyIsImNvbG9yZWRVcEFycm93IiwicHJlc3NlZFVwQXJyb3ciLCJpbmNvcnJlY3RVcEFycm93IiwidXBBcnJvdyIsImxpZ2h0dXAiLCJsaWdodHVwMiIsImxpZ2h0dXAzIiwibGlnaHR1cDQiLCJMRUZUIiwiRE9XTiIsIlVQIiwiUklHSFQiLCJpbmNvcnJlY3QiLCJpbmNvcnJlY3QyIiwiaW5jb3JyZWN0MyIsImluY29ycmVjdDQiLCJwb2ludHMiLCJoYW5kbGVQcmVzcyIsInRleHQiLCJhbHBoYSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJmaWxsU3R5bGUiLCJmb250IiwiZmlsbFRleHQiLCJjbGVhckludGVydmFsIiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwic2V0VGltZW91dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJhckhlaWdodCIsIngiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsInIiLCJnIiwiYiIsImJhcnMiLCJxdWFydGVyTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwibmV3QXJyIiwiaiIsInN1YkFyciIsImkiLCJmaWxsUmVjdCIsImNvdW50IiwiY291bnQyIiwiY291bnQzIiwiY291bnQ0IiwiZHJhd0NvbG9yZWQiLCJkcmF3Tm9ybWFsIiwiZHJhd1ByZXNzZWQiLCJkcmF3SW5jb3JyZWN0IiwiZGlzcGxheVBvaW50cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBQ0E7Ozs7Ozs7O0FBRUFBLE9BQU9DLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hELE1BQU1DLFFBQVEsSUFBSUMsS0FBSixDQUFVQyxRQUFWLENBQWQ7QUFDQUYsUUFBTUcsZ0JBQU47QUFDQUgsUUFBTUksU0FBTjtBQUNELENBSkQ7O0lBTU1ILEs7QUFDSixpQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtHLGtCQUFMLEdBQTBCSCxTQUFT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LFVBQUwsQ0FBZ0IwRCxhQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBSzVDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsSUFBbEI7O0FBRUEsYUFBSzBDLGFBQUwsQ0FBbUIsS0FBS3pDLE1BQXhCO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZN0IsVTs7Ozs7Ozs7Ozs7QUNwVGYsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgaW50cm8gPSBuZXcgSW50cm8oZG9jdW1lbnQpO1xuICBpbnRyby5sb2FkSW5zdHJ1Y3Rpb25zKCk7XG4gIGludHJvLnN0YXJ0R2FtZSgpO1xufSlcblxuY2xhc3MgSW50cm8ge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB0aGlzLmluc3RydWN0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbi1pbnN0cnVjdGlvbnNcIik7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc1wiKTtcbiAgICB0aGlzLmNsb3NlSW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1pbnN0cnVjdGlvbnNcIik7XG4gICAgdGhpcy5jb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuICAgIHRoaXMuY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbi1jb250YWN0XCIpO1xuICAgIHRoaXMuY2xvc2VDb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1jb250YWN0XCIpO1xuXG4gICAgdGhpcy5jbG9zZUluc3RydWN0aW9ucy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHRoaXMuY29udGFjdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5jb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZUNvbnRhY3Qub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5jb250YWN0KSB7XG4gICAgICAgIHRoaXMuY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZEluc3RydWN0aW9ucygpIHtcbiAgICB0aGlzLmluc3RydWN0aW9uc0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgdGhpcy5pbnN0cnVjdGlvbnNCdXR0b24uY2xpY2soKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICByZXR1cm4gbmV3IEdhbWUoKTtcbiAgfVxufSIsImNsYXNzIERvd25BcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzM2NSwgMTBdO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5jb2xvcmVkRG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLnByZXNzZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMuaW5jb3JyZWN0RG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3REb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9kb3duX2Fycm93LnBuZ1wiXG5cbiAgICB0aGlzLmRvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9kb3duX2Fycm93LnBuZ1wiO1xuICB9XG5cbiAgZHJhd0NvbG9yZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY29sb3JlZERvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZERvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdJbmNvcnJlY3QoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5jb3JyZWN0RG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvd25BcnJvdzsiLCJpbXBvcnQgVmlzdWFsaXplciBmcm9tICcuL3Zpc3VhbGl6ZXInO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmRlbW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gICAgdGhpcy5maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlXCIpO1xuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICBkZW1vLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBhdWRpby5zcmMgPSBcInNyYy9hc3NldHMvQ3liZXJwdW5rLm1wM1wiO1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgZmlsZS5vbmNoYW5nZSA9IChlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgY29uc3QgbmV3c29uZyA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gICAgYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXdzb25nKTtcbiAgICB0aGlzLnBsYXkoKTtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgbGV0IHNyYyA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbiAgICBjb25zdCBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICBzcmMuY29ubmVjdChhbmFseXNlcik7XG4gICAgYW5hbHlzZXIuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICBhbmFseXNlci5mZnRTaXplID0gMTAyNDtcbiAgICBjb25zdCBidWZmZXJMZW5ndGggPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuXG4gICAgY29uc3QgV0lEVEggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBIRUlHSFQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogOTsgXG5cbiAgICBjb25zdCB2aXN1YWxpemVyID0gbmV3IFZpc3VhbGl6ZXIoYW5hbHlzZXIsIGRhdGFBcnJheSwgdGhpcy5jYW52YXMpXG4gICAgYXVkaW8ucGxheSgpO1xuICAgIHZpc3VhbGl6ZXIucmVuZGVyRnJhbWUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIExlZnRBcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzEwLCAxMF07XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmNvbG9yZWRMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNvbG9yZWRMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMucHJlc3NlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJlc3NlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5pbmNvcnJlY3RMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmluY29ycmVjdExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X2xlZnRfYXJyb3cucG5nXCJcblxuICAgIHRoaXMubGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5sZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2xlZnRfYXJyb3cucG5nXCI7XG4gIH1cblxuICBkcmF3Q29sb3JlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb2xvcmVkTGVmdEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd05vcm1hbCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3UHJlc3NlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmVzc2VkTGVmdEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd0luY29ycmVjdCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmNvcnJlY3RMZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVmdEFycm93OyIsImNsYXNzIFJpZ2h0QXJyb3cge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAvLyB0aGlzLnBvcyA9IFsxMTAwLCAxMF07XG4gICAgdGhpcy5wb3MgPSBbMTEwMCwgMTBdO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5jb2xvcmVkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY29sb3JlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLnByZXNzZWRSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmVzc2VkUmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMuaW5jb3JyZWN0UmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW5jb3JyZWN0UmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X3JpZ2h0X2Fycm93LnBuZ1wiXG5cbiAgICB0aGlzLnJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3JpZ2h0X2Fycm93LnBuZ1wiO1xuICB9XG5cbiAgZHJhd0NvbG9yZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY29sb3JlZFJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3Tm9ybWFsKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3UHJlc3NlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmVzc2VkUmlnaHRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdJbmNvcnJlY3QoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5jb3JyZWN0UmlnaHRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSaWdodEFycm93OyIsImNsYXNzIFVwQXJyb3cge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLnBvcyA9IFs3MjYsIDEwXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuY29sb3JlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNvbG9yZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5wcmVzc2VkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJlc3NlZFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfdXBfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLmluY29ycmVjdFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmluY29ycmVjdFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF91cF9hcnJvdy5wbmdcIlxuXG4gICAgdGhpcy51cEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy51cEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy91cF9hcnJvdy5wbmdcIjtcbiAgfVxuXG4gIGRyYXdDb2xvcmVkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvbG9yZWRVcEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd05vcm1hbCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy51cEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZFVwQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3SW5jb3JyZWN0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluY29ycmVjdFVwQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBBcnJvdzsiLCJpbXBvcnQgTGVmdEFycm93IGZyb20gJy4vbGVmdF9hcnJvdyc7XG5pbXBvcnQgRG93bkFycm93IGZyb20gJy4vZG93bl9hcnJvdyc7XG5pbXBvcnQgVXBBcnJvdyBmcm9tICcuL3VwX2Fycm93JztcbmltcG9ydCBSaWdodEFycm93IGZyb20gJy4vcmlnaHRfYXJyb3cnO1xuXG5jbGFzcyBWaXN1YWxpemVyIHtcbiAgY29uc3RydWN0b3IoYW5hbHlzZXIsIGRhdGFBcnJheSwgY2FudmFzKSB7XG4gICAgdGhpcy5hbmFseXNlciA9IGFuYWx5c2VyO1xuICAgIHRoaXMuZGF0YUFycmF5ID0gZGF0YUFycmF5O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuV0lEVEggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB0aGlzLkhFSUdIVCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLmJ1ZmZlckxlbmd0aCA9IHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgdGhpcy5iYXJXaWR0aCA9ICh0aGlzLldJRFRIIC8gdGhpcy5idWZmZXJMZW5ndGgpICogOTsgXG5cbiAgICB0aGlzLmxlZnRBcnJvdyA9IG5ldyBMZWZ0QXJyb3codGhpcy5jdHgpO1xuICAgIHRoaXMuZG93bkFycm93ID0gbmV3IERvd25BcnJvdyh0aGlzLmN0eCk7XG4gICAgdGhpcy51cEFycm93ID0gbmV3IFVwQXJyb3codGhpcy5jdHgpO1xuICAgIHRoaXMucmlnaHRBcnJvdyA9IG5ldyBSaWdodEFycm93KHRoaXMuY3R4KTtcblxuICAgIHRoaXMubGlnaHR1cCA9IGZhbHNlO1xuICAgIHRoaXMubGlnaHR1cDIgPSBmYWxzZTtcbiAgICB0aGlzLmxpZ2h0dXAzID0gZmFsc2U7XG4gICAgdGhpcy5saWdodHVwNCA9IGZhbHNlO1xuXG4gICAgdGhpcy5MRUZUID0gZmFsc2U7XG4gICAgdGhpcy5ET1dOID0gZmFsc2U7XG4gICAgdGhpcy5VUCA9IGZhbHNlO1xuICAgIHRoaXMuUklHSFQgPSBmYWxzZTtcblxuICAgIHRoaXMuaW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICB0aGlzLmluY29ycmVjdDIgPSB0cnVlO1xuICAgIHRoaXMuaW5jb3JyZWN0MyA9IHRydWU7XG4gICAgdGhpcy5pbmNvcnJlY3Q0ID0gdHJ1ZTtcblxuICAgIHRoaXMucG9pbnRzID0gMDtcbiAgICB0aGlzLnJlbmRlckZyYW1lID0gdGhpcy5yZW5kZXJGcmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUHJlc3MgPSB0aGlzLmhhbmRsZVByZXNzLmJpbmQodGhpcyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVQcmVzcyk7XG4gIH1cblxuICBkaXNwbGF5UG9pbnRzKHRleHQpIHtcbiAgICBsZXQgYWxwaGEgPSAxO1xuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7IFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAwLCAxNDAsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiYm9sZCAyNXB0IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIDYwMCwgNTApO1xuICAgICAgICBhbHBoYSA9IGFscGhhIC0gMC4wNTsgXG4gICAgICAgIGlmIChhbHBoYSA8IDApIHtcbiAgICAgICAgICB0aGlzLmN0eC53aWR0aCA9IHRoaXMuY3R4LndpZHRoO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwIC8gNjApO1xuICB9IFxuXG4gIGhhbmRsZVByZXNzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiB0aGlzLmxpZ2h0dXAgJiYgdGhpcy5pbmNvcnJlY3QpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLkxFRlQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLkxFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdCA9ICF0aGlzLmluY29ycmVjdDtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiAhdGhpcy5saWdodHVwICYmIHRoaXMuaW5jb3JyZWN0KSB7XG4gICAgICB0aGlzLnBvaW50cyAtPSAxO1xuICAgICAgdGhpcy5MRUZUID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5MRUZUID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMuaW5jb3JyZWN0ID0gIXRoaXMuaW5jb3JyZWN0O1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDQwICYmIHRoaXMubGlnaHR1cDIgJiYgdGhpcy5pbmNvcnJlY3QyKSB7XG4gICAgICB0aGlzLnBvaW50cyArPSAxO1xuICAgICAgdGhpcy5ET1dOID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ET1dOID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MiA9ICF0aGlzLmluY29ycmVjdDI7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgIXRoaXMubGlnaHR1cDIgJiYgdGhpcy5pbmNvcnJlY3QyKSB7XG4gICAgICB0aGlzLnBvaW50cyAtPSAxO1xuICAgICAgdGhpcy5ET1dOID0gdHJ1ZTsgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuRE9XTiA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDIgPSAhdGhpcy5pbmNvcnJlY3QyO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmIHRoaXMubGlnaHR1cDMgJiYgdGhpcy5pbmNvcnJlY3QzKSB7XG4gICAgICB0aGlzLnBvaW50cyArPSAxO1xuICAgICAgdGhpcy5VUCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuVVAgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwMyA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3QzID0gIXRoaXMuaW5jb3JyZWN0MztcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCAmJiAhdGhpcy5saWdodHVwMyAmJiB0aGlzLmluY29ycmVjdDMpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLlVQID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5VUCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDMgPSAhdGhpcy5pbmNvcnJlY3QzO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM5ICYmIHRoaXMubGlnaHR1cDQgJiYgdGhpcy5pbmNvcnJlY3Q0KSB7XG4gICAgICB0aGlzLnBvaW50cyArPSAxO1xuICAgICAgdGhpcy5SSUdIVCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuUklHSFQgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwNCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3Q0ID0gIXRoaXMuaW5jb3JyZWN0NDtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiAhdGhpcy5saWdodHVwNCAmJiB0aGlzLmluY29ycmVjdDQpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLlJJR0hUID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5SSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDQgPSAhdGhpcy5pbmNvcnJlY3Q0O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZyYW1lKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlckZyYW1lKTtcbiAgICBsZXQgYmFySGVpZ2h0O1xuICAgIGxldCB4ID0gMDtcblxuICAgIHRoaXMuYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEodGhpcy5kYXRhQXJyYXkpO1xuICAgIGxldCByLCBnLCBiO1xuICAgIGxldCBiYXJzID0gNDA7XG5cbiAgICBsZXQgcXVhcnRlckxlbmd0aCA9IHRoaXMuZGF0YUFycmF5Lmxlbmd0aCAvIDQ7XG5cbiAgICBsZXQgZmlyc3QgPSB0aGlzLmRhdGFBcnJheS5zbGljZSgwLCBxdWFydGVyTGVuZ3RoKTtcbiAgICBsZXQgc2Vjb25kID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCwgcXVhcnRlckxlbmd0aCAqIDIpO1xuICAgIGxldCB0aGlyZCA9IHRoaXMuZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAyLCBxdWFydGVyTGVuZ3RoICogMyk7XG4gICAgbGV0IGZvdXJ0aCA9IHRoaXMuZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAzLCBxdWFydGVyTGVuZ3RoICogNCk7XG4gICAgXG4gICAgbGV0IG5ld0FyciA9IFtmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoXTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3QXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgc3ViQXJyID0gbmV3QXJyW2pdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IFxuICAgICAgICBiYXJIZWlnaHQgPSAoc3ViQXJyW2ldICogMi41KTsgXG4gICAgICAgIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDI1MCkgeyBcbiAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgZyA9IDBcbiAgICAgICAgICBiID0gMTkxXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAyNTApIHsgXG4gICAgICAgICAgciA9IDcxXG4gICAgICAgICAgZyA9IDRcbiAgICAgICAgICBiID0gNzBcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkgeyBcbiAgICAgICAgICByID0gMFxuICAgICAgICAgIGcgPSAyNTVcbiAgICAgICAgICBiID0gMjUxXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPCAxOTApIHsgXG4gICAgICAgICAgciA9IDJcbiAgICAgICAgICBnID0gNjRcbiAgICAgICAgICBiID0gNzlcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkgeyBcbiAgICAgICAgICByID0gMjIzXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSA0MlxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldIDwgMTcwKSB7IFxuICAgICAgICAgIHIgPSA0XG4gICAgICAgICAgZyA9IDcxXG4gICAgICAgICAgYiA9IDlcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7IFxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMTY0XG4gICAgICAgICAgYiA9IDBcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA8IDUwKSB7IFxuICAgICAgICAgIHIgPSA3MVxuICAgICAgICAgIGcgPSAxNFxuICAgICAgICAgIGIgPSA0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYHJnYigke3J9LCR7Z30sJHtifSlgO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4LCAodGhpcy5IRUlHSFQgLSBiYXJIZWlnaHQpLCB0aGlzLmJhcldpZHRoLCBiYXJIZWlnaHQpO1xuXG4gICAgICAgIHggKz0gdGhpcy5iYXJXaWR0aCArIDEwO1xuXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3QXJyWzBdW2ldID4gMjUwKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuXG4gICAgICAgICAgICBpZiAoY291bnQgPj0gNCAmJiB0aGlzLmxpZ2h0dXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlnaHR1cCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saWdodHVwID0gZmFsc2UsIDc1MCk7XG4gICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY291bnQyID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3QXJyWzFdW2ldID4gMTkwKSB7XG4gICAgICAgICAgICBjb3VudDIgKz0gMTtcblxuICAgICAgICAgICAgaWYgKGNvdW50MiA+PSA0ICYmIHRoaXMubGlnaHR1cDIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlnaHR1cDIgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubGlnaHR1cDIgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICBjb3VudDIgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGNvdW50MyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG5ld0FyclsyXVtpXSA+IDE3MCkge1xuICAgICAgICAgICAgY291bnQzICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudDMgPj0gNCAmJiB0aGlzLmxpZ2h0dXAzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aGlzLmxpZ2h0dXAzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXAzID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgY291bnQzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY291bnQ0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbM10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3QXJyWzNdW2ldID4gNTApIHtcbiAgICAgICAgICAgIGNvdW50NCArPSAxO1xuXG4gICAgICAgICAgICBpZiAoY291bnQ0ID49IDQgJiYgdGhpcy5saWdodHVwNCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwNCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saWdodHVwNCA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgIGNvdW50NCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVuZGVyaW5nIGxlZnQgYXJyb3dcbiAgICAgICAgaWYgKGogPT09IDAgJiYgdGhpcy5saWdodHVwKSB7XG4gICAgICAgICAgdGhpcy5sZWZ0QXJyb3cuZHJhd0NvbG9yZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmICF0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMCAmJiB0aGlzLkxFRlQgJiYgdGhpcy5saWdodHVwKSB7XG4gICAgICAgICAgdGhpcy5sZWZ0QXJyb3cuZHJhd1ByZXNzZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAwICYmIHRoaXMuTEVGVCAmJiAhdGhpcy5saWdodHVwKSB7XG4gICAgICAgICAgdGhpcy5sZWZ0QXJyb3cuZHJhd0luY29ycmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBSZW5kZXJpbmcgZG93biBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLmxpZ2h0dXAyKSB7XG4gICAgICAgICAgdGhpcy5kb3duQXJyb3cuZHJhd0NvbG9yZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmICF0aGlzLmxpZ2h0dXAyKSB7XG4gICAgICAgICAgdGhpcy5kb3duQXJyb3cuZHJhd05vcm1hbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDEgJiYgdGhpcy5ET1dOICYmIHRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3UHJlc3NlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDEgJiYgdGhpcy5ET1dOICYmICF0aGlzLmxpZ2h0dXAyKSB7XG4gICAgICAgICAgdGhpcy5kb3duQXJyb3cuZHJhd0luY29ycmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVuZGVyaW5nIHVwIGFycm93XG4gICAgICAgIGlmIChqID09PSAyICYmIHRoaXMubGlnaHR1cDMpIHtcbiAgICAgICAgICB0aGlzLnVwQXJyb3cuZHJhd0NvbG9yZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmICF0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdOb3JtYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAyICYmIHRoaXMuVVAgJiYgdGhpcy5saWdodHVwMykge1xuICAgICAgICAgIHRoaXMudXBBcnJvdy5kcmF3UHJlc3NlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5VUCAmJiAhdGhpcy5saWdodHVwMykge1xuICAgICAgICAgIHRoaXMudXBBcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXJpbmcgcmlnaHQgYXJyb3dcbiAgICAgICAgaWYgKGogPT09IDMgJiYgdGhpcy5saWdodHVwNCkge1xuICAgICAgICAgIHRoaXMucmlnaHRBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgIXRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd05vcm1hbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDMgJiYgdGhpcy5SSUdIVCAmJiB0aGlzLmxpZ2h0dXA0KSB7XG4gICAgICAgICAgdGhpcy5yaWdodEFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLlJJR0hUICYmICF0aGlzLmxpZ2h0dXA0KSB7XG4gICAgICAgICAgdGhpcy5yaWdodEFycm93LmRyYXdJbmNvcnJlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluY29ycmVjdCA9IHRydWU7XG4gICAgICB0aGlzLmluY29ycmVjdDIgPSB0cnVlO1xuICAgICAgdGhpcy5pbmNvcnJlY3QzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0NCA9IHRydWU7XG5cbiAgICAgIHRoaXMuZGlzcGxheVBvaW50cyh0aGlzLnBvaW50cyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbGl6ZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==