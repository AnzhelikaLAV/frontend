// Есть массив продуктов: каждый продукт - это объект с полями: имя, цена, производитель 
// значения можно задать на свое усмотрение написать функцию фильтрации продуктов цена выше 5000
const products = [
  { name: "Телевизор", price: 70000, manufacturer: "Samsung" },
  { name: "Ноутбук", price: 35000, manufacturer: "Asus" },
  { name: "Смартфон", price: 45000, manufacturer: "Apple" },
  { name: "Наушники", price: 1500, manufacturer: "Sony" },
  { name: "Холодильник", price: 18000, manufacturer: "LG" },
];

function filterProductsByPrice(products) {
  return products.filter((product) => product.price > 5000);
}

const filteredProducts = filterProductsByPrice(products);
console.log(filteredProducts);

