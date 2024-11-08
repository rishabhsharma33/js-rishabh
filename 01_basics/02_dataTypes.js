"use strict"; // treat all JS code as newer version.

// alert(3 + 3) we are using nodejs not browser thus this will not work.

console.log(3 
    + 
    3) 
// this should be avoided though it is correct because code readability should be prioritized
console.log("Rishabh")

let name = "Rishabh"
let age = 21
let isLoggedIn = true
let state;

/*
number => 2^53 ki range mai
bigInt => more than the above range
string => ""
boolean => true/false
null => standalone value
undefined => variable is declared but value is not assigned
symbol => unique
*/

//object

console.log(typeof null) // object
console.log(typeof undefined) // undefined