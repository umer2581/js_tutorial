// While loop example
// first 100 natural number sum
let i=0;
let value=+prompt("Enter value");
let tot=0;

while(i<=50){
    tot=tot+i;
    i++;
}
console.log(tot);
console.log(`Current value of i is ${i}`);

// or we did from this formula
let total=(value*(value+1))/2;
console.log(total); 