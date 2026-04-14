const { execSync } = require("child_process");

describe("Sort Ascending", () => {
  test("sorts words, numbers, and decimals", () => {
    const output = execSync("python3 solution.py", { cwd: __dirname }).toString();
    expect(output).toBe("['apple', 'banana', 'blueberry', 'cherry', 'kiwi', 'pear', 'watermelon', 'zucchini']\n[1, 2, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7, 9, 11, 19]\n[2.82, 3.14, 6.433, 7.9, 21.554, 21.555]\n");
  });
});