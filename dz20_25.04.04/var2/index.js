// Получаем элемент таймера
const timerElement = document.getElementById("timer");

// Устанавливаем начальное значение таймера
let timeLeft = 60;

// Функция обновления таймера
const updateTimer = () => {
  // Отображаем время на веб-странице
  timerElement.textContent = timeLeft;

  // Уменьшаем время на 1 секунду
  timeLeft--;

  // Если время истекло, останавливаем таймер
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    timerElement.textContent = "Time is over!";
  }
};

// Вызываем функцию обновления таймера каждую секунду
const timerInterval = setInterval(updateTimer, 1000);
