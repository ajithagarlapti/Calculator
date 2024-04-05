let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
  if (displayValue !== '') {
    const lastChar = displayValue[displayValue.length - 1];
    if (!isNaN(lastChar)) {
      displayValue += operator;
      document.getElementById('display').value = displayValue;
    }
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  if (displayValue !== '') {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  }
}
