//4.1

// console.log(Math.round(Math.random() * 10)); // 0 - 10

//4.2

// let country = {
//   name: "India",
//   capital: "delhi",
//   language: "Hindi",
//   population: 133,
//   neighbors: "china",
// };

// country.population = 135;

// country["population"] = 133;

// let a = country.language.toUpperCase();

// console.log(country, a);

//4.3

// let car = {
//   color: "Blue",

//   model: 2021,

//   company: "Toyota",
// };

// let carColor = "Blue"; // syntax error

// console.log(car[carColor]);

// console.log(car.carColor);

//4.4

// let car = {
//   name: "Exter",
//   color: "black",
//   model: 2024,
//   describeCar: function () {
//     console.log(`Company of my car is ${this.name}. It ${this.color} is And ${this.model}

//     `);
//   },
// };

// car.describeCar();

//4.5

// function getRandomNumbers() {
//   console.log(Math.trunc(Math.random() * 11));
// }

// getRandomNumbers();

//4.6

// let  arr  = [1,2,3,4];

// arr.forEach(elem  =>{

// if(elem  ==  1){

// continue;

// }

// console.log(elem);

// })

//4.7
// let airplane = {
//   flightName: "fly india",

//   atacode: "FI",

//   ratings: 4.9,

//   book: function (passenger, flightNum) {
//     console.log(
//       `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
//     );
//   },
// };

// let bookMethod = airplane.book; // when we use the expression for call method of objects to use call apply or bind

// bookMethod.call(airplane, "john", 8754);

//4.8

// let arr = [1, 2, 3, 4];

// for (let elem in arr) {
//   console.log(elem); /// it will print the index of array
// }

//4.9

// let Shopping_car = [
//   {
//     addItem: function (itemName) {
//       return itemName;
//     },
//   },
//   {
//     removeItem: function (itemName) {
//       Shopping_car.forEach(element => {
//         element.itemName === this.addItem(this.itemName)
//       });
//     },
//   },
//   {
//     cart: function (size) {
//       return size;
//     },
//   },
// ];
