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
var reverseKGroup = function(head, k) {
    
    let temp = head;
    let prevNode = null;

    while (temp != null) {
        let kthNode = findKthNode(temp, k);
        
        if (kthNode === null) {
            if (prevNode !== null)
                prevNode.next = temp;
            break;
        }   

        let nextNode = kthNode.next;
        kthNode.next = null;
        reverseLinkedList(temp);

        if (head === temp) {
            head = kthNode;
        } else {
            prevNode.next = kthNode;
        }

        prevNode = temp;
        temp = nextNode;
    }

    return head;
};

function findKthNode(head, k) {
    let temp = head;

    while (k > 1 && temp != null) {
        k--;
        temp = temp.next;
    }

    return temp;
}

function reverseLinkedList(head) {
    let temp = head;
    let prev = null;

    while (temp !== null) {
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    
    return prev;
}
