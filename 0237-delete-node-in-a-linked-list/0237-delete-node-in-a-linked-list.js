/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    
    let curr = node;
    let next = node.next;

    curr.val = next.val;
    curr.next = next.next;

    next.next = null;
};