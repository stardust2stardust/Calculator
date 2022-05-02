const numBtn = document.querySelectorAll('.num-btn');
const display = document.querySelector('#display');
const operation = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

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
    display.innerText = e.target.value;
    displayValue = parseInt(e.target.value);
    if (numbers.length === 0) {
        num1 = parseInt(e.target.value);
        numbers.push(num1);
    } else {
        num2 = parseInt(e.target.value);
        numbers.push(num2);
    }
}

function setOperator(e) {
    if (numbers.length === 2) {
        showResult();
    }
    console.log(e.target.value)
    operator = e.target.value;
    return operator
}

function currentResult() {
    console.log('in progress')
}

function showResult() {
    const result = operate(num1, num2, operator);
    display.innerText = result;
    displayValue = result;
    numbers = [result]
}

numBtn.forEach(el => el.addEventListener('click', displayNum))
operation.forEach(el => el.addEventListener('click', setOperator))
// equals.addEventListener('click', showResult)

// if length of numbers is 0:
    // store num1
    // store operator
    // store num2
// if length of numbers is 1:

// if lenght of numbers is 2: