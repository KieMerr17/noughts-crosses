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

/**Input the symbol of the current player into the box and check for winner
 * then continue on to switch player symbol
 */
function inputPlayerSymbol(event) {
    if (event.target.textContent !== "") {
        return;
    }
    event.target.textContent = currentPlayer;
    const winner = checkForWin();
    if (winner) {
        alert(`${winner} wins!`);
        newGame()
        if (winner === "X") {
            incrementWins()
        }
        return;
    }
//switch player symbol after checking for win
    currentPlayer = currentPlayer === "O" ? "X" : "O";
}

/**
 * Store index number combinations to trigger a win 
 * then iterate through a for loop to check for a match 
 * of either "X" or "O"
 */
function checkForWin() {
    const winningCombinations = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8], //row wins
        [0, 3, 6],[1, 4, 7],[2, 5, 8], //column wins
        [0, 4, 8],[2, 4, 6]];//diagonal wins

//Iterate through winning combinations
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer) {
            return currentPlayer;
        }
    }
    return null;
}

function incrementWins() {
    let winScore = parseInt(document.getElementById("games-won").innerText);
	document.getElementById("games-won").innerText = ++winScore;
}

function incrementLosses() {
}