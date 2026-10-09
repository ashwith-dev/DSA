/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let minPro = nums[0]
    let maxPro = nums[0]
    let ans = nums[0]
    for(let i=1; i<nums.length; i++){
        if(nums[i]<0){
            [maxPro,minPro] = [minPro,maxPro]
        }
        minPro = Math.min(nums[i],minPro*nums[i])
        maxPro = Math.max(nums[i],maxPro*nums[i])
        ans = Math.max(ans,maxPro)
    }
    return ans 
};