/**
 * Write a function for fabbonacci series for n number and not exceed the given number of integer
 * e.g: n(10)=> 0 1 1 2 3 5 8
 * n(13)=0 1 1 2 3 5 8 13
 */

function fabbonacci(n) {
    // if(n<=1) return n;

    let a = 0;
    let b = 1;
    let res;
    for (let i = 2; i <= n; i++) {
        res = a + b;
        a = b;
        b = res;
    }
    return res
}
console.log(fabbonacci(6));


function fabbonacci_series(n) {
    let res = [];
    let a = 0;
    let b = 1;
    while (a <= n) {
        res.push(a);
        [a, b] = [b, a + b];
    }
    return res;
}

// console.log(fabbonacci_series(10));
// console.log(fabbonacci_series(100))
// console.log(fabbonacci_series(13))