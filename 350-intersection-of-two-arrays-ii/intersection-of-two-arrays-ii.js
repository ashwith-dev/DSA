/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let arr = []
    let list = new Map()
    for(let i=0; i<nums1.length; i++){
        list.set(nums1[i], (list.get(nums1[i]) || 0) + 1)
    }
    for(let i=0; i<nums2.length; i++){
        if(list.has(nums2[i]) && list.get(nums2[i]) > 0){
            arr.push(nums2[i])
            list.set(nums2[i], (list.get(nums2[i]) || 0) - 1)
        }
    }
    return arr
};