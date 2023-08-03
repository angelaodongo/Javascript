//this is a single line comment of javascript

//DOCUMENT.WRITE FUNCTION
var a = 10;
var b = 20;
var c = a+b; //adds values of a and b variable
document.write(c); //prints sum of 10 and 20


//COMMENTS
// This is a multiple line comment.
// It will not be displayed.
document.write(" example of javascript multiline comment");


//JAVASCRIPT VARIABLES
var x = 30;
var y = 20;
var z = x+y;
document.write(z);
document.writeln("Hello World");


//correct javascript variables
var x = 10;
var _value = "sonoo";


//LOCAL VARIABLES
function sum(){
    var x = 10; //javascript local variable
}
//or
if(10<13){
    var y = 20; //javascript local variable
}


//GLOBAL VARIIABLES
var data = 200; //global variable
function mydata(){
    document.writeln(data);
}
function mydata2(a,b){
    let z = a + b //let can be used instead of var
    document.writeln(z); //serves the same function as print in python
    return z; // gives the output of the function
    
}

mydata(); //calling Javascript function
console.log(mydata2(9,5)) //displays on the console, Mydata is a function
 


// def mydata2(a,b):
//     z =a +b
//     return z

// print(mydata2(3,7)) //python alternative
