const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
const resetButton = document.querySelector('#reset');
let gameResult = document.getElementById('game-result');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    });
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    //assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        };
    });
});

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 900);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0) {
        clearInterval(timerId);
        gameResult.textContent = 'GAME OVER! Your final score is ' + result;
        score.textContent = '-';
    }
}

let timerId = setInterval(countDown, 1000);

resetButton.addEventListener('click', restart);
function restart() {
    document.location.href = '';
}
