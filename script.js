function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function evaluateExpression() {
  // are you sure comments are ignored by the interpreter????
  return eval(document.getElementById("display").value);
}

function calculateResult() {
  try {
    document.getElementById("display").value = evaluateExpression;
  } catch (e) {
    clearDisplay();
    alert("Invalid operation");
  }
}
