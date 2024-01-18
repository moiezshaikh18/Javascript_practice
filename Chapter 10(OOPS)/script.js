// Object Oriented Programming

//new (Object) Methods
//'This' Keyword
// object Likned to prototype
//4 function automatically return

// let Car = function (color, model) {
//   this.color = color;
//   this.model = model;
// };

// let res = new Car("Yellow", 2022);
// let ress = new Car("Black", 2023);

// console.log(res, ress);

// console.log(res instanceof Car);

// Car.prototype.login = function () {
//   console.log("This is test class functio");
// };
// console.log(Car.prototype);
// console.log(res.login());
// console.log(res.__proto__.isPrototypeOf(res));

/// Inheritance

// let arr = [2, 3, 4, 5, 6, 7];

// console.log(arr.__proto__.__proto__);

//ES6 Classes------New
// Classes are not hoisted
// classes are also first class (Pass as arguments)

//Getters and setters method

// class Car {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }
//   startEngine() {
//     console.log("This start engine method of car");
//   }
//   get _startEngine() {
//     console.log("This is start emgine method using get");
//   }
//   set _colorChange(color) {
//     this.color = color;
//   }
//   get description() {
//     return `Color of bike is ${this.color} and is model is ${this.model}`;
//   }
// }

// let honda = new Car("red", 2022);

// console.log(
//   honda,
//   honda.startEngine(),
//   honda._startEngine,
//   (honda._colorChange = "blue"),
//   honda.description
// );

// class Car {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }
//   startEngine() {
//     console.log("This is start engine method");
//   }
// }

// let instance = new Car("Yellow", 2025);
// instance.startEngine();
// console.log(instance);

// //Static method

// Car.breakMethod = function () {
//   console.log("This is break method of car");
// };

// console.log(Car.breakMethod());

// Inheritance

// class Car {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }
//   startEngine() {
//     console.log("This is start engine method");
//   }
// }

// class Bike extends Car {
//   constructor(color, model, engineCap) {
//     super(color, model);
//     this.engineCap = engineCap;
//   }
//   bikeMethod() {
//     console.log("this is method of bike class");
//   }
// }

// let newBike = new Bike("black", 2024, 700);
// let newBike2 = new Bike("Brown", 2025, 700);
// newBike.startEngine();
// newBike.bikeMethod();
// console.log(newBike, newBike2);

// Chainning Of Mthods

// class bankAccount {
//   constructor(owner, pin) {
//     this.owner = owner;
//     this.pin = pin;
//     this.movements = [];
//   }
//   getMovements() {
//     return this.movements;
//   }
//   deposit(val) {
//     this.movements.push[val];
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }
// }

// let account = new bankAccount("zack", 5685);

// account.deposit(1000);
// account.withdraw(500);

// console.log(account.getMovements());
// console.log(account);
///////////////////////////////////////////////

//Practice

//10.3

// function Person(name) {
//   this.name = name;
// }

// let me = new Person("John");

// console.log(me.__proto__ == Person.prototype);

// console.log(me.__proto__.__proto__ == Object.prototype);

//10.4

// class Car {
//   constructor(color, model, company) {
//     this.color = color;
//     this.model = model;
//     this.company = company;
//   }
// }

// let c = new Car("Black", 2025, "Honda");

//10.1

// let Bike = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// let b = new Bike("Honda", 140);

// Bike.prototype.accelerate = function () {
//   console.log(`N=Increase speed ${this.speed + 50} `);
// };
// Bike.prototype.break = function () {
//   console.log(`N=Increase speed ${this.speed - 25} `);
// };

// console.log(b.accelerate(), b.break());
// console.log(b.accelerate().break().accelerate().accelerate().break());
