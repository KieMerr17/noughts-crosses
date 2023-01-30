// Wait for page to finish loading before running game
// Get the empty cell information

const cells = document.querySelectorAll('td');
let currentPlayer = "X"; // X Starts the game
let computer = "O";

document.addEventListener("DOMContentLoaded", function() {
}) 
newGame()


/**
 * Function newGame() completely resets the board on loading the page,
 * following a win or loss of a round or when pressing the reset button.
 */
function newGame() {
    for (let cell of cells) {
        if (cell.textContent === "X", "O") {
            cell.textContent = "";
        }
    }
}

// Cell event listener
cells.forEach(cell => cell.addEventListener("click", inputPlayerSymbol));

// Input the symbol of the current player into the box and switch player
function inputPlayerSymbol(event) {
event.target.textContent = currentPlayer;
currentPlayer = currentPlayer === "O" ? "X" : "O";
}

function checkForWin() {
}

function incrementWins() {
}

function incrementLosses() {
}