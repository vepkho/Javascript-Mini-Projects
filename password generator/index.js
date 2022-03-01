const btn = document.querySelector(".btn");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const password3 = document.getElementById("password3");
const password4 = document.getElementById("password4");

btn.addEventListener("click", giveMePassword);

function giveMePassword() {
  let chars =
    "1234567890qwertyuiopasdfghjklzxcvbnm{}[];:<>!@#$%^&*()_-+=QWERTYUIOPASDFGHJKLZXCVBNM";
  let passwordLength = 12;
  let passwordOne = "";
  let passwordTwo = "";
  let passwordThree = "";
  let passwordFour = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    passwordOne += chars.substring(randomNumber, randomNumber + 1);
  }
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    passwordTwo += chars.substring(randomNumber, randomNumber + 1);
  }
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    passwordThree += chars.substring(randomNumber, randomNumber + 1);
  }
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    passwordFour += chars.substring(randomNumber, randomNumber + 1);
  }

  password1.textContent = passwordOne;
  password2.textContent = passwordTwo;
  password3.textContent = passwordThree;
  password4.textContent = passwordFour;

  if (password1.classList.contains("active") == true) {
    password1.classList.remove("active");
    password1.classList.add("generated");
  }
  if (password2.classList.contains("active") == true) {
    password2.classList.remove("active");
    password2.classList.add("generated");
  }
  if (password3.classList.contains("active") == true) {
    password3.classList.remove("active");
    password3.classList.add("generated");
  }
  if (password4.classList.contains("active") == true) {
    password4.classList.remove("active");
    password4.classList.add("generated");
  }
}
