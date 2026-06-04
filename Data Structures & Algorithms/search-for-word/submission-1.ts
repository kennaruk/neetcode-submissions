class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const rowLength = board.length;
        const columnLength = board[0].length;

        // traverse(rowIndex, columnIndex, wordIndex)
        // if borad[r][c] === word[i] -> #
        // - #
        // - return true?

        const traverse = (rowIndex: number, columnIndex: number, wordIndex: number): boolean => {
            if (wordIndex === word.length) return true;

            if (rowIndex < 0 || rowIndex >= rowLength) return false;
            if (columnIndex < 0 || columnIndex >= columnLength) return false;

            const boardCharacter = board[rowIndex][columnIndex]
            if (boardCharacter === '#') return false;

            const wordCharacter = word[wordIndex]
            if (boardCharacter === wordCharacter) {
                board[rowIndex][columnIndex] = '#'

                // up, left, right, bottom
                const nextWordIndex = wordIndex + 1
                const result = traverse(rowIndex + 1, columnIndex, nextWordIndex) ||
                    traverse(rowIndex - 1, columnIndex, nextWordIndex) ||
                    traverse(rowIndex, columnIndex + 1, nextWordIndex) ||
                    traverse(rowIndex, columnIndex - 1, nextWordIndex)
                board[rowIndex][columnIndex] = word[wordIndex]
                return result;
            }

            return false
        }

        for (let r = 0 ; r < rowLength ; r++) {
            for (let c = 0 ; c < columnLength ; c++)
                if (traverse(r, c, 0)) return true;
        }
        return false
    }
}
