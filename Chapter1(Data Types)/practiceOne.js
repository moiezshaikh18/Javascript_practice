// 1.1

console.log("check difference between null and undefined", null === undefined);

console.log(typeof null);
console.log(typeof undefined);

//1.2
// constant variable need to initialize at the time of declaration

//1.3

let languages = "java javaScript python cSharp";

let results = languages.lastIndexOf("S");

console.log(results);

//1.4

let variable = "hello programmers";

let result = Number(variable);

console.log("result", result);

//1.5

let num1 = 32;

let num2 = "32";

let result1 = num1 !== num2; // true

let result2 = num1 != num2; // false

console.log(result1, result2);

//1.6
let str = "Hello Programmers";

let result3 = str.includes("r"); // "true" it returns boolean

console.log(result3);

//1.7

let num = 2;

let num3 = 5;

let result4 = num1 ** num2 * 2;

console.log(result4); //2.923003274661806e+48

//1.8
let num4 = [1, 2, 4, 5];

let num5 = [6, 5, 8, 0];

let result5 = num4.concat(num5); // [1,2,4,5,6,5,8,0]

console.log(result5);

//1.9

let a = 5;

let b = 7;

let c = 8;

let result6 = a < b > c;

console.log(result6); //  false

//1.10

console.log(20 / 4); // Here is Input is 20 and each part having 5 so I am using divide operator
