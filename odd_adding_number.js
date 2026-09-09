/* Write a function addNextEven that takes an array of numbers and returns a new array where:

Each even number is replaced by the sum of that number and the next number in the array.

Each odd number remains unchanged.

If an even number is the last element, just add 0 (since there's no next element).

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Output: [1,5,3,9,5,13,7,17,9];
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const output = numbers.map((nums, i) => {
    if (nums % 2 === 0) {
        return nums + (numbers[i] + 1 || 0)
    }
    return nums
})
console.log(output);

