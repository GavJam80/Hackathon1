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
    }
  ];
  
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
        document.getElementById('result').textContent = 'Quiz finished! Your score is: ' + this.score;
      }
    },
  
    checkAnswer: function(userAnswer) {
      let question = questions[this.currPosition];
      if (userAnswer === question.correctAnswer) {
        this.score++;
        document.getElementById('result').textContent = 'Correct! Daniel san';
      } else {
        document.getElementById('result').textContent = 'Wrong! Daniel san';
        if (this.difficulty === 'hard') {
          document.getElementById('result').textContent += ' Game over! Your score is: ' + this.score;
          return;
        }
      }
      this.currPosition++;
      this.showQuestion();
    }
  };
  
  // Add event listeners to the difficulty buttons
  document.getElementById('normal-btn').onclick = () => app.start('normal');
  document.getElementById('hard-btn').onclick = () => app.start('hard');