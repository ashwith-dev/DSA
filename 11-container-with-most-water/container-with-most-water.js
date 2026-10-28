/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let largest = 0
    
    while(left<right){
        let width = right-left
        let h = Math.min(height[left], height[right])
        let water = width * h
        largest = Math.max(largest, water)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return largest
};