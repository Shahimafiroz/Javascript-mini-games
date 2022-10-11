// dice 1 js

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".dice1").setAttribute("src", randomDice1);

// dice 2 js

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice2").setAttribute("src", randomDice2);

//winner declaration

if (randomNumber1 > randomNumber2) {
  document.querySelector(".winner").textContent =
    " 🥳 🥳 Player 1 wins! 🥳 🥳  ";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".winner").textContent =
    " 🥳 🥳  Player 2 wins! 🥳 🥳  ";
} else {
  document.querySelector(".winner").textContent =
    " It's a draw!!!! 😑 😑  😑 😑 ";
}
