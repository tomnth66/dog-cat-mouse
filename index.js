let Dog = require('./dog.js');
let Cat = require('./cat.js');

let dog = new Dog();
let cat = new Cat('Tom');

dog.eat(cat);

console.log(dog);