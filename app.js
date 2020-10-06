window.onload = () => {
    // Initialize 16x16 grid
    let gridContainer = document.getElementById("grid-container");
    createGrid(gridContainer, 16);

    let clearBtn = document.getElementById("clear");

    // when click 'clear' button: remove 'draw' class from all cells
    clearBtn.addEventListener('click', () => {
        let newSize = prompt("Enter a new grid size 1-100");
        createGrid(gridContainer, newSize)
    });
};

function createGrid(gridContainer, newSize) {
    // clear current grid
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let r = 0; r < newSize; r++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add("row");

        for (let c = 0; c < newSize; c++) {
            let gridCell = document.createElement('div');
            gridCell.classList.add("cell");
            gridCell.addEventListener('mouseover', draw);
            gridRow.appendChild(gridCell);
        }

        gridContainer.appendChild(gridRow);
    }
}

// adds class which makes background of cell different colour
function draw() {
    this.classList.add('draw');
}