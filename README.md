# Library

## Custom webpack: [customize-cra](https://github.com/arackaf/customize-cra).

```bash
npm i customize-cra react-app-rewired --dev
```

### Tạo file `config-overrides.js` tại root, chuyển sang [react-app-rewired](https://github.com/timarney/react-app-rewired/).

```bash
const { override, useBabelRc } = require("customize-cra");

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
);
```

```bash
  /* package.json */

  "scripts":
  {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```

## Cài đặt [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)

```bash
npm i --save-dev babel-plugin-module-resolver
```

### Tạo file `.babelrc` tại root

```bash
{
    "plugins": [
        [
            "module-resolver",
            {
                "alias": {
                    "~": "./src"
                }
            }
        ]
    ]
}
```

### Gợi ý đường dẫn: Tạo file `jsconfig.json` tại root

```bash
{
    "compilerOptions":
    {
        "baseUrl": ".",
        "paths":
        {
            "~/*": ["src/*"]
        }
    }
}
```

## Cài đặt cấu hình Pretier

-   install extension `Pretier`

### Tạo file `.prettierrc`

```bash
{
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "embeddedLanguageFormatting": "auto",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxSingleQuote": false,
    "printWidth": 120,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "all",
    "useTabs": false,
    "vueIndentScriptAndStyle": false
}
```

### Tạo file `.vscode/settings,js`

```bash
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Cấu hình sử dụng CSS/SASS

```bash
npm i -D sass
```

## Reset css

```bash
npm i --save normalize.css
```

### `@import 'normalize.css';` vào file `GlobalStyles.scss`

## Cài đặt react-router-dom

```bash
npm i react-router-dom
```

## Cài đặt `fontawesome`

```bash
npm i @fortawesome/fontawesome-svg-core@latest @fortawesome/free-brands-svg-icons@latest @fortawesome/free-regular-svg-icons@latest @fortawesome/free-solid-svg-icons@latest @fortawesome/react-fontawesome@latest

```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
