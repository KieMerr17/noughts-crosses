// Wait for page to finish loading before running game
// Get the empty cell information and add event listeners to them
const cells = document.getElementsByTagName("td");
const playerIcon = "X"
const computerIcon = "O"

document.addEventListener("DOMContentLoaded", function() {
})
newGame()

function newGame() {
    for (let cell of cells) {
        if (cell.textContent === "X", "O") {
            cell.textContent = "";
            playerTurn()
        }
    }
}

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

function computerTurn() {
}

function checkForWin() {
}

function incrementWins() {
}

function incrementLosses() {
}

function resetScores() {

}