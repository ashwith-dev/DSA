/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length;
    let first = -1;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            first = i;
            break;
        }
    }
    if (first === -1) {
        nums.reverse();
        return nums;
    }
    let sec = -1;
    for (let i = n - 1; i > first; i--) {
        if (nums[i] > nums[first]) {
            sec = i;
            break;
        }
    }
    [nums[first], nums[sec]] = [nums[sec], nums[first]];
    let left = first + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    return nums;
};