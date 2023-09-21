// DIFFERENCE BETWEEN DOT(.) AND BRACKET [] NOTATION

// THE MAIN DIFFERENCE IS IN DOT NOTATION WE ARE UNABLE TO USE SPACES WITH KEY VALUE PAIR NAME BUT THE BRACKET NOTATION ALLOWS US TO USE SPACES WITH SPACES
const person={
    name:"javed",
    age:20,
    "person hobbies": ["a","b","c"]
};
// console.log(person.person hobbies); // this will be error because of space

// with bracket use
console.log(person["person hobbies"]); // this output not give error because it allows spaces

// we have to add key value pair which name is email

const key="email";

person.key="abc@gmail.com";
console.log(person);
person["key"]="abc@gmail.com"; 
console.log(person);
person[key]="xyz@gmail.com";
console.log(person); // WHEN WE REMOVE THE DOUBLE QUOTE IT WILL COMPUTE OUR VALUE FROM KEY VARIABLE