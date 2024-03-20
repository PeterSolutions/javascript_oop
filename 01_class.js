/**Creating a first class */

class Animal {
  // basic constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // basic method
  getInfo() {
    return `The name of the aminal is ${this.name} and age is ${this.age}`;
  }
}

/** creating two objest */
const firstAnimal = new Animal("Rex", 2);
console.log(firstAnimal);
console.log(firstAnimal.getInfo());
console.log("______________________________");
const secondAnimal = new Animal("Barney", 5);
console.log(secondAnimal);
console.log(secondAnimal.getInfo());

/** Inheritance */
class Dog extends Animal {
  // with extends we inherit from the father
  constructor(name, age, breed) {
    super(name, age); //with super we refering the class
    this.breed = breed;
  }

  bark() {
    return "woof";
  }
}

class Cat extends Animal {
  constructor(name, age, weight) {
    super(name, age);
    this.weight = weight;
  }
}

console.log("______________________________");
const myDog = new Dog("Luna", 1, "Shih Tzu");
console.log(myDog.getInfo());
console.log(myDog.breed);
console.log(myDog.bark());

console.log("______________________________");
const myCat = new Cat("Whiskers", 5, "5kg");
console.log(myCat.getInfo());
console.log(myCat.weight);

/** Encapsulation */
class Cat2 extends Animal {
  #weight; // mark as private
  constructor(name, age, weight) {
    super(name.age);
    this.#weight = weight;
  }

  getWeight() {
    // getter
    return this.#weight;
  }

  setWeight(weight) {
    //setter
    this.#weight = weight;
  }
}

console.log("______________________________");
const myCat2 = new Cat2("Whiskers", 5, "5kg");
console.log(myCat2.getWeight());
myCat2.setWeight("6kg");
console.log(myCat2.getWeight());
