document.addEventListener("DOMContentLoaded", function () {
  const resultInput = document.getElementById("result");

  const buttons = document.querySelectorAll(".buton");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = button.textContent;

      switch (buttonText) {
        case "=":
          try {
            resultInput.value = eval(resultInput.value);
          } catch (error) {
            resultInput.value = "Error";
          }
          break;
        case "C":
          resultInput.value = "";
          break;
        default:
          resultInput.value += buttonText;
      }
    });
  });
});
