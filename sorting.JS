// sorting using recursion function
// [2,3,1,4


let myarray = [2, 3, 1, 4];
let mynewlist = [];

function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

function sortcheck(array) {
    if (isSorted(array)) {
        mynewlist = [...array]; // Copy the array
        return;
    }
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            // Swap elements
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
        }
    }
    sortcheck(array); // Recursively check again
}

sortcheck(myarray);
console.log(mynewlist);