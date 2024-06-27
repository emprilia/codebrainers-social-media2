export const displayError = (input, message) => {
    removeError(input);
    input.insertAdjacentHTML(
        "afterend",
        `<div class="auth__error">${message}</div>`
    );
};

export const removeError = (input) => {
    const error = input.parentElement.querySelector(".auth__error");
    if (error) {
        error.remove();
    }
};