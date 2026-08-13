// Write a function to reverse the string

function reverse_str(str) {
    let res = "";

    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}
console.log(reverse_str("I love JavaScript"));

function reverse_arr(arr) {
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i])
    }
    return res
}

console.log(reverse_arr([1, 2, 3, 4]));

