/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let char = new Map()

    for(let i=0; i<s.length; i++){
        char.set(s[i],(char.get(s[i]) || 0) + 1)
    }
    for(let [key,value] of char){
        if(value == 1) return s.indexOf(key)
    }
    return -1
};