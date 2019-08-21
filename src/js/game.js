import Visualizer from './visualizer';

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.demo = document.getElementById("demo");
    this.file = document.getElementById("file");
    const audio = document.getElementById("audio");
    this.handleChange = this.handleChange.bind(this);

    demo.onclick = () => {
      audio.src = "src/assets/Cyberpunk.mp3";
      this.play();
    }

    file.onchange = (e) => this.handleChange(e);
  }

  handleChange(e) {
    // debugger
    const newsong = e.target.files[0]
    audio.src = URL.createObjectURL(newsong);
    this.play();
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

    const visualizer = new Visualizer(analyser, dataArray, this.canvas)
    audio.play();
    visualizer.renderFrame();
  }
}

export default Game;