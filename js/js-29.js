// TO CLONE OUR ARRAY
// We have three methods to clone our array

// 1. WITH SLICE METHOD

const arr1=["umer","naaz","javed","naaz"];
const arr2=arr1.slice(0);
console.log(arr1);
console.log(arr2);
arr1.push("khan");
console.log(arr1); // it will never change our cloned array

// 2. WITH CONCAT

const val1=[1,2,3,4];
const val2=[] .concat(val1);
console.log(val1);
console.log(val2);

val1.shift();
console.log(val1);
console.log(val2);

// 3. WITH SPREAD OPERATOR

let value1=[1,2,3,4,2];
let value2=[...value1];
console.log(value1);
console.log(value2);
value1.unshift(0,3,3);
console.log(value1);

// TO ADD EXTRA ELEMENT WHILE CLONING THE ARRAY 
//1.
let narr1=[1,2,3,4,5];
let narr2=[] .concat(narr1,[4,5,6,7]);
console.log(narr1);
console.log(narr2);

//2.
let farr1=[1,2,3,4,5];
let farr2=farr1.slice(0).concat([12,13,45,645,]);
console.log(farr1);
console.log(farr2);


//3.
let sarr1=[1,2,3,4,5];
let sarr2=[...sarr1,42,23,23,42,23232];
console.log(sarr1);
console.log(sarr2);

// IF WE WANT A NEW ARRAY ADD WITH ARRAY1 ARRAY2 EX=>

let umer1=["umer","naaz"];
let umer2=["javed","naaz"];
let combine=[...umer1,...umer2];
console.log(combine);


