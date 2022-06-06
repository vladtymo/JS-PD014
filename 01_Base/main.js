// JavaScript code...
console.log("Hello JavaScript!");
console.warn("Some warning!");
console.error("Some error!");

// -=-=-=-=-=-=-=-=-=-=- Data Types -=-=-=-=-=-=-=-=-=-=-
let variable = 10;  // number
variable = 15.2;    // number
variable = 'hello'; // string
variable = true;    // boolean

console.log('Type of 10: ' + typeof (10));
console.log('Type of "Hello": ' + typeof ('Hello'));
console.log('Type of true: ' + typeof (true));

variable = [1, 4, 'red', true, 34, 20.5, [1, 2, 3]];

variable[2]; // 'red'
console.log("Array: " + variable);

// string interpolation
console.log(`2 + 2 = ${2 + 2}`);
console.log(`element at 5 index = ${variable[5]}`);

// -=-=-=-=-=-=-=-=-=-=- Base Statements -=-=-=-=-=-=-=-=-=-=-
if (1 > 0) {
    console.log("True");
}
else {
    console.log("False");
}

console.log(`5 is a ${(5 > 0 ? 'positive' : 'negative')}`);

// -=-=-=-=-=-=-=-=-=-=- Browser Dialogs -=-=-=-=-=-=-=-=-=-=-
// show message to user
alert("Hello, it is an alert!");
alert(`2 * 2 * 2 * 2 = ${2 ** 4}`);
alert(`36 square: ${Math.sqrt(36)}`);

// get value from user
let username = prompt("Enter your name:", 'Bob');
console.log(`Hello, dear ${username ?? "anonymous"}`); // null check operator

let year = +prompt("Enter current year:"); // convert string to number
console.log(`Current year is: ${year}`);

console.log(`Next year is: ${year + 1}`);

// ask user for yes/no
let isLearn = confirm("Do you want to learn JavaScript?");
console.log("Learn JS: " + isLearn);