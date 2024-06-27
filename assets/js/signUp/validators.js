import { displayError } from "./errors.js";
import { passwordStrength } from "check-password-strength";

export const validateUsername = (input, field) => {
  if (input.value.length < 4 || input.value.length > 16) {
    displayError(input, "Username must be between 4 and 16 characters.");
    field.isValid = false;
  } else {
    field.isValid = true;
  }
};

export const validateEmail = (input, field) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input.value)) {
    displayError(input, "Email is not valid.");
    field.isValid = false;
  } else {
    field.isValid = true;
  }
};

export const validatePassword = (input, field) => {
  if (passwordStrength(input.value).id < 2) {
    displayError(input, "Password is not strong enough.");
    field.isValid = false;
  } else {
    field.isValid = true;
  }
};

export const validateConfirmPassword = (input, field) => {
  const password = document.getElementById("password").value;
  if (input.value !== password) {
    displayError(input, "Passwords do not match.");
    field.isValid = false;
  } else {
    field.isValid = true;
  }
};
