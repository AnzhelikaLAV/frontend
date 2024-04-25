const timerElement = document.getElementById("timer");

// Устанавливаем начальное значение таймера
let hours = 0;
let minutes = 0;
let seconds = 0;

// Функция обновления таймера
const updateTimer = () => {
  // Увеличиваем счетчики
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  // Форматируем время
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  // Отображаем время на веб-странице
  timerElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

// Вызываем функцию обновления таймера каждую секунду
setInterval(updateTimer, 1000);
