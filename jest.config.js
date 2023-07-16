module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@config': ['<rootDir>/src/app/@config'],
    '@config/(.*)': ['<rootDir>/src/app/@config/$1'],
    '@modules': ['<rootDir>/src/app/@modules'],
    '@modules/(.*)': ['<rootDir>/src/app/@modules/$1'],
    '@shared': ['<rootDir>/src/app/@shared'],
    '@shared/(.*)': ['<rootDir>/src/app/@shared/$1'],
    '@env': '<rootDir>/src/environments/environment',
    '@translations': '<rootDir>/src/translations',
  },
};
