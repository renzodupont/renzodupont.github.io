///////////////
// This is a test file for calculator.js which tests the output of each operation
//
// NOTE:
// I used the operations as expected results instead of fixed values 
// as a way to visualize more clear the expected result in each case. 
// Of course this would not be the best on more complex functions.
//
//////////////

import { add, substract, divide, multiply } from './calculator';

describe('Calculator Test', () => {

    // Test 1: add function
    it('Test add function', () => {
        // Correct values assert
        expect( add(1, 2, 3) ).toBe( 1 + 2 + 3 );
        expect( add(5, 5, 5, 5) ).toBe( 5 + 5 + 5 + 5 );
        expect( add(1, 1) ).toBe( 1 + 1 );

        // Incorrect values assert
        expect( add(2, 2, 3) ).not.toBe( 2 * 2 * 3 );
        expect( add(2, 2, 3) ).not.toBe( 2 - 2 - 3 );
        expect( add(2, 2, 3) ).not.toBe( 2 / 2 / 3 );
    });

    // Test 2: multiply function
    it('Test multiply function', () => {
        // Correct values assert
        expect( multiply(1, 2, 3) ).toBe( 1 * 2 * 3 );
        expect( multiply(5, 5, 5, 5) ).toBe( 5 * 5 * 5 * 5 );
        expect( multiply(1, 1) ).toBe( 1 );

        // Incorrect values assert
        expect( multiply(2, 2, 3) ).not.toBe( 2 + 2 + 3 );
        expect( multiply(2, 2, 3) ).not.toBe( 2 - 2 - 3 );
        expect( multiply(2, 2, 3) ).not.toBe( 2 / 2 / 3 );
    });

    // Test 3: substract function
    it('Test substract function', () => {
        // Correct values assert
        expect( substract(1, 2, 3) ).toBe( 1 - 2 - 3 );
        expect( substract(5, 5, 5, 5) ).toBe( 5 - 5 - 5 - 5 );
        expect( substract(1, 1) ).toBe( 0 );

        // Incorrect values assert
        expect( substract(2, 2, 3) ).not.toBe( 2 + 2 + 3 );
        expect( substract(2, 2, 3) ).not.toBe( 2 * 2 * 3 );
        expect( substract(2, 2, 3) ).not.toBe( 2 / 2 / 3 );
    });

    // Test 4: divide function
    it('Test divide function', () => {
        // Correct values assert
        expect( divide(1, 2, 3) ).toBe( 1 / 2 / 3 );
        expect( divide(5, 5, 5, 5) ).toBe( 5 / 5 / 5 / 5 );
        expect( divide(1, 1) ).toBe( 1 );

        // Incorrect values assert
        expect( divide(2, 2, 3) ).not.toBe( 2 + 2 + 3 );
        expect( divide(2, 2, 3) ).not.toBe( 2 * 2 * 3 );
        expect( divide(2, 2, 3) ).not.toBe( 2 - 2 - 3 );
    });

});