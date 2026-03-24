const TimeMap = require('./solution');

describe('TimeMap', () => {
    test('Example 1: Basic set and get operations', () => {
        const timeMap = new TimeMap();
        timeMap.set("alice", "happy", 1);
        expect(timeMap.get("alice", 1)).toBe("happy");
        expect(timeMap.get("alice", 2)).toBe("happy");
        timeMap.set("alice", "sad", 3);
        expect(timeMap.get("alice", 3)).toBe("sad");
    });

    test('Get from non-existent key returns empty string', () => {
        const timeMap = new TimeMap();
        expect(timeMap.get("nonexistent", 100)).toBe("");
    });

    test('Get with timestamp less than any set timestamp returns empty string', () => {
        const timeMap = new TimeMap();
        timeMap.set("key1", "value1", 10);
        expect(timeMap.get("key1", 5)).toBe("");
    });

    test('Multiple keys with different timestamps', () => {
        const timeMap = new TimeMap();
        timeMap.set("key1", "value1", 1);
        timeMap.set("key2", "value2", 2);
        timeMap.set("key1", "value3", 3);
        
        expect(timeMap.get("key1", 1)).toBe("value1");
        expect(timeMap.get("key1", 2)).toBe("value1");
        expect(timeMap.get("key1", 3)).toBe("value3");
        expect(timeMap.get("key2", 2)).toBe("value2");
        expect(timeMap.get("key2", 3)).toBe("value2");
    });

    test('Get with exact timestamp match', () => {
        const timeMap = new TimeMap();
        timeMap.set("a", "hello", 1);
        timeMap.set("a", "world", 2);
        expect(timeMap.get("a", 1)).toBe("hello");
        expect(timeMap.get("a", 2)).toBe("world");
    });

    test('Get with timestamp greater than all set timestamps', () => {
        const timeMap = new TimeMap();
        timeMap.set("key", "value1", 5);
        timeMap.set("key", "value2", 10);
        expect(timeMap.get("key", 1000)).toBe("value2");
    });

    test('Multiple values at same key with increasing timestamps', () => {
        const timeMap = new TimeMap();
        timeMap.set("x", "a", 100);
        timeMap.set("x", "b", 200);
        timeMap.set("x", "c", 300);
        expect(timeMap.get("x", 100)).toBe("a");
        expect(timeMap.get("x", 150)).toBe("a");
        expect(timeMap.get("x", 200)).toBe("b");
        expect(timeMap.get("x", 250)).toBe("b");
        expect(timeMap.get("x", 300)).toBe("c");
        expect(timeMap.get("x", 500)).toBe("c");
    });

    test('Single character strings', () => {
        const timeMap = new TimeMap();
        timeMap.set("a", "b", 1);
        expect(timeMap.get("a", 1)).toBe("b");
    });

    test('Long value strings', () => {
        const timeMap = new TimeMap();
        const longValue = "a".repeat(100);
        timeMap.set("key", longValue, 1);
        expect(timeMap.get("key", 1)).toBe(longValue);
    });
});
