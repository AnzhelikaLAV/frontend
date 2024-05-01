/* Сделать отображение университетов для разных стран
url:
http://universities.hipolabs.com/search?country=Kazakhstan
- например для казахстана
1) Отобразить просто в консолль
2) Отобразить информацию по всем университетам из ответа на страниеце */



// Функция для получения данных об университетах из API и отображения их на странице
function fetchAndDisplayUniversities(url) {
  const universitiesContainer = document.getElementById("universities");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Очистка содержимого контейнера перед добавлением новых университетов
      universitiesContainer.innerHTML = "";

      data.forEach((university) => {
        const universityDiv = document.createElement("div");
        universityDiv.classList.add("university");

        const nameHeader = document.createElement("h2");
        nameHeader.textContent = university.name;

        const countryParagraph = document.createElement("p");
        countryParagraph.textContent = "Country: " + university.country;

        const websiteParagraph = document.createElement("p");
        websiteParagraph.innerHTML =
          "Веб-сайт: <a href='" +
          university.web_pages[0] +
          "' target='_blank'>" +
          university.web_pages[0] +
          "</a>";

        universityDiv.appendChild(nameHeader);
        universityDiv.appendChild(countryParagraph);
        universityDiv.appendChild(websiteParagraph);

        universitiesContainer.appendChild(universityDiv);
      });
    })
    .catch((error) => {
      const errorParagraph = document.createElement("p");
      errorParagraph.textContent =
        "Произошла ошибка при получении данных: " + error;
      universitiesContainer.appendChild(errorParagraph);
    });
}

// Отображаем университеты при загрузке страницы
fetchAndDisplayUniversities(
  "http://universities.hipolabs.com/search?country=Ukraine"
);

// Получаем данные при нажатии на кнопку поиска
document.getElementById("searchButton").addEventListener("click", function () {
  const universityNameInput = document.getElementById(
    "universityNameInput"
  ).value;
  const url =
    "http://universities.hipolabs.com/search?name=" +
    encodeURIComponent(universityNameInput); //для безопасной передачи в URL
  fetchAndDisplayUniversities(url);

  // Очищаем поле ввода после поиска
  document.getElementById("universityNameInput").value = "";
});
