// Object Oriented Programming

//new (Object) Methods
//'This' Keyword
// object Likned to prototype
//4 function automatically return

let Car = function (color, model) {
  this.color = color;
  this.model = model;
};

let res = new Car("Yellow", 2022);
let ress = new Car("Black", 2023);

console.log(res, ress);

console.log(res instanceof Car);
