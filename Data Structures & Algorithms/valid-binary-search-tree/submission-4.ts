/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        if (!root) return true;

        // traverseLeft -> store min if it's less than min -> keep traversing, otherwise return false
        // the same to right but store max

        const traverse = (root: TreeNode, left: number, right: number) => {
            if (!root) return true;
            if (root.val > left && root.val < right) {
                return traverse(root.left, left, root.val) && traverse(root.right, root.val, right)
            }
            return false;
        }

        return traverse(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    }
}
