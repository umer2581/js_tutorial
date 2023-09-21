// SPREAD OPERATOR IN ARRAY AND OBJECT
const arr1=[1,2,3];
const arr2=[4,5,6];
const narr=[...arr1,...arr2];
console.log(narr);

//SPREAD OPERATOR IN OBJECTS
const obj1={
    key1:"value1",
    key2:"value2"
};

const obj2={
    key3:"value3",
    key4:"value4"
};
const nobj={...obj1,...obj2};
console.log(nobj);