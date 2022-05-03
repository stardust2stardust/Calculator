const numBtn = document.querySelectorAll('.num-btn');
const display = document.querySelector('#display');
const operation = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equals');
const clear = document.querySelector('#clear')
const defaultDisplay = "Let's Calculate!"

let operator = ''
let displayValue
let num1
let num2
let numbers = []
let result


function testPrint() {
    console.log('number button clicked')
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Nooooooooo!!!!!!"
    }
    return num1 / num2;
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
}

// displays number clicked
function displayNum(e) {
    console.log(e.target.value);
    if (display.innerText === defaultDisplay) {
        display.innerText = e.target.value;
    } else {
        if (numbers.length === 1) {
            display.innerText = e.target.value;
        } else {
            display.innerText += e.target.value;
        }
    }
    // console.log(`num1: ${num1}`)
    // console.log(`num2: ${num2}`)
    // console.log(`numbers: ${numbers}`)
}

function setOperator(e) {

    // operator = e.target.value;
    // showResult()
    console.log(operator);
    console.log(numbers)
    if (numbers.length === 0) {
        operator = e.target.value;
        num1 = parseInt(display.innerText);
        numbers.push(num1)
    } else if (numbers.length === 1) {
        num2 = parseInt(display.innerText);
        showResult();
        operator = e.target.value;
    }
    console.log(`num1: ${num1}`)
    console.log(`num2: ${num2}`)
    console.log(`numbers: ${numbers}`)
    console.log(operator)
}

function currentResult() {
    console.log('in progress')
}

function showResult() {
    const result = operate(num1, num2, operator);
    display.innerText = result;
    displayValue = result;
    numbers = [result]
    num1 = result;
}

function equals() {
    num2 = parseInt(display.innerText)
    showResult();
}

function clearDisplay() {
    display.innerText = defaultDisplay;
}



numBtn.forEach(el => el.addEventListener('click', displayNum))
operation.forEach(el => el.addEventListener('click', setOperator))
equalBtn.addEventListener('click', equals)

clear.addEventListener('click', clearDisplay)
