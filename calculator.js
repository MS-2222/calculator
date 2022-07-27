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

function operate(a, operator, b) {
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



const numbers = document.querySelectorAll('.number');
let numArray = Array.from(numbers);
numArray.forEach(button => {
    button.addEventListener('click', () => {
        let display = document.querySelector('.text');
        numberArray.push(button.id);
        display.textContent = numberArray.join('');
        numString = Number(numberArray.join(''));
        });

})

const operators = document.querySelectorAll('.operator');
let opArray = Array.from(operators);
opArray.forEach(button => {
   button.addEventListener('click', () => {
       if(funcArray.length == 3) {
            let product = operate(funcArray[0], funcArray[1], funcArray[2]);
            let display = document.querySelector('.text');
            display.textContent = product;
       }
       let display = document.querySelector('.text');
       operator_val = button.id;
       display.textContent = operator_val;
       funcArray.push(numString);
       funcArray.push(operator_val);
       numberArray = [];
   });
})