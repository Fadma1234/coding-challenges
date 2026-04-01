const { execSync } = require("child_process");

describe("What is Python?", () => {
  test("prints the first 20 digits of pi", () => {
    const output = execSync("python3 solution.py", { cwd: __dirname }).toString();
    expect(output).toBe("3.14159265358979323846\n");
  });
});
