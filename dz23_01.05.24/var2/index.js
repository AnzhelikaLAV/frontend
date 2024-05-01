// Функция для получения данных об университетах из API и вывода их в консоль
function fetchAndLogUniversities(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Университеты:");
      console.log(data);
    })
    .catch((error) =>
      console.log("Произошла ошибка при получении данных:", error)
    );
}

// консоль
fetchAndLogUniversities(
  "http://universities.hipolabs.com/search?country=Ukraine"
);

// информация по всем университетам из ответа на странице
function displayAllUniversitiesInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Информация по всем университетам:");
      data.forEach((university) => {
        console.log("Название:", university.name);
        console.log("Страна:", university.country);
        console.log("Веб-сайт:", university.web_pages[0]); 
        console.log("---------------------------------");
      });
    })
    .catch((error) =>
      console.log("Произошла ошибка при получении данных:", error)
    );
}

// все университеты из ответа на странице
displayAllUniversitiesInfo(
  "http://universities.hipolabs.com/search?country=Ukraine"
);
