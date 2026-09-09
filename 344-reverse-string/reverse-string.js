/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = Math.floor(s.length/2)
    let n1 = s.length-1
    for(let i=0;i<n;i++){
        [s[i],s[n1-i]]=[s[n1-i],s[i]]
    }
};