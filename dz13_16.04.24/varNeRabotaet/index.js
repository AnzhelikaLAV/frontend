document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const keys = document.querySelectorAll("#buttons .button");
  let decimalAdded = false; //десятичная дробь

  for (let i = 0; i < keys.length; i++) {
    //события клика на каждой кнопке калькулятора
    keys[i].addEventListener("click", function (e) {
      const btnVal = keys[i].getAttribute("data-value") || keys[i].textContent;

      switch (btnVal) {
        case "C":
          display.value = ""; //Очистка поля ввода
          decimalAdded = false;
          break;
        case "=":
          let equation = display.value;
          equation = equation.replace(/×/g, "*").replace(/÷/g, "/"); //Символы "×" и "÷" заменяются на операторы "*" и "/"
          const result = math.evaluate(equation); // Вычисляем результат выражения
          display.value = result; // Выводим результат на экран
          decimalAdded = false;
          break;
        case "⌫":
          display.value = display.value.slice(0, -1); //Удаление последнего символа из значения поля ввода
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          const lastChar = display.value[display.value.length - 1]; //Получаем последний символ из строки ввода

          // Проверяем, если последний символ не является точкой и является оператором, заменяем его на новый оператор
          if (
            !operators.includes(lastChar) &&
            lastChar !== "." &&
            lastChar !== ""
          ) {
            display.value += btnVal; // Добавляем выбранный оператор к значению поля ввода
            decimalAdded = false;
          }
          break;
        case ".":
          if (!decimalAdded) {
            //Если точка еще не добавлена (!decimalAdded), добавляем ее к значению поля ввода и устанавливаем decimalAdded на true.
            display.value += btnVal;
            decimalAdded = true;
          }
          break;
        default:
          if (display.value == "Error" || display.value == "") {
            //Если нажата кнопка с цифрой, и значение поля ввода равно "Error" или пусто, поле ввода очищается перед добавлением нового значения.
            display.value = ""; // Очищаем поле ввода перед вводом новых данных
          }
          display.value += btnVal;
      }

      e.preventDefault();
    });
  }

  document.addEventListener("keydown", function (event) {
    //события нажатия клавиши "Backspace" для удаления последнего символа из поля ввода.
    if (event.key === "Backspace") {
      display.value = display.value.slice(0, -1);
      event.preventDefault();
    }
  });
});
