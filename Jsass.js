let textOpened = null;
let minusOpened = null;
let angleDownOpened = null;
let angleRightOpened = null;
let addOpened = null;
const minusElements = document.getElementsByClassName('minus');
const angleDown = document.getElementsByClassName('angleDown');

for (let i = 0; i < minusElements.length; i++) {
    minusElements[i].style.display = 'none';
}
for (let i = 0; i < angleDown.length; i++) {
    angleDown[i].style.display = 'none';
}

function ques(answer, minus, angleDown, angleRight, add) {
    let showAnswer = document.getElementById(answer);
    let showMinus = document.getElementById(minus);
    let showAngleDown = document.getElementById(angleDown);
    let hidAngleRight = document.getElementById(angleRight);
    let hidAdd = document.getElementById(add);

    if (textOpened && textOpened !== showAnswer) {
        textOpened.style.display = "none";
    }
    if (minusOpened && minusOpened !== showMinus && angleDownOpened && angleDownOpened !== angleDown) {
        minusOpened.style.display = "none";
        angleDownOpened.style.display = "none";
    }
    if (addOpened && addOpened !== hidAdd && angleRightOpened && angleRightOpened !== hidAngleRight) {
        addOpened.style.display = "block";
        angleRightOpened.style.display = "block";
    }

    let answerDisplayStyle = window.getComputedStyle(showAnswer).getPropertyValue('display');

    if (answerDisplayStyle === "none") {
        showAnswer.style.display = "block";
        showMinus.style.display = "block";
        showAngleDown.style.display = "block"
        textOpened = showAnswer;
        minusOpened = showMinus;
        addOpened = null;
        angleDownOpened = showAngleDown;
        angleRightOpened = null;
        hidAdd.style.display = "none";
        hidAngleRight.style.display = "none";
    } else {
        showAnswer.style.display = "none";
        showMinus.style.display = "none";
        showAngleDown.style.display = "none";
        hidAdd.style.display = "block";
        hidAngleRight.style.display = "block";
        textOpened = null;
        minusOpened = null;
        addOpened = hidAdd;
        angleDownOpened = null;
        angleRightOpened = hidAngleRight;
    }
}