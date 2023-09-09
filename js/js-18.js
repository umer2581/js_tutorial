// if 
//else if

// CREATING A MARKSHEET
let math=+prompt("Enter Maths Number");
let sci=+prompt("Enter Science Number");
let sst=+prompt("enter Social Science Number");
let eng=+prompt("Enter English Number");
let hin=+prompt("Enter Hindi Number");
let urdu=+prompt("Enter Urdu Number");

let tot=math+sci+sst+eng+hin+urdu;
console.log("Your gain Total ",tot);
let per=tot/6;
console.log(per);
if(per<=75 && per>=60){
    console.log("Congrats!! You Got First Division");
}else if(per<=60 && per>=50){
    console.log("Congrats !! You got Second divison");
}else if(per<=50 && per>=34){
    console.log("Congrats !! You got third division");
}else{
    console.log("SOrry You are fail");
}
