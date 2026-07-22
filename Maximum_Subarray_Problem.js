// Write a function that takes an array of integers and returns the maximum sum of any contiguous subarray within the input array
/**
 * Maximum Subarray Problem
 * Largest Sum Contiguous Subarray
 * Maximum Sum Subarray
 */

function contiguous_sub(arr) {
    let maxSum = arr[0];
    let currSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currSum = Math.max(arr[i], currSum + arr[i]);
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}

let Input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(contiguous_sub(Input));