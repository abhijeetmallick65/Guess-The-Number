'use strict';
const Domstring = {
  Check: document.querySelector('.check'),
  Guess: document.querySelector('.guess'),
  Message: document.querySelector('.message'),
  Score: document.querySelector('.score'),
  Body: document.querySelector(body),
};

const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = SecretNumber;

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
      Domstring.body.style.backgroundColor = '#60b347';
    } else if (guess > SecretNumber) {
      if (score > 1) {
        Domstring.Message.textContent = '📈 Too High !';
        score--;
        Domstring.Score.textContent = score;
      } else {
        Domstring.Message.textContent = '💣 You Have Lost The Game !';
        Domstring.Score.textContent = 0;
      }
    } else if (guess < SecretNumber) {
      if (score > 1) {
        Domstring.Message.textContent = '📈 Too low !';
        score--;
        Domstring.Score.textContent = score;
      } else {
        Domstring.Message.textContent = '💣 You Have Lost The Game !';
        Domstring.Score.textContent = 0;
      }
    }
  } else {
    window.alert('Enter a number between 1 and 20');
  }
});
