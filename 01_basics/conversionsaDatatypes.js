// Basic comparisons (same types are straightforward)
/*
console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true
*/


// String compared with number (JavaScript converts string to number) (we dont get expected result in desired datatypes [thats why Typescript was introduced it is basically js with more strict rules])
console.log("2" > 1);   // true
console.log("02" > 1);  // true

// === [strict check]
console.log("2" === 2); //false because it does strict check and also checks for datatypes.


//                     -------Comaprisons with null dataType------
console.log(null == 0); //false
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true
/*
The reason is that an equality check == and comparisons <, >, <=, >= work differently.
Comparisons convert null to a Number, treating it as 0.That's why null >= 0 is true and null > 0 is false

// But in case of undefined it always gives false.

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false

*/






