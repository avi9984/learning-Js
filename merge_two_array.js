// write a function to merge two array without using any inbuilt method

function merge_arr(arr1, arr2) {
    let result = [];
    let index = 0;
    for (let i = 0; i < arr1.length; i++) {
        result[index] = arr1[i]
        index++
    }

    for (let j = 0; j < arr2.length; j++) {
        result[index] = arr2[j]
        index++
    }
    return result;
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10];

console.log(merge_arr(arr1, arr2));