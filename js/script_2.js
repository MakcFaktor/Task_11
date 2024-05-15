const textElement = document.getElementById("text");
const buttonElement = document.getElementById("colorButton");

let currentColor = "black";

buttonElement.addEventListener("click", function () {
  if (currentColor === "black") {
    textElement.style.color = "red";
    currentColor = "red";
  } else {
    textElement.style.color = "black";
    currentColor = "black";
  }
});
