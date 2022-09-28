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
let savedGamesDiv = document.querySelector("#savedGames");

// available choices 
let choicesAvailable = ['rock', 'paper', 'scissor'];

// total players
let totalPlayers = 1;

// names of players
let playerName = "Player1";
let opponentName = "Opponent";

// score of players
let playerScore = 0;
let opponentScore = 0;

// saved games
let savedGames = [];

// set total players
let setTotalPlayers = () => {
    totalPlayers = prompt("Please let us know total number of players");
    while((totalPlayers=="") || isNaN(totalPlayers) || totalPlayers>2){
        setTotalPlayers();
    }
}

// set player names
let setPlayerNames = () => {
    for(let counter=1; counter<=totalPlayers; counter++){
        counter===1?playerName = prompt(`Please enter name for Player ${counter}`): opponentName = prompt(`Please enter name for Player ${counter}`)
    }
}

// display players names
let displayPlayerName = ()=> {
    playerNameDiv.innerHTML = `Player Name: ${playerName}`;
    opponentNameDiv.innerHTML = `Opponent Name: ${opponentName}`;
}

// DEFAULT CALLS:: STARTS
setTotalPlayers();
setPlayerNames();
displayPlayerName();
// set player's name after setting names of players
let currentPlayer = playerName;
// set player's turn by default
displayTurnDiv.innerHTML = `current player : ${currentPlayer}'s turn`;


// DEFAULT CALLS:: ENDS

let handleChoice = (e) => {

    // displaying saveGame button once any choice is selected
    saveGameButton.style.display = "block";
    saveGameButton.addEventListener('click', saveGame);

    let userChoice = e.target.innerHTML;
    userChoiceDiv.innerHTML = `${playerName}'s choice: ${userChoice}`;

    let opponentChoice = getOpponentChoice();
    opponentChoiceDiv.innerHTML = `${opponentName}'s choice: ${opponentChoice}`;

    currentPlayer = decideTurn(currentPlayer);
    displayTurnDiv.innerHTML = `current player : ${currentPlayer}'s turn`;

    getResult(userChoice, opponentChoice);
    playerScoreDiv.innerHTML = `${playerName} Score: ${playerScore}`;
    opponentScoreDiv.innerHTML = `${opponentName} Score: ${opponentScore}`;
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
            resultDiv.innerHTML = `${playerName} Won, ${opponentName} lost`;
            break;
        case 'rockpaper':
        case 'scissorrock':
        case 'paperscissor':
            opponentScore++;
            resultDiv.innerHTML = `${playerName} lost, ${opponentName} Won`;
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
    displaySavedGames(savedGames);
}

let displaySavedGames = (savedGames) => {
    let savedGamesHtml="";
    savedGamesHtml+="<hr>";
    savedGamesHtml+="<h3>Saved Games</h3>";
    savedGamesHtml+="<table>";
    savedGames.forEach((game, index)=>{
            savedGamesHtml+="<tr>";
                savedGamesHtml+=`<th colspan='2'>Game: ${index+1}</th>`;
            savedGamesHtml+="</tr>";
            savedGamesHtml+="<tr>";
                savedGamesHtml+=`<td>Player Score: ${game.playerScore}</td>`;
                savedGamesHtml+=`<td>Opponent Score: ${game.opponentScore}</td>`;
        savedGamesHtml+="</tr>";
    });
    savedGamesHtml+="</table>";
    savedGamesDiv.innerHTML = savedGamesHtml;
}