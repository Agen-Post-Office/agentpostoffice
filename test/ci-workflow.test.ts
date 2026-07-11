import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

describe("GitHub Actions CI workflow", () => {
  it("runs every required repository gate on pull requests and main", async () => {
    const workflow = await readFile(".github/workflows/ci.yml", "utf8");

    expect(workflow).toContain("pull_request:");
    expect(workflow).toContain("push:");
    expect(workflow).toContain("branches: [main]");
    expect(workflow).toContain("uses: actions/checkout@v5");
    expect(workflow).toContain("uses: actions/setup-node@v6");
    expect(workflow).toContain("node-version: 20");
    expect(workflow).toContain("cache: npm");
    expect(workflow).toContain("run: npm ci");
    expect(workflow).toContain("run: npm test");
    expect(workflow).toContain("run: npm run check");
    expect(workflow).toContain("run: npm run build");
  });
});
