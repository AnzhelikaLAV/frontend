// Создайте базовый класс Transport, представляющий транспортное средство. У транспортного средства должны быть следующие свойства:
// make(марка) model(модель) year(год выпуска) Добавьте в класс Transport метод displayMainInfo(), который выводит всю информацию о транспортном средстве в
// консоль.Создайте два подкласса, расширяющих класс Transport: Car - представляет автомобиль.Дополнительные свойства: numDoors(количество дверей)
// isConvertible(является ли кабриолетом) Motorcycle - представляет мотоцикл.Дополнительные свойства: numWheels(количество колес) hasSideCar
// (имеет ли боковую коляску) Создайте по два экземпляра для классов Car и Motorcycle Для демонстрации результатов вызовите метод displayMainInfo()
// для каждого экземпляра(4 вызова).
class Transport {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayMainInfo() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

class Car extends Transport {
  constructor(make, model, year, numDoors, isConvertible) {
    super(make, model, year);
    this.numDoors = numDoors;
    this.isConvertible = isConvertible;
  }

  displayMainInfo() {
    super.displayMainInfo();
    console.log(`Number of doors: ${this.numDoors}`);
    console.log(`Convertible: ${this.isConvertible ? "Yes" : "No"}`);
  }
}

class Motorcycle extends Transport {
  constructor(make, model, year, numWheels, hasSideCar) {
    super(make, model, year);
    this.numWheels = numWheels;
    this.hasSideCar = hasSideCar;
  }

  displayMainInfo() {
    super.displayMainInfo();
    console.log(`Number of wheels: ${this.numWheels}`);
    console.log(`Has sidecar: ${this.hasSideCar ? "Yes" : "No"}`);
  }
}

// Создание экземпляров
const car1 = new Car("Toyota", "Camry", 2019, 4, false);
const car2 = new Car("Ford", "Mustang", 2021, 2, true);

const motorcycle1 = new Motorcycle(
  "Harley-Davidson",
  "Sportster",
  2020,
  2,
  true
);
const motorcycle2 = new Motorcycle("Honda", "CBR500R", 2022, 2, false);

// Вывод информации
console.log("Car 1:");
car1.displayMainInfo();
console.log("\nCar 2:");
car2.displayMainInfo();
console.log("\nMotorcycle 1:");
motorcycle1.displayMainInfo();
console.log("\nMotorcycle 2:");
motorcycle2.displayMainInfo();
