class Solution {
    public int findPeakElement(int[] nums) {

        int length = nums.length;

        if(length == 1)
            return 0;

        if(nums[0] > nums[1])
            return 0;
        
        if(nums[length - 1] > nums[length - 2])     
            return length - 1;
        
        int low = 1;
        int high = length - 2;

        while(low <= high)
        {
            int mid = low + (high - low) / 2;

            if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1])
                return mid;
            else if(nums[mid - 1] <= nums[mid])
                low = mid + 1;
            else
                high = mid - 1;
        }

        return -1;
    }
}