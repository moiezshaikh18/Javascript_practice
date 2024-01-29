// ECMASCRIPT

// Destructuring the array

// let hotel = {
//   name: "hotell",
//   location: "Street No XYZ Pune",
//   categories: ["Chinese", "italian", "English"],
// };

// // Assign catergoried to name

// let [main, , secondory] = hotel.categories;

// console.log(main, secondory);

// //swipe the name

// [secondory, main] = [main, secondory];

// console.log(main, secondory);

// // Nested Array destructuring

// let nums = [2, 3, [6, 9]];

// // let [a, , b] = nums;

// let [a, b, [c, d]] = nums;

// console.log(a, b, c, d);

// Object Destructuring

// const hotel = {
//   name: "hotell",
//   live: "Street No XYZ Pune",
//   categories: ["Chinese", "italian", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   openingHours: {
//     sunday: { ope: "09:00AM", clos: "11:00PM" },
//     monday: { ope: "10:00AM", clos: "10:00PM" },
//   },
// };

// // const { name, live, mainMenu } = hotel;

// // console.log(name, live, mainMenu);

// //Set customize name to property

// // let { name: hotelName, live: hotelLive, mainMenu: Menu } = hotel;

// // console.log(hotelName, hotelLive, Menu);

// //Setting Default Values

// // let { name, Menu = [], categories = [] } = hotel;

// // console.log(name, Menu, categories);

// // let {
// //   name,
// //   live,
// //   openingHours: {
// //     monday: { ope, clos },
// //     sunday: { ope, clos },
// //   },
// // } = hotel;

// // console.log(name, openingHours, live);

// //Spread Operator

// let nums = [2, 3, 45, 5, 6, 7, 8];

// console.log(...nums);

// //USeCase

// let newArray = [...nums, 9, 10];

// console.log(newArray);

// let UpdatedMainMenu = [...hotel.mainMenu, "FoodD", "FoodE"]; // new r

// console.log(UpdatedMainMenu);

// console.log(hotel);

// // Join 2 array

// let JoineedArray = [...UpdatedMainMenu, ...newArray];

// console.log("ss", JoineedArray);

// // Shallow copy

// let copyArray = [...UpdatedMainMenu];

// console.log(...copyArray);

// // We can use string

// let passion = "Programming";

// console.log(...passion);

//Rest operator

// const hotel = {
//   name: "hotell",
//   live: "Street No XYZ Pune",
//   categories: ["Chinese", "italian", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   openingHours: {
//     sunday: { ope: "09:00AM", clos: "11:00PM" },
//     monday: { ope: "10:00AM", clos: "10:00PM" },
//   },
// };

// //Syntax of rest

// let nums = [2, 3, 4, 5, 6, 7];

// let [a, b, ...rest] = nums;

// console.log(rest);

// //Object

// let { sunday, ...weekdays } = hotel.openingHours;
// console.log(sunday, weekdays);

//Short Circutting

// const hotel = {
//   name: "hotell",
//   live: "Street No XYZ Pune",
//   categories: ["Chinese", "italian", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   openingHours: {
//     sunday: { ope: "09:00AM", clos: "11:00PM" },
//     monday: { ope: "10:00AM", clos: "10:00PM" },
//   },
// };

// // Falsy VAlue =>0,false,null,undefined,'',(Empty String)

// //AND && operator (Output true if all input true)

// // let result = null && "Coders"; //If first is falsy not move to the next

// // console.log(result); //Original Form

// //OR && operator (Output true if all input true)

// let result = "Programmer" || "coders";

// console.log(result);

//Nullish coalecing

// const hotel = {
//   name: "hotell",
//   live: "Street No XYZ Pune",
//   categories: ["Chinese", "italian", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   starterMenu: ["SpecialFoodA", "SpecialFoodB"],
//   openingHours: {
//     sunday: { ope: "09:00AM", clos: "11:00PM" },
//     monday: { ope: "10:00AM", clos: "10:00PM" },
//     tuesday: { ope: "8:00AM", clos: "10:00PM" },
//   },
// };

// let numGauest = 0;

// let result = numGauest || 10;

// let result2 = numGauest ?? 10;

// console.log(result);
// console.log(result2);

// For-of-loop

// let menu = [...hotel.mainMenu, ...hotel.starterMenu];

