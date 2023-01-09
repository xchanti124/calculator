const elements = document.querySelectorAll(
  ".input-1, .input-2, .input-3, .input-plus, .input-4, .input-5, .input-6, .input-minus, .input-7, .input-8, .input-9, .input-multiply, .input-equals, .input-0, .input-dot, .input-divide"
);

const inputOne = elements[0];
const inputTwo = elements[1];
const inputThree = elements[2];
const inputPlus = elements[3];
const inputFour = elements[4];
const inputFive = elements[5];
const inputSix = elements[6];
const inputMinus = elements[7];
const inputSeven = elements[8];
const inputEight = elements[9];
const inputNine = elements[10];
const inputMultiply = elements[11];
const inputEquals = elements[12];
const inputZero = elements[13];
const inputDot = elements[14];
const inputDivide = elements[15];

let firstInput = "";
let sign = "";

inputPlus.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  firstInput = display.value;
  display.value = "";
  sign = "+";
});

inputMinus.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  firstInput = display.value;
  display.value = "";
  sign = "-";
});

inputMultiply.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  firstInput = display.value;
  display.value = "";
  sign = "*";
});

inputDivide.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  firstInput = display.value;
  display.value = "";
  sign = "/";
});

inputEquals.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  if (sign === "+") {
    display.value = Number(firstInput) + Number(display.value);
  }
  if (sign === "-") {
    display.value = Number(firstInput) - Number(display.value);
  }
  if (sign === "*") {
    display.value = Number(firstInput) * Number(display.value);
  }
  if (sign === "/") {
    display.value = Number(firstInput) / Number(display.value);
  }
});

inputOne.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  display.value += "1";
});

inputTwo.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  display.value += "2";
});

inputThree.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  display.value += "3";
});

inputFour.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  display.value += "4";
});
inputFive.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  display.value += "5";
});

inputSix.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  display.value += "6";
});

inputSeven.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  display.value += "7";
});

inputEight.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  display.value += "8";
});

inputNine.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  display.value += "9";
});

inputZero.addEventListener("click", () => {
  const display = document.querySelectorAll(".input-display")[0];
  display.value += "0";
});
