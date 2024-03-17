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
    public ListNode rotateRight(ListNode head, int k) {
        
        if(head == null || head.next == null)
            return head;

        ListNode tail = head;
        int len = 1;
        
        while(tail.next != null)
        {
            tail = tail.next;
            len++;
        }

        if(k % len == 0)
            return head;

        tail.next = head;
        ListNode newLastNode = findNthNode(head, len - (k % len));

        head = newLastNode.next;
        newLastNode.next = null;
    
        return head;
    }

    public ListNode findNthNode(ListNode head, int n)
    {

        ListNode temp = head;
        int cnt = 1;

        while( temp != null)
        {
            if(cnt == n)
                return temp;

            cnt++;
            temp = temp.next;
        }

        return temp;
    }
}