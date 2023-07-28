/*--------- Game tools-------------- */
// generate a number between 0 - 255
function GenerateNumber(b = 255, a = 0) {
    return Math.round(Math.random() * b - a); // 0.8
}
// generate RGB color exmple : rgb(54,63,7)
function GenerateRGB() {
    return `rgb(${GenerateNumber()},${GenerateNumber()},${GenerateNumber()})`;
}
/*---------init-------------- */
// init stats : colorSelected , isPlaying, listOfColors, Difficulty
var colorSelected = GenerateRGB(),
    isPlaying = true,
    listOfColors = [GenerateRGB(), GenerateRGB(), colorSelected, GenerateRGB(), GenerateRGB(), GenerateRGB()],
    difficulty = 6; // 3 or 6
// select squares ,the banner, colorDisplay , mode button, reset button , and the message
const colorDisplay = document.querySelector("#colorDisplay"),
    banner = document.querySelector("#display"),
    resetButton = document.querySelector("#reset"),
    modeButtons = document.querySelectorAll(".mode"),
    messageDisplay = document.querySelector("#message"),
    squares = document.querySelectorAll(".square");

/*--------- DOM tools-------------- */
// assign dedicated color RGB to each square
function AssignColors(uniqueColor = false) {
    for (let i = 0; i < difficulty; i++) {
        squares[i].style.display = "unset";
        squares[i].style.backgroundColor = uniqueColor ? colorSelected : listOfColors[i];
    }
    for (let i = difficulty; i < squares.length; i++) {
        squares[i].style.display = "none";
    }
}

// chooseColor function for on Squar click event that checks if the selection is correct
squares.forEach((square, i) => {
    square.onclick = function chooseColor() {
        if (isPlaying) {
            if (listOfColors[i] === colorSelected) {
                messageDisplay.innerHTML = "Correct!";
                banner.style.backgroundColor = colorSelected;
                AssignColors(true);
                isPlaying = false;
            } else {
                messageDisplay.innerHTML = "Try again!";
                square.style.backgroundColor = "white";
                // we can make add number of tries
            }
        }
    };
});
// choseDifficulty function that change difficulty and reset the game based on it.
modeButtons.forEach((mode, i) => {
    mode.onclick = function choseDifficulty() {
        modeButtons.forEach((m) => {
            m.classList.remove("selected");
        });
        mode.classList.add("selected");

        difficulty = 3 + i * 3;
        Reset();
    };
});

/*---------Methods-------------- */
// Reset fucntion for the reset button  make banner default color, init the Game
function Reset() {
    initGame();
    isPlaying = true;
    banner.style.backgroundColor = "";
}

resetButton.onclick = Reset;

// initGame fucntion that init states and generate new colors and set events for them
function initGame() {
    listOfColors = Array(difficulty)
        .fill(0)
        .map((e) => GenerateRGB());
    colorSelected = listOfColors[GenerateNumber(difficulty - 1)];
    colorDisplay.innerHTML = colorSelected;
    AssignColors();
}
initGame();
