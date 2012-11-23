/*
 * Convert Number to Words
 *
 * See README.md for usage instructions.
 * https://github.com/olliebennett/tools4text
 *
 * Language: Roman Numerals
 *
 * Language Notes:
 * - See http://en.wikipedia.org/wiki/Roman_numerals
 * - zero is not defined.
 *
 */

var tools4text = tools4text || {};
tools4text.num2words_roman = function (number) {

    "use strict";

    var lang ={},   // language definitions.
        digits,     // array representation of number.
        len,        // length of 'digits'.
        words = "", // string of words to build before output.
        bignum,     // number of thousands, millions or billions.
        remainder,  // remainder after removing thousands, millions or billions.
        cnt;        // iterator for looping.


    // Symbol : Value
    // I      : 1
    // V      : 5
    // X      : 10
    // L      : 50
    // C      : 100
    // D      : 500
    // M      : 1,000

    // Check for valid range
    if (number < 1 || number > 3999) {
        return "Error - Number must be between 1 and 3999.";
    }

    // Convert input to an array of integers
    digits = (number.toString()).split('');

    len = digits.length;
    
    lang.units = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
    lang.tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    lang.hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    lang.thousands = ["","M","MM","MMM"]; // Cannot have MMMM ...

    // Pad array with zeros
    while (len < 4) {
        digits = ["0"].concat(digits);
        len = digits.length;
    }

    return lang.thousands[digits[0]] + lang.hundreds[digits[1]] + lang.tens[digits[2]] + lang.units[digits[3]];

};
