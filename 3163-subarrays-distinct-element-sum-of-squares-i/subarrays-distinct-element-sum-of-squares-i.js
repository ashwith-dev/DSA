/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let count = 0
    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            let freq = new Set(nums.slice(i,j+1))
            count += freq.size ** 2
        }
    }
    return count
};