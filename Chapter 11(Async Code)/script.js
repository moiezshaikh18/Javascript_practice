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

// Callbacks

let todos = (callBack) => {
  let request = new XMLHttpRequest();

  console.log(request);

  request.addEventListener("readystatechange", () => {
    console.log(request, request.readyState); // Every state has his unique value and also having his own method call
    if (request.readyState === 4) {
      callBack(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callBack("Data could not fetch", undefined);
    }
  });

  // Set up request
  request.open("Get", "https://jsonplaceholder.typicode.com/todos");

  // Sending the request

  request.send();
};

todos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(data));
  }
});
