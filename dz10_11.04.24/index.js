//Задача 1
//Напишите функцию, которая принимает два числа и возвращает большее значение. Вызов функции присвоить переменной и отобразить результат(переменную) в консоли

function greaterValue(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(greaterValue(31, 67));



console.log("==========");

//Задача 2
//Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки. Для отображения результа работы функции,
//вызовите её три раза с различными параметрами, результат каждого вызова присвойте отдельной переменной и выведите переменные в консоль

function first_n_characters(string, n) {
    return string.slice(0, n);
}


const result1 = first_n_characters("Hello world", 5);
const result2 = first_n_characters("JavaScript", 4);
const result3 = first_n_characters("Function", 3);

console.log(result1); 
console.log(result2); 
console.log(result3); 
console.log("==========");


//Задача 3
//Напишите функцию, которая принимает массив и элемент, а затем возвращает true, если элемент присутствует в массиве,
// и false в противном случае(если есть повторения заданного элемента в массиве, то на задачу это никак не влияет).Результат вызова функции отобразите в консоле
function check_presence(array, element) {
  return array.includes(element);
}

console.log(check_presence([1, 2, 3, 4, 5], 3)); // true
console.log(check_presence(["apple", "banana", "orange"], "banana")); //  true
console.log(check_presence([true, false, true], false)); //  true
console.log(check_presence([1, 2, 3, 4, 5], 6)); // false
console.log(check_presence(["apple", "banana", "orange"], "grape")); //  false


console.log("==========");

//Задача4* :
//Есть массив чисел - отсортировать его методом пузырька.
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
    
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

console.log("Отсортированный массив:", bubbleSort([5, 16, 38, 95, 42, 4]));


console.log("==========");

function simpleSort(array) {
  return array.sort((a, b) => a - b);
}

console.log("Отсортированный массив:", simpleSort([5, 16, 38, 95, 42, 4]));