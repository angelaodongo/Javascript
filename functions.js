// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
}
document.write(myFunction(25,30));
console.log(myFunction(25,30))

//JAVASCRIPT FUNCTION SYNTAX
// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}

// Function parameters are listed inside the parentheses () in the function definition.

// Function arguments are the values received by the function when it is invoked.

// Inside the function, the arguments (the parameters) behave as local variables.


//FUNCTION INVOCATION
// The code inside the function will execute when "something" invokes (calls) the function:
// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code
// Automatically (self invoked)
// You will learn a lot more about function invocation later in this tutorial.


//FUNCTION RETURN
// When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":


//EXAMPLE
// Function is called, the return value will end up in x
let x = myFunction(4,3);

function myFunction(a,b){
    //function returns the product of a and b
    return a * b;
}
document.writeln(myFunction(4,3));