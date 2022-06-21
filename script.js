const $start = document.querySelector('#startButton');
const $game = document.querySelector('#clickWrap');
const $time = document.querySelector('#time');
const $gameTime = document.querySelector('#gameTime');
const $score = document.querySelector('#score');
const $gameScore = document.querySelector('#gameScore');

let score = 0;
let isGameStarted = false;

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleEnemyClick);

const hide = $el => $el.classList.add('hide');
const show = $el => $el.classList.remove('hide');
const rand = (min, max) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}


function startGame() {
    isGameStarted = true;
    $game.style.background = `url("image/bg${rand(1, 9)}.jpg") center/cover`;
    hide($start);

const interval = setInterval( function () {
    const time = parseFloat($time.textContent);

    if (time <= 0) {
        clearInterval(interval);
        endGame()
    } else {
        $time.textContent = (time - 0.1).toFixed(1);
    };


}, 100);

    renderEnemy();
};

function setGameScore() {
    $score.textContent = score.toString();
};

function endGame() {
    isGameStarted = false;
    setGameScore();
    $game.innerHTML = '';

    show($gameScore);
    hide($gameTime);

    show($start) // перенести в ХТМЛ старт як сіблінг ігрового полотна (не зявляється в дом дереві)
}

function handleEnemyClick(event) {
    if (isGameStarted) {
        if (event.target.dataset.enemy) {
            score++;
            renderEnemy();
        };
    };



};

function renderEnemy() {
    $game.innerHTML = '';
    const Enemy = document.createElement('div');
    const enemySize = rand(60, 150);
    const gameSize = $game.getBoundingClientRect();
    const maxTop = gameSize.height - enemySize;
    const maxLeft = gameSize.width - enemySize;

    Enemy.style.position = 'absolute';
    Enemy.style.width = Enemy.style.height = `${enemySize}px`;
    Enemy.style.top = `${rand(0, maxTop)}px`;
    Enemy.style.left = `${rand(0, maxLeft)}px`;
    Enemy.style.background = `url("image/monster${rand(1, 4)}.png") center/cover`;
    Enemy.setAttribute('data-enemy', 'true');


    $game.insertAdjacentElement('afterbegin', Enemy)
}