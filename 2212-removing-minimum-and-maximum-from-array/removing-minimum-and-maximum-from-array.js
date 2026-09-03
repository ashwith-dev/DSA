/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let sum = 0
    let minNum = Infinity
    let maxNum = -Infinity
    let n =nums.length
    for(let i=0;i<n;i++){
        if(nums[i]<minNum) minNum = nums[i]
        if(nums[i]>maxNum) maxNum = nums[i]
    }
    minNum=nums.indexOf(minNum)
    maxNum=nums.indexOf(maxNum)
    let front = Math.max(minNum, maxNum) + 1;
    let back = n - Math.min(minNum, maxNum);
    let both = Math.min(minNum,  maxNum) + 1 + n - Math.max(minNum, maxNum);

    return Math.min(front, back, both);
};