/*
 * Convert Time to Words
 *
 * See README.md for usage instructions.
 * https://github.com/olliebennett/tools4text
 *
 */

var tools4text = tools4text || {};
tools4text.time2words = function (language_code, time) {

    "use strict";

    // Validate language code
    if (tools4text['time2words_' + language_code] === undefined) {
        return "Error: Language '" + language_code + "' is not supported.";
    }

    // Check whether a "Date" object is provided (and convert to String)
    if (Object.prototype.toString.call(time) === '[object Date]') {
        time = ((time.getHours() < 10 ? '0' : '') + time.getHours()) +
            ":" +
            ((time.getMinutes() < 10 ? '0' : '') + time.getMinutes());
    }

    // Check for bad param type
    if (typeof time !== 'string') {
        return "Error: Invalid 'time' parameter type (" + typeof time + ").";
    }

    // Validate input time format
    // TODO - regex to check HH:MM format instead?
    // Input hour + minute must lie in valid range.
    if (time.split && time.split(":").length !== 2) {
        return "Error: Supplied time '" + time + "' is not in valid (HH:MM) format.";
    }

    // Call language-specific function
    return tools4text['time2words_' + language_code](time);

};