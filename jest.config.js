module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/test"],
  testMatch: ["**/*.test.ts"],
  transform: {
    // "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(t|j)sx?$": "ts-jest", // https://stackoverflow.com/a/65720212
  },
};
