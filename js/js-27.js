// array methods
// array push pop
// array shift unshift
 let fruits=["mango","apple","grapes","banana"];
 console.log(fruits);

 // pull method => this is muteable method it can change our original array and its push our element from the last positionx
 fruits.push("banana");
 console.log(fruits);  // let fruits=["mango","apple","grapes","banana","banana"];

 // pop method=> its also pop our element from the last position 
 let fruits1=["mango","apple","grapes","banana"];
// fruits1.pop();
console.log(fruits1);
let poppedfruit=fruits1.pop();
console.log("Popped fruit is ",poppedfruit);

// unshift method=> it add our element from the starting position
fruits1.unshift("apple","myfrutis");
// fruits1.unshift("myfruit");
console.log(fruits1);   

//shift method=> it removes our element from starting
let removedfruit=fruits1.shift();
console.log(fruits1);
console.log("removed fruit is",removedfruit);

// push and pop is faster than shift and unshift

