const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = 800;
canvas.height = 600;

let lastTime = 0;

function mainLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    

  requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);
