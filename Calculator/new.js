let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculateResult() {
  try {
    const display = document.getElementById("display");
    displayValue = eval(display.value);
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}
