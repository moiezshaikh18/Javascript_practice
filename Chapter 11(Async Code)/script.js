//Async Code

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log(3);
//   console.log(4);
// }, 5000);

// making HTTP req

// let request = new XMLHttpRequest();

// console.log(request);

// request.addEventListener("readystatechange", () => {
//   console.log(request, request.readyState); // Every state has his unique value and also having his own method call
//   if (request.readyState === 4) {
//     console.log(JSON.parse(request.responseText));
//   }
// });

// // Set up request
// request.open("Get", "https://jsonplaceholder.typicode.com/todos");

// // Sending the request

// request.send();

//Status Code

// Information reponses (100 -199)
// Successfull response (200-299)
// Redirection error response(300-399)
// Client error response(400-499)
// Server error response(500-599)

// Slice Method

// let arr = [3, 4, 5, 6, 7, 8, 9, 0]; // last index not include

// let result = arr.slice(1, 5);

// console.log(result);

// Splice Method

// It modifyed original array and added what you want
// let result = arr.splice(1, 3, 1);

// console.log(result);

// Callbacks

// let todos = (resource) => {
//   return new Promise((resolve, reject) => {
//     let request = new XMLHttpRequest();

//     console.log(request);

//     request.addEventListener("readystatechange", () => {
//       console.log(request, request.readyState); // Every state has his unique value and also having his own method call
//       if (request.readyState === 4) {
//         resolve(JSON.stringify(request.responseText));
//       } else if (request.readyState === 4) {
//         reject("Error in fetching data");
//       }
//     });

//     // Set up request
//     request.open("Get", "https://jsonplaceholder.typicode.com/todos");

//     // Sending the request

//     request.send();
//   });
// };

// todos((err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.parse(data));
//   }
// });

// todos("some Data")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Basics of Promise

// let getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // resolve(" Some Data"); //Dummy data
//     reject("Error");
//   });
// };

// getSomething().then((res) => {
//   console.log(res);
// }).catch((err=>{
//   console.log(err);
// });

// Fetch API

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async/Await

// let getTodos = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/todos");

//   if (response.status !== 200) {
//     throw new Error("Custom:Erorr in fetching data");
//   }

//   let data = await response.json();
//   return data;
// };

// getTodos()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

////Practice

//11.1

// async function greeting() {
//   let myPromise = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("I love Programming !!");
//     }, 2000);
//   });

//   document.getElementById("heading").innerHTML = await myPromise;
// }

// greeting();

//11.2

// const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

// function getMovies() {
//   setTimeout(() => {
//     movies.forEach((movie, index) => {
//       console.log(movie.title);
//     });
//   }, 2000);
// }

// function createMovies(movie) {
//   setTimeout(() => {
//     movies.push(movie);
//   }, 1000);
// }

// getMovies();

// createMovies({ title: `Movie 3` });
// createMovies({ title: `Movie 4` });

//11.3
//What are the three possible State of any promise?

// Resolve , reject and pending

//11.4

// const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

// function getMovies() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       movies.forEach((movie, index) => {
//         console.log(movie.title);
//       });
//       resolve();
//     }, 1000);
//   });
// }

// function createMovies(movie) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       movies.push(movie);
//       resolve();
//     }, 2000);
//   });
// }

// // Using promises
// getMovies()
//   .then(() => createMovies({ title: `Movie 3` }))
//   .then(() => getMovies()); // Calling getMovies again to log the updated movie list

// 11.5

// const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

// async function getMovies() {
//   return setTimeout(() => {
//     movies.forEach((movie, index) => {
//       console.log(movie.title);
//     });
//   }, 2000);
// }

// async function createMovies(movie) {
//   return setTimeout(() => {
//     movies.push(movie);
//   }, 1000);
// }

// async function main() {
//   await getMovies();
//   await createMovies({ title: `Movie 3` });
// }

// main();

//11.6

// 404 error represent client error
