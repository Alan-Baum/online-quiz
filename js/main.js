/* jshint esversion: 6 */
/* jshint browser: true */

const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");
const restartBtn = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false }
    ]
  },
  {
    question: "Which language is used for styling web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "JavaScript", correct: false }
    ]
  },
  {
    question: "Which language is used for web page interactivity?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
      { text: "JavaScript", correct: true }
    ]
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false }
    ]
  },
  {
    question: "Which CSS property is used to change text color?",
    answers: [
      { text: "font-style", correct: false },
      { text: "color", correct: true },
      { text: "text-decoration", correct: false }
    ]
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<script>", correct: true },
      { text: "<js>", correct: false }
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "<!-- -->", correct: false },
      { text: "#", correct: false }
    ]
  },
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    answers: [
      { text: "querySelectorAll()", correct: false },
      { text: "getElementById()", correct: true },
      { text: "getElementsByClass()", correct: false }
    ]
  },
  {
    question: "Which CSS property controls the size of text?",
    answers: [
      { text: "font-size", correct: true },
      { text: "text-size", correct: false },
      { text: "font-style", correct: false }
    ]
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Method", correct: false },
      { text: "Digital Ordinance Model", correct: false }
    ]
  }
];

function startQuiz() {
  questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  scoreEl.textContent = `Score: ${score}`;
  feedbackEl.textContent = "";
  restartBtn.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
  feedbackEl.textContent = "";
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";

  // Disable all buttons
  Array.from(answerButtonsEl.children).forEach(button => {
    button.disabled = true;
  });

  if (correct) {
    selectedButton.classList.add("correct");
    score++;
    feedbackEl.textContent = "Correct!";
  } else {
    selectedButton.classList.add("wrong");
    feedbackEl.textContent = "Wrong answer.";
  }

  scoreEl.textContent = `Score: ${score}`;

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(showFinalScore, 1000);
  }
}

function showFinalScore() {
  resetState();
  scoreEl.textContent = "";
  questionEl.textContent = `Your final score is ${score} out of ${questions.length}.`;
  restartBtn.style.display = "inline-block";
}

restartBtn.addEventListener("click", startQuiz);

// Start quiz
startQuiz();
