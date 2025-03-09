let display = document.getElementById('display');

// Append numbers or operators to the display
function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

// Clear the display
function cleardisplay() {
  display.value = '';
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
  try {
    let result = eval(display.value);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Invalid operation');
    }
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}