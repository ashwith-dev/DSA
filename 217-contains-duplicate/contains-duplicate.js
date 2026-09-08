/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let list = new Map()
    for(let i=0; i<nums.length; i++){
        list.set(nums[i], (list.get(nums[i]) || 0) + 1)
        if(list.get(nums[i]) > 1) return true 
    }
    return false
};