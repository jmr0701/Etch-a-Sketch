const gridContainer = document.querySelector("#gridContainer");
const gridButton = document.querySelector("#gridButton");
const defaultGridSize = 16;

let isPointerDown = false;
document.addEventListener("pointerdown", () => (isPointerDown = true));
document.addEventListener("pointerup", () => (isPointerDown = false));
document.addEventListener("pointercancel", () => (isPointerDown = false));
document.addEventListener("pointerleave", () => (isPointerDown = false));

window.addEventListener("load", () => createGrid(defaultGridSize));
gridButton.addEventListener("click", changeSize);

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

function changeSize(){
  let input = prompt("Select your custom size. (1-100)");

  if (input === null) return;
  if (input > 100 || input < 1) {
    alert("Please enter a valid number. (1-100)");
    return;
  }
  const customSize = parseInt(input, 10);
  if (Number.isNaN(customSize)) {
    alert("Please enter a valid number.");
    return;
  }
  createGrid(customSize);
}