function generateNumber() {
    return Math.round(Math.random() * 255);
}
function generateColor() {
    return `rgb(${generateNumber()},${generateNumber()},${generateNumber()})`;
}
/*---------init-------------- */
var colorSelected,
    playing,
    colors = [],
    difficulty = 6,
    squares = document.getElementsByClassName("square"),
    display = document.getElementById("display"),
    colorDisplay = document.getElementById("colorDisplay"),
    modeBtn = document.getElementsByClassName("mode"),
    reset = document.getElementById("reset"),
    message = document.getElementById("message");

function Reset() {
    playing = true;
    display.style.backgroundColor = "";
    for (const square of squares) {
        square.style.display = "none";
    }
    for (var i = 0; i < difficulty; i++) {
        colors[i] = generateColor();
        squares[i].style.display = "unset";
        squares[i].style.backgroundColor = colors[i];
    }
    message.innerText = "";
    indexSelected = Math.floor(Math.random() * difficulty);
    colorSelected = colors[indexSelected];
    colorDisplay.innerText = colorSelected;
}

function Init() {
    reset.addEventListener("click", Reset);
    for (const btn of modeBtn) {
        btn.addEventListener("click", choseDifficulty);
    }
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", () => choseColor(i));
    }
    Reset();
}
function choseColor(i) {
    if (playing) {
        if (colors[i] === colorSelected) {
            message.innerText = "Correct";
            playing = false;
            for (const square of squares) {
                square.style.backgroundColor = colorSelected;
            }
            display.style.backgroundColor = colorSelected;
        } else {
            squares[i].style.backgroundColor = "steelblue";
            message.innerText = "Try again";
        }
    }
}
function choseDifficulty(e) {
    difficulty = e.target.innerText === "EASY" ? 3 : 6;
    for (const btn of modeBtn) {
        btn.classList.remove("selected");
    }
    e.target.classList.add("selected");
    Reset();
}

Init();
