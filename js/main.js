"use strict";

const rules = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

//Validacion
function validation(textInput) {
  if (textInput.value.trim().length > 0) return true;
  else return false;
}

// Método para encriptación
function encript(string) {
  const arrCharts = string.split("");
  const chartencripty = arrCharts
    .map((chart) => (rules[chart] ? rules[chart] : chart))
    .join("");
  return chartencripty;
}

// Método para descencriptación
function descript(string) {
  let result = string;
  for (const [key, value] of Object.entries(rules)) {
    const regex = new RegExp(value, "g");
    result = result.replaceAll(regex, key);
  }
  return result;
}

export { validation, encript, descript };
