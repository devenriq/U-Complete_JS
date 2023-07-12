'use strict';

const hiddenNumber = document.querySelector('.number');
const statusMessage = document.querySelector('.message');
const initialScorePage = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const background = document.querySelector('body');

const inputNumber = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const reloadButton = document.querySelector('.again');

const randomNumber = Math.floor(Math.random() * 20);
let initialScore = 20;

checkButton.addEventListener('click', () => {
  const guessedNumber = parseFloat(inputNumber.value);

  console.log(guessedNumber);

  if (guessedNumber > randomNumber) {
    statusMessage.textContent = "🔼 It's more than expected";
    initialScore--;
    initialScorePage.textContent = initialScore;
  } else if (guessedNumber < randomNumber) {
    statusMessage.textContent = "🔽 It's less than expected";
    initialScore--;
    initialScorePage.textContent = initialScore;
  } else {
    hiddenNumber.textContent = randomNumber;
    background.style.backgroundColor = '#60b347';
    highScore.textContent = initialScore;
  }
});

reloadButton.addEventListener('click', () => {
  location.reload();
});

console.log(randomNumber);
