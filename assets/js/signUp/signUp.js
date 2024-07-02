// import !
import { fields } from "./fields.js";
import { displayError } from "./errors.js";
import { checkFormIsValid } from "../helpers/form.js";

// ***********************************************************************

const form = document.getElementById("signUpForm");
const inputs = document.querySelectorAll(".auth__input");
const submitButton = document.querySelector(".auth__button");
// ***********************************************************************

// sprawdzam czy wszystkie pola sa poprawne zeby przycisk był wyłaczony
checkFormIsValid(fields, submitButton);

// ***********************************************************************

// od 20 do 28 loinijki zamnij w oddzielnej funkcji w walidatorze
//skroc kod 
inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    const field = fields.find((field) => field.id === input.id);
    console.log(field);
    if (input.value === "") {
      displayError(input, "Field cannot be empty");
      // zmieniam isValid na false - nie jest poprawne
      field.isValid = false;
    } else {
      field.validate(input, field);
    }
    checkFormIsValid(fields, submitButton);
  });
});

// ***********************************************************************


form.addEventListener("submit", (event) => {
  event.preventDefault();
  //objekt ktory przedstawia klucze wartosci zdanego form'a

  //sprobuj to zapisac w local storige haslo itd.
  //i dodac wlasciwosc "isLogIn" ze jest zalogowany

  const formData = new FormData(form);
  // const data = Object.fromEntries(formData.entries());

  // localStorage.setItem("formData", JSON.stringify(data));

  window.location.href = "index.html";
});