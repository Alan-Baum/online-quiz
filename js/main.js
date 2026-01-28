/* jshint esversion: 6 */
/* jshint browser: true */

// ================================
// Online Quiz – main.js
// Handles question loading, user answers, score tracking, and feedback
// ================================

// Example questions array
const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<script>", "<javascript>"],
    answer: 2
  }
];

// Quiz state variables
let currentQuestionIndex = 0;
let score = 0;

// Select DOM elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreEl = document.getElementById("score");

// Load a question
const loadQuestion = () => {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "option-btn";
    button.addEventListener("click", () => selectAnswer(index));
    optionsEl.appendChild(button);
  });
};

// Handle answer selection
const selectAnswer = (selectedIndex) => {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.answer) {
    score++;
    alert("Correct!");
  } else {
    alert(`Wrong! The correct answer is "${currentQuestion.options[currentQuestion.answer]}".`);
  }
  disableOptions();
};

// Disable option buttons after selection
const disableOptions = () => {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));
};

// Move to next question
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

// Show final score
const showScore = () => {
  questionEl.textContent = `Quiz Finished! Your score is ${score} out of ${questions.length}.`;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
};

// Restart quiz
restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  loadQuestion();
});

// Initialize quiz
loadQuestion();
