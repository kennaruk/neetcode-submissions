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
    goodNodes(root: TreeNode | null): number {
        // traverse
        // - keep max

        // if the current max value is less than the val -> keep result
        const result = [];

        const traverse = (node: TreeNode, max: number) => {
            if (!node) return;
            if (node.val >= max) {
                result.push(node.val)
            }
            const newMax = Math.max(max, node.val)
            traverse(node.left, newMax)
            traverse(node.right, newMax)
        }

        traverse(root, Number.MIN_SAFE_INTEGER)

        return result.length
    }
}
