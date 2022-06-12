"use strict";

// document.querySelector(".message").textContent = "🎉 Correct Number!";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20; // INITIAL SCORE
let highscore = 0; // INITIAL SCORE

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayHighscore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const setBodyBgColor = function (color) {
  document.body.style.backgroundColor = color;
};

const setNumberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

checkBtn.addEventListener("click", gameLogic);

againBtn.addEventListener("click", resetGame);

function gameLogic() {
  const guessNumber = Number(guessInput.value);

  if (!guessNumber) {
    displayMessage("⛔ No Number");

    // when player wins
  } else if (guessNumber === secretNumber) {
    displayMessage("🎉 Correct Number!");

    // show the number
    displayNumber(guessNumber);

    // change style
    setBodyBgColor("#60b347");
    setNumberWidth("40vw");

    // update highscore
    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }

    checkBtn.removeEventListener("click", gameLogic);

    // when guess is wrong
  } else {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? "📈 Too High!" : "📉 Too Low!"
      );
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
}

function resetGame() {
  // reset score
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  // reset bgColor
  setBodyBgColor("#222");

  // reset msgs
  displayMessage("Start guessing...");
  displayScore(score);

  // reset the guessInput
  guessInput.value = "";

  // reset numberEl
  displayNumber("?");
  setNumberWidth("15rem");

  console.log(secretNumber);
}
