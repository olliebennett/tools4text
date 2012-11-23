/*
 * Convert Number to Words
 * Language: French
 *
 * Example output:
 * 21 = "vingt et un"
 * 101 = "cent un"
 * 
 */

var tools4text = tools4text || {};
tools4text.num2words_fr = function (number) {

    "use strict";

    // Language definitions
    var lang = {
        "lang_name": "French (Standard)",
        "units": ["zero", "un", "deux", "trois", "quart", "cinq", "six", "sept", "huit", "neuf"],
        "teens": ["", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"],
        "tens": ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt dix"],
        "hundred": "cent",
        "thousand": "mille",
        "million": "MILLION", // hundred thousand?
        "billion": "BILLION",
        "trillion": "TRILLION",
        "and": "et"
    };

    // STARTS HERE

    return "bonjour!";

};