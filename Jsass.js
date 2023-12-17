let textOpened = null;

function ques(answer) {
    let showAnswer = document.getElementById(answer);

    if (textOpened && textOpened !== showAnswer) {
        textOpened.style.display = "none";
    }

    if (showAnswer.style.display === "none") {
        showAnswer.style.display = "block";
        textOpened = showAnswer;
    }else{
        showAnswer.style.display = "none";
        textOpened = null;
    }
}