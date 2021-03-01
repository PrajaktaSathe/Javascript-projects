const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn')

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');    
    }
    else {
        startButton.innerText = "Restart";
        startButton.classList.remove('hide');
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: "What is Harry Potter\'s middle name?",
        answers: [
            { text: 'James', correct: true },
            { text: 'Ron', correct: false},
            { text: 'Severus', correct: false},
            { text: 'Sirius', correct: false}
        ]
    },
    {
        question: "Which house does Snape belong to??",
        answers: [
            { text: 'Hufflepuff', correct: false },
            { text: 'Ravenclaw', correct: false},
            { text: 'Slytherin', correct: true},
            { text: 'Gryffindor', correct: false}
        ]
    },
    {
        question: "Which of the following is the middle name of Tom Marvolo Riddle?",
        answers: [
            { text: 'Kayla Riddle', correct: false },
            { text: 'Merope Riddle', correct: true},
            { text: 'Marlene Riddle', correct: false},
            { text: 'Mackenzie Riddle', correct: false}
        ]
    },
    {
        question: "When is Ron\'s birthday?",
        answers: [
            { text: 'March 22nd', correct: false },
            { text: 'March 1st', correct: true},
            { text: 'July 21st', correct: false},
            { text: 'September 1st', correct: false}
        ]
    },
    {
        question: "How many staircases does Hogwarts have?",
        answers: [
            { text: '142', correct: true },
            { text: '56', correct: false},
            { text: '196', correct: false},
            { text: '20', correct: false}
        ]
    },
    {
        question: "What was the name of Hagrid\'s first dragon?",
        answers: [
            { text: 'Fang', correct: false },
            { text: 'Fluffy', correct: false},
            { text: 'Aragog', correct: false},
            { text: 'Norbert', correct: true}
        ]
    }
]