// nested if else

// we have create one game which name guess number

let winno=19;
let userguess=+prompt("Enter a Guess number");
if(userguess===winno){
    console.log("Your Guess Is Right");

}else{
    if(userguess<19)
    {
        console.log("Your Guess is Small");
    }else{
        if(userguess>19)
        {
            console.log("Your Guess is Big");
        }
    }
}