'use strict';

//console.log(document.querySelector('.message').textContent);
//console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  let score = Number(document.querySelector('.score').textContent);
  console.log(score, typeof score);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct number! ^^');
    document.querySelector('.number').textContent = secretNumber;
    //CSS
    document.querySelector('body').style.backgroundColor = '#68b347';
    document.querySelector('.number').style.width = '30rem';
    //Enable button check
    document.querySelector('.check').disabled = false;
    let highscore = document.querySelector('.highscore').textContent;
    if (highscore < score) {
      document.querySelector('.highscore').textContent = String(score);
    }
  } else if (guess !== secretNumber) {
    if (guess > secretNumber) {
      displayMessage('Too high! -->');
    } else if (guess < secretNumber) {
      displayMessage('Too low! <--');
    }

    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      displayMessage('You lost the game :(');
      document.querySelector('body').style.backgroundColor = '#B22222';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      //disable button check
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = String(20);
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
});
