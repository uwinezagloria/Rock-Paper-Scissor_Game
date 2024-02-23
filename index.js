//user choice
const getUserChoice =(userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
        console.log(`user input is${userInput}`);
        return userInput;
}
if(userInput==='bomb'){
    return userInput;
}
      else {
        console.log('Error!');
      }
}
getUserChoice('rock');
getUserChoice('pen');
let randomNumber;
//computer choice 
let getComputerChoice=()=>{
     randomNumber=Math.floor(Math.random()*3);
 if(randomNumber===0){
    return 'rock';
 }
 else if(randomNumber===1){
    return 'paper';
 }
 else if(randomNumber===2){
    return 'scissors';
 }
}
 console.log(getComputerChoice());
 //determining winner
 let determineWinner=(userChoice,computerChoice)=>{
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
      }
      if(userChoice=='bomb'){
        return'you won!';
      }
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
 }
 console.log(determineWinner('paper', 'rock')); 
 let playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
  }
  playGame();
