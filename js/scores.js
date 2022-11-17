const initialsEl = document.getElementById("initials");
const submitInitialsBtn = document.getElementById("high-scores-button");
const resetBtn = document.getElementById("reset-game");
const clearScoresBtn = document.getElementById("clear-btn");
const highScoreListItem = document.createElement("li");
const highScoresListEl = document.getElementById("high-scores-list")
const highScoresEl = document.getElementById("high-scores")
const viewScoresEl = document.getElementById("view-high-scores-btn")

clearScoresBtn.addEventListener("click", clearLocalStorage)


highScoresEl.classList.add("hide")
viewScoresEl.classList.add("hide")


initialsEl.addEventListener("keyup", () => {
    submitInitialsBtn.disbled = !initialsEl.value;
})

submitInitialsBtn.addEventListener("click", function() {
    // highScoresEl.classList.remove("hide")
    viewScoresEl.classList.remove("hide")
    
})

viewScoresEl.addEventListener("click", function() {
    highScoresEl.classList.remove("hide")
})


const mostRecentScore = localStorage.getItem("mostRecentScore")

const maxHighScores = 5;


var highScoreArr = [];

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)



saveHighScore = e => {
    e.preventDefault();

    const score = {
        name: initialsEl.value,
        score: mostRecentScore
    };
    highScores.push(score);

    highScores.sort( (a,b) => {
        return b.score - a.score
    })

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));

};


highScoresListEl.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("");


// Clear Local Storage

function clearLocalStorage() {
    localStorage.clear()
    highScoresListEl.classList.add("hide")
};

function hide() {
    highScoresListEl.classList.add("hide")
}






var userFinalScore = window.location.search.slice(-2);
highScoreArr.push(userFinalScore);



var displayFinalScore = document.getElementById("user-score")
displayFinalScore.textContent = userFinalScore;







