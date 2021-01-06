
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
const mathFixed = 12.8273847.toFixed(2);


// Challenge 1 
// Book keeping
// find the average value of a transaction over a certain period of time.

const transactions = [93473,7483,3748,7383,7483,7483,72819,8749,7489,73849,982,784,928];

// reduce
const basicAverage = arr => {
    const sum = arr.reduce((acc, cur) => acc + cur);
    const average = sum/arr.length;
    return average.toFixed(2);
}

// while loop
const whileAverage = arr => {
    let i = 0;
    let sum = 0; 
    let len = arr.length;
    while (i < len) {
        sum = sum + arr[i++];
    }
    let average = sum / len;
    return average.toFixed(2)
}

//console.log(whileAverage(transactions));
const astronomyList = [
    {
        item: 'star chart',
        found: true,
        price: 108.22,
    },
    {
        item: 'telescope',
        found: false,
        price: 409.28,
    },
    {
        item: 'astrolabe',
        found: true,
        price: 609.05,
    },
    {
        item: 'map',
        found: false,
        price: 122.07,
    },
    {
        item: 'compass',
        found: true,
        price: 232.00,
    },
    {
        item: 'Gallileo Writings',
        found: false,
        price: 30.77,
    },
    {
        item: 'Coupernicus Writings',
        found: true,
        price: 25.99,
    }

];

// imperative loop
// loop through all objects, grab all prices, calculate averages

const imperAverage = arr => {
    // initialize sum of prices
    let priceSum = 0;
    // initialize how many items have been found
    // let itemsFound = 0;
    // initialize the length of the array
    const len = arr.length;

    for (let i = 0;  i < len; i++) {
        // grab each item from the list
        let item = arr[i];
        priceSum = item.price + priceSum;
    }
    let average = priceSum / len;
    return average.toFixed(2);
}

//console.log(imperAverage(astronomyList));

const averageForIn = arr => {
    let priceSum = 0;
    let itemCount = arr.length;

    // for of loop meant for arrays, even with objects within them
    // fo in loop does not work here. 
    for (let item of arr) {
        priceSum = item.price + priceSum;
    }

    let average = priceSum / itemCount;
    return average.toFixed(2);
}

console.log(averageForIn(astronomyList));