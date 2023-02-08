// Begin Code

// Create Canvas
let canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

// Create Player
let playerX = canvas.width / 2;
let playerY = canvas.height / 2;

// Create FNAF Characters
let fnafCharacters = [];
let fnafImgs = [
  'images/fnaf1.png',
  'images/fnaf2.png',
  'images/fnaf3.png',
  'images/fnaf4.png',
  'images/fnaf5.png'
];

// Create a Function to Create FNAF Characters
function createFNAFCharacters() {
  for (let i = 0; i < 5; i++) {
    let fnafCharacter = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      img: new Image()
    };
    fnafCharacter.img.src = fnafImgs[i];
    fnafCharacters.push(fnafCharacter);
  }
}

// Create a Function to Update FNAF Characters
function updateFNAFCharacters() {
  for (let i = 0; i < fnafCharacters.length; i++) {
    let fnafCharacter = fnafCharacters[i];
    ctx.drawImage(fnafCharacter.img, fnafCharacter.x, fnafCharacter.y);
  }
}

// Create a Function to Move Player
function movePlayer(e) {
  if (e.keyCode === 37) {
    // left
    playerX -= 10;
  } else if (e.keyCode === 38) {
    // up
    playerY -= 10;
  } else if (e.keyCode === 39) {
    // right
    playerX += 10;
  } else if (e.keyCode === 40) {
    // down
    playerY += 10;
  }
}

// Create a Function to Check for Collisions
function checkForCollisions() {
  for (let i = 0; i < fnafCharacters.length; i++) {
    let fnafCharacter = fnafCharacters[i];
    if (
      playerX < fnafCharacter.x + 40 &&
      playerX + 40 > fnafCharacter.x &&
      playerY < fnafCharacter.y + 40 &&
      playerY + 40 > fnafCharacter.y
    ) {
      console.log('Game Over!');
    }
  }
}

// Create a Function to Draw Player
function drawPlayer() {
  ctx.fillStyle = 'red';
  ctx.fillRect(playerX, playerY, 40, 40);
}

// Create a Function to Render the Scene
function render() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player
  drawPlayer();

  // Draw the FNAF Characters
  updateFNAFCharacters();

  // Check for collisions
  checkForCollisions();

  // Request another frame
  requestAnimationFrame(render);
}

// Create Event Listeners
document.addEventListener('keydown', movePlayer);

// Create FNAF Characters
createFNAFCharacters();

// Start Rendering
render();

// End Code
