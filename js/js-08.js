// typeof operator
// we have multiple types of data types (primitive data types)
// string --> "umer"
// number --> 1224
// boolean --> true or false
//undefined
// null
// Bigint
// symbol

let age=22;
let firstname="umernaaz";
console.log(age);
console.log(typeof age);
console.log(firstname);
console.log(typeof firstname);

// convert number to string
console.log(age + "");
console.log(typeof (age + ""));

let asno=25;
console.log(asno);
console.log(typeof asno);
asno=asno +"";
console.log(typeof asno);

// convert string to number
let str="this is a string";
console.log(str);
console.log(typeof str);
str= + str;
console.log(typeof str);

//or methods
let age1=19;
age=String(age);
console.log(typeof age);

let name1="umer";
name1=Number(name1);
console.log(typeof name1    );