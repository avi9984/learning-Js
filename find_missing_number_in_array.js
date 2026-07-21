// write a function to find the missing number;

function missing_number(arr,n){
    let total=(n*(n+1)/2)
    let sum=0;

    for(let i=0; i<arr.length; i++){
        sum +=arr[i]
    }
    return total- sum;
}

let arr=[1,3,4,5];
let n=5;

console.log(missing_number(arr,n));
