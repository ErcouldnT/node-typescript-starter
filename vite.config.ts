// Configure Vitest (https://vitest.dev/config/)
/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
    reporters: ["default"],
    coverage: {
      enabled: true,
      reporter: ["html"],
      include: ["src"],
      reportsDirectory: "coverage",
    },
  },
});
