var displayHighScores = document.getElementById("highscores");
//localstore get past stored scores
function showHighScore() {
    // get scores from local storage or sets to empty array
    var recordAll = JSON.parse(window.localStorage.getItem("historyRecord")) || [];
    // sort highscores in decending order
    recordAll.sort(function (x, y) {
        return y.score - x.score
    });
    displayHighScores.innerHTML = "";
    recordAll.forEach(function (score) {
        var scoreList = document.createElement("li");
        scoreList.innerHTML = score.name + " - " + score.score
        displayHighScores.appendChild(scoreList);
    });

    highscoreContainer.classList.remove("hide");
    start.classList.remove("hide");
    start.innerHTML = "Restart";
    endSection.classList.add("hide");
};

function clearHighScores() {
    window.localStorage.removeItem("historyRecord");
    window.location.reload();
};

document.getElementById("clear-btn").onclick = clearHighScores;

showHighScore(); 