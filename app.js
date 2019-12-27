
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
    
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Choose: Rock - Paper - Scissors').toLowerCase();
    computerSelection = computerPlay();

    let gameRules = playerSelection === 'rock' && computerSelection === 'scissors' ||
                        playerSelection === 'paper' && computerSelection === 'rock'||
                            playerSelection === 'scissors' && computerSelection === 'paper';
    
    if (playerSelection === computerSelection){
        console.log(`Draw! both are ${playerSelection}`) ;

    } else if (gameRules) {
        playerScore++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`) ;

    } else {
        computerScore++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);    
  }
};

    let playerScore = 0;
    let computerScore = 0;

function playGame(rounds = 3) {
    rounds = prompt('How Many Rounds?')

    for ( let i = 0 ; i < rounds ; i++){
        playRound()
    };
    if (playerScore > computerScore){
        return `You Win ${playerScore} to ${computerScore}`
    } else if (playerScore < computerScore){
        return `You Lose ${playerScore} to ${computerScore}`
    } else {
        return `Draw ${playerScore} to ${computerScore}`
      }
   };


console.log(playGame())