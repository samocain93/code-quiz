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
const choice1El = document.getElementById("choice1")
const choice2El = document.getElementById("choice2")
const choice3El = document.getElementById("choice3")
const choice4El = document.getElementById("choice4")
const finalScoreEl = document.getElementById("user-score")
const correctAnswersEl = document.getElementById("correct-answers")

let score = 0;
let questionCounter = 0
var highScores = [];
var interval;
var timeRemaining = 60;
var currentQuestion = 0;
var index = 0;
var finalScore  = 0;
let correctAnswers = 0

// nextButtonEl.addEventListener("click", setNextQuestion)

choice1El.addEventListener("click", setNextQuestion)
choice2El.addEventListener("click", setNextQuestion)
choice3El.addEventListener("click", setNextQuestion)
choice4El.addEventListener("click", setNextQuestion)


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

// Stops timer interval
function stopTimer() {
    clearInterval(interval)
}



function setNextQuestion() {
    var userChoice = this.textContent;

    if (userChoice === questions[index].answer) {
        this.classList.add("correct")
        correctAnswers++
        correctAnswersEl.textContent = correctAnswers
    } else {
        this.classList.add("incorrect")
        timeRemaining = timeRemaining - 5
    }

    index++;
    if (index < questions.length) {
        setTimeout(function() {
           
            renderQuestion()
        }, 1000)
       
    } else {
        // timeRemaining = timeRemaining - 5;
        finalScore = timeRemaining;
        // localStorage.setItem("mostRecentScore", finalScore);
        console.log(finalScore)
        stopTimer();
        alert("Game Over! Please enter your initials in the next screen to save your high score. Thanks for playing!")
        window.location.href = "./high-scores.html?score="+finalScore;

    }
}



function renderQuestion() {
    choice1El.classList = "btn"
    choice2El.classList = "btn"
    choice3El.classList = "btn"
    choice4El.classList = "btn"
    questionEl.innerHTML = "<h2>" + questions[index].question + "</h2>";
    choice1El.textContent = questions[index].choices[0]
    choice2El.textContent = questions[index].choices[1]
    choice3El.textContent = questions[index].choices[2]
    choice4El.textContent = questions[index].choices[3]
    // startTimer()
}
renderQuestion()


// Scores Page Functionality







// NEXT STEPS !!!
// Create get random question function
// Get that function inside a render question function to display question and answers to card element
// Set next question function which brings up new question 
// If correct, highlight green and set next question 
//  If wrong, highlight answer red and set next question and remove 5 seconds from timer
// At end, hide question elements and bring up initials input (save to local storage)
// Then take to high scores page
// Option to clear high scores from memory or return to start of game 




