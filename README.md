This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# react-tdd-jotto

## cli
- $ yarn --dev add enzyme jest-enzyme enzyme-adapter-react-16
- $ yarn add prop-types
- $ yarn --dev add check-prop-types

## download and install randonWordServer
- https://github.com/flyrightsister/udemy-react-testing-projects/tree/master/random-word-server

## Start the random word server
- cd to ~/udemy-react-testing-projects/random-word-server
- npm start //Word server listening on port 3030!

## Course Repository on GitHub
[udemy-react-testing-projects](https://github.com/flyrightsister/udemy-react-testing-projects)

## Jotto-hooks-context challenges
- https://github.com/flyrightsister/udemy-react-testing-projects/blob/master/jotto-hooks-context/README.md

## Course Resources
- Course Resources: React Testing with Jest and Enzyme

- Note: These are in the order they are presented in the course, with the exception of putting the course repo first.

### GitHub Repository for the course
- https://github.com/flyrightsister/udemy-react-testing-projects

### Creating a React app from scratch
- https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658

- https://jestjs.io/docs/en/webpack.html#handling-static-assets

### Configuring Jest
- https://facebook.github.io/jest/docs/en/configuration.html

### Enzyme shallow wrapper documentation
- http://airbnb.io/enzyme/docs/api/shallow.html

### Enzyme shallow wrapper .find() documentation
- http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html

### Enzyme shallow wrapper selector documentation
- http://airbnb.io/enzyme/docs/api/selector.html

### Enzyme shallow wrapper state documentation
- http://airbnb.io/enzyme/docs/api/ShallowWrapper/setState.html
- http://airbnb.io/enzyme/docs/api/ShallowWrapper/state.html

### Jest expect API
- https://facebook.github.io/jest/docs/en/expect.html

### Bootstrap 4 “get started” docs
- https://getbootstrap.com/docs/4.0/getting-started/introduction/

### Enzyme shallow wrapper .prop() method
- http://airbnb.io/enzyme/docs/api/ShallowWrapper/prop.html

### Kent Dodds Blog Post for Context with Embedded State
- https://kentcdodds.com/blog/application-state-management-with-react

## JSDoc
I mention JSDoc many times during the course; I find it a great way to document JavaScript code. You can find documentation at http://usejsdoc.org

Common JSDoc features with React / Redux
These are the JSDoc constructions I use the most with React / Redux:

@module: http://usejsdoc.org/tags-module.html
@function: http://usejsdoc.org/tags-function.html
@param: http://usejsdoc.org/tags-param.html
@returns: http://usejsdoc.org/tags-returns.html
classes: http://usejsdoc.org/howto-es2015-classes.html
Editor Add-Ons
Most code editors have add-ons for JSDoc to make it easier to fill out, and they will create the outline (including parameters) for functions that have already been written. Here are examples for common editors:

Sublime: https://github.com/spadgos/sublime-jsdocs
Atom: https://atom.io/packages/docblockr
VSCode: No plug-in necessary; just type /** on the line above your function and hit TAB; your JSDoc skeleton will appear. (https://code.visualstudio.com/docs/languages/javascript#_jsdoc-support)
ESLint
It's also helpful to configure your linter to remind you when your JSDoc is invalid, or you've forgotten it entirely. You might look into the valid-jsdoc and require-jsdoc rules for ESLint.
