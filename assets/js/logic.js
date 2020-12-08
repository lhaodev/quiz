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
var highScoreInitials = document.getElementById("highscore-initials");
var highestScore = document.getElementById("highscore-score");
var endSection = document.getElementById("end");
var submitScore = document.getElementById("submitScore");
var initials = document.getElementById("initials");




var scoreNum = 0;

console.log(questions)





console.log(questions.length);

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
    setTime();
    scoreNum = 0;
    score.innerHTML = scoreNum;

};



//trying to create a restart button when the list of questions is run out
var questionIndex = 0;

function runQuiz() {
    if (questionIndex <= questions.length - 1) {
        questionsText.innerHTML = questions[questionIndex].realQ;
        choiceA.innerHTML = questions[questionIndex].choiceA;
        choiceB.innerHTML = questions[questionIndex].choiceB;
        choiceC.innerHTML = questions[questionIndex].choiceC;
        choiceD.innerHTML = questions[questionIndex].choiceD;

    } else {
        score.innerHTML = "You got " + scoreNum + " questions correct";
        next.classList.add("hide");
        quizMain.classList.add("hide");
        //highscoreContainer.classList.remove("hide");
    }

};

//next button to run next question
function nextQuestion() {
    questionIndex++;
    runQuiz();
}

next.addEventListener("click", function (event) {
    event.preventDefault();
    nextQuestion();
});


//set timer - total is 50 seconds
function setTime() {
    var questionTime = 50;
    var timeInterval = setInterval(function () {
        timer.textContent = questionTime;
        questionTime--;

        if (questionTime === 0) {
            timer.textContent = "Time is up";
            clearInterval(timeInterval);
            score.innerHTML = "You got " + scoreNum + " questions correct";
            next.classList.add("hide");
            quizMain.classList.add("hide");
            endSection.classList.remove("hide");
        }

    }, 1000);
};


//calculate score

function rightOrWrong(answer) {
    if (questions[questionIndex].correct == answer && questionIndex !== questions.length - 1) {
        scoreNum++;
        score.innerHTML = scoreNum;
        checkAnswer.innerHTML = "Correct";
    } else if (questions[questionIndex].correct !== answer && questionIndex !== questions.length - 1) {
        checkAnswer.innerHTML = "Wrong";
    }
    else {
        score.innerHTML = "You got " + scoreNum + " questions correct";
        next.classList.add("hide");
        quizMain.classList.add("hide");
        endSection.classList.remove("hide");
        checkAnswer.classList.add("hide");

    }
};

//submit score function, save score to localstoreage
submitScore.addEventListener("click", function (event) {
    event.preventDefault();

    var userInitial = initials.value.trim();
    var historyRecord = {
        name: userInitial,
        score: scoreNum
    };

    if (userInitial === "") {
        alert("error", "Initials cannot be blank");
    }
    else {
        alert("Saved successfully");
    }
    localStorage.setItem("historyRecord", JSON.stringify(historyRecord));
    highScoreBtn.classList.remove("hide");
});




