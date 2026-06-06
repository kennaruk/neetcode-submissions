class TreeNode {
    childrens?: Map<string, TreeNode> = new Map()
    isWord?: boolean = false
}
class PrefixTree {
    private root: TreeNode = new TreeNode()

    constructor() {}

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let node = this.root
        for (let i = 0 ; i < word.length ; i++) {
            const character = word[i]
            if (!node.childrens?.get(character)) {
                node.childrens.set(character, new TreeNode())
            }
            node = node.childrens.get(character)
        }
        node.isWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let node = this.root
        for (let i = 0 ; i < word.length ; i++) {
            const character = word[i]
            if (!node.childrens.get(character)) {
                return false
            }
            node = node.childrens.get(character)
            
            if (i === word.length - 1) 
                return node.isWord
        }
        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let node = this.root
        for (let i = 0 ; i < prefix.length ; i++) {
            const character = prefix[i]
            if (!node.childrens.get(character)) {
                return false
            }
            node = node.childrens.get(character)
            
            if (i === prefix.length - 1) 
                if (node.childrens.size > 0 || node.isWord) return true
        }
        return false;
    }
}
