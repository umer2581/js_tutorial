// intro to array 
// reference type
// how to create array
//array=> array is a collection of homogineous elements or well ordered elements

let fruits=["apple","mango","grapes","papaya"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]); //undefined
// check data type
console.log(typeof fruits);
// object
let obj={};
console.log(typeof obj);
// both types give data type of OBJECT 

// to find purely date type we use array.isarray method
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(obj));  // false