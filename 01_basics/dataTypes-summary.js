/* 

# Primitive
7 types - String, Number, Boolean, null, undefined, Symbol, BigInt

# Reference (Non Primitive) 
Arrays, Objects, functions

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// Stack (Primitive), Heap (Non-Primitive) 

//Stack memory mai ek ek karke references bante hai aur heap memory mai instances.

// let name = "rishabh"

// let newName = name

// newName = "RishabhSharma"
// console.log(newName);

//Toh primitive data types ki copy banati hai aur Non primitive dataTypes ka reference banta hai

let userOne = {
    email : "user@google.com",
    upi : "user@abc"
}

let userTwo = userOne;

userTwo.email = "rishabh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//Non Primitive dataTypes mai reference pass hota hai ek object/instance ka isiliye agar ek mai change karenge toh doosre mai bhi hoga kyuki heap mai userOne aur userTwo ek hi object ko point kar rahe hai.