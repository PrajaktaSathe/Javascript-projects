// contains questions along with options and correct answers -
const quizData = [
    {
        question: "Which of the following is the most spoken language in the world?",
        a: "Russian",
        b: "Japanese",
        c: "Hindi",
        d: "English",
        correct: "d",
    },
    {
        question: "Who is the current Prime Minister of India?",
        a: "Narendra Modi",
        b: "Ram Nath Kovind",
        c: "Manmohan Singh",
        d: "Indira Gandhi",
        correct: "a",
    },
    {
        question: "The Coronavirus has originated from which country?",
        a: "Brazil",
        b: "China",
        c: "Japan",
        d: "Africa",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Who discovered America?",
        a: "Vasco-da-Gama",
        b: "Captain Cook",
        c: "Christopher Columbus",
        d: "Amerigo Vespucci",
        correct: "c",
    }
];

const quiz = document.getElementById("quiz"); // variable for quiz
const answerEls = document.querySelectorAll(".answer"); // variable for answers
const questionEl = document.getElementById("question"); // variable for question
const a_text = document.getElementById("a_text"); // variable for text of option a
const b_text = document.getElementById("b_text"); // variable for text of option b
const c_text = document.getElementById("c_text"); // variable for text of option c
const d_text = document.getElementById("d_text"); // variable for text of option d
const submitBtn = document.getElementById("submit"); // variable to access submit button

let currentQuiz = 0; // keeps track of current question number
let score = 0; // keeps track of score

loadQuiz(); // function call

function loadQuiz() {
    deselectAnswers(); // this function will deselect any previously selected answers

    const currentQuizData = quizData[currentQuiz]; // stores current question number

    questionEl.innerText = currentQuizData.question; // shows current question
    a_text.innerText = currentQuizData.a; // shows option a 
    b_text.innerText = currentQuizData.b; // shows option b
    c_text.innerText = currentQuizData.c; // shows option c
    d_text.innerText = currentQuizData.d; // shows option d
}

// this function returns the answer selected by the user
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        // if answer is correct, increment score variable by 1 - 
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++; // increment question number
        // check if any questions persist further -
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } 
        // if no questions exist - 
        else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});