// for (let [i, item] of menu.entries()) {
//   console.log(i, item);
// }

// Enhance Object literals
// let openingHours = {
//   sunday: { ope: "09:00AM", clos: "11:00PM" },
//   monday: { ope: "10:00AM", clos: "10:00PM" },
//   tuesday: { ope: "8:00AM", clos: "10:00PM" },
// };

// // let menuType = "Platinum";

// const hotel = {
//   name: "hotell",
//   live: "Street No XYZ Pune",
//   categories: ["Chinese", "italian", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   starterMenu: ["SpecialFoodA", "SpecialFoodB"],
//   openingHours: openingHours,
//   order() {}, // New Way of writing function
//   [menuType]: ["Different Foood Item"], // New Dynamic Change
// };

//Optional CHaining

// let openingHours = {
//   sunday: { ope: "09:00AM", clos: "11:00PM" },
//   monday: { ope: "10:00AM", clos: "10:00PM" },
//   tuesday: { ope: "8:00AM", clos: "10:00PM" },
// };

// const hotel = {
//   name: "hotell",
//   live: "Street No XYZ Pune",
//   categories: ["Chinese", "italian", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   starterMenu: ["SpecialFoodA", "SpecialFoodB"],
//   openingHours,
// };

// console.log(hotel?.openingHours?.saturday?.ope);

//Looping Objects

// let openingHours = {
//   sunday: { ope: "09:00AM", clos: "11:00PM" },
//   monday: { ope: "10:00AM", clos: "10:00PM" },
//   tuesday: { ope: "8:00AM", clos: "10:00PM" },
// };

// const hotel = {
//   name: "hotell",
//   live: "Street No XYZ Pune",
//   categories: ["Chinese", "italian", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   starterMenu: ["SpecialFoodA", "SpecialFoodB"],
//   openingHours,
// };

// //Keys(Properties)

// let properties = Object.keys(openingHours);

// console.log("Keys", properties);

// for (const key in properties) {
//   const element = properties[key];
//   console.log("FOR-IN", element);
// }

// //Values

// let values = Object.values(properties);

// console.log("Values", values);

// // Complete

// let en = Object.entries(openingHours);

// console.log("Both key Value", en);

// for (let [day, { ope, clos }] of en) {
//   console.log(`On ${day} We open at ${ope} from ${clos}`);
// }

//Sets

// let openingHours = {
//   sunday: { ope: "09:00AM", clos: "11:00PM" },
//   monday: { ope: "10:00AM", clos: "10:00PM" },
//   tuesday: { ope: "8:00AM", clos: "10:00PM" },
// };

// const hotel = {
//   name: "hotell",
//   live: "Street No XYZ Pune",
//   categories: ["Chinese", "italian", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   starterMenu: ["SpecialFoodA", "SpecialFoodB"],
//   openingHours,
// };

// //Sets

// // let itemSet = new Set([3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3]);

// // console.log(itemSet);

// // for (let item of itemSet) {
// //   console.log(item);
// // }

// //Maps DSA

// let restaurantMap = new Map();

// restaurantMap.set(name, "bombay");
// restaurantMap.set(1, "address").set(true, "we are opening today");

// console.log(restaurantMap);

////Practice

//12.1
// let arr = [3, 4, 5, 7, 98, 0];

// let [a, b, , c] = arr;

// console.log(a, b, c); // 3,4,7

//12.2

// let arr = [1, 3, [2, 55], [9, 8, 7]];

// let [a, , [b, c], d] = arr;

// console.log(a, b, c, d); // 1,2,55 [9,8,7]

//12.3

// let obj = {
//   name: "John",

//   age: 25,

//   weight: 70,
// };

// let { name: objName, age } = obj;

// console.log(obj, age); /// 25

//12.4 (Create shallow copy)

// let nums = [5, 7, 4, 9, 2, 8];

// let newNums = [...nums];

// console.log(nums);

//12.5

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const getNumber = (...num) => {
//   if (num.length < 4) {
//     return `Atleast you have maximux lenght greater than 4`;
//   }
//   return num.slice(-4);
// };

// const result = getNumber(...nums);

// console.log(result);

// output data: 5,6,7,8

//12.6

// let nums = 0;

// let result = nums ?? 50;

// console.log(result);
