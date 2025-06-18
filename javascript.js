// math functions below

function add(a,b) {

    console.log(`Adding ${a}+${b}:`);
    
    return +a + +b;

};

function substract(a,b) {

    console.log(`Substracting ${a}-${b}:`);
    
    return +a - +b;

};

function multiply(a,b) {

    console.log(`Multiplying ${a}*${b}:`);
    
    return +a * +b;

};

function divide(a,b) {

    console.log(`Dividing ${a}/${b}:`);

    if (b === 0) {
        alert('?????')
        return 'stop it.'
    } else {
        return +a / +b;
    }
    

};

// math functions above

// variables below

variables = {num1: 'start', num2: 'start', operator: '', result: '', lastOperator: ''};

    variables.num1 = 'start';
    variables.num2 = 'start';
    variables.operator = '';
    variables.result = '';
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
    case 'x':
        return multiply(num1,num2);
    case '÷':
        return divide(num1,num2);
}

}

body = document.querySelector('body')
display = document.querySelector('.display');
numbers = document.querySelectorAll('.number');
operators = document.querySelectorAll('.operator');
division = document.querySelector('#division');
multiplication = document.querySelector('#multiplication')
equal = document.querySelector('#equal');
clear = document.querySelector('#clear');
delBtn = document.querySelector('#delBtn');
decimal = document.querySelector('#decimal');


clickedTrue = false;
enterPressed = false;

numbers.forEach((number) => {

    number.addEventListener('click', () => {

        if (display.textContent == variables.operator || display.textContent == variables.result) {
            display.textContent = '';
        };
    
        display.textContent += number.textContent;

        switch (clickedTrue) {
            case false:
                variables.num1 = +display.textContent;
                break;
            case true:
                variables.num2 = +display.textContent;
                variables.lastOperator = variables.operator;
                break;
        };

    });
  
});

operators.forEach((operator) => {

    operator.addEventListener('click', () => {

    clickedTrue = true

    variables.operator = operator.textContent;

    display.textContent = variables.operator;

    if (variables.num1 != 'start' && variables.num2 != 'start' && !(variables.num2 === '')) {
 
        display.textContent = operate(variables.num1,variables.num2,variables.lastOperator);

        variables.result = +display.textContent;
        console.log(`Result = ${variables.result}`);

        variables.num1 = +variables.result;
        variables.num2 = '';

    };

    if (enterPressed == true) {
        display.textContent = variables.operator;
    }

    enterPressed = false;
    
    });
  
});

equal.addEventListener('click', () => {

    display.textContent = operate(variables.num1,variables.num2,variables.operator);

    variables.result = display.textContent;
    console.log(`Result = ${variables.result}`);

    clickedTrue = false;
    enterPressed = true;

});

clear.addEventListener('click', () => {

    display.textContent = '';

    variables.num1 = 'start';
    variables.num2 = 'start';
    variables.operator = '';
    variables.result = '';
    variables.lastOperator = '';
    clickedTrue = false;
    enterPressed = false;

});

delBtn.addEventListener('click', () => {

    display.textContent = display.textContent.slice(0,-1);

    if (clickedTrue == false && variables.num2 != 'start') {
        variables.num2 = '';
    };

    if (clickedTrue == false) {
        variables.num1 = +display.textContent;
    } else if (clickedTrue == true && variables.num2 != 'start') {
        variables.num2 = +display.textContent;
    };

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

            // num1Counter.textContent = `num1 = ${variables.num1}`;
            
            // num2Counter.textContent = `num2 = ${variables.num2}`;

            // operatorCounter.textContent = `operator = ${variables.operator}`;

            // resultCounter.textContent =`result = ${variables.result}`;

            // lastOperatorCounter.textContent = `lastOperator = ${variables.lastOperator}`;

            if (display.textContent.length > 13) {
                display.textContent = display.textContent.slice(0,13);
            };

        });
        
    });

// scoreboard above

// key support below

body.addEventListener("keydown", (event) => {

    if (event.key == 'Enter') {

    event.preventDefault()

    equal.click();
    
    } else if (event.key == 'Backspace') {

    delBtn.click();

    } else if (event.key == '/') {

    division.click();

    } else if (event.key == '*') {

    multiplication.click();

    };

    buttons.forEach(button => {

        if (event.key == button.textContent) {
            button.click();
        } ;
               
    });
  
});

// key support above