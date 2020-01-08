let playerScore = 0;
let cpuScore = 0;
const score = document.querySelector('#score');
const showWinner = document.querySelector('h2');
const message =document.querySelector('.message');

// Listen to buttons and call playGame()
document.querySelectorAll('.choice').forEach(el =>{
    el.addEventListener('click', () => {
          message.textContent = ' ';
          playGame(el.value);
    });
    });

// reset button
function reset(){
  message.textContent = ' ';
  score.textContent = `${playerScore = 0} - ${cpuScore = 0}`;
  showWinner.textContent = ' ';
};
document.querySelector('.reset').addEventListener('click', reset);
  


function cpuPlay() {
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

function playGame(playerSelection){
  let cpuSelction = cpuPlay();

  const winningRules = playerSelection === 'rock' && cpuSelction === 'scissors' || 
                         playerSelection === 'scissors' && cpuSelction === 'paper' ||
                           playerSelection === 'paper' && cpuSelction === 'rock';


    if (playerSelection === cpuSelction){
      showWinner.textContent = '=';
    } else if (winningRules){
      showWinner.textContent = '>';
      score.textContent = `${++playerScore} - ${cpuScore}`;
    } else {
      showWinner.textContent = '<';
      score.textContent = `${playerScore} - ${++cpuScore}`;
    };
    displayChoice(playerSelection,cpuSelction);
  };


 // add image in the screan and show winner
function displayChoice(player,cpu){
    const message = document.querySelector('.message');
        if (playerScore === 5){
          message.textContent = `VICTORY! YOU WIN`;
          playerScore=0;
          cpuScore=0;
        } else if (cpuScore === 5) {
          message.textContent = `DEFEAT! YOU LOST`
          playerScore=0;
          cpuScore=0;      
        };

const playerCard = document.getElementById('player-card');
const ImgPlayer = document.createElement("img");
const cpuCard = document.getElementById('cpu-card');
const ImgCpu = document.createElement("img");

      switch(player) {
        case 'rock':
          ImgPlayer.src = "/style/img/r.png";
          break;
        case 'paper':
          ImgPlayer.src = "/style/img/p.png";
          break;
        case 'scissors':
          ImgPlayer.src = "/style/img/s.png";
          break;
      };
      switch(cpu) {
        case 'rock':
          ImgCpu.src = "/style/img/r.png";
          break;
        case 'paper':
          ImgCpu.src = "/style/img/p.png";
          break;
        case 'scissors':
          ImgCpu.src = "/style/img/s.png";
          break;
        };
      playerCard.replaceChild(ImgPlayer, playerCard.children[1]);
      cpuCard.replaceChild(ImgCpu, cpuCard.children[1]);
    };

