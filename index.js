// =======================
// Handle Button Clicks
// =======================

// Change the background color when button is clicked
function changeBackgroundColor() {
  const randomRed = Math.floor(Math.random() * 256)
  const randomGreen = Math.floor(Math.random() * 256)
  const randomBlue = Math.floor(Math.random() * 256)

  document.body.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
}

// Reset the background color when double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

// =======================
// Capture Keyboard Input
// =======================

// Display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay')
  keyPressDisplay.textContent = `Key pressed: ${event.key}`
}

// =======================
// Process Text Input
// =======================

// Display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput')
  const textInputDisplay = document.getElementById('textInputDisplay')

  textInputDisplay.textContent = `You typed: ${textInput.value}`
}

// =======================
// Attach Event Listeners
// =======================

function setupEventListeners() {
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  document.addEventListener('keydown', displayKeyPress)

  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput)
}

// Initialize event listeners when DOM is ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

// Export functions for Jest testing
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
