const form = document.getElementById("signUpForm");
const inputs = document.querySelectorAll(".auth__input");
const submitButton = document.querySelector(".auth__button");

const displayError = (input, message) => {
  input.insertAdjacentHTML(
    "afterend",
    `<div class="auth__error">${message}</div>`
  );
};

const validateUsername = (input, field) => {
  if (input.value.length < 4 || input.value.length > 16) {
    displayError(input, "Username must be between 4 and 16 characters.");
    field.isValid = false;
  } else {
    field.isValid = true;
  }
};

const fields = [
  {
    id: "username",
    isValid: false,
    validate: validateUsername,
  },
  {
    id: "email",
    isValid: false,
  },
  {
    id: "confirmEmail",
    isValid: false,
  },
];

submitButton.disabled = true;

inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    const field = fields.find((field) => field.id === input.id);
    if (input.value === "") {
      displayError(input, "Field cannot be empty");
    } else if (input.id === field.id) {
      field.validate(input, field);
      console.log(field.isValid);
    } else {
      isValid = true;
    }
  });
});
