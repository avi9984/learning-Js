/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse=0;

    let quotient=x;

    let remender=0;

   while(quotient> 0){
     remender= quotient % 10; 
     reverse=(reverse*10)+remender;
    quotient = parseInt(quotient / 10);
   }
   if (x === reverse) {
        return true
    }else{
        return false
    }
    
};