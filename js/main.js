// TO DO 
// When you press play, game is started
// High scores button is linked to high scores html page || done
// When you press play, game is started and loads first question card
// When play is clicked, new page opens, game starts and timer begins
// When question answered correctly, score is added to update score.
// If answered incorrectly, time is subtracted and goes to next question
// When question is answered, corred and incorrect buttons change colors accordingly
// Then, next question populates and current card is hidden
// When quiz is over, option to enter initials is created and high scores is updated with new high score






// Build variables to link to html

const questionEl = document.getElementById("question")
const startButtonEl = document.getElementById("start-btn")
const highScoresEl = document.getElementById("high-scores-btn")
const cardEl = document.getElementById("question-container")
const questionEl = document.getElementById("question")
const answersEl = document.getElementById("answer-buttons")

let score = 0;
let questionCounter = 0




// Variable of questions array for quiz
const questions = [
    {
        question: "Inside which element do we put the JavaScript file?",
        choice1: ">Java>",
        choice2: "<script>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 2
    },
    {
        question: "What is the correct way to write 'Hello World' to the alert box?",
        choice1: "alertBox('Hello World')",
        choice2: "Window.message('Hello World')",
        choice3: "userPrompt('Hello World')",
        choice4: "alert('Hello World')",
        answer: 4
    },
    {
        question: "How do you create a function in JavaScript?",
        choice1: "function newFunction()",
        choice2: "function = newFunction()",
        choice3: "function = newFunction()",
        choice4: "createFunction = new()",
        answer: 1
    },
    {
        question: "How does a for loop start?",
        choice1: "for (i = 0, i < 10, i++)",
        choice2: "for (i < 5; i++)",
        choice3: "for (i = 0; i < 10; i++)",
        choice4: "while (i = 0; i < 10; i++)",
        answer: 3
    },
    {
        question: "How do you comment in JavaScript?",
        choice1: "** This is a comment **",
        choice2: "!-- This is a comment --!",
        choice3: "<This is a comment>",
        choice4: "// This is a comment",
        answer: 4
    },

]







startButton.addEventListener("click", startGame)



function startGame() {

    setNextQuestion()

}


function setNextQuestion() {
    showQuestion(getRandomQuestion)
}


function showQuestion(question) {
    cardQuestion.innerText = question.question
}


function selectAnswer() {


}

function getRandomQuestion() {

}


function hide(element) {
    element.style.display = "none";
}


function show(element) {
    element.style.display = "block";
}



