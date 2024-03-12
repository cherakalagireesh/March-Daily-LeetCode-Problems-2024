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
var deleteMiddle = function(head) {
    
    let cnt = 0;
    let temp = head;

    while(temp !== null)
    {
        cnt++;
        temp = temp.next;
    }

    if(cnt === 1)
        return head.next;

    let mid = Math.trunc((cnt + 2) / 2);

    temp = head;
    prev = null;

    while(temp !== null)
    {
        if(mid === 1)
            break;
        
        prev = temp;
        temp = temp.next;
        mid--;
    }

    prev.next = temp.next;
    temp.next = null;
    return head;
};