// JavaScript для решения квадратного уравнения
document
  .getElementById("quadratic-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения коэффициентов из полей ввода
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    // Решаем квадратное уравнение
    const discriminant = b * b - 4 * a * c;
    let x1, x2;

    if (discriminant > 0) {
      x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      document.getElementById("result").innerHTML =
        "x1 = " + x1 + "<br>x2 = " + x2;
    } else if (discriminant === 0) {
      x1 = -b / (2 * a);
      document.getElementById("result").innerHTML =
        "Уравнение имеет единственный корень:<br>x = " + x1;
    } else {
      document.getElementById("result").innerHTML =
        "Уравнение не имеет действительных корней.";
    }
  });

  