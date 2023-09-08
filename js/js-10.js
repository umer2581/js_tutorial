// Template string
 
// simple concatenation
let str1="abdul";
let str2="salam";
let fname=str1 + " " + str2;
console.log(fname);
console.log(typeof fname);

// in template form
 let str3="my name is ";
 let name="umer";
 let str4="and my age is ";
 let age=20;
 
 let tot= `${str3} ${name} ${str4} ${age}` ; // my name is umer and my age is 20
 console.log(tot);

 let st0="umer said to salam ";
 let qu="ASSALAMUALEKUM";
 let st1="in return back salam said";
 let ans="WALEKUMASSALAM";

 let merg=`${st0} ${qu} ${st1} ${ans}`; // umer said to salam ASSALAMUALEKUM in return back salam said WALEKUMASSALAM

 console.log(merg);
 console.log(typeof merg);