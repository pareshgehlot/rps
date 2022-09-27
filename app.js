// getting dom elements
let choicesAvailableDiv = document.querySelector("#choicesAvailable");
let resultDiv = document.querySelector("#result");

// available choices 
let choicesAvailable = ['rock', 'paper', 'scissor'];

// fill the dom with choices
choicesAvailable.forEach((choice)=>{
    let button = document.createElement("button");
    button.id = choice;
    button.innerHTML = choice;
    choicesAvailableDiv.appendChild(button);
});