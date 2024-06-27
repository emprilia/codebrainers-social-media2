//export do ?! EXPORTOWANIA 
import { validateEmail, validateUsername } from "./validators.js";

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
        validate: validateUsername,
    },
    {
        id: "confirmPassword",
        isValid: false,
        validate: validateUsername,
    },
];