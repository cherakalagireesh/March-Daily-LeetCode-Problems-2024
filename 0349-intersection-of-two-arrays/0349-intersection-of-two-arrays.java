class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int length1 = nums1.length;
        int length2 = nums2.length;
        int result[] = new int[length1 + length2];
        int k = 0;
        int i = 0;
        int j = 0;

        while(i < length1 && j < length2)
        {
            if(nums1[i] == nums2[j])
            {
                if(k == 0 || result[k - 1] != nums1[i])
                    result[k++] = nums1[i];
                
                i++;
                j++;
            }
            else if(nums1[i] < nums2[j])
                i++;
            else
                j++;
        }

        return Arrays.copyOfRange(result, 0, k);
    }
}