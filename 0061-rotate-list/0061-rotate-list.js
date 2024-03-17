/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    let array = new Array(500);
    let temp = head;
    let len = 0;

    while(temp != null)
    {
        array[len++] = temp.val;
        temp = temp.next;
    }

    temp = head;
    k = k % len;
    
    if(k === 0)
         return head;

    for(let i = 0 ; i < k ; i++)
    {
        temp.val = array[len - k + i];
        temp = temp.next;
    }
    
    for(let i = 0 ; i < len - k ; i++)
    {
        temp.val = array[i];
        temp = temp.next;
    }

    return head;
};