//3.1

// function describeYourState(population, traditional_food, historical_place) {
//   return `${population} ${traditional_food} ${historical_place}`;
// }

// console.log(
//   describeYourState("to populated", "misal is food", "near tulsibaug pune")
// );

//3.2
// const describeYourState = function (
//   population,
//   traditional_food,
//   historical_place
// ) {
//   return ` My state population is ${population} Its traditional food is ${traditional_food} and historical place name is ${historical_place}`;
// };

// console.log(describeYourState(" 2 crore", "misal ", "shaniwwarwada"));

//3.3

// function addition(a = 6, b = 6) {
//   return a + b;
// }

// console.log(addition());

//3.4

// let person = {
//   name: "john",

//   age: 25,
// };

// function greet(person) {
//   person.name = `Mr ${person.name}`;    // output: Object value is passed

//   return `Welcome ${person.name}`;
// }

// console.log(greet(person));

//3.5

// function firstUpperCaseWord(str) {
//   return str.toUpperCase();
// }

// function transformer(str, fun) {
//   return fun(str);
// }

// console.log(transformer("hello", firstUpperCaseWord));

// 3.6

// let yourName = "moiz";

// function displayName(yourName) {
//   setInterval(() => {
//     console.log(`${yourName}`);
//   }, 5000);
// }

// displayName(yourName);

//3.7

// let arrowFunction = (name = "Coders") => {
//   return `Welcome ${name}`;
// };

// console.log(arrowFunction("Programmers"));

//3.8

// function area_of_triangle(a, b, c) {
//   return a + b + c / 2;
// }

// console.log(area_of_triangle(5, 6, 7));

//3.9

// function capitalize(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// let name = "Moiz";

// console.log(capitalize("the word has to be first letter capital"));
