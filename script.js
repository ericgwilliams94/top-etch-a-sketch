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
    // add active class styling to mode
    activeClass(mode);
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

// updateSize function
function updateSize(v) {
    setSize(v);
    updateGridDislay(v);
    refreshGrid();
}

// updateGridDisplay function (updates section that shows grid size)
function updateGridDisplay(v) {
    sliderDisplay.innerHTML = `${v} x ${v}`;
}

// refresh grid aka clear it
function refreshGrid() {
    clearGrid();
    createGrid(currSize);
}

// clear grid function, leave it blank
function clearGrid() {
    grid.innerHTML = "";
}

// function to create the grid
function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    // for loop
    for (let i =0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.addEventListener("mouseover", fillCell);
        grid.appendChild(cell);
    }
}

// function to fill cells
function fillCell(x) {
    // rainbow mode functionality
    if (currMode == "rainbow") {
        // get random RGB values
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        // set random color as fill
        x.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else if (currMode == "color" ) {
        x.target.style.backgroundColor = currColor;
    } else if (currMode == "eraser") {
        x.target.style.backgroundColor = "#FFFFFF"
    }
}

