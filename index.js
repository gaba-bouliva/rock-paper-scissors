
function getComputerChoice(){
  /**
   * return String
   */

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
   * Base on userchoice and computer's choice determine winner
   * return Object
   */
  let computerChoice = getComputerChoice();

  /**
   * game play scenarios:
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

  // graphical representation of players choices.
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
  /**
   * Add event listener on buttons to get user choice 
   * and play a round against computer's choice
   */
  document.querySelectorAll("div.game>button").forEach(button => {

    button.addEventListener('click', () => {
  
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

}


game();
