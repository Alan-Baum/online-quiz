// ==============================
// DOM Elements
// ==============================

const questionElement = document.querySelector(".question");
const answerButtons = document.querySelectorAll(".answers button");
const feedback = document.querySelector(".feedback");
const nextButton = document.querySelector(".next-btn");
const scoreElement = document.querySelector(".score");
const restartButton = document.querySelector(".restart-btn");

// ==============================
// Quiz Data
// ==============================

const quizData = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "JQuery", "CSS", "XML"],
    correct: 2
  },
  {
    question: "Which is not a JavaScript data type?",
    answers: ["Number", "String", "Boolean", "Float"],
    correct: 3
  }
];

// ==============================
// Quiz State
// ==============================

let currentQuestion = 0;
let score = 0;

// ==============================
// Utility: Shuffle Questions
// ==============================

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ==============================
// Load Question
// ==============================

function loadQuestion() {
  const current = quizData[currentQuestion];

  questionElement.textContent = current.question;
  feedback.textContent = "";
  nextButton.style.display = "none";

  answerButtons.forEach((button, index) => {
    button.textContent = current.answers[index];
    button.disabled = false;
    button.style.backgroundColor = "";
  });
}

// ==============================
// Answer Selection
// ==============================

answerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const correctIndex = quizData[currentQuestion].correct;

    // Disable all buttons after selection
    answerButtons.forEach(btn => btn.disabled = true);

    // Highlight correct answer only (accent colour)
    answerButtons[correctIndex].style.backgroundColor = "#4CAF50";

    if (index === correctIndex) {
      feedback.textContent = "Correct!";
    } else {
      feedback.textContent = "Wrong!";
    }

    feedback.style.color = "#333";

    score += index === correctIndex ? 1 : 0;
    scoreElement.textContent = `Score: ${score}`;

    nextButton.style.display = "inline-block";
  });
});


// ==============================
// Next Question
// ==============================

nextButton.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionElement.textContent = "Quiz complete!";
    feedback.textContent = `Final score: ${score} / ${quizData.length}`;
    nextButton.style.display = "none";
    restartButton.style.display = "inline-block";
  }
});

// ==============================
// Restart Quiz
// ==============================

restartButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  scoreElement.textContent = "Score: 0";
  restartButton.style.display = "none";
  shuffle(quizData);
  loadQuestion();
});

// ==============================
// Initialise Quiz
// ==============================

shuffle(quizData);
loadQuestion();

