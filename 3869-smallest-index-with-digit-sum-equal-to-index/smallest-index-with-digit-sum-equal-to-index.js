/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i=0; i<nums.length; i++){
        let num = String(nums[i])
        let sum = 0
        for(let j=0;j<num.length; j++){
            sum+=Number(num[j])
        }
        if(sum==i) return i
    }
    return -1
};