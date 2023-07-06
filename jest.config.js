// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  coverageDirectory: 'reports',
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
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  // globals: {
  //   'ts-jest': {
  //     allowSyntheticDefaultImports: true,
  //     tsconfig: '<rootDir>/tsconfig.spec.json',
  //     diagnostics: {
  //       ignoreCodes: ['TS151001'],
  //     },
  //   },
  // },
  // Do not ignore librairies such as ionic, ionic-native or bootstrap to transform them during unit testing.
  transformIgnorePatterns: ['node_modules/(?!@angular|@ngx-translate|@ng-bootstrap|@ngneat)'],
};
