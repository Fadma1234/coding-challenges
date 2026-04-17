const { execSync } = require("child_process");

describe("Comments", () => {
  test("prints the correct lines while ignoring commented-out code", () => {
    const output = execSync("python3 solution.py", { cwd: __dirname }).toString();
    expect(output).toBe("I belong here.\nI also belong here.\nMe too!\n");
  });
});
