// Write a function to reverse the string

function reverse_str(str){
    let res="";

    for(let i=str.length-1; i>=0; i--){
        res +=str[i];
    }
    return res;
}
console.log(reverse_str("I love JavaScript"));

