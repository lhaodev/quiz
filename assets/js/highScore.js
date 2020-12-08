
//localstore get past stored scores
function showHighScore() {
    // get scores from local storage or sets to empty array
    var recordAll = JSON.parse(window.localStorage.getItem("historyRecord")) || [];

    // sort highscores in decending order
    recordAll.sort(function (x, y) {
        return y.score - x.score
    });

    recordAll.forEach(function (score) {
        var scoreList = document.createElement("li");
        scoreList.textContent = score.name + " - " + score.score

        var displayHighScores = document.getElementById("highscores");
        displayHighScores.appendChild(scoreList);
    });


    // console.log(recordAll);
    // start.classList.add("hide");
    // highScoreBtn.classList.add("hide");
    // highscoreContainer.classList.remove("hide");
    // highScoreInitials.innerHTML = recordAll.name;
    // highestScore.innerHTML = recordAll.score;
    // endSection.classList.add("hide");
    // start.classList.remove("hide");
    // start.innerHTML = "Restart";
};


function clearHighScores() {
    window.localStorage.removeItem("highscoreStorage");
    window.location.reload();
};

document.getElementById("clear-btn").onclick = clearHighScores;

showHighScore(); 