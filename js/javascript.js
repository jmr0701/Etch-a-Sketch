const gridContainer = document.querySelector("#gridContainer");
const defaultGridSize = 16;

window.addEventListener("load", () => createGrid(defaultGridSize));

function createGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  total = size * size;
  gridContainer.textContent = "";

  for (let i = 0; i < total; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList = "grid-cell";

    gridCell.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      gridCell.style.backgroundColor = "black";
      gridCell.style.borderColor = "black"
    });

    
    gridCell.addEventListener("pointerenter", () => {
      if (isPointerDown) {
        gridCell.style.backgroundColor = "black";
        gridCell.style.borderColor = "black"
      }
    });
    gridContainer.appendChild(gridCell);
  }
}