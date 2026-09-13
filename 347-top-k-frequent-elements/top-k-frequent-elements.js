/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let list = new Map()
    let arr = []
    for(let i=0;i<nums.length;i++){
        list.set(nums[i],(list.get(nums[i]) || 0) + 1)
    }
    while(arr.length<k){
        let freq = 0
        let key1 = 0
        for(let [key,value] of list){
            if(value>freq){
                freq=value
                key1 = key
            }
        }
        arr.push(key1)
        list.set(key1,0)
         
    }
    return arr
};