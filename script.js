// document variables
const defaultColor = "#273E2E";
const startMode = "color";
const gridSize = 16;
const grid = document.getElementsByClassName("grid");
const colorPicker = document.getElementById("colorPicker");
const colorMode = document.getElementById("colorMode");
const rainbowMode = document.getElementById("rainbowMode");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const slider = document.getElementById("myRange");
const sliderDisplay = document.getElementsByClassName("gridSizeDisplay");

// establish temporary variables
let currColor = defaultColor;
let currMode = startMode;
let currSize = gridSize;

// function to update currColor
function changeColor(newColor) {
    currColor = newColor;
}

// function to update currMode
function changeMode(mode) {
    activateButton(mode);
    currMode = mode;
}

// function to update currSize
function changeSize(size) {
    currSize = size;
}
/* EVENT LISTENERS */
// color picker event listener
colorPicker.oninput = (x) => changeColor(x.target.value);
// color mode listener
colorMode.onclick = () => changeMode("color");
// random mode listener
rainbowMode.onclick = () => changeMode("rainbow");
// eraser mode listener
eraserBtn.onclick = () => changeMode("eraser");
// clear all mode listener
clearBtn.onclick = () => refreshGrid();
// slider listener
slider.onmousemove = (x) => updateGridDisplay(x.target.value);
slider.onchange = (x) => updateSize(x.target.value);
