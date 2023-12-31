/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  moduleNameMapper: {
    "common/(.*)": "<rootDir>/src/common/$1",
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/scripts/",
  ],
};
