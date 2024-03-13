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
var sortList = function(head) {
    
    let array = new Array();
    let temp = head;

    while(temp != null)
    {
        array.push(temp.val);
        temp = temp.next;
    }

    array.sort((a, b) => a - b);

    temp = head;
    let index = 0;

    while(temp != null)
    {
        temp.val = array[index++];
        temp = temp.next;
    }

    return head;
};