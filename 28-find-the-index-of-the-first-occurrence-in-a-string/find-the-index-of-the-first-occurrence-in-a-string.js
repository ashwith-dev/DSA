/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = haystack.length
    let m = needle.length
    if(haystack == needle) return 0
    for(let i=0; i<=n-m; i++){
        let str = haystack.slice(i,i+m)
        if(str == needle) return i
    }
    return -1
};