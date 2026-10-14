/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let maxCount = 0;
    const prefixes = new Set();

    for (let i=0; i<arr1.length;i++) {
        const s = String(arr1[i]);
        for (let j=1; j<=s.length; j++) {
            prefixes.add(s.slice(0, j));
        }
    }

    for (let i=0; i<arr2.length; i++) {
        const s=String(arr2[i]);
        for (let j=s.length; j>=1; j--) {      
            const x = s.slice(0, j);
            if (prefixes.has(x)) {
                maxCount = Math.max(maxCount, x.length);
                break;                              
            }
        }
    }

    return maxCount;
};