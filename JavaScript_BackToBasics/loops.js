// For loop
// Learn to love it... seriously... lean to love all for loops 

// first for loop

// for ( initial expression; condition expression; increment expression) { statement }
// for (start; end; direction) { do the thing }
// most of the time when we see loops they're connected to something, like an array/list/etc, but we can practice with them independantly

for (let i = 0; i <= 7; i++) {
    console.log(i);
}


// for (let i = 30; i >= 7; i--) {
//     console.log(i);
// }

// we usually use for loops (all loops) to itterate through a variable with multiple items (e.g. arrays)
const array = ['you', 'me', 'we', 'they', 'them', 'us', 'yall']; //(7) items but an index that reaches to (6)

for (let i = 0; i <= array.length; i++) {
    // ^ array.lengh does not connect the loop to the array. it simply gets the number of items in the array and sets that portion of the contition expression
    // i is meaningless until you assign it to something in the statement {do something block}
    //console.log(i);
    // beneath we use the array and i represents the index of the array
    console.log(array[i]);
}