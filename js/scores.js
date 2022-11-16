var userFinalScore = window.location.search.slice(-2);

// console.log(userFinalScore)

var displayFinalScore = document.getElementById("user-score")
displayFinalScore.textContent = userFinalScore