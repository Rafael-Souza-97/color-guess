const divColor = document.getElementsByClassName('ball');
const answer = document.getElementById('rgb-color');
const starterText = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const score = document.getElementById('score');

function randomColor() {
  const red = parseInt(Math.random() * 255, 10);
  const green = parseInt(Math.random() * 255, 10);
  const blue = parseInt(Math.random() * 255, 10);
  return `(${red}, ${green}, ${blue})`;
}

function answerStatus(event) {
  const rightColor = document.getElementById('rgb-color');
  if (event.target.id === rightColor.innerText) {
    starterText.innerText = "Acertou!";
    answer.innerText = randomColor();
    generateColors();
    let strScore = parseInt(score.innerText, 10);
    strScore += 3;
    score.innerText = strScore;
  } else {
    starterText.innerText = 'Errou! Tente novamente!';
    answer.innerText = randomColor();
    generateColors();
   }
}

function generateColors() {
  const rightIndex = Math.floor(Math.random() * divColor.length);
  for (let index = 0; index < divColor.length; index += 1) {
    const oneColor = divColor[index];
    oneColor.addEventListener('click', answerStatus);
    if (rightIndex === index) {
      oneColor.style.backgroundColor = 'rgb' + answer.innerText;
      oneColor.setAttribute('id', answer.innerText);
    } else {
      const currColor = randomColor();
      oneColor.style.backgroundColor = 'rgb' + randomColor();
      oneColor.setAttribute('id', currColor);
    }
  }
}

resetButton.addEventListener('click', function () {
  starterText.innerText = 'Escolha uma cor';
  score.innerHTML = '0';
  answer.innerText = randomColor();
  generateColors();
});

window.onload = function () {
  answer.innerText = randomColor();
  generateColors();
  starterText.innerHTML = 'Escolha uma cor';
};
