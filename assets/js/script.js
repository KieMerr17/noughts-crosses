// Wait for page to finish loading before running game
// Get the empty cell information
const cells = document.getElementsByTagName("td");
const playerIcon = "X"
const computerIcon = "O"

document.addEventListener("DOMContentLoaded", function() {
}) 
newGame()


/**
 * Function newGame() completely resets the board on loading the page
 * and following a win or loss of a round
 */
function newGame() {
    for (let cell of cells) {
        if (cell.textContent === "X", "O") {
            cell.textContent = "";
            playerTurn()
        }
    }
}

/**
 * This function listens for the players mouse click on the "td" box and if the 
 * cell is empty, displays the players "X" inside.
 */
function playerTurn() {
    for (let cell of cells) {
        cell.addEventListener("click", function() {
            if (this.textContent === "") {
                this.textContent = playerIcon
                computerTurn()
            }
        })
    }
}

/**
 * This function happens following a players input, the computer generates a random
 * box to display the computerIcon "O" inside until all boxes are taken.
 */
function computerTurn() {
    let emptyCells = document.querySelectorAll("td:empty");
    let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

    if (emptyCells.length > 1){
        randomCell.textContent = "O"
    } else {
        console.log("no more boxes")
    }
}

function checkForWin() {
}

function incrementWins() {
}

function incrementLosses() {
}