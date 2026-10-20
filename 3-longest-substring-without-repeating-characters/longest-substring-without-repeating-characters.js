/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxCount = 0
    for(let i=0; i<s.length; i++){
        let sub = new Set()
        for(let j=i; j<s.length; j++){
            if(sub.has(s[j])) break
            sub.add(s[j])
        }
        if(sub.size>maxCount) maxCount=sub.size
    }
    return maxCount
};