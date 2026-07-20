/**
 *  Given a value n (positive integer) print the following pattern like this
 * n=5
                      *
                    * * *
                  * * * * *  
                * * * * * * *
              * * * * * * * * *
                * * * * * * *
                  * * * * *
                    * * *
                      *
 */

function upper_triangle(n) {
    for (let row = 1; row <= n; row++) {
        let str = "";
        let space = n - row;

        for (let i = 1; i <= space; i++) {
            str += " ";
        }
        let star = 2 * row - 1;
        for (let col = 1; col <= star; col++) {
            str += "*";
        }
        console.log(str)
    }
}
// upper_triangle(5);

function lower_triangle(n) {
    for (let row = 1; row <= n; row++) {
        let str = "";
        let space = row;
        for (let j = 1; j <= space; j++) {
            str += " ";
        }

        let star = 2 * (n - row) - 1;
        for (let col = 1; col <= star; col++) {
            str += "*";
        }
        console.log(str);
    }
}
// lower_triangle(5)

function pattern(n) {
    upper_triangle(n);
    lower_triangle(n);
}

pattern(5)