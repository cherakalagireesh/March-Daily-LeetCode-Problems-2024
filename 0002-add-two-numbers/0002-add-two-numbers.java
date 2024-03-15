/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        
        ListNode temp1 = l1;
        ListNode temp2 = l2;
        ListNode dummyNode = new ListNode(-1);
        ListNode temp3 = dummyNode;
        int carry = 0;

        while(temp1 != null || temp2 != null || carry != 0)
        {
            int sum = 0;

            if(temp1 != null)
            {
                sum += temp1.val;
                temp1 = temp1.next;
            }

            if(temp2 != null)
            {
                sum += temp2.val;
                temp2 = temp2.next;
            }

            sum += carry;
            carry = sum / 10;

            temp3.next = new ListNode(sum % 10);
            temp3 = temp3.next;
        }

        return dummyNode.next;
    }
}