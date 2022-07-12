const grid = document.getElementsByClassName("grid");

function createGrid(size=16) {
    // for loops to go across and place did
    for (let i =0; i < size; i++) {
        for (let j = 0; j < size; j++) {

        }
    }

}

let cell = document.createElement("div");
// give it a class for styling
cell = document.createAttribute("class");
cell.value = "cell";
grid.appendChild(cell);
