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
    
    return a / b;

};

// console.log(divide(400,4));

// math functions above

// variables below

num1 = '';

num2 = '';

operator = '';

//variables above

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


// functions above