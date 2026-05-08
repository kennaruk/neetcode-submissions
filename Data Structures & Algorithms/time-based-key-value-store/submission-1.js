/*
*
* [key]: [{
        value,
        timestamp
    }]
*/
class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const current = this.keyStore.get(key) ?? []
        current.push({
            value,
            timestamp,
        })
        this.keyStore.set(key, current)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const current = this.keyStore.get(key) ?? []

        let result = "";
        for (const element of current) {
            if (element.timestamp > timestamp) break;
            result = element.value
        }

        return result;
    }
}
