/*
 * Convert Number to Words
 *
 * See README.md for usage instructions.
 * https://github.com/olliebennett/tools4text
 *
 */

var tools4text = tools4text || {};
tools4text.num2words = function (language_code, number) {

    "use strict";

    // Validate language code
    if (tools4text['num2words_' + language_code] === undefined) {
        return "Error - language '" + language_code + "' is not supported.";
    }

    // Validate input number is numeric
    if (isNaN(number)) {
        return "Error - supplied number '" + number + "' is not valid.";
    }

    // Convert to number type (from String)
    number = +number;

    // Check input is integer (no decimals)
    if (Math.round(number) !== number) {
        return "Error - a whole number (integer) must be supplied.";
    }

    // Call language-specific function
    return tools4text['num2words_' + language_code](number);

};