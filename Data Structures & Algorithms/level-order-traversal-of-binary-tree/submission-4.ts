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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const queue = [root]
        const result = []

        console.log('queue:', queue)
        while (queue.length) {
            console.log('queue:', queue)
            const sub = []

            const length = queue.length;
            for (let i = 0 ; i < length ; i++) {
                const shifted = queue.shift()
                if (!shifted) break;
                sub.push(shifted.val)
                
                if (shifted.left) queue.push(shifted.left)
                if (shifted.right) queue.push(shifted.right)
            }

            if (sub.length > 0) result.push(sub);
        }

        return result;
    }
}
