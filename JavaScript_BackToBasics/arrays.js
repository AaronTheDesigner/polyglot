// initializing arrays
let arrOne = new Array();
let arrTwo = [];

//Almost all the time, the second syntax is used. We can supply initial elements in the brackets:
let people = ['john', 'aytee', 'brackey', 'stephen'];

// replace items in an array (not recommended)
people[3] = 'carlah';

// add an item to an array (not recommended)
people[4] = 'stephen';

// methods
// push and pop => end
// push = in 
// pop = out
people.push('johndoe');
people.pop();

// shift and unshift => beginning (less frequent than pop and push because it runs slow)
// elements need to be renumbered 
// unshift = in
// shift = out
people.unshift('johndoe');

// how to reference items in an array
// console.log(people[0]);
// console.log(people[1]);
// console.log(people[2]);
// console.log(people[3]);
// console.log(people[4]);
// how to reference the entire array
//console.log(people);

let matrix = [
// indexes with in an index
    [0,1,2],
    [3,4,5],
    [6,7,8]
]

//console.log(matrix[0][1]);

