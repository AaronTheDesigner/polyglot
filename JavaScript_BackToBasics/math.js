
// Basics
let addition = 1 + 1;
let mulitplication = 2 * 2;
let subtraction = 9 - 3;
let division = -5 / 12;
let remainder = 19 % 12;
// modulo behavior
const mod = (n, m) => {
    return ((n % m) + m) % m;
}

// console.log(remainder);
// console.log(mod(19, -12));

// Remainder vs Modulo
// 19 % 12 = 7 in JavaScript, C#, and Google
// 19 % -12 = 7 in JavaScipt, C#
// 19 % -12 = -5 in Ruby, and Google
// WHYYYYY

const num1 = 67;
const num2 = 30;
let val;

//addition
val = num1 + num2;
//subtraction
val = num1 - num2;
//multiplication
val = num1 * num2;
//division
val = num1 / num2;
//remainder
val = num1 % num2;

// MATH OBJECT
const mathPi = Math.PI;
const mathE = Math.E; // euler's number
const mathRound = Math.round(2.4);
const mathCeil = Math.ceil(2.4);
const mathFloor = Math.floor(2.7);
const mathSquare = Math.sqrt(64);
const mathAbs = Math.abs(-5) //absolute number
const mathPow = Math.pow(8, 2);
const mathMin = Math.min(2, 33, 78, 918, 17); // find minimum
const mathMax = Math.max(2, 33, 78, 918, 17); // find maximum
const mathRandom = Math.random();
const mathControlRandom = Math.random() * 20 + 1; // random decimal between 0 and 19 + 1, which is 20. use floor to commit to whole numbers. 
const mathFloorRandom = Math.floor(Math.random() * 20 + 1);


// Challenge 1 
// Book keeping
// find the average value of a transaction over a certain period of time.

const transactions = [93473,7483,3748,7383,7483,7483,72819,8749,7489,73849,982,784,928];

const basicAverage = arr => {
    const sum = arr.reduce((acc, cur) => acc + cur);
    const average = sum/arr.length;
    return average;
}

const whileAverage = arr => {
    let i = 0;
    let sum = 0; 
    let len = arr.length;
    while (i < len) {
        sum = sum + arr[i++];
    }
    return sum / len;
}

console.log(whileAverage(transactions));
