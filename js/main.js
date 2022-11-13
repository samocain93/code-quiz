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
const answersEl = document.getElementById("answer-buttons")
const resetButtonEl = document.getElementById("reset-game")
const clearHighScores = document.getElementById("clear-btn")
const scoresEl = document.getElementById("scores")
const nextButtonEl = document.getElementById("next-btn")
const currentScoreEl = document.getElementById("current-score")
const remainingTimeEl = document.getElementById("timer")

let score = 0;
let questionCounter = 0
var highScores = [];
var interval;
var timeRemaining = 60;



// Sets timer to count down during quiz

function startTimer() {
    remainingTimeEl.textContent = timeRemaining;
    interval = setInterval(function () {
        timeRemaining--;
        remainingTimeEl.textContent = timeRemaining;

        if (timeRemaining === 0){
            clearInterval(interval);
            cardEl.textContent = "Time is up!"
            cardEl.style.fontSize = "2rem"
        }
    }, 1000)
}
startTimer()






// startButtonEl.addEventListener("click", startGame)



// function startGame() {

//     setNextQuestion()

// }


// function setNextQuestion() {
//     showQuestion(getRandomQuestion)
// }


// function showQuestion(question) {
//     cardQuestion.innerText = question.question
// }


// function selectAnswer() {


// }

// function getRandomQuestion() {

// }


// function hide(element) {
//     element.style.display = "none";
// }


// function show(element) {
//     element.style.display = "block";
// }



