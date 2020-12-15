module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "json", "jsx", "ts", "node"],

  // The test environment that will be used for testing
  testEnvironment: "node",

  moduleDirectories: ['node_modules', '.'],

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
};