const score = 400
// console.log(score); //400

const balance = new Number(100)
// console.log(balance); 

// console.log(balance.toString());  // returns number converted string 
// console.log(balance.toString().length);   //returns number converted string length
// console.log(balance.toFixed(2)); //100.00   // after number more decimal point precision for understanding
// console.log(balance.toFixed(1)); //100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  //123.4

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000      //according to indian standards
// console.log(hundreds.toLocaleString());  // 1,000,000           //it defaultly give output according to american standards


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); //object [Math]{}             //type is object ,has many prototypes(methods).
// console.log(Math.abs(-4)); //4                   //absolute value
// console.log(Math.round(4.6)); //5                //round up the value
// console.log(Math.round(4.4)); //4
// console.log(Math.ceil(4.2)); //5                //always selects top value similar to gif
// console.log(Math.floor(4.9)); //4               //always selects low value [even small point less than 5 then gives 4 only]
// console.log(Math.min(4, 3, 6, 8));//3           //return minimum value
// console.log(Math.max(4, 3, 6, 8));//8          //return maximum value

console.log(Math.random()); // always returns any random value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10  //defiing limits
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //using floor method
