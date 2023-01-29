// Wait for page to finish loading before running game
// Get the empty cell information and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let cells = document.getElementsByTagName("td");

    for (let cell of cells) {
        cell.addEventListener("click", function() {
            if (this.textContent === "1") {
                console.log("no.1 cell clicked")
            }  
        })
    }
})

function runGame() {

}

function addToCell() {

}

function checkForWin() {

}

function incrementWins() {

}

function incrementLosses() {

}

function resetScores() {

}