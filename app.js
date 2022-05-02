const numBtn = document.querySelectorAll('.num-btn');
const display = document.querySelector('#display');
const operation = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

let operator
let displayValue
let num1
let num2
let numbers = []

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
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

// displays number clicked
function displayNum(e) {
    testPrint();
    console.log(e.target.value);
    display.innerText = e.target.value;
    displayValue = parseInt(e.target.value);
    if (numbers.length === 0) {
        num1 = parseInt(e.target.value);
        numbers.push(num1);
    } else {
        num2 = parseInt(e.target.value);
    }

}

function setOperator(e) {
    console.log(e.target.value)
    operator = e.target.value;
    return operator
}

numBtn.forEach(el => el.addEventListener('click', displayNum))
operation.forEach(el => el.addEventListener('click', setOperator))
equals.addEventListener('click', operate);