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


for (let i = 0; i < 5; i++){
    text1 = "The number is "+ i + "<br>";
    console.log(text1)
}
document.write(text1)


// From the example above, you can read:
// Expression 1 sets a variable before the loop starts (let i = 0).
// Expression 2 defines the condition for the loop to run (i must be less than 5).
// Expression 3 increases a value (i++) each time the code block in the loop has been executed.


//WITH A VARIABLE: EXAMPLE 1
    //SYNTAX
var i = 5;

for (i = 0; i < 5; i++){
    //some code
    console.log()
}
document.write()
//here i is 10

var i = 5;

for(let i = 0; i < 10; i++){
    text5 = "This number is " + i + "<br>";
    console.log(text5)
}
document.write(text5)


//USING LET IN A LOOP: EXAMPLE 2
    //SYNTAX
// let i = 5;

for (let i = 0; i < 10; i++){
    //some code
    console.log()
}
document.write()
//here i is 5

// let i = 5;

for (let i = 5; i < 10; i++){
    txtt = "The text is " + i + "<br>";
    console.log(txtt)
}
document.write(txtt)

// In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.
// In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.
// When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.


// FOR/OF AND FOR/IN LOOPS
    //SYNTAX
// for (key in object){
//     //code to be executed
// }

//EXAMPLE
const person = {fname:"John ", lname:"Doe ", age:25};

let text = "\n"
for (let x in person){
    text += person[x];
}
document.write(text)

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

let txt = "\n"
for (let x in numbers){
    txt += numbers[x] + " ";
}
document.writeln(txt)

// Do not use for in over an Array if the index order is important.
// The index order is implementation-dependent, and array values may not be accessed in the order you expect.
// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

// ARRAY: forEach()
// The forEach() method calls a function (a callback function) once for each array element.

const number = [45, 4, 9, 16, 25];

let txt2 = "\n"
number.forEach(myFunction);

function myFunction(value, _index, _array){
    txt2 += value + " ";
    console.log(txt2)
}
document.write(txt)


//FOR OF LOOP 
// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
    //SYNTAX
// for (variable of iterable){
//     //code to be executed
// }

//Example

const cars = ["BMW", "Volvo", "Mini"];

let text3 = "\n";
for (let z of cars){
    text3 = z + " ";
    console.log(text3)
}
document.write(text3)


let language = "Javascript";

let text2 = "\n";
for (let m of language){
    text2 = m + " ";
    console.log(text2)
}
document.write(text2)


//WHILE LOOPS
    //SYNTAX
// while (condition) {
//     // code block to be executed
// }

//EXAMPLE

// let r = 5;
while (i < 10){
    text = "the number is " + i + " ";
    i++;
    console.log(text);
}
document.write(text)


// If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
//In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10

//DO WHILE LOOP
    //SYNTAX
// do {
//     //code to be executed
// }
// while (condition);

do {
    text = "The number is " + i;
    i++;
    console.log(text)
}
while (i <20);
document.write(text)

// The while loop loops through a block of code as long as a specified condition is true.
//The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.


//BREAK AND CONTINUE STATEMENTS
//The break statement "jumps out" of a loop.
//The continue statement "jumps over" one iteration in the loop.

//BREAK STATEMENT
//You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.
//The break statement can also be used to jump out of a loop

 for (let i = 0; i < 10; i++){
     if (i === 3) {break;}
     text = "The number is " + i + "<br>";
 }