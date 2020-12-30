// strings are used to store a series of characters like. it's a finite sequence of symbols. Cannot do math with them.
// special methods are required to manipulate a previously declared string

let firstString = "What's up, World?";
let secondString = "My name is Ay_Tee!";
const thirdString = "This s a constant string!";
const smallString = "to";
const number = 726 + 77;
const numberInString = "726 + 77";
const thousand = "1000";

// get the length of a string
// console.log(smallString.length);

// get the index of a string
// console.log(firstString[3]);

// strings and numbers (not recommended)
// console.log(firstString + 12);

// number to string
//console.log(number.toString());
// string to number
//console.log(thousand * 1);

// concatinating strings
//console.log(firstString + ' ' + secondString);

// index of
//console.log(firstString.indexOf('a'));
// search for a character after an index
// -1 means not found
//console.log(firstString.indexOf('W', 1));

// charAt() gives you the character in a certain index.
// reverse of indexOf above
// using charAt with a referece outside of the length of the string returns nothing
// console.log(secondString.charAt(5));
// console.log(secondString.charAt(20));

// split
// split a string at the places of a certain character. 
// console.log(thirdString.split(' '));

// // to uppercase

// console.log(firstString.toUpperCase());

// // to lowercase
// console.log(firstString.toLowerCase());