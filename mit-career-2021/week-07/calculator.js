///////////////
// This file contains basic functions for a calculator
// Example usage: add(1, 2, 3); // return 6
//////////////

const operation = (operator, numbers) => {
    let result = 0;
    numbers.forEach( (a, index) => {
        if(index === 0)
            result = a;
        else
            result = ( operator === '+' ? result + a : ( operator === '-' ? result - a : 
                     ( operator === '*' ? result * a : ( operator === '/' ? result / a : result )) ) );

    });
    return result;
}

export const add = (...args) => { return operation('+', args) }
export const substract = (...args) => { return operation('-', args) }
export const multiply = (...args) => { return operation('*', args) }
export const divide = (...args) => { return operation('/', args) }