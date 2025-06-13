// math functions below

function add(a,b) {

    console.log(`Adding ${a}+${b}:`);
    
    return +a + +b;

};

// console.log(add(7,7));

function substract(a,b) {

    console.log(`Substracting ${a}-${b}:`);
    
    return +a - +b;

};

// console.log(substract(13,1));

function multiply(a,b) {

    console.log(`Multiplying ${a}*${b}:`);
    
    return +a * +b;

};

// console.log(multiply(5,3));

function divide(a,b) {

    console.log(`Dividing ${a}/${b}:`);

    if (b === 0) {
        alert('?????')
        return 'stop it.'
    } else {
        return +a / +b;
    }
    

};

// console.log(divide(400,4));

// math functions above

// variables below

variables = {num1: 0, num2: 0, operator: '', result: 0, lastOperator: ''};

    variables.num1 = 0;
    variables.num2 = 0;
    variables.operator = '';
    variables.result = 0;
    variables.lastOperator = '';


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


clickedTrue = 'cake';

numbers.forEach((number) => {

    number.addEventListener('click', () => {

        if (display.textContent == variables.operator || display.textContent == variables.result) {
            display.textContent = '';
        };
    
        display.textContent += number.textContent;

        switch (clickedTrue) {
            case 'cake':
                // alert('case cake')
                variables.num1 = +display.textContent;
                break;
            case 'biscuit':
                // alert('case biscuit')
                variables.num2 = +display.textContent;
                variables.lastOperator = variables.operator;
                break;
        };

    });
  
});

operators.forEach((operator) => {

    operator.addEventListener('click', () => {

    clickedTrue = 'biscuit'

    variables.operator = operator.textContent;

    display.textContent = variables.operator;

    if (variables.num1 != 0 && variables.num2 != 0) {
 
        display.textContent = operate(variables.num1,variables.num2,variables.lastOperator);

        variables.result = +display.textContent;
        variables.num1 = +variables.result;

    };
    
    });
  
});

equal.addEventListener('click', () => {

    display.textContent = operate(variables.num1,variables.num2,variables.operator);

    variables.result = display.textContent;

    clickedTrue = 'cake';

});

clear.addEventListener('click', () => {

    display.textContent = '';

    variables.num1 = 0;
    variables.num2 = 0;
    variables.operator = '';
    variables.result = 0;
    variables.lastOperator = '';
    clickedTrue = 'cake';

});

delBtn.addEventListener('click', () => {

    display.textContent = display.textContent.slice(0,-1);

});

decimal.addEventListener('click', () => {

    if (!(display.textContent.includes('.'))) {
        display.textContent += decimal.textContent;
    }

});




// functions above

// scoreboard below

scoreboard = document.querySelector('.scoreboard');
num1Counter = document.querySelector('#num1Counter');
num2Counter = document.querySelector('#num2Counter');
operatorCounter = document.querySelector('#operatorCounter');
resultCounter = document.querySelector('#resultCounter');
lastOperatorCounter = document.querySelector('#lastOperatorCounter');

buttons = document.querySelectorAll('button');

    buttons.forEach(button => {

        button.addEventListener('click', () => {

            num1Counter.textContent = `num1 = ${variables.num1}`;
            
            num2Counter.textContent = `num2 = ${variables.num2}`;

            operatorCounter.textContent = `operator = ${variables.operator}`;

            resultCounter.textContent =`result = ${variables.result}`;

            lastOperatorCounter.textContent = `lastOperator = ${variables.lastOperator}`;

        });
        
    });

// scoreboard above