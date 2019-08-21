import './scss/main.scss'
import Game from './js/game';

window.addEventListener("DOMContentLoaded", () => {
  const intro = new Intro(document);
  intro.loadInstructions();
  intro.startGame();
})

class Intro {
  constructor(document) {
    this.document = document;
    this.instructionsButton = document.getElementById("open-instructions");
    this.instructions = document.getElementById("instructions");
    this.closeInstructions = document.getElementById("close-instructions");
    this.contact = document.getElementById("contact");
    this.contactButton = document.getElementById("open-contact");
    this.closeContact = document.getElementById("close-contact");

    this.closeInstructions.onclick = () => {
      this.instructions.style.display = "none";
    }

    this.contactButton.onclick = () => {
      this.contact.style.display = "block";
    }

    this.closeContact.onclick = () => {
      this.contact.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target === this.instructions) {
        this.instructions.style.display = "none";
      }

      if (event.target === this.contact) {
        this.contact.style.display = "none";
      }
    }

    // this.document.addEventListener("keydown", this.handlePress);
  }

  loadInstructions() {
    // const instructions = this.instructions;
    // debugger
    this.instructionsButton.onclick = () => {
      // debugger
      // this.instructions.style.display = "block";
      this.instructions.style.display = "block";
    }
    this.instructionsButton.click();
  }

  startGame() {
    return new Game();
  }
}