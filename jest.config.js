module.exports = {
  clearMocks: true,

  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  coverageDirectory: 'coverage',

  moduleFileExtensions: ['js', 'json', 'jsx', 'jpg', 'jpeg', 'png', 'JPG', 'PNG'],

  setupFiles: ['<rootDir>/enzyme.config.js'],

  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  testURL: 'http://localhost',

  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|JPG|PNG)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/StyleMock.js'
  }
};
