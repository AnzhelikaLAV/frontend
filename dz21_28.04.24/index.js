//Создайте функцию delay, которая принимает число (value) и возвращает промис. 
//Промис должен разрешиться через 5 секунд и вернуть удвоенное значение аргумента
//value(в resolve).Если аргумент не является числом, промис должен быть отклонен с текстом ошибки "The argument is not a number"(в reject)


function delay(value) {
  return new Promise((resolve, reject) => {
    if (typeof value !== "number") {
      reject("The argument is not a number");
      return;
    }

    setTimeout(() => {
      resolve(value * 2);
    }, 5000);
  });
}

delay(5)
  .then((result) => {
    console.log("Результат:", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });

// с неправильным аргументом:
delay("python")
  .then((result) => {
    console.log("Результат:", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
