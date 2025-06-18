let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let categoryScores = {};

function startQuiz() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('questionSection').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('category').textContent = q.category;
    document.getElementById('points').textContent = `${q.points} points`;
    document.getElementById('questionText').textContent = q.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `<span class="option-label">${String.fromCharCode(65 + index)})</span> ${option}`;
        optionDiv.onclick = () => selectOption(index);
        
        if (userAnswers[currentQuestion] !== undefined) {
            optionDiv.classList.add('disabled');
            if (index === userAnswers[currentQuestion]) {
                optionDiv.classList.add(index === q.correct ? 'correct' : 'incorrect');
            } else if (index === q.correct) {
                optionDiv.classList.add('correct');
            }
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    updateProgress();
    updateButtons();
    
    if (userAnswers[currentQuestion] !== undefined) {
        showFeedback(userAnswers[currentQuestion] === q.correct);
    }
}

function selectOption(index) {
    if (userAnswers[currentQuestion] !== undefined) return;
    
    userAnswers[currentQuestion] = index;
    const q = questions[currentQuestion];
    const correct = index === q.correct;
    
    if (correct) {
        score += q.points;
        categoryScores[q.category] = (categoryScores[q.category] || 0) + q.points;
    }
    
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.classList.add('disabled');
        if (i === index) {
            opt.classList.add(correct ? 'correct' : 'incorrect');
        } else if (i === q.correct) {
            opt.classList.add('correct');
        }
    });
    
    showFeedback(correct);
    updateButtons();
}

function showFeedback(correct) {
    const feedback = document.getElementById('feedback');
    const q = questions[currentQuestion];
    feedback.className = `feedback ${correct ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `<strong>${correct ? 'Correct!' : 'Incorrect.'}</strong> ${q.explanation}`;
    feedback.style.display = 'block';
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function updateButtons() {
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = userAnswers[currentQuestion] === undefined;
    
    if (currentQuestion === questions.length - 1) {
        document.getElementById('nextBtn').textContent = 'Finish';
    } else {
        document.getElementById('nextBtn').textContent = 'Next';
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        document.getElementById('feedback').style.display = 'none';
        displayQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        document.getElementById('feedback').style.display = 'none';
        displayQuestion();
    }
}

function showResults() {
    document.getElementById('questionSection').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
    const percentage = Math.round((score / 110) * 100);
    document.getElementById('scoreDisplay').textContent = `${score} / 110 (${percentage}%)`;
    
    let gradeText, gradeClass;
    if (score >= 90) {
        gradeText = "Advanced Understanding - Ready for high-stakes games!";
        gradeClass = "excellent";
    } else if (score >= 75) {
        gradeText = "Solid Grasp - Strong intermediate player";
        gradeClass = "good";
    } else if (score >= 60) {
        gradeText = "Good Foundation - Keep studying and practicing";
        gradeClass = "fair";
    } else if (score >= 45) {
        gradeText = "Understanding Basics - Focus on fundamentals";
        gradeClass = "fair";
    } else {
        gradeText = "Review the guide thoroughly before playing serious poker";
        gradeClass = "poor";
    }
    
    const gradeDiv = document.getElementById('gradeDisplay');
    gradeDiv.textContent = gradeText;
    gradeDiv.className = `grade ${gradeClass}`;
    
    // Category breakdown
    const categories = {
        "Poker Math": 25,
        "Betting Strategy": 18,
        "Ranges & Categories": 20,
        "Position": 12,
        "Balance & Exploits": 20,
        "Game Theory": 15
    };
    
    let breakdownHTML = '<h3>Score by Category:</h3>';
    for (const [cat, maxPoints] of Object.entries(categories)) {
        const earned = categoryScores[cat] || 0;
        const percentage = Math.round((earned / maxPoints) * 100);
        breakdownHTML += `
            <div class="score-category">
                <span>${cat}</span>
                <span>${earned}/${maxPoints} (${percentage}%)</span>
            </div>
        `;
    }
    
    document.getElementById('scoreBreakdown').innerHTML = breakdownHTML;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    categoryScores = {};
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    document.getElementById('progressFill').style.width = '0%';
}