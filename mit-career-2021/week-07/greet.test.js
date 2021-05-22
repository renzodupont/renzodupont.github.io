///////////////
// This is a test file for greet.js
// Should test with default value, single name, several names, upper case names
///////////////

import { greet } from './greet';

describe('Greet Test', () => {

    // Test 1: not passing a name as parameter to check default value
    it('Test default value', () => {
        // Correct values assert
        expect( greet() ).toBe( 'Hello there!' );

        // Incorrect values assert
        expect( greet() ).not.toBe( 'Hello, there!' );
    });

    // Test 2: passing a single name in sentence and upper case
    it('Test single name', () => {
        // Correct values assert
        expect( greet('Renzo') ).toBe( 'Hello, Renzo' );
        expect( greet('RENZO') ).toBe( 'HELLO RENZO!' );

        // Incorrect values assert
        expect( greet('Renzo') ).not.toContain( '!' );
        expect( greet('RENZO') ).not.toContain( ',' );
    });

    // Test 3: passing several names in sentence and upper case
    it('Test several names', () => {
        // Correct values assert
        expect( greet('Renzo', 'Benjamin') ).toBe( 'Hello, Renzo, Benjamin' );
        expect( greet('RENZO', 'Benjamin') ).toBe( 'HELLO RENZO, BENJAMIN!' );
        expect( greet('RENZO', 'BENJAMIN') ).toBe( 'HELLO RENZO, BENJAMIN!' );

        // Incorrect values assert
        expect( greet('Renzo', 'Benjamin') ).not.toBe( 'Hello, Renzo, Benjamin!' );
        expect( greet('RENZO', 'Benjamin') ).not.toBe( 'HELLO RENZO, Benjamin!' );
        expect( greet('RENZO', 'BENJAMIN') ).not.toBe( 'Hello, RENZO, BENJAMIN!' );
    });

});