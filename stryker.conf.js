module.exports = (config) => {
  config.set({
    files: [
      'src/**/*.test.js',
      { pattern: 'src/**/*.js', included: false, mutated: true }
    ],
    testRunner: 'jest',
    mutator: 'javascript',
    coverageAnalysis: 'off',
    plugins: [
      'stryker-jest-runner',
      'stryker-html-reporter',
      'stryker-babel-transpiler',
      'stryker-javascript-mutator'
    ],
    babelrcFile: '.babelrc',
    transpilers: ['babel'],
    jest: {
      project: 'react'
    }
  });
};
