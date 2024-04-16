document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector("#display");
  const buttons = document.querySelectorAll("#buttons .button");
  const operators = ["+", "-", "*", "/"];
  let decimalAdded = false;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
      const btnVal =
        buttons[i].getAttribute("data-value") || buttons[i].textContent;

      if (btnVal === "C") {
        display.value = "";
        decimalAdded = false;
      } else if (btnVal === "=") {
        let equation = display.value;
        equation = equation.replace(/×/g, "*").replace(/÷/g, "/");

        const lastChar = equation.charAt(equation.length - 1);
        if (operators.includes(lastChar) || lastChar === ".") {
          equation = equation.slice(0, -1);
        }

        if (equation.includes("/0")) {
          display.value = "Error";
        } else {
          if (equation) display.value = eval(equation);
        }

        decimalAdded = false;
      } else if (btnVal === "⌫") {
        display.value = display.value.slice(0, -1);
      } else if (operators.includes(btnVal)) {
        const lastChar = display.value.charAt(display.value.length - 1);

        if (lastChar !== "." && operators.includes(lastChar)) {
          display.value = display.value.slice(0, -1);
        }

        display.value += btnVal;
        decimalAdded = false;
      } else if (btnVal === ".") {
        if (!decimalAdded) {
          display.value += btnVal;
          decimalAdded = true;
        }
      } else {
        if (display.value === "Error" || display.value === "") {
          display.value = "";
        }
        display.value += btnVal;
      }

      e.preventDefault();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      display.value = display.value.slice(0, -1);
      event.preventDefault();
    }
  });
});
