// Utility function to log test results
function logResult(testName, passed) {
    const resultsDiv = document.getElementById('results');
    const result = document.createElement('div');
    result.className = `test-result ${passed ? 'pass' : 'fail'}`;
    result.textContent = `${testName}: ${passed ? 'PASSED ✅' : 'FAILED ❌'}`;
    resultsDiv.appendChild(result);
}

// Example test case to check victory logic (update with actual logic from your script)
function testVictoryDetection() {
    const board = [
        ['X', 'X', 'X'],
        ['O', null, 'O'],
        [null, null, null],
    ];

    const winner = checkWinner(board); // Assuming checkWinner(board) exists in script.js

    const result = winner === 'X'; // Expected result: 'X' wins
    logResult('Victory detection for row', result);
}

// Example test case to check tie detection
function testTieCondition() {
    const board = [
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['O', 'X', 'O'],
    ];

    const winner = checkWinner(board); // Assuming checkWinner(board) exists in script.js

    const result = winner === null; // Expected outcome: no winner (tie)
    logResult('Tie detection', result);
}

// Run all tests
function runTests() {
    testVictoryDetection();
    testTieCondition();
}

// Start running tests when the page loads
window.onload = runTests;