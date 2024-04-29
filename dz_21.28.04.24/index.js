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
