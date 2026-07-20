/**
 *  Given a value n (positive integer) print the following pattern like this
 * n=5
        *
      * * * 
    * * * * *
   * * * * * * * 
 * * * * * * * * *
 */

function pattern(n) {
    for (let row = 1; row <= n; row++) {

        let str = "";
        let space = n - row;

        for (let i = 1; i <= space; i++) {
            str += " ";
        }

        let start = 2 * row - 1;
        for (let col = 1; col <= start; col++) {
            str += "*";
        }

        console.log(str);
    }
}

pattern(5);

