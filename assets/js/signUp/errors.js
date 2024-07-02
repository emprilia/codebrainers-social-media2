
export const displayError = (input, message, field) => {
    removeError(input);
    input.insertAdjacentHTML(
        "afterend",
        `<div class="auth__error">${message}</div>`
    );
    field.isValid = false;
};

export const removeError = (input, field) => {
    const error = input.parentElement.querySelector(".auth__error");
    if (error) {
        error.remove();
        field.isValid = true;
    }
};