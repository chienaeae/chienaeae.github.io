console.log("Load form.js success");

const fnameElement = document.getElementById("fname");
const fnameInput = document.getElementById("fname_input");

const lnameElement = document.getElementById("lname");
const lnameInput = document.getElementById("lname_input");

const emailElement = document.getElementById("email");
const emailInput = document.getElementById("email_input");

const maleOption = document.getElementById("gender_male_option");
const femaleOption = document.getElementById("gender_female_option");

const submitButton = document.getElementById("btn_submit");
const clearButton = document.getElementById("btn_clear");

submitButton.addEventListener("click", () => {
  let valid = validateFname();
  valid = validateLname();
  valid = validateEmail();

  console.log("Hello World");
  if (valid) {
    console.log({
      firstName: fnameInput.value,
      lastName: fnameInput.value,
      email: emailInput.value,
      isMale: maleOption.checked,
      isFemale: femaleOption.checked,
    });
  }
});

clearButton.addEventListener("click", () => {
  fnameInput.value = "";
  lnameInput.value = "";
  emailInput.value = "";
  maleOption.checked = false;
  femaleOption.checked = false;
});

function validateFname() {
  if (fnameInput.value === "") {
    displayValidator(fnameElement, "First name is required!");
    return false;
  }
  return true;
}
function validateLname() {
  if (lnameInput.value === "") {
    displayValidator(lnameElement, "Last name is required!");
    return false;
  }
  return true;
}
function validateEmail() {
  if (emailInput.value === "") {
    displayValidator(emailElement, "Email is required!");
    return false;
  }
  return true;
}

function displayValidator(ele, warn) {
  if (ele.getElementsByClassName("validator").length >= 1) {
    return;
  }

  var validator = document.createElement("span");
  validator.textContent = warn;
  validator.className = "validator";
  ele.appendChild(validator);

  const validateElements = ele.querySelectorAll(".validate");
  validateElements[0].addEventListener("input", () => {
    validator.remove();
    validateElements[0].removeEventListener("input", undefined);
  });
}
