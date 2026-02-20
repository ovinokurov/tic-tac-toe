const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');
const modal = document.getElementById('custom-modal');
const modalMessage = document.getElementById('modal-message');
const modalClose = document.getElementById('modal-close');

let currentPlayer = 'X';
let gameState = Array(9).fill('');

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.dataset.index;

    if (gameState[index] || checkWin()) {
        return;
    }

    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
        showModal(`${currentPlayer} wins! 🎉`);
        return;
    }

    if (gameState.every(cell => cell)) {
        showModal(`It's a tie! No moves left.`);
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => gameState[index] === currentPlayer);
    });
}

function showModal(message) {
    modalMessage.textContent = message;
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

function restartGame() {
    gameState = Array(9).fill('');
    currentPlayer = 'X';
    cells.forEach(cell => (cell.textContent = ''));
    closeModal();
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);
modalClose.addEventListener('click', closeModal);