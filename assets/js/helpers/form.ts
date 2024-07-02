// //sprawdzam czy wszystkie pola sa poprawne
// const checkFormIsValid = () => {
//   //ustawiam domyslnie ze wszystkie pola sa poprawne
//   let allValid = true;

import { FieldType } from "../signUp/fields";

//   //sprawdzam czy sa poprawne
//   fields.forEach((field) => {
//     if (!field.isValid) {
//       allValid = false;
//     }
//   });

//   //jesli byly poprawne to dalej jest true, jesli jedno nie śmiga
//   //to wyrzuca false
//   submitButton.disabled = !allValid;
// }

// krótrzy zapis !
export const checkFormIsValid = (
  fields: FieldType[],
  submitButton: HTMLButtonElement
) => {
  // POWTORZ EVERY
  const allValid = fields.every((field) => field.isValid);

  submitButton.disabled = !allValid;
};
