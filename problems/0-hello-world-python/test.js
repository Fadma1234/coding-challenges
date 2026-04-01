const { execSync } = require("child_process");

describe("Hello, World!", () => {
  test("prints Hello, world! exactly", () => {
    const output = execSync("python3 solution.py", { cwd: __dirname }).toString();
    expect(output).toBe("Hello, world!\n");
  });
});
