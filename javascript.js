// math functions below

function add(a,b) {

    console.log(`Adding ${a}+${b}:`);
    
    return a + b;

};

// console.log(add(7,7));

function substract(a,b) {

    console.log(`Substracting ${a}-${b}:`);
    
    return a - b;

};

// console.log(substract(13,1));

function multiply(a,b) {

    console.log(`Multiplying ${a}*${b}:`);
    
    return a * b;

};

// console.log(multiply(5,3));

function divide(a,b) {

    console.log(`Dividing ${a}/${b}:`);

    if (b === 0) {
        alert('?????')
        return 'stop it.'
    } else {
        return a / b;
    }
    

};

// console.log(divide(400,4));

// math functions above

// variables below

variables = {num1: 0, num2: 0, operator: ''};


// variables above

// functions below 

function operate(num1,num2,operator) {

console.log('['+num1+','+num2+','+operator+']');

switch (operator) {
    case '+':
        return add(num1,num2);
    case '-':
        return substract(num1,num2);
    case '*':
        return multiply(num1,num2);
    case '/':
        return divide(num1,num2);
}

}

console.log(operate(400,500,'*'));

display = document.querySelector('.display');
numbers = document.querySelectorAll('.number');
operators = document.querySelectorAll('.operator');
equal = document.querySelector('#equal');
clear = document.querySelector('#clear');
delBtn = document.querySelector('#delBtn');
decimal = document.querySelector('#decimal');


clickedTrue = false;

numbers.forEach((number) => {

    number.addEventListener('click', () => {

        if (display.textContent === variables.operator) {
            display.textContent = '';
        };
    
        display.textContent += number.textContent;

        switch (clickedTrue) {
            case false:
                variables.num1 = +display.textContent;
            case true:
                variables.num2 = +display.textContent;
        };

        if (!(display.textContent.includes('.'))) {

            decimal.textContent = '.';

        } else if (display.textContent.includes('.')) {
        
            decimal.disabled = true;

        };

    });
  
});

operators.forEach((operator) => {

    operator.addEventListener('click', () => {

    clickedTrue = true

    variables.operator = operator.textContent;

    display.textContent = variables.operator;
    
    });
  
});

equal.addEventListener('click', () => {

    display.textContent = operate(variables.num1,variables.num2,variables.operator);

    variables.num1 = 0;
    variables.num2= 0;
    variables.operator = '';
    clickedTrue = false;

});

clear.addEventListener('click', () => {

    display.textContent = '';

    variables.num1 = 0;
    variables.num2 = 0;
    variables.operator = '';
    clickedTrue = false;

});

delBtn.addEventListener('click', () => {

    display.textContent = display.textContent.slice(0,-1);

});










// functions above