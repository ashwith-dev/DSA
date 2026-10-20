/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxCount = 0
    let sub = new Set()
    let j = 0 
    for(let i=0; i<s.length; i++){
        while(sub.has(s[i])){
            sub.delete(s[j])
            j++
        }
        sub.add(s[i])
        maxCount = Math.max(maxCount,i-j+1)
    }
    return maxCount
};