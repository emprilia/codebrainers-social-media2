import { passwordStrength } from "check-password-strength";
import { displayError, removeError } from "./errors.ts";
import { FieldType } from "./fields.ts";

export const checkValidatResult = (
  input: HTMLInputElement,
  field: FieldType,
  contidion: boolean,
  massageError: string
) => {
  console.log(field);
  if (contidion) {
    displayError(input, massageError, field);
  } else {
    removeError(input, field);
  }
};

export const validateUsername = (input: HTMLInputElement, field: FieldType) => {
  console.log(field);
  checkValidatResult(
    input,
    field,
    input.value.length < 4 || input.value.length > 16,
    "Username must be between 4 and 16 characters."
  );
};

export const validateEmail = (input: HTMLInputElement, field: FieldType) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  checkValidatResult(
    input,
    field,
    !emailRegex.test(input.value),
    "Email is not valid."
  );
};

export const validatePassword = (input: HTMLInputElement, field: FieldType) => {
  checkValidatResult(
    input,
    field,
    passwordStrength(input.value).id < 2,
    "Password is not strong enough."
  );
};

export const validateConfirmPassword = (
  input: HTMLInputElement,
  field: FieldType
) => {
  const password = <HTMLInputElement>document.getElementById("password");
  checkValidatResult(
    input,
    field,
    input.value !== password.value,
    "Passwords do not match."
  );
};
