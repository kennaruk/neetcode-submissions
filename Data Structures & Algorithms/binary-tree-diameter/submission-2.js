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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (!root) return 0;

        return Math.max(
            this.diameterOfBinaryTree(root.left),
            this.diameterOfBinaryTree(root.right),
            this.depth(root.left) + this.depth(root.right)
        );
    }

    depth(root) {
        if (!root) return 0;


        return Math.max(this.depth(root.left), this.depth(root.right)) + 1
    }
}
