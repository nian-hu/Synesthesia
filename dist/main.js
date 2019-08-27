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

    // this.document.addEventListener("keydown", this.handlePress);
  }

  _createClass(Intro, [{
    key: 'loadInstructions',
    value: function loadInstructions() {
      var _this2 = this;

      // const instructions = this.instructions;
      // debugger
      this.instructionsButton.onclick = function () {
        // debugger
        // this.instructions.style.display = "block";
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
      // debugger
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb3duX2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sZWZ0X2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yaWdodF9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXBfYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnRybyIsIkludHJvIiwiZG9jdW1lbnQiLCJsb2FkSW5zdHJ1Y3Rpb25zIiwic3RhcnRHYW1lIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnN0cnVjdGlvbnMiLCJjbG9zZUluc3RydWN0aW9ucyIsImNvbnRhY3QiLCJjb250YWN0QnV0dG9uIiwiY2xvc2VDb250YWN0Iiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwiY2xpY2siLCJHYW1lIiwiRG93bkFycm93IiwiY3R4IiwicG9zIiwiY29sb3JlZERvd25BcnJvdyIsIkltYWdlIiwic3JjIiwicHJlc3NlZERvd25BcnJvdyIsImluY29ycmVjdERvd25BcnJvdyIsImRvd25BcnJvdyIsImRyYXdJbWFnZSIsImNhbnZhcyIsImRlbW8iLCJmaWxlIiwiYXVkaW8iLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwicGxheSIsIm9uY2hhbmdlIiwiZSIsIm5ld3NvbmciLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsIldJRFRIIiwiSEVJR0hUIiwiYmFyV2lkdGgiLCJ2aXN1YWxpemVyIiwiVmlzdWFsaXplciIsInJlbmRlckZyYW1lIiwiTGVmdEFycm93IiwiY29sb3JlZExlZnRBcnJvdyIsInByZXNzZWRMZWZ0QXJyb3ciLCJpbmNvcnJlY3RMZWZ0QXJyb3ciLCJsZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiY29sb3JlZFJpZ2h0QXJyb3ciLCJwcmVzc2VkUmlnaHRBcnJvdyIsImluY29ycmVjdFJpZ2h0QXJyb3ciLCJyaWdodEFycm93IiwiVXBBcnJvdyIsImNvbG9yZWRVcEFycm93IiwicHJlc3NlZFVwQXJyb3ciLCJpbmNvcnJlY3RVcEFycm93IiwidXBBcnJvdyIsImxpZ2h0dXAiLCJsaWdodHVwMiIsImxpZ2h0dXAzIiwibGlnaHR1cDQiLCJMRUZUIiwiRE9XTiIsIlVQIiwiUklHSFQiLCJpbmNvcnJlY3QiLCJpbmNvcnJlY3QyIiwiaW5jb3JyZWN0MyIsImluY29ycmVjdDQiLCJwb2ludHMiLCJoYW5kbGVQcmVzcyIsInRleHQiLCJhbHBoYSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJmaWxsU3R5bGUiLCJmb250IiwiZmlsbFRleHQiLCJjbGVhckludGVydmFsIiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwic2V0VGltZW91dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJhckhlaWdodCIsIngiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsInIiLCJnIiwiYiIsImJhcnMiLCJxdWFydGVyTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwibmV3QXJyIiwiaiIsInN1YkFyciIsImkiLCJmaWxsUmVjdCIsImNvdW50IiwiY291bnQyIiwiY291bnQzIiwiY291bnQ0IiwiZHJhd0NvbG9yZWQiLCJkcmF3Tm9ybWFsIiwiZHJhd1ByZXNzZWQiLCJkcmF3SW5jb3JyZWN0IiwiZGlzcGxheVBvaW50cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBQ0E7Ozs7Ozs7O0FBRUFBLE9BQU9DLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hELE1BQU1DLFFBQVEsSUFBSUMsS0FBSixDQUFVQyxRQUFWLENBQWQ7QUFDQUYsUUFBTUcsZ0JBQU47QUFDQUgsUUFBTUksU0FBTjtBQUNELENBSkQ7O0lBTU1ILEs7QUFDSixpQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtHLGtCQUFMLEdBQTBCSCxTQUFT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LEtBQUtKLFFBQW5DLEVBQTZDO0FBQzNDLGlCQUFLVCxVQUFMLENBQWdCMEQsYUFBaEI7QUFDRDtBQUNGOztBQUVELGFBQUs1QyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLElBQWxCOztBQUVBLGFBQUswQyxhQUFMLENBQW1CLEtBQUt6QyxNQUF4QjtBQUNEO0FBQ0Y7Ozs7OztrQkFHWTdCLFU7Ozs7Ozs7Ozs7O0FDcFRmLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zY3NzL21haW4uc2NzcydcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGludHJvID0gbmV3IEludHJvKGRvY3VtZW50KTtcbiAgaW50cm8ubG9hZEluc3RydWN0aW9ucygpO1xuICBpbnRyby5zdGFydEdhbWUoKTtcbn0pXG5cbmNsYXNzIEludHJvIHtcbiAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW4taW5zdHJ1Y3Rpb25zXCIpO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvbnNcIik7XG4gICAgdGhpcy5jbG9zZUluc3RydWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtaW5zdHJ1Y3Rpb25zXCIpO1xuICAgIHRoaXMuY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcbiAgICB0aGlzLmNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW4tY29udGFjdFwiKTtcbiAgICB0aGlzLmNsb3NlQ29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtY29udGFjdFwiKTtcblxuICAgIHRoaXMuY2xvc2VJbnN0cnVjdGlvbnMub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhY3RCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2VDb250YWN0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmluc3RydWN0aW9ucykge1xuICAgICAgICB0aGlzLmluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuY29udGFjdCkge1xuICAgICAgICB0aGlzLmNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoaXMuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVQcmVzcyk7XG4gIH1cblxuICBsb2FkSW5zdHJ1Y3Rpb25zKCkge1xuICAgIC8vIGNvbnN0IGluc3RydWN0aW9ucyA9IHRoaXMuaW5zdHJ1Y3Rpb25zO1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgdGhpcy5pbnN0cnVjdGlvbnNCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAvLyB0aGlzLmluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgdGhpcy5pbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgdGhpcy5pbnN0cnVjdGlvbnNCdXR0b24uY2xpY2soKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICByZXR1cm4gbmV3IEdhbWUoKTtcbiAgfVxufSIsImNsYXNzIERvd25BcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzM2NSwgMTBdO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5jb2xvcmVkRG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLnByZXNzZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMuaW5jb3JyZWN0RG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3REb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9kb3duX2Fycm93LnBuZ1wiXG5cbiAgICB0aGlzLmRvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9kb3duX2Fycm93LnBuZ1wiO1xuICB9XG5cbiAgZHJhd0NvbG9yZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY29sb3JlZERvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZERvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdJbmNvcnJlY3QoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5jb3JyZWN0RG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvd25BcnJvdzsiLCJpbXBvcnQgVmlzdWFsaXplciBmcm9tICcuL3Zpc3VhbGl6ZXInO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmRlbW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gICAgdGhpcy5maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlXCIpO1xuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICBkZW1vLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBhdWRpby5zcmMgPSBcInNyYy9hc3NldHMvQ3liZXJwdW5rLm1wM1wiO1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgZmlsZS5vbmNoYW5nZSA9IChlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgLy8gZGVidWdnZXJcbiAgICBjb25zdCBuZXdzb25nID0gZS50YXJnZXQuZmlsZXNbMF1cbiAgICBhdWRpby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ld3NvbmcpO1xuICAgIHRoaXMucGxheSgpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgIGNvbnN0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgIHNyYy5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICBhbmFseXNlci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIGFuYWx5c2VyLmZmdFNpemUgPSAxMDI0O1xuICAgIGNvbnN0IGJ1ZmZlckxlbmd0aCA9IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlckxlbmd0aCk7XG5cbiAgICBjb25zdCBXSURUSCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IEhFSUdIVCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCBiYXJXaWR0aCA9IChXSURUSCAvIGJ1ZmZlckxlbmd0aCkgKiA5OyBcblxuICAgIGNvbnN0IHZpc3VhbGl6ZXIgPSBuZXcgVmlzdWFsaXplcihhbmFseXNlciwgZGF0YUFycmF5LCB0aGlzLmNhbnZhcylcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgdmlzdWFsaXplci5yZW5kZXJGcmFtZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiY2xhc3MgTGVmdEFycm93IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5wb3MgPSBbMTAsIDEwXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuY29sb3JlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY29sb3JlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5wcmVzc2VkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmVzc2VkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLmluY29ycmVjdExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW5jb3JyZWN0TGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfbGVmdF9hcnJvdy5wbmdcIlxuXG4gICAgdGhpcy5sZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmxlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvbGVmdF9hcnJvdy5wbmdcIjtcbiAgfVxuXG4gIGRyYXdDb2xvcmVkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvbG9yZWRMZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3Tm9ybWFsKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdQcmVzc2VkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByZXNzZWRMZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3SW5jb3JyZWN0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluY29ycmVjdExlZnRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWZ0QXJyb3c7IiwiY2xhc3MgUmlnaHRBcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIC8vIHRoaXMucG9zID0gWzExMDAsIDEwXTtcbiAgICB0aGlzLnBvcyA9IFsxMTAwLCAxMF07XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmNvbG9yZWRSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkUmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMucHJlc3NlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5pbmNvcnJlY3RSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3RSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfcmlnaHRfYXJyb3cucG5nXCJcblxuICAgIHRoaXMucmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcmlnaHRfYXJyb3cucG5nXCI7XG4gIH1cblxuICBkcmF3Q29sb3JlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb2xvcmVkUmlnaHRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdQcmVzc2VkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByZXNzZWRSaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd0luY29ycmVjdCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmNvcnJlY3RSaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0QXJyb3c7IiwiY2xhc3MgVXBBcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzcyNiwgMTBdO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5jb2xvcmVkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY29sb3JlZFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfdXBfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLnByZXNzZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmVzc2VkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMuaW5jb3JyZWN0VXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW5jb3JyZWN0VXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X3VwX2Fycm93LnBuZ1wiXG5cbiAgICB0aGlzLnVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3VwX2Fycm93LnBuZ1wiO1xuICB9XG5cbiAgZHJhd0NvbG9yZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY29sb3JlZFVwQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3Tm9ybWFsKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnVwQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3UHJlc3NlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmVzc2VkVXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdJbmNvcnJlY3QoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5jb3JyZWN0VXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcEFycm93OyIsImltcG9ydCBMZWZ0QXJyb3cgZnJvbSAnLi9sZWZ0X2Fycm93JztcbmltcG9ydCBEb3duQXJyb3cgZnJvbSAnLi9kb3duX2Fycm93JztcbmltcG9ydCBVcEFycm93IGZyb20gJy4vdXBfYXJyb3cnO1xuaW1wb3J0IFJpZ2h0QXJyb3cgZnJvbSAnLi9yaWdodF9hcnJvdyc7XG5cbmNsYXNzIFZpc3VhbGl6ZXIge1xuICBjb25zdHJ1Y3RvcihhbmFseXNlciwgZGF0YUFycmF5LCBjYW52YXMpIHtcbiAgICB0aGlzLmFuYWx5c2VyID0gYW5hbHlzZXI7XG4gICAgdGhpcy5kYXRhQXJyYXkgPSBkYXRhQXJyYXk7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5XSURUSCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgIHRoaXMuSEVJR0hUID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gdGhpcy5hbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICB0aGlzLmJhcldpZHRoID0gKHRoaXMuV0lEVEggLyB0aGlzLmJ1ZmZlckxlbmd0aCkgKiA5OyBcblxuICAgIHRoaXMubGVmdEFycm93ID0gbmV3IExlZnRBcnJvdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5kb3duQXJyb3cgPSBuZXcgRG93bkFycm93KHRoaXMuY3R4KTtcbiAgICB0aGlzLnVwQXJyb3cgPSBuZXcgVXBBcnJvdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5yaWdodEFycm93ID0gbmV3IFJpZ2h0QXJyb3codGhpcy5jdHgpO1xuXG4gICAgdGhpcy5saWdodHVwID0gZmFsc2U7XG4gICAgdGhpcy5saWdodHVwMiA9IGZhbHNlO1xuICAgIHRoaXMubGlnaHR1cDMgPSBmYWxzZTtcbiAgICB0aGlzLmxpZ2h0dXA0ID0gZmFsc2U7XG5cbiAgICB0aGlzLkxFRlQgPSBmYWxzZTtcbiAgICB0aGlzLkRPV04gPSBmYWxzZTtcbiAgICB0aGlzLlVQID0gZmFsc2U7XG4gICAgdGhpcy5SSUdIVCA9IGZhbHNlO1xuXG4gICAgdGhpcy5pbmNvcnJlY3QgPSB0cnVlO1xuICAgIHRoaXMuaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgdGhpcy5pbmNvcnJlY3QzID0gdHJ1ZTtcbiAgICB0aGlzLmluY29ycmVjdDQgPSB0cnVlO1xuXG4gICAgdGhpcy5wb2ludHMgPSAwO1xuICAgIHRoaXMucmVuZGVyRnJhbWUgPSB0aGlzLnJlbmRlckZyYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVQcmVzcyA9IHRoaXMuaGFuZGxlUHJlc3MuYmluZCh0aGlzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZVByZXNzKTtcbiAgfVxuXG4gIGRpc3BsYXlQb2ludHModGV4dCkge1xuICAgIGxldCBhbHBoYSA9IDE7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDsgXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDAsIDE0MCwgXCIgKyBhbHBoYSArIFwiKVwiO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCJib2xkIDI1cHQgQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgNjAwLCA1MCk7XG4gICAgICAgIGFscGhhID0gYWxwaGEgLSAwLjA1OyBcbiAgICAgICAgaWYgKGFscGhhIDwgMCkge1xuICAgICAgICAgIHRoaXMuY3R4LndpZHRoID0gdGhpcy5jdHgud2lkdGg7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDAgLyA2MCk7XG4gIH0gXG5cbiAgaGFuZGxlUHJlc3MoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmIHRoaXMubGlnaHR1cCAmJiB0aGlzLmluY29ycmVjdCkge1xuICAgICAgdGhpcy5wb2ludHMgKz0gMTtcbiAgICAgIHRoaXMuTEVGVCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0ID0gIXRoaXMuaW5jb3JyZWN0O1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmICF0aGlzLmxpZ2h0dXAgJiYgdGhpcy5pbmNvcnJlY3QpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLkxFRlQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLkxFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5pbmNvcnJlY3QgPSAhdGhpcy5pbmNvcnJlY3Q7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgdGhpcy5saWdodHVwMiAmJiB0aGlzLmluY29ycmVjdDIpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLkRPV04gPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLkRPV04gPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwMiA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3QyID0gIXRoaXMuaW5jb3JyZWN0MjtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiAhdGhpcy5saWdodHVwMiAmJiB0aGlzLmluY29ycmVjdDIpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLkRPV04gPSB0cnVlOyBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ET1dOID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MiA9ICF0aGlzLmluY29ycmVjdDI7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzggJiYgdGhpcy5saWdodHVwMyAmJiB0aGlzLmluY29ycmVjdDMpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLlVQID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5VUCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDMgPSAhdGhpcy5pbmNvcnJlY3QzO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmICF0aGlzLmxpZ2h0dXAzICYmIHRoaXMuaW5jb3JyZWN0Mykge1xuICAgICAgdGhpcy5wb2ludHMgLT0gMTtcbiAgICAgIHRoaXMuVVAgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLlVQID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MyA9ICF0aGlzLmluY29ycmVjdDM7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgJiYgdGhpcy5saWdodHVwNCAmJiB0aGlzLmluY29ycmVjdDQpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLlJJR0hUID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5SSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDQgPSAhdGhpcy5pbmNvcnJlY3Q0O1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM5ICYmICF0aGlzLmxpZ2h0dXA0ICYmIHRoaXMuaW5jb3JyZWN0NCkge1xuICAgICAgdGhpcy5wb2ludHMgLT0gMTtcbiAgICAgIHRoaXMuUklHSFQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLlJJR0hUID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0NCA9ICF0aGlzLmluY29ycmVjdDQ7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRnJhbWUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyRnJhbWUpO1xuICAgIGxldCBiYXJIZWlnaHQ7XG4gICAgbGV0IHggPSAwO1xuXG4gICAgdGhpcy5hbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YSh0aGlzLmRhdGFBcnJheSk7XG4gICAgbGV0IHIsIGcsIGI7XG4gICAgbGV0IGJhcnMgPSA0MDtcblxuICAgIGxldCBxdWFydGVyTGVuZ3RoID0gdGhpcy5kYXRhQXJyYXkubGVuZ3RoIC8gNDtcblxuICAgIGxldCBmaXJzdCA9IHRoaXMuZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgIGxldCBzZWNvbmQgPSB0aGlzLmRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoLCBxdWFydGVyTGVuZ3RoICogMik7XG4gICAgbGV0IHRoaXJkID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDIsIHF1YXJ0ZXJMZW5ndGggKiAzKTtcbiAgICBsZXQgZm91cnRoID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDMsIHF1YXJ0ZXJMZW5ndGggKiA0KTtcbiAgICBcbiAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgXG4gICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpOyBcbiAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IFxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMFxuICAgICAgICAgIGIgPSAxOTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyBcbiAgICAgICAgICByID0gNzFcbiAgICAgICAgICBnID0gNFxuICAgICAgICAgIGIgPSA3MFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7IFxuICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA8IDE5MCkgeyBcbiAgICAgICAgICByID0gMlxuICAgICAgICAgIGcgPSA2NFxuICAgICAgICAgIGIgPSA3OVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7IFxuICAgICAgICAgIHIgPSAyMjNcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDQyXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxNzApIHsgXG4gICAgICAgICAgciA9IDRcbiAgICAgICAgICBnID0gNzFcbiAgICAgICAgICBiID0gOVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gNTApIHsgXG4gICAgICAgICAgciA9IDI1NVxuICAgICAgICAgIGcgPSAxNjRcbiAgICAgICAgICBiID0gMFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldIDwgNTApIHsgXG4gICAgICAgICAgciA9IDcxXG4gICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgYiA9IDRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgsICh0aGlzLkhFSUdIVCAtIGJhckhlaWdodCksIHRoaXMuYmFyV2lkdGgsIGJhckhlaWdodCk7XG5cbiAgICAgICAgeCArPSB0aGlzLmJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbMF1baV0gPiAyNTApIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA+PSA0ICYmIHRoaXMubGlnaHR1cCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXAgPSBmYWxzZSwgNzUwKTtcbiAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudDIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclsxXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbMV1baV0gPiAxOTApIHtcbiAgICAgICAgICAgIGNvdW50MiArPSAxO1xuXG4gICAgICAgICAgICBpZiAoY291bnQyID49IDQgJiYgdGhpcy5saWdodHVwMiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwMiA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saWdodHVwMiA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgIGNvdW50MiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgY291bnQzID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3QXJyWzJdW2ldID4gMTcwKSB7XG4gICAgICAgICAgICBjb3VudDMgKz0gMTtcblxuICAgICAgICAgICAgaWYgKGNvdW50MyA+PSA0ICYmIHRoaXMubGlnaHR1cDMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlnaHR1cDMgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubGlnaHR1cDMgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICBjb3VudDMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudDQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclszXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbM11baV0gPiA1MCkge1xuICAgICAgICAgICAgY291bnQ0ICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudDQgPj0gNCAmJiB0aGlzLmxpZ2h0dXA0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aGlzLmxpZ2h0dXA0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXA0ID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgY291bnQ0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXJpbmcgbGVmdCBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMCAmJiB0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgIXRoaXMubGlnaHR1cCkge1xuICAgICAgICAgIHRoaXMubGVmdEFycm93LmRyYXdOb3JtYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAwICYmIHRoaXMuTEVGVCAmJiB0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3UHJlc3NlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDAgJiYgdGhpcy5MRUZUICYmICF0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFJlbmRlcmluZyBkb3duIGFycm93XG4gICAgICAgIGlmIChqID09PSAxICYmIHRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgIXRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLkRPV04gJiYgdGhpcy5saWdodHVwMikge1xuICAgICAgICAgIHRoaXMuZG93bkFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLkRPV04gJiYgIXRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXJpbmcgdXAgYXJyb3dcbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5saWdodHVwMykge1xuICAgICAgICAgIHRoaXMudXBBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgIXRoaXMubGlnaHR1cDMpIHtcbiAgICAgICAgICB0aGlzLnVwQXJyb3cuZHJhd05vcm1hbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5VUCAmJiB0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMiAmJiB0aGlzLlVQICYmICF0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdJbmNvcnJlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlcmluZyByaWdodCBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLmxpZ2h0dXA0KSB7XG4gICAgICAgICAgdGhpcy5yaWdodEFycm93LmRyYXdDb2xvcmVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiAhdGhpcy5saWdodHVwNCkge1xuICAgICAgICAgIHRoaXMucmlnaHRBcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLlJJR0hUICYmIHRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd1ByZXNzZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAzICYmIHRoaXMuUklHSFQgJiYgIXRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd0luY29ycmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgICB0aGlzLmluY29ycmVjdDMgPSB0cnVlO1xuICAgICAgdGhpcy5pbmNvcnJlY3Q0ID0gdHJ1ZTtcblxuICAgICAgdGhpcy5kaXNwbGF5UG9pbnRzKHRoaXMucG9pbnRzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsaXplcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9