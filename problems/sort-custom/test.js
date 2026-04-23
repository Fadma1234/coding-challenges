const { execSync } = require("child_process");

describe("Sort Custom", () => {
  test("sorts words by length descending and numbers by absolute value ascending", () => {
    const output = execSync("python3 solution.py", { cwd: __dirname }).toString();
    const expected = "['watermelon', 'blueberry', 'zucchini', 'cherry', 'banana', 'apple', 'kiwi', 'pear']\n[1, 2, -2, 2, -3, 4, -4, -5, 5, -6, 6, 7, 9, 11, -19]\n";
    expect(output).toBe(expected);
  });
});