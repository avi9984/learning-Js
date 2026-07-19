/**
 * Given a value n (positive integer) print the following pattern like this
 * input n=4                 
    *
    * *
    * * *
    * * * *
    input n=3
    *
    * *
    * * *
 */

function pattern(n){
    for(let row=1; row<=n; row++){
        let str="";
        for(let col=1; col<=row; col++){
            str +="*";
        }
        console.log(str);
    }
}

// pattern(3);
// pattern(5);
pattern(6);