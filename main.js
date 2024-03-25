/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/validCards.js
function validCards(value) {
  if (/^4\d{12}(?:\d{3})/.test(value)) {
    return ".visa";
  } else if (/(^5[1-5])\d{14}/.test(value)) {
    return ".master";
  } else if (/(^3[47])\d{13}/.test(value)) {
    return ".amex";
  } else if (/^(?:2131|1800|35\d{3})\d{11}/.test(value)) {
    return ".jcb";
  } else if (/(^2||6)\d{15}/.test(value)) {
    return ".mir";
  } else if (/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})/.test(value)) {
    return ".discover";
  }
  return null;
}
;// CONCATENATED MODULE: ./src/js/validators.js
function validate(value) {
  if (value.length < 13) return false;
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    let cardNumber = parseInt(value[i], 10);
    if ((value.length - i) % 2 === 0) {
      cardNumber *= 2;
      if (cardNumber > 9) {
        cardNumber -= 9;
      }
    }
    sum += cardNumber;
  }
  return sum !== 0 && sum % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here


if (typeof document !== "undefined") {
  const input = document.querySelector(".form-control");
  input.addEventListener("input", () => {
    const type = validCards(input.value);
    const cards = document.querySelectorAll(".card");
    cards.forEach(item => {
      item.classList.remove("active");
    });
    if (type) {
      document.querySelector(type).classList.add("active");
    }
  });
  input.parentNode.addEventListener("submit", e => {
    e.preventDefault();
    const result = document.getElementById("result");
    result.textContent = "";
    validate(input.value) ? result.textContent = "Действующая карта" : result.textContent = "Номер карты некорректен!";
    document.getElementById("card_number").value = " ";
  });
}
;// CONCATENATED MODULE: ./src/index.js




/******/ })()
;