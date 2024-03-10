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
    public ListNode oddEvenList(ListNode head) {
        
        if(head == null || head.next == null)
            return head;

        ListNode pointer1 = head;
        ListNode pointer2 = head.next;
        ListNode temp = pointer2;

        while(pointer2 != null && pointer2.next != null)
        {
            pointer1.next = pointer1.next.next;
            pointer2.next = pointer2.next.next;

            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        }

        pointer1.next = temp;
    
        return head;
    }
}