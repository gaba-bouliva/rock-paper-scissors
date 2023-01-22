
function getComputerChoice(){
  //return computer choice
  randomChoice  = Math.floor((Math.random() * 3 )) + 1; // returns random number between 1 and 3
  if(randomChoice === 1){
    return 'rock';
  }
  if(randomChoice === 2){
    return 'paper'
  }
  return 'scissors';
}

function playRound(){
  let userChoice = prompt('Enter your Choice [Press F12 to see results.]: ');
  userChoice = userChoice.toLowerCase();
  while (userChoice !==  'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
    console.log("Please enter a valid choice ['rock', 'paper', 'scissors']");
    userChoice = prompt("Enter valid choice: ");
  }
  let computerChoice = getComputerChoice();

  /**
   * rock - paper
   * rock - scissors
   * paper - rock
   * paper scissors
   * scissors - rock
   * scissors - paper
   */
  if( userChoice === computerChoice){
    return {'winner': null, 'message': 'Draw Game!'};
  }
  
  if(userChoice === 'rock' && computerChoice === 'paper'){
    return {'winner': 'computer', 'message': `You Lose! ${computerChoice} beats  ${userChoice}`}
  }

  if(userChoice === 'rock' && computerChoice === 'scissors'){
    return {'winner': 'user', 'message': `You Win! ${userChoice} beats ${computerChoice}`} ;
  }
 
  if(userChoice === 'paper' && computerChoice === 'rock'){
    return {'winner': 'user', 'message': `You Win! ${userChoice} beats ${computerChoice}`};
  }

  if(userChoice === 'paper' && computerChoice === 'scissors'){
    return {'winner': 'computer', 'message': `You Lose! ${computerChoice} beats  ${userChoice}`} ;
  }

  if(userChoice === 'scissors' && computerChoice === 'rock'){
    return {'winner': 'computer', 'message': `You Lose! ${computerChoice} beats  ${userChoice}`} ;
  }

  if(userChoice === 'scissors' && computerChoice === 'paper'){
    return {'winner': 'user', 'message': `You Win! ${userChoice} beats ${computerChoice}`};
  }

}

function game(){
  let user_score = 0;
  let computer_score = 0;
  let draws = 0;

  for(let i = 0; i < 5; i++){
    const result = playRound();
    console.log(result.message);
    if (!result.winner) draws += 1;
    if (result.winner === 'user') user_score += 1;
    if (result.winner === 'computer') computer_score += 1;
  }

  if( user_score > computer_score){
    console.log(`You win! with ${user_score} wins, ${computer_score} defeats and ${draws} draws.`);
  }else if(user_score < computer_score){
    console.log(`You lose with ${user_score} wins, ${computer_score} defeats and ${draws} draws.`);
  }else{
    console.log(`Draw Game with ${user_score} wins, ${computer_score} defeats and ${draws} draws.`);
  }
}
console.log("**************** Rock Paper Scissors ***************");
document.addEventListener('DOMContentLoaded', function(){
    game();
});
