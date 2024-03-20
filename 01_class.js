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

/** Polimorphism */
class Animal_2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    return `Some nice sound made`;
  }
}

class Dog_2 extends Animal_2 {
  // with extends we inherit from the father
  constructor(name, age, breed) {
    super(name, age); //with super we refering the class
    this.breed = breed;
  }

  makeSound() {
    return "woof";
  }
}

class Cat_2 extends Animal_2 {
  constructor(name, age, weight) {
    super(name, age);
    this.weight = weight;
  }

  makeSound() {
    return "meow";
  }
}

const myDog_2 = new Dog_2("Laica", 2, "Pastor");
const myCat_2 = new Cat_2("Michu", 5, "5kg");

console.log(myDog_2.makeSound());
console.log(myCat_2.makeSound());

/** Abstract Class */
class AbstractAnimal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    if (this.constructor == AbstractAnimal) {
      throw new Error("Can't create a instance of Abstract class");
    }
  }

  makeSound() {
    throw new Error("abstract method doesn't have an implementation");
  }
}

class Dog_3 extends AbstractAnimal {
  constructor(name, age, breed) {
    super(name, age); //with super we refering the class
    this.breed = breed;
  }

  makeSound() {
    return "woof";
  }
}

class Cat_3 extends AbstractAnimal {
  constructor(name, age, weight) {
    super(name, age);
    this.weight = weight;
  }
}

//const otherAnimal = new AbstractAnimal("Churri", 3); can't create instance of abstract class
const myAbsDog = new Dog_3("REx", 2, "German Sh.");
const myAbsCat = new Cat_3("WIskers", 5, "5gk");
console.log("__________________________________");
//console.log(myAbsCat.makeSound()); // method isn't avaliable
