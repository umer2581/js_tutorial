// string methods
// trim
// to uppercase
// to lowercase
//slice
let firstname="  rajesh    ";
console.log(firstname);
console.log(firstname.length);
console.log(firstname[firstname.length-5]);

// TRIM METHOD
// this method will reduce all spaces from your string
firstname=firstname.trim();
console.log(firstname); // rajesh 
console.log(firstname.length); // after trim this will give 6

// TO upperCase METHOD

let value="umer naaz"
console.log(value);
value=value.toUpperCase();
console.log(value);

// TO lowerCase METHOD

let value1="UMER NAAZ";
console.log(value);
value1=value.toLowerCase();
console.log(value1);


// SLICE METHOD (this value will execute with one skip value)

let value2="javednaaz";
value2=value2.slice(1,7); // it will only avedn
console.log(value2);


 