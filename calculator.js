let numberArray = [];
let operator_val;
let funcArray = [];
let numString;

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

const numbers = document.querySelectorAll('.number');
let numArray = Array.from(numbers);
numArray.forEach(button => {
    button.addEventListener('click', () => {
        let display = document.querySelector('.text');
        numberArray.push(button.id);
        display.textContent = numberArray.join('');
        numString = numberArray.join('');
        });

})

const operators = document.querySelectorAll('.operator');
let opArray = Array.from(operators);
opArray.forEach(button => {
   button.addEventListener('click', () => {
       let display = document.querySelector('.text');
       operator_val = button.id;
       display.textContent = operator_val;
       funcArray.push(numString);
       funcArray.push(operator_val);
       numberArray = [];
   });
})