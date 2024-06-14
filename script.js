// getComputerChoice randomly return rock, paper, scissor

const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else if (computerChoice === 2) {
        return 'scissor';
    }
};

// function to play 5 round to win game.
const playGame = () => {
    // variations for scores
    let userScore = 0;
    let computerScore = 0;
    let matchPlay = 0;

    // loop to play 5 round to win
    for (let round = 1 ; round <= 5 ; round++) {
        // get user's input to play with computer
        const getUserChoice = prompt(`Choose your weapon to fight with computer! You can chose rock, paper and scissor.`)

        // function to play round
        const playRound = (userChoice, computerChoice) => {
            userChoice = getUserChoice.toLowerCase();
            computerChoice = getComputerChoice();

            // conditional state for play round including score and choices
            if (userChoice === computerChoice) {
                console.log(`Draw! Try again.`);
                matchPlay++;
            } else if (
                userChoice === 'rock' && computerChoice ==='scissor' ||
                userChoice === 'paper' && computerChoice === 'rock' ||
                userChoice === 'scissor' && computerChoice === 'paper'
            ) {
                userScore++;
                matchPlay++;
                console.log(`User Win!!!`);
            } else if (
                computerChoice === 'rock' && userChoice ==='scissor' ||
                computerChoice === 'paper' && userChoice === 'rock' ||
                computerChoice === 'scissor' && userChoice === 'paper'
            ) {
                computerScore++;
                matchPlay++;
                console.log(`Computer Win!!!`);
            }

            console.log(`Game${matchPlay}: User Choice: ${userChoice}. Computer Choice: ${computerChoice}.Score: U${userScore} / C${computerScore}`);
        }
        
        // call playRound function
        playRound();

        // decide winner after score 3 points
        if (matchPlay <= 5 && userScore === 3) {
            console.log('You won the game!!!!!');
            break;
        } else if (matchPlay <= 5 && computerScore === 3) {
            console.log('Computer won the game!!!!!');
            break;
        } else if ( matchPlay === 5 && userScore < 3) {
            console.log(`It is a tie game.`)
        } else if (matchPlay === 5 && computerScore < 3){
            console.log(`It is a tie game.`)
        }
    }
}

playGame();