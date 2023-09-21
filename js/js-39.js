// COMPUTED PROPERTIES

const key1="objectkey1";
const key2="objectkey2";
const value1="myvalue1";
const value2="myvalue2";

// to create this type of object const obj={objkey1="myvalue1"=myvalue2 ,objkey2};

// CASE:-1
const obj={
    key1:value1,
    key2:value2
}
console.log(obj);

// CASE:-2
const obj1={
    [key1]:value1,  // these brackets will compute our value
    [key2]:value2
}
console.log(obj1);

// we have another method
const obj2={};
obj2[key1]=value1;
obj2[key2]=value2;
console.log(obj2);