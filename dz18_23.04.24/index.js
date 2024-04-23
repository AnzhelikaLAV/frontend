// Определение объекта character
function Character(name, health, level) {
  this.name = name;
  this.health = health;
  this.level = level;
}

// Метод introduce для character
Character.prototype.introduce = function () {
  console.log(
    "Hello, my name is " +
      this.name +
      ", I am at level " +
      this.level +
      ", and I have " +
      this.health +
      " health."
  );
};

// Создание объекта warrior с наследованием от character
function Warrior(name, health, level, weapon) {
  Character.call(this, name, health, level);
  this.weapon = weapon;
}

// Наследование прототипа character
Warrior.prototype = Object.create(Character.prototype);

// Метод attack для warrior
Warrior.prototype.attack = function () {
  console.log("I, " + this.name + ", attack with my " + this.weapon + "!");
};

// Создание объекта wizard с наследованием от character
function Wizard(name, health, level, spell) {
  Character.call(this, name, health, level);
  this.spell = spell;
}

// Наследование прототипа character
Wizard.prototype = Object.create(Character.prototype);

// Метод castSpell для wizard
Wizard.prototype.castSpell = function () {
  console.log("I, " + this.name + ", cast the spell " + this.spell + "!");
};

// Создание персонажей
var warrior = new Warrior("Conan", 100, 1, "Sword");
var wizard = new Wizard("Gandalf", 100, 1, "Fireball");

// Вызов метода introduce для каждого персонажа
warrior.introduce();
wizard.introduce();

// Вызов метода attack для объекта warrior
warrior.attack();

// Вызов метода castSpell для объекта wizard
wizard.castSpell();
