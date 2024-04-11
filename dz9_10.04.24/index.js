// Задача 1
// У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите программу для удвоения каждого значения в массиве и вывода результата в консоль.

const numbers = [2, 4, 6, 8, 10];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

console.log("==========");

const res = numbers.join('|');

console.log(res); 

console.log("==========");
//вар2

// const array = [2, 4, 6, 8, 10];
// const arrayDoubled = [];
// for (let i = 0; i < array.lenght; i++){
// const arrayDoubled.push(array[i] * 2);
// }

//console.log(arrayDoubled);

// Этот код создает массив numbers, затем применяет функцию умножения на 2 !!! ко всем элементам массива с помощью метода map().
// Результат удвоенных значений сохраняется в новом массиве doubledNumbers, который затем выводится в консоль.

// Задача 2
// Есть массив чисел (любых) - поменять первое и последий элемент массива местами

const array = [7, 15, 4, 1, 26, 47];

console.log("Начальный массив:", array);

if (array.length >= 2) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
}

console.log("Измененный массив:", array);

console.log("==========");

//вар2

// const number = [2, 4, 6, 8, 10];
// const lastIndex = number.length - 1; // Получаем индекс последнего элемента массива

// let temp = number[0];
// number[0] = number[lastIndex];
// number[lastIndex] = temp;

// console.log(number); // Выведет [10, 4, 6, 8, 2]

//вар3
// const arrayForChange = [4, 8, 9, 5, 3];

// const firstNumber = arrayForChange[0];

// const lastNumber = arrayForChange[arrayForChange.length - 1];

// arrayForChange[0] = lastNumber;

// arrayForChange[arrayForChange.length - 1] = firstNumber;

// console.log(arrayForChange);


// Задача 3
// Есть массив чисел (любых) если в массиве есть хотябы одно число равное 5 - вывести в консоль сообщение: "5 Найдено"
// если нет, вывести в консоль сообщение "5 Отсутствует"

const arr = [2, 4, 6, 8, 10];

// Проверяем наличие числа 5 в массиве
if (arr.includes(5)) {
  console.log("5 Найдено");
} else {
  console.log("5 Отсутствует");
}
console.log("==========");

//вар2

// const numbersFive = [2, 4, 5, 8, 10];

// let found = false;
// for (let i = 0; i < numbersFive.length; i++) {
//   if (numbersFive[i] === 5) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   console.log("5 is found");
// } else {
//   console.log("5 is NOT found");
// }

// Задача 4*
// У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите программу для вычисления среднего значения элементов массива и вывода результата в консоль.
// Для решения задач использовать цикл for

const num = [10, 15, 20, 25, 30];

let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i];// прибавляем саму себя и следущий элемент
}

// Вычисление среднего значения
const average = sum / num.length;

console.log("Среднее значение элементов массива:", average);
