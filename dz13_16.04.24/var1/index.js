document.addEventListener("DOMContentLoaded", function () {
  const keys = document.querySelectorAll("#buttons .button");
  const operators = ["+", "-", "/", "*"];
  let decimalAdded = false; //десятичная дробь

  for (let i = 0; i < keys.length; i++) { //события клика на каждой кнопке калькулятора
    keys[i].addEventListener("click", function (e) {
      const input = document.querySelector("#display");
      const btnVal = keys[i].getAttribute("data-value") || keys[i].textContent;

      if (btnVal == "C") {
        input.value = ""; //Очистка поля ввода
        decimalAdded = false;
      } else if (btnVal == "=") {
        let equation = input.value;
        equation = equation.replace(/×/g, "*").replace(/÷/g, "/"); //Символы "×" и "÷" заменяются на операторы "*" и "/"
        const lastChar = equation[equation.length - 1];

        if (operators.indexOf(lastChar) > -1 || lastChar == ".")
          equation = equation.replace(/.$/, ""); //Если последний символ является оператором или точкой, удаляем его

        if (equation.includes("/0")) { //Проверка наличия деления на ноль
          input.value = "Error";
        } else {
          if (equation) input.value = eval(equation); //если выражение не пустое, вычисляем его значение и выводим его в поле ввода
        }

        decimalAdded = false;
      } else if (btnVal == "⌫") {
        input.value = input.value.slice(0, -1); //Удаление последнего символа из значения поля ввода
      } else if (operators.includes(btnVal)) {
        const lastChar = input.value[input.value.length - 1]; //Если последний символ не является точкой и является оператором, заменяем его на новый оператор.

        if (lastChar !== "." && operators.includes(lastChar)) {
          input.value = input.value.slice(0, -1); // Заменяем последний оператор на новый
        }

        input.value += btnVal; //Добавляем выбранный оператор к значению поля ввода
        decimalAdded = false;
      } else if (btnVal == ".") {
        if (!decimalAdded) { //Если точка еще не добавлена (!decimalAdded), добавляем ее к значению поля ввода и устанавливаем decimalAdded на true.
          input.value += btnVal;
          decimalAdded = true;
        }
      } else {
        if (input.value == "Error" || input.value == "") { //Если нажата кнопка с цифрой, и значение поля ввода равно "Error" или пусто, поле ввода очищается перед добавлением нового значения.
          input.value = ""; // Очищаем поле ввода перед вводом новых данных
        }
        input.value += btnVal;
      }

      e.preventDefault();
    });
  }

  document.addEventListener("keydown", function (event) { //события нажатия клавиши "Backspace" для удаления последнего символа из поля ввода.
    if (event.key === "Backspace") {
      const input = document.querySelector("#display");
      input.value = input.value.slice(0, -1);
      event.preventDefault();
    }
  });
});
