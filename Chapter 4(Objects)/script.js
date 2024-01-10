// Introduction to Objects

// let car = {
//   color: "red",
//   name: "BMW",
//   model: "2020",
// };

// // Accessing the Objects

// // const { color, name, model } = car;

// // console.log(color, name, model);
// // console.log(car["model"]);
// // console.log(car.model);

// // let propertyName = "color";

// // console.log(car[propertyName]);

// // Modify The Objects

// car.color = "Black";

// console.log(car["color"]);

// Delete properies from Object

// let obj = {
//   prop: "value1",
//   prop1: "Value 2",
// };

// let values = delete obj.prop;

// console.log(obj, values);

// Functions and method

// let person = {
//   ageCalculation: (birthYear) => {
//     let age = 2023 - birthYear;
//     return age;
//   },
// };

// console.log(`Current age is ${person.ageCalculation(1993)}`);

// "this " keyboard

// let person = {
//   firstName: "Harry",
//   lastName: "Brook",
//   city: "Dehli",
//   edu: "SE",
//   getSummary: function () {
//     return `${this.firstName} ${this.lastName} lived in ${this.city}. He is ${this.edu}`;
//   },
// };

// console.log(person.getSummary());

//ForEach Method

// let dishes = ["Biryani", "Karahi", "ballay"];

// for (let i = 0; i < dishes.length; i++) {
//   console.log(dishes[i]);
// }

// dishes.forEach((dish) => {
//   console.log(dish);
// });

// Object inside Array

// let blockList = [
//   {
//     userName: "Moiz",
//     reason: "not work",
//   },
//   {
//     userName: "shadab",
//     reason: "good",
//   },
// ];

// for (let i = 0; i < blockList.length; i++) {
//   console.log(blockList[i].userName);
// }

// Math Object

// console.log(Math);

// let num = 7.6;

// console.log(Math.round(num));

// console.log(Math.floor(num));

// Call , Apply and bind

// let mainPlane = {
//   airplane: "Fly India",
//   latacode: "XYZ",
//   booking: [],
//   book: function (flightNumber, name) {
//     console.log(
//       `${name} Booked flight on ${this.airplane} with ${flightNumber} ${this.latacode}`
//     );
//     this.booking.push({
//       flight: `${this.airplane} `,
//       name: name,
//       flightNum: flightNumber,
//     });
//   },
// };

// mainPlane.book(12134, "shadab");
// mainPlane.book(31545, "Moiz");

// console.log(mainPlane);

// // New Airline

// let childPlane = {
//   airplane: "Child Plain",
//   latacode: "CP",
//   booking: [],
// };

// let book = mainPlane.book;

// book.call(childPlane, 5645, "Mrunal");

// console.log(childPlane);

// // apply Method

// book.apply(childPlane, [785, "Yogesh"]);

// Bind Method

// function greet() {
//   console.log(`Welcome ${this.firstName} ${this.lastName} on coder dost`);
// }

// let user = {
//   firstName: "Moiz",
//   lastName: "Shaikh",
// };

// let greets = greet.bind(user);

// greets();

// 'Object/ Array' how 'reference are passed to variable

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let getRef = arr;

// console.log(arr); // Both the aaray has same value if one change happen other will also happen
// console.log(getRef);

// // pass by value

// let getValue = [...arr];

// getValue[6] = 8;

// console.log("getByvalue", getValue);

// for-in-loop (Object use)

// let car = {
//   model: 2023,
//   color: "black",
//   company: "tpyota",
// };

// // console.log(car);

// for (let key in car) {
//   let x = "";
//   x = car[key];
//   console.log(x);
// }
