var resultElement = document.getElementById("result");

var numberButtons = document.querySelectorAll(
  ".buton:not(.plus):not(.minus):not(.inmultit):not(.egal)"
);

var operationButtons = document.querySelectorAll(".plus, .minus, .inmultit");

var equalsButton = document.querySelector(".egal");

var clearButton = document.querySelector(".sterge");

var currentOperation = null;
var currentOperand = "";

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentOperand += button.innerText;
    resultElement.value = currentOperand;
  });
});

operationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (currentOperand !== "") {
      if (currentOperation !== null) {
        performOperation();
      }
      currentOperation = button.innerText;
      currentOperand = "";
    }
  });
});

equalsButton.addEventListener("click", function () {
  if (currentOperand !== "") {
    performOperation();
    currentOperation = null;
  }
});

clearButton.addEventListener("click", function () {
  clearCalculator();
});

function performOperation() {
  var operand1 = parseFloat(resultElement.value);
  var operand2 = parseFloat(currentOperand);

  if (!isNaN(operand1) && !isNaN(operand2)) {
    switch (currentOperation) {
      case "+":
        resultElement.value = (operand1 + operand2).toString();
        break;
      case "-":
        resultElement.value = (operand1 - operand2).toString();
        break;
      case "*":
        resultElement.value = (Number(operand1) * Number(operand2)).toString();
        break;
    }
  } else {
    // Handle invalid input
    resultElement.value = "Error";
  }
}

function clearCalculator() {
  currentOperation = null;
  currentOperand = "";
  resultElement.value = "";
}
