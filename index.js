let gameZone = document.querySelector('.game-zone');
let state = document.querySelector('.state');
let gameSpace = ['', '', '', '', '', '', '', '', ''];
let winCondition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
let currentPlayer = 'X';

gameSpace.forEach((game, index) => {
    let gameDiv = document.createElement('div');
    gameDiv.classList.add('square');
    gameZone.appendChild(gameDiv);
    gameDiv.addEventListener('click', () => {
        if (gameDiv.innerText === '' && currentPlayer === 'X') {
            gameDiv.innerText = currentPlayer;
            gameSpace[index] = currentPlayer; // Update gameSpace array
            currentPlayer = 'O';
            checkWinner();
        } else if (currentPlayer === 'O' && gameDiv.innerText === '') {
            gameDiv.innerText = currentPlayer;
            gameSpace[index] = currentPlayer; // Update gameSpace array
            currentPlayer = 'X';
            checkWinner();
        }
    });
});

function checkWinner() {
    for (const condition of winCondition) {
        const [a, b, c] = condition;
        if (gameSpace[a] && gameSpace[a] === gameSpace[b] && gameSpace[b] === gameSpace[c]) {
            alert(`${gameSpace[a]} wins!`);
            reset();
            return;
        }
    }

    if (!gameSpace.includes('')) {
        alert("It's a draw!");
        reset();
    }
}

function reset() {
    gameSpace = ['', '', '', '', '', '', '', '', '']; // Removed 'let' to modify global variable
    currentPlayer = 'X'; // Removed 'let' to modify global variable
    document.querySelectorAll('.square').forEach(square => {
        square.innerText = ''; // Reset the inner text of all squares
    });
}
