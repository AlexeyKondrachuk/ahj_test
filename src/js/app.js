// TODO: write code here
import validCards from "./validCards";
import validate from "./validators";

if (typeof document !== "undefined") {
  const input = document.querySelector(".form-control");

  input.addEventListener("input", () => {
    const type = validCards(input.value);
    const cards = document.querySelectorAll(".card");
    cards.forEach((item) => {
      item.classList.remove("active");
    });
    if (type) {
      document.querySelector(type).classList.add("active");
    }
  });

  input.parentNode.addEventListener("submit", (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    result.textContent = "";
    validate(input.value)
      ? (result.textContent = "Действующая карта")
      : (result.textContent = "Номер карты некорректен!");
    document.getElementById("card_number").value = " ";
  });
}