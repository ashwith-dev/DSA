/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let list = new Map()
    for(let i=0;i<nums.length;i++){
        let compliment = target-nums[i]
        if(list.has(compliment)){
            return [list.get(compliment),i]
        }
        list.set(nums[i],i)
    }
};