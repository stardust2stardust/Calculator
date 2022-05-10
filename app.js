const numBtn = document.querySelectorAll('.num-btn');
const display = document.querySelector('#display');
const operation = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equals');
const clear = document.querySelector('#clear')
const decimal = document.querySelector('#decimal');
const backBtn = document.querySelector('#backspace');
const defaultDisplay = "Let's Calculate!";


let operator = ''
let displayValue
let num1
let num2
let numbers = []
let result
let tempResult
let isNewNum = true
let btnValue = ''
const zeroDiv = "Noooooooooo!!!!!"



function testPrint() {
    console.log(`num1: ${num1}`);
    console.log(`num2: ${num2}`);
    console.log(`operator: ${operator}`);
    console.log(`numbers: ${numbers}`);
    console.log('--------------');
}

function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    if (num2 === 0) {
        return zeroDiv
    }
    else {
        if (num1 % num2 === 0) {
            return num1 / num2
        }
        else if ((num1 / num2).toString().length > 5) {
            const quot = (num1 / num2).toFixed(6)
            return parseFloat(quot);
        }
        else {
            return num1 / num2
        }
    }
}
function operate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

// displays number clicked
function displayNum(numButton) {
    if (display.innerText === defaultDisplay) {
        display.innerText = numButton;
    }
    if (isNewNum) {
        display.innerText = numButton;
        isNewNum = false;
    } else if (display.innerText.includes(".") && numButton === ".") {
        display.innerText = display.innerText;
    }
    else {
        display.innerText += numButton;
    }
}
// updates num1, num2 and operator when operator button is clicked
// will call showResult() if correct condition is met
function setOperator() {
    isNewNum = true
    if (numbers.length === 0) {
        num1 = parseFloat(display.innerText);
        numbers.push(num1)
    } else if (numbers.length === 1) {
        num2 = parseFloat(display.innerText);
        numbers.push(num2)
    } else if (numbers.length === 2) {
        showResult();
    }

    if (numbers.length === 2) {
        showResult();
    }
    operator = clickedOpButton;
}


function showResult() {
    result = operate(num1, num2, operator);
    if (result === zeroDiv) {
        display.innerText = result;
    }
    else if (result.toString().length > 5) {
        result = (result).toFixed(6)
    }
    display.innerText = result;
    num1 = result;
    numbers.pop(num2);
}

function equals() {
    if (numbers.length === 0) {
        display.innerText = "0.0"
    } else {
        num2 = parseFloat(display.innerText);
        numbers.push(num2);
        showResult();
        numbers.pop(num2)
    }
    isNewNum = true;
}

function clearDisplay() {
    display.innerText = defaultDisplay;
    isNewNum = true;
    numbers = [];
    num1 = '';
    num2 = '';
    operator = '';
}

function backspace() {
    const currentDisplay = display.innerText
    const newDisplay = currentDisplay.slice(0, currentDisplay.length - 1);
    display.innerText = newDisplay;
    return newDisplay;
}

function keyPress(e) {
    possNumKeys = "0123456789."
    possOpKeys = "+-*/"
    currentKey = e.key

    if (possNumKeys.includes(currentKey)) {
        numButton = currentKey;
        displayNum(numButton);
    } else if (possOpKeys.includes(currentKey)) {
        clickedOpButton = currentKey;
        setOperator();
    } else if (currentKey === "=" || currentKey === "Enter") {
        clickedEvalButton = currentKey;
        equals();
    } else if (currentKey === "Backspace") {
        backspace();
    }
}

function numClick(e) {
    numButton = e.target.value;
    console.log(e);
    displayNum(numButton);
}

function opClick(e) {
    clickedOpButton = e.target.value;
    setOperator();
}


function numStyleChange(e) {

    numBtn.forEach(el => {
        if (el.value === e.key) {
            el.classList.add('numKeyPress');
            document.addEventListener('keyup', () => {
                el.classList.remove('numKeyPress')
            });

        }
    });
    if (e.key === ".") {

        decimal.classList.add('numKeyPress');
        document.addEventListener('keyup', () => {
            decimal.classList.remove('numKeyPress')
        });
    }

    if (e.key === "=" || e.key === "Enter") {
        equalBtn.classList.add('numKeyPress');
        document.addEventListener('keyup', () => {
            equalBtn.classList.remove('numKeyPress')
        });
    }

    operation.forEach(el => {
        if (el.value === e.key) {
            el.classList.add('opKeyPress')
        }
        document.addEventListener('keyup', () => {
            el.classList.remove('opKeyPress')
        });
    });

    if (e.key === "Backspace") {
        backBtn.classList.add('numKeyPress');
        document.addEventListener('keyup', () => {
            backBtn.classList.remove('numKeyPress')
        });
    }
}


numBtn.forEach(el => el.addEventListener('click', numClick));
operation.forEach(el => el.addEventListener('click', opClick));
decimal.addEventListener('click', numClick);
equalBtn.addEventListener('click', equals);
clear.addEventListener('click', clearDisplay);
backBtn.addEventListener('click', backspace);
document.addEventListener('keydown', keyPress)
document.addEventListener('keydown', numStyleChange)

