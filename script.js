const gridContainer = document.querySelector("#grid-container");
const userInput = document.querySelector(".choose");
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
const INITIALGRID = 16;

// Function to generate initial 16x16 grid
function gridGenerator(index) {
  gridContainer.innerHTML = ""; //Clear existing grid

  for (let i = 0; i < index; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < index; j++) {
      const col = document.createElement("div");
      col.classList.add("cell");
      row.appendChild(col);
    }
    gridContainer.appendChild(row);
  }

  // Add hover effect to cells after generating the grid
  const hoverEffect = document.querySelectorAll(".cell");

  hoverEffect.forEach((element) => {
    element.addEventListener("mouseover", () => {
      const random = Math.floor(Math.random() * colors.length);
      element.style.backgroundColor = colors[random];
    });
  });
}

// Generate the initial grid
gridGenerator(INITIALGRID);

// Event listener for user input
userInput.addEventListener("click", () => {
  const userInputValue = prompt("Enter your own grid number");
  if (userInputValue !== null) {
    const gridSize = parseInt(userInputValue);
    if (!isNaN(gridSize) && gridSize > 0) {
      gridGenerator(gridSize);
    } else {
      alert("Please enter a valid positive number for the grid size.");
    }
  }
});
