// Print duplicates in arrays
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

function duplicatesPair(arr){
    let count=0; start=0, end=arr.length-1;
    // for(let i=0; i<arr.length; i++){
    //     for()
    // }
    while(start<end){
        if(arr[start]=arr[end]){
            start++;
            end--;
            count++
        }
    }
    return count, arr[start,end];
}
console.log(duplicatesPair([10, 20, 20, 10, 10, 30, 50, 10, 20]))

function printDuplicate(arr){
    let unique=new Set(arr)
    console.log(unique)
    let duplicates=arr.length-unique.size
    return duplicates
}
// console.log(printDuplicate([10, 20, 20, 10, 10, 30, 50, 10, 20]))

function unique(arr){
    let set=new Set(arr)
    return [...set]
}
// console.log(unique([10, 20, 20, 10, 10, 30, 50, 10, 20]))