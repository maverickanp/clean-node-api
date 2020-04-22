module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', 'test/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
