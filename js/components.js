import { validation, encript } from "../js/main.js";

const btnEncript = document.querySelector("#encript");
const btnDecript = document.querySelector("#decript");
const textInput = document.querySelector("#textInput");
const resultText = document.querySelector("#resultText");
const errorText = document.querySelector("#errorText");

// Validación
btnEncript.addEventListener("click", function (e) {
  e.preventDefault();
  const result = validation(textInput);
  const res = result
    ? encript(textInput.value)
    : (errorText.computedStyleMap.display = "");

  resultText.textContent = res;
});
