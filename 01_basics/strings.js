const name = "hitesh" //Way 01 of defining string
const repoCount = 50

// console.log(name + repoCount + " Value"); //Older way(method) of Concatenation of string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Modern way of Concatenation of string //More readable and relaible code
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount.toLowerCase()}`); //Different methods can also be applied here  

//Refernce for methods :-
// 1] toUpperCase and toLowerCase are methods (functions), not properties. Without (), JavaScript evaluates them as function references and prints their source code ([Function: toUpperCase]) instead of converting the text.
// 2] Calling toLowerCase() on a number: repoCount is a number (50), not a string. Calling .toLowerCase() directly on a number throws a TypeError: repoCount.toLowerCase is not a function.

const gameName = new String('hitesh-hc-com') //Way 02 of defining string

// console.log(gameName[0]); //accessing index 0 position character fromm string
// console.log(gameName.__proto__); 


// console.log(gameName.length); //accessing length of string
// console.log(gameName.toUpperCase()); //Converting charaters of string into uppercase
console.log(gameName.charAt(2)); // t             //accessing character at position/index at 2 from string
console.log(gameName.indexOf('t')); // 2          //accessing index of character (t) fromm string

//Substring method
const newString = gameName.substring(0, 4)
console.log(newString); //hite //index 4 or end index chaar of range not get printed

//Slice method
const anotherString = gameName.slice(-8, 4)
console.log(anotherString); //ite

const newStringOne = "   hitesh    "
console.log(newStringOne); // ___hitesh___
console.log(newStringOne.trim());//hitesh     //trims space around string from both start and end but if want to trim from start only then trim.start() and if from end then trim.end()

const url = "https://hitesh.com/hitesh%20choudhary"

// replace method
console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary     //replaces %20 with -
//include method
console.log(url.includes('sundar')) //false          //checks whether sundar is included in the url or string or not //returns boolean value 
//split method
console.log(gameName.split('-')); //[ 'hitesh','hc,'com' ] //here based upon splitter provided it splits string here we can also further assign limit for splitting by split('seperator','limit')
