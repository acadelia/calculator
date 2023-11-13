document.addEventListener("DOMContentLoaded", function () {
  const resultInput = document.getElementById("result");

  // Get all calculator buttons
  const buttons = document.querySelectorAll(".buton");

  // Add click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the button value
      const buttonText = button.textContent;

      // Handle different button clicks
      switch (buttonText) {
        case "=":
          // Calculate the result and update the input
          try {
            resultInput.value = eval(resultInput.value);
          } catch (error) {
            resultInput.value = "Error";
          }
          break;
        case "C":
          // Clear the input
          resultInput.value = "";
          break;
        default:
          // Append the button value to the input
          resultInput.value += buttonText;
      }
    });
  });
});
