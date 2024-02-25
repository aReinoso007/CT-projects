# Addint testing with Jest

1. Install the following libs
```bash
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
npm i @testing-library/react
npm install -D jest-environment-jsdom
```

2. Configure babel.
    Create a `babel.config.cjs` file in the project root directory and add the following code:
```javascript
    module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```
3. Jest config file
```javascript
    module.exports = {
    testEnvironment: 'jest-environment-jsdom',
}

```

4. Modify the `.eslintrc.cjs` file
```javascript
    module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "react-app", "react-app/jest" <-- add this line
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

4. Create a test file.
Jest automatically run files with `.test.js` or `.spec.js` extensions (or fils in a `__test__` directory).
Create a new file with `.test.js` extension (`App.test.js`) and let's add our testing here.

5. Run the tests
Add a script to the `package.json` file to make it easier
```json
    "scripts": {
        "test": "jest"
    }
```
