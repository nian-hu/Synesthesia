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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb3duX2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sZWZ0X2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yaWdodF9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXBfYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnRybyIsIkludHJvIiwiZG9jdW1lbnQiLCJsb2FkSW5zdHJ1Y3Rpb25zIiwic3RhcnRHYW1lIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnN0cnVjdGlvbnMiLCJjbG9zZUluc3RydWN0aW9ucyIsImNvbnRhY3QiLCJjb250YWN0QnV0dG9uIiwiY2xvc2VDb250YWN0Iiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwiY2xpY2siLCJHYW1lIiwiRG93bkFycm93IiwiY3R4IiwicG9zIiwiY29sb3JlZERvd25BcnJvdyIsIkltYWdlIiwic3JjIiwicHJlc3NlZERvd25BcnJvdyIsImluY29ycmVjdERvd25BcnJvdyIsImRvd25BcnJvdyIsImRyYXdJbWFnZSIsImNhbnZhcyIsImRlbW8iLCJmaWxlIiwiYXVkaW8iLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwicGxheSIsIm9uY2hhbmdlIiwiZSIsIm5ld3NvbmciLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsIldJRFRIIiwiSEVJR0hUIiwiYmFyV2lkdGgiLCJ2aXN1YWxpemVyIiwiVmlzdWFsaXplciIsInJlbmRlckZyYW1lIiwiTGVmdEFycm93IiwiY29sb3JlZExlZnRBcnJvdyIsInByZXNzZWRMZWZ0QXJyb3ciLCJpbmNvcnJlY3RMZWZ0QXJyb3ciLCJsZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiY29sb3JlZFJpZ2h0QXJyb3ciLCJwcmVzc2VkUmlnaHRBcnJvdyIsImluY29ycmVjdFJpZ2h0QXJyb3ciLCJyaWdodEFycm93IiwiVXBBcnJvdyIsImNvbG9yZWRVcEFycm93IiwicHJlc3NlZFVwQXJyb3ciLCJpbmNvcnJlY3RVcEFycm93IiwidXBBcnJvdyIsImxpZ2h0dXAiLCJsaWdodHVwMiIsImxpZ2h0dXAzIiwibGlnaHR1cDQiLCJMRUZUIiwiRE9XTiIsIlVQIiwiUklHSFQiLCJpbmNvcnJlY3QiLCJpbmNvcnJlY3QyIiwiaW5jb3JyZWN0MyIsImluY29ycmVjdDQiLCJwb2ludHMiLCJoYW5kbGVQcmVzcyIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsInNldFRpbWVvdXQiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmb250IiwiZmlsbFRleHQiLCJiYXJIZWlnaHQiLCJ4IiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJyIiwiZyIsImIiLCJiYXJzIiwicXVhcnRlckxlbmd0aCIsImZpcnN0Iiwic2xpY2UiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsIm5ld0FyciIsImoiLCJsZW5ndGgiLCJzdWJBcnIiLCJpIiwiZmlsbFJlY3QiLCJjb3VudCIsImNvdW50MiIsImNvdW50MyIsImNvdW50NCIsImRyYXdDb2xvcmVkIiwiZHJhd05vcm1hbCIsImRyYXdQcmVzc2VkIiwiZHJhd0luY29ycmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBQ0E7Ozs7Ozs7O0FBRUFBLE9BQU9DLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hELE1BQU1DLFFBQVEsSUFBSUMsS0FBSixDQUFVQyxRQUFWLENBQWQ7QUFDQUYsUUFBTUcsZ0JBQU47QUFDQUgsUUFBTUksU0FBTjtBQUNELENBSkQ7O0lBTU1ILEs7QUFDSixpQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtHLGtCQUFMLEdBQTBCSCxTQUFTSSxjQUFULENBQXdCLG1CQUF4QixDQUExQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JMLFNBQVNJLGNBQVQs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S0gsT0FBTCxDQUFhOEMsVUFBYjtBQUNEOztBQUVELGNBQUlWLE1BQU0sQ0FBTixJQUFXLEtBQUs3QixFQUFoQixJQUFzQixLQUFLSixRQUEvQixFQUF5QztBQUN2QyxpQkFBS0gsT0FBTCxDQUFhK0MsV0FBYjtBQUNEOztBQUVELGNBQUlYLE1BQU0sQ0FBTixJQUFXLEtBQUs3QixFQUFoQixJQUFzQixDQUFDLEtBQUtKLFFBQWhDLEVBQTBDO0FBQ3hDLGlCQUFLSCxPQUFMLENBQWFnRCxhQUFiO0FBQ0Q7O0FBRUQ7QUFDQSxjQUFJWixNQUFNLENBQU4sSUFBVyxLQUFLaEMsUUFBcEIsRUFBOEI7QUFDNUIsaUJBQUtULFVBQUwsQ0FBZ0JrRCxXQUFoQjtBQUNELFdBRkQsTUFFTyxJQUFJVCxNQUFNLENBQU4sSUFBVyxDQUFDLEtBQUtoQyxRQUFyQixFQUErQjtBQUNwQyxpQkFBS1QsVUFBTCxDQUFnQm1ELFVBQWhCO0FBQ0Q7O0FBRUQsY0FBSVYsTUFBTSxDQUFOLElBQVcsS0FBSzVCLEtBQWhCLElBQXlCLEtBQUtKLFFBQWxDLEVBQTRDO0FBQzFDLGlCQUFLVCxVQUFMLENBQWdCb0QsV0FBaEI7QUFDRDs7QUFFRCxjQUFJWCxNQUFNLENBQU4sSUFBVyxLQUFLNUIsS0FBaEIsSUFBeUIsQ0FBQyxLQUFLSixRQUFuQyxFQUE2QztBQUMzQyxpQkFBS1QsVUFBTCxDQUFnQnFELGFBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFLdkMsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNEOztBQUVEcUMsNEJBQXNCLEtBQUtoRSxXQUEzQjtBQUNEOzs7Ozs7a0JBR1lELFU7Ozs7Ozs7Ozs7O0FDMVNmLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zY3NzL21haW4uc2NzcydcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGludHJvID0gbmV3IEludHJvKGRvY3VtZW50KTtcbiAgaW50cm8ubG9hZEluc3RydWN0aW9ucygpO1xuICBpbnRyby5zdGFydEdhbWUoKTtcbn0pXG5cbmNsYXNzIEludHJvIHtcbiAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW4taW5zdHJ1Y3Rpb25zXCIpO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvbnNcIik7XG4gICAgdGhpcy5jbG9zZUluc3RydWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtaW5zdHJ1Y3Rpb25zXCIpO1xuICAgIHRoaXMuY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcbiAgICB0aGlzLmNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW4tY29udGFjdFwiKTtcbiAgICB0aGlzLmNsb3NlQ29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtY29udGFjdFwiKTtcblxuICAgIHRoaXMuY2xvc2VJbnN0cnVjdGlvbnMub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhY3RCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuY29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2VDb250YWN0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmluc3RydWN0aW9ucykge1xuICAgICAgICB0aGlzLmluc3RydWN0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuY29udGFjdCkge1xuICAgICAgICB0aGlzLmNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWRJbnN0cnVjdGlvbnMoKSB7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnNCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zQnV0dG9uLmNsaWNrKCk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBHYW1lKCk7XG4gIH1cbn0iLCJjbGFzcyBEb3duQXJyb3cge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLnBvcyA9IFszNjUsIDEwXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuY29sb3JlZERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY29sb3JlZERvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF9kb3duX2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5wcmVzc2VkRG93bkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmVzc2VkRG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX2Rvd25fYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLmluY29ycmVjdERvd25BcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW5jb3JyZWN0RG93bkFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfZG93bl9hcnJvdy5wbmdcIlxuXG4gICAgdGhpcy5kb3duQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmRvd25BcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvZG93bl9hcnJvdy5wbmdcIjtcbiAgfVxuXG4gIGRyYXdDb2xvcmVkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvbG9yZWREb3duQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3Tm9ybWFsKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmRvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdQcmVzc2VkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByZXNzZWREb3duQXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3SW5jb3JyZWN0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluY29ycmVjdERvd25BcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb3duQXJyb3c7IiwiaW1wb3J0IFZpc3VhbGl6ZXIgZnJvbSAnLi92aXN1YWxpemVyJztcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5kZW1vID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpO1xuICAgIHRoaXMuZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZVwiKTtcbiAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgZGVtby5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgYXVkaW8uc3JjID0gXCJzcmMvYXNzZXRzL0N5YmVycHVuay5tcDNcIjtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIGZpbGUub25jaGFuZ2UgPSAoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IG5ld3NvbmcgPSBlLnRhcmdldC5maWxlc1swXVxuICAgIGF1ZGlvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3c29uZyk7XG4gICAgdGhpcy5wbGF5KCk7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGxldCBzcmMgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG4gICAgY29uc3QgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XG4gICAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcblxuICAgIGNvbnN0IFdJRFRIID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgY29uc3QgSEVJR0hUID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoKSAqIDk7IFxuXG4gICAgY29uc3QgdmlzdWFsaXplciA9IG5ldyBWaXN1YWxpemVyKGFuYWx5c2VyLCBkYXRhQXJyYXksIHRoaXMuY2FudmFzKVxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICB2aXN1YWxpemVyLnJlbmRlckZyYW1lKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJjbGFzcyBMZWZ0QXJyb3cge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLnBvcyA9IFsxMCwgMTBdO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5jb2xvcmVkTGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkTGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX2xlZnRfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLnByZXNzZWRMZWZ0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWRMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfbGVmdF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMuaW5jb3JyZWN0TGVmdEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3RMZWZ0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9sZWZ0X2Fycm93LnBuZ1wiXG5cbiAgICB0aGlzLmxlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMubGVmdEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9sZWZ0X2Fycm93LnBuZ1wiO1xuICB9XG5cbiAgZHJhd0NvbG9yZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY29sb3JlZExlZnRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubGVmdEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZExlZnRBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdJbmNvcnJlY3QoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5jb3JyZWN0TGVmdEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlZnRBcnJvdzsiLCJjbGFzcyBSaWdodEFycm93IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgLy8gdGhpcy5wb3MgPSBbMTEwMCwgMTBdO1xuICAgIHRoaXMucG9zID0gWzExMDAsIDEwXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuY29sb3JlZFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNvbG9yZWRSaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9jb2xvcmVkX3JpZ2h0X2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5wcmVzc2VkUmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJlc3NlZFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL3ByZXNzZWRfcmlnaHRfYXJyb3cucG5nXCI7XG5cbiAgICB0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3cuc3JjID0gXCJzcmMvYXNzZXRzL2luY29ycmVjdF9yaWdodF9hcnJvdy5wbmdcIlxuXG4gICAgdGhpcy5yaWdodEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5yaWdodEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9yaWdodF9hcnJvdy5wbmdcIjtcbiAgfVxuXG4gIGRyYXdDb2xvcmVkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvbG9yZWRSaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd05vcm1hbCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd1ByZXNzZWQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJlc3NlZFJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cblxuICBkcmF3SW5jb3JyZWN0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluY29ycmVjdFJpZ2h0QXJyb3csIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRBcnJvdzsiLCJjbGFzcyBVcEFycm93IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5wb3MgPSBbNzI2LCAxMF07XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmNvbG9yZWRVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jb2xvcmVkVXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvY29sb3JlZF91cF9hcnJvdy5wbmdcIjtcblxuICAgIHRoaXMucHJlc3NlZFVwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByZXNzZWRVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9wcmVzc2VkX3VwX2Fycm93LnBuZ1wiO1xuXG4gICAgdGhpcy5pbmNvcnJlY3RVcEFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbmNvcnJlY3RVcEFycm93LnNyYyA9IFwic3JjL2Fzc2V0cy9pbmNvcnJlY3RfdXBfYXJyb3cucG5nXCJcblxuICAgIHRoaXMudXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMudXBBcnJvdy5zcmMgPSBcInNyYy9hc3NldHMvdXBfYXJyb3cucG5nXCI7XG4gIH1cblxuICBkcmF3Q29sb3JlZCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb2xvcmVkVXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdOb3JtYWwoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMudXBBcnJvdywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKTtcbiAgfVxuXG4gIGRyYXdQcmVzc2VkKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByZXNzZWRVcEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG5cbiAgZHJhd0luY29ycmVjdCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbmNvcnJlY3RVcEFycm93LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwQXJyb3c7IiwiaW1wb3J0IExlZnRBcnJvdyBmcm9tICcuL2xlZnRfYXJyb3cnO1xuaW1wb3J0IERvd25BcnJvdyBmcm9tICcuL2Rvd25fYXJyb3cnO1xuaW1wb3J0IFVwQXJyb3cgZnJvbSAnLi91cF9hcnJvdyc7XG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tICcuL3JpZ2h0X2Fycm93JztcblxuY2xhc3MgVmlzdWFsaXplciB7XG4gIGNvbnN0cnVjdG9yKGFuYWx5c2VyLCBkYXRhQXJyYXksIGNhbnZhcykge1xuICAgIHRoaXMuYW5hbHlzZXIgPSBhbmFseXNlcjtcbiAgICB0aGlzLmRhdGFBcnJheSA9IGRhdGFBcnJheTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLldJRFRIID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgdGhpcy5IRUlHSFQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5idWZmZXJMZW5ndGggPSB0aGlzLmFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIHRoaXMuYmFyV2lkdGggPSAodGhpcy5XSURUSCAvIHRoaXMuYnVmZmVyTGVuZ3RoKSAqIDk7IFxuXG4gICAgdGhpcy5sZWZ0QXJyb3cgPSBuZXcgTGVmdEFycm93KHRoaXMuY3R4KTtcbiAgICB0aGlzLmRvd25BcnJvdyA9IG5ldyBEb3duQXJyb3codGhpcy5jdHgpO1xuICAgIHRoaXMudXBBcnJvdyA9IG5ldyBVcEFycm93KHRoaXMuY3R4KTtcbiAgICB0aGlzLnJpZ2h0QXJyb3cgPSBuZXcgUmlnaHRBcnJvdyh0aGlzLmN0eCk7XG5cbiAgICB0aGlzLmxpZ2h0dXAgPSBmYWxzZTtcbiAgICB0aGlzLmxpZ2h0dXAyID0gZmFsc2U7XG4gICAgdGhpcy5saWdodHVwMyA9IGZhbHNlO1xuICAgIHRoaXMubGlnaHR1cDQgPSBmYWxzZTtcblxuICAgIHRoaXMuTEVGVCA9IGZhbHNlO1xuICAgIHRoaXMuRE9XTiA9IGZhbHNlO1xuICAgIHRoaXMuVVAgPSBmYWxzZTtcbiAgICB0aGlzLlJJR0hUID0gZmFsc2U7XG5cbiAgICB0aGlzLmluY29ycmVjdCA9IHRydWU7XG4gICAgdGhpcy5pbmNvcnJlY3QyID0gdHJ1ZTtcbiAgICB0aGlzLmluY29ycmVjdDMgPSB0cnVlO1xuICAgIHRoaXMuaW5jb3JyZWN0NCA9IHRydWU7XG5cbiAgICB0aGlzLnBvaW50cyA9IDA7XG4gICAgdGhpcy5yZW5kZXJGcmFtZSA9IHRoaXMucmVuZGVyRnJhbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVByZXNzID0gdGhpcy5oYW5kbGVQcmVzcy5iaW5kKHRoaXMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlUHJlc3MpO1xuICB9XG5cbiAgaGFuZGxlUHJlc3MoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmIHRoaXMubGlnaHR1cCAmJiB0aGlzLmluY29ycmVjdCkge1xuICAgICAgdGhpcy5wb2ludHMgKz0gMTtcbiAgICAgIHRoaXMuTEVGVCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuTEVGVCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0ID0gIXRoaXMuaW5jb3JyZWN0O1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM3ICYmICF0aGlzLmxpZ2h0dXAgJiYgdGhpcy5pbmNvcnJlY3QpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLkxFRlQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLkxFRlQgPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5pbmNvcnJlY3QgPSAhdGhpcy5pbmNvcnJlY3Q7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgdGhpcy5saWdodHVwMiAmJiB0aGlzLmluY29ycmVjdDIpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLkRPV04gPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLkRPV04gPSBmYWxzZSwgMjUwKVxuICAgICAgdGhpcy5saWdodHVwMiA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmNvcnJlY3QyID0gIXRoaXMuaW5jb3JyZWN0MjtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiAhdGhpcy5saWdodHVwMiAmJiB0aGlzLmluY29ycmVjdDIpIHtcbiAgICAgIHRoaXMucG9pbnRzIC09IDE7XG4gICAgICB0aGlzLkRPV04gPSB0cnVlOyBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ET1dOID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MiA9ICF0aGlzLmluY29ycmVjdDI7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzggJiYgdGhpcy5saWdodHVwMyAmJiB0aGlzLmluY29ycmVjdDMpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLlVQID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5VUCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXAzID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDMgPSAhdGhpcy5pbmNvcnJlY3QzO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM4ICYmICF0aGlzLmxpZ2h0dXAzICYmIHRoaXMuaW5jb3JyZWN0Mykge1xuICAgICAgdGhpcy5wb2ludHMgLT0gMTtcbiAgICAgIHRoaXMuVVAgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLlVQID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0MyA9ICF0aGlzLmluY29ycmVjdDM7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgJiYgdGhpcy5saWdodHVwNCAmJiB0aGlzLmluY29ycmVjdDQpIHtcbiAgICAgIHRoaXMucG9pbnRzICs9IDE7XG4gICAgICB0aGlzLlJJR0hUID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5SSUdIVCA9IGZhbHNlLCAyNTApXG4gICAgICB0aGlzLmxpZ2h0dXA0ID0gZmFsc2U7XG4gICAgICB0aGlzLmluY29ycmVjdDQgPSAhdGhpcy5pbmNvcnJlY3Q0O1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDM5ICYmICF0aGlzLmxpZ2h0dXA0ICYmIHRoaXMuaW5jb3JyZWN0NCkge1xuICAgICAgdGhpcy5wb2ludHMgLT0gMTtcbiAgICAgIHRoaXMuUklHSFQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLlJJR0hUID0gZmFsc2UsIDI1MClcbiAgICAgIHRoaXMubGlnaHR1cDQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0NCA9ICF0aGlzLmluY29ycmVjdDQ7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRnJhbWUoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDAsIDE0MCwgXCIgKyAxICsgXCIpXCI7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiYm9sZCAyNXB0IEFyaWFsXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5wb2ludHMsIDYwMCwgNTApO1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgbGV0IGJhckhlaWdodDtcbiAgICBsZXQgeCA9IDA7XG5cbiAgICB0aGlzLmFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKHRoaXMuZGF0YUFycmF5KTtcbiAgICBsZXQgciwgZywgYjtcbiAgICBsZXQgYmFycyA9IDQwO1xuXG4gICAgbGV0IHF1YXJ0ZXJMZW5ndGggPSAxMjg7XG5cbiAgICBsZXQgZmlyc3QgPSB0aGlzLmRhdGFBcnJheS5zbGljZSgwLCBxdWFydGVyTGVuZ3RoKTtcbiAgICBsZXQgc2Vjb25kID0gdGhpcy5kYXRhQXJyYXkuc2xpY2UocXVhcnRlckxlbmd0aCwgcXVhcnRlckxlbmd0aCAqIDIpO1xuICAgIGxldCB0aGlyZCA9IHRoaXMuZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAyLCBxdWFydGVyTGVuZ3RoICogMyk7XG4gICAgbGV0IGZvdXJ0aCA9IHRoaXMuZGF0YUFycmF5LnNsaWNlKHF1YXJ0ZXJMZW5ndGggKiAzLCBxdWFydGVyTGVuZ3RoICogNCk7XG4gICAgXG4gICAgbGV0IG5ld0FyciA9IFtmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoXTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3QXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgc3ViQXJyID0gbmV3QXJyW2pdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IFxuICAgICAgICBiYXJIZWlnaHQgPSAoc3ViQXJyW2ldICogMi41KTsgXG4gICAgICAgIGlmIChqID09PSAwICYmIHN1YkFycltpXSA+IDI1MCkgeyBcbiAgICAgICAgICByID0gMjU1XG4gICAgICAgICAgZyA9IDBcbiAgICAgICAgICBiID0gMTkxXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMCAmJiBzdWJBcnJbaV0gPCAyNTApIHsgXG4gICAgICAgICAgciA9IDcxXG4gICAgICAgICAgZyA9IDRcbiAgICAgICAgICBiID0gNzBcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmIHN1YkFycltpXSA+IDE5MCkgeyBcbiAgICAgICAgICByID0gMFxuICAgICAgICAgIGcgPSAyNTVcbiAgICAgICAgICBiID0gMjUxXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PT0gMSAmJiBzdWJBcnJbaV0gPCAxOTApIHsgXG4gICAgICAgICAgciA9IDJcbiAgICAgICAgICBnID0gNjRcbiAgICAgICAgICBiID0gNzlcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmIHN1YkFycltpXSA+IDE3MCkgeyBcbiAgICAgICAgICByID0gMjIzXG4gICAgICAgICAgZyA9IDI1NVxuICAgICAgICAgIGIgPSA0MlxuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDIgJiYgc3ViQXJyW2ldIDwgMTcwKSB7IFxuICAgICAgICAgIHIgPSA0XG4gICAgICAgICAgZyA9IDcxXG4gICAgICAgICAgYiA9IDlcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA+IDUwKSB7IFxuICAgICAgICAgIHIgPSAyNTVcbiAgICAgICAgICBnID0gMTY0XG4gICAgICAgICAgYiA9IDBcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAzICYmIHN1YkFycltpXSA8IDUwKSB7IFxuICAgICAgICAgIHIgPSA3MVxuICAgICAgICAgIGcgPSAxNFxuICAgICAgICAgIGIgPSA0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYHJnYigke3J9LCR7Z30sJHtifSlgO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4LCAodGhpcy5IRUlHSFQgLSBiYXJIZWlnaHQpLCB0aGlzLmJhcldpZHRoLCBiYXJIZWlnaHQpO1xuICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICAgIHggKz0gdGhpcy5iYXJXaWR0aCArIDEwO1xuXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3QXJyWzBdW2ldID4gMjUwKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuXG4gICAgICAgICAgICBpZiAoY291bnQgPj0gNCAmJiB0aGlzLmxpZ2h0dXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlnaHR1cCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saWdodHVwID0gZmFsc2UsIDc1MCk7XG4gICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY291bnQyID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbMV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3QXJyWzFdW2ldID4gMTkwKSB7XG4gICAgICAgICAgICBjb3VudDIgKz0gMTtcblxuICAgICAgICAgICAgaWYgKGNvdW50MiA+PSA0ICYmIHRoaXMubGlnaHR1cDIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlnaHR1cDIgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubGlnaHR1cDIgPSBmYWxzZSwgNzUwKVxuICAgICAgICAgICAgICBjb3VudDIgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGNvdW50MyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyWzJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG5ld0FyclsyXVtpXSA+IDE3MCkge1xuICAgICAgICAgICAgY291bnQzICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjb3VudDMgPj0gNCAmJiB0aGlzLmxpZ2h0dXAzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aGlzLmxpZ2h0dXAzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpZ2h0dXAzID0gZmFsc2UsIDc1MClcbiAgICAgICAgICAgICAgY291bnQzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY291bnQ0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnJbM10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3QXJyWzNdW2ldID4gNTApIHtcbiAgICAgICAgICAgIGNvdW50NCArPSAxO1xuXG4gICAgICAgICAgICBpZiAoY291bnQ0ID49IDQgJiYgdGhpcy5saWdodHVwNCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5saWdodHVwNCA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saWdodHVwNCA9IGZhbHNlLCA3NTApXG4gICAgICAgICAgICAgIGNvdW50NCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVuZGVyaW5nIGxlZnQgYXJyb3dcbiAgICAgICAgaWYgKGogPT09IDAgJiYgdGhpcy5saWdodHVwKSB7XG4gICAgICAgICAgdGhpcy5sZWZ0QXJyb3cuZHJhd0NvbG9yZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmICF0aGlzLmxpZ2h0dXApIHtcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5kcmF3Tm9ybWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMCAmJiB0aGlzLkxFRlQgJiYgdGhpcy5saWdodHVwKSB7XG4gICAgICAgICAgdGhpcy5sZWZ0QXJyb3cuZHJhd1ByZXNzZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAwICYmIHRoaXMuTEVGVCAmJiAhdGhpcy5saWdodHVwKSB7XG4gICAgICAgICAgdGhpcy5sZWZ0QXJyb3cuZHJhd0luY29ycmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBSZW5kZXJpbmcgZG93biBhcnJvd1xuICAgICAgICBpZiAoaiA9PT0gMSAmJiB0aGlzLmxpZ2h0dXAyKSB7XG4gICAgICAgICAgdGhpcy5kb3duQXJyb3cuZHJhd0NvbG9yZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAxICYmICF0aGlzLmxpZ2h0dXAyKSB7XG4gICAgICAgICAgdGhpcy5kb3duQXJyb3cuZHJhd05vcm1hbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDEgJiYgdGhpcy5ET1dOICYmIHRoaXMubGlnaHR1cDIpIHtcbiAgICAgICAgICB0aGlzLmRvd25BcnJvdy5kcmF3UHJlc3NlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDEgJiYgdGhpcy5ET1dOICYmICF0aGlzLmxpZ2h0dXAyKSB7XG4gICAgICAgICAgdGhpcy5kb3duQXJyb3cuZHJhd0luY29ycmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVuZGVyaW5nIHVwIGFycm93XG4gICAgICAgIGlmIChqID09PSAyICYmIHRoaXMubGlnaHR1cDMpIHtcbiAgICAgICAgICB0aGlzLnVwQXJyb3cuZHJhd0NvbG9yZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAyICYmICF0aGlzLmxpZ2h0dXAzKSB7XG4gICAgICAgICAgdGhpcy51cEFycm93LmRyYXdOb3JtYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSAyICYmIHRoaXMuVVAgJiYgdGhpcy5saWdodHVwMykge1xuICAgICAgICAgIHRoaXMudXBBcnJvdy5kcmF3UHJlc3NlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDIgJiYgdGhpcy5VUCAmJiAhdGhpcy5saWdodHVwMykge1xuICAgICAgICAgIHRoaXMudXBBcnJvdy5kcmF3SW5jb3JyZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXJpbmcgcmlnaHQgYXJyb3dcbiAgICAgICAgaWYgKGogPT09IDMgJiYgdGhpcy5saWdodHVwNCkge1xuICAgICAgICAgIHRoaXMucmlnaHRBcnJvdy5kcmF3Q29sb3JlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGogPT09IDMgJiYgIXRoaXMubGlnaHR1cDQpIHtcbiAgICAgICAgICB0aGlzLnJpZ2h0QXJyb3cuZHJhd05vcm1hbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IDMgJiYgdGhpcy5SSUdIVCAmJiB0aGlzLmxpZ2h0dXA0KSB7XG4gICAgICAgICAgdGhpcy5yaWdodEFycm93LmRyYXdQcmVzc2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMyAmJiB0aGlzLlJJR0hUICYmICF0aGlzLmxpZ2h0dXA0KSB7XG4gICAgICAgICAgdGhpcy5yaWdodEFycm93LmRyYXdJbmNvcnJlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluY29ycmVjdCA9IHRydWU7XG4gICAgICB0aGlzLmluY29ycmVjdDIgPSB0cnVlO1xuICAgICAgdGhpcy5pbmNvcnJlY3QzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5jb3JyZWN0NCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyRnJhbWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbGl6ZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==