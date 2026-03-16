const Solution = require('./solution');

function runTests() {
    const solution = new Solution();

    // Test 1
    const result1 = solution.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 10);
    console.log('Test 1 (target=10):', result1 === true ? 'PASS' : 'FAIL');

    // Test 2
    const result2 = solution.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 15);
    console.log('Test 2 (target=15):', result2 === false ? 'PASS' : 'FAIL');

    // Test 3
    const result3 = solution.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 1);
    console.log('Test 3 (target=1):', result3 === true ? 'PASS' : 'FAIL');

    // Test 4
    const result4 = solution.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 40);
    console.log('Test 4 (target=40):', result4 === true ? 'PASS' : 'FAIL');

    // Test 5
    const result5 = solution.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 5);
    console.log('Test 5 (target=5):', result5 === false ? 'PASS' : 'FAIL');
}

runTests();