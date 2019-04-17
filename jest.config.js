module.exports = {
  verbose: true,
  preset: "react-native",
  cacheDirectory: "./cache",
  coverageThreshold: {
    global: {
      statements: 80
    }
  },
  transformIgnorePatterns: [
    "/node_modules/(?!react-native)"
  ],
  setupFilesAfterEnv: [
    "./setupTests.js"
  ],
};
