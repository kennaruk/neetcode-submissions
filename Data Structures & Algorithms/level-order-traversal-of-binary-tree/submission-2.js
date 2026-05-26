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
    levelOrder(root) {
        const result = []
        if (!root) return result;

        const queue = []
        queue.push(root)
        console.debug('queue:', queue)
        while (queue.length) {
            let level = [];
            console.debug('-----')
            const currentLength = queue.length;
            for (let i = 0 ; i < currentLength ; i++) {
                const node = queue.shift();
                console.debug('node:', node)
                if (node) {
                    level.push(node.val);

                    queue.push(node.left);
                    queue.push(node.right);
                }
            }
            if (level.length) result.push(level)
        }

        return result;
    }
}
