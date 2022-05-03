const numBtn = document.querySelectorAll('.num-btn');
const display = document.querySelector('#display');
const operation = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equals');
const clear = document.querySelector('#clear')
const decimal = document.querySelector('#decimal');
const defaultDisplay = "Let's Calculate!"

let operator = ''
let displayValue
let num1
let num2
let numbers = []
let result
let tempResult
let isNewNum = true


function testPrint() {
    console.log('number button clicked')
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
}

// displays number clicked
function displayNum(e) {
    // console.log(e.target.value);
    // console.log(e.target.innerText)
    if (display.innerText === defaultDisplay) {
        display.innerText = e.target.value;
    }
    if (isNewNum) {
        display.innerText = e.target.value;
        isNewNum = false;
    }
    else {

        display.innerText += e.target.value
    }

    //  else {
    //     if (numbers.length === 1) {
    //         if (e.target.value === ".") {
    //             display.innerText += e.target.value;
    //         }
    //         else {
    //             display.innerText = e.target.value;
    //         }
    //     } else {
    //         display.innerText += e.target.value;
    //     }
    // }
}
// updates num1, num2 and operator when operator button is clicked
// will call showResult() if correct condition is met
function setOperator(e) {
    console.log(operator);
    console.log(numbers)
    isNewNum = true
    if (numbers.length === 0) {
        operator = e.target.value;
        num1 = parseFloat(display.innerText);
        numbers.push(num1)
    } else if (numbers.length === 1) {
        num2 = parseFloat(display.innerText);
        showResult();
        operator = e.target.value;
    }
    console.log(`num1: ${num1}`)
    console.log(`num2: ${num2}`)
    console.log(`numbers: ${numbers}`)
    console.log(`operator: ${operator}`)
}

function currentResult() {
    console.log('in progress')
}

function showResult() {
    const result = operate(num1, num2, operator);
    if (result.toString().length > 5) {
        result = (result).toFixed(6)
    }
    display.innerText = result;
    displayValue = result;
    numbers = [result]
    num1 = result;
}

function equals() {
    if (numbers.length === 0) {
        display.innerText = "0.0"
    } else {
        num2 = parseInt(display.innerText)
        showResult();
    }
}

function clearDisplay() {
    display.innerText = defaultDisplay;
    isNewNum = true;
    numbers = [];
    num1 = 0;
    num2 = 0;
}


numBtn.forEach(el => el.addEventListener('click', displayNum))
operation.forEach(el => el.addEventListener('click', setOperator))
decimal.addEventListener('click', displayNum)
equalBtn.addEventListener('click', equals)
clear.addEventListener('click', clearDisplay)
