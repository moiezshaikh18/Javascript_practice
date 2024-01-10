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


let  arr  = [1,2,3,4];

arr.forEach(elem  =>{

if(elem  ==  1){

continue;

}

console.log(elem);

})
