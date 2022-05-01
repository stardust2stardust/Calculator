const numBtn = document.querySelectorAll('.num-btn')
const display = document.querySelector('#display');


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


function displayNum() {
    testPrint();
    console.log(numBtn.innerText)
    console.log(display.innerText)
    display.innerText = numBtn.innerText;
}


numBtn.forEach(el => el.addEventListener('click', displayNum))