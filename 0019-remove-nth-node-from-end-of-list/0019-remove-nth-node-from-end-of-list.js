/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let length = 0;
    let curr = head;

    while(curr != null)
    {
        length++;
        curr = curr.next;
    }

    let remaining = length - n;
    
    if(length === n)
        return head.next;

    curr = head;

    while(curr != null)
    {
        if(remaining === 1)
            break;
         
        curr = curr.next;
        remaining--;
    }

    curr.next = curr.next.next;

    return head;
};