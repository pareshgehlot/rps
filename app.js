// getting dom elements
let choicesAvailableDiv = document.querySelector("#choicesAvailable");
let resultDiv = document.querySelector("#result");
let userChoiceDiv = document.querySelector("#userChoice");
let opponentChoiceDiv = document.querySelector("#opponentChoice");
let displayTurnDiv = document.querySelector("#displayTurn");
let playerNameDiv = document.querySelector("#playerName");
let opponentNameDiv = document.querySelector("#opponentName");
let playerScoreDiv = document.querySelector("#playerScore");
let opponentScoreDiv = document.querySelector("#opponentScore");
let saveGameButton = document.querySelector("#saveGame");

// available choices 
let choicesAvailable = ['rock', 'paper', 'scissor'];

// names of players
let playerName = "Player1";
let opponentName = "Opponent";

// score of players
let playerScore = 0;
let opponentScore = 0;

// saved games
let savedGames = [];

let currentPlayer = playerName;

// display players names
let displayPlayerName = ()=> {
    playerNameDiv.innerHTML = `Player Name: ${playerName}`;
    opponentNameDiv.innerHTML = `Opponent Name: ${opponentName}`;
}

// DEFAULT CALLS::
displayPlayerName();
// set player's turn by default
displayTurnDiv.innerHTML = `current player : ${currentPlayer}'s turn`;

let handleChoice = (e) => {

    // displaying saveGame button once any choice is selected
    saveGameButton.style.display = "block";
    saveGameButton.addEventListener('click', saveGame);

    let userChoice = e.target.innerHTML;
    userChoiceDiv.innerHTML = `user's choice: ${userChoice}`;

    let opponentChoice = getOpponentChoice();
    opponentChoiceDiv.innerHTML = `opponent's choice: ${opponentChoice}`;

    currentPlayer = decideTurn(currentPlayer);
    displayTurnDiv.innerHTML = `current player : ${currentPlayer}'s turn`;

    getResult(userChoice, opponentChoice);
    playerScoreDiv.innerHTML = `Player Score: ${playerScore}`;
    opponentScoreDiv.innerHTML = `Opponent Score: ${opponentScore}`;
}

// get choice of opponent by randomly selecting from available choices
let getOpponentChoice = () => {
    return choicesAvailable[(Math.floor(Math.random() * choicesAvailable.length))];
}


// fill the dom with choices
choicesAvailable.forEach((choice)=>{
    let button = document.createElement("button");
    button.id = choice;
    button.innerHTML = choice;
    button.addEventListener('click', handleChoice);
    choicesAvailableDiv.appendChild(button);
});


let getResult = (userChoice, opponentChoice) => {
    switch(userChoice+opponentChoice){
        case 'paperrock':
        case 'rockscissor':
        case 'scissorpaper':
            playerScore++;
            resultDiv.innerHTML = `User Won, Opponent lost`;
            break;
        case 'rockpaper':
        case 'scissorrock':
        case 'paperscissor':
            opponentScore++;
            resultDiv.innerHTML = `User lost, Opponent Won`;
            break;
        case 'rockrock':
        case 'scissorscissor':
        case 'paperpaper':
            resultDiv.innerHTML = `It's a draw!`;
            break;
        default:
            break;
    }
}

let decideTurn = (currentPlayer) => {
    if (currentPlayer=="" || currentPlayer == playerName){
        currentPlayer = opponentName;
    }else {
        currentPlayer = playerName;
    }
    return currentPlayer;
}

let saveGame = (e) => {
    let scoresObject = {
        playerScore,
        opponentScore
    }
    savedGames.push(scoresObject);
    console.log('game saved', savedGames);
}