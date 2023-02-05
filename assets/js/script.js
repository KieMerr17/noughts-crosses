// Wait for page to finish loading before running game
// Get the empty cell information

const cells = document.querySelectorAll('td');
let currentPlayer = "X"; // X Starts the game
let computer = "O"; //computer symbol

document.addEventListener("DOMContentLoaded", function() {
});
newGame();

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
    currentPlayer = "X"; //set he symbol to "X"
}

// Cell event listener
cells.forEach(cell => cell.addEventListener("click", inputSymbol));

/**Input the symbol of the current player into the box and check for winner
 * then continue on to switch player symbol.
 * If symbol is Computer "O", computer first checks for a blocking move
 * before continues to place symbol itself, then checks for its own win.
 */
function inputSymbol(event) {
    //check to make sure cell is empty
    if (event.target.textContent !== "") { 
        return;
    }

    event.target.textContent = currentPlayer;
    const winner = win();
    if (winner) {
        setTimeout(function() {
            alert(`${winner} wins!`);
            currentPlayer = "X"; // set symbol to "X" before starting new game
            newGame();
        }, 300);
        if (winner === "X") {
            incrementWins();
        } else if (winner === "O") {
            incrementLosses();
        }
        return;
    }

    //switch player symbol after checking for win
    currentPlayer = currentPlayer === "O" ? "X" : "O";

     // Computer turn if currentPlayer is "O"
    if (currentPlayer === computer) {
        setTimeout(function() {
            computersTurn(); //Check to block players win
            const winner = win();
            if (winner) {
                setTimeout(function() {
                    alert(`${winner} wins!`);
                    currentPlayer = "X"; // set symbol to "X" before starting new game
                    newGame();
                }, 300);
                if (winner === "X") {
                    incrementWins();
                } else if (winner === "O") {
                    incrementLosses();
                }
                return;
            }
            currentPlayer = currentPlayer === "O" ? "X" : "O"; //switch symbol back to player
        }, 300);
    }
}

/**
 * Store index number combinations to trigger a win 
 * then iterate through a for loop to check for a match 
 * of either "X" or "O"
 */
function win() {
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
}

/**
 * Computer iterates through empty cells available in winning 
 * combinations, first it checks if it could win itself, 
 * then if player "X" could win on their next move, computer 
 * plays a symbol to block the win. If neither, computer plays
 * in empty
*/
function computersTurn() {
    let emptyCells = Array.from(cells).filter(cell => cell.textContent === "");
    let randomCell = Math.floor(Math.random() * emptyCells.length);
    const winningCombinations = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8], //row wins
        [0, 3, 6],[1, 4, 7],[2, 5, 8], //column wins
        [0, 4, 8],[2, 4, 6]];//diagonal wins

    // Computer first checks for its own winning move
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (cells[a].textContent === "O" &&
            cells[b].textContent === "O" &&
            cells[c].textContent === "") {
                cells[c].textContent = computer;
                return;
        }
        if (cells[a].textContent === "O" &&
            cells[c].textContent === "O" &&
            cells[b].textContent === "") {
                cells[b].textContent = computer;
                return;
        }
        if (cells[b].textContent === "O" &&
            cells[c].textContent === "O" &&
            cells[a].textContent === "") {
                cells[a].textContent = computer;
                return;
        }
    }

    // Block the player's win if they have two symbols in a row
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (cells[a].textContent === "X" &&
            cells[b].textContent === "X" &&
            cells[c].textContent === "") {
                cells[c].textContent = computer;
                return;
        }
        if (cells[a].textContent === "X" &&
            cells[c].textContent === "X" &&
            cells[b].textContent === "") {
                cells[b].textContent = computer;
                return;
        }
        if (cells[b].textContent === "X" &&
            cells[c].textContent === "X" &&
            cells[a].textContent === "") {
                cells[a].textContent = computer;
                return;
        }
    }
    
    // Checks if any empty cells are left to play in
    if (emptyCells <= 0) {
        setTimeout(function() {
            alert(`Its a Draw!`);
            currentPlayer = "X"; // set symbol to "X" before starting new game
            newGame();
        }, 100);
    } else if (emptyCells => 1) {
        // Place the symbol in an empty cell
        emptyCells[randomCell].textContent = computer;
    }
}

/**
 * Increases score for the 'games won' section
 */
function incrementWins() {
    let winScore = parseInt(document.getElementById("games-won").innerText);
	document.getElementById("games-won").innerText = ++winScore;
}

/**
 * Increases score for the 'games lost' section
 */
function incrementLosses() {
    let lossScore = parseInt(document.getElementById("games-lost").innerText);
	document.getElementById("games-lost").innerText = ++lossScore;
}

/**
 * Clears all scores and board to empty
 */
function resetGame() {
    newGame();
    document.getElementById("games-won").innerText = "0";
    document.getElementById("games-lost").innerText = "0";
}