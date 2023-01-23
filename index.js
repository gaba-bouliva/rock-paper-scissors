
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

function playRound(userChoice){
  /**
   * Input userChoice
   * Base on userchoice and computer choice determine winner
   * return Object 
   */
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
    return {'computerChoice': computerChoice, 'message': 'Draw Game!'};
  }
  
  if(userChoice === 'rock' && computerChoice === 'paper'){
    return {'computerChoice': computerChoice, 'message': `You Lose! ${computerChoice} beats  ${userChoice}.`}
  }

  if(userChoice === 'rock' && computerChoice === 'scissors'){
    return {'computerChoice': computerChoice, 'message': `You Win! ${userChoice} beats ${computerChoice}.`} ;
  }
 
  if(userChoice === 'paper' && computerChoice === 'rock'){
    return {'computerChoice': computerChoice, 'message': `You Win! ${userChoice} beats ${computerChoice}.`};
  }

  if(userChoice === 'paper' && computerChoice === 'scissors'){
    return {'computerChoice': computerChoice, 'message': `You Lose! ${computerChoice} beats  ${userChoice}.`} ;
  }

  if(userChoice === 'scissors' && computerChoice === 'rock'){
    return {'computerChoice': computerChoice, 'message': `You Lose! ${computerChoice} beats  ${userChoice}.`} ;
  }

  if(userChoice === 'scissors' && computerChoice === 'paper'){
    return {'computerChoice': computerChoice, 'message': `You Win! ${userChoice} beats ${computerChoice}.`};
  }

}

function updateDomWithResults(userChoice, result){
  /**
   * Update DOM with the info from userChoice, computerChoice and game result
   */

   gameChoices ={
    'rock': '👊',
    'paper': '📄',
    'scissors': '✂'
   }
   
  const computerChoice = gameChoices[result.computerChoice];
  document.querySelector('div.computer-choice>div.choice').textContent = computerChoice;
  document.querySelector('div.user-choice>div.choice').textContent = gameChoices[userChoice];
  document.querySelector('.game-outcome-msg').textContent = result.message;
}

function game(){
  console.log("**************** Rock Paper Scissors ***************");
  // let user_score = 0;
  // let computer_score = 0;
  // let draws = 0;

  // for(let i = 0; i < 5; i++){
  //   const result = playRound();
  //   console.log(result.message);
  //   if (!result.winner) draws += 1;
  //   if (result.winner === 'user') user_score += 1;
  //   if (result.winner === 'computer') computer_score += 1;
  // }
 
  document.querySelectorAll("div.game>button").forEach(button => {

    button.addEventListener('click', () => {
       gameChoices ={
        'rock': '👊',
        'paper': '📄',
        'scissors': '✂'
       }

       let userChoice = button.textContent;

       if (userChoice === "👊"){ 

        userChoice = 'rock'; 
        const result = playRound(userChoice);
        updateDomWithResults(userChoice, result)

      }else if (userChoice === "📄"){
        userChoice = 'paper';
        const result = playRound(userChoice);
        updateDomWithResults(userChoice, result)

       }else if (userChoice === "✂"){
        userChoice = 'scissors'
        const result = playRound(userChoice);
        updateDomWithResults(userChoice, result)
       }else{
        console.log('Invalid Choice!');
        return 'Error!';
       }
      
      })
  });


  // if( user_score > computer_score){
  //   console.log(`You win! with ${user_score} wins, ${computer_score} defeats and ${draws} draws.`);
  // }else if(user_score < computer_score){
  //   console.log(`You lose with ${user_score} wins, ${computer_score} defeats and ${draws} draws.`);
  // }else{
  //   console.log(`Draw Game with ${user_score} wins, ${computer_score} defeats and ${draws} draws.`);
  // }
}


game();
