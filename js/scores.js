const initialsEl = document.getElementById("initials");
const submitInitialsBtn = document.getElementById("high-scores-button");
const resetBtn = document.getElementById("reset-game");
const clearScoresBtn = document.getElementById("clear-btn");
const highScoreListItem = document.createElement("li");
const highScoresListEl = document.getElementById("high-scores-list")
const highScoresEl = document.getElementById("high-scores")
const viewScoresEl = document.getElementById("view-high-scores-btn")
const highScoresKey = "highScores"

// localStorage.setItem("mostRecentScore", finalScore);

clearScoresBtn.addEventListener("click", clearLocalStorage)


highScoresEl.classList.add("hide")
// viewScoresEl.classList.add("hide")


initialsEl.addEventListener("keyup", () => {
    submitInitialsBtn.disabled = !initialsEl.value;
})

submitInitialsBtn.addEventListener("click", function() {
    // highScoresEl.classList.remove("hide")
    viewScoresEl.classList.remove("hide")
    initialsEl.value = ""

})

viewScoresEl.addEventListener("click", function() {
    highScoresEl.classList.remove("hide")
    // console.log(viewScoresEl, "clicked")
    const scoresFromLocalStorage = JSON.parse(localStorage.getItem(highScoresKey))


highScoresListEl.innerHTML = scoresFromLocalStorage.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("");

})




const maxHighScores = 5;



const highScores = JSON.parse(localStorage.getItem(highScoresKey)) || [];
console.log(highScores)



saveHighScore = e => {
    e.preventDefault();
    const score = {
        name: initialsEl.value,
        score: window.location.search.slice(-2)
    };
    highScores.push(score);

    highScores.sort( (a,b) => {
        return b.score - a.score
    })

    highScores.slice(0,5);

    localStorage.setItem(highScoresKey, JSON.stringify(highScores));
    // localStorage.setItem("initialsEl", JSON.stringify(initialsEl))


    console.log(score)
};


// Clear Local Storage

function clearLocalStorage() {
    localStorage.clear()
    highScoresListEl.classList.add("hide")
};

function hide() {
    highScoresListEl.classList.add("hide")
}






var userFinalScore = window.location.search.slice(-2);



var displayFinalScore = document.getElementById("user-score")
displayFinalScore.textContent = userFinalScore;







