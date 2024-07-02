import { passwordStrength } from "check-password-strength";
import { displayError, removeError } from "./errors.js";

export const checkValidatResult =
    (input, field, contidion, massageError) => {
        console.log(field);
        if (contidion) {
            displayError(input, massageError, field);
        } else {
            removeError(input, field);
        }
    };

export const validateUsername = (input, field) => {
    console.log(field);
    checkValidatResult(input, field, input.value.length < 4 || input.value.length > 16, "Username must be between 4 and 16 characters.");
};

export const validateEmail = (input, field) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    checkValidatResult(input, field, !emailRegex.test(input.value), "Email is not valid.");
};

export const validatePassword = (input, field) => {
    checkValidatResult(input, field, passwordStrength(input.value).id < 2, "Password is not strong enough.");
};

export const validateConfirmPassword = (input, field) => {
    const password = document.getElementById("password").value;
    checkValidatResult(input, field, input.value !== password, "Passwords do not match.");
};
