// declare variables
// asociate with nodes
// start game
// end game

const startButton = document.querySelector('#startButton')
const endButton = document.querySelector('#endButton') //remove
const gameTime = document.querySelector('#gameTime')
const gameScore = document.querySelector('#gameScore')
const clickWrap = document.querySelector('#clickWrap')


let timeValue = document.querySelector('input')

gameTime.textContent = ('game time: ' + +timeValue.value)

function setGameTime() {
    let time = +timeValue.value
    gameTime.textContent = ('game time: ' + time)
}




timeValue.addEventListener('input', setGameTime)
startButton.addEventListener('click', startGame)

function addSquare() {
    let addDiv = clickWrap.insertAdjacentHTML("afterbegin", '<div id="rS"></div>')
    randomSquare = document.querySelector('#rS')
    randomSquare.style.width = randomSquare.style.height = '100px'

    randomSquare.style.backgroundColor = '#fff'



}


function startGame() {
    setGameTime()
    // gameTime.classList.add('hide')
    // gameScore.classList.remove('hide')
    startButton.classList.add('hide')
    console.log(timeValue.value)
    timeValue.setAttribute('disabled', 'disabled')
    addSquare()

}

