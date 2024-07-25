// Sample questions and answers
const quizData = [
    { question: "2 + 2 =", answer: 4 },
    { question: "10 - 5 =", answer: 5 },
    { question: "3 * 3 =", answer: 9 },
    { question: "20 / 4 =", answer: 5 }
];

let currentQuestionIndex = 0;
let playerTurn = 1;
let score = 0;

function login() {
    const username = document.getElementById('username').value;
    if (username.trim() !== '') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('quiz-section').style.display = 'block';
        showQuestion();
    } else {
        alert('Please enter a username');
    }
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = quizData[currentQuestionIndex].question;
}

function submitAnswer() {
    const answer = parseInt(document.getElementById('answer').value);
    if (!isNaN(answer)) {
        const correctAnswer = quizData[currentQuestionIndex].answer;
        if (answer === correctAnswer) {
            document.getElementById('result').textContent = 'Correct!';
            score++;
            document.getElementById('score-value').textContent = score;
        } else {
            document.getElementById('result').textContent = 'Wrong! Try again.';
        }
        document.getElementById('answer').value = '';
    } else {
        alert('Please enter a valid number');
    }
}

function changeTurn() {
    currentQuestionIndex++;
    playerTurn = (playerTurn % 2) + 1; // Switch turn between 1 and 2
    if (currentQuestionIndex >= quizData.length) {
        endGame();
    } else {
        showQuestion();
    }
}

function endGame() {
    document.getElementById('quiz-section').innerHTML = `<h2>Game Over</h2><p>Final Score: ${score}</p>`;
}
