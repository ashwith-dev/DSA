/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0
    for(let i=0; i<s.length; i++){
        let current = s.charCodeAt(i)
        console.log("current :",current)
        if(current >= 'a'.charCodeAt(0) && current <= 'z'.charCodeAt(0)){
            sum+=('z'.charCodeAt(0)-current+1) * (i+1);
            console.log("1st loop :",sum)
        }else{
            sum+=('Z'.charCodeAt(0)-current+1) * (i+1);
            console.log("2nd loop :",sum)
        }
    }
    return sum
};