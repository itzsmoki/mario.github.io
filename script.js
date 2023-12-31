let guess = 0;
let wrong = 0;
let counter = 0;
let current = 0;
const questionsTotal = 10

function reset() {
    let buttons = document.getElementsByClassName("buttons");
    let next_buttons = document.getElementsByClassName("next");
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].disabled = false;
        buttons[j].classList.add("enabled-hover");
        buttons[j].classList.add("enabled-active");
    }

    for (let j = 0; j < next_buttons.length; j++) {
        next_buttons[j].disabled = true;
        next_buttons[j].style.color = "black";
        next_buttons[j].style.backgroundColor = "#f2f2f2";
        next_buttons[j].style.border = "2px solid gray";
    }
}

function quiz(answer, id) {
    let answers = ["1985", "70", "Isle Delfino", "New Donk City", "Super Mario Galaxy", "Bob-omb Battlefield", "Mario Kart 8", "Rainbow Ride", "Super Mario RPG: Legend of the Seven Stars", "Cascade Kingdom"];
    let buttons = document.getElementsByClassName("buttons");
    let next_buttons = document.getElementsByClassName("next");


    for (let i = 0; i < 10; i++) {
        if (answers[i] == answer.value) {
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].disabled = true;
                buttons[j].classList.remove("enabled-hover");
                buttons[j].classList.remove("enabled-active");
            }
            answer.style.backgroundColor = "#e8f6d5";
            answer.style.borderColor = "black"
            answer.style.color = "black";
            guess++;
            next_buttons[current].disabled = false;
            next_buttons[current].style.color = "white";
            next_buttons[current].style.backgroundColor = "red";
            next_buttons[current].style.border = "none";
            return 1;
        }
    }
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].disabled = true;
        buttons[j].classList.remove("enabled-hover");
        buttons[j].classList.remove("enabled-active");
    }
    answer.style.backgroundColor = "#ffdde3";
    answer.style.borderColor = "black"
    answer.style.color = "black";
    next_buttons[current].style.color = "white";
    next_buttons[current].style.backgroundColor = "red";
    next_buttons[current].style.border = "none";
    next_buttons[current].disabled = false;
    wrong++;
    return 1;

}

function nextFunction() {
    let buttons = document.getElementsByClassName("buttons");
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].disabled = false;
        buttons[j].classList.add("enabled-hover");
        buttons[j].classList.add("enabled-active");
    }

    let quiz_questions = document.getElementsByClassName("questions");

    quiz_questions[counter].style.display = "none";
    quiz_questions[counter + 1].style.display = "block";
    counter++;
    current++;
    if (counter == questionsTotal) {
        updateProgress();
    }
}

function startQuiz() {
    let quiz_questions = document.getElementsByClassName("questions");
    let start = document.getElementById("start");
    let title = document.getElementById("quiz-title");
    let section = document.getElementById("quiz-section");


    start.style.display = "none";
    title.style.display = "none";
    quiz_questions[counter].style.display = "block";
}

function updateProgress() {
    let section = document.getElementById("quiz-section");
    let progress = (guess * 100) / (questionsTotal);
    let bar = document.getElementById("bar");
    let quiztext = document.getElementById("quiz-title");
    let title = document.getElementById("quiz-title");
    let correctness = document.getElementById("correctness");
    title.style.display = "block";
    bar.style.width = progress + "%";
    bar.setAttribute('aria-valuenow', Math.round(progress));
    bar.textContent = "";
    correctness.textContent = Math.round(progress) + "% Correct!";
    if (progress == 100) {
        quiztext.textContent = "Perfect!";
    } else if (progress > 60) {
        quiztext.textContent = "Well Done!";
    } else {
        quiztext.textContent = "Try again!";
    }

    quiztext.style.marginBottom = "30px";

}

function tryAgain() {
    window.location.href = "quiz.html";
}
