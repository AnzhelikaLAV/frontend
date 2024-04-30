/*Нужно создать кнопку "Get Cat Fact", при клике на которую, будет выполняться GET запрос(используйте fetch). 
В ответе на запрос будет приходить случайный факт о котах url: https://catfact.ninja/fact После того как вы получите успешный ответ, 
разместите случайный факт о котах у себя на странице. Если запрос завершиться ошибкой, её нужно разместить на странице и выделить красным цветом 
Каждый раз, когда происходит клик на кнопку, должен выполняться новый запрос и приходить новый факт о котах. Стилизуйте на ваше усмотрение

*/
const getFactBtn = document.getElementById("getFactBtn");
const factDiv = document.getElementById("fact");
const errorDiv = document.getElementById("error");

getFactBtn.addEventListener("click", () => {
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      factDiv.textContent = data.fact;
      errorDiv.textContent = "";
      errorDiv.style.display = "none";
    })
    .catch((error) => {
      errorDiv.textContent = "Error: " + error.message;
      errorDiv.style.display = "block";
      factDiv.textContent = "";
    });
});
