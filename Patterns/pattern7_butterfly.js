/**
 *  Given a value n (positive integer) print the following pattern like this
 * n=7
*     *
**   **
*** ***
*******
*** ***
**   **
*     *
 */


function upper(n) {
    for (let row = 1; row <= (n - 1) / 2; row++) {
        let str = "";
        let leftStar = row;
        for (let i = 1; i <= leftStar; i++) {
            str += "*";
        }

        let space = n - 2 * row;
        for (let j = 1; j <= space; j++) {
            str += " ";
        }
        let rightStar = row;
        for (let k = 1; k <= rightStar; k++) {
            str += "*";
        }
        console.log(str)
    }
}

function middle(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        str += "*";
    }
    console.log(str)
}

function lower(n) {
    for (let row = 1; row <= (n - 1) / 2; row++) {
        let str = "";
        let leftStar = ((n - 1) / 2) - row + 1;

        for (let i = 1; i <= leftStar; i++) {
            str += "*";
        }

        let space = 2 * row - 1;
        for (let j = 1; j <= space; j++) {
            str += " ";
        }

        let rightStar = ((n - 1) / 2) - row + 1;

        for (let k = 1; k <= rightStar; k++) {
            str += "*";
        }
        console.log(str)
    }
}


function pattern(n) {
    upper(n);
    middle(n);
    lower(n);
}
pattern(7)