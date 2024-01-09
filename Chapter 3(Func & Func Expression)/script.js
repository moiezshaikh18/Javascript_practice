// Functions
// Which can run any where in the code

// function addTONumber(a, b) {
//   return a + b;
// }

// console.log(addTONumber(5, 6));

// // FUnction expression

// const func = function () {
//   return "This is anonymous";
// };

// console.log(func());

// let name;
// const invitation = (name = "moix") => {
//   console.log("Welcome!! You are invited ", name);
// };

// invitation();

//Every Function has return Value

// Arrow Expression

// let invite = (name) => `welcome to ${name}  `;

// console.log(invite("coders"));

// Higher-Order-function - Callbacks

// let upperCase = function (str) {
//   return str.toUpperCase();
// };

// let lowerCase = function (str) {
//   return str.toLowerCase();
// };

// let transformer = function (str, fun) {
//   return fun(str);
// };

// console.log(transformer("hello", lowerCase));

//Higher-Order-function - Returning Function

// let compliment = function (msg) {
//   return function (name) {
//     console.log(`${msg} ${name}`);
//   };
// };

// console.log(compliment("You are")("good coder"));

// IIFE

// (function (name) {
//   console.log(`This name ${name}`);
// })("Moiz");

// setTimeOut and setInterval

// function example(name) {
//   setTimeout(() => {
//     console.log(`this test coder dost ${name}`);
//   }, 5000);
// }

// example("moiz");

// function example(name) {
//   setInterval(() => {
//     console.log(`this test coder dost ${name}`);
//   }, 5000);
// }

// example("moiz");

// Hoisting

//Variable 'declaration' are hoisted to top of the code

// console.log("var", test);

// var test = 9;

// test();

// function test() {
//   console.log("This is  hoisting data");
// }
