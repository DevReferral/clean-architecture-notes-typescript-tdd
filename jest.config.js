/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  collectCoverageFrom: ['test/**/*.test.ts/**', '!test/**/helpers/**'],
};
