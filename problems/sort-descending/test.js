const { execSync } = require("child_process");

describe("Sort Descending", () => {
  test("sorts words, numbers, and decimals in descending order", () => {
    const output = execSync("python3 solution.py", { cwd: __dirname }).toString();
    expect(output).toBe("['zucchini', 'watermelon', 'pear', 'kiwi', 'cherry', 'blueberry', 'banana', 'apple']\n[19, 11, 9, 7, 6, 6, 5, 5, 4, 4, 3, 2, 2, 2, 1]\n[21.555, 21.554, 7.9, 6.433, 3.14, 2.82]\n");
  });
});