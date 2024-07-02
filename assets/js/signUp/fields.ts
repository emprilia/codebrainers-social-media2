//export do ?! EXPORTOWANIA
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateConfirmPassword,
} from "./validators.js";

type InputId = "username" | "email" | "password" | "confirmPassword";

interface FieldType {
  id: InputId;
  isValid: boolean;
  validate: (input: HTMLInputElement, field: FieldType) => void;
}

// const fields: Array<FieldType>;
export const fields: FieldType[] = [
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
