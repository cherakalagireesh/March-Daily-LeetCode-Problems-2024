class Solution {
    public List<String> findRepeatedDnaSequences(String s) {
        
        Set<String> set = new HashSet<>();
        List<String> result = new ArrayList<>();

        if(s.length() < 10)
            return result;

        int right = 0;
        StringBuilder sb = new StringBuilder();

        while(right < 10)
            sb.append(s.charAt(right++));

        set.add(sb.toString());

        while(right < s.length())
        {
            sb.deleteCharAt(0);
            sb.append(s.charAt(right++));

            if(set.contains(sb.toString()) && !result.contains(sb.toString()))
                result.add(sb.toString());
            
            set.add(sb.toString());

        }

        return result;

    }
}