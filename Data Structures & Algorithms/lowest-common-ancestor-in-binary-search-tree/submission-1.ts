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

// they're all in the left side
// they're all in the right side
// they're in both left and right

// two pointers? 

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        if (!root || !p || !q) return null;

        const isLeftSide = p.val < root.val && q.val < root.val
        const isRightSide = p.val > root.val && q.val > root.val

        if (isLeftSide) {
            return this.lowestCommonAncestor(root.left, p, q)
        } else if (isRightSide) {
            return this.lowestCommonAncestor(root.right, p, q)
        } else return root

    }
}
