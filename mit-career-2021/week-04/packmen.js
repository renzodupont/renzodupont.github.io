let pacManPosition = {
  positionX: 40,
  positionY: 40,
  degrees: 0,
};
let availableDirections = {
  left: "left",
  right: "right",
  up: "up",
  down: "down",
};

const pacArrayRight = ["./images/PacMan1.png", "./images/PacMan2.png"];
const pacArrayLeft = ["./images/PacMan3.png", "./images/PacMan4.png"];
const innerBorders = document.querySelectorAll(".inner-border");
let moveBy = 15;
let imageArrayIndex = 0; // If mouth is opened or closed - 0 is closed, 1 is opened

// Function to move the Pac Man image to a new position base on the direction provided
const move = (direction) => {
  let img = document.getElementById("pacman");
  let positionX = pacManPosition.positionX;
  let positionY = pacManPosition.positionY;

  //Calculates the new position based on the movement direction
  if (direction === "right") positionX += moveBy;
  else if (direction === "left") positionX -= moveBy;
  else if (direction === "up") positionY -= moveBy;
  else positionY += moveBy;

  if (canMoveThere(positionX, positionY, img.width)) {
    pacManPosition.positionX = positionX;
    pacManPosition.positionY = positionY;

    imageArrayIndex = (imageArrayIndex + 1) % 2; // 1 % 2 = 1, 0 % 2 = 0

    if (direction === "right" || direction === "up" || direction === "down")
      img.src = pacArrayRight[imageArrayIndex];
    else img.src = pacArrayLeft[imageArrayIndex];

    $(img).animate(
      { left: pacManPosition.positionX, top: pacManPosition.positionY },
      10
    );
  }
};

// Checks if the position we want to move the Pac Mac is inside the bounderies
const canMoveThere = (positionX, positionY, imgWidth) => {
  return !(
    checkEdgeCollision(positionX, positionY, imgWidth) ||
    checkBordersCollision(positionX, positionY, imgWidth)
  );
};

const checkEdgeCollision = (positionX, positionY, imgWidth) => {
  return (
    positionX < 11 ||
    positionY < 11 ||
    positionY + imgWidth > window.innerHeight - 11 ||
    positionX + imgWidth > window.innerWidth - 11
  );
};

const checkBordersCollision = (positionX, positionY, imgWidth) => {
  for (let innerBorder of innerBorders) {
    if (
      positionX + imgWidth > innerBorder.offsetLeft &&
      positionX < innerBorder.offsetLeft + innerBorder.offsetWidth &&
      positionY + imgWidth > innerBorder.offsetTop &&
      positionY < innerBorder.offsetTop + innerBorder.offsetHeight
    ) {
      return true;
    }
  }
  return false;
};

// Rotates the image on new keydown events
const rotateImage = (moveToDegrees) => {
  if (pacManPosition.degrees !== moveToDegrees) {
    let img = document.getElementById("pacman");
    img.style.transform = "rotate(" + moveToDegrees + "deg)";
    pacManPosition.degrees = moveToDegrees;
  }
};

// This function catches the key code and moves the image accordingly
const movePacMan = (e) => {
  switch (e.keyCode) {
    case 37:
      move(availableDirections.left);
      rotateImage(0);
      break;
    case 38:
      move(availableDirections.up);
      rotateImage(270);
      break;
    case 39:
      move(availableDirections.right);
      rotateImage(0);
      break;
    case 40:
      move(availableDirections.down);
      rotateImage(90);
      break;
    default:
      break;
  }
};

// Keydown event initialize
window.onload = function () {
  window.addEventListener("keydown", (event) => {
    movePacMan(event);
  });
};
