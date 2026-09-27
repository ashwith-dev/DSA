/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 1
    if(num<=3) return false
    for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
        if(num%i==0){
            sum = sum + i + num/i
        }
    }

    return sum==num
};