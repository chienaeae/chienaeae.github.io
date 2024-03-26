const displayScreen = document.getElementById("display-content");

const buttonZero = document.getElementById("btn-zero");
const buttonOne = document.getElementById("btn-one");
const buttonTwo = document.getElementById("btn-two");
const buttonThree = document.getElementById("btn-three");
const buttonFour = document.getElementById("btn-four");
const buttonFive = document.getElementById("btn-five");
const buttonSix = document.getElementById("btn-six");
const buttonSeven = document.getElementById("btn-seven");
const buttonEight = document.getElementById("btn-eight");
const buttonNine = document.getElementById("btn-nine");
const buttonDot = document.getElementById("btn-dot");

const buttonPlus = document.getElementById("btn-plus");
const buttonMinus = document.getElementById("btn-minus");
const buttonMultiplication = document.getElementById("btn-multiplication");
const buttonDivide = document.getElementById("btn-divide");
const buttonClear = document.getElementById("btn-clear");
const buttonEqual = document.getElementById("btn-equal");
const buttonBackspace = document.getElementById("btn-backspace");

// calculator state
let contentText = "";

buttonZero.addEventListener("click", () => {
  appendDisplayScreen("0");
});

buttonOne.addEventListener("click", () => {
  appendDisplayScreen("1");
});

buttonTwo.addEventListener("click", () => {
  appendDisplayScreen("2");
});

buttonThree.addEventListener("click", () => {
  appendDisplayScreen("3");
});

buttonFour.addEventListener("click", () => {
  appendDisplayScreen("4");
});

buttonFive.addEventListener("click", () => {
  appendDisplayScreen("5");
});

buttonSix.addEventListener("click", () => {
  appendDisplayScreen("6");
});

buttonSeven.addEventListener("click", () => {
  appendDisplayScreen("7");
});

buttonEight.addEventListener("click", () => {
  appendDisplayScreen("8");
});

buttonNine.addEventListener("click", () => {
  appendDisplayScreen("9");
});

buttonDot.addEventListener("click", () => {
  appendDisplayScreen(".");
});

buttonPlus.addEventListener("click", () => {
  operate("+");
});

buttonMinus.addEventListener("click", () => {
  if (isEmptyDisplayScreen()) {
    appendDisplayScreen("-");
  } else {
    operate("-");
  }
});

buttonMultiplication.addEventListener("click", () => {
  operate("*");
});

buttonDivide.addEventListener("click", () => {
  operate("/");
});

buttonClear.addEventListener("click", () => {
  clearDisplayScreen();
  contentText = "";
});

buttonEqual.addEventListener("click", () => {
  calculate();
});

buttonBackspace.addEventListener("click", () => {
  displayScreen.textContent = displayScreen.textContent.slice(0, -1);
});

function isEmptyDisplayScreen() {
  return displayScreen.textContent.length === 0;
}

function appendDisplayScreen(text) {
  displayScreen.textContent += text;
}

function clearDisplayScreen() {
  displayScreen.textContent = "";
}

function operate(operator) {
  if (!isEmptyDisplayScreen()) {
    contentText += displayScreen.textContent + operator;
    clearDisplayScreen();
  }
}

function calculate() {
  contentText += displayScreen.textContent;
  clearDisplayScreen();

  let stack = [];
  let temp = "";
  for (let i = 0; i < contentText.length; i++) {
    const char = contentText.charAt(i);
    if ((char >= "0" && char <= "9") || char === ".") {
      temp += char;
    } else {
      if (char === "-" && temp.length === 0) {
        temp += char;
      } else {
        stack.push(temp);
        stack.push(char);
        temp = "";
      }
    }
  }
  if (temp.length !== 0) {
    stack.push(temp);
  }

  stack.forEach((val) => {
    // console.log(val);
  });

  let result = 0;
  for (let i = 0; i < stack.length; i++) {
    const indexElement = stack[i];
    if (indexElement === "+") {
      if (i++ < stack.length) {
        result += Number(stack[i]);
      }
    } else if (indexElement === "-") {
      if (i++ < stack.length) {
        result -= Number(stack[i]);
      }
    } else if (indexElement === "*") {
      if (i++ < stack.length) {
        result *= Number(stack[i]);
      }
    } else if (indexElement === "/") {
      if (i++ < stack.length) {
        result /= Number(stack[i]);
      }
    } else if (result === 0) {
      result = Number(indexElement);
    }
  }

  appendDisplayScreen(result);
  contentText = "";
}
