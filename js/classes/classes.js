// set up live server with: shift+command+p

// created to better create objects with prototypes
// classes aren't hoisted - therefore need to define before using
// two ways to define them: class declaration & class expression

console.log('JS connected');

// you pass through properties of the class through the constructor parameters
// methods go outside the constructor
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine and a beutiful ${this.color} color!`
  }

  // Static Methods
  // not available to instances of the Car Class
  // need to use the Car Class directly (see line: 38)
  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;

    return doors1 + doors2;
  }
}

// creating an instance of our class Car
const cx5 = new Car(4, 'V6', 'blue');
const civic = new Car(4, 'V4', 'green');

console.log(cx5);
console.log(cx5.carStats());
console.log(Car.totalDoors(cx5, civic));

// classes ARE functions, but there are differences
// functions are hoisted, classes arent
// functions can be overwritten, classes can only be extended (not overwritten)

// an objects prototype contains:
// 1) the methods it inherited
// 2) the constructor (the parent Class it was derived from)
// 3) the __proto__: object from the global JS object function

// the parent/root Class does NOT have a constructor, it IS the constructor

// Constructors build the initial object of a new class
// super() allows us to call the methods of a parent class (even static methods)


class SUV extends Car {
  // in order to use the constructor (doors, engine, color) from the parent class, need to use super()
  constructor(doors, engine, color, brand, carStats) {
    super(doors, engine, color, carStats);
    this.brand = brand;
    this.wheels = 4;
    this.ac = true;
  }

  myBrand() {
    return `This SUV is a ${this.brand}`;
  }
}

const escalade = new SUV(4, 'V8', 'black', 'Cadilac');
console.log(escalade);
console.log(escalade.myBrand());
