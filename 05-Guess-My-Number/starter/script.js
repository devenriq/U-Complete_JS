// Variables
const hiddenNumber = document.querySelector('.number');
const statusMessage = document.querySelector('.message');
const initialScorePage = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const background = document.querySelector('body');
const inputNumber = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const reloadButton = document.querySelector('.again');
let randomNumber = Math.floor(Math.random() * 20);
let initialScore = 20;

// Funciones
const updateScore = () => {
  initialScore--;
  initialScorePage.textContent = initialScore;
};

const showMessage = message => {
  statusMessage.textContent = message;
};

const showCorrectNumber = () => {
  hiddenNumber.textContent = randomNumber;
  background.style.backgroundColor = '#60b347';
  highScore.textContent = initialScore;
};

const checkGuess = () => {
  const guessedNumber = parseFloat(inputNumber.value);

  if (guessedNumber > randomNumber) {
    showMessage("⛔️ It's more than expected");
    updateScore();
  } else if (guessedNumber < randomNumber) {
    showMessage("⛔️ It's less than expected");
    updateScore();
  } else {
    showMessage("✅ That's the correct number!");
    showCorrectNumber();
  }
};

const resetGame = () => {
  location.reload();
};

// Event Listeners
checkButton.addEventListener('click', checkGuess);
reloadButton.addEventListener('click', resetGame);

// Código principal
console.log(randomNumber);
