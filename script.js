'use strict';
const Domstring = {
  Check: document.querySelector('.check'),
  Guess: document.querySelector('.guess'),
  Message: document.querySelector('.message'),
  Score: document.querySelector('.score'),
  Body: document.querySelector('body'),
  Num: document.querySelector('.number'),
  Again: document.querySelector('.again'),
  Highscore: document.querySelector('.highscore'),
};

const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = localStorage.getItem('highscore')
  ? JSON.parse(localStorage.getItem('highscore'))
  : 0;
// Domstring.Num.textContent = SecretNumber;

Domstring.Highscore.textContent = highscore;
Domstring.Guess.addEventListener('click', () => {
  Domstring.Guess.value = '';
});

Domstring.Check.addEventListener('click', function () {
  const guess = Number(Domstring.Guess.value);
  if (guess >= 1 && guess <= 20) {
    Domstring.Guess.textContent = guess;
    if (!guess) {
      Domstring.Message.textContent = '⛔ No Number !';
    } else if (guess === SecretNumber) {
      Domstring.Message.textContent = '🎉 You Won The Game';
      Domstring.Body.style.backgroundColor = '#60b347';
      Domstring.Num.style.width = '30rem';
      Domstring.Check.style.visibility = 'hidden';
      Domstring.Num.textContent = SecretNumber;
      if (score > highscore) {
        Domstring.Highscore.textContent = score;
        localStorage.setItem('highscore', JSON.stringify(score));
      }
    } else if (guess !== SecretNumber) {
      if (score > 1) {
        Domstring.Message.textContent =
          guess > SecretNumber ? '📈 Too High !' : '📈 Too low !';
        score--;
        Domstring.Score.textContent = score;
      } else {
        Domstring.Message.textContent = '💣 You Have Lost The Game !';
        Domstring.Score.textContent = 0;
        Domstring.Check.style.visibility = 'hidden';
      }
    }
  } else {
    window.alert('Enter a number between 1 and 20');
  }
});

Domstring.Again.addEventListener('click', () => {
  // location.reload();
  const SecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  Domstring.Guess.value = '';
  Domstring.Score.textContent = score;
  Domstring.Message.textContent = 'Start guessing...';
  Domstring.Num.textContent = '?';
  Domstring.Check.style.visibility = 'visible';
  Domstring.Body.style.backgroundColor = '#222';
  Domstring.Num.style.width = '15rem';
});
