
import { displayError } from "./errors.js";
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
}