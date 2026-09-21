/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0
    for(let i=0; i<s.length; i++){
        let current = s.charCodeAt(i)
        sum+=('z'.charCodeAt(0)-current+1) * (i+1);
    }
    return sum
};