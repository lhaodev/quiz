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
var progress = document.getElementById("progress");
var score = document.getElementById("score");
var checkAnswer = document.getElementById("checkAnswer");
var highScore = document.getElementById("highScore-btn");
var highscoreContainer = document.getElementById("highscore-container");

console.log(questions)



var questions = [
    {
        realQ: "How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",
        choiceA: "He transfigures into a shark",
        choiceB: "He kisses a mermaid",
        choiceC: "He eats gillyweed",
        choiceD: "He performs a bubble-head charm",
        correct: "C"

    },

    {
        realQ: "What is the name of Fred and George’s joke shop?",
        choiceA: "Weasley Joke Emporium",
        choiceB: "Weasleys’ Wizard Wheezes",
        choiceC: "Fred & George’s Wonder Emporium",
        choiceD: "Zonko’s Joke Shop",
        correct: "B"


    },
    {
        realQ: "Which of these is NOT one of the Unforgivable Curses?",
        choiceA: "Cruciatus Curse",
        choiceB: "Imperius Curse",
        choiceC: "Sectumsempra",
        choiceD: "Avada Kedavra",
        correct: "C"

    },

    {
        realQ: "Who played Lord Voldemort in the movies?",
        choiceA: "Jeremy Irons",
        choiceB: "Tom Hiddleston",
        choiceC: "Gary Oldman",
        choiceD: "Ralph Fiennes",
        correct: "D"

    },

    {
        realQ: "Who guards the entrance to the Gryffindor common room?",
        choiceA: "The Grey Lady",
        choiceB: "The Fat Friar",
        choiceC: "The Bloody Baron",
        choiceD: "The Fat Lady",
        correct: "D"

    }
];


console.log(questions.length);


start.addEventListener("click", startQuiz);
function startQuiz() {
    console.log("started");
    start.classList.add("hide");
    quizMain.classList.remove("hide");
    highScore.classList.add("hide");
    next.classList.remove("hide");
    highscoreContainer.classList.add("hide");
    runQuiz();
    setTime();
};

var questionIndex = 0;

//trying to create a restart button when the list of questions is run out

function runQuiz() {
    if (questionIndex <= questions.length - 1) {
        questionsText.innerHTML = questions[questionIndex].realQ;
        choiceA.innerHTML = questions[questionIndex].choiceA;
        choiceB.innerHTML = questions[questionIndex].choiceB;
        choiceC.innerHTML = questions[questionIndex].choiceC;
        choiceD.innerHTML = questions[questionIndex].choiceD;

    } else {
        showScore();
    }

};


function nextQuestion() {
    questionIndex++;
    runQuiz();
}


next.addEventListener("click", function (event) {
    event.preventDefault();
    nextQuestion();
});

var questionTime = 50;

function setTime() {
    var timeInterval = setInterval(function () {
        timer.textContent = questionTime;
        questionTime--;

        if (questionTime === 0) {
            timer.textContent = "Time is up";
            clearInterval(timeInterval);
        }

    }, 1000);
};

//trying to calculate score

function rightOrWrong(answer) {
    if (questions[questionIndex].correct == answer && questionIndex !== question.length - 1) {
        score++;
        score.innerHTML = score;
        checkAnswer.innerHTML = "Correct";
    } else if (questions[questionIndex].correct !== answer && questionIndex !== question.length - 1) {
        checkAnswer.innerHTML = "Wrong";
    }
    else {
        score.innerHTML = "You got " + score + " questions correct";
        next.classList.add("hide");
        quizMain.classList.add("hide");
    }
};











