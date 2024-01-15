// console.log(document);

// let resultElement = document.querySelectorAll("h1");
// let resultElementId = document.querySelectorAll("#coders");
// let resultElementClass = document.querySelectorAll(".coderdost");

// console.log(resultElement, resultElementId, resultElementClass);

// let tagElements = document.querySelector("h1");

// console.log(tagElements);

// let heading = document.querySelector("a");

// // heading.setAttribute("href", "youtube.com");

// heading.style.color = "red";

// ADD, REMOVE and REPLACE the class

// let heading = document.querySelector("h2");

// heading.classList.add("newClass");

// heading.classList.remove("newClass");

// heading.classList.replace("coderdost", "newClass");

// Parent , children

// let parentElement = document.querySelector(".content");

// console.log(parentElement.children);

// Array.from(parentElement.children).forEach((el) => {
//   el.classList.add("coders");
// });

// let child = document.querySelector("p");

// console.log("child.parentElement;", child.parentElement);

// Event Basics

// let buttonEle = document.querySelector(".clickMe");

// console.log(buttonEle);

// buttonEle.addEventListener("click", () => {
//   console.log("Clciked");
// });

// let liEle = document.querySelectorAll("li");

// console.log(liEle);

// liEle.forEach((l) => {
//   l.addEventListener("click", (e) => {
//     console.log("Item Clicked");
//     e.target.style.textDecoration = "line-through";
//   });
// });

// Creating and Removing

// let liEle = document.querySelectorAll("li");

// console.log(liEle);

// liEle.forEach((l) => {
//   l.addEventListener("click", (e) => {
//     console.log("Item Clicked");
//     e.target.remove();
//   });
// });

// // Creatings

// let ulEle = document.querySelector("ul");

// let buttonEle = document.querySelector(".clickMe");

// buttonEle.addEventListener("click", () => {
//   let li = document.createElement("li");
//   li.textContent = "somethibg new";
//   ulEle.append(li);
// });

// Bubbling and Delegation
