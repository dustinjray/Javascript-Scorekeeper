const playerOne = {
    score: 0,
    button: document.querySelector('#scoreone'),
    scoreDisplay: document.querySelector('#playerone')
};

const playerTwo = {
    score: 0,
    button: document.querySelector('#scoretwo'),
    scoreDisplay: document.querySelector('#playertwo')
};

let maxScore = 5;
let gameIsOver = false;
const resetButton = document.querySelector('#reset');
const scoreSelect = document.querySelector('#maxscore');

scoreSelect.addEventListener('change', function() {
    resetGame();
    maxScore = parseInt(this.value);
});

playerOne.button.addEventListener('click', function() {
    updateScore(playerOne, playerTwo);
});

playerTwo.button.addEventListener('click', function() {
    updateScore(playerTwo, playerOne);
});

resetButton.addEventListener('click', resetGame);


function updateScore(player, opponent) {
    addPoint(player);
    player.scoreDisplay.textContent = player.score;
    if (player.score === maxScore && !gameIsOver) {
        gameOver(player, opponent);
    }
}

function addPoint(player) {
    if (player.score < maxScore && !gameIsOver) {
        player.score++;
    }
}

function resetGame() {
    gameIsOver = false;
    playerOne.score = 0;
    playerOne.scoreDisplay.innerText = 0;
    playerTwo.score = 0;
    playerTwo.scoreDisplay.innerText = 0;
    playerOne.scoreDisplay.classList.remove('winner', 'loser');
    playerTwo.scoreDisplay.classList.remove('winner', 'loser');
}

function gameOver(winner, loser) {
    gameIsOver = true;
    winner.scoreDisplay.classList.toggle('winner');
    loser.scoreDisplay.classList.toggle('loser');
}