// Array Methods

let lattersArray = ["a", "b", "c", "d", "e"];

// // Reverse (Mutate the original array)

// console.log(lattersArray.reverse());

// Concat
let nums = [1, 2, 3, 4, 5, 6];

let concated = nums.concat(lattersArray);

console.log(concated);

// Join

let joined = lattersArray.join("-");

console.log(joined);

//Slice method

let sliced = lattersArray.slice(0, 3); // does not include last index last - 1

console.log(sliced);

// Splice Method (mututed method) // Its return the deleted value

let numbers = [0, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let spliced = numbers.splice(1, 1, 6); //("StartedIndex","deletedCount","valuetobeadded")

console.log(numbers);
console.log(spliced);

//at Method

let arr = [23, 1342, 54654, 854, 8745];

console.log("At Methods", arr.at[-1]);

// Array Method (Higher Order Function)

// Map Methods

let salary = [3000, 4500, 5000, 9500, 8000];

let newSalaries = salary.map((salary) => {
  let incrementSalary = salary / 2;
  return salary + incrementSalary;
});

console.log("newSalaries", newSalaries);

// Filter Method

let gifts = ["watch", "ring", "choco", "teddy", "phone"];

let filterArray = gifts.filter((gift) => {
  if (gift === "watch" || gift === "ring") {
    return gift;
  }
});

console.log("giftedArray", filterArray);

// Reduce Method

let nu = [1, 5, 3, 4, 8, 6];

let sum = nu.reduce((total, currentValue) => {
  console.log(total, currentValue);
  return total + currentValue;
}, 0);

console.log("sum", sum);

//Find Method / findIndex

let array2 = [
  {
    id: 1,
    name: "moiz",
  },
  {
    id: 2,
    name: "gaurish",
  },
  {
    id: 1,
    name: "girish",
  },
];

let result = array2.find((students) => students.id === 1);
let results = array2.findIndex((d) => d.id === 1); // its return 1 if true or -1 for falase
console.log(result);
console.log(results);

// Some and Every Method

let scores = [25, 35, 78, 45, 98, 65, 75];

let newScores = scores.some((score) => {
  // return boolean only first
  return score > 50;
});

let newScoress = scores.every((score) => {
  // eVERY CONDITION HAS TO BE TRUEE
  return score > 50;
});

console.log("Some Method", newScores);
console.log("Every Method", newScoress);

//  Flat method

let aarr = [1, 2, 3, [4, 5, 6, 7]];

let newFlat = aarr.flat(4); // by default 1 LEVEL ARRAY

console.log(newFlat);

//FlatMap Method

//combination of flat and map method

let cart = [
  {
    name: "mobile Phone",
    qty: 5,
    price: 500,
  },
  {
    name: "tablet",
    qty: 1,
    price: 500,
  },
];

let newCart = cart.flatMap((cart) => {
  return cart.name === "mobile Phone"
    ? [cart, { name: "Screen Protector", qty: 1, price: 0 }]
    : [cart];
});

console.log(newCart);

// Sorting of array

let latters = [6, 4, 8, 5, 1, 3, 2];

console.log(latters.sort());

let sortedarray = latters.sort((a, b) => {
  if (a - b) {
    return 1;
  } else if (b - a) {
    return -1;
  }
});

console.log(sortedarray);

// Chaain of methods

let ank = [1, 2, 3, 6, 7, 8, 9];

let r = ank.slice(0, 3).splice(2, 1, 7);

console.log("r", r);
