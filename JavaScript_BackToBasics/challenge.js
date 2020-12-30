
// CHALLENGE 1 \\
// 1. Find the longest string in an array
// Do we need to consider if there are no strings in the array?
// Do we need to consider timse when all of the strings are the same length?

const first_array = ['rachel', 'bubuh', 'leslie', 'carlos', 'alexandira', 'raymond', 'carl'];
const second_array = ['new york city', 'sydney', 'barcelona', 'rome', 'cairo', 'mumbai', 'washington'];

const longestString = (arr) => {
    // declare the longest string
    let longest = '';

    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Find the length of each string
        if (arr[i].length > longest.length) {
            // ^^ Determine if that length is the larges we've seen so far
            // Replace th longest variable with the arr[index] as long as the length is greater than the variable 
            longest = arr[i];
        }
    }

     // return the longest/largest string
    return longest;
}

// console.log(longestString(first_array));
// console.log(longestString(second_array));

//What is used in this solution?
// Arrays, Strings, For loop, For each loop

// Challenge 2 \\
// Write a function that takes a string and retures the character that is most commonly used in the string
// Do we need to conseider if there is no string given?
// Do we need to consider times when more than one character showes up the same number of times?

const firstString = 'Mississippi';
const secondString = 'Seattle';
const thirdString = 'Wiltshire';
const fourthString = 'Canary Islands';

const characterCount = (str) => {
    // initialize/define an 
    // object has key:value pairs
    const charCount = {};
    let maxCharCount = 0;
    let maxChar = '';

    
    // Map a character count to that object
    for (let i = 0; i < str.length; i++) {
        //lets console.log to see what happens to some of this stuff
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }

    // assign new max count to maxCharCount and new max key to maxChar
    for (let key in charCount) {
        if(charCount[key] >= maxCharCount) {
            maxCharCount = charCount[key];
            maxChar = key;
        }
    }

    return maxChar;
}

//console.log(characterCount(firstString));

// Challenge 3 \\
// Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Anagram - a word or phrase made by transposing the letters of another word or phrase.
// do we need to trim whitespace? YEEEEEEES


const string1 = 'listen';
const string2 = 'elbow';
const string3 = 'silent';
const string4 = 'act';
const string5 = 'below';
const string6 = 'cat';
const string7 = 'dog';

const anagrams = (str1, str2) => {

    // compare the length of the two strings
    if(str1.length !== str2.length) {
        return false;
    }

    // sort strings in alphabetical order to see if they match.
    // whitespace problem is solved as it is all at the end.
    // give me anagrams that contain whitespace
    let sort1 = str1.split('').sort();
    console.log(sort1);
    let sort2 = str2.split('').sort();
    console.log(sort2);
    return sort1.join('') === sort2.join('');
}

// console.log(anagrams(string1, string3));
// console.log(anagrams(string2, string5));
// console.log(anagrams(string4, string1));
// console.log(anagrams(string7, string6));

// Challenge 4 \\
// given a single string, write a function that will return whether or not that string is a palendrome
// Palindrome - a hand cannon in Destiny - a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// Do we need to account for whitespaces again? YEEEEES

const palOne = 'a santa lived as a devil at nasa';
const palTwo = 'mom';
const palThree = 'dad';
const palFour = 'mommy';
const palFive = 'daddy';
const palSix = 'Hannah';

// don't forget toLowerCase()

// standard answer. doesn't cover whitespace, doesn't cover capitals
const palindromeOne = (str) => {
    return str == str.split('').reverse().join('');
}

const palindromeTwo = (str) => {
    let trimmed = str.replace(/[^/w]/g, '');
    return trimmed === trimmed.split('').reverse().join('');
    //^^^LOTS of array methods in this one
}

const palindromeThree = (str, i) => {
    // (i=i || 0) < 0
    // ^ used as initializer. assigns i to itself if defined otherwize initialized to 0
    return (i = i || 0) < 0 || i >=str.length >> 1 || str[i] === str[str.length-1-i] && palindromeThree(str, ++i);
}

const palindromeLoop = (str) => {
    let len = Math.floor(str.length / 2);
    console.log(len);
    console.log(str.length);
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
        return true;
    }
}

//console.log(palindromeLoop(palOne));

// Challenge 5 \\
// Determine if the input number is an Armstrong number
// Armstrong number - number that is equal to the sum of the nth powers of its digits (Narcissistic Number)
// example 
// 407 
// 4^3 + 0^3 + 7^3 = 407

const num1 = 1;
const num2 = 9;
const num3 = 10;
const num4 = 407;
const num5 = 54748;

const armstrongNum = (n) => {
    // change number to a string
    let strN = n + '';
    // length of the number determines the power
    let power = strN.length;
    // set sum to 0
    let sum = 0;
    for (let i = 0; i < strN.length; i++) {

        //console.log(Number(strN[i]));
        //console.log(power)
        sum += Math.pow(Number(strN[i]), power);
    }

    return sum === n;

}

//console.log(armstrongNum(num5));


// Challenge 6 \\
// Given one array of integers(numbers), return ineces of two numbers that add up to the target.
// will each input have exactly one solution? yes
// can we use the same element twice? no

const nums1 = [20, 80, 13, 27, 8];
const target1 = 100;

const twoSumOne = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                let num1 = j;
                let num2 = i;
                return num1 + ' ' + num2;
            }
        }
    }
    return 'no two sum soluton'
}

// console.log(twoSum(nums1, target1));

const twoSumTwo = (nums, target) => {
    let table = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        //console.log(target);
        console.log(nums[i]);
        console.log(complement);
    }
}

console.log(twoSumTwo(nums1, target1));
