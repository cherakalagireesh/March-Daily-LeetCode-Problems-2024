/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head == null || head.next == null)
            return head;

        let pointer1 = head;
        let pointer2 = head.next;
        let temp = pointer2;

        while(pointer2 != null && pointer2.next != null)
        {
            pointer1.next = pointer1.next.next;
            pointer2.next = pointer2.next.next;

            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        }

        pointer1.next = temp;
    
        return head;
};