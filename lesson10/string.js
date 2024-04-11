// цикл while

// let a = 0;
// while (a < 10) {

//     console.log(a);

//     a++;
//}

//     // пропустить одну итерацию цикла
//     if (a === 5) {
//         a++;
//         continue;
//     }
// выведет 1 2 3 4 6 7 8 9 дойти до 5 пропустить одну итерацию цикла и продолжить увеличивая на 1

// досрочный выход из цикла
// if (a === 5) {
//     break;
// }
// выведет от 0 до 4

let str1 = "hello world";
// длина строки 11 символов
// console.log(str1.length);

// перебрать строку в цикле
// for (let i = 0; i < str1.length; i++) {
//     console.log(str1[i]); // выведет строку по одной букве сверху вниз в столбец обратились к строке по индексу
// }

// получить первый символ строки
// let firstLetter = str1[0];
// console.log(firstLetter); // h вывел

// let str2 = 'hello World';

// приведение строки к верхенему регистру
// const res = str2.toUpperCase();
// console.log(res);
// console.log(str2);

// приведение строки к нижнему регистру
// const res2 = str2.toLowerCase();
// console.log(res2);

// выбрать подстроку из строки
// const str3 = 'hello world';
// const res = str3.substring(0, 4); // от 0 до 4 выведет hell
// console.log(res);

// получить индекс подстроки в строке
// const str4 = 'hello world';
// const res = str4.indexOf('world') // выведет 6
// console.log(res);

// заполнить строку вначале значением x если длина строки меньше 10
// const str5 = '111';
// const res = str5.padStart(10,'x');// выведет xxxxxx111
// console.log(res);

// разделить строку по указанному символу (в данном случае пробел)
// const str6 = 'hello world';
// const res = str6.split(' '); // [ 'hello', 'world' ]
// console.log(res);

const personName = "Robert";
const age = 30;

// шаблоныне строки (вставка переменных в строку)  - используем обратыне кавычки
const message1 = `Сотурднику с именем ${personName} сейчас ${age} лет`; // буква Ё``
// старый способ - конкатенация
const message2 = "Сотруднику с именем " + personName + " сейчас " + age + "лет";
console.log(message1);

// перенос на новую строку
const str7 = `asdfasdfasdfaasdf asdfasdf
adfadsfasdfasdfasdfaasdf asdfasdf 
adfadsfasdfasdfasdfaasdf asdfasdf 
adfadsfasdfasdfasdfaasdf asdfasdf adfadsfasdfasdfasdfaasdf asdfasdf adfadsf`;

// старый способ для больших строк
const str8 =
  "asdfasdfasdfaasdf asdfasdf" +
  " adfadsfasdfasdfasdfaasdf asdfasdf adfadsfasdfasdfasdfaasdf asdfasdf adfadsfasdfasdfasdfaasdf asdfasdf adfadsfasdfasdfasdfaasdf asdfasdf adfadsf";

console.log(str8);
