//JAVASCRIPT IF STATEMENT
    //SYNTAX
// if(expression){
//     //content to be evaluated
// }

//example
let a = 9;
if(a>10){
    document.write("Value of 'a' is greater than 10");
}



//JAVASCRIPT ELSE STATEMENT
    //SYNTAX
// if (condition){
//     //block of code to be executed
// } else{
//     //block of code to be executed
// }

//EXAMPLE
let b = 0;
if (b>10){
    document.write("Value of 'b' is greater than 10");
} else{
    document.write("Value of 'b' is less than 10");
}



//JAVASCRIPT ELSE IF STATEMENT
    //SYNTAX
// if (condition1){
//     //block of code to be executed if condition1 is true
// } else if (condition2){
//     //block of code to be executed if the condition1 is false and condition2 is true
// } else {
//     //block of code to be executed if the condition1 is false and condition2 is false
// }

let c = 1;
if (c==10){
    document.write("Number is equal to 10");
} else if (c>10) {
    document.write("Number greater than 10");
} else{
    document.write("Invalid number");
}