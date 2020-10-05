window.onload = () => {
    // populate grid with cells
    let gridContainer = document.getElementById("grid-container");
    createGrid(gridContainer);

    var cells = document.querySelectorAll(".cell");
    let clearBtn = document.getElementById("clear");

    // add draw event listener to each cell
    cells.forEach(cell => {
        cell.addEventListener('mouseover', draw);
    })

    // when click 'clear' button: remove 'draw' class from all cells
    clearBtn.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.classList.remove('draw');
        })
    });
};

function createGrid(gridContainer) {
    for (let r = 0; r < 16; r++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add("row");

        for (let c = 0; c < 16; c++) {
            let gridCell = document.createElement('div');
            gridCell.classList.add("cell");
            gridRow.appendChild(gridCell);
        }

        gridContainer.appendChild(gridRow);
    }
}

// adds class which makes background of cell different colour
function draw() {
    this.classList.add('draw');
}