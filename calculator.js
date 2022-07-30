let numberArray = [];
let operator_val;
let funcArray = [];
let numString;
let product = 0;

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
        if(b === 0){
            return 'Nice Try...';
        }
        else {
            return divide(a, b);
        }
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
        funcArray.push(numString);
        if(funcArray.length == 3) {
            product = operate(funcArray[0], funcArray[1], funcArray[2]);
            let display = document.querySelector('.text');
            funcArray = [];
            funcArray.push(product);
            operator_val = button.id;
            funcArray.push(operator_val);
            display.textContent = operator_val;
            numberArray = [];
        }
        
        else {
            let display = document.querySelector('.text');
            operator_val = button.id;
            display.textContent = operator_val;
            funcArray.push(operator_val);
            numberArray = [];
        }
        });
   });

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    funcArray.push(numString);
    if(funcArray.length == 3) {
        product = operate(funcArray[0], funcArray[1], funcArray[2]);
        let display = document.querySelector('.text');
        display.textContent = product.toFixed(12);
        funcArray = [];
        funcArray.push(product);
    };
});

const clear = document.querySelector('.clr');
clear.addEventListener('click', () => {
    numberArray = [];
    operator_val = 0;
    funcArray = [];
    numString = null;
    product = 0;
    let display = document.querySelector('.text');
    display.textContent = numberArray;
});