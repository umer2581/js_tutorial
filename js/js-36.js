// INTRO TO OBJECTS
// ARRAY ARE GOOD BUT NOT SUFFICIENT 
// OBJECT IS USED FOR REAL WORLD DATA 
// OBJECTS STORES KEY VALUES PAIRS AND THEY DO NOT HAVE INDEX
//OBJECTS ARE ALSO REFERENCE TYPE 

// HOW TO CREATE OBJECTS 

const person = { name: "umer", age: 20, gender: "male" };
console.log(person);

//OR

const obj = {
    name: "umer=",
    age: 20,
    hobbies: ["singing", "guitar"]
};
console.log(obj);

// to access date from object 
//1. with dot notation

console.log(person.age);
console.log(person.name);

// TO ADD KEY VALUE PAIR TO OBJECT

person.gender = "male";
console.log(person.gender);
console.log(obj.hobbies);

// 2. with brackets notation
// in js the key will be in string by defalut that's why we use  " " to access data in obj and we also use " " in key value

console.log(person["name"]);
console.log(person["age"]);
console.log(person["gender"]);
// to add key value pair with brackets notation
person["othername"]="kalu";
console.log(person["othername"]);