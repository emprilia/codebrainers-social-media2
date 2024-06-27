export const displayError = (input, message) => {
    input.insertAdjacentHTML(
        "afterend",
        `<div class="auth__error">${message}</div>`
    );
};