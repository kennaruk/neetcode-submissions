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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const result = []
        const queue = []

        if (!root) return result
        
        queue.push(root)

        // exploration
        while (queue.length > 0) {
            const length = queue.length

            const nextQueue = []
            for (let i = 0 ; i < length ; i++) {
                const shifted = queue.shift()
                if (queue.length === 0) result.push(shifted.val)

                if (shifted.left) nextQueue.push(shifted.left)
                if (shifted.right) nextQueue.push(shifted.right)
            }
            console.debug('[debug] nextQueue:', nextQueue)
            queue.push(...nextQueue)
        }

        return result

        // bfs
        
        // push the node

        // explore
        // - explore queue 
        // - if it's the last item -> push to result
        // meanwhile -> push left, right
        // done explored -> push above step to the main queue
    }
}
