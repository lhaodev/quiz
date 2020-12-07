
//localstore get past stored scores
function showHighScore(answer) {
    var recordAll = JSON.parse(localStorage.getItem("historyRecord"));
    console.log(recordAll);
    start.classList.add("hide");
    highScoreBtn.classList.add("hide");
    highscoreContainer.classList.remove("hide");
    highScoreInitials.innerHTML = recordAll.name;
    highestScore.innerHTML = recordAll.score;
    endSection.classList.add("hide");
    start.classList.remove("hide");
    start.innerHTML = "Restart";
};
