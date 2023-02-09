// Get drop down menu colours
const greenBoard = document.getElementById("green-board");
const orangeBoard = document.getElementById("orange-board");
const greyBoard = document.getElementById("grey-board");
const gameSquares = document.querySelectorAll("td");

// Event listeners for anchor elements in colour drop down menu
// Gameboard colour Green/Red
greenBoard.addEventListener("click", function () {
    gameSquares.forEach(gameSquare => {
        gameSquare.style.backgroundColor = "#91c7b1";
        gameSquare.style.color = "#b33951";
    });
});

// Gameboard colour Orange/Black
orangeBoard.addEventListener("click", function () {
    gameSquares.forEach(gameSquare => {
        gameSquare.style.backgroundColor = "#FF7F00";
        gameSquare.style.color = "#000";
    });
});

// Gameboard colour Grey/White
greyBoard.addEventListener("click", function () {
    gameSquares.forEach(gameSquare => {
        gameSquare.style.backgroundColor = "#778899";
        gameSquare.style.color = "#f1f7ed";
    });
});