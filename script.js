
const startButton = document.querySelector('#startButton');
const endButton = document.querySelector('#endButton');
const gameTime = document.querySelector('#gameTime');
const gameScore = document.querySelector('#gameScore');
const clickWrap = document.querySelector('#clickWrap');

let timeValue = document.querySelector('input');

gameTime.textContent = ('game time: ' + +timeValue.value);

function setGameTime() {
    let time = +timeValue.value;
    gameTime.textContent = ('game time: ' + time);
};


timeValue.addEventListener('input', setGameTime);

startButton.addEventListener('click', startGame);


function addMonster() {
    let addDiv = clickWrap.insertAdjacentHTML("afterbegin", '<div id="rS"></div>')
    randomSquare = document.querySelector('#rS');
    randomSquare.style.width = randomSquare.style.height = '80px';
    randomSquare.style.background = 'url("image/monster.png") center/cover';
    randomSquare.style.position = 'absolute';
};


function startGame() {
    setGameTime();
    startButton.classList.add('hide');
    console.log(timeValue.value);
    timeValue.setAttribute('disabled', 'disabled');

    addMonster();
};

function endGame() {
    gameTime.classList.add('hide');
    gameScore.classList.remove('hide');
};
