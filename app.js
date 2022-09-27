// getting dom elements
let choicesAvailableDiv = document.querySelector("#choicesAvailable");
let resultDiv = document.querySelector("#result");

// available choices 
let choicesAvailable = ['rock', 'paper', 'scissor'];

let handleChoice = (e) => {
    console.log(`you clicked : ${e.target.innerHTML}`)
}

// fill the dom with choices
choicesAvailable.forEach((choice)=>{
    let button = document.createElement("button");
    button.id = choice;
    button.innerHTML = choice;
    button.addEventListener('click', handleChoice);
    choicesAvailableDiv.appendChild(button);
});