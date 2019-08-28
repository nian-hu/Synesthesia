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
    value: function renderFrame() {
      var _this2 = this;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "rgba(255, 0, 140, " + 1 + ")";
      this.ctx.font = "bold 25pt Arial";
      this.ctx.fillText(this.points, 600, 50);
      // debugger
      var barHeight = void 0;
      var x = 0;

      this.analyser.getByteFrequencyData(this.dataArray);
      var r = void 0,
          g = void 0,
          b = void 0;
      var bars = 40;

      var quarterLength = 128;

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
          debugger;

          x += this.barWidth + 10;

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
      }

      requestAnimationFrame(this.renderFrame);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb3duX2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sZWZ0X2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yaWdodF9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXBfYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzM3MWYiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImludHJvIiwiSW50cm8iLCJkb2N1bWVudCIsImxvYWRJbnN0cnVjdGlvbnMiLCJzdGFydEdhbWUiLCJpbnN0cnVjdGlvbnNCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsImluc3RydWN0aW9ucyIsImNsb3NlSW5zdHJ1Y3Rpb25zIiwiY29udGFjdCIsImNvbnRhY3RCdXR0b24iLCJjbG9zZUNvbnRhY3QiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwiZXZlbnQiLCJ0YXJnZXQiLCJjbGljayIsIkdhbWUiLCJEb3duQXJyb3ciLCJjdHgiLCJwb3MiLCJjb2xvcmVkRG93bkFycm93IiwiSW1hZ2UiLCJzcmMiLCJwcmVzc2VkRG93bkFycm93IiwiaW5jb3JyZWN0RG93bkFycm93IiwiZG93bkFycm93IiwiZHJhd0ltYWdlIiwiY2FudmFzIiwiZGVtbyIsImZpbGUiLCJhdWRpbyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJwbGF5Iiwib25jaGFuZ2UiLCJlIiwibmV3c29uZyIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJnZXRDb250ZXh0IiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImFuYWx5c2VyIiwiY3JlYXRlQW5hbHlzZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJmZnRTaXplIiwiYnVmZmVyTGVuZ3RoIiwiZnJlcXVlbmN5QmluQ291bnQiLCJkYXRhQXJyYXkiLCJVaW50OEFycmF5IiwiV0lEVEgiLCJIRUlHSFQiLCJiYXJXaWR0aCIsInZpc3VhbGl6ZXIiLCJWaXN1YWxpemVyIiwicmVuZGVyRnJhbWUiLCJMZWZ0QXJyb3ciLCJjb2xvcmVkTGVmdEFycm93IiwicHJlc3NlZExlZnRBcnJvdyIsImluY29ycmVjdExlZnRBcnJvdyIsImxlZnRBcnJvdyIsIlJpZ2h0QXJyb3ciLCJjb2xvcmVkUmlnaHRBcnJvdyIsInByZXNzZWRSaWdodEFycm93IiwiaW5jb3JyZWN0UmlnaHRBcnJvdyIsInJpZ2h0QXJyb3ciLCJVcEFycm93IiwiY29sb3JlZFVwQXJyb3ciLCJwcmVzc2VkVXBBcnJvdyIsImluY29ycmVjdFVwQXJyb3ciLCJ1cEFycm93IiwibGlnaHR1cCIsImxpZ2h0dXAyIiwibGlnaHR1cDMiLCJsaWdodHVwNCIsIkxFRlQiLCJET1dOIiwiVVAiLCJSSUdIVCIsImluY29ycmVjdCIsImluY29ycmVjdDIiLCJpbmNvcnJlY3QzIiwiaW5jb3JyZWN0NCIsInBvaW50cyIsImhhbmRsZVByZXNzIiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwic2V0VGltZW91dCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZvbnQiLCJmaWxsVGV4dCIsImJhckhlaWdodCIsIngiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsInIiLCJnIiwiYiIsImJhcnMiLCJxdWFydGVyTGVuZ3RoIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwibmV3QXJyIiwiaiIsImxlbmd0aCIsInN1YkFyciIsImkiLCJmaWxsUmVjdCIsImNvdW50IiwiY291bnQyIiwiY291bnQzIiwiY291bnQ0IiwiZHJhd0NvbG9yZWQiLCJkcmF3Tm9ybWFsIiwiZHJhd1ByZXNzZWQiLCJkcmF3SW5jb3JyZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7Ozs7Ozs7QUFFQUEsT0FBT0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDaEQsTUFBTUMsUUFBUSxJQUFJQyxLQUFKLENBQVVDLFFBQVYsQ0FBZDtBQUNBRixRQUFNRyxnQkFBTjtBQUNBSCxRQUFNSSxTQUFOO0FBQ0QsQ0FKRDs7SUFNTUgsSztBQUNKLGlCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0csa0JBQUwsR0FBMEJILFNBQVNJLGNBQVQsQ0FBd0IsbUJBQXhCLENBQTFCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkwsU0FBU0ks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LGlCQUFLSCxPQUFMLENBQWE4QyxVQUFiO0FBQ0Q7O0FBRUQsY0FBSVYsTUFBTSxDQUFOLElBQVcsS0FBSzdCLEVBQWhCLElBQXNCLEtBQUtKLFFBQS9CLEVBQXlDO0FBQ3ZDLGlCQUFLSCxPQUFMLENBQWErQyxXQUFiO0FBQ0Q7O0FBRUQsY0FBSVgsTUFBTSxDQUFOLElBQVcsS0FBSzdCLEVBQWhCLElBQXNCLENBQUMsS0FBS0osUUFBaEMsRUFBMEM7QUFDeEMsaUJBQUtILE9BQUwsQ0FBYWdELGFBQWI7QUFDRDs7QUFFRDtBQUNBLGNBQUlaLE1BQU0sQ0FBTixJQUFXLEtBQUtoQyxRQUFwQixFQUE4QjtBQUM1QixpQkFBS1QsVUFBTCxDQUFnQmtELFdBQWhCO0FBQ0QsV0FGRCxNQUVPLElBQUlULE1BQU0sQ0FBTixJQUFXLENBQUMsS0FBS2hDLFFBQXJCLEVBQStCO0FBQ3BDLGlCQUFLVCxVQUFMLENBQWdCbUQsVUFBaEI7QUFDRDs7QUFFRCxjQUFJVixNQUFNLENBQU4sSUFBVyxLQUFLNUIsS0FBaEIsSUFBeUIsS0FBS0osUUFBbEMsRUFBNEM7QUFDMUMsaUJBQUtULFVBQUwsQ0FBZ0JvRCxXQUFoQjtBQUNEOztBQUVELGNBQUlYLE1BQU0sQ0FBTixJQUFXLEtBQUs1QixLQUFoQixJQUF5QixDQUFDLEtBQUtKLFFBQW5DLEVBQTZDO0FBQzNDLGlCQUFLVCxVQUFMLENBQWdCcUQsYUFBaEI7QUFDRDtBQUNGOztBQUVELGFBQUt2QyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7O0FBRURxQyw0QkFBc0IsS0FBS2hFLFdBQTNCO0FBQ0Q7Ozs7OztrQkFHWUQsVTs7Ozs7Ozs7Ozs7QUMxU2YsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgaW50cm8gPSBuZXcgSW50cm8oZG9jdW1lbnQpO1xuICBpbnRyby5sb2FkSW5zdHJ1Y3Rpb25zKCk7XG4gIGludHJvLnN0YXJ0R2FtZSgpO1xufSlcblxuY2xhc3MgSW50cm8ge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB0aGlzLmluc3RydWN0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbi1pbnN0cnVjdGlvbnNcIik7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc1wiKTtcbiAgICB0aGlzLmNsb3NlSW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1pbnN0cnVjdGlvbnNcIik7XG4gICAgdGhpcy5jb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuICAgIHRoaXMuY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbi1jb250YWN0XCIpO1xuICAgIHRoaXMuY2xvc2VDb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1jb250YWN0XCIpO1xuXG4gICAgdGhpcy5jbG9zZUluc3RydWN0aW9ucy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHRoaXMuY29udGFjdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5jb250YWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZUNvbnRhY3Qub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5jb250YWN0KSB7XG4gICAgICAgIHRoaXMuY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZEluc3RydWN0aW9ucygpIHtcbiAgICB0aGlzLmluc3RydWN0aW9uc0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0cnVjdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgdGhpcy5pbnN0cnVjdGlvbnNCdXR0b24uY2xpY2soKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICByZXR1cm4gbmV3IEdhbWUoKTtcbiAgfVxufSIsImNsYXNzIERvd25BcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzM2NSwgMTBdO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5jb2xvcmVkRG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLnByZXNzZWREb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWREb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfZG93bl9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMuaW5jb3JyZWN0RG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3REb3duQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9kb3duX2Fycm93LnBuZ1wiXG5cbiAgICB0aGlzLmRvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9kb3duX2Fycm93LnBuZ1wiO1xuICB9XG5cbiAgZHJhd0NvbG9yZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY29sb3JlZERvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZERvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdJbmNvcnJlY3QoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5jb3JyZWN0RG93bkFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvd25BcnJvdzsiLCJpbXBvcnQgVmlzdWFsaXplciBmcm9tICcuL3Zpc3VhbGl6ZXInO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmRlbW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gICAgdGhpcy5maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlXCIpO1xuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICBkZW1vLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBhdWRpby5zcmMgPSBcInNyYy9hc3NldHMvQ3liZXJwdW5rLm1wM1wiO1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgZmlsZS5vbmNoYW5nZSA9IChlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgY29uc3QgbmV3c29uZyA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gICAgYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXdzb25nKTtcbiAgICB0aGlzLnBsYXkoKTtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgbGV0IHNyYyA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbiAgICBjb25zdCBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICBzcmMuY29ubmVjdChhbmFseXNlcik7XG4gICAgYW5hbHlzZXIuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICBhbmFseXNlci5mZnRTaXplID0gMTAyNDtcbiAgICBjb25zdCBidWZmZXJMZW5ndGggPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuXG4gICAgY29uc3QgV0lEVEggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBIRUlHSFQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgYmFyV2lkdGggPSAoV0lEVEggLyBidWZmZXJMZW5ndGgpICogOTsgXG5cbiAgICBjb25zdCB2aXN1YWxpemVyID0gbmV3IFZpc3VhbGl6ZXIoYW5hbHlzZXIsIGRhdGFBcnJheSwgdGhpcy5jYW52YXMpXG4gICAgYXVkaW8ucGxheSgpO1xuICAgIHZpc3VhbGl6ZXIucmVuZGVyRnJhbWUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIExlZnRBcnJvdyB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMucG9zID0gWzEwLCAxMF07XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmNvbG9yZWRMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNvbG9yZWRMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMucHJlc3NlZExlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJlc3NlZExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9sZWZ0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5pbmNvcnJlY3RMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmluY29ycmVjdExlZnRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X2xlZnRfYXJyb3cucG5nXCJcblxuICAgIHRoaXMubGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5sZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2xlZnRfYXJyb3cucG5nXCI7XG4gIH1cblxuICBkcmF3Q29sb3JlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb2xvcmVkTGVmdEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd05vcm1hbCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3UHJlc3NlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmVzc2VkTGVmdEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd0luY29ycmVjdCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmNvcnJlY3RMZWZ0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVmdEFycm93OyIsImNsYXNzIFJpZ2h0QXJyb3cge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAvLyB0aGlzLnBvcyA9IFsxMTAwLCAxMF07XG4gICAgdGhpcy5wb3MgPSBbMTEwMCwgMTBdO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5jb2xvcmVkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY29sb3JlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2NvbG9yZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLnByZXNzZWRSaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmVzc2VkUmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvcHJlc3NlZF9yaWdodF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMuaW5jb3JyZWN0UmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW5jb3JyZWN0UmlnaHRBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvaW5jb3JyZWN0X3JpZ2h0X2Fycm93LnBuZ1wiXG5cbiAgICB0aGlzLnJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3JpZ2h0X2Fycm93LnBuZ1wiO1xuICB9XG5cbiAgZHJhd0NvbG9yZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY29sb3JlZFJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3Tm9ybWFsKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3UHJlc3NlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmVzc2VkUmlnaHRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdJbmNvcnJlY3QoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5jb3JyZWN0UmlnaHRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSaWdodEFycm93OyIsImNsYXNzIFVwQXJyb3cge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLnBvcyA9IFs3MjYsIDEwXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuY29sb3JlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNvbG9yZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5wcmVzc2VkVXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJlc3NlZFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfdXBfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLmluY29ycmVjdFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmluY29ycmVjdFVwQXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF91cF9hcnJvdy5wbmdcIlxuXG4gICAgdGhpcy51cEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy51cEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy91cF9hcnJvdy5wbmdcIjtcbiAgfVxuXG4gIGRyYXdDb2xvcmVkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvbG9yZWRVcEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd05vcm1hbCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy51cEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZFVwQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3SW5jb3JyZWN0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluY29ycmVjdFVwQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBBcnJvdzsiLCJpbXBvcnQgTGVmdEFycm93IGZyb20gJy4vbGVmdF9hcnJvdyc7XG5pbXBvcnQgRG93bkFycm93IGZyb20gJy4vZG93bl9hcnJvdyc7XG5pbXBvcnQgVXBBcnJvdyBmcm9tICcuL3VwX2Fycm93JztcbmltcG9ydCBSaWdodEFycm93IGZyb20gJy4vcmlnaHRfYXJyb3cnO1xuXG5jbGFzcyBWaXN1YWxpemVyIHtcbiAgY29uc3RydWN0b3IoYW5hbHlzZXIsIGRhdGFBcnJheSwgY2FudmFzKSB7XG4gICAgdGhpcy5hbmFseXNlciA9IGFuYWx5c2VyO1xuICAgIHRoaXMuZGF0YUFycmF5ID0gZGF0YUFycmF5O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuV0lEVEggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB0aGlzLkhFSUdIVCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLmJ1ZmZlckxlbmd0aCA9IHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgdGhpcy5iYXJXaWR0aCA9ICh0aGlzLldJRFRIIC8gdGhpcy5idWZmZXJMZW5ndGgpICogOTsgXG5cbiAgICB0aGlzLmxlZnRBcnJvdyA9IG5ldyBMZWZ0QXJyb3codGhpcy5jdHgpO1xuICAgIHRoaXMuZG93bkFycm93ID0gbmV3IERvd25BcnJvdyh0aGlzLmN0eCk7XG4gICAgdGhpcy51cEFycm93ID0gbmV3IFVwQXJyb3codGhpcy5jdHgpO1xuICAgIHRoaXMucmlnaHRBcnJvdyA9IG5ldyBSaWdodEFycm93KHRoaXMuY3R4KTtcblxuICAgIHRoaXMubGlnaHR1cCA9IGZhbHNlO1xuICAgIHRoaXMubGlnaHR1cDIgPSBmYWxzZTtcbiAgICB0aGlzLmxpZ2h0dXAzID0gZmFsc2U7XG4gICAgdGhpcy5saWdodHVwNCA9IGZhbHNlO1xuXG4gICAgdGhpcy5MRUZUID0gZmFsc2U7XG4gICAgdGhpcy5ET1dOID0gZmFsc2U7XG4gICAgdGhpcy5VUCA9IGZhbHNlO1xuICAgIHRoaXMuUklHSFQgPSBmYWxzZTtcblxuICAgIHRoaXMuaW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICB0aGlzLmluY29ycmVjdDIgPSB0cnVlO1xuICAgIHRoaXMuaW5jb3JyZWN0MyA9IHRydWU7XG4gICAgdGhpcy5pbmNvcnJlY3Q0ID0gdHJ1ZTtcblxuICAgIHRoaXMucG9pbnRzID0gMDtcbiAgICB0aGlzLnJlbmRlckZyYW1lID0gdGhpcy5yZW5kZXJGcmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUHJlc3MgPSB0aGlzLmhhbmRsZVByZXNzLmJpbmQodGhpcyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVQcmVzcyk7XG4gIH1cblxuICBoYW5kbGVQcmVzcyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgdGhpcy5saWdodHVwICYmIHRoaXMuaW5jb3JyZWN0KSB7XG4gICAgICB0aGlzLnBvaW50cyArPSAxO1xuICAgICAgdGhpcy5MRUZUID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5MRUZUID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3QgPSAhdGhpcy5pbmNvcnJlY3Q7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgIXRoaXMubGlnaHR1cCAmJiB0aGlzLmluY29ycmVjdCkge1xuICAgICAgdGhpcy5wb2ludHMgLT0gMTtcbiAgICAgIHRoaXMuTEVGVCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmluY29ycmVjdCA9ICF0aGlzLmluY29ycmVjdDtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiB0aGlzLmxpZ2h0dXAyICYmIHRoaXMuaW5jb3JyZWN0Mikge1xuICAgICAgdGhpcy5wb2ludHMgKz0gMTtcbiAgICAgIHRoaXMuRE9XTiA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuRE9XTiA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAyID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDIgPSAhdGhpcy5pbmNvcnJlY3QyO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDQwICYmICF0aGlzLmxpZ2h0dXAyICYmIHRoaXMuaW5jb3JyZWN0Mikge1xuICAgICAgdGhpcy5wb2ludHMgLT0gMTtcbiAgICAgIHRoaXMuRE9XTiA9IHRydWU7IFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLkRPV04gPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwMiA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3QyID0gIXRoaXMuaW5jb3JyZWN0MjtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCAmJiB0aGlzLmxpZ2h0dXAzICYmIHRoaXMuaW5jb3JyZWN0Mykge1xuICAgICAgdGhpcy5wb2ludHMgKz0gMTtcbiAgICAgIHRoaXMuVVAgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLlVQID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MyA9ICF0aGlzLmluY29ycmVjdDM7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzggJiYgIXRoaXMubGlnaHR1cDMgJiYgdGhpcy5pbmNvcnJlY3QzKSB7XG4gICAgICB0aGlzLnBvaW50cyAtPSAxO1xuICAgICAgdGhpcy5VUCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuVVAgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwMyA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3QzID0gIXRoaXMuaW5jb3JyZWN0MztcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiB0aGlzLmxpZ2h0dXA0ICYmIHRoaXMuaW5jb3JyZWN0NCkge1xuICAgICAgdGhpcy5wb2ludHMgKz0gMTtcbiAgICAgIHRoaXMuUklHSFQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLlJJR0hUID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0NCA9ICF0aGlzLmluY29ycmVjdDQ7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgJiYgIXRoaXMubGlnaHR1cDQgJiYgdGhpcy5pbmNvcnJlY3Q0KSB7XG4gICAgICB0aGlzLnBvaW50cyAtPSAxO1xuICAgICAgdGhpcy5SSUdIVCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuUklHSFQgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwNCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3Q0ID0gIXRoaXMuaW5jb3JyZWN0NDtcbiAgICB9XG4gIH1cblxuICByZW5kZXJGcmFtZSgpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMCwgMTQwLCBcIiArIDEgKyBcIilcIjtcbiAgICB0aGlzLmN0eC5mb250ID0gXCJib2xkIDI1cHQgQXJpYWxcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnBvaW50cywgNjAwLCA1MCk7XG4gICAgLy8gZGVidWdnZXJcbiAgICBsZXQgYmFySGVpZ2h0O1xuICAgIGxldCB4ID0gMDtcblxuICAgIHRoaXMuYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEodGhpcy5kYXRhQXJyYXkpO1xuICAgIGxldCByLCBnLCBiO1xuICAgIGxldCBiYXJzID0gNDA7XG5cbiAgICBsZXQgcXVhcnRlckxlbmd0aCA9IDEyODtcblxuICAgIGxldCBmaXJzdCA9IHRoaXMuZGF0YUFycmF5LnNsaWNlKDAsIHF1YXJ0ZXJMZW5ndGgpO1xuICAgIGxldCBzZWNvbmQgPSB0aGlzLmRhdGFBcnJheS5zbGljZShxdWFydGVyTGVuZ3RoLCBxdWFydGVyTGVuZ3RoICogMik7XG4gICAgbGV0IHRoaXJkID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDIsIHF1YXJ0ZXJMZW5ndGggKiAzKTtcbiAgICBsZXQgZm91cnRoID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCAqIDMsIHF1YXJ0ZXJMZW5ndGggKiA0KTtcbiAgICBcbiAgICBsZXQgbmV3QXJyID0gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdWJBcnIgPSBuZXdBcnJbal07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgXG4gICAgICAgIGJhckhlaWdodCA9IChzdWJBcnJbaV0gKiAyLjUpOyBcbiAgICAgICAgaWYgKGogPT09IDAgJiYgc3ViQXJyW2ldID4gMjUwKSB7IFxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMFxuICAgICAgICAgIGIgPSAxOTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIHN1YkFycltpXSA8IDI1MCkgeyBcbiAgICAgICAgICByID0gNzFcbiAgICAgICAgICBnID0gNFxuICAgICAgICAgIGIgPSA3MFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgc3ViQXJyW2ldID4gMTkwKSB7IFxuICAgICAgICAgIHIgPSAwXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSAyNTFcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA8IDE5MCkgeyBcbiAgICAgICAgICByID0gMlxuICAgICAgICAgIGcgPSA2NFxuICAgICAgICAgIGIgPSA3OVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldID4gMTcwKSB7IFxuICAgICAgICAgIHIgPSAyMjNcbiAgICAgICAgICBnID0gMjU1XG4gICAgICAgICAgYiA9IDQyXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMiAmJiBzdWJBcnJbaV0gPCAxNzApIHsgXG4gICAgICAgICAgciA9IDRcbiAgICAgICAgICBnID0gNzFcbiAgICAgICAgICBiID0gOVxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldID4gNTApIHsgXG4gICAgICAgICAgciA9IDI1NVxuICAgICAgICAgIGcgPSAxNjRcbiAgICAgICAgICBiID0gMFxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgc3ViQXJyW2ldIDwgNTApIHsgXG4gICAgICAgICAgciA9IDcxXG4gICAgICAgICAgZyA9IDE0XG4gICAgICAgICAgYiA9IDRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgsICh0aGlzLkhFSUdIVCAtIGJhckhlaWdodCksIHRoaXMuYmFyV2lkdGgsIGJhckhlaWdodCk7XG4gICAgICAgIGRlYnVnZ2VyXG5cbiAgICAgICAgeCArPSB0aGlzLmJhcldpZHRoICsgMTA7XG5cbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbMF1baV0gPiAyNTApIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA+PSA0ICYmIHRoaXMubGlnaHR1cCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXAgPSBmYWxzZSwgNzUwKTtcbiAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudDIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclsxXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbMV1baV0gPiAxOTApIHtcbiAgICAgICAgICAgIGNvdW50MiArPSAxO1xuXG4gICAgICAgICAgICBpZiAoY291bnQyID49IDQgJiYgdGhpcy5saWdodHVwMiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwMiA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saWdodHVwMiA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgIGNvdW50MiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgY291bnQzID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3QXJyWzJdW2ldID4gMTcwKSB7XG4gICAgICAgICAgICBjb3VudDMgKz0gMTtcblxuICAgICAgICAgICAgaWYgKGNvdW50MyA+PSA0ICYmIHRoaXMubGlnaHR1cDMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlnaHR1cDMgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubGlnaHR1cDMgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICBjb3VudDMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudDQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0FyclszXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdBcnJbM11baV0gPiA1MCkge1xuICAgICAgICAgICAgY291bnQ0ICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudDQgPj0gNCAmJiB0aGlzLmxpZ2h0dXA0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aGlzLmxpZ2h0dXA0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXA0ID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgY291bnQ0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXJpbmcgbGVmdCBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMCAmJiB0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDAgJiYgIXRoaXMubGlnaHR1cCkge1xuICAgICAgICAgIHRoaXMubGVmdEFycm93LmRyYXdOb3JtYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAwICYmIHRoaXMuTEVGVCAmJiB0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3UHJlc3NlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDAgJiYgdGhpcy5MRUZUICYmICF0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFJlbmRlcmluZyBkb3duIGFycm93XG4gICAgICAgIGlmIChqID09PSAxICYmIHRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDEgJiYgIXRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLkRPV04gJiYgdGhpcy5saWdodHVwMikge1xuICAgICAgICAgIHRoaXMuZG93bkFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLkRPV04gJiYgIXRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXJpbmcgdXAgYXJyb3dcbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5saWdodHVwMykge1xuICAgICAgICAgIHRoaXMudXBBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgIXRoaXMubGlnaHR1cDMpIHtcbiAgICAgICAgICB0aGlzLnVwQXJyb3cuZHJhd05vcm1hbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5VUCAmJiB0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMiAmJiB0aGlzLlVQICYmICF0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdJbmNvcnJlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlcmluZyByaWdodCBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLmxpZ2h0dXA0KSB7XG4gICAgICAgICAgdGhpcy5yaWdodEFycm93LmRyYXdDb2xvcmVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMyAmJiAhdGhpcy5saWdodHVwNCkge1xuICAgICAgICAgIHRoaXMucmlnaHRBcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLlJJR0hUICYmIHRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd1ByZXNzZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAzICYmIHRoaXMuUklHSFQgJiYgIXRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd0luY29ycmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MiA9IHRydWU7XG4gICAgICB0aGlzLmluY29ycmVjdDMgPSB0cnVlO1xuICAgICAgdGhpcy5pbmNvcnJlY3Q0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXJGcmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsaXplcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9