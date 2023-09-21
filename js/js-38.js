// to iterate the object
const obj={
    name:"umer naaz",
    age : 20,
    hobbies:["playing","typing","accounting"]
};

// FOR IN LOOP
// OBJECT KEYS
 
for(let key in obj){
    console.log(obj["hobbies"]);
}
console.log(obj["hobbies"]);

//2.
for(let key in obj){
    console.log(`${key} :- ${obj[key]}`);
}