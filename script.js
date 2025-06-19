let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let categoryScores = {};

function startQuiz() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('questionSection').style.display = 'block';
    displayQuestion();
}

function updateQuizInfo() {
    const questionCount = questions.length;
    const totalPoints = questions.reduce((sum, question) => sum + question.points, 0);
    document.getElementById('questionCount').textContent = questionCount;
    document.getElementById('totalPoints').textContent = totalPoints;
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
    
    // Calculate total possible points dynamically
    const totalPoints = questions.reduce((sum, question) => sum + question.points, 0);
    const percentage = Math.round((score / totalPoints) * 100);
    document.getElementById('scoreDisplay').textContent = `${score} / ${totalPoints} (${percentage}%)`;
    
    // US Letter Grading System
    let letterGrade, gradeText, gradeClass;
    if (percentage >= 90) {
        letterGrade = "A";
        gradeText = "Excellent - Advanced Understanding";
        gradeClass = "excellent";
    } else if (percentage >= 80) {
        letterGrade = "B";
        gradeText = "Good - Solid Intermediate Knowledge";
        gradeClass = "good";
    } else if (percentage >= 70) {
        letterGrade = "C";
        gradeText = "Satisfactory - Basic Understanding";
        gradeClass = "fair";
    } else if (percentage >= 60) {
        letterGrade = "D";
        gradeText = "Below Average - Needs Improvement";
        gradeClass = "poor";
    } else {
        letterGrade = "F";
        gradeText = "Failing - Requires Significant Study";
        gradeClass = "poor";
    }
    
    const gradeDiv = document.getElementById('gradeDisplay');
    gradeDiv.innerHTML = `<div class="letter-grade">${letterGrade}</div><div class="grade-description">${gradeText}</div>`;
    gradeDiv.className = `grade ${gradeClass}`;
    
    // Calculate category maximums dynamically
    const categories = {};
    questions.forEach(question => {
        if (!categories[question.category]) {
            categories[question.category] = 0;
        }
        categories[question.category] += question.points;
    });
    
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
    // Reset all quiz state
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    categoryScores = {};
    
    // Hide result screen and show start screen
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    document.getElementById('questionSection').style.display = 'none';
    
    // Reset progress bar
    document.getElementById('progressFill').style.width = '0%';
    
    // Clear any feedback that might be showing
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('feedback').innerHTML = '';
    
    // Reset question display elements
    document.getElementById('questionNumber').textContent = '';
    document.getElementById('category').textContent = '';
    document.getElementById('points').textContent = '';
    document.getElementById('questionText').textContent = '';
    document.getElementById('optionsContainer').innerHTML = '';
    
    // Reset buttons
    document.getElementById('prevBtn').disabled = true;
    document.getElementById('nextBtn').disabled = true;
    document.getElementById('nextBtn').textContent = 'Next';
    
    // Update quiz info
    updateQuizInfo();
}

// Initialize quiz info when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateQuizInfo();
});