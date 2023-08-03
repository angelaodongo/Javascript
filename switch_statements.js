//JAVASCRIPT SWITCH STATEMENTS
    //SYNTAX
// switch (expression){
//     case x:
//         //code block
//         break;
//     case y:
//         //code block
//         break;
//     default:
//         //code block
// }

//switch statements select one of many code blocks to be executed
// This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

// THE BREAK KEYWORD
// When JavaScript reaches a break keyword, it breaks out of the switch block.
// This will stop the execution inside the switch block.
// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

//THE DEFAULT KEYWORD
// The default keyword specifies the code to run if there is no case match:
// The default case does not have to be the last case in a switch block:



//EXAMPLE
switch(new Date().getDay()){
    case 1:
        text = "Monday";
        break;
    case 2:
        text = "Tuesday";
        break;
    case 3:
        text = "Wednesday";
        break;
    case 4:
        text = "Thursday";
        break;
    case 5:
        text = "Friday";
        break;
    case 6:
        text = "Saturday";
        break;
    case 7:
        text = "Sunday";
        break;
    default:
        text = "Looking forward to the weekend";  
}
document.write(text)


// If multiple cases matches a case value, the first case is selected.
// If no matching cases are found, the program continues to the default label.
// If no default label is found, the program continues to the statement(s) after the switch.

// Switch cases use strict comparison (===).
// The values must be of the same type to match.
// A strict comparison can only be true if the operands are of the same type.

let x = 0;
switch(x){
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}
document.write(text)