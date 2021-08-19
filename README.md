Specific Behaviors:

1. Take one number as an argument
2. Assign number values to the symbols (I, V, X).wit
3. Take inputted number value, and break it up into ones, fives, tens, fifties, etc. using length of number.
4. Assign those to corresponding roman numerals.
5. create a framework to place the roman numerals in the correct order to define value??????
6. Output final roman numeral string.


Describe toRomanNumerals():

Test: if given a empty string as an argument
Code: toRomanNumerals("   ");
Expected Output: 0

Test: if given something other than a number as an argument
Code: toRomanNumerals("Hi 27 people");
Expected Output: 0

Test: if given a number with length of one
Code: toRomanNumerals(3);
Expected Output: "III"