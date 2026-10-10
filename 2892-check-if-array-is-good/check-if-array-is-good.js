/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let freq = new Map()
    let maxEle = Number.MIN_VALUE
    let n = nums.length
    for(let i=0;i<n;i++){
        freq.set(nums[i],(freq.get(nums[i]) || 0) + 1)
        if(nums[i]>maxEle) maxEle = nums[i]
    }
    let itIs = true
    for(let i=1; i<=n-1; i++){
        if(!freq.has(i)){
            return false
        }
    }

    freq.get(maxEle) == 2 && maxEle == n-1 ? itIs = true : itIs = false

    return itIs
};