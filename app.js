// getting dom elements
let choicesAvailableDiv = document.querySelector("#choicesAvailable");
let resultDiv = document.querySelector("#result");
let userChoiceDiv = document.querySelector("#userChoice");
let opponentChoiceDiv = document.querySelector("#opponentChoice");
let displayTurnDiv = document.querySelector("#displayTurn");
let playerNameDiv = document.querySelector("#playerName");
let opponentNameDiv = document.querySelector("#opponentName");

// available choices 
let choicesAvailable = ['rock', 'paper', 'scissor'];

let playerName = "Player1";
let opponentName = "Opponent";

let currentPlayer = playerName;

let displayPlayerName = ()=> {
    playerNameDiv.innerHTML = `Player Name: ${playerName}`;
    opponentNameDiv.innerHTML = `Opponent Name: ${opponentName}`;
}

// DEFAULT CALLS::
displayPlayerName();
// set player's turn by default
displayTurnDiv.innerHTML = `current player : ${currentPlayer}'s turn`;

let handleChoice = (e) => {
    let userChoice = e.target.innerHTML;
    userChoiceDiv.innerHTML = `user's choice: ${userChoice}`;

    let opponentChoice = getOpponentChoice();
    opponentChoiceDiv.innerHTML = `opponent's choice: ${opponentChoice}`;

    currentPlayer = decideTurn(currentPlayer);
    displayTurnDiv.innerHTML = `current player : ${currentPlayer}'s turn`;

    getResult(userChoice, opponentChoice);
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
            resultDiv.innerHTML = `User Won, Opponent lost`;
            break;
        case 'rockpaper':
        case 'scissorrock':
        case 'paperscissor':
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