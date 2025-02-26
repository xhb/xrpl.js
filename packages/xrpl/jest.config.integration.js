// Jest configuration for api
const base = require('../../jest.config.base.js')

module.exports = {
  ...base,
  roots: [...base.roots, '<rootDir>/test'],
  testTimeout: 20000,
  testMatch: [
    '<rootDir>/test/integration/**/*.test.ts',
    '<rootDir>/test/integration/*.test.ts',
  ],
  displayName: '@xhbmygod/xrpl.js',
}
