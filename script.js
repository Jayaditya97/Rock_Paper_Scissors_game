// Game variables
let userScore = 0;
let computerScore = 0;
let gameHistory = [];
let isAnimating = false;

// DOM elements
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetButton = document.getElementById('reset-btn');
const historyList = document.getElementById('history-list');

// Choice icons
const choiceIcons = {
    rock: '✊',
    paper: '✋',
    scissors: '✌'
};

// Add event listeners to choice buttons
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (isAnimating) return;
        
        const userChoice = button.getAttribute('data-choice');
        playGame(userChoice);
    });
});

// Reset button event listener
resetButton.addEventListener('click', resetGame);

// Play game function
function playGame(userChoice) {
    isAnimating = true;
}
    // Display user choice
    userChoiceDisplay.textContent = choiceIcons[userChoice];
    
    // Reset computer choice and result message
    computerChoiceDisplay.textContent = '?';
    resultMessage.textContent = 'Computer is choosing...';
    resultMessage.className = 'result-message';
    
    // Simulate computer "thinking"
    setTimeout(() => {
        // Get computer choice
        const computerChoice = getComputerChoice();
        computerChoiceDisplay.textContent = choiceIcons[computerChoice];
        
        // Determine winner
        const result = determineWinner(userChoice, computerChoice);
        
        // Update score
        updateScore(result);
        
        // Display result
        displayResult(result, userChoice, computerChoice);
        
        // Add to history
        addToHistory(userChoice, computerChoice, result);
        
        isAnimating = false;
    }, 1000);

    // Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
// Determine winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }
    
    return 'lose';
}

// Update score
function updateScore(result) {
    if (result === 'win') {
        userScore++;
        userScoreElement.textContent = userScore;
    } else if (result === 'lose') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}
