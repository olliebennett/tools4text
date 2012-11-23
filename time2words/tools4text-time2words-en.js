/*
 * Convert Time to Words
 *
 * See README.md for usage instructions.
 * https://github.com/olliebennett/tools4text
 *
 * Language: English (UK)
 *
 * Language Notes:
 * - There are often various ways of reading times.
 * - This script uses the most verbose possible.
 * - "00:00" = Midnight, and "12:00" = Midday / Noon
 * - If minute is divisible by 5, omit the word "minutes"
 *   (this is purely an aesthetic preference)
 *
 * TODO:
 * - Implement memoization to save time when calling num2words.
 * 
 */

var tools4text = tools4text || {};
tools4text.time2words_en = function (time) {

    "use strict";

    // Configuration
    var lang = {},
        hour,
        hour_int,
        hour_word,
        hour_word_next,
        min,
        min_int,
        time_parts;

    lang.midnight = "midnight";
    lang.midday = "midday";

    // Assume "String" object is provided
    time_parts = time.split(":");
    hour = time_parts[0];
    hour_int = parseInt(hour, 10);
    min = time_parts[1];
    min_int = parseInt(min, 10);

    // Normalize for 24 hour clock
    hour_word = tools4text.num2words_en(hour_int % 12);
    hour_word_next = tools4text.num2words_en((hour_int + 1) % 12);

    // Handle special cases (midday + midnight)
    if (hour_int === 0) {
        hour_word = lang.midnight;
    } else if (hour_int === 11) {
        hour_word_next = lang.midday;
    } else if (hour_int === 12) {
        hour_word = lang.midday;
    } else if (hour_int === 23) {
        hour_word_next = lang.midnight;
    }

    // o'clock
    if (min_int === 0) {
        if (hour_int === 0 || hour_int === 12) {
            return hour_word;
        }
        return hour_word + " o'clock";
    }
    // X past ...
    if (min_int <= 30) {
        if (min_int === 15) {
            return "quarter past " + hour_word;
        }
        if (min_int === 30) {
            return "half past " + hour_word;
        }
        if (min_int % 5) {
            return tools4text.num2words_en(min_int) + " " + (min_int === 1 ? "minute" : "minutes") + " past " + hour_word;
        }
        return tools4text.num2words_en(min_int) + " past " + hour_word;
    }
    // X to ...
    if (min_int > 30) {
        if (min_int === 45) {
            return "quarter to " + hour_word_next;
        }
        if (min_int % 5) {
            return tools4text.num2words_en(60 - min_int) + " " + ((60 - min_int) === 1 ? "minute" : "minutes") + " to " + hour_word_next;
        }
        return tools4text.num2words_en(60 - min_int) + " " + ((60 - min_int) === 1 ? "minute" : "minutes") + " to " + hour_word_next;
    }
};
