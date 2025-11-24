// JavaScript to handle button clicks
const display = document.getElementById("display");
let currentInput = "";
let operator = null;
let firstOperand = null;

// Function to handle button click
document.body.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;

  const value = event.target.textContent;

  if (!isNaN(value)) {
    // Number buttons
    currentInput += value;
    display.value = currentInput;
  } else if (value === "+" || value === "-") {
    // Operator buttons
    if (currentInput) {
      firstOperand = parseFloat(currentInput);
      currentInput = "";
      operator = value;
    }
  } else if (value === "=") {
    // Equals button
    if (firstOperand !== null && operator && currentInput) {
      const secondOperand = parseFloat(currentInput);
      let result;
      if (operator === "+") {
        result = firstOperand + secondOperand;
      } else if (operator === "-") {
        result = firstOperand - secondOperand;
      }
      display.value = parseFloat(result.toFixed(3)); // Round to 3 decimals
      firstOperand = null;
      currentInput = "";
      operator = null;
    }
  } else if (value === "C") {
    // Clear button
    currentInput = "";
    operator = null;
    firstOperand = null;
    display.value = "";
  } else if (value === ",") {
    // Decimal button
    if (!currentInput.includes(".")) {
      currentInput += ".";
      display.value = currentInput;
    }
  } else if (value === "DEL") {
    // Delete button
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }
});
