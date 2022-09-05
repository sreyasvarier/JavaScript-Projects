'use strict';

// Element selection *************
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const score2 = document.getElementById('score--1');
const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');

const diceImage = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let activePlayerCurrentScore;
let scores, currentScoreValue, activePlayerValue, playing;

// Initial conditions *************
const init = function () {
  diceImage.classList.add('hidden');

  scores = [0, 0]; // Total scores of each player
  currentScoreValue = 0;
  activePlayerValue = 0; // 0 & 1 for the active player
  playing = true; // boolean to confirm if users are playing

  score1.textContent = currentScoreValue;
  score2.textContent = currentScoreValue;
  currentScore1.textContent = currentScoreValue;
  currentScore2.textContent = currentScoreValue;

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
};

// Initialise the data *************
init();

// Function to switch active player
const switchPlayer = function () {
  currentScoreValue = 0;
  activePlayerCurrentScore.textContent = currentScoreValue;
  activePlayerValue = activePlayerValue === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

// Roll Dice flow *************
buttonRoll.addEventListener('click', function () {
  if (playing) {
    let diceValue = Math.trunc(Math.random() * 6) + 1;
    activePlayerCurrentScore = document.getElementById(
      `current--${activePlayerValue}`
    );

    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${diceValue}.png`;
    if (diceValue != 1) {
      currentScoreValue += diceValue;
      activePlayerCurrentScore.textContent = currentScoreValue;
    } else {
      // Switch to next player if dice roll is 1
      switchPlayer();
    }
  }
});

// Hold dice Value *************
buttonHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayerValue] += currentScoreValue;
    document.querySelector(`#score--${activePlayerValue}`).textContent =
      scores[activePlayerValue];

    if (scores[activePlayerValue] >= 20) {
      // Winner is coloured
      playing = false;
      document
        .querySelector(`.player--${activePlayerValue}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayerValue}`)
        .classList.remove('player--active');
      diceImage.classList.add('hidden');
    } else {
      // Switch to next player once 'Hold' is clicked
      switchPlayer();
    }
  }
});

// Reset game *************
buttonNew.addEventListener('click', function () {
  init();
});
