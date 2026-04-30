class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let currentLow = prices[0];
        let maxProfit = 0;
        for (let i = 1 ; i < prices.length ; i++) {
            
            currentLow = Math.min(prices[i], currentLow);
            const profit = prices[i] - currentLow
            maxProfit = Math.max(profit, maxProfit)
        }
        return maxProfit
    }
}
