const pacMan = document.getElementById("pacMan");
const coolGuy = document.getElementById("coolGuy");
function startMove(e) {
  moveCool();
  let startContent = document.getElementById("startContent");
  startContent.style.transition = "2s";
  startContent.style.opacity = "0";
  setInterval(() => {
    startContent.style.display = "none";
  }, 2000);
  if (e == "ArrowRight") {
    moveRight();
  } else if (e == "ArrowLeft") {
    moveLeft();
  } else if (e == "ArrowUp") {
    moveTop();
  } else if (e == "ArrowDown") {
    moveDown();
  }
}
function moveRight() {
  pacMan.style.transform = "rotate(0deg)";
  pacMan.style.transition = "0.06s ease-in";
  let info = pacMan.style.left;
  info = parseInt(info) + 10;
  if (info >= document.body.clientWidth) {
    console.log("right");
    return;
  }
  info = info + "px";
  pacMan.style.left = info;
}
function moveLeft() {
  pacMan.style.transform = "rotateY(180deg)";
  pacMan.style.transition = "0.06s ease-in";
  let info = pacMan.style.left;
  info = parseInt(info) + -10;
  if (info == 0) {
    console.log("Left");
    return;
  }
  info = info + "px";
  pacMan.style.left = info;
}
function moveTop() {
  pacMan.style.transform = "rotate(-90deg)";
  pacMan.style.transition = "0.06s ease-in";
  let info = pacMan.style.top;
  info = parseInt(info) + -10;
  if (info == 0) {
    console.log("Top");
    return;
  }
  info = info + "px";

  pacMan.style.top = info;
}
function moveDown() {
  pacMan.style.transform = "rotate(90deg)";
  pacMan.style.transition = "0.06s ease-in";
  let info = pacMan.style.top;
  info = parseInt(info) + 10;
  if (info >= document.body.clientHeight) {
    return;
  }
  info = info + "px";
  pacMan.style.top = info;
}

function moveCool() {
  for (let i = 0; i < Infinity; i++) {
    let info = coolGuy.style.top;
    info = parseInt(info) + 10;
    coolGuy.style.transition = "2s";
    if (coolGuy.style.top == pacMan.style.top) {
      break;
    }
    info = info + "px";
    coolGuy.style.top = pacMan.style.top;
  }
  for (let i = 0; i < Infinity; i++) {
    let info = coolGuy.style.left;
    info = parseInt(info) + 10;
    coolGuy.style.transition = "2s";
    if (coolGuy.style.left == pacMan.style.left) {
      break;
    }
    info = info + "px";
    coolGuy.style.left = pacMan.style.left;
  }
}
