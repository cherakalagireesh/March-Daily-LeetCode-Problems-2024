/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

    let length = nums.length;

    if(length === 1 || nums[0] > nums[1])
        return 0;
    
    if(nums[length - 1] > nums[length - 2])
        return length - 1;
    
    let low = 1;
    let high = length - 2;

    while(low <= high)
    {
        let mid = Math.trunc((low + high) / 2);

        if(nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1])
            return mid;
        else if(nums[mid] > nums[mid - 1])
            low = mid + 1;
        else
            high = mid - 1;
    }

    return -1;
};