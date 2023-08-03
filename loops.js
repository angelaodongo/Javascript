//JAVASCRIPT LOOPS
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true


//FOR LOOP
//creates a loop with 3 optional expressions
    //SYNTAX
// for (expression1; expression2; expression3){
//     //code block to be executed
// }

// Expression 1 is executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 is executed (every time) after the code block has been executed.


// for (let i = 0; i < 5; i++){
//     text = "The number is "+ i + "<br>";
//     console.log(text)
// }
// document.write(text)


// From the example above, you can read:
// Expression 1 sets a variable before the loop starts (let i = 0).
// Expression 2 defines the condition for the loop to run (i must be less than 5).
// Expression 3 increases a value (i++) each time the code block in the loop has been executed.


//WITH A VARIABLE: EXAMPLE 1
    //SYNTAX
// var i = 5;

// for (i = 0; i < 5; i++){
//     //some code
//     console.log()
// }
// document.write()
//here i is 10

// var i = 5;

// for(let i = 0; i < 10; i++){
//     text = "This number is " + i + "<br>";
//     console.log(text)
// }
// document.write(text)


//USING LET IN A LOOP: EXAMPLE 2
    //SYNTAX
// let i = 5;

// for (let i = 0; i < 10; i++){
//     //some code
//     console.log()
// }
// document.write()
//here i is 5

// let i = 5;

// for (let i = 5; i < 10; i++){
//     text = "The text is " + i + "<br>";
//     console.log(text)
// }
// document.write(text)

// In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.
// In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.
// When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.


// FOR/OF AND FOR/IN LOOPS
    //SYNTAX
// for (key in object){
//     //code to be executed
// }

//EXAMPLE
// const person = {fname:"John", lname:"Doe", age:25};

// let text = ""
// for (let x in person){
//     text += person[x];
// }
// document.write(text)

// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]


//FOR IN OVER ARRAYS
    //SYNTAX
// for (variable in array){
//     //code to be executed
// }


//EXAMPLE
const numbers = [45, 4, 9, 16, 25];

let txt = ""
for (let x in numbers){
    txt += numbers[x] + " ";
}
document.write(txt)

// Do not use for in over an Array if the index order is important.
// The index order is implementation-dependent, and array values may not be accessed in the order you expect.
// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

// ARRAY: forEach()
// The forEach() method calls a function (a callback function) once for each array element.

const number = [45, 4, 9, 16, 25];

let txt2 = ""
number.forEach(myFunction);

function myFunction(value, _index, _array){
    txt2 += value + " ";
    console.log(txt2)
}
document.write(txt2)