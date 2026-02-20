// Utility function to log test results
function logResult(testName, passed) {
    const resultsDiv = document.getElementById('results');
    const result = document.createElement('div');
    result.className = `test-result ${passed ? 'pass' : 'fail'}`;
    result.textContent = `${testName}: ${passed ? 'PASSED ✅' : 'FAILED ❌'}`;
    resultsDiv.appendChild(result);
}

// Example test case to check victory logic
function testVictoryDetection() {
    const gameState = [
        'X', 'X', 'X',
        'O', null, 'O',
        null, null, null
    ];

    const result = winningCombinations.some(combination => {
        return combination.every(index => gameState[index] === 'X');
    });

    logResult('Victory detection for row', result);
}

// Example test case to check tie detection
function testTieCondition() {
    const gameState = [
        'X', 'O', 'X',
        'O', 'X', 'O',
        'O', 'X', 'O'
    ];

    const result = winningCombinations.some(combination => {
        return combination.every(index => gameState[index] === 'X');
    }) === false;

    logResult('Tie detection', result);
}

// Run all tests
function runTests() {
    testVictoryDetection();
    testTieCondition();
}

// Start running tests when the page loads
window.onload = runTests;