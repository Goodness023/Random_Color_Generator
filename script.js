// Select the main container where color boxes will be appended
const containerEL = document.querySelector(".container");

// Loop to create 40 color boxes dynamically
for (let index = 0; index < 40; index++) {
  const colorContainerEL = document.createElement("div"); // Create a new div
  colorContainerEL.classList.add("color-container"); // Add the 'color-container' class
  containerEL.appendChild(colorContainerEL); // Append the new div to the container
}

// Select all color containers (both pre-existing and newly created ones)
const colorContainerELs = document.querySelectorAll(".color-container");

// Function to generate random colors and apply them to boxes
function generateColors() {
  colorContainerELs.forEach((colorContainer) => {
    const newColorCode = randomColor(); // Generate a new random color
    colorContainer.style.backgroundColor = `#${newColorCode}`; // Apply color
    colorContainer.textContent = `#${newColorCode}`; // Display color code inside the box
  });
}

// Function to generate a random hexadecimal color code
function randomColor() {
  const chars = "0123456789abcdef"; // Hexadecimal characters
  const colorCodeLength = 6; // Length of hex color code
  let color = ""; // Initialize empty color string

  // Loop through 6 times to generate a full color code
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length); // Pick a random index
    color += chars[randomNum]; // Append random character
  }

  return color; // Return generated color code
}

// Generate colors initially when page loads
generateColors();

// Optional: Add a click event to regenerate colors when clicking any box
colorContainerELs.forEach((colorContainer) => {
  colorContainer.addEventListener("click", generateColors);
});
