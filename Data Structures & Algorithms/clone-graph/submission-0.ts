/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        const map = new Map()

        const dfs = (node: Node) => {
            if (!node) return null;

            if (map.has(node)) return map.get(node)

            const newNode = new Node(node.val)
            map.set(node, newNode)
            for (const nei of node.neighbors) {
                newNode.neighbors.push(dfs(nei))
            } 
            return newNode
        }

        return dfs(node)
    }
}
