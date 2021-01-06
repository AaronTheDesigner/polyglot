

// Challenge 1 \\
// find the longest string in an array

const firstArray = ['rachel', 'buddy', 'carl', 'carlos', 'carlotta', 'alexandria', 'bob'];

const secondArray = ['new york city', 'sydney', 'barcelona', 'rome', 'cairo'];

const longestString = (arr) => {

    // declare the longest string
    let longest = ''

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length > longest.length){
            longest = arr[i];
        }
    }

    return longest
}

// console.log(longestString(firstArray));
// console.log(longestString(secondArray));


// Challenge 2 \\
// write a function that take s a string, and returns the character that is most commonly used

const firstString = 'Mississippi';
const secondString = 'Seattle';
const thirdString = 'Wiltshire';
const fourthString = 'Canary Islands';

const characterCount = (str) => {
    // initialize and define an empty object
    // with key value pairs
    // initialize max character value
    const charCount = {};
    let maxCharCount = 0;
    let maxChar = '';

    for (let i of str) {
        charCount[str[i]] = ++charCount[str[i]] || 1;
        if(charCount[key] > maxCharCount) {
            maxCharCount = charCount[key];
            maxChar = key;
        }
    }

    // for (let i = 0; i < str.length; i++) {
    //     charCount[str[i]] = ++charCount[str[i]] || 1;
    // }

    // for (let key in charCount) {
    //     if(charCount[key] > maxCharCount) {
    //         maxCharCount = charCount[key];
    //         maxChar = key;
    //     }
    // }

    return maxChar;
}

//console.log(characterCount(fourthString));
// console.log(characterCount(secondString));
// console.log(characterCount(thirdString));
// console.log(characterCount(fourthString));

function findLetter(word) {
    let charCount = {};
    let maxCharCount = 0;
    let maxChar = '';
    
    for(let letter of word) {
      charCount[letter] = (charCount[letter] || 0) + 1;
      
      if(charCount[letter] > maxCharCount) {
        maxCharCount = charCount[letter];
        maxChar = letter;
      }
    }
    
    return {maxChar, maxCharCount};
  }
  
  console.log(findLetter('supercalifragilisticexpialidocious'));



// Challenge 3
// create a function that take in two strings as two parameters and returns a boolean if the first string is an anegram of the secons string.
// do we need to trim whitespace YAAAAAS

const string1 = 'l is ten';
const string2 = 'silent';
const string3 = 'elbow';
const string4 = 'below';
const string5 = 'cat';
const string6 = 'act';
const string7 = 'dog';

const anagram = (str1, str2) => {

    // compare the length of two strings

    let sort1 = str1.split('').sort().join('');
    let sort2 = str2.split('').sort().join('');
    
    // strings to arrays
    // reorder alphabetically
    // turn them back into strings
    // compare the strings

    return sort1 === sort2;
}

//console.log(anagram(string1, string7));

// Challenge 4
// given a single string, write a function that will return whether oe not the string is a palendrome

const name1 = "Hannah";
const name2 = "Mom";
const name3 = "Dad";
const name4 = "cool";
const name5 = "buddy";
const name6 = "wow";
const name7 = "Taco cat"


// first solution

const palendrome = (str) => {

    return str == str.split('').reverse().join('');
}

//console.log(palendrome(name6));

const palendomeTwo = (str) => {
    let trimmed = str.replace(/[^/w]/g, '');
    return trimmed === trimmed.split('').reverse().join('');
}

const palendromeThree = (str) => {

    let modifiedStr = str.split('').reverse().join('');
    let modifiedLower = modifiedStr.toLowerCase();
    let modifiedInput = str.toLowerCase();    

    return modifiedInput === modifiedLower;
}

//console.log(palendomeTwo(name7));

// Challenge 5 \\
// determine if the input number is a narcissistic/armstrong number
// - number that is equal to the power of its digits
// 54748
// 5^5 + 4^5 + 7^5 + 4^5 + 8^5 = 54748

const num1 = 1;
const num2 = 9;
const num3 = 10;
const num4 = 54748;

const armstrongNum = (n) => {
    // change the number into a string
    let strNum = n + '';
    // length of the number determine the power
    let power = strNum.length;
    // set a sum
    let sum = 0;

    for (let i = 0; i < strNum.length; i++) {
        
        sum += Math.pow(Number(strNum[i]), power);
        
    }

    return sum === n;

}

//console.log(armstrongNum(num3))