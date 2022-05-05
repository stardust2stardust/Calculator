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


function testPrint() {
    console.log(`num1: ${num1}`);
    console.log(`num2: ${num2}`);
    console.log(`operator: ${operator}`);
    console.log(`numbers: ${numbers}`);
    console.log('--------------');
}

function add(num1, num2) {
    return (num1 + num2);
    testPrint();
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Nooooooooo!!!!!!"
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
    } else if (operator === "x") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
    testPrint();
}

// displays number clicked
function displayNum(e) {
    if (display.innerText === defaultDisplay) {
        display.innerText = e.target.value;
    }
    if (isNewNum) {
        display.innerText = e.target.value;
        isNewNum = false;
    } else if (display.innerText.includes(".") && e.target.value === ".") {
        display.innerText = display.innerText;
    }
    else {
        display.innerText += e.target.value;
    }
    testPrint();
}
// updates num1, num2 and operator when operator button is clicked
// will call showResult() if correct condition is met
function setOperator(e) {
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
    operator = e.target.value;
    testPrint();
}


function showResult() {
    let result = operate(num1, num2, operator);
    if (result.toString().length > 5) {
        result = (result).toFixed(6)
    }
    display.innerText = result;
    num1 = result;
    numbers.pop(num2)
    testPrint();
}

function equals() {
    console.log('equals start')
    testPrint();
    if (numbers.length === 0) {
        display.innerText = "0.0"
    } else {
        num2 = parseFloat(display.innerText);
        console.log(num2)
        numbers.push(num2);
        console.log('equals middle');
        testPrint();
        showResult();
        numbers.pop(num2)
    }
    isNewNum = true;
    console.log('equals end')
    testPrint();
}

function clearDisplay() {
    display.innerText = defaultDisplay;
    isNewNum = true;
    numbers = [];
    num1 = '';
    num2 = '';
    operator = '';
    testPrint()
}

function backspace() {
    const currentDisplay = display.innerText
    const newDisplay = currentDisplay.slice(0, currentDisplay.length - 1);
    display.innerText = newDisplay;
    return newDisplay;
}

numBtn.forEach(el => el.addEventListener('click', displayNum));
operation.forEach(el => el.addEventListener('click', setOperator));
decimal.addEventListener('click', displayNum);
equalBtn.addEventListener('click', equals);
clear.addEventListener('click', clearDisplay);
backBtn.addEventListener('click', backspace);