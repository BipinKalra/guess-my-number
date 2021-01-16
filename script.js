"use strict";

// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 13;

// console.log(document.querySelector(".guess").value)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".again").addEventListener("click", function () {
  // Resetting everything by reloading the page
  // location.reload();

  // Without reloading the page
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  // Doing it this way lets us preserve our high score
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // No guess
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector(".highscore").textContent = highScore;

    // Guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!";
      document.querySelector(".score").textContent = 0;
    }

    // Guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
