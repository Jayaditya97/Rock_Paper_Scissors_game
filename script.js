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

