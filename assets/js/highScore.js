
//localstore get past stored scores
function showHighScore() {
    // get scores from local storage or sets to empty array
    var recordAll = JSON.parse(window.localStorage.getItem("historyRecord")) || [];

    console.log(recordAll);
    // sort highscores in decending order
    recordAll.sort(function (x, y) {
        return y.score - x.score
    });

    recordAll.forEach(function (score) {
        var scoreList = document.createElement("li");
        scoreList.innerHTML = score.name + " - " + score.score

        var displayHighScores = document.getElementById("highscores");
        displayHighScores.appendChild(scoreList);

        console.log(recordAll);
    });



    //start.classList.remove("hide");
    // start.innerHTML = "Restart";
};


function clearHighScores() {
    window.localStorage.removeItem("highscoreStorage");
    window.location.reload();
};

document.getElementById("clear-btn").onclick = clearHighScores;


showHighScore(); 