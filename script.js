// script.js
const questions = [
    {
        question: "What is Phillip's favorite color",
        choices: ["Green", "Black", "Pink", "Red"],
        answer: 1
    },
    {
        question: "What is Phillip's dog's name?",
        choices: ["Poco", "Sisha", "BuBu", "Miko"],
        answer: 0
    },
    {
        question: "Where is Phillip from?",
        choices: ["Malaysia", "China", "Vietnam", "Indonesia"],
        answer: 3
    },
    {
        question: "What is Phillip's favorite food?",
        choices: ["Instant ramen", "Takoyaki", "Hamburger", "Porridge"],
        answer: 1
    },
    {
        question: "What is Phillip's height?",
        choices: ["167", "170", "175", "182"],
        answer: 2
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    let quizHTML = '';
    questions.forEach((q, index) => {
        quizHTML += `<p>${q.question}</p>`;
        q.choices.forEach((choice, i) => {
            quizHTML += `
                <input type="radio" id="q${index}_a${i}" name="q${index}" value="${i}" required>
                <label for="q${index}_a${i}">${choice}</label><br>
            `;
        });
    });
    quizContainer.innerHTML = quizHTML;
}

function submitQuiz() {
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        alert('Please enter your name.');
        return;
    }

    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score += 20;
        }
    });

    alert(`${username}, your score is: ${score}`);
}

document.addEventListener('DOMContentLoaded', loadQuiz);
