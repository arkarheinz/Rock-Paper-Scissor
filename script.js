//event to play game
const startGame = document.querySelector("#startGame")
const removeOne = document.querySelector(".removeOne")
const removeTwo = document.querySelector(".removeTwo")
const removeThree = document.querySelector(".removeThree")

const play = document.querySelector("#play");

//function for computerChoice
const getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else if (randomChoice === 2) {
        return "scissor";
    }
};

let userChoice = "";
let userScore = 0;
let enemyScore = 0;
let game = 0;

const playRound = () => {
    //removing elements
    startGame.removeChild(removeOne);
    startGame.removeChild(removeTwo);
    startGame.removeChild(removeThree);
    
    // appending gamePlay part
    const gamePlay = document.createElement("div");
    gamePlay.setAttribute("id", "gamePlay");
    startGame.appendChild(gamePlay);

    //add choiceText element
    const choiceText = document.createElement("p");
    choiceText.setAttribute("id", "choiceText");
    choiceText.textContent = "Choose your weapon";
    gamePlay.appendChild(choiceText);

    //appending choices
    const choice = document.createElement("div");
    choice.setAttribute("id", "choice");
    
    gamePlay.appendChild(choice);

    //append rock/paper/scissor
    const rock = document.createElement("img");
    rock.setAttribute("id", "rock")
    rock.setAttribute("src", "./icons/rock.gif");
    rock.setAttribute("alt", "rock.gif");
    rock.setAttribute("width", "200px");
    choice.appendChild(rock);

    const paper = document.createElement("img");
    paper.setAttribute("id", "paper")
    paper.setAttribute("src", "./icons/paper.gif");
    paper.setAttribute("alt", "paper.gif");
    paper.setAttribute("width", "200px");
    choice.appendChild(paper);

    const scissor = document.createElement("img");
    scissor.setAttribute("id", "scissor")
    scissor.setAttribute("src", "./icons/scissor.gif");
    scissor.setAttribute("alt", "scissor.gif");
    scissor.setAttribute("width", "200px");
    choice.appendChild(scissor);

    rock.addEventListener("click", () => {
        userChoice = "rock";
        playGame(userChoice);
    });

    paper.addEventListener("click", () => {
        userChoice = "paper";
        playGame(userChoice);
    });

    scissor.addEventListener("click", () => {
        userChoice = "scissor";
        playGame(userChoice);
    });

    const matchPlay = document.createElement("p");
    matchPlay.setAttribute("id", "matchPlay");
    matchPlay.textContent = `Round ${game}`;
    startGame.appendChild(matchPlay);

    // Creating score board
    const score = document.createElement("div");
    score.setAttribute("id", "score");
    startGame.appendChild(score);

    // Making user score board
    const yourScoreDiv = document.createElement("div");
    yourScoreDiv.setAttribute("id", "yourScoreDiv");
    score.appendChild(yourScoreDiv);

    // Adding userScore board
    const userScoreText = document.createElement("p");
    userScoreText.setAttribute("id", "userScoreText");
    userScoreText.textContent = "Your Score";
    yourScoreDiv.appendChild(userScoreText);

    const userActualScore = document.createElement("p");
    userActualScore.setAttribute("id", "userActualScore");
    userActualScore.textContent = `${userScore}`;
    yourScoreDiv.appendChild(userActualScore);

    // Add separate line between score
    const line = document.createElement("div");
    line.setAttribute("id", "line");
    score.appendChild(line);

    // Adding enemyScore board
    const enemyScoreDiv = document.createElement("div");
    enemyScoreDiv.setAttribute("id", "enemyScoreDiv");
    score.appendChild(enemyScoreDiv);

    const computerScoreText = document.createElement("p");
    computerScoreText.setAttribute("id", "computerScoreText");
    computerScoreText.textContent = "Enemy Score";
    enemyScoreDiv.appendChild(computerScoreText);

    const computerActualScore = document.createElement("p");
    computerActualScore.setAttribute("id", "computerActualScore");
    computerActualScore.textContent = `${enemyScore}`;
    enemyScoreDiv.appendChild(computerActualScore);
}

// Function to play new game

const newGame = () => {
    // Reset score
    userScore = 0;
    enemyScore = 0;
    game = 0;

    // Call back game section
    gamePlay.setAttribute("style", "display: content;");
    startGame.removeChild(playAgain);
    startGame.removeChild(annouceWinner);

    // Confirm changing back
    matchPlay.textContent = `Round ${game}`;
    userActualScore.textContent = `${userScore}`;
    computerActualScore.textContent = `${enemyScore}`;
}

// Function to decide winner
const playGame = (userChoice) => {
    let computerWeapon = getComputerChoice();
    if (
        (userChoice === "rock" && computerWeapon === "scissor") ||
        (userChoice === "paper" && computerWeapon === "rock") ||
        (userChoice === "scissor" && computerWeapon === "paper")
    ) {
        userScore++;
    } else if (
        (computerWeapon === "rock" && userChoice === "scissor") ||
        (computerWeapon === "paper" && userChoice === "rock") ||
        (computerWeapon === "scissor" && userChoice === "paper")
    ) {
        enemyScore++;
    }

    game++;
    matchPlay.textContent = `Round ${game}`;
    userActualScore.textContent = `${userScore}`;
    computerActualScore.textContent = `${enemyScore}`;

    // function to display enemy choice
    const displayEnemyChoice = () => {
        // Check if enemyWeapon element already exists
        let enemyWeapon = document.querySelector("#enemyWeapon");
        if (enemyWeapon) {
                // If it exists, update its content
                enemyWeapon.textContent = `Enemy weapon: ${computerWeapon}`;
            } else {
                // Otherwise, create a new enemyWeapon element
                enemyWeapon = document.createElement("p");
                enemyWeapon.setAttribute("id", "enemyWeapon");
                enemyWeapon.textContent = `Enemy weapon: ${computerWeapon}`;
                gamePlay.appendChild(enemyWeapon);
        }
    }
    displayEnemyChoice();

    // Ending game when user or computer reach 3point
    if (userScore === 3 || enemyScore === 3) {
        // Remove gamePlay section to stop playing
        gamePlay.setAttribute("style", "display: none;")

        // Announcing winner
        if (userScore === 3) {
            // Announce you won
            const annouceWinner = document.createElement("h2");
            annouceWinner.setAttribute("id", "annouceWinner");
            annouceWinner.textContent = "You win the game!!!";
            startGame.appendChild(annouceWinner);
        } else if (enemyScore === 3) {
            // Announce you lose
            const annouceWinner = document.createElement("h2");
            annouceWinner.setAttribute("id", "annouceWinner");
            annouceWinner.textContent = "You lose the game!!!";
            startGame.appendChild(annouceWinner);
        }

        // Add Event to play again
        const playAgain = document.createElement("button")
        playAgain.setAttribute("id", "playAgain");
        playAgain.textContent = "play again";
        startGame.appendChild(playAgain); 
        playAgain.addEventListener("click", newGame);
    }
}

play.addEventListener("click", playRound);