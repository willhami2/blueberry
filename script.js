var character = document.getElementById("character");
var game = document.getElementById("game");
var blueberry = document.getElementById("blueberry");
var scoreboard = document.getElementById("scoreboard");
var blueX;
var blueY;
var counter = 0;


function blueberryMove() {
  blueX = Math.floor(Math.random()*20)*20;
  blueY = Math.floor(Math.random()*20)*20;
  blueberry.style.left = blueX + "px";
  blueberry.style.top = blueY + "px";
}

function characterMove() {
  left = Math.floor(Math.random()*20)*20;
  top = Math.floor(Math.random()*20)*20;
  character.style.left = left + "px";
  character.style.top = top + "px";
}

blueberryMove();
document.getElementById("scoreboard").textContent = "Blueberries Eaten: " + counter;



document.addEventListener("keydown", event => {

    if (event.key ==="ArrowDown") {
      var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      if (top < 360) {
        character.style.top = top +20 + "px";
      }
    }

    if (event.key ==="ArrowUp") {
      var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      if (top > -20) {
        character.style.top = top -20 + "px";
      }
    }

    if (event.key ==="ArrowLeft") {
      var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      if (left > 0) {
        character.style.left = left -20 + "px";
      }
    }

    if (event.key ==="ArrowRight") {
      var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      if (left < 380){
        character.style.left = left +20 + "px";
      }

    }

    if (event.key ===" ") {
      var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      var blueLeft = parseInt(window.getComputedStyle(blueberry).getPropertyValue("left"));
      var blueTop = parseInt(window.getComputedStyle(blueberry).getPropertyValue("top"));
      if (left === blueLeft && (top + 20) === blueTop) {
      blueberryMove();
      counter++;
      document.getElementById("scoreboard").textContent = "Blueberries Eaten: " + counter;
    }
    }

});
