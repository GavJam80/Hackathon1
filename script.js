const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// quiz questions and answers
let questions = [
  {
    question: "What is 'hajime' in karate?",
    answers: [
      { text: "Begin", correct: true },
      { text: "Stop", correct: false },
      { text: "Ready", correct: false },
      { text: "Bow", correct: false },
    ],
  },

  {
    question: "What is 6?",
    answers: [
      { text: "Ichi", correct: false },
      { text: "Go", correct: false },
      { text: "Roku", correct: true },
      { text: "San", correct: false },
    ],
  },
  {
    question: "What is zenkutsu-dachi in karate?",
    answers: [
      {text:"front stance", correct: true},
      {text:"back stance", correct: false},
      {text: "horse stance", correct: false},
      {text:"cat stance", correct: false},
    ]
  },
  {
    question:"What is nukite in karate?",
    alternatives: ["punch", "elbow", "back hand", "spear-hand"],
    correctAnswer: 3,
  },
  {
    question: "What is mae-geri in karate?",
    alternatives: ["round house", "snap kick", "thrust kick", "front kick"],
    correctAnswer: 3,
  },
  {
    question: "What is shuto-uke in karate?",
    alternatives: ["knife hand block", "punch", "kick", "elbow strike"],
    correctAnswer: 0,
  },
  {
    question: "What is yoko-geri in karate?",
    alternatives: ["side kick", "front kick", "back kick", "roundhouse kick"],
    correctAnswer: 0,
  },
  {
    question: "What is Jodan in karate?",
    alternatives: ["high", "middle", "low", "behind"],
    correctAnswer: 0,
  },
  {
    question: "What is Agi-uke in karate?",
    alternatives: ["high block", "middle-block", "low block", "capture"],
    correctAnswer: 0,
  },
  {
    question: "What is Chudan in karate?",
    alternatives: ["high", "middle", "low", "behind"],
    correctAnswer: 1,
  },
  {
    question: "What is Uke in karate?",
    alternatives: ["strike", "dodge", "receive", "give"],
    correctAnswer: 2,
  },
  {
    question: "What is Obi in karate?",
    alternatives: ["strike", "belt", "receive", "give"],
    correctAnswer: 1,
  },
];

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.add("hide");
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn", "btn-outline-primary"); // Add Bootstrap outline class
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  setStatusClass(selectedButton, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct === "true");
  });
  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  showQuestion();
});

startQuiz();
