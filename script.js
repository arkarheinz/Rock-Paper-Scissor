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


const userChoice = document.querySelector("#userChoice");
const playRound = document.querySelector("#playRound")

playRound.addEventListener("click", () => {
    // get user's input to play with computer
    const userRock = document.createElement("button");
    const userPaper = document.createElement("button");
    const userScissor = document.createElement("button");

        // add attributes to buttons
        userRock.setAttribute("id", "rock");
        userRock.textContent = "Rock";

        userPaper.setAttribute("id", "paper");
        userPaper.textContent = "Paper";

        userScissor.setAttribute("id", "scissor");
        userScissor.textContent = "Scissor";

    userChoice.appendChild(userRock);
    userChoice.appendChild(userPaper);
    userChoice.appendChild(userScissor);
});
    
// let getUserChoice = '';
// // addEventListener to let user choose manually
// userRock.addEventListener("click", () => {
//     getUserChoice = 'rock';
// });

// userPaper.addEventListener("click", () => {
//     getUserChoice = 'paper';
// });

// userScissor.addEventListener("click", () => {
//     getUserChoice = 'scissor';
// });

// // function to play game
// const playGame = () => {
//     // variations for scores
//     let userScore = 0;
//     let computerScore = 0;
//     let matchPlay = 0;

//     // function to play round
//     const playRound = (userChoice, computerChoice) => {
//         userChoice = getUserChoice;
//         computerChoice = getComputerChoice();

//         // conditional state for play round including score and choices
//         if (userChoice === computerChoice) {
//             console.log(`Draw! Try again.`);
//             matchPlay++;
//         } else if (
//             userChoice === 'rock' && computerChoice ==='scissor' ||
//             userChoice === 'paper' && computerChoice === 'rock' ||
//             userChoice === 'scissor' && computerChoice === 'paper'
//         ) {
//             userScore++;
//             matchPlay++;
//             console.log(`User Win!!!`);
//         } else if (
//             computerChoice === 'rock' && userChoice ==='scissor' ||
//             computerChoice === 'paper' && userChoice === 'rock' ||
//             computerChoice === 'scissor' && userChoice === 'paper'
//         ) {
//             computerScore++;
//             matchPlay++;
//             console.log(`Computer Win!!!`);
//         }

//         console.log(`Game${matchPlay}: User Choice: ${userChoice}. Computer Choice: ${computerChoice}.Score: U${userScore} / C${computerScore}`);
//     }
    
//     // call playRound function
//     playRound();

//     // decide winner after score 3 points
//     if (matchPlay <= 5 && userScore === 3) {
//         console.log('You won the game!!!!!');
//     } else if (matchPlay <= 5 && computerScore === 3) {
//         console.log('Computer won the game!!!!!');
//     } else if ( matchPlay === 5 && userScore < 3) {
//         console.log(`It is a tie game.`)
//     } else if (matchPlay === 5 && computerScore < 3){
//         console.log(`It is a tie game.`)
//     }
// }

// playGame();