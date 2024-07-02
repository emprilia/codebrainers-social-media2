import { FieldType } from "./fields";

export const displayError = (
  input: HTMLInputElement,
  message: string,
  field: FieldType
): void => {
  removeError(input, field);
  input.insertAdjacentHTML(
    "afterend",
    `<div class="auth__error">${message}</div>`
  );
  field.isValid = false;
};

export const removeError = (input: HTMLInputElement, field: FieldType) => {
  const errorParrent = input.parentElement;
  if (errorParrent) {
    const error = errorParrent.querySelector(".auth__error");
    if (error) {
      error.remove();
    }
  }
  field.isValid = true;
};