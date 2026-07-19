// Write a function to seprate the zeros and ones in an arrays e.g [0,1,1,0,0,0,1,1,0,0] output [0,0,0,0,0,0,1,1,1,1]


function seprate(arr){
    let i=0;
    let j=arr.length-1;

    while(i<=j){
        if(arr[i]==1){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            j--;
        }else{
            i++;
        }
    }
    return arr;
}

const arrays=[0,1,1,0,0,0,1,1,0,0];

console.log(seprate(arrays));