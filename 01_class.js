/**Creating a first class */

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `The name of the aminal is ${this.name} and age is ${this.age}`;
  }
}

const firstAnimal = new Animal("Rex", 2);
console.log(firstAnimal);
console.log(firstAnimal.getInfo());

const secondAnimal = new Animal("Barney", 5);
console.log(secondAnimal);
console.log(secondAnimal.getInfo());
