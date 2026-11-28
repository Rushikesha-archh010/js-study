//JavaScript is not a statically typed language—it is dynamically typed (and weakly typed).
//In JavaScript, type checking happens at runtime rather than compile time, and variables do not have fixed types attached to them. You can assign a number to a variable and later reassign a string or object to that exact same variable without errors:
/*

let score = 100;     // Number
score = "one hundred"; // Now a String
score = true;        // Now a Boolean
*/

//Note :-
/*
// Dynamically typed (JavaScript, Python):
//  Variable types are determined by the value currently held at runtime, and variables can change types freely.

// Statically typed (C, C++, Java, TypeScript):
//  Variable types are declared or inferred ahead of time and checked before/during compilation, restricting what values a variable can hold.
*/

// Types of DataTypes :-

//  1. Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined as value not defined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false
console.log(id == anotherId); //false

//Even when you pass the exact same description ('123') to Symbol(), every call creates a brand-new, unique symbol in memory.
//Why Both Are false
/*
1. id === anotherId (false): Strict equality checks type and identity. Each Symbol() call produces a distinct symbol identity, so id and anotherId are not the same symbol.

2. id == anotherId (false): Loose equality does not coerce distinct Symbol values into being equal to each other either. Two different symbols are only equal if they actually reference the same symbol (for example, const sameId = id; console.log(id == sameId); // true
*/

// const bigNumber = 3456543576654356754n //BigInt



// 2.Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Arrays

let myObj = {    //Objects
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ //Functions
    console.log("Hello world");
}

//For best reference and understanding you can  directly read from ecmascript documentation
console.log(typeof anotherId); //defines datatype of variabe/data
console.log(typeof outsideTemp); //object

// https://262.ecma-international.org/5.1/#sec-11.4.3