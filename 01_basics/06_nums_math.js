// const score = 400
// console.log(score);

// const bal = new Number(100)
// console.log(bal);

// console.log(bal.toString().length);
// console.log(bal.toFixed(2));
//toFixed method returns a number upto 2 decimal

// const otherNum = 26.8758
// console.log(otherNum.toPrecision(3));

// const hundereds = 10000
// console.log(hundereds.toLocaleString('en-IN'));
//inserts comma's to increase readability 

// ################# Maths ###################

//Math is a class in JS and has many methods/helper functions in it.

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log(Math.round(3.7));
// console.log(Math.ceil(3.4));
// console.log(Math.floor(3.4));
// console.log(Math.max(4,3,5,6,7));
// console.log(Math.min(4,3,5,6,7));

console.log(Math.random()); // gives a random value b/w 0 and 1.

console.log(Math.floor((Math.random() * 10))); //range 0 - 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // range 10-20
