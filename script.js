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

// function to set new color
function setColor(newColor) {
    currColor = newColor;
}

// function to change mode
function changeMode(mode) {
    activateButton(mode);
    currMode = mode;
}
