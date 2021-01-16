"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let scoreText = document.querySelector(".score");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", function () {
  // Resetting everything by reloading the page
  // location.reload();

  // Without reloading the page
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreText.textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  // Doing it this way lets us preserve our high score
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // No guess
  if (!guess) {
    displayMessage("No Guess!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector(".highscore").textContent = highScore;

    // Guess too high
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too low!");

      score--;
      scoreText.textContent = score;
    } else {
      displayMessage("You Lost!");
      scoreText.textContent = 0;
    }
  }
});
