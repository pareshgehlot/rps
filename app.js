// getting dom elements
let choicesAvailableDiv = document.querySelector("#choicesAvailable");
let resultDiv = document.querySelector("#result");

// available choices 
let choicesAvailable = ['rock', 'paper', 'scissor'];


let handleChoice = (e) => {
    let userChoice = e.target.innerHTML;
    let opponentChoice = getOpponentChoice();
    getResult(userChoice, opponentChoice);
}

// get choice of opponnent by randomly selecting from available choices
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