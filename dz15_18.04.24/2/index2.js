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
     const productDiv = document.createElement("div");
     productDiv.classList.add("product");
     productDiv.textContent = `${product.name} - Цена: ${product.price} грн.`;
     productsList.appendChild(productDiv);
   });
 }

 function filterProductsByPrice(maxPrice) {
   return products.filter((product) => product.price <= maxPrice);
 }

 function increasePrice() {
   const priceInput = document.getElementById("priceInput");
   priceInput.value = parseInt(priceInput.value) + 1000;
   const maxPrice = parseInt(priceInput.value);
   const filteredProducts = filterProductsByPrice(maxPrice);
   renderProducts(filteredProducts);
 }

 const priceInput = document.getElementById("priceInput");
 const increasePriceButton = document.getElementById("increasePriceButton");

 priceInput.addEventListener("input", () => {
   const maxPrice = parseInt(priceInput.value);
   const filteredProducts = filterProductsByPrice(maxPrice);
   renderProducts(filteredProducts);
 });

 increasePriceButton.addEventListener("click", increasePrice);

 
 renderProducts(products);