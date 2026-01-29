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

  Array.from(answerButtonsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === "true");
  });

  if (correct) {
    score++;
    feedbackEl.textContent = "Correct!";
  } else {
    feedbackEl.textContent = "Wrong answer.";
  }

  scoreEl.textContent = `Score: ${score}`;

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(showFinalScore, 500);
  }
}

function setStatusClass(button, correct) {
  clearStatusClass(button);
  if (correct) {
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
  }
}

function clearStatusClass(button) {
  button.classList.remove("correct");
  button.classList.remove("wrong");
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
