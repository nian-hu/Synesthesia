import LeftArrow from './left_arrow';
import DownArrow from './down_arrow';
import UpArrow from './up_arrow';
import RightArrow from './right_arrow';
import Visualizer from './visualizer';

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.demo = document.getElementById("demo");
    this.file = document.getElementById("file");
    this.audio = document.getElementById("audio");

    demo.onclick = function () {
      this.audio.src = "src/assets/Cyberpunk.mp3";
      this.play();
    }

    file.onchange = function () {
      const files = this.files;
      this.audio.src = URL.createObjectURL(files[0]);
      this.play();
    }
  }

  play() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    const ctx = this.canvas.getContext("2d");
    
    const context = new AudioContext();
    let src = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 1024;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const WIDTH = this.canvas.width;
    const HEIGHT = this.canvas.height;
    const barWidth = (WIDTH / bufferLength) * 9; 

    const visualizer = new Visualizer(analyser, dataArray, ctx)
    audio.play();
    visualizer.renderFrame();
  }
}

export default Game;