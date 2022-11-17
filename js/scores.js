const initialsEl = document.getElementById("initials");
const submitInitialsBtn = document.getElementById("high-scores-button");
const resetBtn = document.getElementById("reset-game");
const clearScoresBtn = document.getElementById("clear-btn");
const highScoreListItem = document.createElement("li");
const highScoresListEl = document.getElementById("high-scores-list")






initialsEl.addEventListener("keyup", () => {
    submitInitialsBtn.disbled = !initialsEl.value;
})

const mostRecentScore = localStorage.getItem("mostRecentScore")

const maxHighScores = 5;


var highScoreArr = [];

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];



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

}

highScores.map(function(score) {
    console.log(`${score.name}-${score.score}`)
})
// console.log(highScores)




var userFinalScore = window.location.search.slice(-2);
highScoreArr.push(userFinalScore);



var displayFinalScore = document.getElementById("user-score")
displayFinalScore.textContent = userFinalScore;







