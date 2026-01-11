const timeLimit = require('./solution');

// Test case 1: Function exceeds time limit
async function test1() {
    const fn = async (n) => {
        await new Promise(res => setTimeout(res, 100));
        return n * n;
    };
    const limited = timeLimit(fn, 50);
    const start = performance.now();
    try {
        await limited(5);
        console.log("Test 1 FAILED: Should have rejected");
    } catch (err) {
        const time = Math.floor(performance.now() - start);
        console.log(`Test 1: ${err === "Time Limit Exceeded" && time >= 50 ? "PASSED" : "FAILED"}`);
        console.log(`  Error: ${err}, Time: ${time}ms`);
    }
}

// Test case 2: Function completes within time limit
async function test2() {
    const fn = async (n) => {
        await new Promise(res => setTimeout(res, 100));
        return n * n;
    };
    const limited = timeLimit(fn, 150);
    const start = performance.now();
    try {
        const result = await limited(5);
        const time = Math.floor(performance.now() - start);
        console.log(`Test 2: ${result === 25 ? "PASSED" : "FAILED"}`);
        console.log(`  Result: ${result}, Time: ${time}ms`);
    } catch (err) {
        console.log(`Test 2 FAILED: ${err}`);
    }
}

// Test case 3: Multiple arguments
async function test3() {
    const fn = async (a, b) => {
        await new Promise(res => setTimeout(res, 120));
        return a + b;
    };
    const limited = timeLimit(fn, 150);
    const start = performance.now();
    try {
        const result = await limited(5, 10);
        const time = Math.floor(performance.now() - start);
        console.log(`Test 3: ${result === 15 ? "PASSED" : "FAILED"}`);
        console.log(`  Result: ${result}, Time: ${time}ms`);
    } catch (err) {
        console.log(`Test 3 FAILED: ${err}`);
    }
}

// Test case 4: Function immediately throws error
async function test4() {
    const fn = async () => {
        throw "Error";
    };
    const limited = timeLimit(fn, 1000);
    const start = performance.now();
    try {
        await limited();
        console.log("Test 4 FAILED: Should have rejected");
    } catch (err) {
        const time = Math.floor(performance.now() - start);
        console.log(`Test 4: ${err === "Error" ? "PASSED" : "FAILED"}`);
        console.log(`  Error: ${err}, Time: ${time}ms`);
    }
}

// Run all tests
async function runTests() {
    console.log("Running Promise Time Limit tests...\n");
    await test1();
    await test2();
    await test3();
    await test4();
}

runTests();
