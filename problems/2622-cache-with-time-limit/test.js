const TimeLimitedCache = require('./solution');

// Helper function to execute actions with delays
async function executeActions(actions, values, timeDelays) {
    const cache = new TimeLimitedCache();
    const results = [];
    let currentTime = 0;

    for (let i = 0; i < actions.length; i++) {
        // Wait for the specified delay
        const delay = timeDelays[i] - currentTime;
        if (delay > 0) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        currentTime = timeDelays[i];

        const action = actions[i];
        const value = values[i];

        if (action === 'TimeLimitedCache') {
            results.push(null);
        } else if (action === 'set') {
            const [key, val, duration] = value;
            results.push(cache.set(key, val, duration));
        } else if (action === 'get') {
            const [key] = value;
            results.push(cache.get(key));
        } else if (action === 'count') {
            results.push(cache.count());
        }
    }

    return results;
}

// Test case 1: Example 1 from problem description
async function test1() {
    const actions = ["TimeLimitedCache", "set", "get", "count", "get"];
    const values = [[], [1, 42, 100], [1], [], [1]];
    const timeDelays = [0, 0, 50, 50, 150];
    
    const results = await executeActions(actions, values, timeDelays);
    const expected = [null, false, 42, 1, -1];
    
    const passed = JSON.stringify(results) === JSON.stringify(expected);
    console.log(`Test 1: ${passed ? "PASSED" : "FAILED"}`);
    if (!passed) {
        console.log(`  Expected: ${JSON.stringify(expected)}`);
        console.log(`  Got: ${JSON.stringify(results)}`);
    }
}

// Test case 2: Example 2 from problem description
async function test2() {
    const actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"];
    const values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []];
    const timeDelays = [0, 0, 40, 50, 120, 200, 250];
    
    const results = await executeActions(actions, values, timeDelays);
    const expected = [null, false, true, 50, 50, -1, 0];
    
    const passed = JSON.stringify(results) === JSON.stringify(expected);
    console.log(`Test 2: ${passed ? "PASSED" : "FAILED"}`);
    if (!passed) {
        console.log(`  Expected: ${JSON.stringify(expected)}`);
        console.log(`  Got: ${JSON.stringify(results)}`);
    }
}

// Test case 3: Multiple keys
async function test3() {
    const actions = ["TimeLimitedCache", "set", "set", "get", "get", "get"];
    const values = [[], [1, 10, 100], [2, 20, 50], [1], [2], [1]];
    const timeDelays = [0, 0, 0, 30, 60, 120];
    
    const results = await executeActions(actions, values, timeDelays);
    const expected = [null, false, false, 10, -1, -1];
    
    const passed = JSON.stringify(results) === JSON.stringify(expected);
    console.log(`Test 3: ${passed ? "PASSED" : "FAILED"}`);
    if (!passed) {
        console.log(`  Expected: ${JSON.stringify(expected)}`);
        console.log(`  Got: ${JSON.stringify(results)}`);
    }
}

// Test case 4: Count functionality
async function test4() {
    const actions = ["TimeLimitedCache", "set", "set", "set", "count", "count"];
    const values = [[], [1, 10, 100], [2, 20, 100], [3, 30, 100], [], []];
    const timeDelays = [0, 0, 0, 0, 50, 120];
    
    const results = await executeActions(actions, values, timeDelays);
    const expected = [null, false, false, false, 3, 0];
    
    const passed = JSON.stringify(results) === JSON.stringify(expected);
    console.log(`Test 4: ${passed ? "PASSED" : "FAILED"}`);
    if (!passed) {
        console.log(`  Expected: ${JSON.stringify(expected)}`);
        console.log(`  Got: ${JSON.stringify(results)}`);
    }
}

// Run all tests
async function runTests() {
    console.log("Running TimeLimitedCache tests...\n");
    await test1();
    await test2();
    await test3();
    await test4();
}

runTests();
