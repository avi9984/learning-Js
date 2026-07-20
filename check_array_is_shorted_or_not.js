// write a function to check array is shorted or not?

function isShorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false
        }
    }
    return true
}

console.log(isShorted([1, 2, 3, 4, 5]));
console.log(isShorted([1, 2, 3, 4, 6, 5]));