// Selecting the container element and setting its display properties
const container = document.querySelector("#grid-container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "1000px"; // Set a fixed width for the container

// Function to create a grid of specified rows and columns
function createGrid(rows, cols) {
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.style.width = `${100 / cols}%`; // Calculate column width
    cell.style.height = "50px";
    cell.style.border = "1px solid black";
    cell.style.boxSizing = "border-box"; // Ensures border doesn't break the width
    container.appendChild(cell);
  }
}

createGrid(16, 16); // Creates a 4x4 grid

// Add event listener to the button to change grid size
const changeGridButton = document.querySelector("#change-grid");
changeGridButton.addEventListener("click", () => {
  while (true) {
    let size = prompt("Please enter the grid size (1-100):");

    if (size === null) {
      console.log("User cancelled the prompt.");
      break;
    }

    let parsedSize = parseInt(size);

    if (!isNaN(parsedSize) && parsedSize >= 1 && parsedSize <= 100) {
      container.innerHTML = ""; // Clear existing grid
      createGrid(parsedSize, parsedSize); // Create new grid with specified size
      break; // Exit loop on valid input
    } else {
      alert("Invalid input. Please enter a number between 1 and 100.");
    }
  }
});

// Adding event listeners to each cell for mouseover and mouseout events
for (const child of container.children) {
  child.addEventListener("mouseover", () => {
    child.style.backgroundColor = getRandomRgb();
  });
  child.addEventListener("mouseout", () => {
    child.style.backgroundColor = "cadetblue";
  });
}

// Function to generate a random RGB color
function getRandomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
