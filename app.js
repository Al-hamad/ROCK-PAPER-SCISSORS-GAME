let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const btn = Array.from(document.querySelectorAll('button'));
        btn.forEach(btn => {
            btn.addEventListener('click', () => {
                if (!btn.value) return;
                playRound(btn.value)
            });
        })

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
          return 'rock'
          break;
        case 1:
          return 'paper'
          break;
        case 2:
          return 'scissors'
          break;
      };
    };
    
function playRound(playerSelection) {
    computerSelection = computerPlay();

    let gameRules = playerSelection === 'rock' && computerSelection === 'scissors' ||
                        playerSelection === 'paper' && computerSelection === 'rock'||
                            playerSelection === 'scissors' && computerSelection === 'paper';
    
const player = document.getElementById('player-score');
const computer = document.getElementById('computer-score');
const resultP = document.createElement('p');

    if (playerSelection === computerSelection){
        resultP.textContent = `draw`
    } else if (gameRules) {
        resultP.textContent = 'win'
        playerScore++
        player.textContent = playerScore;
    } else {
        resultP.textContent = `lost`
        computerScore++
        computer.textContent = computerScore;
  }
const display = document.querySelector('.players');
display.appendChild(resultP)
  gameScore()
};


function gameScore() {
rounds++
const message = document.getElementById('message');
    if (rounds === 5) {
        if (playerScore > computerScore){
            message.textContent = `You Win ${playerScore} to ${computerScore}`;
        } else if (playerScore < computerScore){
            message.textContent = `You Lose ${playerScore} to ${computerScore}`;
        } else {
            message.textContent = `Draw ${playerScore} to ${computerScore}`;
        }
    };

   };
