// DESTRUCTURING OF AN ARRAY

// DESTRUCTURING MEANS IF WE WANT TO STORE OUR ARRAY VALUE IN SOME VARAIBELS THEN WE USE THIS

const number=[1,2,3,4,5,6,7,8];

// WITH NORMALLY
let val1=number[0];
let val2=number[1];
console.log(val1);
console.log(val2);

// WITH DESTRUCTURING

let[val3,val4]=number;
console.log(val3,val4);
// REST VALUES ARE SKIPPED WHEN NO VARIABLES ARE CREATED

// IF WE HAVE ONLY 1 VALUE IN ARRAY AND VARIABLES ARE 2 THEN THE 2ND VARIABLE VALUE WILL BE "UNDEFINED"
let umer=[1];
let[u1,u2]=umer;
console.log(u1,u2);

// IF WE WANT TO SKIPPED ONE VALUE FROM ARRAY THEN WE WILL USE COMMM(,)
let array=[1,3,4];
let[m1,,m2]=array;
console.log(m1,m2);

// IF WE WANT TO CREATE A NEW ARRAY FROM EXISTING ARRAY
// with simple method
let arr1=[1,2,3,4];
let [e1,e2]=arr1;
let newarr=arr1.slice(2);
console.log(newarr);

//with destructuring
let narr=[1,2,3,4];
let[s1,s2,...mynewarr]=narr;
console.log(s1,s2);
console.log(mynewarr); // FIRST IT WILL PRINT DEST. VALUE AND REST VALUES ARE PRINT IN NEW ARRAY




