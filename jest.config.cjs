/* exported config */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        isolatedModules: true,
        diagnostics: {
          exclude: ["**"],
        },
      },
    ],
  },
  reporters: ["default", "jest-junit"],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "!**/node_modules/**",
    "scripts/**/*.ts",
    "!scripts/**/*.test.ts",
    "!scripts/**/*.d.ts",
    "!scripts/module.ts",
    "!scripts/EJHCONST.ts",
    "!scripts/DownloadJournal.ts",
    "!scripts/Logger.ts",
  ],
};
