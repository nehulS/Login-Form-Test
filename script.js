const signInBtn = document.querySelector(".signInBtn");
const signUpBtn = document.querySelector(".signUpBtn");
const username = document.querySelector(".usernameInput");
const firstname = document.querySelector(".firstnameInput");
const lastname = document.querySelector(".lastnameInput");
const usernameUp = document.querySelector(".usernameInputUp");
const password = document.querySelector(".passwordInput");
const passwordUp = document.querySelector(".passwordInputUp");

const signInJSON = (e) => {
  e.preventDefault();
  const signInData = {
    username: username.value,
    password: password.value,
  };

  const signInText = JSON.stringify(signInData);
  localStorage.setItem("textIn", signInText);

  let myTextIn = localStorage.getItem("textIn");
  console.log(myTextIn);
};
const signUpJSON = (e) => {
  e.preventDefault();
  const signUpData = {
    firstname: firstname.value,
    lastname: lastname.value,
    usernameUp: usernameUp.value,
    passwordUp: passwordUp.value,
  };

  const signUpText = JSON.stringify(signUpData);
  localStorage.setItem("textUp", signUpText);

  let myTextUp = localStorage.getItem("textUp");
  console.log(myTextUp);
};

signInBtn.addEventListener("click", signInJSON);
signUpBtn.addEventListener("click", signUpJSON);
