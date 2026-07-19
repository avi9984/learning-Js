/**
 *  Given a value n (positive integer) print the following pattern like this
 * n=3
      *
    * * 
  * * *
  n=4
      *
    * *
  * * * 
* * * *
 */

function pattern(n) {
    for (let row = 1; row <= n; row++) {
        let str = "";
        for (let col = 1; col <= n - row; col++) {
            str += " ";
        }
        for (let j = 1; j <= row; j++) {
            str += "*";
        }
        console.log(str);
    }
}

// pattern(3);
pattern(9);