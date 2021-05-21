///////////////
// This is a test file for calculator.js which tests the output of each operation
//////////////

import { add, substract, divide, multiply } from './calculator';

describe('Calculator Test', () => {

    // Test 1: add function
    it('Test add function', () => {
        // Pass tests
        expect( add(1, 2, 3) ).toBe( 1 + 2 + 3 );
        expect( add(5, 5, 5, 5) ).toBe( 5 + 5 + 5 + 5 );
        expect( add(1, 1) ).toBe( 1 + 1 );

        //Fail tests
        expect( add(2, 2, 3) ).not.toBe( 2 * 2 * 3 );
        expect( add(2, 2, 3) ).not.toBe( 2 - 2 - 3 );
        expect( add(2, 2, 3) ).not.toBe( 2 / 2 / 3 );
    });

    // Test 2: multiply function
    it('Test multiply function', () => {
        // Pass tests
        expect( multiply(1, 2, 3) ).toBe( 1 * 2 * 3 );
        expect( multiply(5, 5, 5, 5) ).toBe( 5 * 5 * 5 * 5 );
        expect( multiply(1, 1) ).toBe( 1 );

        //Fail tests
        expect( multiply(2, 2, 3) ).not.toBe( 2 + 2 + 3 );
        expect( multiply(2, 2, 3) ).not.toBe( 2 - 2 - 3 );
        expect( multiply(2, 2, 3) ).not.toBe( 2 / 2 / 3 );
    });

    // Test 3: substract function
    it('Test substract function', () => {
        // Pass tests
        expect( substract(1, 2, 3) ).toBe( 1 - 2 - 3 );
        expect( substract(5, 5, 5, 5) ).toBe( 5 - 5 - 5 - 5 );
        expect( substract(1, 1) ).toBe( 0 );

        //Fail tests
        expect( substract(2, 2, 3) ).not.toBe( 2 + 2 + 3 );
        expect( substract(2, 2, 3) ).not.toBe( 2 * 2 * 3 );
        expect( substract(2, 2, 3) ).not.toBe( 2 / 2 / 3 );
    });

    // Test 4: divide function
    it('Test divide function', () => {
        // Pass tests
        expect( divide(1, 2, 3) ).toBe( 1 / 2 / 3 );
        expect( divide(5, 5, 5, 5) ).toBe( 5 / 5 / 5 / 5 );
        expect( divide(1, 1) ).toBe( 1 );

        //Fail tests
        expect( divide(2, 2, 3) ).not.toBe( 2 + 2 + 3 );
        expect( divide(2, 2, 3) ).not.toBe( 2 * 2 * 3 );
        expect( divide(2, 2, 3) ).not.toBe( 2 - 2 - 3 );
    });

});