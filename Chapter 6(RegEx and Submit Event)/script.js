// Form Events (Submit Event) && RegEx

let form = document.querySelector(".sign_up_form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

console.log(form);

let passwords;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submit default", e);
  passwords = password.value;
});

let passwordPattern = "^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])).{8,}";

passwords.match(passwordPattern);
