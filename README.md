# Tools 4 Text

A collection of text manipulation and analysis tools, as seen on [Tools4Text.com](http://tools4text.com/)

## num2words()

Converts a number to words, in the specified language.

Accepts a positive integer, and returns the text equivalent in the specified language.

### Example Usage:

    num2words("en", 3015); // "three thousand and fifteen" (English)

    num2words("roman", 1999); // "MCMXCIX" (Roman Numerals)

See individual `tools4text-num2words-<language_code>.js` files for language-specific notes and configuration options.

### Implemented languages:

*   `en` English (UK)
*   `roman` Roman Numerals

### Planned languages:

*   `fr` French
*   `cn` Chinese

## time2words()

Converts a time to words, in the specified language.

Accepts a String representation of a time, in "HH:MM" format, and returns the corresponding time in words.

JavaScript `Date` objects are also accepted, and handled automatically.

### Example Usage:

    time2words("en", "23:45"); // "quarter to midnight" (English)

### Implemented languages:

* `en` English
