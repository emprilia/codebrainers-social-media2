// import !
import { fields } from "./fields.js";
import { displayError } from "./errors.js";
import { checkFormIsValid } from "../helpers/form.js";

// ***********************************************************************

const form = document.getElementById("signUpForm");
const inputs = document.querySelectorAll(".auth__input");
const submitButton = document.querySelector(".auth__button");
// ***********************************************************************

// sprawdzam czy wszystkie pola sa poprawne zeby przycisk był wyłaczony
checkFormIsValid(fields, submitButton);

// ***********************************************************************

inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    const field = fields.find((field) => field.id === input.id);
    if (input.value === "") {
      displayError(input, "Field cannot be empty");
      // zmieniam isValid na false - nie jest poprawne
      field.isValid = false;
    } else {
      field.validate(input, field);
    }
    checkFormIsValid(fields, submitButton);
  });
});

// ***********************************************************************
