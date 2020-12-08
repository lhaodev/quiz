var start = document.getElementById("start-btn");
console.log(start);
var next = document.getElementById("next-btn");
var quizMain = document.getElementById("quiz-container");
var questionsText = document.getElementById("text");
var choices = document.getElementById("answerChoice");
var choiceA = document.querySelector(".A");
var choiceB = document.querySelector(".B");
var choiceC = document.querySelector(".C");
var choiceD = document.querySelector(".D");
var correct = document.getElementById("correct");
var timer = document.getElementById("timer");
var score = document.getElementById("score");
var checkAnswer = document.getElementById("checkAnswer");
var highScoreBtn = document.getElementById("highScore-btn");
var highscoreContainer = document.getElementById("highscore-container");
var endSection = document.getElementById("end");
var submitScore = document.getElementById("submitScore");
var initials = document.getElementById("initials");
var timerId;
var questionTime;
var scoreNum = 0;


//start button to start the quiz
start.addEventListener("click", startQuiz);
function startQuiz() {
    questionIndex = 0;
    console.log("started");
    start.classList.add("hide");
    quizMain.classList.remove("hide");
    highScoreBtn.classList.add("hide");
    next.classList.remove("hide");
    highscoreContainer.classList.add("hide");
    runQuiz();
    timeInterval = setInterval(tick, 1000);
    questionTime = 30;
    timer.textContent = questionTime;
    scoreNum = 0;
    score.innerHTML = scoreNum;
    document.querySelector(".A").disabled = false;
    document.querySelector(".B").disabled = false;
    document.querySelector(".C").disabled = false
    document.querySelector(".D").disabled = false;
    endSection.classList.add("hide");
};

//trying to create a restart button when the list of questions is run out
var questionIndex = 0;

function runQuiz() {
    if (questionIndex <= questions.length - 1) {
        highscoreContainer.classList.add("hide");
        questionsText.innerHTML = questions[questionIndex].realQ;
        choiceA.innerHTML = questions[questionIndex].choiceA;
        choiceB.innerHTML = questions[questionIndex].choiceB;
        choiceC.innerHTML = questions[questionIndex].choiceC;
        choiceD.innerHTML = questions[questionIndex].choiceD;

    } else {
        score.innerHTML = "You got " + scoreNum + " questions correct";
        next.classList.add("hide");
        quizMain.classList.add("hide");
        highscoreContainer.classList.remove("hide");

    }

};


//next button - go to next question till questions run out
next.addEventListener("click", function (event) {
    event.preventDefault();
    questionIndex++;
    document.querySelector(".A").disabled = false;
    document.querySelector(".B").disabled = false;
    document.querySelector(".C").disabled = false
    document.querySelector(".D").disabled = false;
    if (questionIndex === questions.length) {
        endPage();
    } else {
        runQuiz();

    }
});


//set timer - count-down
function tick() {
    questionTime--;
    timer.textContent = questionTime;
    if (questionTime <= 0) {
        endPage();
    }
};

//design end page (will show up when time run out or when questions run out)
function endPage() {
    next.classList.add("hide");
    quizMain.classList.add("hide");
    endSection.classList.remove("hide");
    start.classList.remove("hide");
    start.innerHTML = "Restart";
    score.innerHTML = "You got " + scoreNum + " questions correct";
    clearInterval(timeInterval);
}


//calculate score
function rightOrWrong(answer) {
    document.querySelector(".A").disabled = true;
    document.querySelector(".B").disabled = true;
    document.querySelector(".C").disabled = true;
    document.querySelector(".D").disabled = true;

    if (questions[questionIndex].correct == answer && questionIndex !== questions.length - 1) {
        scoreNum++;
        score.innerHTML = scoreNum;
        checkAnswer.innerHTML = "Correct";
    } else if (questions[questionIndex].correct !== answer && questionIndex !== questions.length - 1) {
        checkAnswer.innerHTML = "Wrong";
    }
    else {
        checkAnswer.classList.add("hide");
        endPage();

    }
};

//submit score function, save score to localstoreage
submitScore.addEventListener("click", function (event) {
    event.preventDefault();

    var userInitial = initials.value.trim();
    var newRecord = {
        name: userInitial,
        score: scoreNum
    };

    if (userInitial === "") {
        alert("error", "Initials cannot be blank");
    }
    else {
        alert("Saved successfully");

        var historyRecord =
            JSON.parse(localStorage.getItem("historyRecord")) || [];

        historyRecord.push(newRecord);
        localStorage.setItem("historyRecord", JSON.stringify(historyRecord));
        highScoreBtn.classList.remove("hide");

    }
}
);



