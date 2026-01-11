/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time in milliseconds
 * @return {boolean}
 */

class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const currentTime = Date.now();
        const expirationTime = currentTime + duration;
        
        // Check if key exists and is not expired
        let keyExisted = false;
        if (this.cache.has(key)) {
            const entry = this.cache.get(key);
            if (entry.expirationTime > currentTime) {
                keyExisted = true;
            }
            // Clear the old timeout if it exists
            if (entry.timeoutId) {
                clearTimeout(entry.timeoutId);
            }
        }
        
        // Set the new timeout
        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        
        // Store the new value and expiration time
        this.cache.set(key, {
            value,
            expirationTime,
            timeoutId
        });
        
        return keyExisted;
    }

    get(key) {
        const currentTime = Date.now();
        
        if (this.cache.has(key)) {
            const entry = this.cache.get(key);
            if (entry.expirationTime > currentTime) {
                return entry.value;
            }
            // Key is expired, remove it
            clearTimeout(entry.timeoutId);
            this.cache.delete(key);
        }
        
        return -1;
    }

    count() {
        const currentTime = Date.now();
        let count = 0;
        
        for (const [key, entry] of this.cache) {
            if (entry.expirationTime > currentTime) {
                count++;
            }
        }
        
        return count;
    }
}

module.exports = TimeLimitedCache;
