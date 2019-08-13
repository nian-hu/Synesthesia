window.onload = function () {
  const file = document.getElementById("file-input");
  const canvas = document.getElementById("canvas");
  const audio = document.getElementById("audio");
  drawArrows();

  file.onchange = function () {
    startGame();
  }
}

function drawArrows() {
  
}