// DOM Element Section
// select HTML elements from the DOM using their IDs

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// currentQuestionIndex tracks which question is currently being displayed
// score keeps the user's score
let currentQuestionIndex = 0;
let score = 0;

// Questions Array/quiz questions and answers
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
      { text: "front stance", correct: true },
      { text: "back stance", correct: false },
      { text: "horse stance", correct: false },
      { text: "cat stance", correct: false },
    ],
  },
  {
    question: "What is nukite in karate?",
    answers: [
      {text: "punch", correct: false},
      {text: "elbow", correct: false},
      {text: "back hand", correct: false},
      {text: "spear-hand", correct: true},
     ],
  },
  {
    question: "What is mae-geri in karate?",
    answers: [
      {text:"snap kick", correct: false}, 
      {text:"thrust kick", correct: false}, 
      {text:"round house", correct: false}, 
      {text:"front kick", correct: true},
    ],
  },
  {
    question: "What is shuto-uke in karate?",
    answers: [
      {text:"knife hand block", correct: true}, 
      {text:"punch", correct: false}, 
      {text:"kick", correct: false}, 
      {text:"elbow strike, correct: false"},
    ],
  },
  {
    question: "What is yoko-geri in karate?",
    answers: [
      {text:"side kick", correct: true}, 
      {text:"front kick", correct: false}, 
      {text:"back kick", correct: false}, 
      {text:"roundhouse kick",  correct: false},
    ],
  },
  {
    question: "What is Jodan in karate?",
    answers: [
      {text:"high", correct: true},
      {text:"middle", correct: false},
      {text:"low", correct: false},
      {text:"behind", correct: false},
    ],
  },
  {
    question: "What is Agi-uke in karate?",
    answers: [
      {text:"high block", correct: false}, 
      {text:"middle-block", correct: false}, 
      {text:"low block", correct: false}, 
      {text:"capture", correct: true},
    ],
  },
  {
    question: "What is Chudan in karate?",
    answers: [
      {text:"high", correct: false}, 
      {text:"middle", correct: true},
      {text: "low", correct: false}, 
      {text:"behind", correct: false},
    ],
  },
  {
    question: "What is Uke in karate?",
    answers: [
      {text:"strike", correct: false}, 
        {text:"dodge", correct: false}, 
        {text:"receive", correct: true}, 
        {text:"give", correct: false},
      ],
  },
    {
    question: "What is Obi in karate?",
    answers: [
      {text:"strike", correct: false}, 
      {text:"belt", correct: true}, 
      {text:"receive", correct: false}, 
      {text:"give", correct: false},
    ],
  },
];

// startQuiz() Function initializes the quiz by resetting the question index and score, hiding the next button, and showing the first question.
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.add("hide");
  showQuestion();
}

// showQuestion() Function displays the current question and its answers. 
// It first resets the state of the quiz by calling the resetState() function, then it gets the current question from the questions array using the currentQuestionIndex. 
// It sets the question text to the questionElement and creates a button for each answer. 
// It adds the Bootstrap outline class to each button and sets the correct attribute to the button if the answer is correct. 
// It then appends the button to the answerButtonsElement. Finally, it adds an event listener to each button that calls the selectAnswer() function when clicked.
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
