/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let freq = new Set(nums);
    let maxCount = 0;
    for (let num of freq) {
        if (!freq.has(num - 1)) {
            let count = 1;
            while (freq.has(num + count)) {
                count++;
            }
            if(maxCount<count) maxCount = count
        }
    }
    return maxCount;
};