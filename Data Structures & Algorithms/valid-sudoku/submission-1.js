class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // 0, 1, 2
        // 1, 2, 3
        // 2, 3, 4

        const seenMap = new Map();
        for (let i = 0 ; i < board.length ; i++) {
            for (let j = 0 ; j < board[i].length ; j++) {
                const cell = board[i][j]
                if (cell == ".") continue;

                const rowKey = `row-${i}`;
                const colKey = `col-${j}`;
                const boxKey = `box-${Math.floor(i / 3)}-${Math.floor(j / 3)}`
                
                if (!seenMap.get(rowKey)) seenMap.set(rowKey, new Set())
                const rowSet = seenMap.get(rowKey)
                if (rowSet.has(cell)) return false
                else rowSet.add(cell)

                if (!seenMap.get(colKey)) seenMap.set(colKey, new Set())
                const colSet = seenMap.get(colKey)
                if (colSet.has(cell)) return false
                else colSet.add(cell)

                if (!seenMap.get(boxKey)) seenMap.set(boxKey, new Set())
                const boxSet = seenMap.get(boxKey)
                if (boxSet.has(cell)) return false
                else boxSet.add(cell)
            }
        }

        return true
    }
}
