// premitve data type v/s reference data type

// premitve data type
let num1=29;
let num2=num1;
console.log(num1);
console.log(num2);
num1++;
console.log(num1);
console.log(num2);
// in primivte data type the variables stored in stack portion and also memory addresses will be different 

// reference data type

let arr1=["umer","salam" ,"muzammil"];
let arr2=arr1;
console.log(arr1);
console.log(arr2);
arr1.push("hussain");
console.log(arr1); 
console.log(arr2);
// in reference data type the variables stored in heap portion and its addresses stored in stack portion and also its stored same addresses our array is called reference data type
