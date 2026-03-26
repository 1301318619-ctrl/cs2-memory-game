console.log("Script started");
// Variable to track guesses
let guesses = 0;

// Var to track 1st card pick
let firstCardId = "";
let secondCardId = "";

function flipCard(cardId) {
    // Print click to console to text that click works
    console.log("click");
    // Gets the html card
    let card = document.getElementById(cardId);
    // Change colors to flip card and reveal text
    card.style.color = "peachpuff";
    card.style.backgroundColor = "white";

    if (firstCardId == ""){
        // Store 1st card id
        firstCardId = cardId;
        console.log("first = " + firstCardId);
    }
    else {
        // Store 2nd card id
        secondCardId = cardId;
        //checkForMatch();
        setTimeout(checkForMatch, 1000);
        console.log("second = " + secondCardId);
    }

}

function checkForMatch() {
    console.log("checkForMatch function is running!");

    // Get the card elements
    let firstCard = document.getElementById(firstCardId);
    let secondCard = document.getElementById(secondCardId);

    // Check if the text matches
    if (firstCard.innerText == secondCard.innerText) {
        // Green is the color to show match
        firstCard.style.backgroundColor = "lightgreen";
        secondCard.style.backgroundColor = "lightgreen";
    }
    else {
        // Cards don't match
        firstCard.style.color = "chocolate";
        firstCard.style.backgroundColor = "chocolate";
        secondCard.style.color = "chocolate";
        secondCard.style.backgroundColor = "chocolate";
    }
    
    guesses = guesses + 1;
    let guessDisplay = document.getElementById("guessDisplay");
    guessDisplay.innerText = guesses + " guesses";

    // Reset for next pick
    firstCardId = "";
    secondCardId = "";
}
