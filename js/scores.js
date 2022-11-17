const initialsEl = document.getElementById("initials")
const submitInitialsBtn = document.getElementById("high-scores-button")
const resetBtn = document.getElementById("reset-game")
const clearScoresBtn = document.getElementById("clear-btn")

var highScoreArr = []



var userFinalScore = window.location.search.slice(-2);
highScoreArr.push(userFinalScore)
console.log(highScoreArr)



// console.log(userFinalScore)

var displayFinalScore = document.getElementById("user-score")
displayFinalScore.textContent = userFinalScore



