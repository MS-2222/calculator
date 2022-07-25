let num1Array = [];

function add(a ,b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if(operator === '+') {
        return add(a, b);
    }
    else if(operator === '-') {
        return substract(a, b);
    }
    else if(operator === '*') {
        return multiply(a, b);
    }
    else if(operator === '/') {
        return divide(a, b);
    }
    else {
        return 'ERROR';
    }
}

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
let buttonArray = Array.from(buttons);
buttonArray.forEach(button => {
    button.addEventListener('click', () => {
        let digit = document.querySelector('.text');
        num1Array.push(button.id);
        digit.textContent = num1Array.join('');
        });

})