/*
 * Convert Number to Words
 *
 * See README.md for usage instructions.
 * https://github.com/olliebennett/tools4text
 *
 * Language: English (UK)
 *
 * Language Notes:
 * - UK English makes more liberal use of "and" than the US alternative.
 * - The "and" is only required if what follows is 0 < x < 100.
 *
 */

var tools4text = tools4text || {};
tools4text.num2words_en = function (number) {

    "use strict";

    var lang,       // language definitions.
        digits,     // array representation of number.
        len,        // length of 'digits'.
        words = "", // string of words to build before output.
        bignum,     // number of thousands, millions or billions.
        remainder,  // remainder after removing thousands, millions or billions.
        cnt;        // iterator for looping.

    // Language definitions
    lang = {
        "lang_name": "English (UK)",
        "units": ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        "teens": ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen",  "sixteen", "seventeen", "eighteen", "nineteen"],
        "tens": ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
        "powers": {
            '2': "hundred",
            '3': "thousand",
            '6': "million",
            '9': "billion",
            '12': "trillion",
            '15': "quadrillion"
        },
        "and": "and"
    };

    // No need to sanitize input number
    // - this is handled by tools4text-num2words.js
    // - this program expects an integer, passed as a string or number.

    // Convert input to an array of integers
    digits = (number.toString()).split('');

    len = digits.length;

    // Handle all pre-defined powers
    for (cnt = 15; cnt > 0; cnt -= 1) {
        if (lang.powers[cnt] !== undefined) {

            // Handle all generic big numbers 
            if (len > cnt) {

                // Split at the "million/billion" etc. (Nth digit)
                remainder = parseInt(digits.splice(-cnt).join(''), 10); // cut off (and return) final N digits
                bignum = parseInt(digits.join(''), 10);

                words = tools4text.num2words_en(bignum) + " " + lang.powers[cnt];
                // Include remainder, if non-zero
                if (remainder > 0) {
                    words += " ";
                    if (remainder < 100) { // "and"?
                        words += lang.and + " ";
                    }
                    words += tools4text.num2words_en(remainder);
                }
                return words;
            }
        }
    }

    // console.log(digits);

    // Pad digits array to accommodate the following layout:
    // digits[0] = tens
    // digits[1] = units
    if (len === 1) {
        digits = ["0"].concat(digits);
    }

    // Tens
    if (number > 9) {
        // Teens
        if ((number > 10) && (number < 20)) {
            words = lang.teens[digits[1]];
        } else {
            // Higher numbers
            words = lang.tens[digits[0]];
            if (number % 10) {
                words += " " + lang.units[digits[1]];
            }
        }
        return words;
    }

    // Units
    return lang.units[digits[1]];

};