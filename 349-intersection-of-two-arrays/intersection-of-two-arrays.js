/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let list = new Set(nums1)
    let unique = new Set()
    for(let i=0; i<nums2.length; i++){
        if(list.has(nums2[i])){
            unique.add(nums2[i])
        }
    }
    return [...unique]
    
};