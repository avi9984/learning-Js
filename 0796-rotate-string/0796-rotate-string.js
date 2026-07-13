/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    
     if(s.length !==goal.length) return false;

    let newStr=s+s; 
    let g=goal.length;

    for(let i=0; i<=newStr.length-g; i++){
        let match=true;
        for(let j=0; j<g; j++){
            if(newStr[i+j] !==goal[j]){
                match=false
                break;
            }
        }
        if(match) return true
    }
    return false;
};
