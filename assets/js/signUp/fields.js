//export do ?! EXPORTOWANIA
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateConfirmPassword,
} from "./validators.js";

export const fields = [
  {
    id: "username",
    isValid: false,
    validate: validateUsername,
  },
  {
    id: "email",
    isValid: false,
    validate: validateEmail,
  },
  {
    id: "password",
    isValid: false,
    validate: validatePassword,
  },
  {
    id: "confirmPassword",
    isValid: false,
    validate: validateConfirmPassword,
  },
];
