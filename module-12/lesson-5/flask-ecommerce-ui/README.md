# Addint testing with Jest

1. Install the following libs
```bash
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
npm i @testing-library/react
```

2. Configure babel.
    Create a `.babelrc` file in the project root directory and add the following code:
```json
    {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
```

3. Create a test file.
Jest automatically run files with `.test.js` or `.spec.js` extensions (or fils in a `__test__` directory).
Create a new file with `.test.js` extension (`App.test.js`) and let's add our testing here.

4. Run the tests
Add a script to the `package.json` file to make it easier
```json
    "scripts": {
        "test": "jest"
    }
```
