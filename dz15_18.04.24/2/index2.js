// Сверстать страничку с продуктами из предыдущей задачи продукты отображаются один за другим
// - верстка на ваше усмотрение добавить инпут куда пользователь может ввести цену -
// после ввода продукты фильтруются по цене меньше или равно указанной пользователем

 const products = [
   { name: "Телевизор", price: 70000, manufacturer: "Samsung" },
   { name: "Ноутбук", price: 35000, manufacturer: "Asus" },
   { name: "Смартфон", price: 45000, manufacturer: "Apple" },
   { name: "Наушники", price: 1500, manufacturer: "Sony" },
   { name: "Холодильник", price: 18000, manufacturer: "LG" },
 ];

 function renderProducts(products) {
   const productsList = document.getElementById("productsList");
   productsList.innerHTML = "";
   products.forEach((product) => {
     // создает div для каждого продукта добавили класс продукт и вставляет текст  "Название - Цена: ... грн.".
     const productDiv = document.createElement("div");
     productDiv.classList.add("product");
     productDiv.textContent = `${product.name} - Цена: ${product.price} грн.`;
     productsList.appendChild(productDiv);
   });
 }
// принимает максимальную цену и возвращает массив продуктов, цена которых не превышает заданную.
 function filterProductsByPrice(maxPrice) {
   return products.filter((product) => product.price <= maxPrice);
 }
//увеличивает на 1000 вызывает filterProductsByPrice для фильтрации продуктов с учетом новой максимальной цены, 
//затем вызывает renderProducts для обновления отображаемого списка.
 function increasePrice() {
   const priceInput = document.getElementById("priceInput");
   priceInput.value = parseInt(priceInput.value) + 1000;
   const maxPrice = parseInt(priceInput.value);
   const filteredProducts = filterProductsByPrice(maxPrice);
   renderProducts(filteredProducts);
 }
//  ссылки поле ввода 
 const priceInput = document.getElementById("priceInput");
 const increasePriceButton = document.getElementById("increasePriceButton");
//обработчики событий
 priceInput.addEventListener("input", () => {
   const maxPrice = parseInt(priceInput.value);
   const filteredProducts = filterProductsByPrice(maxPrice); //кнопка для увеличения цены.
   renderProducts(filteredProducts);
 });

 increasePriceButton.addEventListener("click", increasePrice);

 
 renderProducts(products);//для отображения всех продуктов изначально.