// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);

// console.log("2" > 1);
// console.log("02" > 1);
// gives output as true because js automatically converts string to number here

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/*the reason is that > or < convert null to number (null = 0) thus 
null(0) >= 0 true and null(0) > 0 is false 
but == does not convert null to number.
*/
