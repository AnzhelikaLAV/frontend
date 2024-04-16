const firstNumInput = document.getElementById("firstNum");
const secondNumInput = document.getElementById("secondNum");

let sign = null;
let isFirstInputCompleted = false; // Флаг для отслеживания завершения ввода первого числа

// подписка на событие кнопок цифр
const numButtons = document.getElementsByClassName("num");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", (e) => {
    if (!isFirstInputCompleted) {
      firstNumInput.value += e.target.innerText;
    } else {
      secondNumInput.value += e.target.innerText;
    }
  });
}

// подписка на событие математических знаков
const signButtons = document.getElementsByClassName("sign");
for (let i = 0; i < signButtons.length; i++) {
  signButtons[i].addEventListener("click", (e) => {
    sign = e.target.innerText;
    isFirstInputCompleted = true;
  });
}

// подписка события кнопки равно
const resBtn = document.getElementById("res");
resBtn.addEventListener("click", () => {
  const firstVal = parseFloat(firstNumInput.value);
  const secondVal = parseFloat(secondNumInput.value);
  const res = calculate(firstVal, secondVal, sign);
  console.log(res); // Выводим результат в консоль
  firstNumInput.value = ""; // Очищаем первый инпут
  secondNumInput.value = ""; // Очищаем второй инпут
  isFirstInputCompleted = false; // Сбрасываем флаг для следующего ввода первого числа
});

// обработчик события кнопки AC
const acBtn = document.getElementById("ac");
acBtn.addEventListener("click", () => {
  firstNumInput.value = "";
  secondNumInput.value = "";
  isFirstInputCompleted = false;
});

// функция для вычисления результата
const calculate = (a, b, sign) => {
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Ошибка: деление на ноль";
      }
      return a / b;
    default:
      break;
  }
};
