'use strict';

const dice = document.querySelector('.dice');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const accumulatedScore0 = document.querySelector('#current--0');
const accumulatedScore1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let scorePlayer0 = 0;
let scorePlayer1 = 0;

const playerSwitch = () => {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
};

const handlingScores = diceValue => {
  if (player0.classList.contains('player--active')) {
    scorePlayer0 += diceValue;
    score0.textContent = diceValue;
    accumulatedScore0.textContent = scorePlayer0;
  } else {
    scorePlayer1 += diceValue;
    score1.textContent = diceValue;
    accumulatedScore1.textContent = scorePlayer1;
  }
};

const rollingDice = () => {
  const rolledDice = Math.floor(Math.random() * 6 + 1);

  if (rolledDice === 1) {
    dice.src = './dice-1.png';
    if (player0.classList.contains('player--active')) {
      scorePlayer0 = 0;
      accumulatedScore0.textContent = 0;
    } else {
      scorePlayer1 = 0;
      accumulatedScore1.textContent = 0;
    }
    playerSwitch();
  } else if (rolledDice === 2) {
    dice.src = './dice-2.png';
    handlingScores(2);
  } else if (rolledDice === 3) {
    dice.src = './dice-3.png';
    handlingScores(3);
  } else if (rolledDice === 4) {
    dice.src = './dice-4.png';
    handlingScores(4);
  } else if (rolledDice === 5) {
    dice.src = './dice-5.png';
    handlingScores(5);
  } else if (rolledDice === 6) {
    dice.src = './dice-6.png';
    handlingScores(6);
  }
};

buttonRoll.addEventListener('click', rollingDice);
buttonHold.addEventListener('click', playerSwitch);
