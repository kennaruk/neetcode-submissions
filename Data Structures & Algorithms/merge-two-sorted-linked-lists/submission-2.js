/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const head = { val:0, next: null}

        let tmp = head
        while (list1 && list2) {
            if (list1.val < list2.val) {
                tmp.next = list1
                list1 = list1.next
            } else {
                tmp.next = list2
                list2 = list2.next
            }
            tmp = tmp.next
        }

        if (list1) {
            tmp.next = list1;
        } else {
            tmp.next = list2;
        }

        return head.next
    }
}
