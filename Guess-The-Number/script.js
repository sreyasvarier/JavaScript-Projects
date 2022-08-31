'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret Number is: ${secretNumber}`);
let score = 20;
let highScore = 0;

//function to display message replacing repeated code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Functionality for button 'Check!'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // if guess is blank
  if (!guess) {
    displayMessage('Input a Number in CheckBox!');

    // if guess is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';

    // if guess is != secretNumber
  } else if (guess !== secretNumber) {
    document.querySelector('body').style.backgroundColor = '#222';
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose the game!');
      document.querySelector('.score').textContent = 0;
      score = 0;
    }
  }
});

// Functionality for button 'Again!' - reset page
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');

  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(`New secretNumber is ${secretNumber}`);
});
