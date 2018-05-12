module.exports = {
  verbose: true,
  preset: 'react-native',
  rootDir: '../../',
  setupFiles: ['<rootDir>/config/testSetup.js'],
  testMatch: ['**/__tests__/*.test.native.js'],
  moduleFileExtensions: ['js', 'json', 'native.js']
}
