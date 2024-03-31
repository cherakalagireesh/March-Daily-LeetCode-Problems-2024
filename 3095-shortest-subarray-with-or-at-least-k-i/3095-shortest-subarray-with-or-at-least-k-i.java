class Solution {
    public int minimumSubarrayLength(int[] nums, int k) {
        
        int min = Integer.MAX_VALUE;

        for(int i = 0 ; i < nums.length ; i++)
        {
            int orValue = 0;
            for(int j = i ; j < nums.length ; j++)
            {
                orValue = orValue | nums[j];
                
                if(orValue >= k && j - i + 1 < min)
                    min = j - i + 1;
            }
        }

        return min == Integer.MAX_VALUE ? -1 : min;
    }
}