// Array of questions
let questions = [
  {
    title: '6',
    alternatives: ['ichi', 'go', 'roku', 'san'],
    correctAnswer: 2
  },
  {
    title: 'zenkutsu-dachi',
    alternatives: ['front stance', 'back stance', 'horse stance', 'cat stance'],
    correctAnswer: 0
  },
  {
    title: 'nukite',
    alternatives: ['punch', 'elbow', 'back hand', 'spear-hand'],
    correctAnswer: 3
  },
  {
    title: 'mae-geri',
    alternatives: ['round house', 'snap kick', 'thrust kick', 'front kick'],
    correctAnswer: 3
  },
  {
    title: 'shuto-uke',
    alternatives: ['knife hand block', 'punch', 'kick', 'elbow strike'],
    correctAnswer: 0
  },
  {
    title: 'yoko-geri',
    alternatives: ['side kick', 'front kick', 'back kick', 'roundhouse kick'],
    correctAnswer: 0
  },
  {
    title: 'Jodan',
    alternatives: ['high', 'middle', 'low', 'behind'],
    correctAnswer: 0
  },
  {
    title: 'Agi-uke',
    alternatives: ['high block', 'middle-block', 'low block', 'capture'],
    correctAnswer: 0
  },
  {
    title: 'Chudan',
    alternatives: ['high', 'middle', 'low', 'behind'],
    correctAnswer: 1
  },
  {
    title: 'Uke',
    alternatives: ['strike', 'dodge', 'receive', 'give'],
    correctAnswer: 2
  },
  {
    title: 'Obi',
    alternatives: ['strike', 'belt', 'receive', 'give'],
    correctAnswer: 1
  },
  
];

// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the questions array
shuffleArray(questions);

// Function to display the questions (example)
function displayQuestions() {
  questions.forEach((q, index) => {
    console.log(`Question ${index + 1}: ${q.title}`);
    // Add code to display the question in the UI
  });
}

// Call the function to display the questions
displayQuestions();

let app = {
  start: function(difficulty) {
    this.currPosition = 0;
    this.score = 0;
    this.difficulty = difficulty;
    this.showQuestion();
  },

  showQuestion: function() {
    if (this.currPosition < questions.length) {
      let question = questions[this.currPosition];
      document.getElementById('title').textContent = question.title;
      let choices = document.querySelectorAll('.alternative');
      choices.forEach((element, index) => {
        element.textContent = question.alternatives[index];
        element.onclick = () => this.checkAnswer(index);
      });
    } else {
      if (this.difficulty === 'hard' && this.score === questions.length) {
        changeImageAllCorrect();
      }
      document.getElementById('result').textContent = 'Quiz finished! Your score is: ' + this.score;
    }
  },

  checkAnswer: function(userAnswer) {
    let question = questions[this.currPosition];
    if (userAnswer === question.correctAnswer) {
      this.score++;
      document.getElementById('result').textContent = 'Correct! Daniel san';
      changeImageOnCorrectAnswer();
    } else {
      document.getElementById('result').textContent = 'Wrong! Daniel san';
      changeImageOnWrongAnswer();
      if (this.difficulty === 'hard') {
        changeImageBasedOnScore(this.score);
        document.getElementById('result').textContent += ' Game over! Your score is: ' + this.score;
        return;
      }
    }
    this.currPosition++;
    this.showQuestion();
  }
};

// Event listeners to the difficulty buttons
document.getElementById('normal-btn').onclick = () => app.start('normal');
document.getElementById('hard-btn').onclick = () => app.start('hard');
document.getElementById('reset-btn').addEventListener('click', resetQuiz);

function resetQuiz() {
  app.start(app.difficulty);
  document.getElementById('result').textContent = '';
  var imgElement = document.getElementById('quiz-image');
  imgElement.src = 'assets/images/shrine-154572_640.webp';
  imgElement.alt = 'Default Image';
}


// Wrong or correct image
function changeImageOnWrongAnswer() {
  var imgElement = document.getElementById('quiz-image'); 
  imgElement.src = 'assets/images/KarateSausage.webp';
  imgElement.alt = 'Karate Sausage';
}

function changeImageOnCorrectAnswer() {
  var imgElement = document.getElementById('quiz-image');
  imgElement.src = 'assets/images/pow.webp'; 
  imgElement.alt = 'Pow success';
}

// Replacement images for belt system
function changeImageBasedOnScore(score) {
  var imgElement = document.getElementById('quiz-image'); 
  switch(score) {
    case 1:
      imgElement.src = 'assets/images/WhiteBelt.webp'; 
      imgElement.alt = 'White Belt';
      break;
    case 2:
      imgElement.src = 'assets/images/OrangeBelt.webp'; 
      imgElement.alt = 'Orange Belt';
      break;
    case 3:
      imgElement.src = 'assets/images/RedBelt.webp'; 
      imgElement.alt = 'Red Belt';
      break;
    case 4:
      imgElement.src = 'assets/images/YellowBelt.webp'; 
      imgElement.alt = 'Yellow Belt';
      break;
    case 5:
      imgElement.src = 'assets/images/GreenBelt.webp'; 
      imgElement.alt = 'Green Belt';
      break;
    case 6:
      imgElement.src = 'assets/images/PurpleBelt.webp'; 
      imgElement.alt = 'Purple Belt';
      break;
    case 7:
      imgElement.src = 'assets/images/PurpleWhiteBelt.webp'; 
      imgElement.alt = 'Purple and White Belt';
      break;
    case 8:
      imgElement.src = 'assets/images/BrownBelt.webp'; 
      imgElement.alt = 'Brown Belt';
      break;
    case 9:
      imgElement.src = 'assets/images/BrownWhiteBelt.webp'; 
      imgElement.alt = 'Brown and White Belt';
      break;
    case 10:
      imgElement.src = 'assets/images/Brown2WhiteBelt.webp'; 
      imgElement.alt = 'Brown and Two White Stripes Belt';
      break;
    case 11:
      imgElement.src = 'assets/images/BlackBelt.webp'; 
      imgElement.alt = 'Black Belt';
      break;
    default:
      imgElement.src = 'assets/images/shrine-154572_640.webp'; 
      imgElement.alt = 'image of a Japaneses shrine gate';
  }
}

function changeImageAllCorrect() {
  var imgElement = document.getElementById('quiz-image');
  imgElement.src = 'assets/images/BlackBelt.webp';
  imgElement.alt = 'Black belt winner'; 
}


