let textOpened = null;
let minusOpened = null;
let angleDownOpened = null;
let angleRightOpened = null;
let addOpened = null;
let showColor = null;
const minusElements = document.getElementsByClassName('minus');
const angleDown = document.getElementsByClassName('angleDown');

for (let i = 0; i < minusElements.length; i++) {
    minusElements[i].style.display = 'none';
}
for (let i = 0; i < angleDown.length; i++) {
    angleDown[i].style.display = 'none';
}

function ques(answer, minus, angleDown, angleRight, add, color) {
    let showAnswer = document.getElementById(answer);
    let showMinus = document.getElementById(minus);
    let showAngleDown = document.getElementById(angleDown);
    let hidAngleRight = document.getElementById(angleRight);
    let hidAdd = document.getElementById(add);
    let btn = document.getElementById(color)

    if (textOpened && textOpened !== showAnswer) {
        textOpened.style.display = "none";
    }
    if (minusOpened && minusOpened !== showMinus && angleDownOpened && angleDownOpened !== angleDown) {
        minusOpened.style.display = "none";
        angleDownOpened.style.display = "none";
    }

    let answerDisplayStyle = window.getComputedStyle(showAnswer).getPropertyValue('display');

    if (answerDisplayStyle === "none") {
        showAnswer.style.display = "block";
        showMinus.style.display = "block";
        showAngleDown.style.display = "block"

        if(textOpened) {
            textOpened.style.display = 'none';
            minusOpened.style.display = 'none';
            angleDownOpened.style.display = 'none';

            if (addOpened && angleRightOpened) {
                addOpened.style.display = 'block';
                angleRightOpened.style.display = 'block';
            }
        }

        textOpened = showAnswer;
        minusOpened = showMinus;
        angleDownOpened = showAngleDown;
        hidAdd.style.display = "none";
        hidAngleRight.style.display = "none";

        addOpened = hidAdd;
        angleRightOpened = hidAngleRight;

        if (showColor) {
            showColor.style.backgroundColor = 'gray';
        };
        btn.style.backgroundColor = "green";
        showColor = btn;

    } else {
        showAnswer.style.display = 'none';
        showMinus.style.display = 'none';
        showAngleDown.style.display = 'none';

        if (addOpened && angleRightOpened) {
            addOpened.style.display = 'block';
            angleRightOpened.style.display = 'block';
        }

        textOpened = null;
        minusOpened = null;
        angleDownOpened = null;

        if (showColor) {
            showColor.style.backgroundColor = 'gray';
        };
        btn.style.backgroundColor = "gray";
        showColor = null;
    }
}