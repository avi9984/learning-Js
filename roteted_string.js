// Write a function to rotete the string to give str when rotete the string match the goal if goal string match then return true other wise return false
/**e.g
 * s="abcde", goal="cdeab" output: true
 * s="abcde", goal="abced" output: false
 * s="abc", goal="abd" output:false
 */

// Brouth force approch

function rotete(str,goal){
    if(str.length !==goal.length) return false;

    let newStr=str+str; 
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
}
console.log(rotete("abcde","cdeab"));
console.log(rotete("abc","abd"));
// Time Complexity= O(n^2)
// Space Comlexity= O(n) // because use new string


//Optimize approch;

function roteteStr(s,g){
    if(s.length !==g.length) return false;

    let newStr= s+s;
    if(newStr.includes(g)){
        return true
    }
    return false
}
// Time Complexity= O(n)
// Space Comlexity= O(n) // because use new string

console.log(roteteStr("abcde","cdeab"));
console.log(roteteStr("abc","abd"));
console.log(roteteStr("abcde","abced"));