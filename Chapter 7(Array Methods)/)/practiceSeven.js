//7.1

// let admins = ["john", "paul", "Neha", "harry"];

// console.log(admins.slice(2)); // start index consider but end index excluding

// console.log(admins); // did'nt change exisiting array

//7.2

// const arr = [1, 4, 7, 6, 8];

// const arr2 = [...arr];

// const deletedElements = arr2.splice(2, 2);

// console.log(deletedElements); // Display deleted elements
// console.log(arr.unshift(0, 5, 9));

// console.log(arr);

//7.3

// const arr = [1, 4, 7, 6, 8];

// console.log(arr.slice(-1)); // It will star from reverse

//7.4

// const arr = [1, 4, 7, 6, 8];

// console.log("Method 1", arr.slice(-1));
// console.log("Method 2", arr.pop());
// console.log("Method 3", arr.at(4));

//7.5

// const arr = [1, 4, 7, 6, 8];

// const newArr = arr.map((item) => {
//   return item * 2;
// });

// console.log("Multiply Array", newArr);

//7.6

// const arr = [10, 40, 70, 60, 80];

// const filterArray = arr.filter((item) => {
//   return item > 75;
// });

// console.log("Filterd Scores", filterArray);

//7.7

// let nums = [2, 3, 5, 7, 8, 4, 9];

// let sumOf = nums.reduce((item, n) => {
//   // last will be itrrater
//   return item + n;
// }, 0);

// console.log(sumOf);

// 7.8

// let nums = [2, 3, 5, 6, 8, 6, 4, 8];

// const findArr = nums.findIndex((item) => item === 8);
// console.log(findArr);

//7.9

// let users = [
//   {
//     name: "Paul",
//     age: 24,
//     verified: true,
//   },
//   { name: "John", age: 21, verified: false },
//   { name: "Neha", age: 19, verify: true },
// ];

// const filterUser = users.filter((user) => {
//   return user.name === "John";
// });

// const position = users.findIndex((item) => item.name === "John");

// console.log(filterUser);
// console.log(position + 1);

//7.10

// let nums = [1, 2, 4, 5, [6, [8]], [9, 0]];

// let res1 = nums.flat(2);

// console.log(res1);

// let res2 = nums.flatMap((elem) => elem);

// console.log(res2);

//7.11

// let nums = [5, 1, 4, 6, 8, 3, 9];

// let sortArr = nums.sort((a, b) => {
//   return b - a;
// });

// console.log(sortArr);

//7.12

// let arr = [1, 2, 3, 4];

// let result = arr.splice(1, 2).pop();

// console.log(result);

//7.13

// let nums = [16, 17, 18, 28, 22];

// const everyArr = nums.every((n) => {
//   return n > 15;
// });

// console.log(everyArr);

//7.14(1)

// let strArray = [1, 2, 3, 4, 5];

// let result = strArray.reverse();

// console.log(result);

// console.log(result == strArray);

//7.14(2)

// let arr1 = [1, 2, 3, 4, 5];

// let arr2 = [6, 7, 8, 9, 10];

// console.log(arr1.concat(arr2));

//7.14(3)

// let arr = ["a", "b", "h", "i", "s", "h", "e", "k"];

// let joinStr = arr.join("");

// console.log(joinStr);

//7.14(4)

// let arr = [11, 62, 1, 27, 8, 5];

// let sorted = arr.sort();

// console.log(sorted);

//7.14(4)

// function calcAverageHumanAge(dogAge) {
//   let humanAge;
//   if (dogAge <= 2) {
//     humanAge = 2 * dogAge;
//   } else if (dogAge > 2) {
//     humanAge = 16 + dogAge;
//   }
//   return humanAge;
// }

// console.log("HumanAge", calcAverageHumanAge(16));

//7.14(5)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let elem = arr.at(-1);

// console.log(elem);

//7.14(6)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let result = arr.slice(2, 5).splice(0, 2, 11).pop();

// console.log(result, arr);
